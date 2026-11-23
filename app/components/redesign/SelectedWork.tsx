import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { serviceHref } from '../../lib/services';
import { SERVICE_SHOWCASE } from './data';

export default function ServicesShowcase() {
  return (
    <section id="services" className="sw" aria-labelledby="sw-title">
      <div className="sw-glow" aria-hidden />
      <div className="rd-container">
        <div className="sw-head" data-reveal="up">
          <div>
            <p className="rd-eyebrow">Services</p>
            <h2 id="sw-title" className="sw-h2">Everything you<br />need to scale<span className="rd-dot-acc">.</span></h2>
          </div>
          <p className="sw-lede">Paid media, search, creative and websites working as one growth engine, not disjointed tactics.</p>
        </div>
        <div className="sw-grid">
          {SERVICE_SHOWCASE.map((s, i) => (
            <Link key={s.id} href={serviceHref(s.id)} className="sw-card" data-reveal="up" style={{ ['--rv-delay' as any]: `${(i % 2) * 0.12}s` }}>
              <div className="sw-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.imageAlt} loading="lazy" className="sw-img" />
              </div>
              <div className="sw-info">
                <span className="sw-no">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="sw-title">{s.title}</h3>
                  <p className="sw-cat">{s.tagline}</p>
                </div>
                <span className="sw-arrow">Explore <ArrowUpRight aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
