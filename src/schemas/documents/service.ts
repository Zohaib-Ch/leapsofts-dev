import { defineType, defineField } from 'sanity';

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug Path',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Product Engineering', value: 'Product Engineering' },
          { title: 'Next Gen Services', value: 'Next Gen Services' },
          { title: 'Cloud Services', value: 'Cloud Services' },
          { title: 'Solutions', value: 'Solutions' },
        ],
      },
    }),
    defineField({
      name: 'badgeText',
      title: 'Category Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Subtitle',
      type: 'text',
      rows: 2,
    }),

    // Section 1: Hero / Intro
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

    // Section 2: Service Overview
    defineField({
      name: 'serviceOverview',
      title: 'Service Overview Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent (Colored)', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'description', title: 'Overview Description', type: 'text' }),
        defineField({ name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // Section 3: Capabilities (Slide-based)
    defineField({
      name: 'capabilitiesSection',
      title: 'Capabilities Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Capabilities Title', type: 'string' }),
        defineField({ name: 'description', title: 'Capabilities Subhead', type: 'text' }),
        defineField({
          name: 'slides',
          title: 'Capability Slides / Tabs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Slide ID', type: 'string' }),
                defineField({ name: 'number', title: 'Index Code (e.g. < 01 >)', type: 'string' }),
                defineField({ name: 'title', title: 'Slide Title', type: 'string' }),
                defineField({ name: 'image', title: 'Slide Image', type: 'image' }),
                defineField({
                  name: 'items',
                  title: 'Capability Bullet Points',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'name', title: 'Item Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Item Description', type: 'text' }),
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

    // Section 4: Info Grid (Grid of key details)
    defineField({
      name: 'infoGrid',
      title: 'Info Grid Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Info Grid Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                defineField({ name: 'description', title: 'Card Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 5: Comparison Table (e.g. Custom vs Off-The-Shelf)
    defineField({
      name: 'comparisonTable',
      title: 'Comparison Table Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Table Description', type: 'text' }),
        defineField({
          name: 'headers',
          title: 'Column Headers',
          type: 'object',
          fields: [
            defineField({ name: 'feature', title: 'Feature Column Name', type: 'string' }),
            defineField({ name: 'custom', title: 'Custom Solution Column Name', type: 'string' }),
            defineField({ name: 'offTheShelf', title: 'Off-The-Shelf Column Name', type: 'string' }),
          ],
        }),
        defineField({
          name: 'items',
          title: 'Comparison Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'feature', title: 'Feature Title', type: 'string' }),
                defineField({ name: 'custom', title: 'Custom Detail', type: 'text' }),
                defineField({ name: 'offTheShelf', title: 'Off-The-Shelf Detail', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 6: Strategy CTA Banner (Streamline Success)
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

    // Section 7: Service Features Grid
    defineField({
      name: 'serviceFeatures',
      title: 'Service Features Grid',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Features Section Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Path / Name', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 8: Emerging Technologies Grid
    defineField({
      name: 'emergingTech',
      title: 'Emerging Technologies Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Technology Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Tech Title', type: 'string' }),
                defineField({ name: 'description', title: 'Tech Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Type (e.g. enterprise, mobile, ecommerce)', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 9: Deliver MVP (Why Choose Us)
    defineField({
      name: 'deliverMVP',
      title: 'Why Choose Us / Deliver MVP Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Main Title', type: 'string' }),
        defineField({ name: 'accentText', title: 'Accent Highlighted Text', type: 'string' }),
        defineField({ name: 'description', title: 'Description Paragraph', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Core Value Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Value Title', type: 'string' }),
                defineField({ name: 'description', title: 'Value Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 10: Processes Section
    defineField({
      name: 'processes',
      title: 'Engineering Process Phases Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Process Title', type: 'string' }),
        defineField({
          name: 'phaseLabels',
          title: 'Navigation Phase Labels',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'processPhases',
          title: 'Process Phases Details',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Phase Step Number', type: 'number' }),
                defineField({ name: 'phase', title: 'Phase Header Badge', type: 'string' }),
                defineField({ name: 'title', title: 'Phase Title', type: 'string' }),
                defineField({ name: 'description', title: 'Phase Description', type: 'text' }),
                defineField({
                  name: 'features',
                  title: 'Sub-features / Tasks',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
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

    // Section 11: Service FAQs
    defineField({
      name: 'faqs',
      title: 'Service FAQs',
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

    // Section 12: Page SEO Metadata
    defineField({
      name: 'seo',
      title: 'Page SEO Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Service',
        subtitle: subtitle ? `Category: ${subtitle}` : 'Service Page',
      };
    },
  },
});
