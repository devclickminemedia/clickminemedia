import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '../../lib/rateLimit';

export const runtime = 'nodejs';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const MAX_BODY_BYTES = 2_000;
const MIN_FILL_MS = 2_500; // humans take longer than this to fill three fields
const HOUR = 60 * 60 * 1000;

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\r\n\t\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';

const deny = (status: number, error: string, headers?: Record<string, string>) =>
  NextResponse.json({ error }, { status, headers });

export async function POST(req: Request) {
  // 1. Only accept requests sent from this website
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (!origin || !host || new URL(origin).host !== host) {
    return deny(403, 'Request not allowed.');
  }

  // 2. Rate limit by IP: 5 submissions per 15 minutes, 20 per day
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
  for (const [limit, win] of [[5, 15 * 60 * 1000], [20, 24 * HOUR]] as const) {
    const r = rateLimit(`ip:${ip}:${win}`, limit, win);
    if (!r.ok) {
      return deny(429, 'Too many requests. Please try again later or call us directly.', { 'Retry-After': String(r.retryAfter) });
    }
  }

  // 3. Reject oversized bodies before parsing
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return deny(413, 'Request too large.');

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error();
  } catch {
    return deny(400, 'Invalid request.');
  }

  // 4. Bot traps: hidden honeypot field filled, or form submitted impossibly fast.
  //    Pretend success so bots don't learn they were caught.
  const startedAt = Number(body.startedAt);
  if (clean(body.company_website, 200) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  // 5. Validate and sanitise (strips line breaks, which blocks email header injection)
  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 200).toLowerCase();

  if (
    name.length < 2 ||
    !/^[\p{L}\p{M} .'-]+$/u.test(name) ||
    !/^\+?[\d\s()-]{7,20}$/.test(phone) ||
    !/^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(email)
  ) {
    return deny(400, 'Please check your name, phone number and email.');
  }

  // 6. Limit repeat submissions for the same email (stops using the form to spam someone's inbox)
  if (!rateLimit(`email:${email}`, 2, 24 * HOUR).ok) {
    return deny(429, 'We already have your details. Our team will be in touch soon.');
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_NOTIFY_TO, MAIL_FROM_NAME } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_NOTIFY_TO) {
    console.error('Lead email not sent: SMTP env vars are missing');
    return deny(500, 'Something went wrong. Please try again or call us directly.');
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const from = `"${MAIL_FROM_NAME || 'Click Mine Media'}" <${SMTP_USER}>`;
  const firstName = name.split(' ')[0];
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const safe = { name: esc(name), first: esc(firstName), phone: esc(phone), email: esc(email) };
  const telHref = esc(phone.replace(/[^\d+]/g, ''));
  const waHref = `https://wa.me/${phone.replace(/\D/g, '')}`;

  try {
    await Promise.all([
      // 1. Lead alert to the team
      transporter.sendMail({
        from,
        to: LEAD_NOTIFY_TO,
        replyTo: email,
        subject: `New website lead: ${name}`,
        text: [
          'NEW WEBSITE LEAD',
          '',
          'A visitor has submitted the contact form on the Click Mine Media website.',
          '',
          `Name:      ${name}`,
          `Phone:     ${phone}`,
          `Email:     ${email}`,
          `Received:  ${time} IST`,
          '',
          'Please respond within one working day. Replying to this email will reach the lead directly.',
          '',
          '--',
          'Click Mine Media | Website lead notification',
        ].join('\n'),
        html: layout({
          preheader: `${safe.name} submitted the contact form. Phone: ${safe.phone}`,
          eyebrow: 'New website lead',
          title: `${safe.name} would like a call back`,
          body: `
            <p style="margin:0 0 24px;">A visitor has submitted the contact form on the Click Mine Media website. Their details are below.</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e7e2d9;border-radius:8px;">
              ${row('Name', safe.name)}
              ${row('Phone', `<a href="tel:${telHref}" style="color:#1f1b16;text-decoration:none;">${safe.phone}</a>`)}
              ${row('Email', `<a href="mailto:${safe.email}" style="color:#1f1b16;text-decoration:none;">${safe.email}</a>`)}
              ${row('Received', `${time} IST`, true)}
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
              <tr>
                <td style="padding-right:8px;">${button(`tel:${telHref}`, 'Call now', '#1f1b16')}</td>
                <td style="padding-right:8px;">${button(waHref, 'WhatsApp', '#1a8f4a')}</td>
                <td>${button(`mailto:${safe.email}`, 'Reply by email', '#ffffff', '#1f1b16', '#d6d0c4')}</td>
              </tr>
            </table>
            <p style="margin:28px 0 0;color:#6b645a;font-size:14px;">Please respond within one working day. Replying to this email will reach the lead directly.</p>`,
          footer: 'This is an automated notification from the contact form on clickminemedia.com.',
        }),
      }),
      // 2. Confirmation to the visitor
      transporter.sendMail({
        from,
        to: email,
        replyTo: process.env.SUPPORT_EMAIL || 'support@clickminemedia.com',
        subject: 'We have received your details | Click Mine Media',
        text: [
          `Dear ${firstName},`,
          '',
          'Thank you for contacting Click Mine Media. We have received your details and a member of our team will get in touch with you within one working day.',
          '',
          'What happens next',
          '',
          '1. We review your details.',
          '2. We contact you by phone or WhatsApp at a convenient time.',
          '3. We discuss your goals in a short, free consultation and recommend the right next steps.',
          '',
          'For your reference, these are the details you shared with us:',
          '',
          `Name:   ${name}`,
          `Phone:  ${phone}`,
          `Email:  ${email}`,
          '',
          'If any of these details are incorrect, simply reply to this email or write to support@clickminemedia.com.',
          '',
          'Kind regards,',
          'Team Click Mine Media',
          '',
          '--',
          'You are receiving this email because you submitted the contact form on clickminemedia.com.',
        ].join('\n'),
        html: layout({
          preheader: 'Thank you for contacting Click Mine Media. Our team will be in touch within one working day.',
          eyebrow: 'Enquiry received',
          title: 'Thank you for getting in touch',
          body: `
            <p style="margin:0 0 16px;">Dear ${safe.first},</p>
            <p style="margin:0 0 28px;">Thank you for contacting Click Mine Media. We have received your details and a member of our team will get in touch with you within one working day.</p>
            <p style="margin:0 0 12px;font-weight:600;color:#1f1b16;">What happens next</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 28px;">
              ${step(1, 'We review your details', 'Our team looks at your enquiry and prepares for the conversation.')}
              ${step(2, 'We contact you', 'We reach out by phone or WhatsApp at a convenient time.')}
              ${step(3, 'We plan together', 'A short, free consultation about your goals and the right next steps.', true)}
            </table>
            <p style="margin:0 0 12px;font-weight:600;color:#1f1b16;">Your details</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e7e2d9;border-radius:8px;">
              ${row('Name', safe.name)}
              ${row('Phone', safe.phone)}
              ${row('Email', safe.email, true)}
            </table>
            <p style="margin:16px 0 28px;color:#6b645a;font-size:14px;">If any of these details are incorrect, simply reply to this email.</p>
            <p style="margin:0;">Kind regards,<br />Team Click Mine Media</p>`,
          footer: 'You are receiving this email because you submitted the contact form on clickminemedia.com.',
        }),
      }),
    ]);
  } catch (err) {
    console.error('Lead email failed', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json({ error: 'Could not send right now. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

/* ---------- Email building blocks (table-based, inline styles for email clients) ---------- */

function layout({ preheader, eyebrow, title, body, footer }: { preheader: string; eyebrow: string; title: string; body: string; footer: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f4f1ea;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e7e2d9;border-radius:12px;">
        <tr><td style="padding:28px 36px;border-bottom:1px solid #eee9e0;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:#1f1b16;letter-spacing:0.2px;">Click Mine Media</span>
        </td></tr>
        <tr><td style="padding:36px 36px 40px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#3d3830;">
          <p style="margin:0 0 8px;font-size:13px;color:#b5470f;font-weight:600;">${eyebrow}</p>
          <h1 style="margin:0 0 24px;font-size:22px;line-height:1.3;color:#1f1b16;font-weight:600;">${title}</h1>
          ${body}
        </td></tr>
        <tr><td style="padding:20px 36px;border-top:1px solid #eee9e0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#8a8378;">
          ${footer}<br />Click Mine Media &middot; Digital marketing, branding and websites
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string, last = false) {
  const border = last ? '' : 'border-bottom:1px solid #eee9e0;';
  return `<tr>
    <td style="padding:12px 16px;${border}width:110px;font-size:13px;color:#8a8378;vertical-align:top;">${label}</td>
    <td style="padding:12px 16px;${border}font-size:15px;color:#1f1b16;font-weight:600;">${value}</td>
  </tr>`;
}

function step(n: number, title: string, desc: string, last = false) {
  return `<tr>
    <td style="width:36px;vertical-align:top;padding:0 0 ${last ? 0 : 16}px;">
      <div style="width:24px;height:24px;line-height:24px;border-radius:12px;background:#f4f1ea;color:#1f1b16;font-size:12px;font-weight:600;text-align:center;">${n}</div>
    </td>
    <td style="vertical-align:top;padding:2px 0 ${last ? 0 : 16}px;">
      <span style="color:#1f1b16;font-weight:600;">${title}</span><br />
      <span style="color:#6b645a;font-size:14px;">${desc}</span>
    </td>
  </tr>`;
}

function button(href: string, label: string, bg: string, color = '#ffffff', border = bg) {
  return `<a href="${href}" style="display:inline-block;padding:11px 20px;border-radius:8px;background:${bg};color:${color};border:1px solid ${border};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;text-decoration:none;">${label}</a>`;
}
