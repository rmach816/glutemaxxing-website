import Image from 'next/image';

const screens = [
  {
    label: 'Score Dashboard',
    description: 'GluteMaxxing Score™ with 21 metrics',
    image: '/assets/home-screen/dashboard-view.png',
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    label: 'Photo Analysis',
    description: 'GluteVision™-guided photo capture',
    image: '/assets/home-screen/aiphotoanalysis.png',
  },
  {
    label: 'Progress Tracking',
    description: 'Before/after visual comparison',
    image: '/assets/progress-screen/before-after.png',
  },
  {
    label: 'Score History',
    description: 'Track improvements over time',
    image: '/assets/home-screen/progresstracking.png',
  },
];

export default function Screens() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Inside the App
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            See how GluteVision™ powers your progress tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50">
                <Image
                  src={screen.image}
                  alt={screen.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
