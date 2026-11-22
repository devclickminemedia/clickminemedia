import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/redesign/SiteHeader';
import Footer from '../components/Footer';
import FaqList from '../components/FaqList';
import { faqSections, faqJsonLd } from '../lib/faqs';
import { serviceHref } from '../lib/services';

export const metadata: Metadata = {
  title: 'FAQ | Click Mine Media',
  description:
    'Answers to common questions about our pricing, timelines, paid ads, branding, websites, SEO, video and growth strategy.',
  alternates: { canonical: 'https://clickminemedia.com/faq' },
};

export default function FaqPage() {
  const all = faqSections.flatMap((s) => s.items);
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(all)) }} />
      <SiteHeader />

      <main className="px-6 sm:px-8 pt-32 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] mb-5">
                Frequently asked questions
              </h1>
              <p className="text-base text-[#5e554a] leading-relaxed mb-8">
                Can&apos;t find what you&apos;re looking for? Ask us on WhatsApp or request a call back and we&apos;ll answer it
                directly.
              </p>
              <nav aria-label="FAQ sections" className="hidden lg:block border-t border-[#1f1b16]/10">
                {faqSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center h-11 border-b border-[#1f1b16]/10 text-[15px] hover:text-[#C2410C] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-14">
            {faqSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                  {s.service && (
                    <Link href={serviceHref(s.service)} className="shrink-0 text-sm text-[#7b7266] hover:text-[#C2410C] transition-colors">
                      View service →
                    </Link>
                  )}
                </div>
                <FaqList items={s.items} />
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
