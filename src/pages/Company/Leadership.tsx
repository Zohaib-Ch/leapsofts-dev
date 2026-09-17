import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Code2,
  Brain,
  Rocket,
} from 'lucide-react';
import Button from '../../components/Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import styles from './Leadership.module.css';

const ribbonData = [
  {
    icon: <Users className="w-5 h-5" />,
    title: '100% Tech-Led',
    desc: 'Engineers leading engineers',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: '45+ AI Solutions',
    desc: 'Built by CEO & Leadership',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: '100+ Deployments',
    desc: 'Shipped to global scale',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: '98% Retention',
    desc: 'Sustained client trust',
  },
];

const leadershipTeam = [
  {
    name: 'Sarah Chen',
    role: 'Head of AI & Machine Learning',
    bio: 'Former AI research director specializing in PyTorch, LLM fine-tuning, computer vision, and high-concurrency predictive analytics pipelines.',
    highlight: 'Ex-AI Research Director',
    initials: 'SC',
    skills: ['PyTorch', 'LLM Fine-Tuning', 'MLOps', 'Computer Vision'],
  },
  {
    name: 'Marcus Devlin',
    role: 'VP of Engineering',
    bio: 'Pioneer of agile pod topologies with over 100+ production deployments shipped on aggressive 3-5 month delivery schedules.',
    highlight: '100+ Pod Deployments',
    initials: 'MD',
    skills: ['Agile Pods', 'CI/CD Automation', 'Microservices', 'System Scalability'],
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Cyber Security Architect',
    bio: 'Certified ethical hacker and zero-trust security architect guaranteeing ISO 27001, HIPAA, SOC 2 Type II, and GDPR compliance readiness.',
    highlight: 'Zero-Trust Architect',
    initials: 'ER',
    skills: ['Zero-Trust', 'SOC 2 Type II', 'ISO 27001', 'Penetration Testing'],
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Head of Solutions & Enterprise Delivery',
    bio: 'Senior cloud architect overseeing regional operations across Dubai and North America, aligning timezone delivery with zero latency.',
    highlight: 'Regional Delivery Lead',
    initials: 'TA',
    skills: ['Cloud Architecture', 'Solutions Engineering', 'Client Success', 'AWS / Azure'],
  },
];

const operatingPrinciples = [
  {
    step: '01',
    icon: <Code2 className="w-6 h-6" />,
    title: 'Hands-On Technical Governance',
    desc: 'Executive leaders write architecture blueprints and actively participate in code reviews for every major sprint release.',
  },
  {
    step: '02',
    icon: <Users className="w-6 h-6" />,
    title: 'Direct Client-to-Architect Sync',
    desc: 'No middle management layers. Clients collaborate directly with pod leads and senior technical directors.',
  },
  {
    step: '03',
    icon: <Brain className="w-6 h-6" />,
    title: 'Continuous AI Innovation',
    desc: 'Allocating 20% sprint capacity evaluating bleeding-edge LLMs, neural networks, and automated development workflows.',
  },
  {
    step: '04',
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Transparent Code Ownership',
    desc: 'Open repositories, live preview builds, and complete IP ownership transfer with zero vendor lock-in.',
  },
];

// Animation Variants for Storytelling Scroll
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

const Leadership: React.FC = () => {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    document.title = 'Executive Engineering Leadership | CEO Huzaifa Rasheed | Leapsofts';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Meet the executive leaders, AI researchers, and cloud architects behind Leapsofts. Led by CEO & Co-Founder Huzaifa Rasheed, building custom enterprise software solutions.'
    );
  }, []);

  return (
    <div className={styles.leadershipPage}>
      {/* Chapter 1: Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>EXECUTIVE LEADERSHIP</span>
            <h1 className={styles.heroTitle}>
              Led by <em>Founders & Architects</em>, Not Sales Reps
            </h1>
            <p className={styles.heroSub}>
              Direct strategic partnerships with technology founders, AI researchers, and cloud architects who have engineered over 100+ mission-critical enterprise systems.
            </p>
          </motion.div>

          <motion.div
            className={styles.ribbonGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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

      {/* Chapter 2: Featured CEO Spotlight (Huzaifa Rasheed) */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>FOUNDER & CHIEF EXECUTIVE</span>
          <h2 className={styles.title}>
            Leadership <em>Spotlight</em>
          </h2>
          <p className={styles.subtitle}>
            Directing strategic vision, AI practice expansion, and global enterprise delivery.
          </p>
        </motion.div>

        <motion.div
          className={styles.ceoSpotlight}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className={styles.ceoAvatarWrapper}>
            <div className={styles.ceoAvatarBox}>HR</div>
            <span className={styles.ceoRoleBadge}>CEO & Co-Founder</span>
          </div>

          <div>
            <h3 className={styles.ceoName}>Huzaifa Rasheed</h3>
            <div className={styles.ceoSubtitle}>Building Custom Enterprise AI & Scalable Cloud Solutions</div>
            <p className={styles.ceoBio}>
              Leading Leapsofts in delivering AI-driven and custom software engineering solutions across Healthcare, FinTech, Fashion Tech, and emerging industries. With hands-on involvement in over 45+ bespoke AI implementations, Huzaifa aligns high-level business strategy with rigorous software engineering.
            </p>

            <blockquote className={styles.ceoQuote}>
              "We believe custom software engineering is not an outsourced commodity—it is the core strategic engine that defines market leaders."
            </blockquote>

            <div className={styles.ceoSkillsGrid}>
              {['Strategic Leadership', 'Enterprise AI', 'Cloud Microservices', 'CTO Advisory', 'FinTech & HealthTech', 'Global Operations'].map((skill, sIdx) => (
                <span key={sIdx} className={styles.ceoSkillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Chapter 3: Executive Engineering Team Grid */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>EXECUTIVE ARCHITECTS</span>
          <h2 className={styles.title}>
            Engineering <em>Craftsmen</em>
          </h2>
          <p className={styles.subtitle}>
            Senior leaders overseeing AI research, cloud infrastructure, security compliance, and delivery pods.
          </p>
        </motion.div>

        <motion.div
          className={styles.leadershipGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leadershipTeam.map((member, idx) => (
            <motion.div key={idx} className={styles.executiveCard} variants={cardChildVariant}>
              <div>
                <div className={styles.executiveHeader}>
                  <div className={styles.avatarContainer}>{member.initials}</div>
                  <div>
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
              </div>

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

      {/* Chapter 4: Leadership Operating Philosophy */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>OPERATING PHILOSOPHY</span>
          <h2 className={styles.title}>
            How Our <em>Leadership Operates</em>
          </h2>
          <p className={styles.subtitle}>
            Four non-negotiable principles guiding every executive decision and technical sprint.
          </p>
        </motion.div>

        <motion.div
          className={styles.philosophyGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {operatingPrinciples.map((item, idx) => (
            <motion.div key={idx} className={styles.philosophyCard} variants={cardChildVariant}>
              <div className={styles.philosophyNum}>{item.step}</div>
              <div className={styles.philosophyIcon}>{item.icon}</div>
              <h3 className={styles.philosophyTitle}>{item.title}</h3>
              <p className={styles.philosophyDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Chapter 5: Call to Action */}
      <section className={styles.section}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className={styles.ctaTitle}>
            Ready to Speak with <em>Technical Leadership</em>?
          </h2>
          <p className={styles.ctaSub}>
            Book a direct technical architecture session with our founders and solution architects to review your project roadmap.
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

export default Leadership;
