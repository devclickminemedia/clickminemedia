'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  image: string;
  oneLiner: string;
  whatItIs: string;
  whatWeDo: { name: string; desc: string }[];
  youGet: string[];
  goodFor: string;
};

const services: Service[] = [
  {
    id: 'performance',
    title: 'Performance Marketing & Paid Ads',
    image: '/services/performance.jpg',
    oneLiner: 'We run ads that bring you real customers — not just clicks.',
    whatItIs:
      'Paid ads are the ads you see on Instagram, Facebook, Google and TikTok. We create and manage these ads for you, show them to the right people, and keep improving them so every rupee or dollar you spend works harder.',
    whatWeDo: [
      { name: 'Meta Ads Management', desc: 'We set up and run your Facebook and Instagram ads from start to finish.' },
      { name: 'Google Ads Strategy', desc: 'We put you in front of people who are already searching for what you sell.' },
      { name: 'Audience Segmentation', desc: 'We split your audience into groups so each group sees the message that suits them best.' },
      { name: 'Landing Page Optimization', desc: 'We improve the page people land on after clicking, so more of them actually buy or sign up.' },
    ],
    youGet: ['More sales and leads from your ad budget', 'Clear reports in plain language', 'Constant testing to lower your cost per customer'],
    goodFor: 'Businesses that want faster growth and are ready to invest in advertising.',
  },
  {
    id: 'branding',
    title: 'Branding & Creative Direction',
    image: '/services/branding.jpg',
    oneLiner: 'We give your brand a look and feel people remember.',
    whatItIs:
      'Your brand is how people see and feel about your business — your logo, colours, fonts and the style of your posts and ads. We shape all of this so your business looks professional, consistent and easy to recognise everywhere.',
    whatWeDo: [
      { name: 'Visual Direction', desc: 'We decide the overall style — colours, mood and imagery — that fits your business.' },
      { name: 'Brand Design Systems', desc: 'We build a simple rulebook so everything you publish looks like it belongs together.' },
      { name: 'Campaign Creatives', desc: 'We design eye-catching graphics for your ads, posts and promotions.' },
      { name: 'High-Impact Asset Kits', desc: 'We hand you ready-to-use templates and files so your team can create on-brand content quickly.' },
    ],
    youGet: ['A brand that looks trustworthy and premium', 'Consistent visuals across every channel', 'Ready-made design files and templates'],
    goodFor: 'New businesses, or brands that feel outdated or inconsistent.',
  },
  {
    id: 'web',
    title: 'Websites & High-Converting UX',
    image: '/services/web.jpg',
    oneLiner: 'We build websites that are fast, easy to use and turn visitors into customers.',
    whatItIs:
      'Your website is often the first place people meet your business. We design and build sites that load quickly, look great on phones, and make it simple for visitors to understand what you offer and take action.',
    whatWeDo: [
      { name: 'Modern Conversion UX', desc: 'We arrange your pages so visitors easily find what they need and click "buy" or "contact".' },
      { name: 'Mobile-First Design', desc: 'We design for phones first, since that is where most of your visitors come from.' },
      { name: 'Speed Optimization', desc: 'We make your site load fast, because slow sites lose visitors.' },
      { name: 'High-Converting Funnels', desc: 'We create step-by-step page journeys that guide people from interest to purchase.' },
    ],
    youGet: ['A modern, fast website', 'More enquiries and sales from the same traffic', 'A site that works smoothly on every device'],
    goodFor: 'Businesses without a website, or with one that is slow, old or not bringing results.',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    image: '/services/seo.jpg',
    oneLiner: 'We help people find you on Google — without paying for every click.',
    whatItIs:
      'SEO means improving your website so it shows up higher in Google search results. When people search for what you offer, we want your business to be one of the first they see. It takes time, but it brings free, steady visitors for the long run.',
    whatWeDo: [
      { name: 'Technical Health Audits', desc: 'We check your website for hidden problems that stop Google from ranking it.' },
      { name: 'High-Intent Search Mapping', desc: 'We find the exact words your customers type into Google when they are ready to buy.' },
      { name: 'On-Page Architecture', desc: 'We organise your pages, titles and headings so Google clearly understands them.' },
      { name: 'Content Relevance', desc: 'We plan and improve content that answers your customers’ real questions.' },
    ],
    youGet: ['Higher Google rankings', 'Free, ongoing website visitors', 'A healthier, better-structured website'],
    goodFor: 'Businesses that want long-term growth without relying only on ads.',
  },
  {
    id: 'video',
    title: 'Video & Short-Form Content',
    image: '/services/video.jpg',
    oneLiner: 'We make short videos that stop people from scrolling.',
    whatItIs:
      'Short videos like Reels, Shorts and TikToks are the fastest way to get attention today. We come up with ideas, write the scripts and shape the videos so they grab attention in the first few seconds and keep people watching.',
    whatWeDo: [
      { name: 'Short-Form Video Concepts', desc: 'We come up with fresh video ideas that suit your brand and audience.' },
      { name: 'Viral Hook Pacing', desc: 'We plan strong openings and quick pacing so viewers don’t swipe away.' },
      { name: 'Scriptwriting', desc: 'We write clear, catchy scripts so you know exactly what to say.' },
      { name: 'Multi-Platform Formats', desc: 'We adapt each video for Instagram, YouTube, TikTok and more.' },
    ],
    youGet: ['A steady flow of video ideas and scripts', 'Videos built to grab attention fast', 'Content ready for every platform'],
    goodFor: 'Brands that want to grow on social media and build an audience.',
  },
  {
    id: 'strategy',
    title: 'Digital Growth Strategy',
    image: '/services/strategy.jpg',
    oneLiner: 'We create one clear plan that connects all your marketing.',
    whatItIs:
      'Instead of trying random tactics, we build a simple roadmap for your business. We look at where your customers come from, what your competitors are doing, and what is working — then tell you exactly what to focus on next.',
    whatWeDo: [
      { name: 'Funnel Architecture', desc: 'We map the journey from someone first hearing about you to becoming a paying customer.' },
      { name: 'Competitor Benchmarking', desc: 'We study your competitors to find what they do well and where you can win.' },
      { name: 'Attribution Modeling', desc: 'We track which channels actually bring in sales, so you know where to spend.' },
      { name: 'Growth Roadmaps', desc: 'We give you a step-by-step plan with clear priorities and goals.' },
    ],
    youGet: ['A clear, written growth plan', 'Knowledge of what actually drives your sales', 'Smarter decisions on where to spend'],
    goodFor: 'Businesses that feel stuck or unsure where to focus their marketing.',
  },
];

