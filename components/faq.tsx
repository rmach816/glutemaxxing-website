'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is GluteVision™?',
    answer: 'GluteVision™ is our proprietary AI analysis engine—a specialized computer vision system trained specifically for glute assessment. Unlike generic fitness trackers, GluteVision™ analyzes your photos across 21 comprehensive metrics including shape, symmetry, definition, and progress to provide expert-level analysis in seconds.'
  },
  {
    question: 'How does GluteMaxxing work?',
    answer: 'Take two photos (side and back profile), enter your biometrics, and GluteVision™ generates your GluteMaxxing Score™ (0-100) along with 21 detailed metrics. Take new photos every 2+ weeks to track your progress over time with percentile rankings showing how you compare to the broader fitness community.'
  },
  {
    question: 'Is GluteMaxxing a workout app?',
    answer: 'No. GluteMaxxing is a progress tracking companion that works alongside your existing fitness routine. Your workout app gives you training programs—GluteMaxxing gives you objective proof that your training is working with AI-powered scoring and visual progress tracking.'
  },
  {
    question: 'What are the 21 metrics?',
    answer: 'GluteVision™ tracks: 1 primary score (GluteMaxxing Score™), 5 shape metrics (projection, roundness, lift index, curve depth, peak position), 4 structure metrics (symmetry, upper-lower balance, width, shelf angle), 2 definition metrics, 2 body composition metrics, 3 progress metrics (velocity, consistency, streak), and 4 smart insights (strongest area, focus area, predicted timeline, shape classification).'
  },
  {
    question: 'Will my photos be public?',
    answer: 'No. Your progress photos are completely private and secure. They are only used for GluteVision™ analysis and stored securely with your account. We never share or make your photos public.'
  },
  {
    question: 'What clothing should I wear for photos?',
    answer: 'You can choose what works best for you: leggings/yoga pants (great for privacy), fitted shorts (balance of comfort and visibility), or bikini/swimsuit (best for competitors and maximum muscle definition scoring). GluteVision™ adjusts scoring weights based on your clothing choice.'
  },
  {
    question: 'How often should I take new photos?',
    answer: 'We recommend taking new photos at least every 2 weeks for optimal progress tracking. You can take photos more frequently if desired. GluteVision™ re-analyzes and updates all your scores with each new photo session.'
  },
  {
    question: 'Is this medical advice?',
    answer: 'No. GluteMaxxing provides general fitness information and progress tracking only. It is not medical advice. Always consult a qualified health professional before starting any new exercise program.'
  },
  {
    question: 'How much does it cost?',
    answer: 'GluteMaxxing offers a free version with core features and optional premium upgrades. Pricing and subscription details are clearly displayed in the app stores (Apple App Store and Google Play).'
  },
  {
    question: 'Can I use this on multiple devices?',
    answer: 'Yes. Your account syncs across all your devices (iOS and Android), so your scores, photos, and progress history are always up to date wherever you access the app.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600">Everything you need to know about GluteMaxxing and GluteVision™</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@glutemaxxing.app"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
