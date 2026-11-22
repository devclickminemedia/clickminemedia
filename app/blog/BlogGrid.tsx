'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export type PostCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  published: string;
  dateLabel: string;
};

export default function BlogGrid({ posts, headingClass }: { posts: PostCard[]; headingClass: string }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (active === 'All' || p.category === active) &&
        (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)),
    );
  }, [posts, query, active]);

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
        <h1 className={`${headingClass} text-5xl sm:text-6xl lg:text-[64px] tracking-tight leading-none`}>Latest Posts</h1>
        <label className="relative w-full md:w-[380px]">
          <span className="sr-only">Search for articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for articles"
            className="w-full rounded-xl border border-[#1f1b16]/15 bg-transparent py-3.5 pl-5 pr-12 text-[15px] placeholder:text-[#8a8175] focus:outline-none focus:border-[#1f1b16]/40"
          />
          <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8a8175]" strokeWidth={1.5} />
        </label>
      </div>

      <div className="flex flex-wrap gap-3 mb-14 sm:mb-16" role="tablist" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-lg px-4 py-2.5 text-[15px] transition-colors ${
              active === c ? 'bg-[#0f1021] text-white' : 'bg-white text-[#5e554a] hover:text-[#1f1b16]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[#5e554a]">No articles match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF751F] rounded-xl">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-[#efe9df] mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-lg bg-[#dbe3fb] px-3 py-1.5 text-sm text-[#22378c]">{p.category}</span>
              </div>
              <h2 className={`${headingClass} text-2xl sm:text-[28px] leading-snug mb-4 group-hover:underline decoration-1 underline-offset-4`}>{p.title}</h2>
              <time dateTime={p.published} className="mt-auto text-[15px] text-[#1f1b16]">{p.dateLabel}</time>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
