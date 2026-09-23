import type { SanitySEO } from '../sanity/types';

export interface MetaConfigOptions {
  sanityData?: { seo?: SanitySEO } | null;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  canonicalUrl: string;
  defaultOgImage?: string;
}

export function buildPageMeta({
  sanityData,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
  canonicalUrl,
  defaultOgImage = 'https://www.leapsofts.com/logo/Leap-soft-01.png',
}: MetaConfigOptions) {
  const seo = sanityData?.seo;
  const title = seo?.metaTitle || defaultTitle;
  const description = seo?.metaDescription || defaultDescription;
  
  const keywords = Array.isArray(seo?.keywords) && seo.keywords.length > 0
    ? seo.keywords.join(', ')
    : (typeof seo?.keywords === 'string' && seo.keywords ? seo.keywords : defaultKeywords);

  const canonical = seo?.canonicalUrl || canonicalUrl;
  const ogImage = seo?.ogImageUrl || defaultOgImage;
  const twitterImage = seo?.twitterImageUrl || ogImage;

  const isNoIndex = seo?.noIndex || seo?.robots?.toLowerCase().includes('noindex');
  const robotsDirective = isNoIndex ? 'noindex, nofollow' : (seo?.robots || 'index, follow');

  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'robots', content: robotsDirective },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Leapsofts' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@leapsofts' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: twitterImage },
    { tagName: 'link', rel: 'canonical', href: canonical },
  ];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function buildServiceSchema({
  name,
  description,
  canonicalUrl,
  faqs,
}: {
  name: string;
  description: string;
  canonicalUrl: string;
  faqs?: FAQItem[];
}) {
  const graph: any[] = [
    {
      '@type': 'Service',
      'name': name,
      'provider': {
        '@type': 'Organization',
        'name': 'Leapsofts',
        'url': 'https://www.leapsofts.com',
      },
      'serviceType': name,
      'description': description,
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.leapsofts.com/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': name,
          'item': canonicalUrl,
        },
      ],
    },
  ];

  if (Array.isArray(faqs) && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
