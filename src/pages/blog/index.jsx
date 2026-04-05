import Head from 'next/head';
import BlogCard from '@/components/BlogCard';
import AdBanner from '@/components/AdBanner';
import { blogPosts, getCategories } from '@/data/blog-posts';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = getCategories();

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <>
      <Head>
        <title>Student Finance Blog - Tips, Guides & Financial Advice</title>
        <meta name="description" content="Read tips, guides, and strategies for better grades and smarter financial decisions for Filipino students." />
        <meta name="keywords" content="student finance, budgeting, GPA tips, loan guides, financial literacy" />
        <canonical href="https://www.studentstool.site/blog" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-gray-600 text-lg">Tips, guides, and strategies for smarter academic and financial decisions</p>
        </div>
      </section>

      <AdBanner label="Advertisement" style="large" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === ''
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found in this category. Try another filter!</p>
          </div>
        )}
      </main>

      <AdBanner label="Advertisement" style="medium" />
    </>
  );
}
