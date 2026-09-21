export interface SanitySEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: any;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface SanityHero {
  badgeText?: string;
  title?: string;
  title2?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaPath?: string;
}

export interface SanityServiceSubItem {
  name: string;
  path: string;
}

export interface SanityCoreCapabilityService {
  id: string;
  number: string;
  title: string;
  description: string;
  items: SanityServiceSubItem[];
}

export interface SanityCoreCapabilities {
  label?: string;
  titleMain?: string;
  titleAccent?: string;
  titleEnd?: string;
  services?: SanityCoreCapabilityService[];
}

export interface SanityStat {
  label: string;
  count: number;
  suffix?: string;
}

export interface SanityAboutStat {
  number: number;
  suffix?: string;
  text: string;
}

export interface SanityAboutUs {
  label?: string;
  headline?: string;
  descriptionText?: string;
  imageUrl?: string;
  stats?: SanityAboutStat[];
}

export interface SanityStrategy {
  label?: string;
  titleMain?: string;
  titleAccent?: string;
  titleEnd?: string;
  descriptionText?: string;
  description2Text?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonPath?: string;
}

export interface SanityProcessFeature {
  title: string;
  description: string;
}

export interface SanityProcessPhaseItem {
  id: number;
  phase: string;
  title: string;
  description: string;
  features: SanityProcessFeature[];
}

export interface SanityProcesses {
  title?: string;
  phaseLabels?: string[];
  phases?: SanityProcessPhaseItem[];
}

export interface SanityTestimonialItem {
  id: number;
  quote: string;
  text: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface SanityTestimonials {
  sectionLabel?: string;
  testimonialsList?: SanityTestimonialItem[];
}

export interface SanityBlogSection {
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
}

export interface SanityHomePage {
  hero?: SanityHero;
  coreCapabilities?: SanityCoreCapabilities;
  aboutUs?: SanityAboutUs;
  strategy?: SanityStrategy;
  processes?: SanityProcesses;
  testimonials?: SanityTestimonials;
  blogSection?: SanityBlogSection;
  seo?: SanitySEO;
}

export interface SanityAboutPage {
  hero?: SanityHero;
  missionVision?: {
    missionTitle?: string;
    missionText?: string;
    visionTitle?: string;
    visionText?: string;
  };
  executiveSummary?: {
    title?: string;
    description?: string;
  };
  seo?: SanitySEO;
}

export interface SanityContactPage {
  hero?: SanityHero;
  offices?: { city: string; address: string; country: string; isHQ?: boolean }[];
  phones?: { region: string; number: string; hours?: string }[];
  email?: string;
  seo?: SanitySEO;
}

export interface SanityCaseStudiesPage {
  hero?: {
    title?: string;
    title2?: string;
    description?: string;
    introDescription?: { text: string; bold?: boolean }[];
  };
  cta?: {
    buttonText?: string;
    buttonPath?: string;
  };
  seo?: SanitySEO;
}

export interface SanityService {
  _id?: string;
  title: string;
  slug: string;
  category: 'Product Engineering' | 'Next Gen Services' | 'Cloud Services' | 'Solutions';
  badgeText?: string;
  shortDescription?: string;
  hero?: {
    title?: string;
    subtitle?: string;
    introText?: string;
  };
  serviceOverview?: {
    label?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    description?: string;
    imageUrl?: string;
  };
  capabilitiesSection?: {
    title?: string;
    description?: string;
    slides?: {
      id?: string;
      number?: string;
      title?: string;
      imageUrl?: string;
      items?: { name: string; description: string }[];
    }[];
  };
  infoGrid?: {
    label?: string;
    titleAccent?: string;
    titleMain?: string;
    description?: string;
    items?: { title: string; description: string }[];
  };
  comparisonTable?: {
    label?: string;
    titleAccent?: string;
    titleMain?: string;
    description?: string;
    headers?: { feature?: string; custom?: string; offTheShelf?: string };
    items?: { feature: string; custom: string; offTheShelf: string }[];
  };
  strategyCTA?: {
    label?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    descriptionText?: string;
    imageUrl?: string;
  };
  serviceFeatures?: {
    title?: string;
    items?: { icon?: string; title: string; description: string }[];
  };
  emergingTech?: {
    label?: string;
    titleAccent?: string;
    titleMain?: string;
    description?: string;
    items?: { icon?: string; title: string; description: string }[];
  };
  deliverMVP?: {
    label?: string;
    title?: string;
    accentText?: string;
    description?: string;
    items?: { title: string; description: string }[];
  };
  processes?: {
    title?: string;
    phaseLabels?: string[];
    processPhases?: {
      id?: number;
      phase?: string;
      title?: string;
      description?: string;
      features?: { title: string; description: string }[];
    }[];
  };
  faqs?: { question: string; answer: string }[];
  seo?: SanitySEO;
}

export interface SanityIndustry {
  _id?: string;
  title: string;
  slug: string;
  badgeText?: string;
  shortDescription?: string;
  whoWeServe?: string[];
  solutions?: { title: string; description: string }[];
  impactStats?: SanityStat[];
  faqs?: { question: string; answer: string }[];
  seo?: SanitySEO;
}

export interface SanityCaseStudy {
  id: string;
  slug?: string;
  title: string;
  type?: 'industry' | 'project';
  brand?: {
    name?: string;
    description?: string;
    logo?: string;
    logoPreset?: string;
  };
  industry?: string;
  projectList?: string[];
  coverImage?: any;
  brandVisualImg?: string;
  brandVisualImgPreset?: string;
  tabs?: { id: string; label: string; isActive?: boolean }[];
  highlightItems?: { tabId: string; projects: string[] }[];
  highlight?: Record<string, string[]>;
  summary?: { description?: string; details?: { label: string; value: string }[] } | string;
  impact?: { title?: string; images?: string[] };
  details?: { label: string; value: string }[];
  techStack?: {
    title?: string;
    items?: {
      label: string;
      techs: {
        name: string;
        icon?: string;
        iconPreset?: string;
        iconImageUrl?: string;
      }[];
    }[];
  };
  challenge?: any;
  solution?: any;
  results?: { label: string; value: string }[];
  testimonialQuote?: { quote: string; author: string; role?: string };
  seo?: SanitySEO;
}

export interface SanityBlog {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  subtitle?: string;
  publishedAt?: string;
  publishedDate?: string;
  category?: string;
  readTime?: string;
  featured?: boolean;
  coverImage?: any;
  coverImageUrl?: string;
  excerpt?: string;
  tags?: string[];
  author?: {
    name: string;
    role?: string;
    avatar?: any;
    avatarInitials?: string;
    bio?: string;
  };
  content?: {
    heading?: string;
    paragraphs?: string[];
    keyTakeaway?: string;
    bulletPoints?: string[];
    quote?: string;
    codeBlock?: {
      language: string;
      filename?: string;
      code: string;
    };
  }[];
  body?: any;
  seo?: SanitySEO;
}

export interface SanityTeamMember {
  _id?: string;
  name: string;
  slug?: string;
  role: string;
  bio?: string;
  highlight?: string;
  initials?: string;
  isCeoSpotlight?: boolean;
  order?: number;
  skills?: string[];
  image?: any;
  imageUrl?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}
