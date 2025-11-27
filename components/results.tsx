'use client'

import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    quote: 'I finally have a program that actually targets my glutes. The progress tracking keeps me motivated!',
    improvement: '+2.3',
  },
  {
    name: 'Jessica K.',
    quote: 'The AI analysis is incredible. I can see exactly where I\'m improving and what to focus on.',
    improvement: '+1.8',
  },
  {
    name: 'Emma L.',
    quote: '28-day programs are perfect. Long enough to see results, short enough to stay committed.',
    improvement: '+2.1',
  },
]

export default function Results() {
  return (
    <section id="results" className="bg-gradient-to-br from-purple-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Real Results</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">See what our community is achieving</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center gap-1 text-purple-600">
                    <TrendingUp size={14} />
                    <span className="text-sm font-semibold">{testimonial.improvement} Score</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Before/After Showcase */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 bg-gradient-to-br from-purple-100 to-purple-200">
              <Image
                src="/assets/progress-screen/before-after.png"
                alt="Progress comparison"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                AI Photo Analysis Powers Your Program
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Our AI doesn't just track your progress—it uses your photo analysis to <strong>create your custom workout program</strong>. Every exercise, set, and rep is chosen based on your unique glute development, ensuring your program is perfectly tailored to where you are right now.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700"><strong>Shape & Symmetry Analysis</strong> - AI assesses your current development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700"><strong>Strength Indicators</strong> - Determines your starting fitness level</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700"><strong>Custom Program Generation</strong> - Your workout plan is built from this analysis</span>
                </li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 The Difference:</strong> Generic apps give everyone the same plan. GluteMaxxing analyzes YOUR body and creates a program specifically designed for YOUR current development level.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Disclaimer:</span> Individual results vary. GluteMaxxing does not guarantee specific outcomes. Results depend on consistent training, proper nutrition, and individual factors.
          </p>
        </div>
      </div>
    </section>
  )
}
