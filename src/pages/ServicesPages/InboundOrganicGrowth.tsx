import { useState, useMemo } from 'react';
import { Link, useLoaderData } from 'react-router';
import MetaSEO from '../../components/SEO/MetaSEO';
import { GROWTH_SERVICES_DATA, type GrowthServicePillar } from '../../data/growthServicesData';
import styles from '../Services/GrowthServicePage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileText,
  Users,
  Palette,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useServicePage } from '../../hooks/useServicePage';
import { getSanityServiceBySlug } from '../../sanity/queries';
import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';

const SLUG = 'inbound-organic-growth';
const FALLBACK_DATA: GrowthServicePillar = GROWTH_SERVICES_DATA[SLUG]!;

export async function loader() {
  const sanityData = await getSanityServiceBySlug(SLUG);
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  const sanityData = data?.sanityData;
  return buildPageMeta({
    sanityData,
    defaultTitle: FALLBACK_DATA.seo.title,
    defaultDescription: FALLBACK_DATA.seo.description,
    defaultKeywords: FALLBACK_DATA.seo.keywords.join(', '),
    canonicalUrl: `https://www.leapsofts.com/services/${SLUG}`,
  });
}

const ICON_MAP: Record<string, any> = {
  Search,
  FileText,
  Users,
  Palette,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function InboundOrganicGrowth() {
  const loaderData = useLoaderData() as any;
  const { data: sanityData } = useServicePage(SLUG, loaderData?.sanityData);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service: GrowthServicePillar = useMemo(() => {
    if (!sanityData) return FALLBACK_DATA;

    const parsedSubServices = (sanityData.subServices && Array.isArray(sanityData.subServices) && sanityData.subServices.length > 0)
      ? sanityData.subServices.map((sub: any, idx: number) => ({
          id: sub.id || sub._key || `sanity-sub-${idx}`,
          title: sub.title || FALLBACK_DATA.subServices[idx]?.title || 'Capability',
          subtitle: sub.subtitle || FALLBACK_DATA.subServices[idx]?.subtitle || '',
          description: sub.description || FALLBACK_DATA.subServices[idx]?.description || '',
          iconName: sub.iconName || FALLBACK_DATA.subServices[idx]?.iconName || 'Search',
          highlights: Array.isArray(sub.highlights) && sub.highlights.length > 0 ? sub.highlights : (FALLBACK_DATA.subServices[idx]?.highlights || []),
          deliverables: Array.isArray(sub.deliverables) && sub.deliverables.length > 0 ? sub.deliverables : (FALLBACK_DATA.subServices[idx]?.deliverables || []),
        }))
      : FALLBACK_DATA.subServices;

    const parsedFaqs = (sanityData.faqs && Array.isArray(sanityData.faqs) && sanityData.faqs.length > 0)
      ? sanityData.faqs.map((f: any) => ({
          question: f.question || f.q || '',
          answer: f.answer || f.a || '',
        }))
      : FALLBACK_DATA.faqs;

    const parsedKeywords: string[] = sanityData.seo?.keywords
      ? Array.isArray(sanityData.seo.keywords)
        ? sanityData.seo.keywords
        : typeof sanityData.seo.keywords === 'string'
          ? (sanityData.seo.keywords as string).split(',').map((k: string) => k.trim()).filter(Boolean)
          : FALLBACK_DATA.seo.keywords
      : FALLBACK_DATA.seo.keywords;

    return {
      ...FALLBACK_DATA,
      title: sanityData.title || sanityData.hero?.title || FALLBACK_DATA.title,
      subtitle: sanityData.shortDescription || sanityData.hero?.subtitle || FALLBACK_DATA.subtitle,
      heroDescription: sanityData.hero?.introText || FALLBACK_DATA.heroDescription,
      badgeText: sanityData.badgeText || FALLBACK_DATA.badgeText,
      metrics: (sanityData.metrics && Array.isArray(sanityData.metrics) && sanityData.metrics.length > 0)
        ? sanityData.metrics.map((m: any, idx: number) => ({
            value: m.value || FALLBACK_DATA.metrics[idx]?.value || '',
            label: m.label || FALLBACK_DATA.metrics[idx]?.label || '',
            description: m.description || FALLBACK_DATA.metrics[idx]?.description || '',
          }))
        : FALLBACK_DATA.metrics,
      comparison: sanityData.comparison?.title
        ? {
            title: sanityData.comparison.title || FALLBACK_DATA.comparison.title,
            subtitle: sanityData.comparison.subtitle || FALLBACK_DATA.comparison.subtitle,
            traditional: Array.isArray(sanityData.comparison.traditional) && sanityData.comparison.traditional.length > 0 ? sanityData.comparison.traditional : FALLBACK_DATA.comparison.traditional,
            leapsoftsPod: Array.isArray(sanityData.comparison.leapsoftsPod) && sanityData.comparison.leapsoftsPod.length > 0 ? sanityData.comparison.leapsoftsPod : FALLBACK_DATA.comparison.leapsoftsPod,
          }
        : FALLBACK_DATA.comparison,
      subServices: parsedSubServices,
      faqs: parsedFaqs,
      seo: {
        title: sanityData.seo?.metaTitle || FALLBACK_DATA.seo.title,
        description: sanityData.seo?.metaDescription || FALLBACK_DATA.seo.description,
        keywords: parsedKeywords,
      }
    };
  }, [sanityData]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const currentCanonicalUrl = `https://www.leapsofts.com/services/${SLUG}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.title,
      'description': service.seo.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Leapsofts',
        'url': 'https://www.leapsofts.com'
      },
      'serviceType': service.badgeText,
      'areaServed': 'Global'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.leapsofts.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://www.leapsofts.com/#services'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': service.title,
          'item': currentCanonicalUrl
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': service.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    }
  ];

  const schemaData = buildServiceSchema({
    name: service.title,
    description: service.seo.description,
    canonicalUrl: currentCanonicalUrl,
    faqs: service.faqs,
  });

  return (
    <div className={styles['page-container']}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <MetaSEO
        defaultTitle={service.seo.title}
        defaultDescription={service.seo.description}
        defaultKeywords={service.seo.keywords.join(', ')}
        canonicalUrl={currentCanonicalUrl}
        schema={jsonLd}
      />

      {/* Breadcrumbs */}
      <div className={styles['breadcrumb-bar']}>
        <div className={styles['breadcrumb-container']}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} className={styles['breadcrumb-separator']} />
          <span>Services</span>
          <ChevronRight size={14} className={styles['breadcrumb-separator']} />
          <span className={styles['breadcrumb-active']}>{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles['hero-section']}>
        <motion.div
          className={styles['hero-content']}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className={styles['badge']}>
            <Sparkles size={14} />
            <span>{service.badgeText}</span>
          </div>
          <h1 className={styles['hero-title']}>{service.title}</h1>
          <p className={styles['hero-subtitle']}>{service.subtitle}</p>
          <p className={styles['hero-description']}>{service.heroDescription}</p>

          <div className={styles['hero-actions']}>
            <Link to="/contact" className={styles['primary-btn']}>
              {service.primaryCTA}
              <ArrowRight size={16} />
            </Link>
            <a href="#capabilities" className={styles['secondary-btn']}>
              {service.secondaryCTA}
            </a>
          </div>
        </motion.div>

        {/* Hero Metrics Box */}
        <motion.div
          className={styles['metrics-grid']}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {service.metrics.map((m, idx) => (
            <motion.div key={idx} className={styles['metric-card']} variants={cardVariant}>
              <div className={styles['metric-value']}>{m.value}</div>
              <div className={styles['metric-label']}>{m.label}</div>
              <div className={styles['metric-desc']}>{m.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategic Positioning Banner */}
      <motion.div
        className={styles['positioning-banner']}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles['positioning-inner']}>
          <span className={styles['positioning-label']}>Strategic Focus</span>
          <span className={styles['positioning-text']}>{service.positioning}</span>
        </div>
      </motion.div>

      {/* Capabilities / Sub-Services Grid */}
      <section id="capabilities" className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles['section-tag']}>Core Pillars</div>
          <h2 className={styles['section-title']}>Targeted Growth Capabilities</h2>
          <p className={styles['section-subtitle']}>
            Plug-and-play operational modules designed to deliver predictable pipeline and measurable return on investment.
          </p>
        </motion.div>

        <motion.div
          className={styles['subservices-grid']}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {service.subServices.map((sub) => {
            const IconComponent = ICON_MAP[sub.iconName] || ShieldCheck;
            return (
              <motion.div key={sub.id} className={styles['subservice-card']} variants={cardVariant}>
                <div className={styles['card-header-icon']}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className={styles['card-title']}>{sub.title}</h3>
                  <div className={styles['card-subtitle']}>{sub.subtitle}</div>
                </div>
                <p className={styles['card-description']}>{sub.description}</p>
                <div className={styles['bullet-list']}>
                  {(sub.highlights || []).map((h: string, i: number) => (
                    <div key={i} className={styles['bullet-item']}>
                      <Check size={16} className={styles['check-icon']} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className={styles['deliverables-box']}>
                  <div className={styles['deliverables-title']}>Key Deliverables</div>
                  <div className={styles['deliverables-tags']}>
                    {(sub.deliverables || []).map((deliv: string, di: number) => (
                      <span key={di} className={styles['deliverable-tag']}>
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Comparison Grid */}
      <section className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles['section-tag']}>Strategic Advantage</div>
          <h2 className={styles['section-title']}>{service.comparison.title}</h2>
          <p className={styles['section-subtitle']}>{service.comparison.subtitle}</p>
        </motion.div>

        <motion.div
          className={styles['comparison-grid']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div className={`${styles['comparison-card']} ${styles['traditional']}`} variants={slideInLeft}>
            <div className={styles['comp-header']}>
              <X size={24} color="#f87171" />
              <h3 className={styles['comp-title']}>Ad-Hoc Content Writing</h3>
            </div>
            <div className={styles['comp-list']}>
              {service.comparison.traditional.map((item, index) => (
                <div key={index} className={styles['comp-item']}>
                  <X size={18} color="#f87171" className={styles['comp-item-icon']} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className={`${styles['comparison-card']} ${styles['leapsofts']}`} variants={slideInRight}>
            <div className={styles['comp-header']}>
              <Check size={24} color="#ff6b00" />
              <h3 className={styles['comp-title']}>Leapsofts Inbound Growth Flywheel</h3>
            </div>
            <div className={styles['comp-list']}>
              {service.comparison.leapsoftsPod.map((item, index) => (
                <div key={index} className={styles['comp-item']}>
                  <Check size={18} color="#ff6b00" className={styles['comp-item-icon']} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles['section-tag']}>Got Questions?</div>
          <h2 className={styles['section-title']}>Frequently Asked Questions</h2>
          <p className={styles['section-subtitle']}>
            Everything you need to know about our technical SEO sprint deliverables, content production workflows, and organic timeline expectations.
          </p>
        </motion.div>

        <motion.div
          className={styles['faq-list']}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {service.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <motion.div key={index} className={`${styles['faq-card']} ${isOpen ? styles['open'] : ''}`} variants={cardVariant}>
                <button className={styles['faq-trigger']} onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <ChevronDown className={`${styles['faq-arrow']} ${isOpen ? styles['rotated'] : ''}`} size={18} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      className={styles['faq-body-wrapper']}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.28, delay: 0.08 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.18 }
                        }
                      }}
                    >
                      <motion.div
                        className={styles['faq-body-content']}
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles['section']}>
        <motion.div
          className={styles['cta-banner']}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles['cta-title']}>Ready to Build Long-Term Search Authority?</h2>
          <p className={styles['cta-subtitle']}>
            Get a free technical SEO and content audit to identify immediate keyword ranking opportunities and build your organic pipeline.
          </p>
          <Link to="/contact" className={styles['cta-btn']}>
            <span>Get Free SEO & Content Audit</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
