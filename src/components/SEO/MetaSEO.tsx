import React from 'react';
import { Helmet } from 'react-helmet-async';
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

  return (
    <Helmet>
      {/* Title & Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {seo?.noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content="Leapsofts" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaSEO;
