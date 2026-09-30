import { useState, useMemo } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router';
import MetaSEO from '../../components/SEO/MetaSEO';
import { GROWTH_SERVICES_DATA } from '../../data/growthServicesData';
import styles from './GrowthServicePage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  Presentation,
  Workflow,
  FileCheck2,
  UserCheck,
  Mail,
  Building,
  CalendarCheck,
  Share2,
  PencilRuler,
  LineChart,
  RotateCcw,
  Search,
  FileText,
  Users,
  Palette,
  Database,
  Filter,
  Zap,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

import { useServicePage } from '../../hooks/useServicePage';

const ICON_MAP: Record<string, any> = {
  PhoneCall,
  Presentation,
  Workflow,
  FileCheck2,
  UserCheck,
  MailSend: Mail,
  Building,
  CalendarCheck,
  Share2,
  PencilRuler,
  LineChart,
  RotateCcw,
  Search,
  FileText,
  Users,
  Palette,
  Database,
  Filter,
  Zap,
};

// 90FPS Scroll Storytelling Animation Physics
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

export default function GrowthServicePage() {
  const location = useLocation();
  const params = useParams<{ serviceSlug?: string }>();

  const effectiveSlug = useMemo(() => {
    if (params.serviceSlug) return params.serviceSlug;
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || '';
  }, [params.serviceSlug, location.pathname]);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { data: sanityData } = useServicePage(effectiveSlug);

  const fallbackService = useMemo(() => {
    if (!effectiveSlug) return null;
    return GROWTH_SERVICES_DATA[effectiveSlug] || null;
  }, [effectiveSlug]);

  const service = useMemo(() => {
    if (!fallbackService) return null;
    if (!sanityData) return fallbackService;

    return {
      ...fallbackService,
      title: sanityData.title || sanityData.hero?.title || fallbackService.title,
      subtitle: sanityData.shortDescription || sanityData.hero?.subtitle || fallbackService.subtitle,
      heroDescription: sanityData.hero?.introText || fallbackService.heroDescription,
      seo: {
        title: sanityData.seo?.metaTitle || fallbackService.seo.title,
        description: sanityData.seo?.metaDescription || fallbackService.seo.description,
        keywords: sanityData.seo?.keywords && sanityData.seo.keywords.length > 0 ? sanityData.seo.keywords : fallbackService.seo.keywords,
      }
    };
  }, [fallbackService, sanityData]);

  if (!service) {
    return <Navigate to="/services/custom-software-development" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const currentCanonicalUrl = `https://leapsofts.com/services/${service.slug}`;

  // Structured Data (JSON-LD)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.title,
      'description': service.seo.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Leapsofts',
        'url': 'https://leapsofts.com'
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
          'item': 'https://leapsofts.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://leapsofts.com/services/custom-software-development'
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

  return (
    <div className={styles['page-container']}>
      <MetaSEO
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonicalUrl={currentCanonicalUrl}
        jsonLd={jsonLd}
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
              <span>{service.primaryCTA}</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#capabilities" className={styles['secondary-btn']}>
              <span>{service.secondaryCTA}</span>
            </a>
          </div>
        </motion.div>

        {/* Hero Metrics */}
        <motion.div
          className={styles['metrics-grid']}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {service.metrics.map((metric, idx) => (
            <motion.div key={idx} className={styles['metric-card']} variants={cardVariant}>
              <div className={styles['metric-value']}>{metric.value}</div>
              <div className={styles['metric-label']}>{metric.label}</div>
              <div className={styles['metric-desc']}>{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategic Positioning Banner (Scroll Reveal) */}
      <motion.div
        className={styles['positioning-banner']}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles['positioning-inner']}>
          <span className={styles['positioning-label']}>Strategic Focus</span>
          <span className={styles['positioning-text']}>{service.positioning}</span>
        </div>
      </motion.div>

      {/* Capabilities / Sub-Services Grid (Scroll Storytelling) */}
      <section id="capabilities" className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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
          viewport={{ once: true, margin: '-60px' }}
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
                  {sub.highlights.map((h, i) => (
                    <div key={i} className={styles['bullet-item']}>
                      <Check size={16} className={styles['check-icon']} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className={styles['deliverables-box']}>
                  <div className={styles['deliverables-title']}>Key Deliverables</div>
                  <div className={styles['deliverables-tags']}>
                    {sub.deliverables.map((deliv, di) => (
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

      {/* Comparison Grid (Scroll Storytelling Left/Right Slide) */}
      <section className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className={`${styles['comparison-card']} ${styles['traditional']}`} variants={slideInLeft}>
            <div className={styles['comp-header']}>
              <X size={24} color="#f87171" />
              <h3 className={styles['comp-title']}>Traditional In-House Approach</h3>
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
              <h3 className={styles['comp-title']}>Leapsofts Managed Growth Pod</h3>
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

      {/* FAQ Accordion (Cascading Scroll Reveal) */}
      <section className={styles['section']}>
        <motion.div
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles['section-tag']}>Got Questions?</div>
          <h2 className={styles['section-title']}>Frequently Asked Questions</h2>
          <p className={styles['section-subtitle']}>
            Everything you need to know about our growth pods, onboarding timeline, and execution model.
          </p>
        </motion.div>

        <motion.div
          className={styles['faq-list']}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
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

      {/* Bottom CTA Banner (Scroll Reveal & Scale) */}
      <section className={styles['section']}>
        <motion.div
          className={styles['cta-banner']}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles['cta-title']}>Ready to Scale Your Growth Engine?</h2>
          <p className={styles['cta-subtitle']}>
            Schedule a strategy session with our revenue engineers to analyze your current pipeline and map out your custom growth blueprint.
          </p>
          <Link to="/contact" className={styles['primary-btn']}>
            <span>Book Revenue Strategy Session</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
