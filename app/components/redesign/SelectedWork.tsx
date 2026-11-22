import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from './data';

// Perspective mockups built in CSS. Replace the contents of .sw-stage with real
// project imagery when available — no stock photos stand in for actual work.
function Mockup({ variant }: { variant: Project['variant'] }) {
  if (variant === 'brand')
    return (
      <div className="sw-stage sw-brand">
        <div className="sw-b-card a"><span>Cm</span><small>Identity system</small></div>
        <div className="sw-b-card b"><i /><i /><i /><i /></div>
        <div className="sw-b-card c">Aa<small>Display type</small></div>
        <div className="sw-b-pack" />
      </div>
    );
  if (variant === 'campaign')
    return (
      <div className="sw-stage sw-campaign">
        {['Stop scrolling.', 'Look closer.', 'Click.'].map((t, i) => (
          <div key={t} className="sw-c-ad" style={{ ['--i' as any]: i }}><small>Ad 0{i + 1}</small>{t}</div>
        ))}
      </div>
    );
  if (variant === 'digital')
    return (
      <div className="sw-stage sw-digital">
        <div className="sw-d-desk"><div className="sw-d-bar"><i /><i /><i /></div><div className="sw-d-hero" /><div className="sw-d-row"><i /><i /><i /></div></div>
        <div className="sw-d-phone"><div className="sw-d-hero" /><i /><i /></div>
      </div>
    );
  return (
    <div className="sw-stage sw-attention">
      {['Hook', 'Build', 'Payoff', 'Loop'].map((t, i) => (
        <div key={t} className="sw-a-frame" style={{ ['--i' as any]: i }}><small>0{i + 1}</small>{t}</div>
      ))}
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <>
      <div className="sw-media"><Mockup variant={p.variant} /><span className="sw-concept">Concept</span></div>
      <div className="sw-info">
        <span className="sw-no">{p.no}</span>
        <div>
          <h3 className="sw-title">{p.title}</h3>
          <p className="sw-cat">{p.category}</p>
        </div>
        <span className="sw-arrow">{p.href ? 'View project' : 'Case study soon'} <ArrowUpRight aria-hidden /></span>
      </div>
    </>
  );
  const cls = `sw-card sw-card-${p.variant}`;
  return p.href ? <Link href={p.href} className={cls}>{inner}</Link> : <article className={cls}>{inner}</article>;
}

export default function SelectedWork() {
  return (
    <section id="work" className="sw" aria-labelledby="sw-title">
      <div className="sw-glow" aria-hidden />
      <div className="rd-container">
        <div className="sw-head">
          <div>
            <p className="rd-eyebrow">Selected work · concept projects</p>
            <h2 id="sw-title" className="sw-h2">Ideas.<br />Without limits<span className="rd-dot-acc">.</span></h2>
          </div>
          <p className="sw-lede">An exploration of branding, digital experiences, creative campaigns and ideas brought to life.</p>
        </div>
        <div className="sw-grid">{PROJECTS.map((p) => <ProjectCard key={p.no} p={p} />)}</div>
      </div>
    </section>
  );
}
