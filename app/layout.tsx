import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://glutemaxxing.app'),
  title: {
    default: 'GluteMaxxing - AI-Powered Glute Development & Workout Tracking',
    template: '%s | GluteMaxxing',
  },
  description: 'Transform your glutes with AI-powered 28-day workout programs, progress tracking, and personalized glute analysis. Build stronger glutes with structured training plans designed for all fitness levels.',
  keywords: [
    'glute workouts',
    'glute training',
    'glute exercises',
    'glute development',
    'glute maxxing',
    'lower body workouts',
    'glute building',
    'fitness app',
    'workout tracking',
    'AI fitness',
    'glute analysis',
    '28-day workout program',
    'glute strength',
    'glute hypertrophy',
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
    title: 'GluteMaxxing - AI-Powered Glute Development & Workout Tracking',
    description: 'Transform your glutes with AI-powered 28-day workout programs, progress tracking, and personalized glute analysis.',
    images: [
      {
        url: '/assets/home-screen/motivationalfitnessscene.png',
        width: 1200,
        height: 630,
        alt: 'GluteMaxxing - AI-Powered Glute Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GluteMaxxing - AI-Powered Glute Development',
    description: 'Transform your glutes with AI-powered 28-day workout programs and progress tracking.',
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8E00FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
