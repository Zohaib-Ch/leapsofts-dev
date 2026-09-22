import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
export function meta() {
  const title = "Our Mission & Engineering Creed | Leapsofts";
  const description = "Leapsofts is driven by a mission to deliver honest, high-quality software engineering that creates lasting business value for enterprises worldwide.";
  const keywords = "Leapsofts mission, engineering creed, software values, enterprise engineering principles";
  const canonicalUrl = "https://www.leapsofts.com/about/mission";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
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
    desc: 'We architect microservices, event-driven systems, and cloud-native backends engineered to handle 10x traffic spikes without performance degradation.',
  },
  {
    num: 'PILLAR 02',
    title: 'AI-Augmented Sprint Velocity',
    desc: 'By integrating modern AI code synthesis, automated test suites, and continuous delivery pipelines, we compress traditional development timelines by up to 50%.',
  },
  {
    num: 'PILLAR 03',
    title: 'Zero-Trust Security Standard',
    desc: 'Security is embedded at the API boundary. We build HIPAA, SOC 2 Type II, and ISO 27001 compliance readiness directly into the software lifecycle.',
  },
  {
    num: 'PILLAR 04',
    title: 'Complete Code Transparency',
    desc: 'No black boxes or hidden dependencies. Clients receive full access to open git repositories, live preview builds, and direct communication with senior engineers.',
  },
];

const manifestData = [
  {
    num: '01',
    text: 'We write clean, modular code for the engineers who will maintain it 5 years from today.',
  },
  {
    num: '02',
    text: 'We test exhaustively before shipping; no client or end-user should ever be a QA tester.',
  },
  {
    num: '03',
    text: 'We measure sprint velocity in real production value delivered, not closed story points.',
  },
  {
    num: '04',
    text: 'We communicate proactively and transparently; zero silent delays or hidden obstacles.',
  },
  {
    num: '05',
    text: 'We enforce zero-trust security at the architecture boundary, never as a late patch.',
  },
  {
    num: '06',
    text: 'We engineer for long-term strategic partnership and continuous product evolution.',
  },
];

