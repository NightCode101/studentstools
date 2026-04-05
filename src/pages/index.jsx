import Head from 'next/head';
import ToolCard from '@/components/ToolCard';
import BlogCard from '@/components/BlogCard';
import AdBanner from '@/components/AdBanner';
import { articleSchema, organizationSchema, breadcrumbSchema } from '@/lib/seo';

const recentBlogPosts = [
  {
    title: 'How to Calculate GPA in the Philippines: A Student\'s Guide',
    excerpt: 'Learn the step-by-step process of calculating your GPA using the Philippine grading system.',
    slug: 'how-to-calculate-gpa-philippines',
    date: '2026-04-01',
    readingTime: 5,
    category: 'Education',
  },
  {
    title: 'Personal Loans vs Educational Loans: Which is Right for You?',
    excerpt: 'Understand the key differences between personal and educational loans in the Philippines.',
    slug: 'personal-loans-vs-educational-loans',
    date: '2026-03-28',
    readingTime: 6,
    category: 'Finance',
  },
  {
    title: 'Student Budgeting Tips for Maximizing Your Allowance',
    excerpt: 'Practical strategies to manage your money effectively as a student.',
    slug: 'student-budgeting-tips',
    date: '2026-03-25',
    readingTime: 7,
    category: 'Finance',
  },
];

export default function Home() {
  const orgSchema = organizationSchema();
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  return (
    <>
      <Head>
        <title>Student Finance Tools - Free GPA, Loan & Grade Calculators</title>
        <meta name="description" content="Calculate GPA, loans, and grades effortlessly. Trusted by thousands of Filipino students. Get accurate results instantly with our free online calculators." />
        <meta name="keywords" content="gpa calculator, loan calculator, grade calculator, philippines, student tool" />
        <meta property="og:title" content="Student Finance Tools - Free GPA, Loan & Grade Calculators" />
        <meta property="og:description" content="Calculate GPA, loans, and grades instantly. Trusted by Filipino students." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <canonical href="https://studentstools.site/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Student Finance Tools
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Calculate your GPA, plan your loans, and manage your grades with accurate, easy-to-use tools designed for Filipino students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tools" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Explore Tools
            </a>
            <a href="/blog" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition font-semibold">
              Read Blog
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>100% Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Accurate Calculations</span>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <AdBanner label="Advertisement" style="large" />

      {/* Tools Section */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Financial Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful calculators to help you make smarter academic and financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ToolCard
              title="GPA Calculator"
              description="Calculate your cumulative GPA based on your grades and credit hours. Perfect for tracking academic performance."
              icon="📊"
              href="/tools/gpa-calculator"
              features={['Real-time calculation', 'Philippine scale support', 'Export results']}
            />
            <ToolCard
              title="Loan Calculator"
              description="Plan your loan payments with our comprehensive calculator. See monthly payments and total interest costs."
              icon="💰"
              href="/tools/loan-calculator"
              features={['Monthly amortization', 'Interest breakdown', 'Payment schedule']}
            />
            <ToolCard
              title="Grade Calculator"
              description="Calculate your final grade with weighted components. Perfect for understanding your class standing."
              icon="📈"
              href="/tools/grade-calculator"
              features={['Multiple components', 'Custom weights', 'Instant results']}
            />
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <AdBanner label="Advertisement" style="medium" />

      {/* Blog Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest From Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tips, guides, and strategies for better grades and smarter financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentBlogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center">
            <a href="/blog" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <AdBanner label="Advertisement" style="medium" />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Are these calculators accurate?',
                a: 'Yes! Our calculators use standard mathematical formulas. However, for official records, always verify with your institution.'
              },
              {
                q: 'Is there a mobile app?',
                a: 'Our website is fully responsive and works great on mobile devices. No app download needed!'
              },
              {
                q: 'Is my data safe?',
                a: 'All calculations happen in your browser. We don\'t store any of your personal data.'
              },
              {
                q: 'Can I use these tools for official submissions?',
                a: 'These are educational tools. Always verify with your school for official GPA and grade calculations.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="ml-4">+</span>
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Academic Path?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Start using our free tools today with no registration required.
          </p>
          <a href="#tools" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
}
