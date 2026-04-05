import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Student Finance Tools</title>
        <meta name="description" content="Privacy Policy for Student Finance Tools. Learn how we protect your data." />
      </Head>

      <section className="bg-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-sm max-w-none">
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Student Finance Tools ("we", "our", or "us") operates the studentfinancetools.com website and our mobile-responsive calculators (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Data Collection</h2>
            <p>
              <strong>Personal Data You Provide:</strong> When you contact us through our contact form, you may provide your name, email address, and message content. This data is only used to respond to your inquiry.
            </p>
            <p className="mt-3">
              <strong>Calculation Data:</strong> All calculations (GPA, loans, grades) are performed entirely in your browser. We do NOT collect, store, or transmit your calculation data to any server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Cookies and Tracking</h2>
            <p>
              We use Google AdSense and Google Analytics to improve our service. These services may place cookies on your device to track your browsing behavior. You can disable cookies through your browser settings.
            </p>
            <p className="mt-3">
              <strong>Google AdSense:</strong> Google displays personalized ads on our website. Google may set cookies on your device. For information on how Google uses data, visit Google's Privacy Policy.
            </p>
            <p className="mt-3">
              <strong>Google Analytics:</strong> We use Google Analytics to understand how users interact with our website. This helps us improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p>
              Our website uses the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Google AdSense (Advertising)</li>
              <li>Google Analytics (Analytics)</li>
              <li>Vercel (Hosting)</li>
            </ul>
            <p className="mt-3">
              These services may collect data about your usage. Please review their privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at support@studentstool.site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Security</h2>
            <p>
              We take reasonable precautions to protect your personal data. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> support@studentstool.site
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
