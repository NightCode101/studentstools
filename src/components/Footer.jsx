import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Google AdSense Banner Ad */}
      <div className="bg-gray-800 py-4 px-4 text-center">
        <p className="text-sm text-gray-400">Advertisement</p>
        <div className="max-w-7xl mx-auto">
          {/* AdSense ad placeholder */}
          <div className="h-20 bg-gray-700 rounded flex items-center justify-center">
            <p className="text-gray-500">728x90 AdSense Banner</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/gpa-calculator" className="hover:text-blue-400 transition">
                  GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/loan-calculator" className="hover:text-blue-400 transition">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/grade-calculator" className="hover:text-blue-400 transition">
                  Grade Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-sm text-gray-400">
                  These tools are for educational purposes only. Always verify calculations with official sources.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Students Tools. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Built with ❤️ for Filipino students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
