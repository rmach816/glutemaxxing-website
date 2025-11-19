'use client'

export default function Download() {
  return (
    <section id="download" className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Ready to Upgrade Leg Day?</h2>
        <p className="text-xl text-purple-100 mb-12">
          Join thousands of men building stronger, more powerful glutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg hover:shadow-xl transition-shadow">
            Download on the App Store
          </button>
          <button className="px-8 py-4 bg-purple-800 text-white border-2 border-white rounded-full font-bold text-lg hover:bg-purple-900 transition-colors">
            Get it on Google Play
          </button>
        </div>

        <p className="text-purple-200 text-sm">
          Availability subject to Apple App Store and Google Play approval.
        </p>
      </div>
    </section>
  )
}
