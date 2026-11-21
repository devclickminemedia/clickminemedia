'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';
import { getConsent } from './CookieBanner';

const DISMISS_KEY = 'cmm_lead_popup_closed';
const DELAY_MS = 8000; // when the cookie choice was made on an earlier visit
const AFTER_COOKIE_MS = 1500; // after the cookie banner is closed

// Bottom-sheet lead form, phones only. Opens once per visit after a short delay.
export default function MobileLeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/thank-you') return;
    if (window.matchMedia('(min-width: 768px)').matches) return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    let t: ReturnType<typeof setTimeout> | undefined;
    // Cookie choice already made: open after the usual delay
    if (getConsent()) {
      t = setTimeout(() => setOpen(true), DELAY_MS);
      return () => clearTimeout(t);
    }
    // Otherwise wait until the cookie banner is closed, then open shortly after
    const onConsent = () => {
      t = setTimeout(() => setOpen(true), AFTER_COOKIE_MS);
    };
    window.addEventListener('cookie-consent', onConsent, { once: true });
    return () => {
      window.removeEventListener('cookie-consent', onConsent);
      clearTimeout(t);
    };
  }, [pathname]);

  // lock page scroll while open, close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(DISMISS_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
      <div className="absolute inset-0 bg-[#1f1b16]/40 animate-[fadeIn_.2s_ease-out]" onClick={close} />
      <div
        className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white px-6 pt-3 animate-[sheetUp_.3s_cubic-bezier(.2,.8,.2,1)]"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)' }}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#1f1b16]/15" />
        <button
          onClick={close}
          aria-label="Close form"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f7f4ee] hover:bg-[#efe9df] flex items-center justify-center text-[#1f1b16] transition-colors"
        >
          <X className="w-[18px] h-[18px]" strokeWidth={1.75} />
        </button>
        <h2 id="lead-popup-title" className="text-xl font-medium text-[#1f1b16] pr-10 mb-1">
          Get a free call back
        </h2>
        <p className="text-sm text-[#5e554a] mb-5">
          Leave your details and we&apos;ll get in touch within one working day.
        </p>
        <LeadForm idPrefix="popup" onSuccess={close} />
      </div>
    </div>
  );
}
