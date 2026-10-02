import { buildPageMeta } from '../../utils/seoHelper';
import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import styles from './GlobalFootprint.module.css';
import { motion } from 'framer-motion';
import { useContactModal } from '../../context/ContactModalContext';
import Button from '../../components/Button/Button';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityAboutPage } from '../../sanity/queries';
import type { SanityAboutPage } from '../../sanity/types';
import { renderFormattedTitle } from '../../utils/titleFormatter';
import { DEFAULT_GLOBAL_PAGE_DATA } from '../../data/companyFallback';
import {
  Award,
  ShieldCheck,
  Lock,
  Server,
  CheckCircle2,
  Clock,
  Key,
  FileCheck,
  Building2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export async function loader() {
  const sanityData = await getSanityAboutPage('aboutGlobalPage');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Global Offices & Security Compliance | ISO, HIPAA, SOC2 | Leapsofts",
    defaultDescription: "Leapsofts operates global delivery hubs in Dubai and the USA with ISO 27001, HIPAA, SOC 2, and GDPR security compliance readiness for enterprise software.",
    defaultKeywords: "Leapsofts global offices, Dubai HQ software company, US software delivery hub, HIPAA SOC2 compliant software agency, ISO 27001 cloud engineering",
    canonicalUrl: "https://www.leapsofts.com/about/global-footprint",
  });
}

const ribbonData = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: '2 Regional Hubs',
    desc: 'Dubai HQ & US Operations',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: '24/7 Delivery Pods',
    desc: 'Follow-the-Sun agility',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: '4 Compliance Frameworks',
    desc: 'ISO, HIPAA, SOC 2, GDPR',
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: '100% Audit Ready',
    desc: 'Encrypted cloud pipelines',
  },
];

const hubsData = [
  {
    badge: 'UAE HEADQUARTERS • GMT+4',
    title: 'Dubai Hub (Middle East & APAC)',
    desc: 'Our global headquarters and primary engineering delivery center. Positioned strategically to serve Middle East, European, and Asian enterprise clients with continuous engineering output.',
    list: [
      'High-throughput cloud architecture & specialized AI labs',
      'Regional enterprise consulting & solutions management',
      'Overlapping timezone alignment across GMT+4',
      'Follow-the-Sun continuous sprint delivery model',
    ],
  },
  {
    badge: 'NORTH AMERICA HUB • EST / PST',
    title: 'US Operations (Americas)',
    desc: 'Dedicated client success, solutions architecture, and partnership hub serving North American enterprises, healthcare systems, and hyper-growth startups.',
    list: [
      'Onshore technical account leadership & CTO advisory',
      'HIPAA & SOC 2 audit readiness compliance support',
      'Direct US business hour engineering pod coverage',
      'Strategic AWS & Azure cloud partner management',
    ],
  },
];

const complianceData = [
  {
    name: 'ISO 27001',
    tag: 'Information Security Management',
    subtitle: 'Audited ISMS Framework',
    desc: 'Proves our development lifecycle, server infrastructure, and code delivery pipelines comply with rigorous international information security standards.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: 'HIPAA',
    tag: 'Healthcare & HealthTech Data',
    subtitle: 'PHI Vault Security',
    desc: 'Mandatory compliance framework for medical apps, EHR integrations, and telehealth platforms handling Protected Health Information (PHI).',
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    name: 'SOC 2 Type II',
    tag: 'Trust, Security & Availability',
    subtitle: 'Independently Audited Controls',
    desc: 'Independently audited controls guaranteeing data privacy, operational safety, confidential data handling, and continuous cloud availability.',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    name: 'GDPR',
    tag: 'European Data Privacy & Rights',
    subtitle: 'Data Residency Controls',
    desc: 'Enforcing strict user data privacy, right-to-be-forgotten protocols, explicit consent management, and data residency controls for EU platforms.',
    icon: <Key className="w-6 h-6" />,
  },
];

const securityStandards = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'End-to-End Encryption',
    desc: 'AES-256 bit data encryption at rest and TLS 1.3 for all in-transit web and API communications.',
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: 'Zero-Trust Access Control',
    desc: 'Role-based access (RBAC), multi-factor authentication, and encrypted cloud secret key vaults.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Daily Vulnerability Scans',
    desc: 'Automated dependency scanning, static code analysis (SAST), and continuous patch monitoring.',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Cloud Data Sovereignty',
    desc: 'Deploying custom software exclusively to client-designated cloud regions (AWS, Azure, GCP).',
  },
];

