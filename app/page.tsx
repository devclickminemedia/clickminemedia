'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechText from './components/TechText';
import TiltedCard, { TiltedCardLayer } from './components/TiltedCard';
import {
  ArrowUpRight,
  TrendingUp,
  Search,
  Palette,
  Layout,
  Video,
  Target,
  Zap,
  Check,
  Send,
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

  // Form submission state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: [] as string[],
    goals: '',
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setFormState((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.company.trim()) {
      setFormError('Please complete your name, work email, and company.');
      return;
    }
    if (!formState.consent) {
      setFormError('Please agree to share your details before submitting.');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
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
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-[#FF4B43] selection:text-white">
      {/* Header and Navigation */}
      <Navbar />

      <main id="home">
        {/* ========================================================================= */}
        {/* Hero Section */}
        {/* ========================================================================= */}
        <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-8 overflow-hidden bg-grid-pattern">
          {/* Ambient Brand Gradient Auroras */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-gradient-to-tr from-[#FF751F]/15 via-[#FF4B43]/15 to-[#E50069]/15 blur-[130px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/2 right-[-100px] w-96 h-96 bg-[#FF751F]/10 blur-[110px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
            {/* H1 SEO Headline */}
            <h1 className="sr-only">Make Your Brand Impossible to Ignore.</h1>

            {/* Interactive TechText Headline with Existing Brand Colors */}
            <div
              style={{ width: '100%', height: '300px', position: 'relative' }}
              className="max-w-4xl mx-auto mb-2"
            >
              <TechText
                text={"Make Your Brand\nImpossible to Ignore."}
                fontWeight={900}
                fontSize={120}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily="Rubik"
                letterSpacing={-0.03}
                accentColor="#FF751F"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="#0F172A"
                align="center"
                draggable
                sweep
              />
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal mb-6">
              We craft high-growth digital marketing, scroll-stopping creative, and performance engines that turn audience attention into explosive revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-7">
              <a
                href="https://calendly.com/clickminemedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={openCalendly}
                id="hero-primary-cta"
                className="btn-press w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF751F] via-[#FF4B43] to-[#E50069] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:brightness-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Let&apos;s Talk Growth
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                id="hero-secondary-cta"
                className="btn-press w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-semibold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Quick Metrics / Impact Highlights */}
            <div className="w-full max-w-4xl pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                  <span className="text-gradient">10×</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1 uppercase tracking-wider">Average ROAS Focus</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                  <span className="text-gradient">100%</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1 uppercase tracking-wider">Tailored Strategy</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-gradient">Omni</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1 uppercase tracking-wider">Channel Synergy</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-gradient">Full-Funnel</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1 uppercase tracking-wider">Creative + Analytics</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* Services Overview */}
        {/* ========================================================================= */}
        <section id="services" className="py-10 sm:py-14 px-6 sm:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2.5">
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
                  <TiltedCard
                    key={svc.id}
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
                    <div className="w-full h-full min-h-[460px] rounded-[24px] overflow-hidden flex flex-col justify-end group relative bg-slate-950 shadow-md border border-slate-800/80 transition-all duration-300">
                      {/* Rich Imagery Full Background Layer */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                        style={{ backgroundImage: `url(${svc.image})` }}
                      />

                      {/* Editorial Dark Cinematic Gradient: Preserves top artwork in full vibrant brilliance while softly shading down to deep obsidian black */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent pointer-events-none" />

                      {/* Top subtle highlight rim */}
                      <div className="absolute inset-x-0 top-0 h-px bg-white/20 pointer-events-none" />

                      {/* Card Content pinned elegantly at the bottom */}
                      <div className="relative z-10 p-7 flex flex-col justify-end">
                        <h3 className="text-2xl font-black text-white leading-snug mb-5 group-hover:text-[#FF751F] transition-colors drop-shadow-sm">
                          {svc.title}
                        </h3>

                        <div className="pt-4 border-t border-white/10">
                          <ul className="space-y-2.5">
                            {svc.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="text-xs font-medium text-slate-200 flex items-center gap-2.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF751F] shrink-0 shadow-[0_0_8px_#FF751F]" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TiltedCard>
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
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2.5">
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
                    <span className="text-3xl font-black text-slate-200 block mb-2 font-mono">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
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
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-3 tracking-tight">
                  Let&apos;s Build Something{' '}
                  <span className="text-gradient">Iconic.</span>
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
                  <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 mb-2.5">
                    Prefer direct booking?
                  </p>
                  <a
                    href="https://calendly.com/clickminemedia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition-all cursor-pointer group"
                  >
                    <span>Schedule 30-Min Call on Calendly</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF751F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Sleek Light Consultation Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Tell Us About Your Brand
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 font-normal">
                    Share your requirements and we&apos;ll schedule a growth strategy session.
                  </p>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-orange-50 border border-orange-200 text-center animate-fadeIn">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF751F] to-[#E50069] flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        Enquiry Received
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                        Thanks for reaching out! Our team is reviewing your project details and will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      {formError && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                          {formError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Company or Brand Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Brand name"
                            value={formState.company}
                            onChange={(e) =>
                              setFormState({ ...formState, company: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Website / Profile (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="https://yourbrand.com"
                            value={formState.website}
                            onChange={(e) =>
                              setFormState({ ...formState, website: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Services Selection */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                          Services you are interested in:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Paid Ads & Performance',
                            'Branding & Design',
                            'Websites & Funnels',
                            'SEO Growth',
                            'Short-Form Video',
                            'Growth Strategy',
                          ].map((svc) => {
                            const isSelected = formState.services.includes(svc);
                            return (
                              <button
                                type="button"
                                key={svc}
                                onClick={() => toggleService(svc)}
                                className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-[#FF751F] to-[#E50069] border-transparent text-white font-medium shadow-sm'
                                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                {svc}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Goals Description */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Briefly describe your goals
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us what you want to achieve, timelines, or targets..."
                          value={formState.goals}
                          onChange={(e) =>
                            setFormState({ ...formState, goals: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent-check"
                          checked={formState.consent}
                          onChange={(e) =>
                            setFormState({ ...formState, consent: e.target.checked })
                          }
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#FF751F] focus:ring-[#FF751F]"
                        />
                        <label htmlFor="consent-check" className="text-xs text-slate-500 leading-normal">
                          I agree to share my details for this inquiry.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF751F] via-[#FF4B43] to-[#E50069] text-white font-bold text-sm shadow-xl shadow-orange-500/20 hover:opacity-95 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
                      >
                        Start a Conversation
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
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
