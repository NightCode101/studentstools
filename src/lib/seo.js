export const generateMetaTags = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => ({
  title,
  description,
  canonical,
  openGraph: {
    title,
    description,
    type: ogType,
    image: ogImage,
  },
  twitter: {
    card: twitterCard,
    title,
    description,
    image: ogImage,
  },
});

export const generateSchemaMarkup = (data) => {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
};

export const articleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Student Finance Tools',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Organization',
    name: author,
  },
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
});

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Students Tools',
  url: 'https://studentstools.site',
  logo: 'https://studentstools.site/logo.png',
  sameAs: [],
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://studentstools.site${item.url}`,
  })),
});
