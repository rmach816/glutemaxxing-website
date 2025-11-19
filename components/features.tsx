'use client'

import { Dumbbell, TrendingUp, BookOpen, Home } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Glute Focused Programs',
    description: 'Structured lower body training plans built around glutes, hamstrings, and hips.'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Log workouts, track scores, and see trends over time.'
  },
  {
    icon: BookOpen,
    title: 'Form Tips & Cues',
    description: 'Clear, non-technical guidance to help you lift safely and effectively.'
  },
  {
    icon: Home,
    title: 'Home and Gym Options',
    description: 'Plans that work with basic home equipment or full gym setups.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600">Everything you need to transform your lower body training</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
