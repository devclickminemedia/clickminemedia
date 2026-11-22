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
  { label: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  { label: '+91 92097 74877', href: `tel:${PHONE}`, Icon: Phone, external: false },
  { label: 'WhatsApp: +91 92097 74877', href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, Icon: MessageCircle, external: true },
  { label: 'Instagram', href: `https://instagram.com/${INSTAGRAM}`, Icon: Instagram, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white text-slate-600 pt-12 sm:pt-14 pb-[calc(env(safe-area-inset-bottom)+96px)] md:pb-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
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
          <div>
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
          <div>
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
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-slate-900 text-sm font-medium mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-1 sm:space-y-3 text-[15px] sm:text-sm">
              <li>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 py-1.5 sm:py-0 font-medium text-slate-900 hover:text-[#FF751F] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF751F]" />
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              {contactLinks.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 py-1.5 sm:py-0 font-medium text-slate-700 hover:text-[#FF751F] transition-colors break-all"
                  >
                    <Icon className="w-4 h-4 text-[#FF751F]" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:pt-0 text-xs text-slate-500">
                Partnering with brands worldwide.
              </li>
            </ul>
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
