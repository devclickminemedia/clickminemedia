import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = { title: 'Page not found | Click Mine Media' };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center px-6 sm:px-8 pt-32 pb-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-sm text-[#7b7266] mb-4">404</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
            This page doesn&apos;t exist
          </h1>
          <p className="text-base sm:text-lg text-[#5e554a] leading-relaxed mb-8">
            The link may be old or mistyped. Try one of these instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center justify-center h-12 px-6 rounded-[10px] bg-[#1f1b16] hover:bg-[#2e2922] text-white font-medium transition-colors">
              Go to home
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center h-12 px-6 rounded-[10px] bg-white border border-[#1f1b16]/10 hover:border-[#1f1b16]/25 font-medium transition-colors">
              See our services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
