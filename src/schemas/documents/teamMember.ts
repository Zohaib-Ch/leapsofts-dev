import { defineType, defineField } from 'sanity';

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Job Title / Position', type: 'string' }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text' }),
    defineField({ name: 'image', title: 'Profile Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'linkedin', title: 'LinkedIn Profile URL', type: 'url' }),
  ],
});
