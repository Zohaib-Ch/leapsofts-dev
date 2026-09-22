import { defineType, defineField } from 'sanity';

export const industrySchema = defineType({
  name: 'industry',
  title: 'Industry Page',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main Info' },
    { name: 'hero', title: 'Hero & Overview' },
    { name: 'content', title: 'Content & Grids' },
    { name: 'process', title: 'Process & CTAs' },
    { name: 'seo', title: 'SEO Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Industry Name',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug Path',
      type: 'slug',
      group: 'main',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badgeText',
      title: 'Badge Subhead',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'main',
      rows: 2,
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero / Intro Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'title', title: 'Hero Main Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Hero Subtitle', type: 'string' }),
        defineField({ name: 'introText', title: 'Intro Paragraph', type: 'text' }),
      ],
    }),

    // Commitment Section
    defineField({
      name: 'commitmentSection',
      title: 'Our Commitment Section',
      type: 'object',
      group: 'content',
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
                defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
                defineField({ name: 'description', title: 'Pillar Description', type: 'text' }),
                defineField({
                  name: 'icon',
                  title: 'Icon Selection',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Sphere Icon', value: '/industryicons/sphere.svg' },
                      { title: 'Bipiramida Icon', value: '/industryicons/bipiramida.svg' },
                      { title: 'Diamond Icon', value: '/industryicons/diamond.svg' },
                      { title: 'Lens Blue Icon', value: '/industryicons/lens-blue-1.svg' },
                      { title: 'Vector Icon', value: '/industryicons/vector-1.svg' },
                    ],
                  },
                  initialValue: '/industryicons/sphere.svg',
                }),
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
      group: 'process',
      fields: [
        defineField({ name: 'label', title: 'CTA Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'descriptionText', title: 'Description Text', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonPath', title: 'Button Path / Link (e.g. #contact)', type: 'string' }),
        defineField({ name: 'image', title: 'CTA Image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // Industry Solutions / Emerging Tech Grid
    defineField({
      name: 'solutionsSection',
      title: 'Industry Solutions Grid (Our Solutions)',
      type: 'object',
      group: 'content',
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
                defineField({
                  name: 'icon',
                  title: 'Icon Selection',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Product (Parallelepipeds)', value: 'product' },
                      { title: 'Enterprise (Bipiramida)', value: 'enterprise' },
                      { title: 'HIPAA & Health', value: 'hipaa' },
                      { title: 'SaaS & Cloud (Sphere)', value: 'saas' },
                      { title: 'E-Commerce (Diamond)', value: 'ecommerce' },
                      { title: 'Mobile & Startup', value: 'mobile' },
                      { title: 'Legacy & Modernization (Tetris)', value: 'legacy' },
                      { title: 'Third-Party Integration (Tetris 2)', value: 'thirdParty' },
                    ],
                  },
                  initialValue: 'enterprise',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Capabilities Section (Services)
    defineField({
      name: 'servicesSection',
      title: 'Capabilities & Services Banner',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
      ],
    }),

    // Process Header
    defineField({
      name: 'processHeader',
      title: 'Process Header Titles',
      type: 'object',
      group: 'process',
      fields: [
        defineField({ name: 'titleMain', title: 'Process Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Process Title Accent', type: 'string' }),
      ],
    }),

    defineField({
      name: 'relatedServices',
      title: 'Related Services / Engineering Capabilities',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'sectionLabel', title: 'Section Label', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Related Service Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Service Title', type: 'string' }),
                defineField({ name: 'description', title: 'Service Description', type: 'text' }),
                defineField({ name: 'link', title: 'URL Link (e.g. /services/custom-software-development)', type: 'string' }),
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
      group: 'content',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'Industry FAQs',
      type: 'array',
      group: 'content',
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
      group: 'seo',
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
