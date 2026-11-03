import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
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
  themeColor: '#FAFAFC',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
      <body className="bg-[#FAFAFC] text-slate-900 font-sans antialiased selection:bg-[#FF4B43] selection:text-white">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
