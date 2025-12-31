import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { inter } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://glutemaxxing.app'),
  title: {
    default: 'GluteMaxxing - GluteVision™ AI Glute Analysis & Progress Tracking',
    template: '%s | GluteMaxxing',
  },
  description:
    'GluteVision™ scores your glutes so you don\'t have to guess. Get objective AI-powered analysis across 21 comprehensive metrics with percentile rankings. Track progress your eyes can\'t detect. Works alongside your existing fitness routine.',
  keywords: [
    'glute analysis',
    'glute tracking',
    'glute progress',
    'glute scoring',
    'glute development',
    'glute maxxing',
    'AI fitness analysis',
    'progress tracking',
    'GluteVision',
    'glute metrics',
    'body composition',
    'fitness tracking',
    'glute shape',
    'glute symmetry',
    'percentile ranking',
  ],
  authors: [{ name: 'GluteMaxxing' }],
  creator: 'GluteMaxxing',
  publisher: 'GluteMaxxing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glutemaxxing.app',
    siteName: 'GluteMaxxing',
    title: 'GluteMaxxing - GluteVision™ AI Glute Analysis & Progress Tracking',
    description:
      'GluteVision™ scores your glutes across 21 metrics with percentile rankings. Track progress invisible to the human eye. Objective analysis powered by proprietary AI technology.',
    images: [
      {
        url: '/assets/home-screen/motivationalfitnessscene.png',
        width: 1200,
        height: 630,
        alt: 'GluteMaxxing - GluteVision™ AI Glute Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GluteMaxxing - GluteVision™ AI Glute Analysis',
    description:
      'GluteVision™ scores your glutes across 21 metrics with percentile rankings. Track progress invisible to the human eye.',
    images: ['/assets/home-screen/motivationalfitnessscene.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://glutemaxxing.app',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8E00FF',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
