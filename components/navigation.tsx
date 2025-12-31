'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/icon.png"
              alt="GluteMaxxing"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-gray-900">
              GluteMaxxing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              aria-label="Navigate to Features section"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              aria-label="Navigate to How It Works section"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              aria-label="Navigate to Results section"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              aria-label="Navigate to FAQ section"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3 items-center">
            <button
              onClick={() => scrollToSection('download')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => {
                scrollToSection('download');
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm mt-4"
            >
              Download App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
