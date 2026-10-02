import { defineType, defineField } from 'sanity';

export const blogSchema = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Enterprise AI', value: 'Enterprise AI' },
          { title: 'Cloud Architecture', value: 'Cloud Architecture' },
          { title: 'Product Engineering', value: 'Product Engineering' },
          { title: 'Cyber Security', value: 'Cyber Security' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time (e.g. 6 min read)',
      type: 'string',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date Display String (e.g. September 12, 2026)',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post (Highlight on top of Blog page)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Featured Header Image (Upload)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImageUrl',
      title: 'Or Custom Image URL / Local Asset Path',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Article Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'author',
      title: 'Author (Select Team Member)',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: 'Select the team member from the team directory who authored this article.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Structured Article Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sectionBlock',
          title: 'Article Section Block',
          fields: [
            defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
            defineField({
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            }),
            defineField({
              name: 'keyTakeaway',
              title: 'Key Takeaway Box Text',
              type: 'text',
            }),
            defineField({
              name: 'bulletPoints',
              title: 'Bullet Points List',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'quote',
              title: 'Highlight Quote Box',
              type: 'text',
            }),
            defineField({
              name: 'codeBlock',
              title: 'Code Example Snippet',
              type: 'object',
              fields: [
                defineField({ name: 'language', title: 'Language (e.g. typescript, yaml)', type: 'string' }),
                defineField({ name: 'filename', title: 'File Name (e.g. sanitizer.service.ts)', type: 'string' }),
                defineField({ name: 'code', title: 'Code Snippet', type: 'text', rows: 8 }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
            },
            prepare({ title }) {
              return {
                title: title || 'Content Section',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Or Rich Portable Text Body',
      type: 'portableText',
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
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});
