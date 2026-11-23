import localFont from 'next/font/local';

// Self-hosted (app/fonts) so builds never depend on fetching Google Fonts.
export const display = localFont({
  src: '../../fonts/SpaceGrotesk-latin.woff2',
  weight: '300 700',
  variable: '--rd-display',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const body = localFont({
  src: '../../fonts/Inter-latin.woff2',
  weight: '100 900',
  variable: '--rd-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const serif = localFont({
  src: '../../fonts/Newsreader-latin.woff2',
  weight: '400',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});
