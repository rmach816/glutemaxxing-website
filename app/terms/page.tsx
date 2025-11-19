import Link from 'next/link'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-purple-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Terms of Use</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By using GluteMaxxing, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you may not use our app or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Service</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing is provided for personal, non-commercial use. Users agree to use the app responsibly and in compliance with all applicable laws. Prohibited behaviors include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Unauthorized access or tampering with the app</li>
            <li>Harassment, abuse, or harm to other users</li>
            <li>Sharing offensive, illegal, or inappropriate content</li>
            <li>Attempting to reverse engineer or copy the app</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing is provided on an "as-is" basis. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the app. This includes physical injuries from exercises or workouts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Medical Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing provides general fitness information only and is not medical advice. The app does not treat, cure, or prevent any disease. Always consult a qualified health professional before starting a new exercise program.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content, design, and functionality of GluteMaxxing are owned by GluteMaxxing or our partners and are protected by copyright and other laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We may update these terms from time to time. Your continued use of the app constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700">
            For questions about these terms, email <a href="mailto:legal@glutemaxxing.com" className="text-purple-600 hover:text-purple-700">legal@glutemaxxing.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
