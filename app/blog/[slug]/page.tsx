import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SiteHeader from '../../components/redesign/SiteHeader';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FaqList from '../../components/FaqList';
import { posts, formatDate, type Block } from '../../lib/blog';
import { services } from '../../lib/services';
import FaqBlock from '../../components/FaqBlock';
import { faqsForService, faqJsonLd } from '../../lib/faqs';

const SITE = 'https://clickminemedia.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  const url = `${SITE}/blog/${p.slug}`;
  return {
    title: `${p.seoTitle} | Click Mine Media`,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: p.seoTitle,
      description: p.description,
      url,
      images: [{ url: `${SITE}${p.image}`, alt: p.imageAlt }],
      publishedTime: p.published,
      modifiedTime: p.updated ?? p.published,
    },
  };
}

// Renders [text](href) links and **bold** inside a string.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const cls = 'text-[#1f1b16] underline decoration-[#FF751F]/60 underline-offset-4 hover:decoration-[#FF751F] hover:text-[#C2410C]';
          return href.startsWith('http') ? (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
          ) : (
            <Link key={i} href={href} className={cls}>{label}</Link>
          );
        }
        if (part.startsWith('**')) return <strong key={i} className="font-semibold text-[#1f1b16]">{part.slice(2, -2)}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case 'h2':
      return <h2 id={slugify(b.text)} className="scroll-mt-28 text-2xl sm:text-[28px] font-semibold tracking-tight leading-tight text-[#1f1b16] mt-12 mb-4">{b.text}</h2>;
    case 'h3':
      return <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#1f1b16] mt-8 mb-2">{b.text}</h3>;
    case 'ol':
    case 'ul': {
      const Tag = b.type;
      return (
        <Tag className={`${b.type === 'ol' ? 'list-decimal' : 'list-disc'} pl-6 space-y-2 my-5 marker:text-[#C2410C]`}>
          {b.items.map((it) => <li key={it}><Inline text={it} /></li>)}
        </Tag>
      );
    }
    case 'callout':
      return <p className="rounded-xl bg-[#efe9df] border-l-4 border-[#FF751F] p-5 sm:p-6 my-8 text-[#3d3830]"><Inline text={b.text} /></p>;
    default:
      return <p className="my-5"><Inline text={b.text} /></p>;
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const url = `${SITE}/blog/${p.slug}`;
  const toc = p.body.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');
  const service = services.find((s) => s.id === p.relatedService);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      image: `${SITE}${p.image}`,
      datePublished: p.published,
      dateModified: p.updated ?? p.published,
      author: { '@type': 'Organization', name: p.author, url: SITE },
      publisher: { '@type': 'Organization', name: 'Click Mine Media', logo: { '@type': 'ImageObject', url: `${SITE}/cmm-logo.png` } },
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: p.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {p.faqs?.length ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(p.faqs.map((f) => ({ q: f.q, a: [f.a] })))) }} />
      ) : null}
      <SiteHeader />

      <main className="px-6 sm:px-8 pt-32 sm:pt-36 pb-16">
        <article className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="max-w-3xl mb-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#7b7266] hover:text-[#1f1b16] transition-colors">
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> All articles
              </Link>
            </nav>
            <div className="flex flex-wrap items-center gap-2 text-sm text-[#7b7266] mb-4">
              <span className="font-medium text-[#C2410C]">{p.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={p.published}>{formatDate(p.published)}</time>
              <span aria-hidden>·</span>
              <span>{p.readMinutes} min read</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-5">{p.title}</h1>
            <p className="text-sm text-[#7b7266]">By {p.author}</p>
          </header>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.imageAlt} className="w-full aspect-[21/9] object-cover rounded-2xl border border-[#1f1b16]/10 mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Table of contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="text-sm font-medium text-[#7b7266] mb-3">On this page</p>
                <ul className="space-y-2 text-sm border-l border-[#1f1b16]/10">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a href={`#${slugify(h.text)}`} className="block -ml-px pl-4 border-l border-transparent hover:border-[#FF751F] hover:text-[#C2410C] transition-colors leading-snug">
                        {h.text}
                      </a>
                    </li>
                  ))}
                  {p.faqs && (
                    <li>
                      <a href="#faq" className="block -ml-px pl-4 border-l border-transparent hover:border-[#FF751F] hover:text-[#C2410C] transition-colors">
                        Frequently asked questions
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </aside>

            {/* Body */}
            <div className="lg:col-span-8 max-w-[68ch] text-[17px] leading-[1.75] text-[#3d3830]">
              {p.body.map((b, i) => <BlockView key={i} b={b} />)}

              {service && (
                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-10 flex items-center justify-between gap-6 rounded-2xl bg-[#1f1b16] text-[#efe9de] p-6 sm:p-8 hover:bg-[#2e2922] transition-colors"
                >
                  <span>
                    <span className="block text-sm text-[#aaa398] mb-1">Need help with this?</span>
                    <span className="block text-xl font-semibold">Explore our {service.title.toLowerCase()} service</span>
                  </span>
                  <ArrowUpRight className="w-6 h-6 shrink-0 text-[#FF751F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              )}

              {p.faqs && (
                <section id="faq" className="scroll-mt-28 mt-14">
                  <h2 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-[#1f1b16] mb-4">Frequently asked questions</h2>
                  <FaqList items={p.faqs.map((f) => ({ q: f.q, a: [f.a] }))} />
                </section>
              )}
            </div>
          </div>
        </article>

        {/* Enquiry */}
        <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">Ready to build a stronger brand?</h2>
            <p className="text-base text-[#5e554a] leading-relaxed">
              Connect with Click Mine Media to explore a strategy suited to your business goals. Leave your details and
              we&apos;ll get in touch within one working day.
            </p>
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
            <LeadForm idPrefix={`blog-${p.slug}`} />
          </div>
        </section>
      </main>

      {!p.faqs?.length && <FaqBlock items={(p.relatedService && faqsForService(p.relatedService)?.items) || undefined} />}
      <Footer />
    </div>
  );
}
