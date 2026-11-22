import Link from 'next/link';
import FaqList from './FaqList';
import { faqSections, type Faq } from '../lib/faqs';

// FAQ section shown just above the footer. Defaults to the general questions.
export default function FaqBlock({ items = faqSections[0].items.slice(0, 6), title = 'Common questions' }: { items?: Faq[]; title?: string }) {
  return (
    <section className="px-6 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.15] mb-3">{title}</h2>
          <p className="text-[15px] text-[#5e554a] leading-relaxed">
            More answers on our{' '}
            <Link href="/faq" className="underline underline-offset-4 hover:text-[#C2410C]">FAQ page</Link>.
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}