export default function ServicesPage() {
  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/clickminemedia/30min' });
    } else {
      window.open('https://calendly.com/clickminemedia/30min', '_blank');
    }
  };

  const num = (i: number) => String(i + 1).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <Navbar />

      <main>
        {/* Intro: split, text left, index right */}
        <section className="px-6 sm:px-8 pt-32 sm:pt-36 pb-10 sm:pb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#7b7266] hover:text-[#1f1b16] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Home
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.08] mb-6">
                Six services, in plain words
              </h1>
              <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed max-w-xl">
                What each one is, what we actually do, and who it suits. If you&apos;re unsure where to start, the
                last section has a free call.
              </p>
            </div>

            {/* Signature: numbered index */}
            <nav aria-label="Services on this page" className="lg:col-span-5 border-t border-[#1f1b16]/10">
              {services.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-center gap-4 h-12 border-b border-[#1f1b16]/10 text-[15px] text-[#1f1b16] hover:text-[#C2410C] transition-colors"
                >
                  <span className="font-mono text-xs text-[#7b7266] tabular-nums w-6">{num(i)}</span>
                  <span className="flex-1">{s.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#7b7266] group-hover:text-[#C2410C] transition-colors"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Services */}
        <div className="px-6 sm:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            {services.map((svc, i) => (
              <section
                key={svc.id}
                id={svc.id}
                className="scroll-mt-24 py-12 sm:py-16 border-t border-[#1f1b16]/10"
              >
                {/* Intro: text beside image, image side alternates */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-8 sm:mb-10">
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <span className="font-mono text-xs text-[#7b7266] tabular-nums">
                      {num(i)} / {num(services.length - 1)}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-3 mb-6">
                      {svc.title}
                    </h2>
                    <p className="text-lg sm:text-xl font-medium leading-snug text-[#C2410C] mb-4">
                      {svc.oneLiner.replace(/\.$/, '')}
                    </p>
                    <p className="text-base text-[#5e554a] leading-relaxed max-w-xl">{svc.whatItIs}</p>
                  </div>
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div
                      className="aspect-[4/3] rounded-2xl bg-cover bg-center bg-[#efe9df] border border-[#1f1b16]/10"
                      style={{ backgroundImage: `url(${svc.image})` }}
                      role="img"
                      aria-label={svc.title}
                    />
                  </div>
                </div>

                {/* What we do: four equal cards */}
                <h3 className="text-sm font-medium text-[#7b7266] mb-4">What we do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {svc.whatWeDo.map((item, j) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-xl bg-[#fdfbf7] border border-[#1f1b16]/10 p-6 flex flex-col min-h-[200px] hover:-translate-y-1 hover:border-[#1f1b16]/20 hover:shadow-[0_8px_24px_-12px_rgba(31,27,22,0.25)] transition-[transform,border-color,box-shadow] duration-200 ease-out"
                    >
                      {/* accent bar slides in on hover */}
                      <span className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[#FF751F] group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                      <div className="flex items-center justify-between mb-auto pb-8">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#efe9df] font-mono text-xs text-[#5e554a] tabular-nums group-hover:bg-[#1f1b16] group-hover:text-[#efe9de] transition-colors duration-200">
                          {num(j)}
                        </span>
                        <ArrowUpRight
                          className="w-4 h-4 text-[#7b7266] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#C2410C] transition-[opacity,transform,color] duration-200"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h4 className="text-base font-medium leading-snug mb-2 group-hover:text-[#C2410C] transition-colors duration-200">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#5e554a] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Outcome panel */}
                <div className="rounded-xl bg-[#efe9df] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8">
                    <h3 className="text-sm font-medium text-[#7b7266] mb-4">What you get</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {svc.youGet.map((g) => (
                        <li key={g} className="flex gap-3 text-[15px] leading-snug">
                          <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" strokeWidth={1.5} />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-4 md:border-l md:border-[#1f1b16]/10 md:pl-8">
                    <h3 className="text-sm font-medium text-[#7b7266] mb-4">Best for</h3>
                    <p className="text-[15px] leading-relaxed">{svc.goodFor}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Closing call */}
        <section className="px-6 sm:px-8 pb-24">
          <div className="max-w-7xl mx-auto rounded-2xl bg-[#1f1b16] px-8 sm:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#efe9de] mb-3">
                Not sure which one you need
              </h2>
              <p className="text-[#aaa398] leading-relaxed max-w-xl">
                Book a free 30-minute call. We&apos;ll look at your business and tell you honestly what will help most.
              </p>
            </div>
            <a
              href="https://calendly.com/clickminemedia/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[10px] bg-[#FF751F] text-[#1f1b16] font-medium hover:bg-[#ff8a3d] active:scale-[0.98] transition-[background-color,transform] duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF751F]"
            >
              Book a free call <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
