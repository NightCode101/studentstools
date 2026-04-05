# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Students Tools** is a static, AdSense-optimized website for Filipino students featuring three interactive financial calculators (GPA, Loan, Grade), 20 blog articles, and professional legal/info pages. Built with Next.js (static export), React, and Tailwind CSS. Designed for Vercel deployment and 100% free hosting.

**Domain:** studentstools.site
**Deployment:** Vercel (free, using static export)
**Cost:** $2/year (domain only)

---

## Common Commands

### Development
```bash
npm run dev           # Start dev server at http://localhost:3000
npm install           # Install dependencies
```

### Production Build
```bash
npm run build          # Build for static export (creates /out folder)
npm run export         # Same as build (alias)
```

### After Build
- Static files are in `/out/` directory
- All 12 pages pre-rendered as HTML/CSS/JS
- No server required for deployment
- Ready to push to Vercel/Netlify/GitHub Pages

---

## Architecture

### Tech Stack
- **Framework:** Next.js 16 (static export: `output: 'export'`)
- **UI:** React 19 + Tailwind CSS 3
- **Styling:** Tailwind CSS (responsive design, color vars in tailwind.config.js)
- **SEO:** Next/head + schema markup generation utilities
- **Type Safety:** TypeScript ready (tsconfig.json configured)

### Key Design Decisions
1. **Static Export Only** - No server needed, deploy anywhere. `next.config.js` has `output: 'export'`
2. **Component-Based** - Reusable components in `/src/components/` (Header, Footer, BlogCard, ToolCard, AdBanner, Disclaimer)
3. **Data-First Blog** - Blog content in `/src/data/blog-content.js` (20,000+ words with FAQs), metadata in `/src/data/blog-posts.js`
4. **Calculator Logic Separated** - Pure functions in `/src/lib/calculations.js` (no side effects)
5. **SEO Utilities Centralized** - Schema markup generation in `/src/lib/seo.js` (used by all pages)

---

## Project Structure Details

### Pages (`/src/pages/`)
- **`index.jsx`** - Homepage with hero, tool showcase, featured blog posts, CTA sections
- **`blog/index.jsx`** - Blog listing with category filters
- **`blog/[slug].jsx`** - Dynamic blog post template with related articles, FAQ section, ad placements
- **`tools/gpa-calculator.jsx`, `loan-calculator.jsx`, `grade-calculator.jsx`** - Interactive tools (client-side calculation)
- **`about.jsx`, `contact.jsx`** - Information pages
- **`privacy-policy.jsx`, `terms-conditions.jsx`** - Legal pages (AdSense compliance)
- **`404.jsx`** - Custom error page
- **`_app.jsx`** - App wrapper with Header/Footer
- **`_document.jsx`** - Not present but can be added for custom HTML structure

### Components (`/src/components/`)
- **Header.jsx** - Responsive navigation with dropdowns, mobile menu
- **Footer.jsx** - Links, ad banner placeholder, copyright
- **BlogCard.jsx** - Reusable blog post card with metadata
- **ToolCard.jsx** - Tool showcase card with features list
- **AdBanner.jsx** - Google AdSense ad placeholder (replace with real publisher code)
- **Disclaimer.jsx** - Finance tool warning banner

### Data & Utilities
- **`src/data/blog-posts.js`** - Array of 20 blog post metadata (slug, title, excerpt, date, category, readingTime). Exports helper functions: `getBlogPost(slug)`, `getRelatedPosts(slug, limit)`, `getBlogPostsByCategory(category)`, `getCategories()`
- **`src/data/blog-content.js`** - Object with blog post content keyed by slug. Each post has HTML `content` and array of `faqItems`
- **`src/lib/seo.js`** - Schema utilities: `organizationSchema()`, `articleSchema()`, `faqSchema()`, `breadcrumbSchema()`, `generateSchemaMarkup()`. Used for SEO and structured data.
- **`src/lib/calculations.js`** - Pure calculator functions: `calculateGPA(subjects)`, `calculateLoan(principal, rate, months)`, `calculateWeightedGrade(grades)`, `convertPhilippineGrade()`, utility formatting functions

