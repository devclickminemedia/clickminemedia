'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqBlock from '../components/FaqBlock';

function Greeting() {
  const name = useSearchParams().get('name');
  return <>{name ? `Thanks, ${name}` : 'Thanks'} — we&apos;ve got your details</>;
}

const steps = [
  { title: 'We review your details', desc: 'Someone from our team looks at your enquiry today.' },
  { title: 'We call you', desc: 'Expect a call or WhatsApp message within one working day.' },
  { title: 'We plan together', desc: 'A short, free chat about your business and what will help most.' },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 sm:px-8 pt-32 sm:pt-40 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#1f1b16] text-[#efe9de] flex items-center justify-center mb-8">
            <Check className="w-6 h-6" strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
            <Suspense fallback="Thanks — we've got your details">
              <Greeting />
            </Suspense>
          </h1>
          <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed mb-12">
            Our team will get back to you within one working day. Here&apos;s what happens next.
          </p>

          <ol className="border-t border-[#1f1b16]/10 mb-12">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-6 py-5 border-b border-[#1f1b16]/10">
                <span className="font-mono text-xs text-[#7b7266] tabular-nums pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-base font-medium mb-1">{s.title}</p>
                  <p className="text-sm text-[#5e554a] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[10px] bg-[#1f1b16] hover:bg-[#2e2922] text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[10px] bg-white border border-[#1f1b16]/10 hover:border-[#1f1b16]/25 font-medium transition-colors"
            >
              Browse our services <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </main>

      <FaqBlock />
      <Footer />
    </div>
  );
}
