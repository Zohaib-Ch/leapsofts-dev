import { defineType, defineField } from 'sanity';

export const blogSchema = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Post Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'publishedAt', title: 'Published Date', type: 'datetime' }),
    defineField({
      name: 'author',
      title: 'Author Info',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role', type: 'string' }),
        defineField({ name: 'avatar', title: 'Author Avatar Image', type: 'image' }),
      ],
    }),
    defineField({ name: 'coverImage', title: 'Featured Header Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt / Summary', type: 'text' }),
    defineField({ name: 'category', title: 'Category Tag', type: 'string' }),
    defineField({ name: 'readTime', title: 'Estimated Read Time (e.g. 5 min read)', type: 'string' }),
    defineField({ name: 'body', title: 'Post Content', type: 'portableText' }),
    defineField({ name: 'seo', title: 'Page SEO Metadata', type: 'seo' }),
  ],
});
