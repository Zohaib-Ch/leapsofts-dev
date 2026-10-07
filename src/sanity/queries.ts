import { client } from './client';
import type {
  SanityHomePage,
  SanityAboutPage,
  SanityContactPage,
  SanityCaseStudiesPage,
  SanityService,
  SanityIndustry,
  SanityCaseStudy,
  SanityBlog,
  SanityTeamMember,
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

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage" && (_id == "aboutPage" || _id == "drafts.aboutPage")] | order(_updatedAt desc)[0]{
  hero,
  creed,
  corePrinciples,
  timeline,
  leadership {
    label,
    title,
    subtitle,
    members[] {
      _type == "reference" => @->{
        name,
        role,
        bio,
        highlight,
        initials,
        skills,
        "imageUrl": select(defined(image.asset) => image.asset->url, imageUrl)
      },
      _type != "reference" => {
        name,
        role,
        bio,
        highlight,
        initials,
        skills,
        "imageUrl": select(defined(image.asset) => image.asset->url, imageUrl)
      }
    }
  },
  globalDelivery,
  cta,
  seo
}`;

export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  hero,
  offices,
  phones,
  email,
  seo
}`;

export const CASE_STUDIES_PAGE_QUERY = `*[_type == "caseStudiesPage" && (_id == "caseStudiesPage" || _id == "drafts.caseStudiesPage")] | order(_updatedAt desc)[0]{
  hero,
  cta,
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
  "slug": slug.current,
  title,
  type,
  brand {
    name,
    description,
    "logo": logo.asset->url,
    logoPreset
  },
  industry,
  projectList,
  "coverImage": coverImage.asset->url,
  "brandVisualImg": brandVisualImg.asset->url,
  brandVisualImgPreset,
  tabs[] {
    id,
    label,
    isActive
  },
  highlightItems[] {
    tabId,
    projects
  },
  summary,
  impact {
    title,
    "images": images[].asset->url
  },
  details,
  techStack {
    title,
    items[] {
      label,
      techs[] {
        name,
        icon,
        iconPreset,
        "iconImageUrl": iconImage.asset->url
      }
    }
  },
  challenge,
  solution,
  results,
  testimonialQuote,
  seo
}`;

export const CASE_STUDY_BY_ID_QUERY = `*[_type == "caseStudy" && (id == $id || slug.current == $id || _id == $id || _id == "caseStudy-" + $id || _id == "drafts.caseStudy-" + $id)] | order(_updatedAt desc)[0]{
  id,
  "slug": slug.current,
  title,
  type,
  brand {
    name,
    description,
    "logo": logo.asset->url,
    logoPreset
  },
  industry,
  projectList,
  "coverImage": coverImage.asset->url,
  "brandVisualImg": brandVisualImg.asset->url,
  brandVisualImgPreset,
  tabs[] {
    id,
    label,
    isActive
  },
  highlightItems[] {
    tabId,
    projects
  },
  summary,
  impact {
    title,
    "images": images[].asset->url
  },
  details,
  techStack {
    title,
    items[] {
      label,
      techs[] {
        name,
        icon,
        iconPreset,
        "iconImageUrl": iconImage.asset->url
      }
    }
  },
  challenge,
  solution,
  results,
  testimonialQuote,
  seo
}`;

export const ALL_BLOGS_QUERY = `*[_type == "blog"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  subtitle,
  publishedAt,
  publishedDate,
  category,
  readTime,
  featured,
  excerpt,
  tags,
  author {
    name,
    role,
    avatarInitials,
    bio,
    "avatar": avatar.asset->url
  },
  "coverImageUrl": coalesce(coverImage.asset->url, coverImageUrl),
  content,
  body,
  seo
}`;

export const BLOG_BY_SLUG_QUERY = `*[_type == "blog" && (slug.current == $slug || _id == $slug || _id == "blog-" + $slug)][0]{
  _id,
  title,
  "slug": slug.current,
  subtitle,
  publishedAt,
  publishedDate,
  category,
  readTime,
  featured,
  excerpt,
  tags,
  author {
    name,
    role,
    avatarInitials,
    bio,
    "avatar": avatar.asset->url
  },
  "coverImageUrl": coalesce(coverImage.asset->url, coverImageUrl),
  content,
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

export const ALL_TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc, _createdAt desc){
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  highlight,
  initials,
  isCeoSpotlight,
  order,
  skills,
  "imageUrl": coalesce(image.asset->url, imageUrl),
  linkedin,
  github,
  twitter
}`;

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

export async function getSanityTeamMembers(): Promise<SanityTeamMember[] | null> {
  try {
    const res = await client.fetch(ALL_TEAM_MEMBERS_QUERY);
    return Array.isArray(res) && res.length > 0 ? res : null;
  } catch (e) {
    return null;
  }
}

export async function getSanityCaseStudiesPage(): Promise<SanityCaseStudiesPage | null> {
  try {
    const res = await client.fetch(CASE_STUDIES_PAGE_QUERY);
    return res || null;
  } catch (e) {
    return null;
  }
}
