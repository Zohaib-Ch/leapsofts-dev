import { defineType, defineField } from 'sanity';

const DEFAULT_LOGOS = [
  { title: 'Automotive Link Icon', value: '/icons/industries/automotive-link.svg' },
  { title: 'Healthcare Link Icon', value: '/icons/industries/healthcare-link.svg' },
  { title: 'Compliance Link Icon', value: '/icons/industries/compliance-link.svg' },
  { title: 'Education Link Icon', value: '/icons/industries/education-link.svg' },
  { title: 'Construction Link Icon', value: '/icons/industries/construction-link.svg' },
  { title: 'Energy Link Icon', value: '/icons/industries/energy-link.svg' },
  { title: 'Startup Link Icon', value: '/icons/industries/startup-link.svg' },
  { title: 'Sphere Industry Icon', value: '/industryicons/sphere.svg' },
  { title: 'Bipiramida Industry Icon', value: '/industryicons/bipiramida.svg' },
  { title: 'Diamond Industry Icon', value: '/industryicons/diamond.svg' },
];

export const TECH_ICON_PRESETS = [
  // Frontend
  { title: 'React', value: '/technologies/React.svg' },
  { title: 'Next.js', value: '/technologies/nextjs-2.svg' },
  { title: 'Vue.js', value: '/technologies/vuejs.png' },
  { title: 'Angular', value: '/technologies/angular.svg' },
  { title: 'HTML5 / CSS3', value: '/technologies/html.png' },
  { title: 'Electron JS', value: '/technologies/electronjs.svg' },

  // Backend
  { title: 'Node.js', value: '/technologies/nodejs.png' },
  { title: 'Python', value: '/technologies/python.svg' },
  { title: 'Laravel', value: '/technologies/laravel.png' },
  { title: 'NestJS', value: '/technologies/nestjs.png' },
  { title: 'Express.js', value: '/technologies/express.png' },
  { title: 'Django', value: '/technologies/django.png' },
  { title: '.NET Core', value: '/technologies/dotnet.svg' },

  // Databases & Cache
  { title: 'PostgreSQL', value: '/technologies/postgresql.png' },
  { title: 'MySQL', value: '/technologies/mysql.png' },
  { title: 'MongoDB', value: '/technologies/mongodb.png' },
  { title: 'Redis', value: '/technologies/redis.svg' },
  { title: 'SQL Server', value: '/technologies/sql-server.svg' },
  { title: 'Firebase', value: '/technologies/firebase.png' },

  // Cloud & Infrastructure
  { title: 'Amazon Web Services (AWS)', value: '/technologies/aws.png' },
  { title: 'AWS S3 Storage', value: '/technologies/aws-s3.svg' },
  { title: 'Microsoft Azure', value: '/technologies/azure.png' },
  { title: 'Google Cloud Platform (GCP)', value: '/technologies/gcp.png' },

  // AI & ML
  { title: 'PyTorch', value: '/technologies/pytorch.png' },
  { title: 'TensorFlow', value: '/technologies/tensorflow.png' },
  { title: 'AI / LLM Mixture', value: '/technologies/mixture.png' },

  // Mobile
  { title: 'Flutter', value: '/technologies/flutter.png' },
  { title: 'Kotlin', value: '/technologies/kotlin.png' },

  // Testing & Tooling
  { title: 'Pest PHP', value: '/technologies/pest-logo.png' },
];

