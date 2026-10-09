import { buildPageMeta } from '../../utils/seoHelper';
import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import styles from './Mission.module.css';
import { motion } from 'framer-motion';
import { useContactModal } from '../../context/ContactModalContext';
import Button from '../../components/Button/Button';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityAboutPage } from '../../sanity/queries';
import type { SanityAboutPage } from '../../sanity/types';
import { renderFormattedTitle } from '../../utils/titleFormatter';
import { DEFAULT_MISSION_PAGE_DATA } from '../../data/companyFallback';
import {
  Target,
  ShieldCheck,
  Zap,
  Code2,
  Layers,
  Lock,
  GitBranch,
  Terminal,
  FileCode2,
  CheckSquare,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export async function loader() {
  const sanityData = await getSanityAboutPage('aboutMissionPage');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Our Mission & Engineering Creed | Leapsofts | Dubai & US",
    defaultDescription: "Explore Leapsofts' mission to deliver zero-tech-debt software engineering, AI-augmented development velocity, and transparent agile pods for global platforms.",
    defaultKeywords: "Leapsofts mission, engineering creed, zero tech debt software company, agile pod software engineering, software engineering values Dubai US",
    canonicalUrl: "https://www.leapsofts.com/about/mission",
  });
}

const ribbonData = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Zero Tech Debt',
    desc: 'Clean, modular microservices',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: '3-5 Month Launch',
    desc: 'Rapid MVP deployment cycle',
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: '100% IP Ownership',
    desc: 'Open repos, zero vendor lock-in',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Zero-Trust Security',
    desc: 'SOC2 & HIPAA ready from Day 1',
  },
];

const pillarsData = [
  {
    num: 'PILLAR 01',
    title: 'Resilient Cloud Topologies',
    desc: 'We architect microservices, event-driven backends, and cloud-native serverless systems engineered to withstand 10x traffic spikes without latency spikes or technical debt build-up.',
  },
  {
    num: 'PILLAR 02',
    title: 'AI-Augmented Sprint Velocity',
    desc: 'By integrating modern LLM code synthesis, automated unit test suites, and continuous delivery pipelines, we compress traditional 12-month development cycles down to 3–5 months.',
  },
  {
    num: 'PILLAR 03',
    title: 'Zero-Trust Security Standard',
    desc: 'Security is embedded at the API boundary from Day 1. We build HIPAA, SOC 2 Type II, and ISO 27001 audit readiness directly into data pipelines and database schemas.',
  },
  {
    num: 'PILLAR 04',
    title: 'Complete Code Transparency',
    desc: 'No black boxes or hidden dependencies. Clients receive full access to open git repositories, staging build previews, and direct daily communication with senior pod leads.',
  },
];

const manifestData = [
  {
    num: '01',
    title: 'Crafted for the Future',
    text: 'We write clean, self-documenting code for the software engineers who will maintain and scale it 5 years from today.',
  },
  {
    num: '02',
    title: 'Exhaustive Pre-Ship Testing',
    text: 'We test exhaustively before shipping; no client, internal stakeholder, or end-user should ever be treated as a QA tester.',
  },
  {
    num: '03',
    title: 'Real Business Value Velocity',
    text: 'We measure sprint velocity in real production software value delivered, never in inflated story points.',
  },
  {
    num: '04',
    title: 'Proactive Technical Communication',
    text: 'We communicate technical decisions proactively and transparently—zero silent blockers, hidden delays, or surprise architectural shifts.',
  },
  {
    num: '05',
    title: 'Boundary-Level Zero-Trust',
    text: 'We enforce zero-trust security controls at the API boundary, never as an afterthought or last-minute compliance patch.',
  },
  {
    num: '06',
    title: 'Long-Term Strategic Partnership',
    text: 'We partner for long-term product evolution, continuous optimization, and sustainable architectural scaling.',
  },
];

