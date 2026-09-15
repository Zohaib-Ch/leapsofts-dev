import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import Button from '../../components/Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import styles from './GlobalFootprint.module.css';

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
    title: 'Dubai Hub (Middle East & Europe)',
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
    desc: 'Proves our development lifecycle, server infrastructure, and code delivery pipelines comply with rigorous international information security standards.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: 'HIPAA',
    tag: 'Healthcare & HealthTech Data',
    desc: 'Mandatory compliance framework for medical apps, EHR integrations, and telehealth platforms handling Protected Health Information (PHI).',
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    name: 'SOC 2 Type II',
    tag: 'Trust, Security & Availability',
    desc: 'Independently audited controls guaranteeing data privacy, operational safety, confidential data handling, and continuous cloud availability.',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    name: 'GDPR',
    tag: 'European Data Privacy & Rights',
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

const GlobalFootprint: React.FC = () => {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    document.title = 'Global Footprint & Security Compliance | ISO, HIPAA, SOC2 | Leapsofts';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Leapsofts operates global delivery hubs in Dubai and the USA with ISO 27001, HIPAA, SOC 2, and GDPR security compliance readiness for enterprise software.'
    );
  }, []);

  return (
    <div className={styles.globalPage}>
      {/* Chapter 1: Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>GLOBAL FOOTPRINT & COMPLIANCE</span>
            <h1 className={styles.heroTitle}>
              Engineered for <em>International Scale</em> & Security
            </h1>
            <p className={styles.heroSub}>
              Operating across strategic regional hubs in Dubai & North America with rigorous ISO 27001, HIPAA, SOC 2, and GDPR compliance standards.
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

      {/* Chapter 2: Regional Delivery Centers */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>REGIONAL DELIVERY CENTERS</span>
          <h2 className={styles.title}>
            Global Presence, <em>Local Execution</em>
          </h2>
          <p className={styles.subtitle}>
            Strategic engineering hubs enabling round-the-clock software development and immediate client support.
          </p>
        </motion.div>

        <div className={styles.hubsGrid}>
          {hubsData.map((hub, idx) => (
            <motion.div
              key={idx}
              className={styles.hubCard}
              variants={idx === 0 ? slideLeftVariant : slideRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.hubBadge}>{hub.badge}</div>
              <h3 className={styles.hubTitle}>{hub.title}</h3>
              <p className={styles.hubText}>{hub.desc}</p>

              <div className={styles.hubList}>
                {hub.list.map((item, lIdx) => (
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
          <span className={styles.label}>ENTERPRISE STANDARDS</span>
          <h2 className={styles.title}>
            Compliance & <em>Audit Readiness</em>
          </h2>
          <p className={styles.subtitle}>
            Built to satisfy the most demanding enterprise security audits and legal compliance frameworks.
          </p>
        </motion.div>

        <motion.div
          className={styles.complianceGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {complianceData.map((item, idx) => (
            <motion.div key={idx} className={styles.complianceCard} variants={cardChildVariant}>
              <div>
                <div className={styles.complianceIcon}>{item.icon}</div>
                <div className={styles.complianceName}>{item.name}</div>
                <div className={styles.complianceTag}>{item.tag}</div>
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
          <span className={styles.label}>DATA SHIELD</span>
          <h2 className={styles.title}>
            Security <em>Architectural Controls</em>
          </h2>
          <p className={styles.subtitle}>
            Four non-negotiable security controls baked directly into every cloud environment we configure.
          </p>
        </motion.div>

        <motion.div
          className={styles.securityGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {securityStandards.map((sec, idx) => (
            <motion.div key={idx} className={styles.securityCard} variants={cardChildVariant}>
              <div className={styles.securityIcon}>{sec.icon}</div>
              <h3 className={styles.securityTitle}>{sec.title}</h3>
              <p className={styles.securityDesc}>{sec.desc}</p>
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
            Need <em>Enterprise Security Compliance</em>?
          </h2>
          <p className={styles.ctaSub}>
            Book a consultation with our cloud security architects to review your compliance checklist, encryption protocols, and audit readiness.
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text="Schedule Compliance Consultation"
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
