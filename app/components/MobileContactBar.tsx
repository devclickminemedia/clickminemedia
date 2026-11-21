'use client';

import { Phone } from 'lucide-react';
import { PHONE, WHATSAPP, WHATSAPP_MESSAGE } from '../lib/contact';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.32 11.32 0 0 0 12.05.72C5.8.72.72 5.8.72 12.05c0 2 .52 3.95 1.52 5.66L.62 23.28l5.7-1.5a11.3 11.3 0 0 0 5.42 1.38h.01c6.24 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8z" />
  </svg>
);

// Floating Call / WhatsApp dock, phones only
export default function MobileContactBar() {
  return (
    <div
      className="md:hidden fixed inset-x-3 z-40"
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
    >
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#1f1b16]/10 shadow-[0_8px_24px_-8px_rgba(31,27,22,0.25)]">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call us"
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#1f1b16] text-white text-[15px] font-medium active:scale-[0.97] transition-transform"
        >
          <Phone className="w-[18px] h-[18px]" strokeWidth={1.75} />
          Call now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#1fa855] text-white text-[15px] font-medium active:scale-[0.97] transition-transform"
        >
          <WhatsAppIcon className="w-[18px] h-[18px]" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