// Storytelling Scroll Variants
const headerVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardChildVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export { DEFAULT_GLOBAL_PAGE_DATA };

const GlobalFootprint: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const { openContactModal } = useContactModal();

  const sanityPage: SanityAboutPage = loaderData?.sanityData || DEFAULT_GLOBAL_PAGE_DATA;
  const pageData = (sanityPage as any) || DEFAULT_GLOBAL_PAGE_DATA;

  // JSON-LD Schemas for Googlebot Crawling
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leapsofts",
    "url": "https://www.leapsofts.com",
    "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
        "streetAddress": "Dubai Internet City"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Global Footprint & Security Compliance | Leapsofts",
    "description": "Leapsofts operates global delivery hubs in Dubai and the USA with ISO 27001, HIPAA, SOC 2, and GDPR security compliance.",
    "url": "https://www.leapsofts.com/about/global-footprint"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.leapsofts.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Company",
        "item": "https://www.leapsofts.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Global Footprint & Compliance",
        "item": "https://www.leapsofts.com/about/global-footprint"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (pageData.faq?.items || []).map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className={styles.globalPage}>
      <MetaSEO
        seo={sanityPage?.seo}
        defaultTitle="Global Offices & Security Compliance | ISO, HIPAA, SOC2 | Leapsofts"
        defaultDescription="Leapsofts operates global delivery hubs in Dubai and the USA with ISO 27001, HIPAA, SOC 2, and GDPR security compliance readiness for enterprise software."
      />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <Link to="/about">Company</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <span className={styles.breadcrumbCurrent}>Global Footprint & Compliance</span>
      </nav>

      {/* Chapter 1: Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>{pageData.hero?.label || 'GLOBAL FOOTPRINT & COMPLIANCE'}</span>
            <h1 className={styles.heroTitle}>
              {renderFormattedTitle({
                title: pageData.hero?.title,
                defaultAccentPhrase: 'International Scale',
                defaultTitle: <>Engineered for <em>International Scale</em> & Security</>,
              })}
            </h1>
            <p className={styles.heroSub}>
              {pageData.hero?.subtitle || 'Operating across strategic global offices with UAE engineering HQ in Dubai & North American hubs, delivering compliant enterprise software development under ISO 27001, HIPAA, SOC 2, and GDPR standards.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.ribbonGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {(pageData.hero?.metrics || ribbonData).map((item: any, idx: number) => (
              <motion.div key={idx} className={styles.ribbonCard} variants={cardChildVariant}>
                <div className={styles.ribbonIcon}>
                  {idx === 0 && <Building2 className="w-5 h-5" />}
                  {idx === 1 && <Clock className="w-5 h-5" />}
                  {idx === 2 && <Award className="w-5 h-5" />}
                  {idx === 3 && <Server className="w-5 h-5" />}
                </div>
                <div className={styles.ribbonTitle}>{item.value || item.title}</div>
                <div className={styles.ribbonDesc}>{item.label || item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Regional Delivery Centers */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{pageData.hubsSection?.label || 'REGIONAL DELIVERY CENTERS'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: pageData.hubsSection?.title,
              defaultAccentPhrase: 'Local Execution',
              defaultTitle: <>Global Presence, <em>Local Execution</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {pageData.hubsSection?.subtitle || 'Strategic engineering hubs enabling round-the-clock software development and immediate client support.'}
          </p>
        </motion.div>

        <div className={styles.hubsGrid}>
          {(pageData.hubsSection?.hubs || hubsData).map((hub: any, idx: number) => (
            <motion.div
              key={idx}
              className={styles.hubCard}
              variants={idx === 0 ? slideLeftVariant : slideRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.hubBadge}>{hub.badge}</div>
              <h3 className={styles.hubTitle}>{hub.name || hub.title}</h3>
              <p className={styles.hubText}>{hub.desc}</p>

              <div className={styles.hubList}>
                {hub.list?.map((item: string, lIdx: number) => (
                  <div key={lIdx} className={styles.hubListItem}>
                    <CheckCircle2 className={styles.hubListCheck} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapter 3: Enterprise Compliance Frameworks */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{pageData.complianceSection?.label || 'ENTERPRISE STANDARDS'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: pageData.complianceSection?.title,
              defaultAccentPhrase: 'Audit Readiness',
              defaultTitle: <>Compliance & <em>Audit Readiness</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {pageData.complianceSection?.subtitle || 'Built to satisfy the most demanding enterprise security audits and legal compliance frameworks.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.complianceGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(pageData.complianceSection?.compliance || complianceData).map((item: any, idx: number) => (
            <motion.div key={idx} className={styles.complianceCard} variants={cardChildVariant}>
              <div>
                <div className={styles.complianceIcon}>
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <FileCheck className="w-6 h-6" />}
                  {idx === 2 && <Lock className="w-6 h-6" />}
                  {idx === 3 && <Key className="w-6 h-6" />}
                </div>
                <div className={styles.complianceName}>{item.name}</div>
                <div className={styles.complianceTag}>{item.tag || item.subtitle}</div>
              </div>
              <p className={styles.complianceDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 4: Enterprise Security Architecture */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{pageData.securitySection?.label || 'DATA SHIELD'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: pageData.securitySection?.title,
              defaultAccentPhrase: 'Architectural Controls',
              defaultTitle: <>Security <em>Architectural Controls</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {pageData.securitySection?.subtitle || 'Four non-negotiable security controls baked directly into every cloud environment we configure.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.securityGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(pageData.securitySection?.standards || securityStandards).map((sec: any, idx: number) => (
            <motion.div key={idx} className={styles.securityCard} variants={cardChildVariant}>
              <div className={styles.securityIcon}>
                {idx === 0 && <Lock className="w-6 h-6" />}
                {idx === 1 && <Key className="w-6 h-6" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                {idx === 3 && <Server className="w-6 h-6" />}
              </div>
              <h3 className={styles.securityTitle}>{sec.title}</h3>
              <p className={styles.securityDesc}>{sec.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 5: Services Link Matrix */}
      {pageData.internalLinks && (
        <section className={styles.section}>
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{pageData.internalLinks.label || 'OUR ENGINEERING SERVICES'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: pageData.internalLinks.title,
                defaultAccentPhrase: 'Core Services',
                defaultTitle: <>Compliant Engineering Services Built for <em>Global Scale</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{pageData.internalLinks.subtitle}</p>
          </motion.div>

          <motion.div
            className={styles.serviceGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pageData.internalLinks.services?.map((svc: any, sIdx: number) => (
              <Link key={sIdx} to={svc.link} className={styles.serviceCardLink}>
                <motion.div className={styles.serviceCard} variants={cardChildVariant}>
                  {svc.tag && <span className={styles.serviceTag}>{svc.tag}</span>}
                  <h3 className={styles.serviceName}>
                    {svc.name}
                    <ArrowRight className={styles.serviceArrow + " w-5 h-5"} />
                  </h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>
      )}

      {/* Chapter 6: Global FAQ Section */}
      {pageData.faq && (
        <section className={styles.section} id="faq">
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{pageData.faq.label || 'GLOBAL FAQ'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: pageData.faq.title,
                defaultAccentPhrase: 'Questions',
                defaultTitle: <>Frequently Asked <em>Questions</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{pageData.faq.subtitle}</p>
          </motion.div>

          <div className={styles.faqList}>
            {pageData.faq.items?.map((item: any, fIdx: number) => (
              <div
                key={fIdx}
                className={`${styles.faqItem} ${openFaqIdx === fIdx ? styles.faqItemActive : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                  aria-expanded={openFaqIdx === fIdx}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`${styles.faqIcon} ${openFaqIdx === fIdx ? styles.faqIconRotated : ''} w-5 h-5`}
                  />
                </button>
                {openFaqIdx === fIdx && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chapter 7: Call to Action */}
      <section className={styles.section}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className={styles.ctaTitle}>
            {renderFormattedTitle({
              title: pageData.cta?.title,
              defaultAccentPhrase: 'Enterprise Security Compliance',
              defaultTitle: <>Need <em>Enterprise Security Compliance</em>?</>,
            })}
          </h2>
          <p className={styles.ctaSub}>
            {pageData.cta?.subtitle || 'Book a consultation with our cloud security architects to review your compliance checklist, encryption protocols, and audit readiness.'}
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text={pageData.cta?.buttonText || 'Schedule Compliance Consultation'}
              color1="var(--color-primary)"
              color2="var(--color-primary-light)"
              onClick={openContactModal}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GlobalFootprint;
