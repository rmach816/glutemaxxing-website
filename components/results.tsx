'use client'

import { User } from 'lucide-react'

const testimonials = [
  {
    name: 'David R.',
    quote: 'Having a focused plan for glutes finally made leg day feel like it had a purpose.'
  },
  {
    name: 'Marcus T.',
    quote: 'The progress tracking keeps me motivated. I can actually see my improvements week to week.'
  },
  {
    name: 'James K.',
    quote: 'Best investment in my fitness journey. The form cues have saved me from bad habits.'
  }
]

export default function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Results & Stories</h2>
          <p className="text-xl text-gray-600 mb-8">Real feedback from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Disclaimer:</span> Individual results vary. GluteMaxxing does not guarantee specific outcomes. Results depend on consistent training, proper nutrition, and individual factors.
          </p>
        </div>
      </div>
    </section>
  )
}
