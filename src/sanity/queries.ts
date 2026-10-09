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

// GROQ Query fragments
const SEO_FRAGMENT = `seo {
  ...,
  "ogImageUrl": ogImage.asset->url,
  "twitterImageUrl": twitterImage.asset->url
}`;

// GROQ Query strings
export const HOME_PAGE_QUERY = `*[_type == "homePage"] | order(_updatedAt desc)[0]{
  hero,
  coreCapabilities,
  aboutUs {
    label,
    headline,
    titleAccent,
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
  ${SEO_FRAGMENT}
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage" && (_id == $id || _id == "drafts." + $id)] | order(_updatedAt desc)[0]{
  hero,
  creed,
  corePrinciples,
  timeline,
  leadership {
    label,
    title,
    subtitle,
    members[] {
      _type == "reference" => coalesce(
        *[_id == "drafts." + ^._ref][0]{
          name,
          role,
          bio,
          highlight,
          initials,
          skills,
          "imageUrl": coalesce(image.asset->url, imageUrl)
        },
        @->{
          name,
          role,
          bio,
          highlight,
          initials,
          skills,
          "imageUrl": coalesce(image.asset->url, imageUrl)
        }
      ),
      _type != "reference" => {
        name,
        role,
        bio,
        highlight,
        initials,
        skills,
        "imageUrl": coalesce(image.asset->url, imageUrl)
      }
    }
  },
  globalDelivery,
  whyChooseUs,
  industryImpact,
  techStack,
  whyMissionMatters,
  pillars,
  manifesto,
  qaStandards,
  ceoSpotlight,
  leadershipTeam,
  philosophy,
  hubsSection,
  complianceSection,
  securitySection,
  internalLinks,
  faq,
  cta,
  seo
}`;

