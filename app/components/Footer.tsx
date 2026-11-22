import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

// lucide-react no longer ships brand icons, so Instagram is drawn inline
const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

import { PHONE, WHATSAPP, WHATSAPP_MESSAGE, INSTAGRAM, EMAIL } from '../lib/contact';

const contactLinks = [
  { title: 'Email', label: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  { title: 'Call', label: '+91 92097 74877', href: `tel:${PHONE}`, Icon: Phone, external: false },
  { title: 'WhatsApp', label: 'Chat with us', href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, Icon: MessageCircle, external: true },
  { title: 'Instagram', label: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}`, Icon: Instagram, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white text-slate-600 pt-12 sm:pt-14 pb-[calc(env(safe-area-inset-bottom)+96px)] md:pb-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-44">
                <Image
                  src="/cmm-logo.png"
                  alt="Click Mine Media Logo"
                  width={180}
                  height={44}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Turning brand attention into explosive revenue through smart performance marketing, standout creative, and high-converting digital experiences.
            </p>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 text-sm font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2.5 text-[15px] sm:text-sm">
              <li>
                <Link href="/services/performance-marketing" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Performance & Paid Ads</Link>
              </li>
              <li>
                <Link href="/services/branding" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Branding & Creative</Link>
              </li>
              <li>
                <Link href="/services/website-design" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Websites & UX</Link>
              </li>
              <li>
                <Link href="/services/seo" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Search Engine Optimization</Link>
              </li>
              <li>
                <Link href="/services/video-content" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Video & Short-Form</Link>
              </li>
              <li>
                <Link href="/services/growth-strategy" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">Growth Strategy</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 text-sm font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-1 sm:space-y-2.5 text-[15px] sm:text-sm">
              <li>
                <a href="/" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#process" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/blog" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="inline-block py-1.5 sm:py-0 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="col-span-2 lg:col-span-4 max-lg:relative max-lg:overflow-hidden max-lg:rounded-3xl max-lg:bg-slate-900 max-lg:p-5 max-lg:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.6)]">
            <div aria-hidden className="lg:hidden pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[#FF751F]/35 blur-3xl" />
            <h4 className="relative max-lg:text-white max-lg:text-2xl max-lg:font-semibold max-lg:tracking-tight max-lg:mb-1 text-slate-900 text-sm font-medium mb-4">Get in Touch</h4>
            <p className="relative lg:hidden text-sm text-white/60 mb-5">Talk to us about your next campaign.</p>
            <a
              href="/#contact"
              className="relative group flex items-center justify-between gap-3 rounded-2xl bg-slate-900 max-lg:bg-[#FF751F] px-5 py-4 text-white hover:bg-[#FF751F] transition-colors mb-3"
            >
              <span>
                <span className="block text-[15px] font-medium">Start a conversation</span>
                <span className="block text-xs text-white/60 group-hover:text-white/80">Tell us about your project</span>
              </span>
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white/10 shrink-0">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
            <ul className="relative divide-y divide-slate-200/80 max-lg:divide-white/10 overflow-hidden rounded-2xl border border-slate-200/80 max-lg:border-white/10 bg-[#fcfaf7] max-lg:bg-white/5">
              {contactLinks.map(({ title, label, href, Icon, external }) => (
                <li key={title}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3.5 px-4 py-3.5 hover:bg-white max-lg:hover:bg-white/10 transition-colors"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-[#FF751F]/10 max-lg:bg-[#FF751F]/20 text-[#FF751F] shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-slate-400 max-lg:text-white/50">{title}</span>
                      <span className="block text-sm font-medium text-slate-800 max-lg:text-white truncate group-hover:text-[#FF751F] transition-colors">{label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#FF751F] shrink-0 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="relative mt-4 text-xs text-slate-500 max-lg:text-white/50">Partnering with brands worldwide.</p>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Click Mine Media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
