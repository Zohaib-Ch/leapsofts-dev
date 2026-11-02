import { defineType, defineField } from 'sanity';

export const blogPageSchema = defineType({
  name: 'blogPage',
  title: 'Blog Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero / Header Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge Label (e.g. ENGINEERING INSIGHTS)', type: 'string' }),
        defineField({ name: 'title', title: 'Page Main Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Page Subtitle / Tagline', type: 'text', rows: 2 }),
        defineField({ name: 'description', title: 'Description Paragraph', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter Subscription Box',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Newsletter Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Newsletter Description', type: 'text', rows: 2 }),
        defineField({ name: 'buttonText', title: 'Subscribe Button Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Blog Page Settings',
        subtitle: 'Page Hero, Newsletter & SEO Controls (/blog)',
      };
    },
  },
});
