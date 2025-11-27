'use client'

import Image from 'next/image'
import { Sparkles, Calendar, TrendingUp, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Analysis',
    description: 'Get personalized glute scores with detailed breakdowns of shape, symmetry, and strength indicators.',
    image: '/assets/progress-screen/before-after.png',
  },
  {
    icon: Calendar,
    title: '28-Day Programs',
    description: 'Structured workout plans tailored to your fitness level, progressing from foundation to advanced.',
    image: '/assets/home-screen/dashboard-view.png', // Updated to use new dashboard image
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Visual charts and analytics showing your glute development over time with detailed metrics.',
    image: '/assets/progress-screen/fitness chart background.png',
  },
  {
    icon: Dumbbell,
    title: 'Expert Guidance',
    description: 'Form cues, exercise demonstrations, and personalized recommendations for every workout.',
    image: '/assets/active-workout-screen/hipthrust.png',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg sm:text-xl text-gray-600">Everything you need to transform your glute training</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to alternative image if new image doesn't exist
                      if (feature.fallback) {
                        e.currentTarget.src = feature.fallback
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-purple-600" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
