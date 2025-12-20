import Image from 'next/image';

const screens = [
  {
    label: 'Home Dashboard',
    description: 'Track your 28-day program progress',
    image: '/assets/home-screen/dashboard-view.png', // Updated to use new dashboard image
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    label: 'Active Workout',
    description: 'Real-time exercise guidance and tracking',
    image: '/assets/home-screen/activeworkout.png',
  },
  {
    label: 'Progress Tracking',
    description: 'AI-powered glute score analysis',
    image: '/assets/progress-screen/before-after.png',
  },
  {
    label: 'Program Overview',
    description: '28-day structured workout plans',
    image: '/assets/workout-program-screens/28-day-program-calendar.png', // Updated to use new calendar image
    fallback: '/assets/workout-program-screens/Motivational.png',
  },
];

export default function Screens() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            App Preview
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            See what's inside GluteMaxxing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-gray-100">
                <Image
                  src={screen.image}
                  alt={screen.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  quality={85}
                  onError={(e) => {
                    // Fallback to alternative image if new image doesn't exist
                    if (screen.fallback) {
                      e.currentTarget.src = screen.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {screen.label}
                </h3>
                <p className="text-sm text-gray-600">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
