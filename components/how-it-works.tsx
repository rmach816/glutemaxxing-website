'use client'

import { Download, Zap, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Download,
    number: '1',
    title: 'Download the App',
    description: 'Create your profile and set your goals.'
  },
  {
    icon: Zap,
    number: '2',
    title: 'Pick Your Program',
    description: 'Choose from beginner, intermediate, or advanced glute tracks.'
  },
  {
    icon: BarChart3,
    number: '3',
    title: 'Train and Track',
    description: 'Follow your plan, log workouts, and adjust as you go.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-purple-200 transform translate-x-1/2" />
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <Icon className="w-8 h-8 text-purple-600 mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
