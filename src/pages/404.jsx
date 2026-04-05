import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Go Home
          </Link>
          <Link href="/blog" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
