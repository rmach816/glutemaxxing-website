'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'

export default function Hero() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
    })
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full -ml-48 -mb-48 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                AI-Powered Personalization
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Not Another Cookie-Cutter<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                Workout Program.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Get a <strong>completely personalized</strong> 28-day glute program created by AI based on your unique body analysis, fitness level, goals, and equipment. Every workout is tailored specifically to you—not a generic template.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>How it works:</strong> Our AI analyzes your progress photo to assess your current glute development, then combines that with your goals, equipment, and fitness level to create a custom program designed just for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {user ? (
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
                >
                  View Your Progress
                </button>
              ) : (
                <>
                  <button
                    onClick={() => router.push('/auth')}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
                  >
                    Get Started Free
                  </button>
                  <button
                    onClick={() => scrollToSection('download')}
                    className="px-8 py-3 bg-white text-gray-900 border-2 border-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
                  >
                    Download App
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Customized</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-2xl font-bold text-gray-900">AI</div>
                <div className="text-sm text-gray-600">Photo Analysis</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-2xl font-bold text-gray-900">28-Day</div>
                <div className="text-sm text-gray-600">Tailored Plans</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <Image
                src="/assets/home-screen/motivationalfitnessscene.png"
                alt="Woman working out with glutes focus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">💪</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Workout Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
