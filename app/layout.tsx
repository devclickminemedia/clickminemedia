import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import MobileContactBar from './components/MobileContactBar';
import CookieBanner from './components/CookieBanner';
import MobileLeadPopup from './components/MobileLeadPopup';

export const metadata: Metadata = {
  metadataBase: new URL('https://clickminemedia.com'),
  // Google Search Console HTML-tag verification. Set GOOGLE_SITE_VERIFICATION in the hosting env.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  title: 'Click Mine Media | Digital Marketing, SEO & Creative Growth',
  description: 'Click Mine Media helps ambitious brands turn attention into revenue through smart digital marketing, standout creative, and high-performance campaigns.',
  keywords: [
    'digital marketing agency',
    'digital marketing services',
    'social media marketing agency',
    'SEO services',
    'performance marketing',
    'Google Ads management',
    'Meta Ads management',
    'website design and development',
    'content marketing',
    'branding and creative design',
  ],
  authors: [{ name: 'Click Mine Media' }],
  openGraph: {
    title: 'Click Mine Media | Digital Marketing, SEO & Creative Growth',
    description: 'Make Your Brand Impossible to Ignore. High-performance marketing and creative execution.',
    siteName: 'Click Mine Media',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://clickminemedia.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#f7f4ee',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-clip bg-[#f7f4ee] text-slate-900 font-sans antialiased selection:bg-[#FF4B43] selection:text-white">
        {/* bottom padding on phones so the sticky bar never covers content */}
        <div className="pb-[76px] md:pb-0">{children}</div>
        <MobileContactBar />
        <CookieBanner />
        <MobileLeadPopup />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
