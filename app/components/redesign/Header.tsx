'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ArrowUpRight, Plus, X, Menu } from 'lucide-react';
import { serviceHref } from '../../lib/services';
import { NAV_ITEMS, SERVICES, CALENDLY_URL, openCalendly } from './data';

function Logo() {
  return (
    <Link href="/" aria-label="Click Mine Media — home" className="rd-logo">
      {/* Existing logo, inverted to warm-white on the dark header */}
      <Image src="/cmm-logo.png" alt="Click Mine Media" width={160} height={40} priority unoptimized />
    </Link>
  );
}

function ServicesMegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`rd-mega ${open ? 'is-open' : ''}`} id="rd-mega" role="region" aria-label="Services">
      <div className="rd-container rd-mega-grid">
        {SERVICES.map((s, i) => (
          <Link key={s.id} href={serviceHref(s.id)} className="rd-mega-item" onClick={onClose}>
            <span className="rd-mega-no">{String(i + 1).padStart(2, '0')}</span>
            <span className="rd-mega-thumb" style={{ backgroundImage: `url(${s.image})` }} aria-hidden />
            <span className="rd-mega-text">
              <span className="rd-mega-name">{s.name}</span>
              <span className="rd-mega-desc">{s.desc}</span>
            </span>
            <ArrowUpRight className="rd-mega-arrow" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [svcOpen, setSvcOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); prev?.focus(); };
  }, [open, onClose]);

  if (!open) return null;
  // Portal into .rd-root so the header's backdrop-filter can't trap this fixed overlay.
  const host = document.querySelector('.rd-root') ?? document.body;
  return createPortal(
    <div ref={panelRef} className="rd-mobile" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="rd-mobile-top">
        <Logo />
        <button ref={closeRef} onClick={onClose} className="rd-icon-btn" aria-label="Close menu"><X /></button>
      </div>
      <nav className="rd-mobile-nav">
        {NAV_ITEMS.map((n) =>
          n.mega ? (
            <div key={n.label}>
              <button className="rd-mobile-link" aria-expanded={svcOpen} aria-controls="rd-mobile-svc" onClick={() => setSvcOpen(!svcOpen)}>
                {n.label}
                <Plus className={`rd-plus ${svcOpen ? 'is-open' : ''}`} aria-hidden />
              </button>
              {svcOpen && (
                <ul id="rd-mobile-svc" className="rd-mobile-svc">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={serviceHref(s.id)} onClick={onClose}>{s.name}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          ) : n.soon ? (
            <span key={n.label} className="rd-mobile-link is-soon" aria-disabled="true">
              {n.label}<em>Soon</em>
            </span>
          ) : (
            <Link key={n.label} href={n.href!} className="rd-mobile-link" onClick={onClose}>
              {n.label}
            </Link>
          )
        )}
      </nav>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="rd-btn rd-btn-lime rd-mobile-cta"
         onClick={(e) => { onClose(); openCalendly(e); }}>
        Let&apos;s Talk <ArrowUpRight aria-hidden />
      </a>
    </div>,
    host
  );
}

export default function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMegaOpen(false);
    document.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('keydown', onKey); };
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const show = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const hide = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 140); };

  return (
    <header className={`rd-header ${scrolled ? 'is-scrolled' : ''}`} onMouseLeave={hide}>
      <div className="rd-container rd-header-row">
        <Logo />
        <nav className="rd-nav" aria-label="Primary">
          {NAV_ITEMS.map((n) =>
            n.mega ? (
              <div key={n.label} className={`rd-nav-mega ${pathname?.startsWith(n.href!) ? 'is-active' : ''}`} onMouseEnter={show}>
                <Link href={n.href!} className="rd-nav-link">{n.label}</Link>
                <button className="rd-nav-caret" aria-expanded={megaOpen} aria-controls="rd-mega"
                        aria-label="Show services" onClick={() => setMegaOpen(!megaOpen)}>
                  <Plus className={`rd-plus ${megaOpen ? 'is-open' : ''}`} aria-hidden />
                </button>
              </div>
            ) : n.soon ? (
              <span key={n.label} className="rd-nav-link is-soon" aria-disabled="true" title="Coming soon">{n.label}</span>
            ) : (
              <Link key={n.label} href={n.href!} className={`rd-nav-link ${pathname === n.href || (n.href !== '/' && pathname?.startsWith(n.href! + '/')) ? 'is-active' : ''}`} onMouseEnter={hide}>{n.label}</Link>
            )
          )}
        </nav>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={openCalendly} className="rd-btn rd-btn-lime rd-nav-cta">
          Let&apos;s Talk <ArrowUpRight aria-hidden />
        </a>
        <button className="rd-icon-btn rd-burger" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button>
      </div>
      <div onMouseEnter={show}><ServicesMegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} /></div>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}
