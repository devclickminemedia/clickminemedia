import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/redesign/SiteHeader';
import Footer from '../components/Footer';
import { services } from '../lib/services';
import FaqBlock from '../components/FaqBlock';

const num = (i: number) => String(i + 1).padStart(2, '0');

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] selection:bg-[#1f1b16] selection:text-white">
      <SiteHeader />

      <main className="px-6 sm:px-8 pt-32 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.08] mb-5">
              Our services
            </h1>
            <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed">
              Six ways we help businesses grow. Pick one to see what it includes, what you get and who it suits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl bg-[#fdfbf7] border border-[#1f1b16]/10 overflow-hidden hover:-translate-y-1 hover:border-[#1f1b16]/20 hover:shadow-[0_12px_32px_-16px_rgba(31,27,22,0.35)] transition-[transform,border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF751F]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#efe9df]">
                  <div
                    role="img"
                    aria-label=""
                    className="w-full h-full bg-cover bg-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="font-mono text-xs text-[#7b7266] tabular-nums mb-3">{num(i)}</span>
                  <h2 className="text-xl font-semibold tracking-tight leading-snug mb-2 group-hover:text-[#C2410C] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-[15px] text-[#5e554a] leading-relaxed mb-6">{s.oneLiner}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FaqBlock />
      <Footer />
    </div>
  );
}
