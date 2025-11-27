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
          <h1 className="text-4xl font-bold">GluteMaxxing Terms of Use</h1>
          <p className="text-purple-200 mt-2">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By downloading, installing, or using the GluteMaxxing mobile application and related services, you agree to follow these Terms of Use. If you do not agree, do not use the app.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Eligibility</h2>
          <p className="text-gray-700 mb-6">
            You must be at least 13 years old to use GluteMaxxing. If you are under 18, you affirm that you have permission from a parent or guardian. You agree that all information you provide is accurate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Description of Service</h2>
          <p className="text-gray-700 mb-6">
            GluteMaxxing provides fitness analysis tools, glute development scoring, workout recommendations, progress tracking, and optional premium features. The app uses AI to analyze fully clothed fitness photos only. The app does not offer medical advice or professional training services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Responsibilities and Acceptable Use</h2>
          <p className="text-gray-700 mb-4">
            You agree to use GluteMaxxing legally and responsibly. You may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Upload nude, underwear, swimsuit, explicit, or partially exposed photos</li>
            <li>Upload images of minors in any state of undress</li>
            <li>Attempt to bypass clothing requirements or safety checks</li>
            <li>Harass, threaten, or harm other users</li>
            <li>Upload illegal, abusive, or inappropriate content</li>
            <li>Misuse or attempt to reverse engineer any part of the app</li>
            <li>Interfere with the app's servers or security</li>
            <li>Use the app for commercial or unauthorized purposes</li>
          </ul>
          <p className="text-gray-700 mb-6">
            We reserve the right to block or remove any content that violates these rules.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Medical Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            GluteMaxxing provides general fitness information only. It is not medical advice. The app does not diagnose, treat, cure, or prevent any medical condition.
          </p>
          <p className="text-gray-700 mb-4">
            You should consult a qualified healthcare professional before starting any new exercise program, especially if you have existing injuries, medical conditions, or health concerns.
          </p>
          <p className="text-gray-700 mb-6">
            You understand and agree that any workout or exercise you perform is done at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Fitness and Safety Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            Exercise involves physical risk. You accept full responsibility for any injury, health issue, or physical condition that results from using the app, including workouts, routines, or recommendations.
          </p>
          <p className="text-gray-700 mb-4">You agree to:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Exercise within your physical limits</li>
            <li>Stop immediately if you feel pain, dizziness, or discomfort</li>
            <li>Follow all safety instructions and clothing requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Photo Requirements and Content Restrictions</h2>
          <p className="text-gray-700 mb-4">
            To maintain safety and comply with App Store and Play Store policies:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li>All photos must show fully clothed bodies (leggings, yoga pants, bike shorts).</li>
            <li>No nudity, underwear, swimsuits, see through clothing, or sexual poses.</li>
            <li>No explicit content of any kind.</li>
            <li>No photos of minors unless fully clothed and compliant with guidance.</li>
            <li>No copyrighted material without permission.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Non compliant photos will be automatically rejected. Repeated violations may result in account termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Privacy and Data Handling</h2>
          <p className="text-gray-700 mb-4">
            GluteMaxxing may store limited metadata, progress information, and user account data. Full resolution photos remain on your device unless you choose to upload them during analysis. Any uploaded images are processed securely then deleted, unless required for analysis history according to your settings.
          </p>
          <p className="text-gray-700 mb-6">
            See our <Link href="/privacy" className="text-purple-600 hover:text-purple-700">Privacy Policy</Link> for full details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Subscriptions, Payments, and Refunds</h2>
          <p className="text-gray-700 mb-4">
            GluteMaxxing offers optional paid subscriptions. Payments are processed by Apple or Google depending on your device. All billing, renewals, and refunds follow their respective platform policies.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Subscriptions renew automatically unless you cancel in your App Store or Google Play settings.</li>
            <li>We do not process cancellations directly.</li>
            <li>We do not issue refunds outside of platform rules.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content, branding, graphics, design, AI models, workouts, and features in GluteMaxxing are owned by GluteMaxxing or licensed partners. You may not copy, reproduce, distribute, or create derivative works without written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Third Party Services</h2>
          <p className="text-gray-700 mb-6">
            Some features may rely on third party tools or services. We are not responsible for issues caused by these external providers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            GluteMaxxing is provided on an "as is" and "as available" basis. We are not liable for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
            <li>direct, indirect, incidental, punitive, or consequential damages</li>
            <li>injuries or health issues related to workouts, exercises, or analysis</li>
            <li>loss of data, device damage, service interruptions, or unauthorized access</li>
            <li>any actions taken based on AI generated suggestions or analysis</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Your sole remedy for dissatisfaction with the app is to stop using it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify and hold GluteMaxxing harmless from all claims, damages, losses, or liabilities arising from:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>your use of the app</li>
            <li>your violation of these Terms</li>
            <li>any content you upload or share</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Termination</h2>
          <p className="text-gray-700 mb-6">
            We may suspend or terminate access to the app for violations of these Terms, for illegal content, or for safety reasons. You may stop using the app at any time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We may update these Terms at any time. Continued use of the app after changes means you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Contact</h2>
          <p className="text-gray-700 mb-6">
            For any questions about these Terms:
            <br />
            Email: <a href="mailto:admin@glutemaxxing.app" className="text-purple-600 hover:text-purple-700">admin@glutemaxxing.app</a>
          </p>
        </div>
      </div>
    </div>
  )
}
