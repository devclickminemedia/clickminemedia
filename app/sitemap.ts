import type { MetadataRoute } from 'next';
import { services } from './lib/services';
import { posts } from './lib/blog';

const SITE = 'https://clickminemedia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, priority: 1 },
    { url: `${SITE}/services`, priority: 0.9 },
    { url: `${SITE}/faq`, priority: 0.7 },
    { url: `${SITE}/blog`, priority: 0.7 },
    ...posts.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: p.updated ?? p.published, priority: 0.6 })),
    ...services.map((s) => ({ url: `${SITE}/services/${s.slug}`, priority: 0.8 })),
  ];
}
