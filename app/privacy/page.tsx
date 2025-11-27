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
          <h1 className="text-4xl font-bold">GluteMaxxing Privacy Policy</h1>
          <p className="text-purple-200 mt-2">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Overview</h2>
          <p className="text-gray-700 mb-6">
            This Privacy Policy explains how GluteMaxxing collects, uses, stores, and protects your information. By using the app, you agree to the practices described here.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Account Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Email address</li>
            <li>Password or third party login credential data</li>
            <li>Profile details you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Usage Data</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Features used</li>
            <li>Workouts viewed or completed</li>
            <li>Glute analysis sessions</li>
            <li>Interactions inside the app</li>
            <li>Time spent on screens</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Device and Technical Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Device type</li>
            <li>Operating system</li>
            <li>App version</li>
            <li>IP address (where required for security)</li>
            <li>Crash logs and performance data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Photo Data</h3>
          <p className="text-gray-700 mb-4">
            GluteMaxxing uses photos to analyze glute development. To comply with Apple and Google policies:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li>Photos must be fully clothed (leggings, shorts, yoga pants).</li>
            <li>Nudity, underwear, swimsuits, or explicit images are not permitted.</li>
          </ul>
          
          <p className="text-gray-700 font-semibold mb-2">Storage Rules</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Full resolution photos remain on your device whenever possible.</li>
            <li>If a photo is uploaded for AI analysis, it is processed securely through an encrypted endpoint.</li>
            <li>Uploaded photos are automatically deleted after analysis unless required for a feature you explicitly enable (such as history or side by side comparison).</li>
            <li>We do not store raw butt photos on the server unless you choose a setting that requires it.</li>
            <li>Only metadata, analysis outputs, and optional thumbnails may be stored.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.5 Optional Analytics</h3>
          <p className="text-gray-700 mb-4">
            We may use privacy compliant analytics tools to understand app performance. These tools may collect anonymized or aggregated data such as screen views, error logs, and device behavior.
          </p>
          <p className="text-gray-700 mb-6">
            We do not use third party advertising SDKs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="text-gray-700 mb-4">
            Your data is used only for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li>Operating the GluteMaxxing service</li>
            <li>AI analysis of glute development</li>
            <li>Personalizing workouts and recommendations</li>
            <li>Generating progress reports and trend charts</li>
            <li>Improving app features and overall performance</li>
            <li>Detecting clothing compliance and preventing prohibited content</li>
            <li>Customer support and troubleshooting</li>
            <li>Security, fraud prevention, and abuse detection</li>
          </ul>
          <p className="text-gray-700 mb-6">
            We do not use your data to train unrelated external AI systems.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
          <p className="text-gray-700 mb-4">
            GluteMaxxing does not sell or rent your data.
          </p>
          <p className="text-gray-700 mb-4">
            We may share limited information only with:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Service Providers</h3>
          <p className="text-gray-700 mb-4">
            Third party vendors that help operate the app, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li>Secure cloud hosting</li>
            <li>Analytics providers</li>
            <li>Payment processors (Apple and Google)</li>
            <li>AI processing vendors</li>
          </ul>
          <p className="text-gray-700 mb-6">
            These providers must follow strict confidentiality and data protection rules.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Legal Requirements</h3>
          <p className="text-gray-700 mb-4">
            We may disclose information if required by law, regulation, or valid legal request.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Safety and Compliance</h3>
          <p className="text-gray-700 mb-6">
            If a user uploads prohibited or unsafe content, we may take action to maintain platform safety.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Storage and Security</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Data is stored using secure, encrypted systems.</li>
            <li>Access is restricted to authorized personnel only.</li>
            <li>Photos uploaded for analysis are deleted after processing unless the user enables storage features.</li>
            <li>We take reasonable measures to protect against loss, misuse, or unauthorized access.</li>
            <li>No system is perfectly secure, but we work to safeguard your information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the following rights:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Correction:</strong> Correct inaccurate or outdated information.</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data.</li>
            <li><strong>Withdrawal:</strong> Stop optional analytics where applicable.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            To submit a request, contact us at the email below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child has created an account, contact us for removal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Users</h2>
          <p className="text-gray-700 mb-6">
            If you access the app outside your country, your information may be processed in locations where our service providers operate. We follow standard data transfer safeguards.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy when needed. Continued use of the app after updates means you accept the new version.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            For privacy requests or questions:
            <br />
            Email: <a href="mailto:admin@glutemaxxing.app" className="text-purple-600 hover:text-purple-700">admin@glutemaxxing.app</a>
          </p>
        </div>
      </div>
    </div>
  )
}
