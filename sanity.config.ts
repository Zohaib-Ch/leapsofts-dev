import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';

export default defineConfig({
  name: 'default',
  title: 'Leapsofts Studio',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'leapsofts',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content & Management')
          .items([
            // Core Single Pages
            S.listItem()
              .title('Single Pages')
              .child(
                S.list()
                  .title('Single Pages')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Contact Us Page')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                  ])
              ),

            S.divider(),

            // About Us Pages Collection Group
            S.listItem()
              .title('About Us Pages')
              .child(
                S.list()
                  .title('About Us Pages')
                  .items([
                    S.listItem()
                      .title('Main About Page (/about)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('Mission & Engineering Creed (/about/mission)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutMissionPage')),
                    S.listItem()
                      .title('Executive Leadership (/about/leadership)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutLeadershipPage')),
                    S.listItem()
                      .title('Global Delivery & Footprint (/about/global-footprint)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutGlobalPage')),
                  ])
              ),

            // Dynamic Service Pages
            S.listItem()
              .title('Service Pages')
              .child(S.documentTypeList('service').title('All Service Pages')),

            // Dynamic Industry Pages
            S.listItem()
              .title('Industry Pages')
              .child(S.documentTypeList('industry').title('All Industry Pages')),

            // Case Studies / Projects
            S.listItem()
              .title('Case Studies / Projects')
              .child(S.documentTypeList('caseStudy').title('All Case Studies')),

            // Blog Posts
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('blog').title('All Blog Posts')),

            S.divider(),

            S.listItem()
              .title('Team Members')
              .child(S.documentTypeList('teamMember').title('All Team Members')),

            S.listItem()
              .title('Global Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