const qaStandards = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Static Code Analysis',
    desc: 'Automated SonarQube & ESLint rules enforced on every pull request to catch vulnerabilities early.',
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: 'Automated E2E Testing',
    desc: 'Playwright & Cypress test suites validating critical user journeys and payment flows.',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'CI/CD Preview Builds',
    desc: 'Instant isolated preview URLs generated per feature branch for rapid stakeholder review.',
  },
  {
    icon: <FileCode2 className="w-6 h-6" />,
    title: 'Dual Peer Code Review',
    desc: 'Every pull request requires sign-off from a Lead Solutions Architect before production merge.',
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

export { DEFAULT_MISSION_PAGE_DATA };

const Mission: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [sanityAbout, setSanityAbout] = useState<SanityAboutPage | null>(null);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const { openContactModal } = useContactModal();

  React.useEffect(() => {
    getSanityAboutPage('aboutMissionPage').then((data) => {
      if (data) setSanityAbout(data);
    });
  }, []);

  const sanityData: SanityAboutPage = sanityAbout || loaderData?.sanityData || DEFAULT_MISSION_PAGE_DATA;

  const missionData = (sanityData as any) || DEFAULT_MISSION_PAGE_DATA;

  // JSON-LD Schemas for Googlebot Crawling
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leapsofts",
    "url": "https://www.leapsofts.com",
    "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png",
    "description": "Leapsofts is an enterprise software engineering company delivering zero-tech-debt cloud architectures and dedicated agile pods."
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Mission & Engineering Creed | Leapsofts",
    "description": "Explore Leapsofts' mission to deliver zero-tech-debt software engineering, AI-augmented development velocity, and transparent agile pods.",
    "url": "https://www.leapsofts.com/about/mission"
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
        "name": "Mission & Creed",
        "item": "https://www.leapsofts.com/about/mission"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (missionData.faq?.items || []).map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className={styles.missionPage}>
      <MetaSEO
        seo={sanityData?.seo}
        defaultTitle="Our Mission & Engineering Creed | Leapsofts | Dubai & US"
        defaultDescription="Explore Leapsofts' mission to deliver zero-tech-debt software engineering, AI-augmented development velocity, and transparent agile pods for global platforms."
      />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <Link to="/about">Company</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <span className={styles.breadcrumbCurrent}>Mission & Creed</span>
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
            <span className={styles.label}>{missionData.hero?.label || 'MISSION & ENGINEERING CREED'}</span>
            <h1 className={styles.heroTitle}>
              {renderFormattedTitle({
                title: missionData.hero?.title,
                defaultAccentPhrase: 'Zero Tech Debt',
                defaultTitle: <>Engineered for <em>Zero Tech Debt</em> & Rapid Launch</>,
              })}
            </h1>
            <p className={styles.heroSub}>
              {missionData.hero?.subtitle || 'We exist to eliminate software complexity, compress time-to-market, and build honest, resilient enterprise software engineering solutions for visionary companies globally.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.ribbonGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {(missionData.hero?.metrics || ribbonData).map((item: any, idx: number) => (
              <motion.div key={idx} className={styles.ribbonCard} variants={cardChildVariant}>
                <div className={styles.ribbonIcon}>
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Zap className="w-5 h-5" />}
                  {idx === 2 && <Code2 className="w-5 h-5" />}
                  {idx === 3 && <Lock className="w-5 h-5" />}
                </div>
                <div className={styles.ribbonTitle}>{item.value || item.title}</div>
                <div className={styles.ribbonDesc}>{item.label || item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Purpose & Philosophy */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{missionData.whyMissionMatters?.label || 'OUR PURPOSE & PHILOSOPHY'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: missionData.whyMissionMatters?.title,
              defaultAccentPhrase: 'Execution Blueprint',
              defaultTitle: <>The Mission Mandate & <em>Execution Blueprint</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {missionData.whyMissionMatters?.subtitle || 'A clear mandate to redefine how high-velocity software engineering is executed.'}
          </p>
        </motion.div>

        <div className={styles.splitGrid}>
          <motion.div
            className={styles.glassCard}
            variants={slideLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.splitCardIcon}>
              <Target className="w-8 h-8" />
            </div>
            <h3 className={styles.splitCardTitle}>{missionData.whyMissionMatters?.mandateTitle || 'The Strategic Mission Mandate'}</h3>
            <p className={styles.splitCardText}>
              {missionData.whyMissionMatters?.mandateText || 'To empower ambitious enterprises and hyper-growth platforms with bulletproof, cloud-native software architecture that turns complex engineering challenges into sustainable market dominance.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.glassCard}
            variants={slideRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.splitCardIcon}>
              <Layers className="w-8 h-8" />
            </div>
            <h3 className={styles.splitCardTitle}>{missionData.whyMissionMatters?.blueprintTitle || 'The High-Velocity Execution Blueprint'}</h3>
            <p className={styles.splitCardText}>
              {missionData.whyMissionMatters?.blueprintText || 'Achieved through dedicated agile pod topologies, AI-augmented code synthesis, continuous automated testing, and transparent zero-black-box client communication.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: The 4 Pillars of Engineering Craftsmanship */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{missionData.pillars?.label || 'THE FOUR PILLARS'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: missionData.pillars?.title,
              defaultAccentPhrase: 'Technical Excellence',
              defaultTitle: <>Foundations of <em>Technical Excellence</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {missionData.pillars?.subtitle || 'The four core architectural pillars that guide our decisions across every product build.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.pillarsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(missionData.pillars?.items || pillarsData).map((pillar: any, idx: number) => (
            <motion.div key={idx} className={styles.pillarCard} variants={cardChildVariant}>
              <div className={styles.pillarNum}>{pillar.num}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 4: The Leapsofts Engineering Manifesto */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{missionData.manifesto?.label || 'OUR CODE OF CONDUCT'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: missionData.manifesto?.title,
              defaultAccentPhrase: 'Manifesto',
              defaultTitle: <>The Engineering <em>Manifesto</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {missionData.manifesto?.subtitle || 'Six non-negotiable principles that govern how our software developers write, test, and ship code.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.manifestGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(missionData.manifesto?.rules || manifestData).map((item: any, idx: number) => (
            <motion.div key={idx} className={styles.manifestCard} variants={cardChildVariant}>
              <div className={styles.manifestIndex}>{item.num}</div>
              {item.title && <h3 className={styles.manifestTitle}>{item.title}</h3>}
              <div className={styles.manifestText}>{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 5: QA & Craftsmanship Standards */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{missionData.qaStandards?.label || 'QUALITY ASSURANCE'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: missionData.qaStandards?.title,
              defaultAccentPhrase: 'Code Integrity',
              defaultTitle: <>How We Guarantee <em>Code Integrity</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {missionData.qaStandards?.subtitle || 'Automated quality gates integrated into every pull request before merging to production.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.qaGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(missionData.qaStandards?.standards || qaStandards).map((qa: any, idx: number) => (
            <motion.div key={idx} className={styles.qaCard} variants={cardChildVariant}>
              <div className={styles.qaIcon}>
                {idx === 0 && <Terminal className="w-6 h-6" />}
                {idx === 1 && <CheckSquare className="w-6 h-6" />}
                {idx === 2 && <GitBranch className="w-6 h-6" />}
                {idx === 3 && <FileCode2 className="w-6 h-6" />}
              </div>
              <h3 className={styles.qaTitle}>{qa.title}</h3>
              <p className={styles.qaDesc}>{qa.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 6: Engineering Services Link Matrix */}
      {missionData.internalLinks && (
        <section className={styles.section}>
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{missionData.internalLinks.label || 'OUR ENGINEERING SERVICES'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: missionData.internalLinks.title,
                defaultAccentPhrase: 'Core Services',
                defaultTitle: <>Discover How We Execute Our Mission Across <em>Core Services</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{missionData.internalLinks.subtitle}</p>
          </motion.div>

          <motion.div
            className={styles.serviceGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {missionData.internalLinks.services?.map((svc: any, sIdx: number) => (
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

      {/* Chapter 7: Mission FAQ Section & Rich Snippets */}
      {missionData.faq && (
        <section className={styles.section} id="faq">
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{missionData.faq.label || 'MISSION FAQ'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: missionData.faq.title,
                defaultAccentPhrase: 'Questions',
                defaultTitle: <>Frequently Asked <em>Questions</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{missionData.faq.subtitle}</p>
          </motion.div>

          <div className={styles.faqList}>
            {missionData.faq.items?.map((item: any, fIdx: number) => (
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

      {/* Chapter 8: Strategic CTA */}
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
              title: missionData.cta?.title,
              defaultAccentPhrase: 'Resilient Software Engineering',
              defaultTitle: <>Ready to Experience <em>Resilient Software Engineering</em>?</>,
            })}
          </h2>
          <p className={styles.ctaSub}>
            {missionData.cta?.subtitle || 'Schedule an architecture session with our engineering leads to audit your current codebase or plan your next custom software launch.'}
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text={missionData.cta?.buttonText || 'Schedule Architecture Consultation'}
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

export default Mission;
