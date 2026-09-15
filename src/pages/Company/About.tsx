import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import Button from '../../components/Button/Button';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import { useContactModal } from '../../context/ContactModalContext';
import styles from './About.module.css';

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

const leadershipData = [
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

const About: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    document.title = 'About Us | Custom Enterprise Software Engineering | Leapsofts';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about Leapsofts, a premier custom software engineering consultancy delivering resilient cloud architectures, AI integration, and dedicated agile pods.'
    );
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Chapter 1: Hero & Vision Narrative */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>ABOUT LEAPSOFTS</span>
            <h1 className={styles.heroTitle}>
              Architecting <em>Enterprise Velocity</em> Through Engineering Rigor
            </h1>
            <p className={styles.heroSub}>
              We combine deep cloud architecture, AI innovation, and agile pod delivery to build mission-critical custom software for scaling enterprises and industry pioneers.
            </p>
          </motion.div>

          <motion.div
            className={styles.metricsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Our Engineering Creed (Mission & Vision) */}
      <section className={styles.section} id="mission">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>OUR ENGINEERING CREED</span>
          <h2 className={styles.title}>
            Purpose-Driven <em>Software Craftsmanship</em>
          </h2>
          <p className={styles.subtitle}>
            Empowering organizations with digital infrastructure that turns complex technical challenges into sustainable market dominance.
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
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To eliminate technical debt and compress time-to-market for scaling enterprises through resilient microservice architecture, clean code standards, and dedicated engineering pods.
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
            <h3 className={styles.missionTitle}>Our Vision</h3>
            <p className={styles.missionText}>
              To set the global standard for custom software development, where technical excellence, AI integration, and long-term partnership drive tangible business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: How We Engineer (Core Principles Sequence) */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>HOW WE ENGINEER</span>
          <h2 className={styles.title}>
            Core Operating <em>Principles</em>
          </h2>
          <p className={styles.subtitle}>
            Every line of code we write is governed by six fundamental engineering values.
          </p>
        </motion.div>

        <motion.div
          className={styles.valuesGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coreValues.map((item, index) => (
            <motion.div
              key={index}
              className={styles.glassCard}
              variants={cardChildVariant}
            >
              <div className={styles.valueIcon}>{item.icon}</div>
              <h3 className={styles.valueTitle}>{item.title}</h3>
              <p className={styles.valueText}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 4: The Evolution Story (Timeline) */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>OUR EVOLUTION</span>
          <h2 className={styles.title}>
            The Leapsofts <em>Journey</em>
          </h2>
          <p className={styles.subtitle}>
            From a specialized cloud architecture firm to a full-spectrum custom enterprise software partner.
          </p>
        </motion.div>

        <motion.div
          className={styles.timelineNav}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {timelineData.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.timelineBtn} ${activeTimeline === idx ? styles.activeTimelineBtn : ''}`}
              onClick={() => setActiveTimeline(idx)}
            >
              {item.year}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={`${styles.glassCard} ${styles.timelineCard}`}
          key={activeTimeline}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className={styles.timelineYear}>{timelineData[activeTimeline].year}</div>
          <h3 className={styles.timelineCardTitle}>{timelineData[activeTimeline].title}</h3>
          <p className={styles.timelineCardDesc}>{timelineData[activeTimeline].desc}</p>
        </motion.div>
      </section>

      {/* Chapter 5: Executive Leadership & Craftsmen */}
      <section className={styles.section} id="leadership">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>EXECUTIVE LEADERSHIP</span>
          <h2 className={styles.title}>
            Engineers Leading <em>Engineers</em>
          </h2>
          <p className={styles.subtitle}>
            Direct strategic partnerships with technology founders and solution architects.
          </p>
        </motion.div>

        <motion.div
          className={styles.leadershipGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leadershipData.map((member, idx) => (
            <motion.div
              key={idx}
              className={styles.executiveCard}
              variants={cardChildVariant}
            >
              <div className={styles.executiveHeader}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarGlow} />
                  <div className={styles.avatarImg}>{member.initials}</div>
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
                {member.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.executiveSkillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 6: Global Footprint & Compliance */}
      <section className={styles.section} id="global">
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>GLOBAL DELIVERY & COMPLIANCE</span>
          <h2 className={styles.title}>
            Built for <em>International Scale</em>
          </h2>
          <p className={styles.subtitle}>
            Operating across strategic timezones with enterprise security compliance.
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 7: The Final Invitation CTA */}
      <section className={styles.section}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className={styles.ctaTitle}>
            Ready to Build Your <em>Enterprise Platform</em>?
          </h2>
          <p className={styles.ctaSub}>
            Book a direct technical session with our lead solutions architect to discuss your software roadmap, technology stack, and timeline.
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

export default About;
