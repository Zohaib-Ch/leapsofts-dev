import { defineType, defineField } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Default Title Suffix', type: 'string', initialValue: 'Leapsofts' }),
    defineField({ name: 'defaultOgImage', title: 'Default Share Card Image', type: 'image' }),
    defineField({ name: 'contactEmail', title: 'Primary Email', type: 'string' }),
    defineField({ name: 'contactPhone', title: 'Primary Phone', type: 'string' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Networks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform Name', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
  ],
});
