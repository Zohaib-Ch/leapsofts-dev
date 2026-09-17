import { client } from './client';
import type {
  SanityHomePage,
  SanityAboutPage,
  SanityContactPage,
  SanityService,
  SanityIndustry,
  SanityCaseStudy,
  SanityBlog,
} from './types';

// GROQ Query strings
export const HOME_PAGE_QUERY = `*[_type == "homePage"] | order(_updatedAt desc)[0]{
  hero,
  coreCapabilities,
  aboutUs {
    label,
    headline,
    descriptionText,
    "imageUrl": image.asset->url,
    stats
  },
  strategy {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    descriptionText,
    description2Text,
    "imageUrl": image.asset->url,
    buttonText,
    buttonPath
  },
  processes,
  testimonials {
    sectionLabel,
    testimonialsList[] {
      id,
      quote,
      text,
      name,
      role,
      "avatarUrl": avatar.asset->url
    }
  },
  blogSection,
  seo
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  hero,
  missionVision,
  executiveSummary,
  seo
}`;

export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  hero,
  offices,
  phones,
  email,
  seo
}`;

export const ALL_SERVICES_QUERY = `*[_type == "service"]{
  _id,
  title,
  "slug": slug.current,
  category,
  badgeText,
  shortDescription,
  seo
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  badgeText,
  shortDescription,
  hero,
  serviceOverview {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    description,
    "imageUrl": image.asset->url
  },
  capabilitiesSection {
    title,
    description,
    slides[] {
      id,
      number,
      title,
      "imageUrl": image.asset->url,
      items
    }
  },
  infoGrid,
  comparisonTable,
  strategyCTA {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    descriptionText,
    "imageUrl": image.asset->url
  },
  serviceFeatures,
  emergingTech,
  deliverMVP,
  processes,
  faqs,
  seo
}`;

export const ALL_INDUSTRIES_QUERY = `*[_type == "industry"]{
  _id,
  title,
  "slug": slug.current,
  badgeText,
  shortDescription,
  seo
}`;

export const INDUSTRY_BY_SLUG_QUERY = `*[_type == "industry" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  badgeText,
  shortDescription,
  whoWeServe,
  solutions,
  impactStats,
  faqs,
  seo
}`;

export const ALL_CASE_STUDIES_QUERY = `*[_type == "caseStudy"]{
  id,
  title,
  client,
  industry,
  services,
  coverImage,
  summary,
  challenge,
  solution,
  results,
  technologies,
  seo
}`;

export const CASE_STUDY_BY_ID_QUERY = `*[_type == "caseStudy" && id == $id][0]{
  id,
  title,
  client,
  industry,
  services,
  coverImage,
  summary,
  challenge,
  solution,
  results,
  technologies,
  testimonialQuote,
  seo
}`;

export const ALL_BLOGS_QUERY = `*[_type == "blog"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  author,
  coverImage,
  excerpt,
  category,
  readTime,
  seo
}`;

export const BLOG_BY_SLUG_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  author,
  coverImage,
  excerpt,
  category,
  readTime,
  body,
  seo
}`;

// Fetch helper functions with silent failover to null if network / dataset not initialized
export async function getSanityHomePage(): Promise<SanityHomePage | null> {
  try {
    const res = await client.fetch(HOME_PAGE_QUERY);
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityAboutPage(): Promise<SanityAboutPage | null> {
  try {
    const res = await client.fetch(ABOUT_PAGE_QUERY);
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityContactPage(): Promise<SanityContactPage | null> {
  try {
    const res = await client.fetch(CONTACT_PAGE_QUERY);
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityServiceBySlug(slug: string): Promise<SanityService | null> {
  try {
    const res = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityIndustryBySlug(slug: string): Promise<SanityIndustry | null> {
  try {
    const res = await client.fetch(INDUSTRY_BY_SLUG_QUERY, { slug });
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityCaseStudies(): Promise<SanityCaseStudy[] | null> {
  try {
    const res = await client.fetch(ALL_CASE_STUDIES_QUERY);
    return Array.isArray(res) && res.length > 0 ? res : null;
  } catch (e) {
    return null;
  }
}

export async function getSanityCaseStudyById(id: string): Promise<SanityCaseStudy | null> {
  try {
    const res = await client.fetch(CASE_STUDY_BY_ID_QUERY, { id });
    return res || null;
  } catch (e) {
    return null;
  }
}

export async function getSanityBlogs(): Promise<SanityBlog[] | null> {
  try {
    const res = await client.fetch(ALL_BLOGS_QUERY);
    return Array.isArray(res) && res.length > 0 ? res : null;
  } catch (e) {
    return null;
  }
}

export async function getSanityBlogBySlug(slug: string): Promise<SanityBlog | null> {
  try {
    const res = await client.fetch(BLOG_BY_SLUG_QUERY, { slug });
    return res || null;
  } catch (e) {
    return null;
  }
}
