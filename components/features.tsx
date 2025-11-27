'use client'

import Image from 'next/image'
import { Sparkles, Camera, TrendingUp, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'AI Photo Analysis',
    description: 'Upload a progress photo and our AI analyzes your current glute development, assessing shape, symmetry, and strength indicators. This analysis becomes the foundation for your personalized program.',
    image: '/assets/progress-screen/before-after.png',
  },
  {
    icon: Sparkles,
    title: 'Custom-Tailored Programs',
    description: 'No generic templates. Every 28-day program is uniquely created for you based on your AI photo analysis, fitness level, goals, equipment, and preferences. Your program adapts as you progress.',
    image: '/assets/home-screen/dashboard-view.png',
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Track your improvements with AI-powered score analysis. See detailed breakdowns of your glute development over time with visual comparisons and data-driven insights.',
    image: '/assets/progress-screen/fitness chart background.png',
  },
  {
    icon: Dumbbell,
    title: 'Expert Guidance',
    description: 'Get personalized form cues, exercise demonstrations, and recommendations tailored to your current level. Every workout is designed specifically for where you are right now.',
    image: '/assets/active-workout-screen/hipthrust.png',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why GluteMaxxing is Different</h2>
          <p className="text-lg sm:text-xl text-gray-600">Every program is built specifically for you, not pulled from a generic template</p>
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
