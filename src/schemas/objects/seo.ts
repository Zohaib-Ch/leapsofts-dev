import { defineType, defineField } from 'sanity';

export const seoSchema = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title tag for search engine results and browser tabs (50-60 characters recommended).',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Short summary for search results (150-160 characters recommended).',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Social sharing image card (1200x630px recommended).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL Override',
      type: 'url',
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Card Image',
      type: 'image',
      description: 'Image used specifically for Twitter/X sharing cards (1200x600px recommended).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'robots',
      title: 'Robots Directives',
      type: 'string',
      description: 'Custom robots meta tag directive (defaults to "index, follow" if not set).',
      options: {
        list: [
          { title: 'Index, Follow (Default)', value: 'index, follow' },
          { title: 'NoIndex, Follow', value: 'noindex, follow' },
          { title: 'Index, NoFollow', value: 'index, nofollow' },
          { title: 'NoIndex, NoFollow', value: 'noindex, nofollow' },
        ],
      },
      initialValue: 'index, follow',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'structuredDataType',
      title: 'Structured Data Type (JSON-LD)',
      type: 'string',
      description: 'Primary schema type for search engine rich results.',
      options: {
        list: [
          { title: 'Service', value: 'Service' },
          { title: 'FAQ Page', value: 'FAQPage' },
          { title: 'Organization', value: 'Organization' },
          { title: 'Article', value: 'Article' },
          { title: 'WebSite', value: 'WebSite' },
        ],
      },
    }),
  ],
});
