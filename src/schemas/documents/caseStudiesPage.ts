import { defineType, defineField } from 'sanity';

export const caseStudiesPageSchema = defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero / Intro Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Main Title', type: 'string' }),
        defineField({ name: 'title2', title: 'Page Title Subhead / Accent', type: 'string' }),
        defineField({ name: 'description', title: 'Short Description', type: 'text' }),
        defineField({
          name: 'introDescription',
          title: 'Intro Description Paragraphs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Paragraph Text', type: 'text' }),
                defineField({ name: 'bold', title: 'Is Highlighted / Bold', type: 'boolean' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button Settings',
      type: 'object',
      fields: [
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonPath', title: 'Button Route Path', type: 'string' }),
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
        title: title || 'Case Studies Page Settings',
        subtitle: 'Page Hero, CTA & SEO Controls',
      };
    },
  },
});
