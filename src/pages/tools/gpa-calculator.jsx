import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Disclaimer from '@/components/Disclaimer';
import AdBanner from '@/components/AdBanner';
import BlogCard from '@/components/BlogCard';
import { calculateGPA } from '@/lib/calculations';

const relatedPosts = [
  {
    title: 'Understanding the Philippine Grading System (1-5 Scale)',
    excerpt: 'Learn how the Philippines grading system works and why GPA matters.',
    slug: 'philippine-grading-system',
    date: '2026-03-20',
    readingTime: 5,
    category: 'Education',
  },
  {
    title: 'How to Improve Your GPA: Actionable Tips for Students',
    excerpt: 'Practical strategies to boost your GPA and academic performance.',
    slug: 'how-to-improve-gpa',
    date: '2026-03-15',
    readingTime: 7,
    category: 'Education',
  },
];

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { grade: '', credits: '' },
    { grade: '', credits: '' },
    { grade: '', credits: '' },
  ]);
  const [gpa, setGpa] = useState(null);
  const [error, setError] = useState('');

  const handleAddSubject = () => {
    setSubjects([...subjects, { grade: '', credits: '' }]);
  };

  const handleRemoveSubject = (idx) => {
    setSubjects(subjects.filter((_, i) => i !== idx));
  };

  const handleChange = (idx, field, value) => {
    const updated = [...subjects];
    updated[idx][field] = value;
    setSubjects(updated);
  };

  const handleCalculate = () => {
    setError('');
    if (subjects.some(s => !s.grade || !s.credits)) {
      setError('Please fill in all fields');
      return;
    }
    const result = calculateGPA(subjects);
    setGpa(result);
  };

  const handleReset = () => {
    setSubjects([{ grade: '', credits: '' }, { grade: '', credits: '' }, { grade: '', credits: '' }]);
    setGpa(null);
    setError('');
  };

  return (
    <>
      <Head>
        <title>GPA Calculator - Calculate Your Cumulative GPA Instantly</title>
        <meta name="description" content="Calculate your GPA in seconds using our Philippine-friendly GPA calculator. Supports grade and credit hour input for accurate cumulative GPA calculations." />
        <meta name="keywords" content="gpa calculator philippines, cumulative gpa, grade calculator" />
        <canonical href="https://www.studentstool.site/tools/gpa-calculator" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GPA Calculator</h1>
          <p className="text-gray-600 text-lg">Calculate your cumulative GPA accurately based on your grades and credit hours</p>
        </div>
      </section>

      <AdBanner label="Advertisement" style="large" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Disclaimer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your GPA</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-3 gap-4 font-bold text-gray-700 text-sm mb-2">
                <div>Subject/Course</div>
                <div>Grade (0-4.0)</div>
                <div>Credit Hours</div>
              </div>

              {subjects.map((subject, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center">
                  <input
                    type="text"
                    placeholder={`Subject ${idx + 1}`}
                    value={subject.label || ''}
                    onChange={(e) => {
                      const updated = [...subjects];
                      updated[idx].label = e.target.value;
                      setSubjects(updated);
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4.0"
                    placeholder="e.g. 3.5"
                    value={subject.grade}
                    onChange={(e) => handleChange(idx, 'grade', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      placeholder="e.g. 3"
                      value={subject.credits}
                      onChange={(e) => handleChange(idx, 'credits', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {subjects.length > 1 && (
                      <button
                        onClick={() => handleRemoveSubject(idx)}
                        className="text-red-600 hover:text-red-700 font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddSubject}
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                + Add Subject
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Calculate GPA
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Results */}
            {gpa !== null && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-2">Your Cumulative GPA</p>
                <p className="text-5xl font-bold text-green-600 mb-4">{gpa}</p>
                <p className="text-gray-600">
                  {gpa >= 3.75 && 'Excellent! Keep up the great work!'}
                  {gpa >= 3.0 && gpa < 3.75 && 'Very good performance! You\'re doing well.'}
                  {gpa >= 2.0 && gpa < 3.0 && 'Good progress. You\'re on track!'}
                  {gpa < 2.0 && 'Keep working to improve your GPA.'}
                </p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg p-6 h-fit">
            <h3 className="font-bold text-gray-900 mb-4">What is GPA?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your Grade Point Average (GPA) is the average of all your grades, weighted by credit hours.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-gray-900">Formula:</p>
                <p className="text-gray-600 font-mono text-xs bg-white p-2 rounded mt-1">GPA = Σ(Grade × Credits) / Σ(Credits)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Grade Scale:</p>
                <p className="text-gray-600">4.0 = Excellent</p>
                <p className="text-gray-600">3.0 = Very Good</p>
                <p className="text-gray-600">2.0 = Good</p>
                <p className="text-gray-600">Below 2.0 = Needs Improvement</p>
              </div>
            </div>
          </div>
        </div>

        <AdBanner label="Advertisement" style="medium" />

        {/* Information Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Calculator</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Enter your course/subject name (optional)</li>
            <li>Input your grade for each subject (on a 0-4.0 scale)</li>
            <li>Enter the credit hours for each subject</li>
            <li>Click "Calculate GPA" to see your result</li>
            <li>Use "+ Add Subject" to include more courses</li>
          </ol>
        </section>

        {/* FAQ  */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What if I don\'t know my exact grades?',
                a: 'You can estimate based on your letter grades. A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0'
              },
              {
                q: 'Can I include failed subjects?',
                a: 'Yes! Enter the grade as 0, or the actual failing grade if you have retaken the subject.'
              },
              {
                q: 'Does this calculator work for the Philippine system?',
                a: 'Yes! Our calculator works with the 4.0 scale commonly used in Philippine universities.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                <summary className="font-bold text-gray-900 flex justify-between">
                  {faq.q}
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Blog Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>

      <AdBanner label="Advertisement" style="medium" />
    </>
  );
}
