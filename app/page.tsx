'use client';

import React, { useState } from 'react';

export default function HomePage() {
  // State for interactive Growth Estimator
  const [budget, setBudget] = useState<number>(10000);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    service: 'Short-Form Production',
  });

  // Calculate dynamic metrics based on budget
  const estimatedViews = Math.round((budget / 1000) * 125000);
  const estimatedCreators = Math.max(3, Math.round(budget / 2500));
  const estimatedROAS = (4.2 + (budget > 15000 ? 0.6 : 0)).toFixed(1);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
            <div className="badge-glow" id="hero-badge">
              <span className="pulse-dot"></span>
              <span>Next-Gen Media & Creator Growth Agency</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            margin: '0 auto 24px auto',
          }}>
            We Turn Digital Attention Into{' '}
            <span className="text-gradient">Exponential Revenue</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            maxWidth: '680px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6,
          }}>
            ClickMineMedia scales high-growth brands through viral short-form video production, 
            algorithmic paid creative, and an exclusive network of top-tier creators.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}>
            <a href="#calculator" className="btn-primary" id="hero-cta-primary">
              Calculate Growth Potential
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#case-studies" className="btn-secondary" id="hero-cta-secondary">
              View Proven Results
            </a>
          </div>

          {/* Live Metrics Ticker Banner */}
          <div className="glass-card" style={{
            padding: '32px 24px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}>
              <div>
                <div className="font-display text-gradient" style={{ fontSize: '36px', fontWeight: 700 }}>
                  850M+
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Organic Views Delivered
                </div>
              </div>

              <div>
                <div className="font-display text-gradient" style={{ fontSize: '36px', fontWeight: 700 }}>
                  140+
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Vetted Creator Partners
                </div>
              </div>

              <div>
                <div className="font-display text-gradient" style={{ fontSize: '36px', fontWeight: 700 }}>
                  4.8x
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Average Client ROAS
                </div>
              </div>

              <div>
                <div className="font-display text-gradient" style={{ fontSize: '36px', fontWeight: 700 }}>
                  $42M+
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Tracked Sales Generated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding" style={{ backgroundColor: 'rgba(13, 17, 26, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="badge-glow" style={{ marginBottom: '16px' }}>
              <span>Our Capabilities</span>
            </div>
            <h2 className="font-display" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Engineered for the Modern Attention Economy
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              We eliminate traditional agency bloat and deploy rapid, data-backed creative systems designed to win on TikTok, Reels, and YouTube.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {/* Service 1 */}
            <article className="glass-card" id="service-short-form">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.12)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                Viral Short-Form Production
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                High-volume, retention-optimized video editing with algorithmic pacing, hypnotic sound design, and tested hooks.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-highlight)' }}>
                <li>✓ Daily TikTok & Reels output</li>
                <li>✓ Retention curves analysis</li>
                <li>✓ Full script-to-screen pipeline</li>
              </ul>
            </article>

            {/* Service 2 */}
            <article className="glass-card" id="service-creator-management">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(79, 172, 254, 0.12)',
                border: '1px solid rgba(79, 172, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4facfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                Creator & Talent Network
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Direct access to vetted creators across lifestyle, tech, finance, and gaming who actually drive buyer conversions.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-highlight)' }}>
                <li>✓ End-to-end contract & fee negotiation</li>
                <li>✓ Authenticity-first creative briefs</li>
                <li>✓ Usage rights & whitelisting setup</li>
              </ul>
            </article>

            {/* Service 3 */}
            <article className="glass-card" id="service-performance-creative">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(138, 43, 226, 0.12)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8a2be2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                Performance Paid Ads (UGC)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Direct-response ad creative that doesn't look like an ad. Built to lower customer acquisition cost (CAC) at scale.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-highlight)' }}>
                <li>✓ 20+ variations per testing cycle</li>
                <li>✓ Meta, TikTok & YouTube Ads optimization</li>
                <li>✓ Iterative hook testing matrix</li>
              </ul>
            </article>

            {/* Service 4 */}
            <article className="glass-card" id="service-brand-resonance">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(244, 63, 94, 0.12)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="12 8 8 12 12 16 16 12 12 8" />
                </svg>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                Media Strategy & Positioning
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Turn your brand into a cultural media powerhouse with organic distribution channels that own their niche audience.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-highlight)' }}>
                <li>✓ Brand tone & narrative development</li>
                <li>✓ Multi-channel syndication</li>
                <li>✓ Community-led growth architecture</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GROWTH ESTIMATOR */}
      <section id="calculator" className="section-padding">
        <div className="container">
          <div className="glass-card" style={{
            padding: '48px 32px',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            background: 'linear-gradient(180deg, rgba(18, 24, 38, 0.8) 0%, rgba(13, 17, 26, 0.95) 100%)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              <div>
                <div className="badge-glow" style={{ marginBottom: '16px' }}>
                  <span>Interactive Estimator</span>
                </div>
                <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', lineHeight: 1.2 }}>
                  Calculate Your Projected Growth With ClickMineMedia
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6 }}>
                  Adjust your planned monthly creative spend to see projected impressions, creator pairings, and targeted ROAS metrics.
                </p>

                {/* Slider Control */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label htmlFor="budget-slider" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Monthly Media Budget:
                    </label>
                    <span className="font-display text-gradient" style={{ fontSize: '20px', fontWeight: 700 }}>
                      ${budget.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    id="budget-slider"
                    type="range"
                    min="3000"
                    max="50000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#00f2fe',
                      cursor: 'pointer',
                      height: '6px',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '12px', marginTop: '6px' }}>
                    <span>$3,000</span>
                    <span>$25,000</span>
                    <span>$50,000+</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Projection Results */}
              <div style={{
                background: 'rgba(7, 9, 14, 0.6)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Estimated Monthly Impact
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Projected Impressions</span>
                    <span className="font-display" style={{ fontSize: '24px', fontWeight: 700, color: '#00f2fe' }}>
                      ~{estimatedViews.toLocaleString()} views
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Creator Collaborations</span>
                    <span className="font-display" style={{ fontSize: '24px', fontWeight: 700, color: '#4facfe' }}>
                      {estimatedCreators} creators
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Target Campaign ROAS</span>
                    <span className="font-display" style={{ fontSize: '24px', fontWeight: 700, color: '#10b981' }}>
                      {estimatedROAS}x
                    </span>
                  </div>
                </div>

                <a href="#contact" className="btn-primary" style={{ width: '100%', marginTop: '28px', boxSizing: 'border-box' }}>
                  Lock In This Growth Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES BENTO GRID */}
      <section id="case-studies" className="section-padding" style={{ backgroundColor: 'rgba(13, 17, 26, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="badge-glow" style={{ marginBottom: '16px' }}>
              <span>Proof of Work</span>
            </div>
            <h2 className="font-display" style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Real Scale. Real Metrics.
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Here is how we helped fast-moving brands capture market dominance through viral hooks and creator partnerships.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}>
            {/* Case Study 1 */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#00f2fe', textTransform: 'uppercase' }}>
                  D2C Apparel
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>60-Day Campaign</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                +340% Revenue Surge via TikTok Spark Ads & UGC
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Structured an organic-to-paid feedback loop leveraging 15 creator hook variations, driving an instant spike in return on ad spend.
              </p>
              <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>28.4M</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Total Views</div>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#10b981' }}>5.2x</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Blended ROAS</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#4facfe', textTransform: 'uppercase' }}>
                  Consumer Fintech
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>90-Day Scaling</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                110,000+ App Installs at $1.28 Blended CAC
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Deconstructed financial literacy into bite-sized cinematic narratives that dominated YouTube Shorts and Instagram Reels algorithm feeds.
              </p>
              <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>110k+</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>New Users</div>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#10b981' }}>-58%</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>CAC Reduction</div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#8a2be2', textTransform: 'uppercase' }}>
                  Hardware / Tech
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Product Launch</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                Sold Out 5,000 Units in First 48 Hours
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Coordinated synchronized teaser launches across 24 niche tech creators, creating intense viral FOMO and retail demand.
              </p>
              <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>$2.4M</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Launch Revenue</div>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#10b981' }}>48 Hrs</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Inventory Out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="glass-card" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '48px 36px',
            border: '1px solid rgba(79, 172, 254, 0.3)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-glow" style={{ marginBottom: '16px' }}>
                <span>Ready To Scale?</span>
              </div>
              <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px' }}>
                Book Your Growth Strategy Session
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                Let's analyze your current media footprint and engineer a custom distribution plan for ClickMineMedia.
              </p>
            </div>

            {inquirySubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: '#10b981',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                  Strategy Request Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
                  Thank you, <strong>{formData.name || 'Partner'}</strong>. Our media director will review your brand details and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      Business Email
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label htmlFor="contact-brand" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      Company / Brand URL
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      placeholder="https://brand.com"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      Primary Goal
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        background: '#0d111a',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="Short-Form Production">Viral Short-Form Production</option>
                      <option value="Creator Management">Creator & Influencer Management</option>
                      <option value="Paid Performance Ads">Paid Performance Ads (UGC)</option>
                      <option value="Full Media Architecture">Full Media Architecture</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '12px' }}
                >
                  Request Media Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
