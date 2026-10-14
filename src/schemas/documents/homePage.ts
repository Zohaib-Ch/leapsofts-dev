import { defineType, defineField } from 'sanity';

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // 1. Hero Showcase Slider Section
    defineField({
      name: 'hero',
      title: 'Hero Showcase Slider',
      type: 'object',
      fields: [
        defineField({
          name: 'autoPlayInterval',
          title: 'Auto-Play Interval (Milliseconds)',
          type: 'number',
          initialValue: 5000,
          description: 'Duration each slide stays active before auto-advancing (default: 5000ms / 5 seconds).',
        }),
        defineField({
          name: 'slides',
          title: 'Hero Slides',
          type: 'array',
          of: [{ type: 'heroSlide' }],
          description: 'Add, reorder, or customize hero slides. If empty, the website automatically falls back to default engineered slides.',
        }),
        // Legacy single-slide fallback fields (preserved for zero-downtime backwards compatibility)
        defineField({
          name: 'badgeText',
          title: 'Legacy Badge Text (Fallback)',
          type: 'string',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'title',
          title: 'Legacy Primary Headline (Fallback)',
          type: 'string',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'title2',
          title: 'Legacy Sub Headline / Accent (Fallback)',
          type: 'string',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'subtitle',
          title: 'Legacy Subtitle / Description (Fallback)',
          type: 'text',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Legacy CTA Button Label (Fallback)',
          type: 'string',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'primaryCtaPath',
          title: 'Legacy CTA Path (Fallback)',
          type: 'string',
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'image',
          title: 'Legacy Hero Background Image - Dark Mode (Fallback)',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
        defineField({
          name: 'imageLight',
          title: 'Legacy Hero Background Image - Light Mode (Fallback)',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ parent }) => Boolean(parent?.slides && parent.slides.length > 0),
        }),
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
          title: 'Section Image (Dark Mode Default)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'imageLight',
          title: 'Section Image (Light Mode)',
          type: 'image',
          options: { hotspot: true },
          description: 'Light-mode specific illustration or 3D render. Falls back to dark image if not set.',
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
          title: 'Section Image (Dark Mode Default)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'imageLight',
          title: 'Section Image (Light Mode)',
          type: 'image',
          options: { hotspot: true },
          description: 'Light-mode specific illustration or 3D render. Falls back to dark image if not set.',
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

