import { defineType, defineField } from 'sanity';

export const caseStudySchema = defineType({
  name: 'caseStudy',
  title: 'Case Study / Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Project Unique Identifier (e.g. project-industry-0, project-1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Case Study Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Project Case Study', value: 'project' },
          { title: 'Industry Portfolio', value: 'industry' },
        ],
      },
    }),
    defineField({
      name: 'brand',
      title: 'Client / Brand Info',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Brand Name', type: 'string' }),
        defineField({ name: 'description', title: 'Brand Description / Tagline', type: 'text' }),
        defineField({ name: 'logo', title: 'Brand Logo Image', type: 'image' }),
      ],
    }),
    defineField({ name: 'industry', title: 'Industry Name', type: 'string' }),
    defineField({
      name: 'projectList',
      title: 'Deliverables & Sub-projects',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'coverImage', title: 'Featured Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'brandVisualImg', title: 'Brand Visual Hero Image', type: 'image' }),
    defineField({
      name: 'tabs',
      title: 'Interactive Feature Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'Tab ID', type: 'string' }),
            defineField({ name: 'label', title: 'Tab Label', type: 'string' }),
            defineField({ name: 'isActive', title: 'Is Active By Default', type: 'boolean' }),
          ],
        },
      ],
    }),
    defineField({ name: 'summary', title: 'Executive Summary Description', type: 'text' }),
    defineField({
      name: 'impact',
      title: 'Impact Showcase',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Impact Showcase Title', type: 'string' }),
        defineField({
          name: 'images',
          title: 'Showcase Image Gallery',
          type: 'array',
          of: [{ type: 'image' }],
        }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Executive Details Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Metric Label', type: 'string' }),
            defineField({ name: 'value', title: 'Metric Value', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Tools & Technologies',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Tech Stack Header Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Tech Groups',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Category Label (e.g. AI/LLM, Database)', type: 'string' }),
                defineField({
                  name: 'techs',
                  title: 'Technologies',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'name', title: 'Technology Name', type: 'string' }),
                        defineField({ name: 'icon', title: 'Icon Identifier / Image URL', type: 'string' }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({ name: 'challenge', title: 'The Challenge Narrative', type: 'portableText' }),
    defineField({ name: 'solution', title: 'The Solution Narrative', type: 'portableText' }),
    defineField({
      name: 'results',
      title: 'Key Results & Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Result Label', type: 'string' }),
            defineField({ name: 'value', title: 'Result Value', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Testimonial Quote', type: 'text' }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role / Company', type: 'string' }),
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
      subtitle: 'brand.name',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Case Study',
        subtitle: subtitle ? `Client: ${subtitle}` : 'Case Study',
      };
    },
  },
});