### Styles
- **`src/styles/globals.css`** - Tailwind imports + custom utility classes (`.card`, `.btn-primary`, table styling)
- **`tailwind.config.js`** - Custom color palette (primary blue #2563eb, secondary slate #64748b, etc.), font families configured
- **`postcss.config.js`** - Tailwind + autoprefixer processing

---

## Key Patterns & Important Context

### Adding a New Tool
1. Create page in `/src/pages/tools/new-tool.jsx`
2. Export pure calculation function in `/src/lib/calculations.js` (e.g., `export const calculateNewTool = (inputs) => result`)
3. Import function and use with `useState` for client-side calculation
4. Include Disclaimer component
5. Add 2-3 related blog post links at bottom
6. Export produces static HTML - no backend needed

### Adding a Blog Post
1. Add metadata entry to `/src/data/blog-posts.js` with: slug, title, excerpt, date, category, readingTime
2. Add content to `/src/data/blog-content.js` with: `content` (HTML string with H2/H3 headings) and `faqItems` array
3. `[slug].jsx` automatically renders via `getBlogPost(slug)` and `getBlogContent(slug)`
4. Blog posts should include internal links to tools and related articles

### SEO Requirements (AdSense Compliance)
- Every page needs: `<Head>` with title (50-60 chars), description (150-160 chars), canonical URL
- Homepage and tool pages need schema markup: `organizationSchema()`, `breadcrumbSchema()`
- Blog posts need: `articleSchema()`, `faqSchema()` for structured data
- All pages need canonical URLs set to `https://studentstools.site/...`
- Mobile responsive required (tested in Chrome DevTools)
- Page load <2 seconds maintained

### Styling Guidelines
- Use Tailwind utility classes first
- Custom colors defined in `tailwind.config.js` theme extend
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Use `@apply` directives in globals.css for repeated patterns
- Font stack: Poppins (headings), Plus Jakarta Sans (body)

### Ad Placement Strategy
- AdBanner component used for placeholders (replace with real AdSense code after approval)
- Max 3 ads per page (AdSense policy)
- Common slots: header (728x90), mid-article (300x250), sidebar (300x600), footer (728x90)
- All ad code wrapped in `<div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>` for styling

### Philippine Market Context
- All tools support Philippine grading system (1-5 scale and 4.0 scale)
- Content written for Filipino students (local examples, currency ₱)
- Blog articles reference Philippine opportunities, taxes, local loan/scholarship options
- Grade conversion utilities in `calculations.js` handle PH system

### Dynamic Blog System Mechanics
- `blog/[slug].jsx` uses router.query to get slug
- Falls back to "Loading..." if slug not yet available (Next.js quirk)
- `[slug].jsx` calls `getBlogPost(slug)` and `getBlogContent(slug)` to fetch metadata and content
- Related posts found via `getRelatedPosts(slug, 3)` (filters by category, excludes current post)
- Blog cards link dynamically: `<Link href={'/blog/' + slug}>`

---

## Deployment Notes

### Static Export Requirements
- No `getServerSideProps` or `getStaticProps` with dynamic parameters allowed
- All data must be imported or computed at build time
- Blog dynamic route `[slug].jsx` works because all posts are pre-rendered at build time

### After npm run build
- `/out/` contains complete static site
- Push to Vercel, Netlify, or any static host
- Vercel auto-detects Next.js static export

### Important: AdSense Integration
- Replace `<AdBanner />` component placeholders with real AdSense code after approval
- Add this to `_document.jsx` (create if not exists):
```jsx
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
     crossOrigin="anonymous"></script>
```
- Wait 24-48 hours after adding code for ads to appear
- Do NOT click your own ads (instant ban)

---

## Common Troubleshooting

**Build fails with CSS errors:** Run `npm install tailwindcss@3` to fix Tailwind v4 compatibility issues
**Blog post not appearing:** Check slug matches between `blog-posts.js` and `blog-content.js`
**Mobile styling broken:** Check Tailwind breakpoint (e.g., `md:` prefix) - may need adjustment
**Pages showing 404:** Verify `.gitignore` isn't excluding pages or run `npm run build` to ensure all pages generated

---

## Performance Targets

- Page load: <2 seconds (Core Web Vitals: LCP <1.5s, CLS <0.1, FID <100ms)
- Gzipped size: ~150KB (meets budget)
- Mobile score: 95+
- Build time: <10 seconds
