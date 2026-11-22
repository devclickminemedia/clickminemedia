import { Plus } from 'lucide-react';
import type { Faq } from '../lib/faqs';

function Answer({ paras }: { paras: string[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`l${out.length}`} className="list-disc pl-5 space-y-1">{list.map((l) => <li key={l}>{l}</li>)}</ul>);
    list = [];
  };
  paras.forEach((p) => {
    if (p.startsWith('- ')) list.push(p.slice(2));
    else { flush(); out.push(<p key={`p${out.length}`}>{p}</p>); }
  });
  flush();
  return <div className="space-y-3 text-[15px] text-[#5e554a] leading-relaxed">{out}</div>;
}

// Accordion built on <details>, so it works without JavaScript and answers stay crawlable.
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-[#1f1b16]/10">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-[#1f1b16]/10">
          <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-base sm:text-[17px] font-medium leading-snug hover:text-[#C2410C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF751F] rounded-sm">
            {f.q}
            <Plus className="w-5 h-5 shrink-0 mt-0.5 text-[#7b7266] group-open:rotate-45 group-open:text-[#C2410C] transition-transform duration-300" strokeWidth={1.5} />
          </summary>
          <div className="pb-6 pr-10 max-w-3xl">
            <Answer paras={f.a} />
          </div>
        </details>
      ))}
    </div>
  );
}
