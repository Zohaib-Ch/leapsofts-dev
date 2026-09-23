import { defineType, defineField } from 'sanity';

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // 1. Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'badgeText', title: 'Badge Text', type: 'string' }),
        defineField({ name: 'title', title: 'Primary Headline (H1)', type: 'string' }),
        defineField({ name: 'title2', title: 'Sub Headline / Catchphrase', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle / Description', type: 'text' }),
        defineField({ name: 'primaryCtaText', title: 'Primary CTA Button Label', type: 'string' }),
        defineField({ name: 'primaryCtaPath', title: 'Primary CTA Path', type: 'string' }),
      ],
    }),

    // 2. Core Capabilities Section
    defineField({
      name: 'coreCapabilities',
      title: 'Core Capabilities Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent Word', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({
          name: 'services',
          title: 'Capabilities Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'ID', type: 'string' }),
                defineField({ name: 'number', title: 'Number Tag (e.g. <01>)', type: 'string' }),
                defineField({ name: 'title', title: 'Service Title', type: 'string' }),
                defineField({ name: 'description', title: 'Service Description', type: 'text' }),
                defineField({
                  name: 'items',
                  title: 'Sub-Service Items',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'name', title: 'Item Name', type: 'string' }),
                        defineField({ name: 'path', title: 'Item Path', type: 'string' }),
                      ],
                      preview: {
                        select: { title: 'name', subtitle: 'path' },
                      },
                    },
                  ],
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'number' },
              },
            },
          ],
        }),
      ],
    }),

    // 3. About Us Section & 6 Metrics
    defineField({
      name: 'aboutUs',
      title: 'About Us Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent Word (Optional)', type: 'string', description: 'Word to highlight in pinkish-purple accent style, or wrap in *asterisks* in headline.' }),
        defineField({ name: 'descriptionText', title: 'Description Text', type: 'text' }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'stats',
          title: '6 Key Metric Figures',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Number Value', type: 'number' }),
                defineField({ name: 'suffix', title: 'Suffix (e.g., +, %, M)', type: 'string' }),
                defineField({ name: 'text', title: 'Description Text', type: 'text' }),
              ],
              preview: {
                select: { number: 'number', suffix: 'suffix', text: 'text' },
                prepare({ number, suffix, text }: { number?: number; suffix?: string; text?: string }) {
                  const val = `${number ?? ''}${suffix ?? ''}`.trim();
                  return {
                    title: val ? `${val} - ${text || ''}` : text || 'Metric Figure',
                    subtitle: text,
                  };
                },
              },
            },
          ],
        }),
      ],
    }),

    // 4. Strategy / Streamline Section
    defineField({
      name: 'strategy',
      title: 'Strategy & Streamline Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Subtitle / Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent Word', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'descriptionText', title: 'Primary Description', type: 'text' }),
        defineField({ name: 'description2Text', title: 'Secondary Description', type: 'text' }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonPath', title: 'Button Target Path', type: 'string' }),
      ],
    }),

    // 5. Processes Section
    defineField({
      name: 'processes',
      title: 'Processes Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'phaseLabels',
          title: 'Phase Tile Labels',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'phases',
          title: 'Process Phases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Phase ID', type: 'number' }),
                defineField({ name: 'phase', title: 'Phase Badge Header', type: 'string' }),
                defineField({ name: 'title', title: 'Phase Title', type: 'string' }),
                defineField({ name: 'description', title: 'Phase Overview Description', type: 'text' }),
                defineField({
                  name: 'features',
                  title: 'Features List',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
                      ],
                      preview: {
                        select: { title: 'title', subtitle: 'description' },
                      },
                    },
                  ],
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'phase' },
              },
            },
          ],
        }),
      ],
    }),

    // 6. Testimonials Section
    defineField({
      name: 'testimonials',
      title: 'Feedback / Testimonials Section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section Header Label', type: 'string' }),
        defineField({
          name: 'testimonialsList',
          title: 'Client Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'ID', type: 'number' }),
                defineField({ name: 'quote', title: 'Quote Title', type: 'string' }),
                defineField({ name: 'text', title: 'Full Feedback Text', type: 'text' }),
                defineField({ name: 'name', title: 'Client Name', type: 'string' }),
                defineField({ name: 'role', title: 'Client Role & Company', type: 'string' }),
                defineField({
                  name: 'avatar',
                  title: 'Client Photo',
                  type: 'image',
                  options: { hotspot: true },
                }),
              ],
              preview: {
                select: { title: 'name', subtitle: 'role', media: 'avatar' },
              },
            },
          ],
        }),
      ],
    }),

    // 7. Blog Section
    defineField({
      name: 'blogSection',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string' }),
      ],
    }),

    // 8. Page SEO Metadata
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
        title: title || 'Home Page',
        subtitle: 'Main Landing Page Content & SEO Configuration',
      };
    },
  },
});

