import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you | Click Mine Media',
  description: 'We have received your details. Our team will get back to you within one working day.',
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
