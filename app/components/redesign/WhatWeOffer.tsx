'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { serviceHref } from '../../lib/services';
import { ArrowUpRight, PenTool, Image as ImageIcon, Type, Video, Layers, Camera, Sparkles, Megaphone, Search } from 'lucide-react';

// Three capability groups that together cover the six services on /services.
const CARDS = [
  { key: 'perf', title: 'Turn Attention Into Growth.', label: 'Performance Marketing', text: 'Strategic paid campaigns and data-led optimisation designed to reach the right audience.', services: ['performance', 'seo'] },
  { key: 'create', title: 'Create Work People Remember.', label: 'Creative & Content', text: 'Distinctive branding, compelling campaigns and engaging short-form content.', services: ['branding', 'video'] },
  { key: 'digital', title: 'Build Experiences That Convert.', label: 'Digital Experiences', text: 'Responsive websites and connected digital experiences designed around business objectives.', services: ['web', 'strategy'] },
];

function Visual({ k }: { k: string }) {
  if (k === 'perf')
    return (
      <div className="wo-vis wo-perf">
        <div className="wo-chart">{[30, 44, 38, 56, 50, 68, 62, 82].map((h, i) => <i key={i} style={{ height: `${h}%`, ['--i' as any]: i }} />)}</div>
        <div className="wo-chips">
          <span><Megaphone />Paid social</span><span><Search />Search</span>
        </div>
        <div className="wo-metric"><small>Sample CTR</small><b>3.8%</b></div>
      </div>
    );
  if (k === 'create')
    return (
      <div className="wo-vis wo-create">
        <div className="wo-icons">
          {[PenTool, ImageIcon, Type, Video, Layers, Camera, Sparkles, Megaphone, Search].map((I, i) => (
            <span key={i} className={i === 4 ? 'is-hot' : ''}><I /></span>
          ))}
        </div>
      </div>
    );
  return (
    <div className="wo-vis wo-digital">
      <div className="wo-site"><div className="wo-site-bar"><i /><i /><i /></div><div className="wo-site-hero" /><div className="wo-site-row"><i /><i /></div></div>
      <div className="wo-report"><small>Project report</small><b>Launch checklist</b><span><i style={{ width: '72%' }} /></span><em>Sample</em></div>
    </div>
  );
}

export default function WhatWeOffer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('is-in'), io.unobserve(e.target))), { threshold: 0.2 });
    el.querySelectorAll('.wo-reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="offer" className="wo" aria-labelledby="wo-title" ref={ref}>
      <div className="rd-container">
        <div className="wo-head wo-reveal">
          <p className="rd-eyebrow">What we offer</p>
          <h2 id="wo-title" className="wo-h2">We help brands grow smarter<span className="rd-dot-acc">.</span></h2>
          <p className="wo-lede">Creative thinking, strategic marketing and digital experiences, brought together to help businesses build meaningful growth.</p>
        </div>
        <div className="wo-box">
          {CARDS.map((c, i) => (
            <Link key={c.key} href={serviceHref(c.services[0])} className="wo-card wo-reveal" style={{ ['--d' as any]: `${i * 0.12}s` }}>
              <Visual k={c.key} />
              <div className="wo-text">
                <span className="wo-label">{c.label}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="wo-more">Explore services <ArrowUpRight aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
