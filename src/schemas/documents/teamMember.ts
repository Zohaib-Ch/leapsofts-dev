import { defineType, defineField } from 'sanity';

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'role',
      title: 'Job Title / Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlight',
      title: 'Key Achievement / Highlight Badge (e.g. Ex-AI Research Director)',
      type: 'string',
    }),
    defineField({
      name: 'initials',
      title: 'Avatar Initials (e.g. HR, SC, MD)',
      type: 'string',
    }),
    defineField({
      name: 'isCeoSpotlight',
      title: 'Featured CEO / Founder Spotlight',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order Rank (Lower numbers appear first)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'skills',
      title: 'Key Skills / Tech Focus',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo Upload',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Or Custom Image URL / Asset Path',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X Profile URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
});
