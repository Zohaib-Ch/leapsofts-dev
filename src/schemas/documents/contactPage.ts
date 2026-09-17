import { defineType, defineField } from 'sanity';

export const contactPageSchema = defineType({
  name: 'contactPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Headline (H1)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
      ],
    }),
    defineField({
      name: 'offices',
      title: 'Global Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'city', title: 'City / Region', type: 'string' }),
            defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
            defineField({ name: 'country', title: 'Country', type: 'string' }),
            defineField({ name: 'isHQ', title: 'Headquarters Flag', type: 'boolean' }),
          ],
          preview: {
            select: { title: 'city', subtitle: 'country', isHQ: 'isHQ' },
            prepare({ title, subtitle, isHQ }) {
              return {
                title: `${title || 'Office'}${isHQ ? ' (HQ)' : ''}`,
                subtitle: subtitle || '',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'phones',
      title: 'Contact Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'region', title: 'Region/Label', type: 'string' }),
            defineField({ name: 'number', title: 'Phone Number', type: 'string' }),
            defineField({ name: 'hours', title: 'Business Hours', type: 'string' }),
          ],
          preview: {
            select: { title: 'region', subtitle: 'number' },
          },
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Primary Contact Email',
      type: 'string',
    }),
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
        title: title || 'Contact Us Page',
        subtitle: 'Contact Us Page Content & SEO Settings',
      };
    },
  },
});
