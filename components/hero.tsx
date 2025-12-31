'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full -ml-48 -mb-48 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold">
                Powered by GluteVision™ AI
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              GluteVision™ Scores Your Glutes
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                So You Don't Have to Guess
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Most people quit their fitness journey within 3 months because they can't see if their training is working. GluteMaxxing provides <strong>objective, AI-powered scores</strong> that track real progress—even when changes are too subtle for the human eye to detect.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 p-5 rounded-2xl shadow-sm">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-purple-700">How GluteVision™ works:</strong> Our proprietary computer vision technology analyzes your photos across 21 comprehensive metrics—shape, symmetry, definition, and progress—providing expert-level analysis in seconds.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('download')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Download Free
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 bg-white text-gray-900 border-2 border-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
              >
                See How It Works
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">21</div>
                <div className="text-sm text-gray-600">Metrics Tracked</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-2xl font-bold text-gray-900">AI</div>
                <div className="text-sm text-gray-600">GluteVision™</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-2xl font-bold text-gray-900">Objective</div>
                <div className="text-sm text-gray-600">Progress Scores</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <Image
                src="/assets/home-screen/motivationalfitnessscene.png"
                alt="GluteMaxxing AI-powered glute analysis"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Score Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-purple-100 z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    85
                  </span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    GluteMaxxing Score™
                  </div>
                  <div className="text-xs text-purple-600 font-semibold">
                    Top 10% • Advanced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
