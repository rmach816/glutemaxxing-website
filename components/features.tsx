'use client';

import Image from 'next/image';
import { Sparkles, Camera, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'GluteVision™ Analysis',
    description:
      'Take two photos (side and back profile) and our proprietary GluteVision™ AI analyzes your glutes across 21 comprehensive metrics—shape, symmetry, definition, and progress. Get expert-level analysis in seconds.',
    image: '/assets/home-screen/aiphotoanalysis.png',
  },
  {
    icon: Award,
    title: 'Objective Scoring System',
    description:
      'Receive your GluteMaxxing Score™ (0-100) with percentile rankings showing exactly where you stand. Track improvements across projection, roundness, lift index, symmetry, and 17 other key metrics.',
    image: '/assets/home-screen/dashboard-view.png',
    fallback: '/assets/home-screen/womanbrowsingtablet.png',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description:
      'See changes invisible to the human eye. GluteVision™ detects subtle improvements and provides detailed score history, visual comparisons with overlay sliders, and progress velocity analysis.',
    image: '/assets/home-screen/progresstracking.png',
  },
  {
    icon: Sparkles,
    title: 'Smart Coaching Insights',
    description:
      'Get personalized guidance on what to focus on. GluteVision™ identifies your strongest areas and focus areas with improvement tips—without being a workout app. Perfect companion to your training.',
    image: '/assets/home-screen/expertguidance.png',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-semibold">
              Powered by Proprietary GluteVision™ Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Objective Glute Analysis & Progress Tracking
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike generic fitness trackers, GluteVision™ is trained specifically for glute assessment—providing 21 metrics and expert-level analysis you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    onError={(e) => {
                      if (feature.fallback) {
                        e.currentTarget.src = feature.fallback;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon
                        className="w-7 h-7 text-purple-600"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Makes GluteVision™ Unique */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              What Makes GluteVision™ Unique
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">21 Metrics</div>
                <p className="text-purple-100">
                  Comprehensive analysis across shape, symmetry, definition, progress, and insights
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Glute-Specific</div>
                <p className="text-purple-100">
                  Trained specifically for glute assessment, not generic body tracking
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Percentiles</div>
                <p className="text-purple-100">
                  See how you compare to the broader fitness community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
