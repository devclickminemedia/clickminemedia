import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      backgroundColor: '#05070a',
      paddingTop: '80px',
      paddingBottom: '40px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 700,
              fontSize: '20px',
              marginBottom: '16px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #8a2be2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#07090e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span>ClickMine<span style={{ color: '#00f2fe' }}>Media</span></span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              We orchestrate hyper-growth for visionary brands through viral storytelling, top-tier creator networks, and algorithmic performance creative.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((platform) => (
                <div
                  key={platform}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                  title={platform}
                >
                  {platform[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f8fafc', marginBottom: '20px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Short-Form Video Engine', 'Creator & Influencer Management', 'Performance Ad Creatives', 'Organic Brand Resonance', 'Talent Representation'].map((item) => (
                <li key={item}>
                  <a href="#services" style={{ color: '#94a3b8', fontSize: '14px', transition: 'color 0.2s' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f8fafc', marginBottom: '20px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About ClickMineMedia', 'Featured Case Studies', 'Creator Roster', 'Careers (Hiring!)', 'Press & Insights'].map((item) => (
                <li key={item}>
                  <a href="#case-studies" style={{ color: '#94a3b8', fontSize: '14px', transition: 'color 0.2s' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f8fafc', marginBottom: '20px' }}>
              The Media Wire
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
              Receive our bi-weekly breakdown of algorithmic trends, viral formats, and conversion strategies.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#f8fafc',
                  fontSize: '13px',
                  outline: 'none',
                }}
              />
              <button
                className="btn-primary"
                style={{ padding: '10px 16px', fontSize: '13px', borderRadius: '10px' }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          color: '#64748b',
          fontSize: '13px',
        }}>
          <div>
            © {new Date().getFullYear()} ClickMineMedia Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#64748b' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b' }}>Terms of Service</a>
            <a href="#" style={{ color: '#64748b' }}>Brand Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
