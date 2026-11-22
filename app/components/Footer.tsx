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
    <footer className="border-t border-slate-200/80 bg-white text-slate-600 pt-14 pb-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
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
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#performance" className="hover:text-slate-900 transition-colors">Performance & Paid Ads</Link>
              </li>
              <li>
                <Link href="/services#branding" className="hover:text-slate-900 transition-colors">Branding & Creative</Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-slate-900 transition-colors">Websites & UX</Link>
              </li>
              <li>
                <Link href="/services#seo" className="hover:text-slate-900 transition-colors">Search Engine Optimization</Link>
              </li>
              <li>
                <Link href="/services#video" className="hover:text-slate-900 transition-colors">Video & Short-Form</Link>
              </li>
              <li>
                <Link href="/services#strategy" className="hover:text-slate-900 transition-colors">Growth Strategy</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-slate-900 text-sm font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-slate-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-slate-900 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-slate-900 text-sm font-medium mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-medium text-slate-900 hover:text-[#FF751F] transition-colors group"
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
                    className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-[#FF751F] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#FF751F]" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
              <li className="text-xs text-slate-500">
                Partnering with brands worldwide.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Click Mine Media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
