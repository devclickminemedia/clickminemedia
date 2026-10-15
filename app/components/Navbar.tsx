'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(7, 9, 14, 0.75)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
      }}>
        {/* Logo */}
        <Link href="/" id="nav-logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '-0.02em',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #8a2be2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(0, 242, 254, 0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#07090e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span>
            ClickMine<span style={{ color: '#00f2fe' }}>Media</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
          <a href="#services" style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>
            Services
          </a>
          <a href="#case-studies" style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>
            Case Studies
          </a>
          <a href="#calculator" style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>
            Growth Calculator
          </a>
          <a href="#creators" style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>
            Creator Network
          </a>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#contact" className="btn-primary" id="nav-cta-btn" style={{
            padding: '10px 20px',
            fontSize: '14px',
          }}>
            Get In Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px',
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0d111a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 500 }}
          >
            Services
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 500 }}
          >
            Case Studies
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 500 }}
          >
            Growth Calculator
          </a>
          <a
            href="#creators"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 500 }}
          >
            Creator Network
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
