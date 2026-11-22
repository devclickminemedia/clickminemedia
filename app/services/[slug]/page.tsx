import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import SiteHeader from '../../components/redesign/SiteHeader';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import { services } from '../../lib/services';
import { faqsForService, faqJsonLd } from '../../lib/faqs';
import FaqBlock from '../../components/FaqBlock';

const SITE = 'https://clickminemedia.com';

export const dynamicParams = false; // unknown slugs 404

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  const url = `${SITE}/services/${svc.slug}`;
  return {
    title: `${svc.title} | Click Mine Media`,
    description: svc.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: svc.title, description: svc.metaDescription, url, images: [`${SITE}${svc.image}`], type: 'website' },
  };
}

const num = (i: number) => String(i + 1).padStart(2, '0');

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const svc = services[index];
  const others = services.filter((s) => s.slug !== slug);
  const faq = faqsForService(svc.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.metaDescription,
    url: `${SITE}/services/${svc.slug}`,
    areaServed: 'IN',
    provider: { '@type': 'Organization', name: 'Click Mine Media', url: SITE },
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq.items)) }} />}
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="px-6 sm:px-8 pt-32 sm:pt-36 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#7b7266] mb-8">
                <Link href="/services" className="inline-flex items-center gap-2 hover:text-[#1f1b16] transition-colors">
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> All services
                </Link>
              </nav>
              <span className="font-mono text-xs text-[#7b7266] tabular-nums">
                {num(index)} / {num(services.length - 1)}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.08] mt-3 mb-6">
                {svc.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium leading-snug text-[#C2410C] mb-4">
                {svc.oneLiner.replace(/\.$/, '')}
              </p>
              <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed max-w-xl">{svc.whatItIs}</p>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 mt-8 rounded-[10px] bg-[#1f1b16] text-white font-medium hover:bg-[#2e2922] transition-colors"
              >
                Get a call back <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
            <div className="lg:col-span-6">
              <div
                role="img"
                aria-label={svc.title}
                className="aspect-[4/3] rounded-2xl bg-cover bg-center bg-[#efe9df] border border-[#1f1b16]/10"
                style={{ backgroundImage: `url(${svc.image})` }}
              />
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="px-6 sm:px-8 pb-12">
          <div className="max-w-7xl mx-auto border-t border-[#1f1b16]/10 pt-12 sm:pt-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">What we do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {svc.whatWeDo.map((item, j) => (
                <div
                  key={item.name}
                  className="rounded-xl bg-[#fdfbf7] border border-[#1f1b16]/10 p-6 flex flex-col min-h-[200px]"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#efe9df] font-mono text-xs text-[#5e554a] tabular-nums mb-8">
                    {num(j)}
                  </span>
                  <h3 className="text-base font-medium leading-snug mb-2">{item.name}</h3>
                  <p className="text-sm text-[#5e554a] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="px-6 sm:px-8 pb-16">
          <div className="max-w-7xl mx-auto rounded-xl bg-[#efe9df] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <h2 className="text-sm font-medium text-[#7b7266] mb-4">What you get</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {svc.youGet.map((g) => (
                  <li key={g} className="flex gap-3 text-[15px] leading-snug">
                    <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" strokeWidth={1.5} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4 md:border-l md:border-[#1f1b16]/10 md:pl-8">
              <h2 className="text-sm font-medium text-[#7b7266] mb-4">Best for</h2>
              <p className="text-[15px] leading-relaxed">{svc.goodFor}</p>
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section id="get-started" className="scroll-mt-24 px-6 sm:px-8 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
                Talk to us about {svc.title.split(' & ')[0].toLowerCase()}
              </h2>
              <p className="text-base text-[#5e554a] leading-relaxed">
                Leave your details and we&apos;ll get in touch within one working day. The first call is free, and we&apos;ll
                tell you honestly whether this is the right fit.
              </p>
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
              <LeadForm idPrefix={`svc-${svc.id}`} />
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="px-6 sm:px-8 pb-24">
          <div className="max-w-7xl mx-auto border-t border-[#1f1b16]/10 pt-12">
            <h2 className="text-sm font-medium text-[#7b7266] mb-4">Other services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {others.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group flex items-start justify-between gap-3 rounded-xl bg-[#fdfbf7] border border-[#1f1b16]/10 p-5 text-[15px] font-medium leading-snug hover:border-[#1f1b16]/25 hover:text-[#C2410C] transition-colors"
                >
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#7b7266] group-hover:text-[#C2410C]" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {faq && <FaqBlock items={faq.items} />}
      <Footer />
    </div>
  );
}
