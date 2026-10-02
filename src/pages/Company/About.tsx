import { buildPageMeta } from '../../utils/seoHelper';
import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import styles from './About.module.css';
import { motion, type Variants } from 'framer-motion';
import {
  Target,
  Compass,
  ShieldCheck,
  Cpu,
  Zap,
  Code2,
  Users,
  Rocket,
  Globe,
  Award,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Layers,
  Terminal,
  Database,
  Building2,
  Stethoscope,
  CreditCard,
  ShoppingBag,
  Shirt,
  Home as HomeIcon,
} from 'lucide-react';
import Button from '../../components/Button/Button';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import { useContactModal } from '../../context/ContactModalContext';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityAboutPage, getSanityTeamMembers } from '../../sanity/queries';
import type { SanityAboutPage, SanityTeamMember } from '../../sanity/types';
import { renderFormattedTitle } from '../../utils/titleFormatter';
import { DEFAULT_ABOUT_PAGE_DATA } from '../../data/companyFallback';

export async function loader() {
  const sanityData = await getSanityAboutPage('aboutPage');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "About Leapsofts | Enterprise Software Engineering Company | Dubai & US",
    defaultDescription: "Discover Leapsofts, an enterprise software engineering company delivering custom cloud architectures, AI solutions, and dedicated agile pods with 250+ engineers globally.",
    defaultKeywords: "enterprise software engineering company, custom software development firm Dubai, agile software development pods, AI software development agency, cloud microservices architecture, software engineering agency US Dubai",
    canonicalUrl: "https://www.leapsofts.com/about",
  });
}

const timelineData = [
  {
    year: '2021',
    title: 'The Foundation',
    desc: 'Founded in Dubai by senior cloud architects to eliminate enterprise technical debt and provide bespoke, high-performance software engineering solutions.',
  },
  {
    year: '2022',
    title: 'Pod Topology Expansion',
    desc: 'Scaled our operational model into dedicated agile pods, partnering with growth-stage platforms across Healthcare, FinTech, and Enterprise SaaS.',
  },
  {
    year: '2023',
    title: 'AI Practice & US Expansion',
    desc: 'Launched our specialized AI & Machine Learning engineering practice while establishing US operations to serve North American enterprise clients.',
  },
  {
    year: '2024',
    title: '100+ Production Deployments',
    desc: 'Reached 100+ successful production deployments, achieving a 98% client retention rate and setting industry benchmarks for speed-to-market.',
  },
  {
    year: '2025+',
    title: 'AI-Native Enterprise Systems',
    desc: 'Pioneering autonomous enterprise AI workflows, zero-trust cloud microservices, and next-generation product re-engineering.',
  },
];

const leadershipData: {
  name: string;
  role: string;
  bio: string;
  highlight?: string;
  initials: string;
  skills: string[];
  imageUrl?: string;
}[] = [
  {
    name: 'Huzaifa Rasheed',
    role: 'CEO & Co-Founder',
    bio: 'Leading Leapsofts in delivering AI-driven and enterprise software solutions across Healthcare, Fintech, Fashion Tech, and emerging industries.',
    highlight: 'Built 45+ Custom AI Solutions',
    initials: 'HR',
    skills: ['Strategic Leadership', 'Enterprise AI', 'Strategic Partnerships', 'Market Expansion'],
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI & Machine Learning',
    bio: 'Former AI researcher specializing in LLM fine-tuning, computer vision, and predictive analytics pipelines for Fortune 500 platforms.',
    highlight: 'Ex-AI Research Director',
    initials: 'SC',
    skills: ['PyTorch', 'LLMs', 'MLOps', 'Computer Vision'],
  },
  {
    name: 'Marcus Devlin',
    role: 'VP of Engineering',
    bio: 'Pioneer of agile pod topologies with a proven track record of shipping enterprise platforms on aggressive 3-5 month launch timelines.',
    highlight: '100+ Pod Deployments',
    initials: 'MD',
    skills: ['Agile Pods', 'CI/CD', 'Product Architecture', 'Microservices'],
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Cyber Security Architect',
    bio: 'Certified ethical hacker and zero-trust security architect ensuring HIPAA, SOC2 Type II, and ISO 27001 audit readiness.',
    highlight: 'Zero-Trust Architect',
    initials: 'ER',
    skills: ['Zero-Trust', 'SOC 2', 'Pen Testing', 'ISO 27001'],
  },
];

