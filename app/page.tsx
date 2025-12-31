import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import Results from '@/components/results';
import Screens from '@/components/screens';
import FAQ from '@/components/faq';
import Download from '@/components/download';
import Footer from '@/components/footer';
import { OrganizationSchema, FAQSchema, BreadcrumbSchema } from './schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GluteMaxxing - GluteVision™ AI Glute Analysis & Progress Tracking',
  description:
    'GluteVision™ scores your glutes so you don\'t have to guess. Get objective AI-powered analysis across 21 metrics with percentile rankings. Track progress your eyes can\'t detect. Works alongside your existing fitness routine.',
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema />
      <BreadcrumbSchema />
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
            description:
              'GluteVision™-powered glute analysis and progress tracking app with 21 comprehensive metrics and percentile rankings.',
            url: 'https://glutemaxxing.app',
            image:
              'https://glutemaxxing.app/assets/home-screen/motivationalfitnessscene.png',
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
  );
}
