import Image from 'next/image';
import { Award, TrendingUp, Target } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Objective Scoring',
    description:
      'GluteVision™ provides expert-level analysis in seconds with your GluteMaxxing Score™ and 21 comprehensive metrics—no guessing, just data.',
  },
  {
    icon: TrendingUp,
    title: 'See Real Progress',
    description:
      'Track improvements invisible to the human eye. GluteVision™ detects subtle changes and provides detailed score history with percentile rankings.',
  },
  {
    icon: Target,
    title: 'Smart Coaching Insights',
    description:
      'Know exactly what to focus on with AI-generated insights identifying your strongest areas and focus areas for improvement.',
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Know Your Training Is Working
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Objective analysis you can trust, powered by GluteVision™ AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-purple-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* GluteVision™ Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 bg-gradient-to-br from-purple-100 to-purple-200">
              <Image
                src="/assets/progress-screen/before-after.png"
                alt="Progress comparison powered by GluteVision™ analysis"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="p-6 sm:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                GluteVision™ Powers Your Progress
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Our proprietary computer vision technology analyzes your photos across <strong>21 comprehensive metrics</strong> to provide expert-level assessment. Track your progress with percentile rankings showing exactly where you stand in the fitness community.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700">
                    <strong>Shape & Symmetry</strong> - 9 metrics analyzing projection, roundness, lift, and structure
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700">
                    <strong>Definition & Composition</strong> - 4 metrics tracking muscle definition and body proportions
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray-700">
                    <strong>Progress & Insights</strong> - 7 metrics including velocity, consistency, and AI coaching
                  </span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 The GluteVision™ Difference:</strong> Generic trackers rely on self-assessment. GluteVision™ uses specialized AI trained specifically for glute analysis to detect changes invisible to the human eye.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white border border-purple-100 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> Individual results vary. GluteMaxxing provides progress tracking and analysis tools but does not guarantee specific outcomes. Results depend on consistent training, proper nutrition, and individual factors. Always consult a healthcare professional before starting a new fitness program.
          </p>
        </div>
      </div>
    </section>
  );
}
