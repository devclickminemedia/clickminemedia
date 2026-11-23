import type { Metadata } from 'next';
import { serif } from '../components/redesign/fonts';
import BlogGrid, { type PostCard } from './BlogGrid';
import SiteHeader from '../components/redesign/SiteHeader';
import Footer from '../components/Footer';
import { sortedPosts, formatDate } from '../lib/blog';
import FaqBlock from '../components/FaqBlock';

export const metadata: Metadata = {
  title: 'Blog | Click Mine Media',
  description: 'Practical guides on branding, SEO, paid ads, websites and digital growth for startups and small businesses.',
  alternates: { canonical: 'https://clickminemedia.com/blog' },
};

export default function BlogIndex() {
  const posts: PostCard[] = sortedPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    image: p.image,
    imageAlt: p.imageAlt,
    published: p.published,
    dateLabel: formatDate(p.published),
  }));
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <SiteHeader />
      <main className="px-6 sm:px-8 pt-32 sm:pt-40 pb-24">
        <div className="max-w-7xl mx-auto">
          <BlogGrid posts={posts} headingClass={serif.className} />
        </div>
      </main>
      <FaqBlock />
      <Footer />
    </div>
  );
}