const qaStandards = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Static Code Analysis',
    desc: 'Automated SonarQube & ESLint rules enforced on every pull request.',
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: 'Automated E2E Testing',
    desc: 'Playwright & Cypress test suites validating critical user journeys.',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'CI/CD Preview Builds',
    desc: 'Instant isolated preview URLs generated per feature branch.',
  },
  {
    icon: <FileCode2 className="w-6 h-6" />,
    title: 'Dual Peer Code Review',
    desc: 'Every commit requires sign-off from a Lead Solutions Architect.',
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
  const { openContactModal } = useContactModal();
  const [sanityData, setSanityData] = useState<SanityAboutPage>(DEFAULT_MISSION_PAGE_DATA);

  useEffect(() => {
    document.title = 'Our Mission & Engineering Creed | Leapsofts';
    getSanityAboutPage('aboutMissionPage')
      .then((data) => {
        if (data) {
          setSanityData((prev) => {
            const isIdentical = JSON.stringify(prev) === JSON.stringify(data);
            return isIdentical ? prev : data;
          });
        } else {
          setSanityData(DEFAULT_MISSION_PAGE_DATA);
        }
      })
      .catch((err) => {
        console.error('Failed to load Mission page data from Sanity:', err);
        setSanityData(DEFAULT_MISSION_PAGE_DATA);
      });
  }, []);

  return (
    <div className={styles.missionPage}>
      <MetaSEO
        seo={sanityData?.seo}
        defaultTitle="Our Mission & Engineering Creed | Leapsofts"
        defaultDescription="Explore Leapsofts' core mission, zero-tech-debt philosophy, AI-augmented development velocity, and software engineering craftsmanship standards."
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>{sanityData?.hero?.label || 'MISSION & ENGINEERING CREED'}</span>
            <h1 className={styles.heroTitle}>
              {renderFormattedTitle({
                title: sanityData?.hero?.title,
                titleMain: (sanityData?.hero as any)?.titleMain,
                titleAccent: (sanityData?.hero as any)?.titleAccent,
                titleEnd: (sanityData?.hero as any)?.titleEnd,
                defaultAccentPhrase: 'Zero Tech Debt',
                defaultTitle: <>Engineered for <em>Zero Tech Debt</em> & Rapid Launch</>,
              })}
            </h1>
            <p className={styles.heroSub}>
              {sanityData?.hero?.subtitle || 'We exist to eliminate software complexity, compress time-to-market, and build honest, high-quality enterprise software engineering solutions for forward-thinking companies.'}
            </p>
          </motion.div>

          <motion.div
            className={styles.ribbonGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {ribbonData.map((item, idx) => (
              <motion.div key={idx} className={styles.ribbonCard} variants={cardChildVariant}>
                <div className={styles.ribbonIcon}>{item.icon}</div>
                <div className={styles.ribbonTitle}>{item.title}</div>
                <div className={styles.ribbonDesc}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: The Dual Mission & Action Plan */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>OUR PURPOSE</span>
          <h2 className={styles.title}>
            The Mission & <em>Action Blueprint</em>
          </h2>
          <p className={styles.subtitle}>
            A clear mandate to redefine how high-velocity software engineering is executed.
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
            <h3 className={styles.splitCardTitle}>The Mission Mandate</h3>
            <p className={styles.splitCardText}>
              To empower ambitious enterprises and hyper-growth platforms with bulletproof, cloud-native software architecture that turns complex engineering challenges into sustainable market dominance.
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
            <h3 className={styles.splitCardTitle}>The Execution Blueprint</h3>
            <p className={styles.splitCardText}>
              Achieved through dedicated agile pod topologies, AI-augmented code synthesis, continuous automated testing, and transparent zero-black-box client communication.
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
          <span className={styles.label}>THE FOUR PILLARS</span>
          <h2 className={styles.title}>
            Foundations of <em>Technical Excellence</em>
          </h2>
          <p className={styles.subtitle}>
            The four core pillars that guide our architecture decisions across every product build.
          </p>
        </motion.div>

        <motion.div
          className={styles.pillarsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillarsData.map((pillar, idx) => (
            <motion.div key={idx} className={styles.pillarCard} variants={cardChildVariant}>
              <div className={styles.pillarNum}>{pillar.num}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 4: The Leapsofts Engineering Manifest */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>OUR CODE OF CONDUCT</span>
          <h2 className={styles.title}>
            The Engineering <em>Manifesto</em>
          </h2>
          <p className={styles.subtitle}>
            Six non-negotiable principles that govern how our software developers write, test, and ship code.
          </p>
        </motion.div>

        <motion.div
          className={styles.manifestGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {manifestData.map((item, idx) => (
            <motion.div key={idx} className={styles.manifestCard} variants={cardChildVariant}>
              <div className={styles.manifestIndex}>{item.num}</div>
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
          <span className={styles.label}>QUALITY ASSURANCE</span>
          <h2 className={styles.title}>
            How We Guarantee <em>Code Integrity</em>
          </h2>
          <p className={styles.subtitle}>
            Automated quality gates integrated into every pull request before merging to production.
          </p>
        </motion.div>

        <motion.div
          className={styles.qaGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {qaStandards.map((qa, idx) => (
            <motion.div key={idx} className={styles.qaCard} variants={cardChildVariant}>
              <div className={styles.qaIcon}>{qa.icon}</div>
              <h3 className={styles.qaTitle}>{qa.title}</h3>
              <p className={styles.qaDesc}>{qa.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 6: Call To Action */}
      <section className={styles.section}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className={styles.ctaTitle}>
            Ready to Experience <em>Resilient Software Engineering</em>?
          </h2>
          <p className={styles.ctaSub}>
            Schedule an architecture session with our engineering leads to audit your current codebase or plan your next custom software launch.
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text="Schedule Architecture Consultation"
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
