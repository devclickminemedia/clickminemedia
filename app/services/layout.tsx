import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Click Mine Media',
  description:
    'Paid ads, branding, websites, SEO, short-form video and growth strategy, explained in plain words. See what each service includes and who it suits.',
  alternates: { canonical: 'https://clickminemedia.com/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
