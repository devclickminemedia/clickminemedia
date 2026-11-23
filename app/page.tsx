'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from './components/redesign/Header';
import HeroSection from './components/redesign/HeroSection';
import ServicesShowcase from './components/redesign/SelectedWork';
import WhatWeOffer from './components/redesign/WhatWeOffer';
import ScrollReveal from './components/redesign/ScrollReveal';
import { display, body } from './components/redesign/fonts';
import './components/redesign/redesign.css';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import FaqList from './components/FaqList';
import { faqSections, faqJsonLd } from './lib/faqs';
import { serviceHref } from './lib/services';
import {
  ArrowUpRight,
  Zap,
} from 'lucide-react';

export default function Home() {
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

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Direction',
      desc: 'We analyze your market, audience, and funnels to identify where your biggest revenue opportunities live.',
    },
    {
      step: '02',
      title: 'The Growth Blueprint',
      desc: 'We map out a targeted plan specifying creative hooks, conversion funnels, and precise channel allocations.',
    },
    {
      step: '03',
      title: 'Build & Launch',
      desc: 'We produce campaign assets, landing pages, and creatives with rapid velocity and publish them to market.',
    },
    {
      step: '04',
      title: 'Relentless Scale',
      desc: 'We analyze real performance data daily, eliminating what underperforms and doubling down on what drives profit.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-slate-900 selection:bg-[#FF4B43] selection:text-white">
      {/* Phase 01 redesign (nav + hero + selected work). To remove: delete components/redesign and restore this file from main. */}
      <div className={`rd-root ${display.variable} ${body.variable}`}>
        <Header />
        <main id="home">
          <HeroSection />
          <WhatWeOffer />
          <ServicesShowcase />
        </main>
      </div>

      <main>
        {/* ========================================================================= */}
        {/* Streamlined Process: How We Work */}
        {/* ========================================================================= */}
        <section id="process" className="py-10 sm:py-14 px-6 sm:px-8 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-8" data-reveal="up">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-2.5">
                High Speed. Zero Friction.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                How we take brands from first conversation to full campaign launch and relentless scaling.
              </p>
            </div>

            {/* 4 Process Steps */}
            <div className="rv-process grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-stagger>
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rv-step p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-[box-shadow,transform] duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-semibold text-slate-200 block mb-2 font-mono">
                      {step.step}
                    </span>
                    <h3 className="text-base font-medium text-slate-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#FF751F]" />
                    <span className="text-[11px] font-semibold text-slate-500">Fast Execution</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* Final Conversion Section & Form */}
        {/* ========================================================================= */}
        <section id="contact" className="py-10 sm:py-14 px-6 sm:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Conversion Copy */}
              <div className="lg:col-span-5" data-reveal="left">
                <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-3 tracking-tight">
                  Let&apos;s build something together
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  Tell us where your brand is today and what you want to achieve. We&apos;ll formulate a customized plan to accelerate your growth.
                </p>

                <div className="space-y-2.5 pt-3.5 border-t border-slate-200/80" data-reveal-stagger>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FF751F]" />
                    <span>Cross-channel strategy tailored to your margins</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FF4B43]" />
                    <span>Creative production that turns views into customers</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E50069]" />
                    <span>Fast turnaround with dedicated execution</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80">
                  <p className="text-xs font-medium text-slate-500 mb-2.5">
                    Prefer direct booking?
                  </p>
                  <a
                    href="https://calendly.com/meet-clickminemedia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition-colors cursor-pointer group"
                  >
                    <span>Schedule 30-Min Call on Calendly</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF751F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Sleek Light Consultation Form */}
              <div className="lg:col-span-7" data-reveal="scale">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
                  <h3 className="text-2xl font-medium text-slate-900 mb-1">
                    Get a call back
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 font-normal">
                    Leave your details and we&apos;ll get in touch within one working day.
                  </p>

                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 sm:py-14 px-6 sm:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqSections[0].items.slice(0, 6))) }} />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-[#1f1b16]">
            <div className="lg:col-span-4" data-reveal="left">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-3">Frequently asked questions</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Quick answers about how we work, pricing and results.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-[15px] font-medium hover:text-[#C2410C] transition-colors"
              >
                See all questions <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
            <div className="lg:col-span-8" data-reveal="up">
              <FaqList items={faqSections[0].items.slice(0, 6)} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div data-reveal="fade"><Footer /></div>
      <ScrollReveal />
    </div>
  );
}