const coreValues = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Resilient Architecture First',
    text: 'We never compromise on software foundations. Microservices and cloud topologies are built to scale 10x without tech debt.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'AI-Augmented Velocity',
    text: 'Harnessing modern AI tools and automated CI/CD pipelines to compress launch cycles down to 3-5 months.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Zero-Trust Security',
    text: 'HIPAA, GDPR, and SOC2 readiness embedded into every sprint from Day 1 to safeguard enterprise data assets.',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Complete Code Transparency',
    text: 'No black boxes. Open repositories, live preview builds, and direct communication with senior engineers.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Agile Pod Topology',
    text: 'Dedicated cross-functional teams (Architect, Tech Lead, QA, DevOps) assigned to your product domain.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Long-Term Strategic Ownership',
    text: 'We don’t just ship and walk away. We partner closely for continuous product evolution and feature expansion.',
  },
];

// Animation Variants for Storytelling Scroll
const headerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardChildVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const slideRightVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export { DEFAULT_ABOUT_PAGE_DATA };

const About: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [sanityTeam, setSanityTeam] = useState<SanityTeamMember[] | null>(null);
  const { openContactModal } = useContactModal();

  const sanityData: SanityAboutPage = loaderData?.sanityData || DEFAULT_ABOUT_PAGE_DATA;

  useEffect(() => {
    getSanityTeamMembers().then((data) => {
      if (data) setSanityTeam(data);
    });
  }, []);

  const displayLeadership = React.useMemo(() => {
    if ((sanityData as any)?.leadership?.members && (sanityData as any).leadership.members.length > 0) {
      return (sanityData as any).leadership.members.map((m: any) => ({
        name: m.name,
        role: m.role,
        bio: m.bio || '',
        highlight: m.highlight || '',
        initials: m.initials || m.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2),
        skills: m.skills || [],
        imageUrl: m.imageUrl || '',
      }));
    }
    if (sanityTeam && sanityTeam.length > 0) {
      return sanityTeam.map((m: any) => ({
        name: m.name,
        role: m.role,
        bio: m.bio || '',
        highlight: m.highlight || '',
        initials: m.initials || m.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2),
        skills: m.skills || [],
        imageUrl: m.imageUrl || '',
      }));
    }
    return leadershipData;
  }, [sanityData, sanityTeam]);

  const activeTimelineEvents = React.useMemo(() => {
    return sanityData?.timeline?.events && sanityData.timeline.events.length > 0
      ? sanityData.timeline.events
      : timelineData;
  }, [sanityData]);

  const whyChooseUsData = React.useMemo(() => {
    return sanityData?.whyChooseUs || DEFAULT_ABOUT_PAGE_DATA.whyChooseUs;
  }, [sanityData]);

  const industryImpactData = React.useMemo(() => {
    return sanityData?.industryImpact || DEFAULT_ABOUT_PAGE_DATA.industryImpact;
  }, [sanityData]);

  const techStackData = React.useMemo(() => {
    return sanityData?.techStack || DEFAULT_ABOUT_PAGE_DATA.techStack;
  }, [sanityData]);

  const faqData = React.useMemo(() => {
    return sanityData?.faq || DEFAULT_ABOUT_PAGE_DATA.faq;
  }, [sanityData]);

  // Structured Data (JSON-LD) Schemas for Googlebot Crawling
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leapsofts",
    "legalName": "Leapsofts Technology Solutions FZ-LLC",
    "url": "https://www.leapsofts.com",
    "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png",
    "foundingDate": "2021",
    "description": "Leapsofts is an enterprise software engineering company delivering custom cloud architectures, AI solutions, and dedicated agile pods.",
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
    ],
    "sameAs": [
      "https://www.linkedin.com/company/leapsofts",
      "https://twitter.com/leapsofts",
      "https://github.com/leapsofts"
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Leapsofts | Enterprise Software Engineering Company",
    "description": "Learn about Leapsofts, a premier custom software engineering consultancy delivering resilient cloud architectures, AI integration, and dedicated agile pods.",
    "url": "https://www.leapsofts.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Leapsofts",
      "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png"
    }
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
        "name": "About Us",
        "item": "https://www.leapsofts.com/about"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqData?.items || []).map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className={styles.aboutPage}>
      <MetaSEO
        seo={sanityData?.seo}
        defaultTitle="About Leapsofts | Enterprise Software Engineering Company | Dubai & US"
        defaultDescription="Discover Leapsofts, an enterprise software engineering company delivering custom cloud architectures, AI solutions, and dedicated agile pods with 250+ engineers globally."
      />

      {/* JSON-LD Rich Snippet Schemas for Googlebot Crawling */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Crawlable Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <span className={styles.breadcrumbCurrent}>Company</span>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <span className={styles.breadcrumbCurrent}>About Us</span>
      </nav>

      {/* Chapter 1: Hero & Vision Narrative */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>{sanityData?.hero?.label || 'ABOUT LEAPSOFTS'}</span>
            <h1 className={styles.heroTitle}>
              {renderFormattedTitle({
                title: sanityData?.hero?.title,
                titleMain: (sanityData?.hero as any)?.titleMain,
                titleAccent: (sanityData?.hero as any)?.titleAccent,
                titleEnd: (sanityData?.hero as any)?.titleEnd,
                defaultAccentPhrase: 'Enterprise Velocity',
                defaultTitle: <>Architecting <em>Enterprise Velocity</em> Through Engineering Rigor</>,
              })}
            </h1>
            <p className={styles.heroSub}>
              {sanityData?.hero?.subtitle || 'Leapsofts is an enterprise software engineering company delivering custom cloud architectures, autonomous AI solutions, and dedicated agile engineering pods for scaling platforms globally.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.metricsGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {sanityData?.hero?.metrics && sanityData.hero.metrics.length > 0 ? (
              sanityData.hero.metrics.map((m, idx) => (
                <motion.div key={idx} className={styles.metricCard} variants={cardChildVariant}>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                  {m.sub && <div className={styles.metricSub}>{m.sub}</div>}
                </motion.div>
              ))
            ) : (
              <>
                <motion.div className={styles.metricCard} variants={cardChildVariant}>
                  <div className={styles.metricValue}>
                    <AnimatedCounter value={100} />+
                  </div>
                  <div className={styles.metricLabel}>Production Deployments</div>
                  <div className={styles.metricSub}>Engineered to Enterprise Scale</div>
                </motion.div>

                <motion.div className={styles.metricCard} variants={cardChildVariant}>
                  <div className={styles.metricValue}>
                    <AnimatedCounter value={98} />%
                  </div>
                  <div className={styles.metricLabel}>Client Retention Rate</div>
                  <div className={styles.metricSub}>Sustained Technical Execution</div>
                </motion.div>

                <motion.div className={styles.metricCard} variants={cardChildVariant}>
                  <div className={styles.metricValue}>
                    3-5 <span className={styles.metricUnit}>Mo</span>
                  </div>
                  <div className={styles.metricLabel}>Average MVP Launch</div>
                  <div className={styles.metricSub}>Accelerated Time-to-Market</div>
                </motion.div>

                <motion.div className={styles.metricCard} variants={cardChildVariant}>
                  <div className={styles.metricValue}>
                    <AnimatedCounter value={2} /> <span className={styles.metricUnit}>Hubs</span>
                  </div>
                  <div className={styles.metricLabel}>Dubai & USA Operations</div>
                  <div className={styles.metricSub}>24/7 Global Delivery</div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Enterprises Partner with Leapsofts (Differentiators) */}
      {whyChooseUsData && (
        <section className={styles.section}>
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{whyChooseUsData.label || 'THE LEAPSOFTS ADVANTAGE'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: whyChooseUsData.title,
                defaultAccentPhrase: 'Leapsofts',
                defaultTitle: <>Why Global Enterprises Partner with <em>Leapsofts</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{whyChooseUsData.subtitle}</p>
          </motion.div>

          <motion.div
            className={styles.reasonsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChooseUsData.reasons?.map((reason, rIdx) => (
              <motion.div key={rIdx} className={styles.glassCard + ' ' + styles.reasonCard} variants={cardChildVariant}>
                <div className={styles.reasonHeader}>
                  <div className={styles.reasonIcon}>
                    {rIdx === 0 && <Users className="w-6 h-6" />}
                    {rIdx === 1 && <Cpu className="w-6 h-6" />}
                    {rIdx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {rIdx === 3 && <Code2 className="w-6 h-6" />}
                    {rIdx === 4 && <Zap className="w-6 h-6" />}
                    {rIdx === 5 && <Globe className="w-6 h-6" />}
                  </div>
                  {reason.stat && <span className={styles.reasonStat}>{reason.stat}</span>}
                </div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDesc}>{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Chapter 3: Our Engineering Creed (Mission & Vision) */}
      <section className={styles.section} id="mission">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{sanityData?.creed?.label || 'OUR ENGINEERING CREED'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: sanityData?.creed?.title,
              titleMain: (sanityData?.creed as any)?.titleMain,
              titleAccent: (sanityData?.creed as any)?.titleAccent,
              titleEnd: (sanityData?.creed as any)?.titleEnd,
              defaultAccentPhrase: 'Software Craftsmanship',
              defaultTitle: <>Purpose-Driven <em>Software Craftsmanship</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {sanityData?.creed?.subtitle || 'Empowering organizations with digital infrastructure that turns complex technical challenges into sustainable market dominance.'}
          </p>
        </motion.div>

        <div className={styles.missionGrid}>
          <motion.div
            className={styles.glassCard}
            variants={slideLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.missionCardIcon}>
              <Target className="w-8 h-8" />
            </div>
            <h3 className={styles.missionTitle}>{sanityData?.creed?.missionTitle || 'Our Mission'}</h3>
            <p className={styles.missionText}>
              {sanityData?.creed?.missionText || 'To eliminate technical debt and compress time-to-market for scaling enterprises through resilient microservice architecture, clean code standards, and dedicated engineering pods.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.glassCard}
            variants={slideRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.missionCardIcon}>
              <Compass className="w-8 h-8" />
            </div>
            <h3 className={styles.missionTitle}>{sanityData?.creed?.visionTitle || 'Our Vision'}</h3>
            <p className={styles.missionText}>
              {sanityData?.creed?.visionText || 'To set the global standard for custom software development, where technical excellence, AI integration, and long-term partnership drive tangible business transformation.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: How We Engineer (Core Principles Sequence) */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{sanityData?.corePrinciples?.label || 'HOW WE ENGINEER'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: sanityData?.corePrinciples?.title,
              titleMain: (sanityData?.corePrinciples as any)?.titleMain,
              titleAccent: (sanityData?.corePrinciples as any)?.titleAccent,
              titleEnd: (sanityData?.corePrinciples as any)?.titleEnd,
              defaultAccentPhrase: 'Principles',
              defaultTitle: <>Core Operating <em>Principles</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {sanityData?.corePrinciples?.subtitle || 'Every line of code we write is governed by six fundamental engineering values.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.valuesGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sanityData?.corePrinciples?.principles && sanityData.corePrinciples.principles.length > 0 ? (
            sanityData.corePrinciples.principles.map((item, index) => (
              <motion.div
                key={index}
                className={styles.glassCard}
                variants={cardChildVariant}
              >
                <div className={styles.valueIcon}><Cpu className="w-6 h-6" /></div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueText}>{item.text}</p>
              </motion.div>
            ))
          ) : (
            coreValues.map((item, index) => (
              <motion.div
                key={index}
                className={styles.glassCard}
                variants={cardChildVariant}
              >
                <div className={styles.valueIcon}>{item.icon}</div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueText}>{item.text}</p>
              </motion.div>
            ))
          )}
        </motion.div>
      </section>

      {/* Chapter 5: The Evolution Story (Timeline) */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{sanityData?.timeline?.label || 'OUR EVOLUTION'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: sanityData?.timeline?.title,
              titleMain: (sanityData?.timeline as any)?.titleMain,
              titleAccent: (sanityData?.timeline as any)?.titleAccent,
              titleEnd: (sanityData?.timeline as any)?.titleEnd,
              defaultAccentPhrase: 'Journey',
              defaultTitle: <>The Leapsofts <em>Journey</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {sanityData?.timeline?.subtitle || 'From a specialized cloud architecture firm to a full-spectrum custom enterprise software partner.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.timelineNav}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {activeTimelineEvents.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.timelineBtn} ${activeTimeline === idx ? styles.activeTimelineBtn : ''}`}
              onClick={() => setActiveTimeline(idx)}
            >
              {item.year}
            </button>
          ))}
        </motion.div>

        {activeTimelineEvents[activeTimeline] && (
          <motion.div
            className={`${styles.glassCard} ${styles.timelineCard}`}
            key={activeTimeline}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className={styles.timelineYear}>{activeTimelineEvents[activeTimeline].year}</div>
            <h3 className={styles.timelineCardTitle}>{activeTimelineEvents[activeTimeline].title}</h3>
            <p className={styles.timelineCardDesc}>{activeTimelineEvents[activeTimeline].desc}</p>
          </motion.div>
        )}
      </section>

      {/* Section 6: Industries We Transform (Contextual Internal Link Hub) */}
      {industryImpactData && (
        <section className={styles.section}>
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{industryImpactData.label || 'INDUSTRIES WE TRANSFORM'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: industryImpactData.title,
                defaultAccentPhrase: 'Domain Expertise',
                defaultTitle: <>Deep <em>Domain Expertise</em> Across Critical Sectors</>,
              })}
            </h2>
            <p className={styles.subtitle}>{industryImpactData.subtitle}</p>
          </motion.div>

          <motion.div
            className={styles.industryGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {industryImpactData.industries?.map((ind, iIdx) => (
              <Link key={iIdx} to={ind.link} className={styles.industryCardLink}>
                <motion.div className={styles.industryCard} variants={cardChildVariant}>
                  {ind.tag && <span className={styles.industryTag}>{ind.tag}</span>}
                  <h3 className={styles.industryName}>
                    {ind.name}
                    <ArrowRight className={styles.industryArrow + " w-5 h-5"} />
                  </h3>
                  <p className={styles.industryDesc}>{ind.desc}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>
      )}

      {/* Section 7: Core Technology Stack Showcase */}
      {techStackData && (
        <section className={styles.section}>
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{techStackData.label || 'OUR TECHNOLOGY MATRIX'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: techStackData.title,
                defaultAccentPhrase: 'Tech Stack',
                defaultTitle: <>Modern <em>Tech Stack</em> Built for Performance</>,
              })}
            </h2>
            <p className={styles.subtitle}>{techStackData.subtitle}</p>
          </motion.div>

          <motion.div
            className={styles.techGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {techStackData.categories?.map((cat, cIdx) => (
              <motion.div key={cIdx} className={styles.techCategoryCard} variants={cardChildVariant}>
                <h3 className={styles.techCategoryTitle}>
                  {cIdx === 0 && <Layers className="w-5 h-5 text-orange-500" />}
                  {cIdx === 1 && <Terminal className="w-5 h-5 text-orange-500" />}
                  {cIdx === 2 && <Zap className="w-5 h-5 text-orange-500" />}
                  {cIdx === 3 && <Globe className="w-5 h-5 text-orange-500" />}
                  {cIdx === 4 && <Database className="w-5 h-5 text-orange-500" />}
                  {cat.category}
                </h3>
                <div className={styles.techPills}>
                  {cat.skills.split(',').map((skill, sIdx) => (
                    <span key={sIdx} className={styles.techPill}>
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Chapter 8: Executive Leadership & Craftsmen */}
      <section className={styles.section} id="leadership">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{sanityData?.leadership?.label || 'EXECUTIVE LEADERSHIP'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: sanityData?.leadership?.title,
              titleMain: (sanityData?.leadership as any)?.titleMain,
              titleAccent: (sanityData?.leadership as any)?.titleAccent,
              titleEnd: (sanityData?.leadership as any)?.titleEnd,
              defaultAccentPhrase: 'Engineers',
              defaultTitle: <>Engineers Leading <em>Engineers</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {sanityData?.leadership?.subtitle || 'Direct strategic partnerships with technology founders and solution architects.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.leadershipGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayLeadership.map((member: any, idx: number) => (
            <motion.div
              key={idx}
              className={styles.executiveCard}
              variants={cardChildVariant}
            >
              <div className={styles.executiveHeader}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarGlow} />
                  <div className={styles.avatarImg}>
                    {member.imageUrl ? (
                      <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    ) : (
                      member.initials
                    )}
                  </div>
                </div>
                <div className={styles.executiveMeta}>
                  <div className={styles.executiveRoleTag}>{member.role}</div>
                  <h3 className={styles.executiveName}>{member.name}</h3>
                </div>
              </div>

              <p className={styles.executiveBio}>{member.bio}</p>

              {member.highlight && (
                <div className={styles.executiveHighlight}>
                  <span className={styles.highlightBadge}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {member.highlight}
                  </span>
                </div>
              )}

              <div className={styles.executiveSkills}>
                {member.skills.map((skill: string, sIdx: number) => (
                  <span key={sIdx} className={styles.executiveSkillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 9: Global Footprint & Compliance */}
      <section className={styles.section} id="global">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{sanityData?.globalDelivery?.label || 'GLOBAL DELIVERY & COMPLIANCE'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: sanityData?.globalDelivery?.title,
              titleMain: (sanityData?.globalDelivery as any)?.titleMain,
              titleAccent: (sanityData?.globalDelivery as any)?.titleAccent,
              titleEnd: (sanityData?.globalDelivery as any)?.titleEnd,
              defaultAccentPhrase: 'International Scale',
              defaultTitle: <>Built for <em>International Scale</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {sanityData?.globalDelivery?.subtitle || 'Operating across strategic timezones with enterprise security compliance.'}
          </p>
        </motion.div>

        <div className={styles.globalGrid}>
          <motion.div
            className={styles.glassCard}
            variants={slideLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-orange-500" style={{ color: 'var(--color-orange)' }} />
              <h3 className="text-xl font-bold text-white">Regional Engineering Hubs</h3>
            </div>
            <p className={styles.subtitle} style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>
              Our dual-hub delivery model ensures continuous round-the-clock software development and immediate client support.
            </p>
            <div className={styles.hubList}>
              {sanityData?.globalDelivery?.hubs && sanityData.globalDelivery.hubs.length > 0 ? (
                sanityData.globalDelivery.hubs.map((hub, hIdx) => (
                  <div key={hIdx} className={styles.hubItem}>
                    <div className={styles.hubIcon}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={styles.hubName}>{hub.name}</div>
                      <div className={styles.hubDesc}>{hub.desc}</div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className={styles.hubItem}>
                    <div className={styles.hubIcon}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={styles.hubName}>Dubai Hub (UAE)</div>
                      <div className={styles.hubDesc}>Middle East & Europe Enterprise Delivery Center</div>
                    </div>
                  </div>
                  <div className={styles.hubItem}>
                    <div className={styles.hubIcon}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={styles.hubName}>US Operations</div>
                      <div className={styles.hubDesc}>North American Client Success & Solutions Architecture</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            className={styles.glassCard}
            variants={slideRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6" style={{ color: 'var(--color-orange)' }} />
              <h3 className="text-xl font-bold text-white">Enterprise Standards</h3>
            </div>
            <p className={styles.subtitle} style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>
              Rigorous security protocols ensuring seamless audits and risk-free cloud deployments.
            </p>
            <div className={styles.complianceBadges}>
              {sanityData?.globalDelivery?.compliance && sanityData.globalDelivery.compliance.length > 0 ? (
                sanityData.globalDelivery.compliance.map((c, cIdx) => (
                  <div key={cIdx} className={styles.complianceItem}>
                    <div className={styles.complianceTitle}>{c.title || c.name}</div>
                    <div className={styles.complianceSubtitle}>{c.subtitle || c.tag}</div>
                  </div>
                ))
              ) : (
                <>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceTitle}>ISO 27001</div>
                    <div className={styles.complianceSubtitle}>Security Ready</div>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceTitle}>HIPAA</div>
                    <div className={styles.complianceSubtitle}>Health Compliance</div>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceTitle}>SOC 2</div>
                    <div className={styles.complianceSubtitle}>Trust & Audit</div>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceTitle}>GDPR</div>
                    <div className={styles.complianceSubtitle}>Data Protection</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions (FAQ + FAQPage Schema) */}
      {faqData && (
        <section className={styles.section} id="faq">
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{faqData.label || 'ENTERPRISE FAQ'}</span>
            <h2 className={styles.title}>
              {renderFormattedTitle({
                title: faqData.title,
                defaultAccentPhrase: 'Questions',
                defaultTitle: <>Frequently Asked <em>Questions</em></>,
              })}
            </h2>
            <p className={styles.subtitle}>{faqData.subtitle}</p>
          </motion.div>

          <div className={styles.faqList}>
            {faqData.items?.map((item, fIdx) => (
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

      {/* Chapter 11: The Final Invitation CTA */}
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
              title: sanityData?.cta?.title,
              titleMain: (sanityData?.cta as any)?.titleMain,
              titleAccent: (sanityData?.cta as any)?.titleAccent,
              titleEnd: (sanityData?.cta as any)?.titleEnd,
              defaultAccentPhrase: 'Enterprise Platform',
              defaultTitle: <>Ready to Architect Your <em>Enterprise Platform</em>?</>,
            })}
          </h2>
          <p className={styles.ctaSub}>
            {sanityData?.cta?.subtitle || 'Book a direct technical session with our lead solutions architect to discuss your software roadmap, technology stack, and timeline.'}
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text={sanityData?.cta?.buttonText || 'Schedule Architecture Consultation'}
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

export default About;
