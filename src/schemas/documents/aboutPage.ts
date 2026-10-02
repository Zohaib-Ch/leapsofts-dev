import { defineType, defineField } from 'sanity';

// Document ID matchers for About Suite
const isMainAbout = (docId?: string) => !docId || docId === 'aboutPage' || docId === 'drafts.aboutPage';
const isMission = (docId?: string) => !!docId && docId.includes('aboutMissionPage');
const isLeadership = (docId?: string) => !!docId && docId.includes('aboutLeadershipPage');
const isGlobal = (docId?: string) => !!docId && docId.includes('aboutGlobalPage');

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    // Section 1: Hero (Universal across all 4 About pages)
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
                defineField({ name: 'value', title: 'Metric Value (e.g. 100+ / 100%)', type: 'string' }),
                defineField({ name: 'label', title: 'Metric Title', type: 'string' }),
                defineField({ name: 'sub', title: 'Subtext', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // MAIN ABOUT PAGE ONLY SECTIONS (/about)
    // ==========================================
    defineField({
      name: 'creed',
      title: 'Mission & Vision Section',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
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

    defineField({
      name: 'corePrinciples',
      title: 'Core Operating Principles',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
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
                defineField({ name: 'icon', title: 'Icon Identifier (Cpu, Zap, ShieldCheck, Code2)', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'timeline',
      title: 'Evolution Journey Timeline',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
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

    defineField({
      name: 'leadership',
      title: 'Executive Leadership Section',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
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
              type: 'reference',
              title: 'Team Member',
              to: [{ type: 'teamMember' }],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'globalDelivery',
      title: 'Global Delivery & Compliance',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
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

    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Leapsofts Section',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'reasons',
          title: 'Differentiator Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Card Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Name (e.g. Zap, ShieldCheck)', type: 'string' }),
                defineField({ name: 'stat', title: 'Highlight Metric / Badge', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'industryImpact',
      title: 'Industries We Transform',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'industries',
          title: 'Industry Highlights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Industry Name', type: 'string' }),
                defineField({ name: 'link', title: 'Internal Link Path (e.g. /industries/healthcare)', type: 'string' }),
                defineField({ name: 'desc', title: 'Description', type: 'text' }),
                defineField({ name: 'tag', title: 'Tagline / Stat', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'techStack',
      title: 'Technology Stack & Engineering Capabilities',
      type: 'object',
      hidden: ({ document }) => !isMainAbout(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'categories',
          title: 'Tech Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'category', title: 'Category Name (e.g. Cloud & DevOps)', type: 'string' }),
                defineField({ name: 'skills', title: 'Technologies (Comma separated)', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // MISSION PAGE ONLY SECTIONS (/about/mission)
    // ==========================================
    defineField({
      name: 'whyMissionMatters',
      title: 'Purpose & Philosophy (Mission Mandate)',
      type: 'object',
      hidden: ({ document }) => !isMission(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({ name: 'mandateTitle', title: 'Mission Mandate Card Title', type: 'string' }),
        defineField({ name: 'mandateText', title: 'Mission Mandate Text', type: 'text' }),
        defineField({ name: 'blueprintTitle', title: 'Execution Blueprint Card Title', type: 'string' }),
        defineField({ name: 'blueprintText', title: 'Execution Blueprint Text', type: 'text' }),
      ],
    }),

    defineField({
      name: 'pillars',
      title: 'The Four Pillars of Technical Excellence',
      type: 'object',
      hidden: ({ document }) => !isMission(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Pillar Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'num', title: 'Pillar Code (e.g. PILLAR 01)', type: 'string' }),
                defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Pillar Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'manifesto',
      title: 'The Engineering Manifesto (Code of Conduct)',
      type: 'object',
      hidden: ({ document }) => !isMission(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'rules',
          title: 'Manifesto Principles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'num', title: 'Number Index (e.g. 01)', type: 'string' }),
                defineField({ name: 'title', title: 'Principle Title', type: 'string' }),
                defineField({ name: 'text', title: 'Principle Rule Statement', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'qaStandards',
      title: 'Quality Assurance & Craftsmanship Standards',
      type: 'object',
      hidden: ({ document }) => !isMission(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'standards',
          title: 'QA Standards Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Standard Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Standard Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Name (Terminal, CheckSquare, GitBranch, FileCode2)', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // LEADERSHIP PAGE ONLY SECTIONS (/about/leadership)
    // ==========================================
    defineField({
      name: 'ceoSpotlight',
      title: 'Founder & CEO Spotlight Section',
      type: 'object',
      hidden: ({ document }) => !isLeadership(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'name', title: 'CEO Name', type: 'string' }),
        defineField({ name: 'role', title: 'Executive Title', type: 'string' }),
        defineField({ name: 'highlight', title: 'Key Highlight Badge', type: 'string' }),
        defineField({ name: 'bio', title: 'Executive Biography', type: 'text' }),
        defineField({ name: 'quote', title: 'Leadership Vision Quote', type: 'text' }),
        defineField({
          name: 'skills',
          title: 'Specialized Expertise Badges',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    defineField({
      name: 'leadershipTeam',
      title: 'Executive Architects & Practice Directors',
      type: 'object',
      hidden: ({ document }) => !isLeadership(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'members',
          title: 'Executive Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Full Name', type: 'string' }),
                defineField({ name: 'role', title: 'Role Title', type: 'string' }),
                defineField({ name: 'highlight', title: 'Badge Highlight', type: 'string' }),
                defineField({ name: 'initials', title: 'Initials (e.g. SC)', type: 'string' }),
                defineField({ name: 'bio', title: 'Biography', type: 'text' }),
                defineField({ name: 'imageUrl', title: 'Avatar Image URL', type: 'string' }),
                defineField({
                  name: 'skills',
                  title: 'Core Skills',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'philosophy',
      title: 'Operating Philosophy (How Leadership Operates)',
      type: 'object',
      hidden: ({ document }) => !isLeadership(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'principles',
          title: 'Operating Principles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'step', title: 'Step Code (e.g. 01)', type: 'string' }),
                defineField({ name: 'title', title: 'Principle Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Principle Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // GLOBAL FOOTPRINT PAGE ONLY SECTIONS (/about/global-footprint)
    // ==========================================
    defineField({
      name: 'hubsSection',
      title: 'Regional Delivery Hubs Section',
      type: 'object',
      hidden: ({ document }) => !isGlobal(document?._id),
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
                defineField({ name: 'badge', title: 'Timezone / Region Badge', type: 'string' }),
                defineField({ name: 'name', title: 'Hub Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Overview Description', type: 'text' }),
                defineField({
                  name: 'list',
                  title: 'Key Operational Highlights',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'complianceSection',
      title: 'Enterprise Compliance & Standards Section',
      type: 'object',
      hidden: ({ document }) => !isGlobal(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'compliance',
          title: 'Compliance Certifications',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Standard Name (e.g. ISO 27001)', type: 'string' }),
                defineField({ name: 'tag', title: 'Domain Tag', type: 'string' }),
                defineField({ name: 'subtitle', title: 'Audit Subtitle', type: 'string' }),
                defineField({ name: 'desc', title: 'Compliance Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'securitySection',
      title: 'Data Shield & Security Architectural Controls',
      type: 'object',
      hidden: ({ document }) => !isGlobal(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'standards',
          title: 'Security Control Standards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Security Title', type: 'string' }),
                defineField({ name: 'desc', title: 'Security Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // SUB-PAGES CROSS-LINKS HUB (/about/mission, /about/leadership, /about/global-footprint)
    // ==========================================
    defineField({
      name: 'internalLinks',
      title: 'Recommended Engineering Services Cross-Links',
      type: 'object',
      hidden: ({ document }) => isMainAbout(document?._id),
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'services',
          title: 'Service Link Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Service Name', type: 'string' }),
                defineField({ name: 'link', title: 'Route Path (e.g. /services/cloud-devops)', type: 'string' }),
                defineField({ name: 'desc', title: 'Description', type: 'text' }),
                defineField({ name: 'tag', title: 'Badge Tag', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ==========================================
    // UNIVERSAL SHARED SECTIONS (All 4 Pages)
    // ==========================================
    defineField({
      name: 'faq',
      title: 'Frequently Asked Questions (FAQ & Schema)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Section Label', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'question', title: 'Question', type: 'string' }),
                defineField({ name: 'answer', title: 'Answer', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

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

    defineField({
      name: 'seo',
      title: 'Page SEO Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
      id: '_id',
    },
    prepare({ title, id }) {
      const pageNames: Record<string, string> = {
        aboutPage: 'Main About Us (/about)',
        aboutMissionPage: 'Mission & Creed (/about/mission)',
        aboutLeadershipPage: 'Executive Leadership (/about/leadership)',
        aboutGlobalPage: 'Global Footprint (/about/global-footprint)',
      };
      const cleanId = (id || '').replace(/^drafts\./, '');
      return {
        title: pageNames[cleanId] || title || 'About Page',
        subtitle: `Document ID: ${cleanId}`,
      };
    },
  },
});
