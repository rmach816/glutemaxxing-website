'use client'

export default function Screens() {
  const screens = [
    { label: 'Program Overview', description: 'View all available workout plans' },
    { label: 'Workout Detail', description: 'Exercise instructions and form cues' },
    { label: 'Progress Chart', description: 'Track your improvements over time' },
    { label: 'Exercise Library', description: 'Browse the full exercise database' }
  ]

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">App Preview</h2>
          <p className="text-xl text-gray-600">See what's inside GluteMaxxing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-300 rounded-lg mx-auto mb-2" />
                  <div className="w-20 h-2 bg-purple-200 rounded mx-auto" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{screen.label}</h3>
                <p className="text-sm text-gray-600 mt-1">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
