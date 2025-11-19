import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-purple-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Collection</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing collects the following types of information to provide and improve our services:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Account information (email, password, profile data)</li>
            <li>Usage data (workouts logged, features used, time spent)</li>
            <li>Device information (device type, operating system, app version)</li>
            <li>Optional analytics and performance data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Data</h2>
          <p className="text-gray-700 mb-6">
            Your data is used for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Providing and personalizing the GluteMaxxing service</li>
            <li>Improving app features and user experience</li>
            <li>Analytics and understanding usage patterns</li>
            <li>Customer support and troubleshooting</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Sharing</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing does not sell your data to third parties. Your personal information is kept confidential and used only for the purposes described above.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You have the right to access, modify, or delete your personal data. For any privacy-related questions or requests, please contact our support team.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this privacy policy, please email <a href="mailto:privacy@glutemaxxing.com" className="text-purple-600 hover:text-purple-700">privacy@glutemaxxing.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
