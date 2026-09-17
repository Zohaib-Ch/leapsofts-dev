import { defineType, defineField } from 'sanity';

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    // Section 1: Hero
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Badge Label', type: 'string' }),
        defineField({ name: 'title', title: 'Headline (H1)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
        defineField({
          name: 'metrics',
          title: 'Hero Metric Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Metric Value (e.g. 100+)', type: 'string' }),
                defineField({ name: 'label', title: 'Metric Title', type: 'string' }),
                defineField({ name: 'sub', title: 'Subtext', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 2: Mission & Vision Creed
    defineField({
      name: 'creed',
      title: 'Mission & Vision Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({ name: 'missionTitle', title: 'Mission Card Title', type: 'string' }),
        defineField({ name: 'missionText', title: 'Mission Description', type: 'text' }),
        defineField({ name: 'visionTitle', title: 'Vision Card Title', type: 'string' }),
        defineField({ name: 'visionText', title: 'Vision Description', type: 'text' }),
      ],
    }),

    // Section 3: Core Operating Principles
    defineField({
      name: 'corePrinciples',
      title: 'Core Operating Principles',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'principles',
          title: 'Principle Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Principle Title', type: 'string' }),
                defineField({ name: 'text', title: 'Principle Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Identifier', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 4: The Evolution Journey (Timeline)
    defineField({
      name: 'timeline',
      title: 'Evolution Journey Timeline',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'events',
          title: 'Timeline Milestones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'year', title: 'Year (e.g. 2021)', type: 'string' }),
                defineField({ name: 'title', title: 'Milestone Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Milestone Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 5: Executive Leadership
    defineField({
      name: 'leadership',
      title: 'Executive Leadership Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'members',
          title: 'Leadership Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Full Name', type: 'string' }),
                defineField({ name: 'role', title: 'Role / Job Title', type: 'string' }),
                defineField({ name: 'bio', title: 'Biography', type: 'text' }),
                defineField({ name: 'highlight', title: 'Key Highlight / Badge', type: 'string' }),
                defineField({ name: 'initials', title: 'Avatar Initials', type: 'string' }),
                defineField({
                  name: 'skills',
                  title: 'Skill Tags',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 6: Global Delivery & Compliance
    defineField({
      name: 'globalDelivery',
      title: 'Global Delivery & Compliance',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'hubs',
          title: 'Delivery Hubs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Hub Name', type: 'string' }),
                defineField({ name: 'desc', title: 'Hub Description', type: 'string' }),
              ],
            },
          ],
        }),
        defineField({
          name: 'compliance',
          title: 'Compliance Certifications',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Certification Name (e.g. ISO 27001)', type: 'string' }),
                defineField({ name: 'subtitle', title: 'Subhead / Tagline', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 7: Final Invitation CTA
    defineField({
      name: 'cta',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'CTA Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'CTA Subtitle', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
      ],
    }),

    // SEO Metadata
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
        title: title || 'About Us Page',
        subtitle: 'About Us Page Content & SEO Settings',
      };
    },
  },
});
