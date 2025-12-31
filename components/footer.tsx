import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icon.svg"
                alt="GluteMaxxing Logo"
                width={32}
                height={32}
                className="w-8 h-8"
                loading="lazy"
              />
              <span className="font-bold text-white">GluteMaxxing</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">
                Powered by GluteVision™
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Objective glute analysis and progress tracking with AI-powered scoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-white transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@glutemaxxing.app"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-400 mb-2">Questions or feedback?</p>
            <a
              href="mailto:support@glutemaxxing.app"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              support@glutemaxxing.app
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center mb-4">
            © {new Date().getFullYear()} GluteMaxxing. All rights reserved. GluteVision™ is a trademark of GluteMaxxing.
          </p>
          <p className="text-xs text-gray-500 text-center leading-relaxed max-w-3xl mx-auto">
            GluteMaxxing provides general fitness information and progress tracking only and is not a
            substitute for professional medical advice. Always consult a
            qualified health provider before starting a new exercise program.
            The app is for informational purposes and does not treat, cure, or
            prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
