import Image from 'next/image';
import { Camera, Zap, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '1',
    title: 'Capture Progress Photos',
    description:
      'Take two photos (side and back profile) with our GluteVision™-guided camera overlay. Choose your clothing preference (leggings, shorts, or bikini/swimsuit). The overlay ensures consistent positioning for accurate tracking.',
    image: '/assets/home-screen/aiphotoanalysis.png',
  },
  {
    icon: Zap,
    number: '2',
    title: 'Get Your GluteMaxxing Score™',
    description:
      'GluteVision™ analyzes your photos in seconds, providing your comprehensive score (0-100) with percentile ranking. See all 21 metrics including projection, roundness, lift index, symmetry, definition, and more.',
    image: '/assets/workout-program-screens/28-day-program-calendar.png',
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    icon: BarChart3,
    number: '3',
    title: 'Track & Improve',
    description:
      'Take new photos every 2+ weeks. GluteVision™ re-analyzes and updates all scores. Watch your progress with score history charts, before/after photo comparisons, and smart coaching insights on what to focus on.',
    image: '/assets/home-screen/progresstracking.png',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Get objective glute scores and track your progress in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-full w-full h-1 bg-gradient-to-r from-purple-300 to-purple-200 transform translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon
                        className="w-6 h-6 text-purple-600"
                        strokeWidth={2}
                      />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Differentiator Box */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A Progress Tracking Companion, Not a Workout App
            </h3>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-6">
              GluteMaxxing works <strong>alongside your existing fitness routine</strong>. Your workout app gives you training programs—GluteMaxxing gives you objective proof that your training is working with GluteVision™-powered analysis and percentile-ranked scoring.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Every 2+ Weeks</div>
                <p className="text-purple-100">
                  Take new photos and see your progress
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">21 Metrics</div>
                <p className="text-purple-100">
                  Comprehensive glute analysis with percentiles
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Visual Progress</div>
                <p className="text-purple-100">Before/after comparison with overlay slider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