export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"] | order(_updatedAt desc)[0]{
  hero,
  offices,
  phones,
  email,
  ${SEO_FRAGMENT}
}`;

export const CASE_STUDIES_PAGE_QUERY = `*[_type == "caseStudiesPage" && (_id == "caseStudiesPage" || _id == "drafts.caseStudiesPage")] | order(_updatedAt desc)[0]{
  hero,
  cta,
  ${SEO_FRAGMENT}
}`;

export const ALL_SERVICES_QUERY = `*[_type == "service"]{
  _id,
  title,
  "slug": slug.current,
  category,
  badgeText,
  shortDescription,
  ${SEO_FRAGMENT}
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && (slug.current == $slug || _id == $slug || _id == "service-" + $slug || _id == "drafts.service-" + $slug)] | order(_updatedAt desc)[0]{
  _id,
  title,
  "slug": slug.current,
  category,
  badgeText,
  shortDescription,
  hero,
  subServices,
  metrics,
  comparison,
  serviceOverview {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    description,
    "imageUrl": coalesce(image.asset->url, imageUrl)
  },
  capabilitiesSection {
    title,
    description,
    slides[] {
      id,
      number,
      title,
      "imageUrl": coalesce(image.asset->url, imageUrl),
      items
    }
  },
  infoGrid {
    label,
    titleAccent,
    titleMain,
    description,
    items[] {
      title,
      description
    }
  },
  comparisonTable {
    label,
    titleAccent,
    titleMain,
    description,
    headers,
    items[] {
      feature,
      custom,
      offTheShelf
    }
  },
  strategyCTA {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    descriptionText,
    buttonText,
    buttonPath,
    "imageUrl": coalesce(image.asset->url, imageUrl)
  },
  serviceFeatures {
    title,
    items[] {
      title,
      description,
      icon
    }
  },
  emergingTech {
    label,
    titleAccent,
    titleMain,
    description,
    "imageUrl": coalesce(image.asset->url, imageUrl),
    items[] {
      title,
      description,
      icon
    }
  },
  deliverMVP {
    label,
    title,
    accentText,
    description,
    items[] {
      title,
      description
    }
  },
  processes {
    title,
    phaseLabels,
    processPhases[] {
      id,
      phase,
      title,
      description,
      features[] {
        title,
        description
      }
    }
  },
  relatedServices {
    title,
    sectionLabel,
    items[] {
      title,
      description,
      link
    }
  },
  faqs,
  ${SEO_FRAGMENT}
}`;

export const ALL_INDUSTRIES_QUERY = `*[_type == "industry"]{
  _id,
  title,
  "slug": slug.current,
  badgeText,
  shortDescription,
  ${SEO_FRAGMENT}
}`;

export const INDUSTRY_BY_SLUG_QUERY = `*[_type == "industry" && (slug.current == $slug || _id == $slug || _id == "industry-" + $slug || _id == "drafts.industry-" + $slug)] | order(_updatedAt desc)[0]{
  _id,
  title,
  "slug": slug.current,
  badgeText,
  shortDescription,
  hero,
  commitmentSection {
    subtitle,
    title,
    items[] {
      title,
      description,
      icon
    }
  },
  strategyCTA {
    label,
    titleMain,
    titleAccent,
    titleEnd,
    descriptionText,
    buttonText,
    buttonPath,
    "imageUrl": image.asset->url
  },
  solutionsSection {
    label,
    titleAccent,
    titleMain,
    description,
    items[] {
      title,
      description,
      icon
    }
  },
  servicesSection,
  processHeader,
  deliverMVP {
    label,
    title,
    accentText,
    description,
    items[] {
      title,
      description
    }
  },
  relatedServices {
    title,
    sectionLabel,
    items[] {
      title,
      description,
      link
    }
  },
  whoWeServe,
  solutions,
  impactStats,
  faqs,
  ${SEO_FRAGMENT}
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
  "author": select(
    defined(author._ref) => coalesce(
      *[_id == "drafts." + ^.author._ref][0]{
        name,
        role,
        bio,
        highlight,
        initials,
        "avatar": select(defined(initials) => initials, "HR"),
        "avatarInitials": select(defined(initials) => initials, "HR"),
        "avatarUrl": coalesce(image.asset->url, imageUrl)
      },
      author->{
        name,
        role,
        bio,
        highlight,
        initials,
        "avatar": select(defined(initials) => initials, "HR"),
        "avatarInitials": select(defined(initials) => initials, "HR"),
        "avatarUrl": coalesce(image.asset->url, imageUrl)
      }
    ),
    defined(author.name) => {
      "name": author.name,
      "role": author.role,
      "bio": author.bio,
      "avatar": coalesce(author.avatarInitials, author.initials, "HR"),
      "avatarInitials": coalesce(author.avatarInitials, author.initials, "HR"),
      "avatarUrl": coalesce(author.avatar.asset->url, author.avatarUrl, author.image.asset->url)
    }
  ),
  "coverImageUrl": coalesce(coverImage.asset->url, coverImageUrl),
  content,
  body,
  seo
}`;

export const BLOG_BY_SLUG_QUERY = `*[_type == "blog" && (slug.current == $slug || _id == $slug || _id == "drafts." + $slug || _id == "blog-" + $slug || _id == "drafts.blog-" + $slug)] | order(_updatedAt desc)[0]{
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
  "author": select(
    defined(author._ref) => coalesce(
      *[_id == "drafts." + ^.author._ref][0]{
        name,
        role,
        bio,
        highlight,
        initials,
        "avatar": select(defined(initials) => initials, "HR"),
        "avatarInitials": select(defined(initials) => initials, "HR"),
        "avatarUrl": coalesce(image.asset->url, imageUrl)
      },
      author->{
        name,
        role,
        bio,
        highlight,
        initials,
        "avatar": select(defined(initials) => initials, "HR"),
        "avatarInitials": select(defined(initials) => initials, "HR"),
        "avatarUrl": coalesce(image.asset->url, imageUrl)
      }
    ),
    defined(author.name) => {
      "name": author.name,
      "role": author.role,
      "bio": author.bio,
      "avatar": coalesce(author.avatarInitials, author.initials, "HR"),
      "avatarInitials": coalesce(author.avatarInitials, author.initials, "HR"),
      "avatarUrl": coalesce(author.avatar.asset->url, author.avatarUrl, author.image.asset->url)
    }
  ),
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

export async function getSanityAboutPage(id: string = 'aboutPage'): Promise<SanityAboutPage | null> {
  try {
    const res = await client.fetch(ABOUT_PAGE_QUERY, { id });
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

export const ALL_TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(_updatedAt desc){
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
    if (!Array.isArray(res) || res.length === 0) return null;

    // Deduplicate between draft and published (preferring draft/newer items)
    const map = new Map<string, SanityBlog>();
    for (const item of res) {
      const slugKey = item.slug || item._id?.replace(/^drafts\./, '');
      if (!slugKey) continue;
      const existing = map.get(slugKey);
      if (!existing || item._id?.startsWith('drafts.')) {
        map.set(slugKey, item);
      }
    }
    return Array.from(map.values());
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
    if (!Array.isArray(res) || res.length === 0) return null;

    // Deduplicate between draft and published (preferring draft/item with image)
    const map = new Map<string, SanityTeamMember>();
    for (const item of res) {
      const canonicalKey = item.slug || item.name.toLowerCase().trim();
      const existing = map.get(canonicalKey);
      if (!existing || (item.imageUrl && !existing.imageUrl) || item._id?.startsWith('drafts.')) {
        map.set(canonicalKey, item);
      }
    }
    return Array.from(map.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
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