export const caseStudySchema = defineType({
  name: 'caseStudy',
  title: 'Case Study / Project Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Industry Name or Project Name)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Route Slug (e.g. /projects/my-new-project)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Click "Generate" to automatically create the route slug from the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Unique Identifier / Route ID',
      type: 'string',
      description: 'Optional. Defaults to the URL Route Slug if left blank.',
    }),
    defineField({
      name: 'type',
      title: 'Portfolio Entry Type',
      type: 'string',
      options: {
        list: [
          { title: 'Industry Showcase Portfolio', value: 'industry' },
          { title: 'Project Case Study', value: 'project' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'project',
    }),

    // ==========================================
    // INDUSTRY SHOWCASE FIELDS (type === 'industry')
    // ==========================================
    defineField({
      name: 'brand',
      title: 'Industry Brand Details & Tagline',
      type: 'object',
      hidden: ({ document }) => document?.type === 'project',
      fields: [
        defineField({ name: 'name', title: 'Brand / Industry Name', type: 'string' }),
        defineField({ name: 'description', title: 'Industry Tagline / Subtitle Description', type: 'text' }),
        defineField({ name: 'logo', title: 'Custom Logo Image Upload', type: 'image' }),
        defineField({
          name: 'logoPreset',
          title: 'Or Choose Default Industry Logo Icon Preset',
          type: 'string',
          options: {
            list: DEFAULT_LOGOS,
          },
        }),
      ],
    }),

    defineField({
      name: 'brandVisualImg',
      title: 'Custom 3D Visual Hero Image (3rd Column 1st Card)',
      type: 'image',
      hidden: ({ document }) => document?.type === 'project',
    }),

    defineField({
      name: 'brandVisualImgPreset',
      title: 'Or Choose Default 3D Visual Hero Image Preset',
      type: 'string',
      hidden: ({ document }) => document?.type === 'project',
      options: {
        list: DEFAULT_LOGOS,
      },
    }),

    defineField({
      name: 'projectList',
      title: 'Sub-Projects & Deliverables List',
      type: 'array',
      description: 'Select existing Project Case Studies from Sanity, or add custom sub-project names.',
      of: [
        {
          type: 'reference',
          name: 'projectReference',
          title: 'Select Existing Project Case Study',
          to: [{ type: 'caseStudy' }],
          options: {
            filter: 'type == "project"',
          },
        },
        {
          type: 'object',
          name: 'customProject',
          title: 'Custom Sub-Project / Feature Name',
          fields: [
            defineField({
              name: 'name',
              title: 'Sub-Project / Feature Name',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'name',
            },
            prepare({ title }) {
              return {
                title: title || 'Custom Sub-Project Item',
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: 'tabs',
      title: 'Interactive Feature Tabs (3rd Column Spinner Wheel)',
      type: 'array',
      hidden: ({ document }) => document?.type === 'project',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'Tab ID (e.g. tab-0-0)', type: 'string' }),
            defineField({ name: 'label', title: 'Tab Label Name', type: 'string' }),
            defineField({ name: 'isActive', title: 'Active By Default', type: 'boolean' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'highlightItems',
      title: 'Tab Highlights Mapping',
      type: 'array',
      hidden: ({ document }) => document?.type === 'project',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'tabId', title: 'Tab ID', type: 'string' }),
            defineField({
              name: 'projects',
              title: 'Highlighted Projects List',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'impact',
      title: 'Feature Screenshots Gallery',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Showcase Subtitle / Heading', type: 'string' }),
        defineField({
          name: 'images',
          title: 'Project Screenshots Gallery',
          type: 'array',
          of: [{ type: 'image' }],
          description: 'Upload high-resolution screenshots for this project or industry.',
        }),
      ],
    }),

    // ==========================================
    // PROJECT CASE STUDY FIELDS (type === 'project')
    // ==========================================
    defineField({
      name: 'summary',
      title: 'Executive Summary & Details (Project Details Page)',
      type: 'object',
      hidden: ({ document }) => document?.type === 'industry',
      fields: [
        defineField({ name: 'description', title: 'Executive Summary Description', type: 'text' }),
        defineField({
          name: 'details',
          title: 'Key Metrics Breakdown',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Metric Label', type: 'string' }),
                defineField({ name: 'value', title: 'Metric Value', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'techStack',
      title: 'Tools and Technologies (Project Details Page)',
      type: 'object',
      hidden: ({ document }) => document?.type === 'industry',
      fields: [
        defineField({ name: 'title', title: 'Section Title (e.g. Built with, Tools & Technologies)', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Technology Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Technology Category Group',
              fields: [
                defineField({ name: 'label', title: 'Category Name (e.g. Frontend, Backend, Database, Cloud)', type: 'string' }),
                defineField({
                  name: 'techs',
                  title: 'Technologies & Frameworks',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      title: 'Technology Item',
                      fields: [
                        defineField({ name: 'name', title: 'Technology Name', type: 'string', validation: (Rule) => Rule.required() }),
                        defineField({
                          name: 'iconPreset',
                          title: 'Select Icon Preset',
                          type: 'string',
                          options: {
                            list: TECH_ICON_PRESETS,
                          },
                        }),
                        defineField({
                          name: 'iconImage',
                          title: 'Or Upload Custom Icon Image',
                          type: 'image',
                        }),
                      ],
                      preview: {
                        select: {
                          title: 'name',
                          subtitle: 'iconPreset',
                          media: 'iconImage',
                        },
                        prepare({ title, subtitle }) {
                          return {
                            title: title || 'Untitled Tech',
                            subtitle: subtitle ? `Preset: ${subtitle}` : 'Custom Icon',
                          };
                        },
                      },
                    },
                  ],
                }),
              ],
            },
          ],
        }),
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
      title: 'title',
      subtitle: 'slug.current',
      type: 'type',
    },
    prepare({ title, subtitle, type }) {
      return {
        title: title || 'Untitled Case Study',
        subtitle: `${type === 'industry' ? '[Industry Portfolio]' : '[Project Case Study]'} /projects/${subtitle || ''}`,
      };
    },
  },
});
