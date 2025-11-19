'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is GluteMaxxing free?',
    answer: 'We offer a free version with core features and optional paid upgrades for advanced programs. Pricing and terms are clearly displayed in the app stores.'
  },
  {
    question: 'Is this medical advice?',
    answer: 'No. GluteMaxxing provides general fitness information only. It is not medical advice. Always consult a qualified health professional before starting any new exercise program.'
  },
  {
    question: 'Who is this app for?',
    answer: 'GluteMaxxing is intended for adults who want to improve glute and lower body strength and are generally healthy. It\'s suitable for all fitness levels from beginners to advanced athletes.'
  },
  {
    question: 'What data do you collect?',
    answer: 'We collect account information, usage data, and device data to provide and improve the service. Please review our Privacy Policy for complete details on data handling.'
  },
  {
    question: 'Will my photos be public?',
    answer: 'Progress photos are private by default. Share features use abstract graphics and statistics rather than raw photos to protect your privacy.'
  },
  {
    question: 'Can I use this on multiple devices?',
    answer: 'Yes. Your account syncs across all your devices, so your workouts, progress, and settings are always up to date wherever you train.'
  },
  {
    question: 'What if I have technical issues?',
    answer: 'Our support team is here to help. Visit the Contact section or email support@glutemaxxing.com for assistance.'
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can manage your subscription directly through the app stores (Apple App Store or Google Play). Cancellations take effect at the end of your current billing period.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about GluteMaxxing</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
