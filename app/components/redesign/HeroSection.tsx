import { ArrowDown } from 'lucide-react';
import Dashboard3D from './Dashboard3D';
import HeroCTA from './HeroCTA';
import HeroHeadline from './HeroHeadline';

export default function HeroSection() {
  return (
    <section className="rd-hero" aria-labelledby="rd-hero-title">
      <div className="rd-hero-light" aria-hidden />
      <div className="rd-container rd-hero-copy">
        <h1 id="rd-hero-title" className="sr-only">Clicks that convert.</h1>
        <div className="rd-hero-tech rd-fade" style={{ ['--d' as any]: '0.6s' }} aria-hidden>
          <HeroHeadline />
        </div>
        <p className="rd-hero-sub rd-fade" style={{ ['--d' as any]: '0.95s' }}>
          We create brands, campaigns and digital experiences that turn attention into action.
        </p>
        <div className="rd-hero-ctas rd-fade" style={{ ['--d' as any]: '1.1s' }}>
          <HeroCTA />
          <a href="#services" className="rd-btn rd-btn-ghost">Explore our services <ArrowDown aria-hidden /></a>
        </div>
      </div>
      <div className="rd-hero-visual"><Dashboard3D /></div>
    </section>
  );
}
