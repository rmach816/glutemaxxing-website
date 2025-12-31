'use client';

import { Sparkles } from 'lucide-react';

export default function Download() {
  return (
    <section
      id="download"
      className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-semibold">
            Powered by GluteVision™ AI
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
          Ready to Track Your Progress?
        </h2>
        <p className="text-lg sm:text-xl text-purple-100 mb-6 leading-relaxed">
          Get objective glute analysis across 21 comprehensive metrics. See your GluteMaxxing Score™ with percentile rankings and track progress invisible to the human eye.
        </p>
        <p className="text-base text-purple-200 mb-12">
          Start with a free GluteVision™ analysis and see how you score.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://apps.apple.com/us/app/glutemaxxing/id6755850501"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-purple-700 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 text-white/90">
          <div>
            <div className="text-2xl font-bold">21</div>
            <div className="text-sm text-purple-200">Metrics</div>
          </div>
          <div className="h-10 w-px bg-white/30" />
          <div>
            <div className="text-2xl font-bold">AI</div>
            <div className="text-sm text-purple-200">Analysis</div>
          </div>
          <div className="h-10 w-px bg-white/30" />
          <div>
            <div className="text-2xl font-bold">Free</div>
            <div className="text-sm text-purple-200">To Start</div>
          </div>
        </div>
      </div>
    </section>
  );
}
