import { buildPageMeta } from '../../utils/seoHelper';
import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import styles from './Leadership.module.css';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Code2,
  Brain,
  Rocket,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import Button from '../../components/Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityTeamMembers, getSanityAboutPage } from '../../sanity/queries';
import type { SanityTeamMember, SanityAboutPage } from '../../sanity/types';
import { renderFormattedTitle } from '../../utils/titleFormatter';
import { DEFAULT_LEADERSHIP_PAGE_DATA } from '../../data/companyFallback';

export async function loader() {
  const sanityData = await getSanityAboutPage('aboutLeadershipPage');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Executive Engineering Leadership | CEO Huzaifa Rasheed | Leapsofts",
    defaultDescription: "Meet the executive leaders, AI researchers, and cloud architects behind Leapsofts. Led by CEO & Co-Founder Huzaifa Rasheed, building custom enterprise software solutions.",
    defaultKeywords: "Leapsofts leadership, CEO Huzaifa Rasheed, software engineering leaders, enterprise CTO advisory, software architects Dubai US",
    canonicalUrl: "https://www.leapsofts.com/about/leadership",
  });
}

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

const leadershipTeam: {
  name: string;
  role: string;
  bio: string;
  highlight?: string;
  initials: string;
  skills: string[];
  imageUrl?: string;
}[] = [
  {
    name: 'Sarah Chen',
    role: 'Head of AI & Machine Learning',
    bio: 'Former AI research director specializing in PyTorch, LLM fine-tuning, computer vision, and high-concurrency predictive analytics pipelines for enterprise clients.',
    highlight: 'Ex-AI Research Director',
    initials: 'SC',
    skills: ['PyTorch', 'LLM Fine-Tuning', 'MLOps', 'Computer Vision', 'Vector Databases'],
  },
  {
    name: 'Marcus Devlin',
    role: 'VP of Engineering',
    bio: 'Pioneer of agile pod topologies with over 100+ production deployments shipped on aggressive 3-5 month delivery schedules with zero technical debt.',
    highlight: '100+ Pod Deployments',
    initials: 'MD',
    skills: ['Agile Pods', 'CI/CD Automation', 'Microservices', 'System Scalability', 'Kubernetes'],
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Cyber Security Architect',
    bio: 'Certified ethical hacker and zero-trust security architect guaranteeing ISO 27001, HIPAA, SOC 2 Type II, and GDPR compliance readiness across all data pipelines.',
    highlight: 'Zero-Trust Architect',
    initials: 'ER',
    skills: ['Zero-Trust', 'SOC 2 Type II', 'ISO 27001', 'Penetration Testing', 'Cloud Compliance'],
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Head of Solutions & Enterprise Delivery',
    bio: 'Senior cloud architect overseeing regional operations across Dubai and North America, aligning timezone delivery with zero latency and high client satisfaction.',
    highlight: 'Regional Delivery Lead',
    initials: 'TA',
    skills: ['Cloud Architecture', 'Solutions Engineering', 'Client Success', 'AWS / Azure', 'Global Pods'],
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

export { DEFAULT_LEADERSHIP_PAGE_DATA };

const Leadership: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const { openContactModal } = useContactModal();
  const [sanityTeam, setSanityTeam] = React.useState<SanityTeamMember[] | null>(null);

  const sanityPage: SanityAboutPage = loaderData?.sanityData || DEFAULT_LEADERSHIP_PAGE_DATA;
  const pageData = (sanityPage as any) || DEFAULT_LEADERSHIP_PAGE_DATA;

  useEffect(() => {
    getSanityTeamMembers().then((data) => {
      if (data) setSanityTeam(data);
    });
  }, []);

  const ceoMember = React.useMemo(() => {
    if (sanityTeam) {
      const found = sanityTeam.find((m) => m.isCeoSpotlight || m.name.toLowerCase().includes('huzaifa'));
      if (found) return found;
    }
    return pageData.ceoSpotlight || null;
  }, [sanityTeam, pageData]);

  const displayTeam = React.useMemo(() => {
    if (sanityTeam && sanityTeam.length > 0) {
      return sanityTeam
        .filter((m) => !m.isCeoSpotlight && !m.name.toLowerCase().includes('huzaifa'))
        .map((m) => ({
          name: m.name,
          role: m.role,
          bio: m.bio || '',
          highlight: m.highlight || '',
          initials: m.initials || m.name.split(' ').map((n) => n[0]).join('').substring(0, 2),
          skills: m.skills || [],
          imageUrl: m.imageUrl || '',
        }));
    }
    return pageData.leadershipTeam?.members || leadershipTeam;
  }, [sanityTeam, pageData]);

  // JSON-LD Schemas for Googlebot Crawling
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leapsofts",
    "url": "https://www.leapsofts.com",
    "logo": "https://www.leapsofts.com/logo.png",
    "description": "Enterprise software engineering company led by founders and software architects."
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
        "name": "Engineering Leadership",
        "item": "https://www.leapsofts.com/about/leadership"
      }
    ]
  };

  const ceoPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": ceoMember?.name || "Huzaifa Rasheed",
    "jobTitle": ceoMember?.role || "CEO & Co-Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Leapsofts"
    },
    "description": ceoMember?.bio || "CEO & Co-Founder of Leapsofts building custom enterprise software solutions."
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
    <div className={styles.leadershipPage}>
      <MetaSEO
        seo={sanityPage?.seo}
        defaultTitle="Executive Engineering Leadership | CEO Huzaifa Rasheed | Leapsofts"
        defaultDescription="Meet the executive leaders, AI researchers, and cloud architects behind Leapsofts. Led by CEO & Co-Founder Huzaifa Rasheed, building custom enterprise software solutions."
      />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ceoPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <Link to="/about">Company</Link>
        <ChevronRight className={styles.breadcrumbSeparator + " w-3.5 h-3.5"} />
        <span className={styles.breadcrumbCurrent}>Engineering Leadership</span>
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
            <span className={styles.label}>{pageData.hero?.label || 'EXECUTIVE LEADERSHIP'}</span>
            <h1 className={styles.heroTitle}>
              {renderFormattedTitle({
                title: pageData.hero?.title,
                defaultAccentPhrase: 'Founders & Architects',
                defaultTitle: <>Led by <em>Founders & Architects</em>, Not Sales Reps</>,
              })}
            </h1>
            <p className={styles.heroSub}>
              {pageData.hero?.subtitle || 'Direct strategic partnerships with global CTOs, software architects, and domain experts who have engineered over 100+ mission-critical custom enterprise systems.'}
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
                  {idx === 0 && <Users className="w-5 h-5" />}
                  {idx === 1 && <Award className="w-5 h-5" />}
                  {idx === 2 && <Rocket className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div className={styles.ribbonTitle}>{item.value || item.title}</div>
                <div className={styles.ribbonDesc}>{item.label || item.desc}</div>
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
          <span className={styles.label}>{pageData.ceoSpotlight?.label || 'FOUNDER & CHIEF EXECUTIVE'}</span>
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
            <div className={styles.ceoAvatarBox}>
              {ceoMember?.imageUrl ? (
                <img src={ceoMember.imageUrl} alt={ceoMember.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                ceoMember?.initials || 'HR'
              )}
            </div>
            <span className={styles.ceoRoleBadge}>{ceoMember?.role || 'CEO & Co-Founder'}</span>
          </div>

          <div>
            <h3 className={styles.ceoName}>{ceoMember?.name || 'Huzaifa Rasheed'}</h3>
            <div className={styles.ceoSubtitle}>{ceoMember?.highlight || 'Building Custom Enterprise AI & Scalable Cloud Solutions'}</div>
            <p className={styles.ceoBio}>
              {ceoMember?.bio || 'Leading Leapsofts in delivering AI-driven and custom software engineering solutions across Healthcare, FinTech, Fashion Tech, and emerging industries. With hands-on involvement in over 45+ bespoke AI implementations, Huzaifa aligns high-level business strategy with rigorous software engineering.'}
            </p>

            <blockquote className={styles.ceoQuote}>
              "{pageData.ceoSpotlight?.quote || 'We believe custom software engineering is not an outsourced commodity—it is the core strategic engine that defines market leaders.'}"
            </blockquote>

            <div className={styles.ceoSkillsGrid}>
              {(ceoMember?.skills && ceoMember.skills.length > 0
                ? ceoMember.skills
                : ['Strategic Leadership', 'Enterprise AI', 'Cloud Microservices', 'CTO Advisory', 'FinTech & HealthTech', 'Global Operations']
              ).map((skill: string, sIdx: number) => (
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
          <span className={styles.label}>{pageData.leadershipTeam?.label || 'EXECUTIVE ARCHITECTS'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: pageData.leadershipTeam?.title,
              defaultAccentPhrase: 'Craftsmen',
              defaultTitle: <>Engineering <em>Craftsmen</em> & Directors</>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {pageData.leadershipTeam?.subtitle || 'Senior leaders overseeing AI research, cloud infrastructure, security compliance, and delivery pods.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.leadershipGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayTeam.map((member: any, idx: number) => (
            <motion.div key={idx} className={styles.executiveCard} variants={cardChildVariant}>
              <div>
                <div className={styles.executiveHeader}>
                  <div className={styles.avatarContainer}>
                    {member.imageUrl ? (
                      <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    ) : (
                      member.initials
                    )}
                  </div>
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

      {/* Chapter 4: Leadership Operating Philosophy */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>{pageData.philosophy?.label || 'OPERATING PHILOSOPHY'}</span>
          <h2 className={styles.title}>
            {renderFormattedTitle({
              title: pageData.philosophy?.title,
              defaultAccentPhrase: 'Leadership Operates',
              defaultTitle: <>How Our <em>Leadership Operates</em></>,
            })}
          </h2>
          <p className={styles.subtitle}>
            {pageData.philosophy?.subtitle || 'Four non-negotiable principles guiding every executive decision and technical sprint.'}
          </p>
        </motion.div>

        <motion.div
          className={styles.philosophyGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(pageData.philosophy?.principles || operatingPrinciples).map((item: any, idx: number) => (
            <motion.div key={idx} className={styles.philosophyCard} variants={cardChildVariant}>
              <div className={styles.philosophyNum}>{item.step}</div>
              <div className={styles.philosophyIcon}>
                {idx === 0 && <Code2 className="w-6 h-6" />}
                {idx === 1 && <Users className="w-6 h-6" />}
                {idx === 2 && <Brain className="w-6 h-6" />}
                {idx === 3 && <ShieldCheck className="w-6 h-6" />}
              </div>
              <h3 className={styles.philosophyTitle}>{item.title}</h3>
              <p className={styles.philosophyDesc}>{item.desc}</p>
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
                defaultTitle: <>Services Overseen by Our <em>Core Services</em></>,
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

      {/* Chapter 6: Leadership FAQ Accordion */}
      {pageData.faq && (
        <section className={styles.section} id="faq">
          <motion.div
            className={styles.sectionHeader}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.label}>{pageData.faq.label || 'LEADERSHIP FAQ'}</span>
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
              defaultAccentPhrase: 'Technical Leadership',
              defaultTitle: <>Ready to Speak with <em>Technical Leadership</em>?</>,
            })}
          </h2>
          <p className={styles.ctaSub}>
            {pageData.cta?.subtitle || 'Book a direct technical architecture session with our founders and solution architects to review your project roadmap.'}
          </p>
          <div className={styles.ctaBtnWrapper}>
            <Button
              text={pageData.cta?.buttonText || 'Schedule Architecture Consultation'}
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
