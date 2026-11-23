'use client';

import { useEffect, useState } from 'react';
import TechText from '../TechText';

// One line on desktop, two lines on phones; "CONVERT." carries the CMM gradient either way.
const ONE_LINE = 'CLICKS THAT CONVERT.';
const TWO_LINES = 'CLICKS THAT\nCONVERT.';

export default function HeroHeadline() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <TechText
      text={mobile ? TWO_LINES : ONE_LINE}
      gradientFrom={mobile ? undefined : ONE_LINE.indexOf('CONVERT')}
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
  );
}
