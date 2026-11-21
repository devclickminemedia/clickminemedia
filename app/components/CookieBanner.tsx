'use client';

import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const COOKIE = 'cmm_cookie_consent';

export function getConsent(): 'accepted' | 'declined' | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  return (m?.[1] as 'accepted' | 'declined') ?? null;
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getConsent()) setShow(true);
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    // remember the choice for 6 months
    document.cookie = `${COOKIE}=${value}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed z-50 inset-x-3 bottom-[84px] md:bottom-6 md:left-6 md:right-auto md:w-[380px] animate-[cookieIn_.3s_ease-out]"
    >
      <div className="rounded-2xl bg-white border border-[#1f1b16]/10 shadow-[0_12px_32px_-12px_rgba(31,27,22,0.3)] p-4">
        <div className="flex gap-3 mb-4">
          <span className="shrink-0 w-9 h-9 rounded-xl bg-[#f7f4ee] flex items-center justify-center">
            <Cookie className="w-[18px] h-[18px] text-[#C2410C]" strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-[15px] font-medium text-[#1f1b16] mb-0.5">We use cookies</p>
            <p className="text-[13px] leading-relaxed text-[#5e554a]">
              They keep the site working and help us see what visitors find useful.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => choose('declined')}
            className="flex-1 h-10 rounded-[10px] bg-[#f7f4ee] hover:bg-[#efe9df] text-[#1f1b16] text-sm font-medium transition-colors"
          >
            Only necessary
          </button>
          <button
            onClick={() => choose('accepted')}
            className="flex-1 h-10 rounded-[10px] bg-[#1f1b16] hover:bg-[#2e2922] text-white text-sm font-medium transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
