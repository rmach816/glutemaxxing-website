'use client'

import Image from 'next/image'
import { Download, Zap, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Download,
    number: '1',
    title: 'Complete Onboarding',
    description: 'Answer a few questions about your goals, equipment, and fitness level. Our AI creates your personalized profile.',
    image: '/assets/onbarding-screens/welcomescreen.png',
  },
  {
    icon: Zap,
    number: '2',
    title: 'Get Your 28-Day Program',
    description: 'Receive a structured workout plan tailored to your level. Programs progress from foundation to advanced.',
    image: '/assets/home-screen/womanbrowsingtablet.png', // Changed - shows program viewing
    placeholder: 'Woman viewing phone/tablet showing 28-day workout program calendar with exercise list',
  },
  {
    icon: BarChart3,
    number: '3',
    title: 'Track & Improve',
    description: 'Log workouts, take progress photos, and watch your glute score improve over time.',
    image: '/assets/progress-screen/before-after.png',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-full w-full h-1 bg-purple-200 transform translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-purple-600">{step.number}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-purple-600" strokeWidth={2} />
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
