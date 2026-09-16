import { defineType, defineField } from 'sanity';

export const industrySchema = defineType({
  name: 'industry',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Industry Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug Path',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'badgeText', title: 'Badge Subhead', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Hero Subtitle', type: 'text' }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero / Intro Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Hero Main Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Hero Subtitle', type: 'string' }),
        defineField({ name: 'introText', title: 'Intro Paragraph', type: 'text' }),
      ],
    }),

    // Commitment Section
    defineField({
      name: 'commitmentSection',
      title: 'Commitment Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Section Subhead', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Commitment Pillars',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Icon Identifier / Path', type: 'string' }),
                defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
                defineField({ name: 'description', title: 'Pillar Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Strategy CTA Banner
    defineField({
      name: 'strategyCTA',
      title: 'Strategy Session CTA Banner',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'CTA Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'descriptionText', title: 'Description Text', type: 'text' }),
        defineField({ name: 'image', title: 'CTA Image', type: 'image' }),
      ],
    }),

    // Industry Solutions / Emerging Tech Grid
    defineField({
      name: 'solutionsSection',
      title: 'Industry Solutions Grid',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Solution Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Solution Title', type: 'string' }),
                defineField({ name: 'description', title: 'Solution Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Identifier', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'whoWeServe',
      title: 'Who We Serve (Sub-segments)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'Industry FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' }),
          ],
        },
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
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Industry',
        subtitle: subtitle ? `Path: /industries/${subtitle}` : 'Industry Page',
      };
    },
  },
});
