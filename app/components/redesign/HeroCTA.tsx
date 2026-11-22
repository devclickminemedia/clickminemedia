'use client';

import { ArrowUpRight } from 'lucide-react';
import { CALENDLY_URL, openCalendly } from './data';

export default function HeroCTA() {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={openCalendly} className="rd-btn rd-btn-lime rd-btn-lg">
      Start a project <ArrowUpRight aria-hidden className="rd-arrow" />
    </a>
  );
}
