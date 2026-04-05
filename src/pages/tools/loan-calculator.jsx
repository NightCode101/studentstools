import Head from 'next/head';
import { useState } from 'react';
import Disclaimer from '@/components/Disclaimer';
import AdBanner from '@/components/AdBanner';
import BlogCard from '@/components/BlogCard';
import { calculateLoan, formatCurrency } from '@/lib/calculations';

const relatedPosts = [
  {
    title: 'How Interest Rates Work: Simple Explanation for Students',
    excerpt: 'Understand the basics of interest rates and how they affect your loans.',
    slug: 'how-interest-rates-work',
    date: '2026-03-18',
    readingTime: 6,
    category: 'Finance',
  },
  {
    title: 'Student Loans in the Philippines: Types and Options',
    excerpt: 'Comprehensive guide to student loans available for Filipino students.',
    slug: 'student-loans-philippines',
    date: '2026-03-12',
    readingTime: 8,
    category: 'Finance',
  },
];

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('5.5');
  const [term, setTerm] = useState('24');
  const [termType, setTermType] = useState('months');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    if (!principal || !rate || !term) {
      setError('Please fill in all fields');
      return;
    }

    const months = termType === 'years' ? parseInt(term) * 12 : parseInt(term);
    const calculation = calculateLoan(principal, rate, months);
    setResult(calculation);
  };

  const handleReset = () => {
    setPrincipal('100000');
    setRate('5.5');
    setTerm('24');
    setTermType('months');
    setResult(null);
    setError('');
  };

  return (
    <>
      <Head>
        <title>Loan Calculator - Calculate Monthly Payments & Interest</title>
        <meta name="description" content="Calculate your loan payments, interest, and amortization schedule. Perfect for student loans and personal loans in the Philippines." />
        <meta name="keywords" content="loan calculator, monthly payment, interest calculator, amortization" />
        <canonical href="https://studentstools.site/tools/loan-calculator" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Loan Calculator</h1>
          <p className="text-gray-600 text-lg">Plan your loan payments and understand your interest costs</p>
        </div>
      </section>

      <AdBanner label="Advertisement" style="large" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Disclaimer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Loan Payments</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <div className="space-y-4 mb-8">
              <div>
                <label className="block font-bold text-gray-700 mb-2">Loan Amount (₱)</label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the total loan amount you want to borrow</p>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-xs text-gray-500 mt-1">Typical rates: Student loans 4-8%, Personal loans 8-15%</p>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Loan Term</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <select
                    value={termType}
                    onChange={(e) => setTermType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={handleCalculate}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Calculate Payment
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <p className="text-gray-600 text-sm">Monthly Payment</p>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(result.monthlyPayment)}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.totalInterest)}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <p className="text-gray-600 text-sm">Total Paid</p>
                    <p className="text-2xl font-bold text-purple-600">{formatCurrency(result.totalPayment)}</p>
                  </div>
                </div>

                {/* Amortization Table */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Amortization Schedule (First 12 Months)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 text-left">Month</th>
                          <th className="px-3 py-2 text-right">Payment</th>
                          <th className="px-3 py-2 text-right">Principal</th>
                          <th className="px-3 py-2 text-right">Interest</th>
                          <th className="px-3 py-2 text-right">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.schedule.slice(0, 12).map((row) => (
                          <tr key={row.month} className="border-b hover:bg-gray-50">
                            <td className="px-3 py-2">{row.month}</td>
                            <td className="px-3 py-2 text-right font-mono">{formatCurrency(row.payment)}</td>
                            <td className="px-3 py-2 text-right font-mono text-green-600">{formatCurrency(row.principal)}</td>
                            <td className="px-3 py-2 text-right font-mono text-red-600">{formatCurrency(row.interest)}</td>
                            <td className="px-3 py-2 text-right font-mono font-bold">{formatCurrency(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {result.schedule.length > 12 && (
                    <p className="text-xs text-gray-500 mt-2">Showing first 12 months. Full schedule continues for all {result.schedule.length} months.</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-green-50 rounded-lg p-6 h-fit">
            <h3 className="font-bold text-gray-900 mb-4">Loan Terms Explained</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-gray-900">Principal</p>
                <p className="text-gray-600">The original loan amount</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Interest Rate</p>
                <p className="text-gray-600">The cost of borrowing annually</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Term</p>
                <p className="text-gray-600">How long you have to repay</p>
              </div>
              <div className="bg-white p-3 rounded mt-4 border border-green-200">
                <p className="text-xs text-gray-600">
                  💡 <strong>Tip:</strong> Longer terms mean lower monthly payments but more total interest paid.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AdBanner label="Advertisement" style="medium" />

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
