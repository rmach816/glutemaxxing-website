'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Stronger Glutes. Unlock Better Performance.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GluteMaxxing gives you structured workouts, progress tracking, and expert guidance to make leg day actually pay off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('download')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
              >
                Get The App
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-3 bg-white text-gray-900 border-2 border-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl">
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] bg-gray-200 flex flex-col items-center justify-between p-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-semibold">WORKOUT PLAN</div>
                    <div className="w-24 h-2 bg-purple-300 rounded mt-2 mx-auto" />
                  </div>
                  <div className="space-y-3 w-full">
                    <div className="h-3 bg-purple-400 rounded w-32 mx-auto" />
                    <div className="h-3 bg-purple-300 rounded w-40 mx-auto" />
                    <div className="h-3 bg-purple-200 rounded w-36 mx-auto" />
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-semibold">PROGRESS SCREEN</div>
                    <div className="w-16 h-16 bg-purple-300 rounded-full mt-2 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
