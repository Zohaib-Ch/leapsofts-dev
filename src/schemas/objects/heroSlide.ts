import { defineType, defineField } from 'sanity';

export const heroSlideSchema = defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Slide Identifier / Slug',
      type: 'string',
      description: 'Optional unique ID for this slide (e.g., enterprise-software, mvp-velocity).',
    }),
    defineField({
      name: 'number',
      title: 'Slide Number Tag',
      type: 'string',
      description: 'e.g., 01, 02, 03',
      initialValue: '01',
    }),
    defineField({
      name: 'tagline',
      title: 'Top Badge Tagline',
      type: 'string',
      description: 'e.g., Enterprise Software & Architecture, Autonomous AI & Cloud Ecosystems',
    }),
    defineField({
      name: 'titleMain',
      title: 'Headline Main Text',
      type: 'string',
      description: 'The first portion of the headline (e.g., "Custom Software Engineered for", "From Architecture Blueprint to Production in").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAccent',
      title: 'Headline Accent Text (Orange Gradient Highlight)',
      type: 'string',
      description: 'The highlighted glowing accent phrase (e.g., "Enterprise Velocity", "3 to 5 Months", "Autonomous AI Systems").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEnd',
      title: 'Headline Trailing Text (Optional)',
      type: 'string',
      description: 'Optional text following the accent phrase.',
    }),
    defineField({
      name: 'description',
      title: 'Slide Description / Value Proposition',
      type: 'text',
      rows: 3,
      description: 'Concise 2-3 line value statement (~120-140 characters recommended for visual balance).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Schedule Consultation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonPath',
      title: 'CTA Target Path / Action',
      type: 'string',
      description: 'Target section anchor (e.g., "#contact" to open contact form or scroll) or route URL (e.g., "/services/custom-software-development").',
      initialValue: '#contact',
    }),
    defineField({
      name: 'image',
      title: '3D Background Image (Dark Mode)',
      type: 'image',
      options: { hotspot: true },
      description: 'Rendered 3D asset for dark mode. If left empty, the site falls back to the default engineered asset.',
    }),
    defineField({
      name: 'backgroundAlt',
      title: 'Dark Mode Image Alt Text (SEO & Accessibility)',
      type: 'string',
    }),
    defineField({
      name: 'imageLight',
      title: '3D Background Image (Light Mode)',
      type: 'image',
      options: { hotspot: true },
      description: 'Rendered 3D asset for light mode. If left empty, falls back to the default light asset.',
    }),
    defineField({
      name: 'backgroundAltLight',
      title: 'Light Mode Image Alt Text (SEO & Accessibility)',
      type: 'string',
    }),
    defineField({
      name: 'metrics',
      title: 'Proof Point Metrics Strip (3 Cards)',
      type: 'array',
      description: 'High-impact quantifiable statistics displayed beneath the description (exactly 3 recommended).',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Metric Value',
              type: 'string',
              description: 'e.g., 99.999%, 3-5 Months, Top 1% Pods',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Metric Label',
              type: 'string',
              description: 'e.g., System Uptime SLA, Production Launch, Team Seniority',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'trustBadges',
      title: 'Micro Trust Badges Strip (3 Items)',
      type: 'array',
      description: 'Trust validation badges with icons shown at the bottom of each slide (up to 3 recommended).',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Badge Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Shield (Security & Architecture)', value: 'shield' },
                  { title: 'Zap (Speed & Velocity)', value: 'zap' },
                  { title: 'Lock (IP Ownership & Zero-Trust)', value: 'lock' },
                  { title: 'Cloud (Cloud & Infrastructure)', value: 'cloud' },
                  { title: 'Cpu (Agile Pods & AI)', value: 'cpu' },
                  { title: 'Sparkles (Innovation & AI)', value: 'sparkles' },
                ],
              },
              initialValue: 'shield',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Badge Text',
              type: 'string',
              description: 'e.g., Enterprise Architecture, 100% IP Ownership, SOC2 Ready',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      titleMain: 'titleMain',
      titleAccent: 'titleAccent',
      tagline: 'tagline',
      media: 'image',
    },
    prepare({ titleMain, titleAccent, tagline, media }) {
      const headline = [titleMain, titleAccent].filter(Boolean).join(' ');
      return {
        title: headline || 'Untitled Hero Slide',
        subtitle: tagline || 'Hero Slide',
        media,
      };
    },
  },
});
