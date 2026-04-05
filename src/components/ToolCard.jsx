import Link from 'next/link';

export default function ToolCard({ title, description, icon, href, features = [] }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 cursor-pointer h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-2">
          Try Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Link>
  );
}
