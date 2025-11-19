'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-sm">G</div>
            </div>
            <span className="font-bold text-lg text-gray-900">GluteMaxxing</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Results
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scrollToSection('download')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm hover:shadow-lg transition-shadow"
            >
              Get The App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
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
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm mt-4"
            >
              Get The App
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
