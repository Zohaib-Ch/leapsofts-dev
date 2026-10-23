import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import type { SanitySEO } from '../../sanity/types';
import { urlFor } from '../../sanity/image';

interface MetaSEOProps {
  seo?: SanitySEO;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultKeywords?: string;
  defaultOgImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  schema?: Record<string, any>;
}

const DEFAULT_TITLE = 'Leapsofts | Enterprise Software Engineering & Digital Transformation';
const DEFAULT_DESCRIPTION = 'Leapsofts delivers high-impact custom software, AI & data engineering, cloud architecture, and dedicated engineering teams to accelerate digital growth.';
const DEFAULT_KEYWORDS = 'software engineering, custom software, AI development, cloud engineering, dedicated teams, web development';
const DEFAULT_OG_IMAGE = 'https://www.leapsofts.com/logo/Leap-soft-01.png';
const DOMAIN = 'https://www.leapsofts.com';

export const MetaSEO: React.FC<MetaSEOProps> = ({
  seo,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
  defaultOgImage,
  canonicalUrl: propCanonicalUrl,
  schema,
}) => {
  const location = useLocation();
  const currentUrl = `${DOMAIN}${location.pathname}`;

  const title = seo?.metaTitle || defaultTitle || DEFAULT_TITLE;
  const description = seo?.metaDescription || defaultDescription || DEFAULT_DESCRIPTION;

  const rawKeywords = seo?.keywords;
  const keywords = Array.isArray(rawKeywords) && rawKeywords.length > 0
    ? rawKeywords.join(', ')
    : (typeof rawKeywords === 'string' && rawKeywords.trim() !== ''
      ? rawKeywords
      : (defaultKeywords || DEFAULT_KEYWORDS));

  const canonicalUrl = seo?.canonicalUrl || propCanonicalUrl || currentUrl;
  const ogImage = seo?.ogImage ? urlFor(seo.ogImage) : (defaultOgImage || DEFAULT_OG_IMAGE);

  useEffect(() => {
    if (typeof document !== 'undefined' && title) {
      document.title = title;
    }
  }, [title]);

  return schema ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ) : null;
};

export default MetaSEO;
