'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/meet-clickminemedia/30min',
      });
    } else {
      window.open('https://calendly.com/meet-clickminemedia/30min', '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Click Mine Media Logo */}
        <Link href="/" id="nav-logo" className="flex items-center gap-3 group">
          <div className="relative h-10 w-36 sm:h-11 sm:w-44 flex items-center">
            <Image
              src="/cmm-logo.png"
              alt="Click Mine Media Logo"
              width={180}
              height={44}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="/services"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Services
          </a>
          <a
            href="/#process"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Process
          </a>
          <a
            href="/#contact"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Header Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://calendly.com/meet-clickminemedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openCalendly}
            id="nav-cta-btn"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer"
          >
            <span className="absolute inset-0 bg-[#1f1b16]/15" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:bg-slate-50">
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4 text-[#FF4B43] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-5 animate-fadeIn">
          <a
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-800 hover:text-[#FF751F] transition-colors"
          >
            Services
          </a>
          <a
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-800 hover:text-[#FF751F] transition-colors"
          >
            Process
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-800 hover:text-[#FF751F] transition-colors"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="https://calendly.com/meet-clickminemedia/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                openCalendly(e);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-[10px] bg-[#1f1b16] hover:bg-[#2e2922] text-white font-semibold text-center cursor-pointer"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
