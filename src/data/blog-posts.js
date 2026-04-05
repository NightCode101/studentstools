export const blogPosts = [
  {
    slug: 'how-to-calculate-gpa-philippines',
    title: 'How to Calculate GPA in the Philippines: A Student\'s Guide',
    excerpt: 'Learn the step-by-step process of calculating your GPA using the Philippine grading system. Perfect for understanding your academic performance.',
    date: '2026-04-01',
    category: 'Education',
    readingTime: 5,
  },
  {
    slug: 'philippine-grading-system',
    title: 'Understanding the Philippine Grading System (1-5 Scale)',
    excerpt: 'A comprehensive guide to how the Philippine grading system works and what different grades mean for your academic future.',
    date: '2026-03-28',
    category: 'Education',
    readingTime: 6,
  },
  {
    slug: 'weighted-grades-explained',
    title: 'Weighted Grades Explained: Why Your GPA Matters',
    excerpt: 'Understand how weighted grades work and why different components of your grade have different importance.',
    date: '2026-03-25',
    category: 'Education',
    readingTime: 5,
  },
  {
    slug: 'personal-loans-vs-educational-loans',
    title: 'Personal Loans vs Educational Loans in the Philippines',
    excerpt: 'Understand the key differences between personal and educational loans and which might be right for your situation.',
    date: '2026-03-22',
    category: 'Finance',
    readingTime: 7,
  },
  {
    slug: 'how-interest-rates-work',
    title: 'How Interest Rates Work: Simple Explanation for Students',
    excerpt: 'Learn the basics of interest rates and how they affect your loans, savings, and financial decisions.',
    date: '2026-03-19',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'monthly-amortization-explained',
    title: 'Monthly Amortization: What Are You Really Paying?',
    excerpt: 'Break down your loan payments and understand how principal and interest are calculated over time.',
    date: '2026-03-16',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'student-budgeting-tips',
    title: 'Student Budgeting Tips for Maximizing Your Allowance',
    excerpt: 'Practical strategies to manage your money effectively and make your allowance stretch further.',
    date: '2026-03-13',
    category: 'Finance',
    readingTime: 7,
  },
  {
    slug: 'building-credit-score',
    title: 'Credit Scores: Building Financial Credibility',
    excerpt: 'Understand what credit scores are and how building good credit early can help your financial future.',
    date: '2026-03-10',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'investment-basics',
    title: 'Investment Basics: Start Small, Think Big',
    excerpt: 'Introduction to investment options that students can start exploring, even with small amounts of money.',
    date: '2026-03-07',
    category: 'Finance',
    readingTime: 7,
  },
  {
    slug: 'managing-student-debt',
    title: 'How to Manage Student Debt After Graduation',
    excerpt: 'Strategies for paying off your student loans efficiently and planning your post-graduation finances.',
    date: '2026-03-04',
    category: 'Finance',
    readingTime: 8,
  },
  {
    slug: 'compound-interest-savings',
    title: 'The Power of Compound Interest in Savings',
    excerpt: 'Discover how compound interest can help your savings grow exponentially over time.',
    date: '2026-03-01',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'tax-planning-students',
    title: 'Tax Planning for Working Students in the Philippines',
    excerpt: 'A guide to understanding taxes and how working students can take advantage of tax deductions.',
    date: '2026-02-26',
    category: 'Finance',
    readingTime: 7,
  },
  {
    slug: 'emergency-fund',
    title: 'Building an Emergency Fund: Why and How',
    excerpt: 'Learn why every student should have an emergency fund and practical ways to start building one.',
    date: '2026-02-23',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'financial-apps',
    title: 'Financial Apps Every Student Should Use',
    excerpt: 'A curated list of free and affordable apps that can help you manage your finances better.',
    date: '2026-02-20',
    category: 'Finance',
    readingTime: 5,
  },
  {
    slug: 'career-planning-earnings',
    title: 'Career Planning: Earning More After Graduation',
    excerpt: 'How to plan your career path to maximize your earning potential after college.',
    date: '2026-02-17',
    category: 'Career',
    readingTime: 7,
  },
  {
    slug: 'scholarship-opportunities',
    title: 'Scholarship Opportunities and Financial Aid Explained',
    excerpt: 'Comprehensive guide to finding scholarships and understanding financial aid options in the Philippines.',
    date: '2026-02-14',
    category: 'Education',
    readingTime: 8,
  },
  {
    slug: 'side-hustles-money-management',
    title: 'Side Hustles for Students: Money Management',
    excerpt: 'Ideas for earning extra money as a student and how to manage multiple income sources.',
    date: '2026-02-11',
    category: 'Finance',
    readingTime: 7,
  },
  {
    slug: 'understanding-bank-statement',
    title: 'Understanding Your Bank Statement',
    excerpt: 'Learn how to read and understand your bank statement and identify potential fraud.',
    date: '2026-02-08',
    category: 'Finance',
    readingTime: 5,
  },
  {
    slug: 'insurance-explained',
    title: 'Insurance 101: Protection You Actually Need',
    excerpt: 'Introduction to different types of insurance and which ones young professionals should consider.',
    date: '2026-02-05',
    category: 'Finance',
    readingTime: 6,
  },
  {
    slug: 'financial-discipline',
    title: 'Financial Discipline: Creating Wealth Over Time',
    excerpt: 'The habits and mindset shifts needed to build long-term financial wealth and stability.',
    date: '2026-02-02',
    category: 'Finance',
    readingTime: 7,
  },
];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (slug, limit = 3) => {
  const currentPost = getBlogPost(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))];
};
