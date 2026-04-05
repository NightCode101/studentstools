import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdBanner from '@/components/AdBanner';
import BlogCard from '@/components/BlogCard';
import { getBlogPost, getRelatedPosts } from '@/data/blog-posts';
import { getBlogContent } from '@/data/blog-content';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <div className="text-center py-12">Loading...</div>;

  const post = getBlogPost(slug);
  const content = getBlogContent(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post || !content) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const adjustedDate = new Date(post.date);
  const dateStr = adjustedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Head>
        <title>{post.title} - Student Finance Tools</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, ${post.title}`} />
        <canonical href={`https://www.studentstool.site/blog/${slug}`} />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700">
              ← Blog
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">
              {post.category}
            </span>
            <span>{dateStr}</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      <AdBanner label="Advertisement" style="large" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none mb-12 text-gray-700">
          <div
            dangerouslySetInnerHTML={{ __html: content.content }}
            className="space-y-4"
          />
        </article>

        {/* FAQ Section */}
        {content.faqItems && content.faqItems.length > 0 && (
          <section className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {content.faqItems.map((item, idx) => (
                <details key={idx} className="bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                  <summary className="font-bold text-gray-900 flex justify-between items-center">
                    {item.question}
                    <span className="ml-4">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <AdBanner label="Advertisement" style="medium" />

        {/* Author & Info */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="font-bold text-gray-900 mb-2">About This Article</h3>
          <p className="text-gray-600 text-sm">
            Originally published on {dateStr}. Updated regularly to reflect current information and reader feedback. Educational content designed for Filipino students.
          </p>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.slug} {...relatedPost} />
              ))}
            </div>
          </section>
        )}
      </main>

      <AdBanner label="Advertisement" style="medium" />

      {/* Share Section */}
      <section className="bg-blue-50 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Found this helpful?</h2>
          <p className="text-gray-600 mb-6">Share this article with other students who might benefit from it.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Share on Facebook
            </button>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
              Share on Twitter
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Share via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
