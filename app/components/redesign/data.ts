// Content for the Phase 01 homepage redesign — kept separate from presentation.

export const CALENDLY_URL = 'https://calendly.com/clickminemedia/30min';

export function openCalendly(e?: { preventDefault: () => void }) {
  if (e) e.preventDefault();
  const w = window as any;
  if (w.Calendly) w.Calendly.initPopupWidget({ url: CALENDLY_URL });
  else window.open(CALENDLY_URL, '_blank', 'noopener');
}

export type NavItem = { label: string; href?: string; soon?: boolean; mega?: boolean };

// Studio and Insights have no routes yet — rendered as "soon", never as broken links.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/services', mega: true },
  { label: 'Studio', soon: true },
  { label: 'Insights', soon: true },
];

export const SERVICES = [
  { id: 'performance', name: 'Performance Marketing & Paid Ads', desc: 'Meta and Google campaigns built to acquire customers profitably.', image: '/services/performance.jpg' },
  { id: 'branding', name: 'Branding & Creative Direction', desc: 'Identity systems and campaign art direction with a point of view.', image: '/services/branding.jpg' },
  { id: 'web', name: 'Website Design & Development', desc: 'Fast, responsive sites designed to turn visitors into buyers.', image: '/services/web.jpg' },
  { id: 'seo', name: 'Search Engine Optimization', desc: 'Technical health and high-intent content for organic growth.', image: '/services/seo.jpg' },
  { id: 'video', name: 'Video & Short-Form Content', desc: 'Platform-native video with hooks that stop the scroll.', image: '/services/video.jpg' },
  { id: 'strategy', name: 'Digital Growth Strategy', desc: 'One plan aligning channels, creative and funnels.', image: '/services/strategy.jpg' },
];

export type Project = {
  no: string;
  title: string;
  category: string;
  showcase: string[];
  variant: 'brand' | 'campaign' | 'digital' | 'attention';
  layout: 'feature' | 'half';
  href?: string; // set when a detail page exists — card becomes a link
};

export const PROJECTS: Project[] = [
  { no: '01', title: 'Brand Universe', category: 'Branding & Creative Direction', variant: 'brand', layout: 'feature',
    showcase: ['Logo applications', 'Typography', 'Colour systems', 'Packaging', 'Collateral'] },
  { no: '02', title: 'Campaign Lab', category: 'Advertising & Performance Creative', variant: 'campaign', layout: 'half',
    showcase: ['Social ad creatives', 'Ad variations', 'Headlines', 'Landing concepts'] },
  { no: '03', title: 'Digital Experience', category: 'Website Design & Development', variant: 'digital', layout: 'half',
    showcase: ['Desktop mockups', 'Mobile interfaces', 'UI components', 'E-commerce'] },
  { no: '04', title: 'Attention Studio', category: 'Video & Content Creation', variant: 'attention', layout: 'feature',
    showcase: ['Vertical video', 'Storyboards', 'Motion graphics', 'Short-form concepts'] },
];
