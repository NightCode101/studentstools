import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Student Finance Tools</title>
        <meta name="description" content="Get in touch with Student Finance Tools. We'd love to hear your feedback and suggestions." />
      </Head>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Send us your feedback and suggestions.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-bold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@studentstools.site</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600">Follow us for updates and tips</p>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Quick Feedback</h3>
                <p className="text-gray-600">Have a quick suggestion? Use the contact form above!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
