'use client';

import { useEffect } from 'react';

// Animates any element marked with `data-reveal` (up | left | right | scale | fade) into view once.
// `data-reveal-stagger` on a parent cascades its direct children.
// Content is only hidden after this runs (html.reveal-ready), so no-JS / crawlers always see it.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    const watch = () => document.querySelectorAll('[data-reveal]:not(.is-revealed), [data-reveal-stagger]:not(.is-revealed)').forEach((el) => io.observe(el));
    watch();
    // pick up content rendered later (e.g. client-only lists)
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); root.classList.remove('reveal-ready'); };
  }, []);

  return null;
}
