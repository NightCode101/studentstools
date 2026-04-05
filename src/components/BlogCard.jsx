import Link from 'next/link';

export default function BlogCard({ title, excerpt, slug, date, readingTime, category }) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 h-full flex flex-col cursor-pointer">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
            {category}
          </span>
          <span className="text-xs text-gray-500">{readingTime} min read</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">{excerpt}</p>

        <div className="flex justify-between items-center">
          <time className="text-xs text-gray-500">{new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}</time>
          <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
}
