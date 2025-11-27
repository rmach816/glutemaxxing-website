'use client'

import Image from 'next/image'
import { Camera, Zap, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Camera,
    number: '1',
    title: 'AI Photo Analysis',
    description: 'Take a progress photo and our AI analyzes your current glute development. You\'ll receive a detailed score assessing shape, symmetry, and strength indicators. This analysis is the foundation for your personalized program.',
    image: '/assets/progress-screen/before-after.png',
  },
  {
    icon: Zap,
    number: '2',
    title: 'Get Your Custom Program',
    description: 'Based on your AI photo analysis, fitness level, goals, and equipment, our AI creates a completely personalized 28-day workout program. No two programs are the same—yours is built specifically for you.',
    image: '/assets/workout-program-screens/28-day-program-calendar.png',
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    icon: BarChart3,
    number: '3',
    title: 'Track & Improve',
    description: 'Complete your workouts and take progress photos. Watch your AI glute score improve over time. Every 28 days, get a new custom program based on your updated analysis and progress.',
    image: '/assets/progress-screen/before-after.png',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-gray-600">Get your personalized program in three simple steps</p>
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
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        if (step.fallback) {
                          e.currentTarget.src = step.fallback
                        }
                      }}
                    />
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

        {/* Key Differentiator Box */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not a Cookie-Cutter Program</h3>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-6">
              Unlike other fitness apps that give you the same generic workout plan, GluteMaxxing uses AI photo analysis to understand your unique starting point. Combined with your goals, equipment, and fitness level, we create a program that's <strong>100% personalized to you</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">AI Analysis</div>
                <p className="text-purple-100">Your body, your starting point</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Custom Built</div>
                <p className="text-purple-100">Programs designed just for you</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Evolves</div>
                <p className="text-purple-100">New program every 28 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
