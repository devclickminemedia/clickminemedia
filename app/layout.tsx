import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'ClickMineMedia | Digital Media & Creator Growth Agency',
  description: 'ClickMineMedia scales brands and creators with viral short-form storytelling, performance ad creatives, and high-converting influencer campaigns.',
  keywords: [
    'ClickMineMedia',
    'Media Agency',
    'Creator Management',
    'Short Form Video',
    'Influencer Marketing',
    'TikTok Growth',
    'Performance Creative'
  ],
  authors: [{ name: 'ClickMineMedia' }],
  openGraph: {
    title: 'ClickMineMedia | Digital Media & Creator Growth Agency',
    description: 'Turn organic attention into exponential revenue with ClickMineMedia.',
    url: 'https://clickminemedia.com',
    siteName: 'ClickMineMedia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickMineMedia | Digital Media & Creator Growth Agency',
    description: 'Turn organic attention into exponential revenue with ClickMineMedia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
