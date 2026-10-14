import { seoSchema } from './objects/seo';
import { portableTextSchema } from './objects/portableText';
import { heroSlideSchema } from './objects/heroSlide';
import { homePageSchema } from './documents/homePage';
import { aboutPageSchema } from './documents/aboutPage';
import { contactPageSchema } from './documents/contactPage';
import { caseStudiesPageSchema } from './documents/caseStudiesPage';
import { serviceSchema } from './documents/service';
import { industrySchema } from './documents/industry';
import { caseStudySchema } from './documents/caseStudy';
import { blogSchema } from './documents/blog';
import { teamMemberSchema } from './documents/teamMember';
import { siteSettingsSchema } from './documents/siteSettings';

export const schemaTypes = [
  // Objects
  seoSchema,
  portableTextSchema,
  heroSlideSchema,

  // Documents
  homePageSchema,
  aboutPageSchema,
  contactPageSchema,
  caseStudiesPageSchema,
  serviceSchema,
  industrySchema,
  caseStudySchema,
  blogSchema,
  teamMemberSchema,
  siteSettingsSchema,
];
