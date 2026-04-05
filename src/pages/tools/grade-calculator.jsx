import Head from 'next/head';
import { useState } from 'react';
import Disclaimer from '@/components/Disclaimer';
import AdBanner from '@/components/AdBanner';
import { calculateWeightedGrade } from '@/lib/calculations';

export default function GradeCalculator() {
  const [grades, setGrades] = useState([
    { component: 'Participation', grade: '', weight: '' },
    { component: 'Midterm', grade: '', weight: '' },
    { component: 'Final Exam', grade: '', weight: '' },
  ]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleAddGrade = () => {
    setGrades([...grades, { component: '', grade: '', weight: '' }]);
  };

  const handleRemoveGrade = (idx) => {
    setGrades(grades.filter((_, i) => i !== idx));
  };

  const handleChange = (idx, field, value) => {
    const updated = [...grades];
    updated[idx][field] = value;
    setGrades(updated);
  };

  const handleCalculate = () => {
    setError('');
    const totalWeight = grades.reduce((sum, g) => sum + (parseFloat(g.weight) || 0), 0);

    if (grades.some(g => !g.grade || !g.weight)) {
      setError('Please fill in all fields');
      return;
    }

    if (totalWeight !== 100) {
      setError(`Total weight must equal 100% (currently ${totalWeight}%)`);
      return;
    }

    const finalGrade = calculateWeightedGrade(grades);
    setResult(finalGrade);
  };

  const handleReset = () => {
    setGrades([
      { component: 'Participation', grade: '', weight: '' },
      { component: 'Midterm', grade: '', weight: '' },
      { component: 'Final Exam', grade: '', weight: '' },
    ]);
    setResult(null);
    setError('');
  };

  return (
    <>
      <Head>
        <title>Grade Calculator - Calculate Your Final Weighted Grade</title>
        <meta name="description" content="Calculate your final grade with custom components and weights. Perfect for understanding your class standing in the Philippines." />
        <meta name="keywords" content="grade calculator, final grade, weighted average" />
        <canonical href="https://www.studentstool.site/tools/grade-calculator" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Grade Calculator</h1>
          <p className="text-gray-600 text-lg">Calculate your final grade with weighted components</p>
        </div>
      </section>

      <AdBanner label="Advertisement" style="large" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Disclaimer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Final Grade</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-4 gap-3 font-bold text-gray-700 text-sm mb-2">
                <div>Component</div>
                <div>Your Grade</div>
                <div>Weight %</div>
                <div></div>
              </div>

              {grades.map((grade, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-3 items-center">
                  <input
                    type="text"
                    placeholder="e.g. Quiz 1"
                    value={grade.component}
                    onChange={(e) => handleChange(idx, 'component', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    placeholder="e.g. 85"
                    value={grade.grade}
                    onChange={(e) => handleChange(idx, 'grade', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="100"
                      value={grade.weight}
                      placeholder="e.g. 30"
                      onChange={(e) => handleChange(idx, 'weight', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-gray-500">%</span>
                  </div>
                  {grades.length > 1 && (
                    <button
                      onClick={() => handleRemoveGrade(idx)}
                      className="text-red-600 hover:text-red-700 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddGrade}
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                + Add Component
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
              >
                Calculate Grade
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Results */}
            {result !== null && (
              <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-2">Your Final Grade</p>
                <p className="text-5xl font-bold text-purple-600 mb-4">{result}</p>
                <p className="text-gray-600">
                  {result >= 88 && 'Excellent! Outstanding performance!'}
                  {result >= 80 && result < 88 && 'Very Good! Great work!'}
                  {result >= 75 && result < 80 && 'Good! You\'re doing well.'}
                  {result >= 70 && result < 75 && 'Satisfactory. Keep improving!'}
                  {result < 70 && 'Keep working to improve your grade.'}
                </p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-purple-50 rounded-lg p-6 h-fit">
            <h3 className="font-bold text-gray-900 mb-4">How It Works</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-gray-900">1. Enter Components</p>
                <p className="text-gray-600">List each graded component (quizzes, exams, projects)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">2. Set Weights</p>
                <p className="text-gray-600">Assign percentage weight to each component</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">3. Calculate</p>
                <p className="text-gray-600">Get your weighted final grade instantly</p>
              </div>
              <div className="bg-white p-3 rounded mt-4 border border-purple-200">
                <p className="text-xs font-mono">Formula: (Grade₁ × Weight₁ + Grade₂ × Weight₂...) ÷ 100</p>
              </div>
            </div>
          </div>
        </div>

        <AdBanner label="Advertisement" style="medium" />
      </main>

      <AdBanner label="Advertisement" style="medium" />
    </>
  );
}
