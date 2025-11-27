import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Results from '@/components/results'
import Screens from '@/components/screens'
import FAQ from '@/components/faq'
import Download from '@/components/download'
import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transform your glutes with AI-powered 28-day workout programs, progress tracking, and personalized glute analysis.',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'GluteMaxxing',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'iOS, Android',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1250',
            },
            description: 'AI-powered glute development app with 28-day workout programs and progress tracking.',
            url: 'https://glutemaxxing.app',
            image: 'https://glutemaxxing.app/assets/home-screen/motivationalfitnessscene.png',
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Features />
        <HowItWorks />
        <Results />
        <Screens />
        <FAQ />
        <Download />
        <Footer />
      </main>
    </>
  )
}
