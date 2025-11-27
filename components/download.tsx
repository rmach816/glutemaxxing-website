'use client'

export default function Download() {
  return (
    <section id="download" className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">Ready for Your Custom Program?</h2>
        <p className="text-lg sm:text-xl text-purple-100 mb-6">
          Get a personalized 28-day glute program created by AI based on your unique body analysis. No generic templates—just workouts designed specifically for you.
        </p>
        <p className="text-base text-purple-200 mb-12">
          Start with a free AI photo analysis and see your personalized glute score.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://apps.apple.com/us/app/glutemaxxing/id6755850501"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg hover:shadow-xl transition-shadow text-center"
          >
            Download on the App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.glutemaxxing.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-800 text-white border-2 border-white rounded-full font-bold text-lg hover:bg-purple-900 transition-colors text-center"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="text-purple-200 text-sm">
          Availability subject to Apple App Store and Google Play approval.
        </p>
      </div>
    </section>
  )
}
