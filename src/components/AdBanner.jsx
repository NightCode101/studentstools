export default function AdBanner({ label = 'Advertisement', style = 'large' }) {
  const sizes = {
    large: 'h-64 w-full',
    medium: 'h-32 w-64',
    small: 'h-20 w-96',
  };

  return (
    <div className="my-8 text-center">
      <p className="text-xs text-gray-500 mb-2">{label}</p>
      <div className={`${sizes[style]} bg-gray-100 border border-gray-300 rounded flex items-center justify-center mx-auto`}>
        <p className="text-gray-400 text-sm">Google AdSense Ad Placeholder</p>
      </div>
    </div>
  );
}
