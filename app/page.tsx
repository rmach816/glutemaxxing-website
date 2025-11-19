import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Results from '@/components/results'
import Screens from '@/components/screens'
import FAQ from '@/components/faq'
import Download from '@/components/download'
import Footer from '@/components/footer'

export default function Home() {
  return (
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
  )
}
