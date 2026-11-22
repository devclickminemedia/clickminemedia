'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from './components/redesign/Header';
import HeroSection from './components/redesign/HeroSection';
import SelectedWork from './components/redesign/SelectedWork';
import WhatWeOffer from './components/redesign/WhatWeOffer';
import { display, body } from './components/redesign/fonts';
import './components/redesign/redesign.css';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import TiltedCard, { TiltedCardLayer } from './components/TiltedCard';
import {
  ArrowUpRight,
  Zap,
} from 'lucide-react';

export default function Home() {
  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/clickminemedia/30min',
      });
    } else {
      window.open('https://calendly.com/clickminemedia/30min', '_blank');
    }
  };

  const servicesList = [
    {
      id: 'performance',
      title: 'Performance Marketing & Paid Ads',
      summary:
        'High-converting campaigns across Meta, Google, and TikTok. Engineered to acquire quality customers at scalable unit economics.',
      image: '/services/performance.jpg',
      features: ['Meta Ads Management', 'Google Ads Strategy', 'Audience Segmentation', 'Landing Page Optimization'],
    },
    {
      id: 'branding',
      title: 'Branding & Creative Direction',
      summary:
        'Distinctive visual identity, campaign design systems, and creative assets that demand attention and build lasting brand equity.',
      image: '/services/branding.jpg',
      features: ['Visual Direction', 'Brand Design Systems', 'Campaign Creatives', 'High-Impact Asset Kits'],
    },
    {
      id: 'web',
      title: 'Websites & High-Converting UX',
      summary:
        'Fast, responsive digital experiences crafted to turn visitors into buyers with frictionless navigation and clear value propositions.',
      image: '/services/web.jpg',
      features: ['Modern Conversion UX', 'Mobile-First Design', 'Speed Optimization', 'High-Converting Funnels'],
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      summary:
        'Sustainable organic search authority built on rigorous technical health, high-intent content, and smart on-page architecture.',
      image: '/services/seo.jpg',
      features: ['Technical Health Audits', 'High-Intent Search Mapping', 'On-Page Architecture', 'Content Relevance'],
    },
    {
      id: 'video',
      title: 'Video & Short-Form Content',
      summary:
        'Dynamic short-form video and platform-native content with punchy hooks designed to capture modern attention spans.',
      image: '/services/video.jpg',
      features: ['Short-Form Video Concepts', 'Viral Hook Pacing', 'Scriptwriting', 'Multi-Platform Formats'],
    },
    {
      id: 'strategy',
      title: 'Digital Growth Strategy',
      summary:
        'A comprehensive, data-driven masterplan aligning your channels, creative messaging, and customer acquisition funnels.',
      image: '/services/strategy.jpg',
      features: ['Funnel Architecture', 'Competitor Benchmarking', 'Attribution Modeling', 'Growth Roadmaps'],
    },
  ];

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
          <SelectedWork />
        </main>
      </div>

      <main>
        {/* ========================================================================= */}
        {/* Services Overview */}
        {/* ========================================================================= */}
        <section id="services" className="py-10 sm:py-14 px-6 sm:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2.5">
                Everything You Need to Scale
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                No disjointed tactics. We align paid media, organic authority, creative direction, and website conversion into one synchronized growth engine.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((svc) => {
                return (
                  <Link key={svc.id} href={`/services#${svc.id}`} className="block h-full" aria-label={`Learn more about ${svc.title}`}>
                  <TiltedCard
                    containerWidth="100%"
                    containerHeight="auto"
                    imageWidth="100%"
                    imageHeight="auto"
                    rotateAmplitude={8}
                    scaleOnHover={1.02}
                    glare={0.3}
                    shadow={0.4}
                    radius={24}
                    intro={false}
                    className="w-full h-full flex"
                  >
                    <div className="w-full h-full min-h-[460px] rounded-[24px] overflow-hidden flex flex-col justify-end group relative bg-slate-950 shadow-md border border-slate-800/80 transition-colors duration-300">
                      {/* Rich Imagery Full Background Layer */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out opacity-90"
                        style={{ backgroundImage: `url(${svc.image})` }}
                      />

                      {/* Editorial Dark Cinematic Gradient: Preserves top artwork in full vibrant brilliance while softly shading down to deep obsidian black */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent pointer-events-none" />

                      {/* Top subtle highlight rim */}
                      <div className="absolute inset-x-0 top-0 h-px bg-white/20 pointer-events-none" />

                      {/* Card Content pinned elegantly at the bottom */}
                      <div className="relative z-10 p-7 flex flex-col justify-end">
                        <h3 className="text-2xl font-semibold text-white leading-snug mb-5 group-hover:text-[#FF751F] transition-colors">
                          {svc.title}
                        </h3>

                        <div className="pt-4 border-t border-white/10">
                          <ul className="space-y-2.5">
                            {svc.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="text-xs font-medium text-slate-200 flex items-center gap-2.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF751F] shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TiltedCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* Streamlined Process: How We Work */}
        {/* ========================================================================= */}
        <section id="process" className="py-10 sm:py-14 px-6 sm:px-8 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-2.5">
                High Speed. Zero Friction.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                How we take brands from first conversation to full campaign launch and relentless scaling.
              </p>
            </div>

            {/* 4 Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
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
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-3 tracking-tight">
                  Let&apos;s build something together
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  Tell us where your brand is today and what you want to achieve. We&apos;ll formulate a customized plan to accelerate your growth.
                </p>

                <div className="space-y-2.5 pt-3.5 border-t border-slate-200/80">
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
                    href="https://calendly.com/clickminemedia/30min"
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
              <div className="lg:col-span-7">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
