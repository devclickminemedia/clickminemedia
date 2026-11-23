'use client';

import { useEffect, useRef } from 'react';
import { Folder, FileText, Globe, Film, Package, Check, Circle, Search, Bell, LayoutGrid, BarChart3, Users, Palette } from 'lucide-react';

// Floating marketing workspace in front of the CMM planet.
// Every figure is illustrative sample data (labelled in the UI) — not real results.

const LINE = [28, 40, 34, 50, 46, 60, 55, 68, 63, 76, 72, 86];

function Graph({ id = 'pd' }: { id?: string }) {
  const pts = LINE.map((v, i) => `${(i / (LINE.length - 1)) * 100},${100 - v}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pd-graph">
      <defs>
        <linearGradient id={`${id}Fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF751F" stopOpacity=".5" />
          <stop offset="1" stopColor="#E50069" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}Stroke`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF751F" />
          <stop offset=".5" stopColor="#FF4B43" />
          <stop offset="1" stopColor="#E50069" />
        </linearGradient>
      </defs>
      {[25, 50, 75].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(255,255,255,.06)" vectorEffect="non-scaling-stroke" />)}
      <polygon points={`0,100 ${pts} 100,100`} fill={`url(#${id}Fill)`} />
      <polyline points={pts} fill="none" stroke={`url(#${id}Stroke)`} strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Dashboard3D() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-linked: dashboard starts tilted back and becomes flat as the visitor scrolls.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.55), 0), 1);
      el.style.setProperty('--flat', p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      el.style.setProperty('--mx', cx.toFixed(3));
      el.style.setProperty('--my', cy.toFixed(3));
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); };
  }, []);

  return (
    <div className="pd-scene" ref={ref} aria-hidden>
      <div className="pd-planet"><span className="pd-planet-rim" /></div>
      <div className="pd-particles">{Array.from({ length: 22 }).map((_, i) => <i key={i} style={{ ['--i' as any]: i }} />)}</div>

      <div className="pd-tilt">
        <div className="pd-frame">
          <div className="pd-bar">
            <span className="pd-dots"><i /><i /><i /></span>
            <span className="pd-title">CMM Workspace <em>Sample data</em></span>
            <span className="pd-bar-r"><Search /><Bell /><span className="pd-av" /></span>
          </div>
          <div className="pd-layout">
            <nav className="pd-rail">
              {[LayoutGrid, BarChart3, Palette, Folder, Users].map((I, i) => <span key={i} className={i === 0 ? 'is-on' : ''}><I /></span>)}
            </nav>

            {/* 01 Campaign analytics */}
            <section className="pd-panel pd-analytics" style={{ ['--d' as any]: '1.9s' }}>
              <header><b>Campaign Analytics</b><span className="pd-status"><i />Live · sample</span></header>
              <div className="pd-kpis">
                {[['Reach', '128K', 72], ['Engagement', '6.4%', 54], ['Clicks', '9.2K', 63], ['Leads', '412', 41]].map(([k, v, w]) => (
                  <div key={k as string}><small>{k}</small><b>{v}</b><span><i style={{ width: `${w}%` }} /></span></div>
                ))}
              </div>
            </section>

            {/* 05 Growth overview */}
            <section className="pd-panel pd-growth" style={{ ['--d' as any]: '2.05s' }}>
              <header><b>Growth Overview</b><small>Leads · illustrative</small></header>
              <Graph />
              <div className="pd-axis">{['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m) => <span key={m}>{m}</span>)}</div>
            </section>

            {/* 03 Creative assets */}
            <section className="pd-panel pd-assets" style={{ ['--d' as any]: '2.2s' }}>
              <header><b>Creative Assets</b></header>
              <div className="pd-folders">
                {['Landing Pages', 'Campaign Creatives', 'Content Assets', 'Copywriting'].map((f) => (
                  <div key={f} className="pd-folder"><span className="pd-folder-tab" /><Folder /><small>{f}</small></div>
                ))}
              </div>
            </section>

            {/* 02 Campaign reviews */}
            <section className="pd-panel pd-reviews" style={{ ['--d' as any]: '2.35s' }}>
              <header><b>Campaign Reviews</b></header>
              {[['Spring ad set', 'Approved', 'ok'], ['Launch reel v2', 'Changes requested', 'warn'], ['Landing copy', 'In review', 'wait']].map(([t, s, k]) => (
                <div key={t} className="pd-review"><span>{t}</span><em className={`is-${k}`}>{s}</em></div>
              ))}
            </section>

            {/* 04 Project workspace */}
            <section className="pd-panel pd-work" style={{ ['--d' as any]: '2.5s' }}>
              <header><b>Project Workspace</b></header>
              {[[FileText, 'Campaign files'], [Globe, 'Website projects'], [Film, 'Content pipeline'], [Package, 'Deliverables']].map(([I, t]: any) => (
                <div key={t} className="pd-file"><I /><span>{t}</span></div>
              ))}
            </section>

            {/* 06 Team activity */}
            <section className="pd-panel pd-team" style={{ ['--d' as any]: '2.65s' }}>
              <header><b>Team Activity</b></header>
              {[['Ad creatives', true], ['Website updates', true], ['SEO audit', false], ['Content production', false]].map(([t, done]) => (
                <div key={t as string} className={`pd-task ${done ? 'is-done' : ''}`}>{done ? <Check /> : <Circle />}<span>{t}</span></div>
              ))}
            </section>
          </div>
        </div>

        {/* floating statistics card, physically separate */}
        <div className="pd-stat">
          <small>Campaign overview</small>
          <b>24<em>active</em></b>
          <div className="pd-mini">{[40, 62, 48, 74, 58, 86, 70].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
          <div className="pd-stat-row"><span><i className="o" />Paid</span><span><i className="c" />Social</span><span><i className="p" />Search</span></div>
          <small className="pd-sample">Sample numbers</small>
        </div>
      </div>
      {/* mobile-only: the same workspace as a phone app */}
      <div className="pd-phone">
        <div className="pd-ph-screen">
          <div className="pd-ph-status"><span>9:41</span><i className="pd-ph-notch" /><span>●●●</span></div>
          <div className="pd-ph-head"><b>CMM Workspace</b><em>Sample</em></div>
          <div className="pd-ph-kpis">
            {[['Reach', '128K', 72], ['Engagement', '6.4%', 54], ['Clicks', '9.2K', 63], ['Leads', '412', 41]].map(([k, v, w]) => (
              <div key={k as string}><small>{k}</small><b>{v}</b><span><i style={{ width: `${w}%` }} /></span></div>
            ))}
          </div>
          <div className="pd-ph-card">
            <div className="pd-ph-row"><b>Growth Overview</b><small>Illustrative</small></div>
            <Graph id="ph" />
          </div>
          <div className="pd-ph-assets">
            <b>Creative Assets</b>
            <div>{['Landing Pages', 'Creatives', 'Content', 'Copy'].map((f) => <span key={f}><Folder />{f}</span>)}</div>
          </div>
          <div className="pd-ph-card">
            <div className="pd-ph-row"><b>Campaign Reviews</b></div>
            {[['Spring ad set', 'Approved', 'ok'], ['Launch reel v2', 'Changes', 'warn']].map(([t, st, k]) => (
              <div key={t} className="pd-review"><span>{t}</span><em className={`is-${k}`}>{st}</em></div>
            ))}
          </div>
          <nav className="pd-ph-tab">{[LayoutGrid, BarChart3, Palette, Folder, Users].map((I, i) => <span key={i} className={i === 0 ? 'is-on' : ''}><I /></span>)}</nav>
        </div>
      </div>
    </div>
  );
}
