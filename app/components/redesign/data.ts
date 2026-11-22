// Content for the Phase 01 homepage redesign — kept separate from presentation.

export const CALENDLY_URL = 'https://calendly.com/meet-clickminemedia/30min';

export function openCalendly(e?: { preventDefault: () => void }) {
  if (e) e.preventDefault();
  const w = window as any;
  if (w.Calendly) w.Calendly.initPopupWidget({ url: CALENDLY_URL });
  else window.open(CALENDLY_URL, '_blank', 'noopener');
}

export type NavItem = { label: string; href?: string; soon?: boolean; mega?: boolean };

// Studio has no route yet — rendered as "soon", never as broken links.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/services', mega: true },
  { label: 'Studio', soon: true },
  { label: 'Blogs', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export const SERVICES = [
  { id: 'performance', name: 'Performance Marketing & Paid Ads', desc: 'Meta and Google campaigns built to acquire customers profitably.', image: '/services/performance.jpg' },
  { id: 'branding', name: 'Branding & Creative Direction', desc: 'Identity systems and campaign art direction with a point of view.', image: '/services/branding.jpg' },
  { id: 'web', name: 'Website Design & Development', desc: 'Fast, responsive sites designed to turn visitors into buyers.', image: '/services/web.jpg' },
  { id: 'seo', name: 'Search Engine Optimization', desc: 'Technical health and high-intent content for organic growth.', image: '/services/seo.jpg' },
  { id: 'video', name: 'Video & Short-Form Content', desc: 'Platform-native video with hooks that stop the scroll.', image: '/services/video.jpg' },
  { id: 'strategy', name: 'Digital Growth Strategy', desc: 'One plan aligning channels, creative and funnels.', image: '/services/strategy.jpg' },
];

export type ShowcaseService = {
  id: string; // id from lib/services.ts
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
};

export const SERVICE_SHOWCASE: ShowcaseService[] = [
  { id: 'performance', title: 'Performance Marketing', tagline: 'Meta & Google Ads, audience targeting, landing pages', image: '/services/performance.jpg', imageAlt: 'Meta Ads Manager dashboard showing campaign results' },
  { id: 'branding', title: 'Branding & Creative', tagline: 'Visual identity, design systems, campaign creatives', image: '/services/branding.jpg', imageAlt: 'Festive and brand creatives designed for social media' },
  { id: 'web', title: 'Websites & UX', tagline: 'Fast, mobile-first sites built to convert', image: '/services/web.jpg', imageAlt: 'Responsive business website shown on a laptop' },
  { id: 'seo', title: 'Search Engine Optimization', tagline: 'Technical audits, high-intent content, on-page SEO', image: '/services/seo.jpg', imageAlt: 'Search results and ranking growth on a laptop' },
  { id: 'video', title: 'Video & Short-Form', tagline: 'Hooks, scripts and platform-native formats', image: '/services/video.jpg', imageAlt: 'Video editing timeline for short-form content' },
  { id: 'strategy', title: 'Digital Growth Strategy', tagline: 'Funnels, benchmarking, attribution, roadmaps', image: '/services/strategy.jpg', imageAlt: 'Social media content calendar and performance dashboard' },
];
