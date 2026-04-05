import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Students Tools</title>
        <meta name="description" content="Learn about Students Tools, our mission to help Filipino students succeed academically and financially." />
      </Head>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
          <p className="text-gray-600 text-lg">Empowering Filipino students with free, accurate financial tools</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Student Finance Tools, we believe every student deserves access to accurate, easy-to-use calculators for managing their grades and finances. Our mission is to empower Filipino students with free tools that help them make smarter decisions about their education and financial future.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Free GPA Calculator</strong> - Calculate your cumulative GPA with support for Philippine grading systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Loan Calculator</strong> - understand your monthly payments and interest costs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Grade Calculator</strong> - Calculate your final grade with custom weighted components</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Educational Content</strong> - Read our blog for tips on academics, finance, and student life</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600">No hidden fees, no sign-ups needed. All tools are completely free to use.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">Our calculators use standard mathematical formulas verified for accuracy.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">Your data stays with you. We don't store or sell any personal information.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Built for Philippines</h3>
              <p className="text-gray-600">Designed specifically for the Philippine education and financial systems.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold inline-block">
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
}
