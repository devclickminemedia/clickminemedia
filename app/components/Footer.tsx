import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white text-slate-600 pt-14 pb-10 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-to-b from-[#FF751F]/10 via-[#E50069]/5 to-transparent blur-3xl pointer-events-none" />

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
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Performance & Paid Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Creative & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  High-Converting Web & UX
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Social & Viral Content
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-slate-900 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-medium text-slate-900 hover:text-[#FF751F] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF751F]" />
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
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
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
