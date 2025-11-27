'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, User } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Navigation() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    checkUser()
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setUser(session?.user || null)
  }

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/icon.png"
              alt="GluteMaxxing"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-gray-900">GluteMaxxing</span>
          </Link>

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
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3 items-center">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  <User size={18} />
                  <span>View Progress</span>
                </Link>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut()
                    router.push('/')
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Sign In
                </Link>
                <button
                  onClick={() => scrollToSection('download')}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm hover:shadow-lg transition-shadow"
                >
                  Get The App
                </button>
              </>
            )}
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
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  View Progress
                </Link>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut()
                    setIsOpen(false)
                    router.push('/')
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <button
                  onClick={() => {
                    scrollToSection('download')
                    setIsOpen(false)
                  }}
                  className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-sm mt-4"
                >
                  Get The App
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
