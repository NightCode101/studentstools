import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">ℂ</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-gray-900">StudentTools</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition">
              Tools
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/tools/gpa-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                GPA Calculator
              </Link>
              <Link href="/tools/loan-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Loan Calculator
              </Link>
              <Link href="/tools/grade-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Grade Calculator
              </Link>
            </div>
          </div>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Home
          </Link>
          <Link href="/tools/gpa-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            GPA Calculator
          </Link>
          <Link href="/tools/loan-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Loan Calculator
          </Link>
          <Link href="/tools/grade-calculator" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Grade Calculator
          </Link>
          <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Blog
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
