import { ArrowDown } from 'lucide-react';
import Dashboard3D from './Dashboard3D';
import HeroCTA from './HeroCTA';
import TechText from '../TechText';

export default function HeroSection() {
  return (
    <section className="rd-hero" aria-labelledby="rd-hero-title">
      <div className="rd-hero-light" aria-hidden />
      <div className="rd-container rd-hero-copy">
        <h1 id="rd-hero-title" className="sr-only">Clicks that convert.</h1>
        <div className="rd-hero-tech rd-fade" style={{ ['--d' as any]: '0.6s' }} aria-hidden>
          <TechText
            text={'CLICKS THAT\nCONVERT.'}
            fontWeight={600}
            fontSize={128}
            letterSpacing={-0.045}
            color="#111827"
            accentColor="#FF751F"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            strokeWidth={1.5}
            specks={15}
            intro="none"
            clickKick
            guides={false}
            sweep
          />
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
