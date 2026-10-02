import { defineType, defineField } from 'sanity';

// Service Archetype Categorization Constants
const GROWTH_SERVICES = [
  'sales-execution-ae',
  'outbound-demand-gen',
  'paid-media-performance',
  'inbound-organic-growth',
  'revenue-operations-systems',
];

const COMPARISON_TABLE_SERVICES = [
  'custom-software-development',
  'web-app-development',
  'mobile-app-development',
];

const CAPABILITIES_SLIDE_SERVICES = [
  'custom-software-development',
  'azure',
  'cloud-migration',
  'dedicated-teams',
  'mobile-app-development',
  'proof-of-concept-development',
  'salesforce',
  'web-app-development',
];

const EMERGING_TECH_SERVICES = [
  'aws',
  'azure',
  'app-reengineering',
  'business-process-outsourcing',
  'cloud-engineering',
  'cyber-security',
  'data-governance',
  'data-science-ai',
  'devops',
  'digital-evolution',
  'fixed-price',
  'ideation-workshop',
  'product-development-strategy',
  'quality-assurance',
  'service-now',
  'shopify',
  'web-app-development',
  'mobile-app-development',
];

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main Info' },
    { name: 'hero', title: 'Hero & Overview' },
    { name: 'content', title: 'Content & Grids' },
    { name: 'process', title: 'Process & CTAs' },
    { name: 'faqs', title: 'FAQs' },
    { name: 'seo', title: 'SEO Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug Path',
      type: 'slug',
      group: 'main',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: 'Product Engineering', value: 'Product Engineering' },
          { title: 'Next Gen Services', value: 'Next Gen Services' },
          { title: 'Cloud Services', value: 'Cloud Services' },
          { title: 'Solutions', value: 'Solutions' },
          { title: 'Sales & Revenue Growth', value: 'Sales & Revenue Growth' },
        ],
      },
    }),
    defineField({
      name: 'badgeText',
      title: 'Category Badge Text',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Subtitle',
      type: 'text',
      group: 'main',
      rows: 2,
    }),

    // Section 1: Hero / Intro
    defineField({
      name: 'hero',
      title: 'Hero / Intro Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'title', title: 'Hero Main Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Hero Subtitle', type: 'string' }),
        defineField({ name: 'introText', title: 'Intro Paragraph', type: 'text' }),
      ],
    }),

    // Section 2: Service Overview
    defineField({
      name: 'serviceOverview',
      title: 'Service Overview Section',
      type: 'object',
      group: 'hero',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && (GROWTH_SERVICES.includes(slug) || slug === 'custom-software-development');
      },
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent (Colored)', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'description', title: 'Overview Description', type: 'text' }),
        defineField({ name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageUrl', title: 'Section Image URL', type: 'string' }),
      ],
    }),

    // Section 3: Capabilities (Slide-based)
    defineField({
      name: 'capabilitiesSection',
      title: 'Capabilities Section (Slide-based)',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !CAPABILITIES_SLIDE_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'title', title: 'Capabilities Title', type: 'string' }),
        defineField({ name: 'description', title: 'Capabilities Subhead', type: 'text' }),
        defineField({
          name: 'slides',
          title: 'Capability Slides / Tabs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Slide ID', type: 'string' }),
                defineField({ name: 'number', title: 'Index Code (e.g. < 01 >)', type: 'string' }),
                defineField({ name: 'title', title: 'Slide Title', type: 'string' }),
                defineField({ name: 'image', title: 'Slide Image', type: 'image' }),
                defineField({ name: 'imageUrl', title: 'Slide Image URL', type: 'string' }),
                defineField({
                  name: 'items',
                  title: 'Capability Bullet Points',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'name', title: 'Item Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Item Description', type: 'text' }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 4: Info Grid (Grid of key details)
    defineField({
      name: 'infoGrid',
      title: 'Info Grid Cards Section',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        const pagesWithoutInfoGrid = ['custom-software-development', ...GROWTH_SERVICES];
        return !!slug && pagesWithoutInfoGrid.includes(slug);
      },
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Info Grid Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                defineField({ name: 'description', title: 'Card Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // Section 5: Comparison Table (e.g. Custom vs Off-The-Shelf)
    defineField({
      name: 'comparisonTable',
      title: 'Comparison Table Section (Custom vs SaaS)',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !COMPARISON_TABLE_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Table Description', type: 'text' }),
        defineField({
          name: 'headers',
          title: 'Column Headers',
          type: 'object',
          fields: [
            defineField({ name: 'feature', title: 'Feature Column Name', type: 'string' }),
            defineField({ name: 'custom', title: 'Custom Solution Column Name', type: 'string' }),
            defineField({ name: 'offTheShelf', title: 'Off-The-Shelf Column Name', type: 'string' }),
          ],
        }),
        defineField({
          name: 'items',
          title: 'Comparison Rows',
          type: 'array',
          of: [
            {
              name: 'comparisonRow',
              title: 'Comparison Row',
              type: 'object',
              fields: [
                defineField({ name: 'feature', title: 'Feature Title', type: 'string' }),
                defineField({ name: 'custom', title: 'Custom Detail', type: 'text' }),
                defineField({ name: 'offTheShelf', title: 'Off-The-Shelf Detail', type: 'text' }),
              ],
              preview: {
                select: {
                  title: 'feature',
                  subtitle: 'custom',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 6: Strategy CTA Banner (Streamline Success)
    defineField({
      name: 'strategyCTA',
      title: 'Strategy Session CTA Banner',
      type: 'object',
      group: 'process',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && GROWTH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'label', title: 'CTA Label', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleEnd', title: 'Title End', type: 'string' }),
        defineField({ name: 'descriptionText', title: 'Description Text', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonPath', title: 'Button Path / Link (e.g. #contact)', type: 'string' }),
        defineField({ name: 'image', title: 'CTA Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageUrl', title: 'CTA Image URL', type: 'string' }),
      ],
    }),

    // Section 7: Service Features Grid
    defineField({
      name: 'serviceFeatures',
      title: 'Core Service Capabilities / Features Grid',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        const pagesWithoutFeatures = ['custom-software-development', 'cloud-engineering', 'devops', ...GROWTH_SERVICES];
        return !!slug && pagesWithoutFeatures.includes(slug);
      },
      fields: [
        defineField({ name: 'title', title: 'Features Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Features Section Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            {
              name: 'featureItem',
              title: 'Feature Item',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
                defineField({
                  name: 'icon',
                  title: 'Icon Selection',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Sphere Icon', value: '/industryicons/sphere.svg' },
                      { title: 'Bipiramida Icon', value: '/industryicons/bipiramida.svg' },
                      { title: 'Diamond Icon', value: '/industryicons/diamond.svg' },
                      { title: 'Lens Blue Icon', value: '/industryicons/lens-blue-1.svg' },
                      { title: 'Vector Icon', value: '/industryicons/vector-1.svg' },
                    ],
                  },
                  initialValue: '/industryicons/sphere.svg',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 8: Specialised Services / Emerging Technologies Grid
    defineField({
      name: 'emergingTech',
      title: 'Specialised Services / Emerging Tech Grid (e.g. QA Services / AWS Stack)',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !EMERGING_TECH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent', type: 'string' }),
        defineField({ name: 'titleMain', title: 'Title Main', type: 'string' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({ name: 'image', title: 'Section Image Asset', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageUrl', title: 'Section Image URL', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Technology / Service Items',
          type: 'array',
          of: [
            {
              name: 'techItem',
              title: 'Tech Item',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Item Title', type: 'string' }),
                defineField({ name: 'description', title: 'Item Description', type: 'text' }),
                defineField({
                  name: 'icon',
                  title: 'Icon Selection',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Product (Parallelepipeds)', value: 'product' },
                      { title: 'Enterprise (Bipiramida)', value: 'enterprise' },
                      { title: 'HIPAA & Health', value: 'hipaa' },
                      { title: 'SaaS & Cloud (Sphere)', value: 'saas' },
                      { title: 'E-Commerce (Diamond)', value: 'ecommerce' },
                      { title: 'Mobile & Startup', value: 'mobile' },
                      { title: 'Legacy & Modernization (Tetris)', value: 'legacy' },
                      { title: 'Third-Party Integration (Tetris 2)', value: 'thirdParty' },
                    ],
                  },
                  initialValue: 'enterprise',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 9: Deliver MVP (Why Choose Us)
    defineField({
      name: 'deliverMVP',
      title: 'Why Choose Us / Deliver MVP Section',
      type: 'object',
      group: 'process',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && GROWTH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Main Title', type: 'string' }),
        defineField({ name: 'accentText', title: 'Accent Highlighted Text', type: 'string' }),
        defineField({ name: 'description', title: 'Description Paragraph', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Core Value Points',
          type: 'array',
          of: [
            {
              name: 'valuePoint',
              title: 'Value Point',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Value Title', type: 'string' }),
                defineField({ name: 'description', title: 'Value Description', type: 'text' }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 10: Processes Section
    defineField({
      name: 'processes',
      title: 'Engineering Process Phases Section',
      type: 'object',
      group: 'process',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && GROWTH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'title', title: 'Process Title', type: 'string' }),
        defineField({
          name: 'phaseLabels',
          title: 'Navigation Phase Labels',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'processPhases',
          title: 'Process Phases Details',
          type: 'array',
          of: [
            {
              name: 'processPhase',
              title: 'Process Phase',
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'Phase Step Number', type: 'number' }),
                defineField({ name: 'phase', title: 'Phase Header Badge', type: 'string' }),
                defineField({ name: 'title', title: 'Phase Title', type: 'string' }),
                defineField({ name: 'description', title: 'Phase Description', type: 'text' }),
                defineField({
                  name: 'features',
                  title: 'Sub-features / Tasks',
                  type: 'array',
                  of: [
                    {
                      name: 'phaseFeature',
                      title: 'Phase Feature',
                      type: 'object',
                      fields: [
                        defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
                      ],
                      preview: {
                        select: {
                          title: 'title',
                          subtitle: 'description',
                        },
                      },
                    },
                  ],
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'phase',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 11: Related Services
    defineField({
      name: 'relatedServices',
      title: 'Related Services / Engineering Capabilities',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && GROWTH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'sectionLabel', title: 'Section Label', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Related Service Cards',
          type: 'array',
          of: [
            {
              name: 'relatedServiceCard',
              title: 'Related Service Card',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Service Title', type: 'string' }),
                defineField({ name: 'description', title: 'Service Description', type: 'text' }),
                defineField({ name: 'link', title: 'URL Link (e.g. /services/custom-software-development)', type: 'string' }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'link',
                },
              },
            },
          ],
        }),
      ],
    }),

    // Section 11b: Sub Services / Core Pillars
    defineField({
      name: 'subServices',
      title: 'Sub-Services / Core Capabilities',
      type: 'array',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !GROWTH_SERVICES.includes(slug);
      },
      of: [
        {
          name: 'subServiceItem',
          title: 'Sub Service Item',
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'Identifier ID', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle / Tagline', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
            defineField({
              name: 'highlights',
              title: 'Key Highlights',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'deliverables',
              title: 'Key Deliverables',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        },
      ],
    }),

    // Section 11c: Key Metrics
    defineField({
      name: 'metrics',
      title: 'Performance Metrics',
      type: 'array',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !GROWTH_SERVICES.includes(slug);
      },
      of: [
        {
          name: 'metricItem',
          title: 'Metric Item',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value / Stat (e.g. 3.8x, 0 Days)', type: 'string' }),
            defineField({ name: 'label', title: 'Metric Label', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
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

    // Section 11d: Comparison
    defineField({
      name: 'comparison',
      title: 'In-House vs Leapsofts Comparison',
      type: 'object',
      group: 'content',
      hidden: ({ document }) => {
        const slug = document?.slug?.current || '';
        return !!slug && !GROWTH_SERVICES.includes(slug);
      },
      fields: [
        defineField({ name: 'title', title: 'Comparison Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Comparison Subtitle', type: 'string' }),
        defineField({
          name: 'traditional',
          title: 'Traditional / In-House Pain Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'leapsoftsPod',
          title: 'Leapsofts Advantages',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Section 12: Service FAQs
    defineField({
      name: 'faqs',
      title: 'Service FAQs',
      type: 'array',
      group: ['content', 'faqs'],
      of: [
        {
          name: 'faqItem',
          title: 'FAQ Item',
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
    }),

    // Section 12: Page SEO Metadata
    defineField({
      name: 'seo',
      title: 'Page SEO Metadata',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Service',
        subtitle: subtitle ? `Category: ${subtitle}` : 'Service Page',
      };
    },
  },
});
