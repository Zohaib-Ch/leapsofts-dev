import { buildPageMeta } from '../../utils/seoHelper';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  HelpCircle,
  Lock,
  FileText,
  Zap,
  ChevronDown,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm/ContactForm';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityContactPage } from '../../sanity/queries';
import type { SanityContactPage } from '../../sanity/types';
export async function loader() {
  const sanityData = await getSanityContactPage();
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Contact Leapsofts | Get a Free Software Strategy Consultation",
    defaultDescription: "Ready to accelerate your product roadmap? Contact Leapsofts today for a free custom software architecture, cloud engineering, and MVP strategy consultation with our lead software architects.",
    defaultKeywords: "contact Leapsofts, software development consultation, hire software developers, software development company contact",
    canonicalUrl: "https://www.leapsofts.com/contact",
  });
}

const ribbonData = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: '24 Hours Response',
    desc: 'Guaranteed architect SLA',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Dubai & US Hubs',
    desc: '24/7 global timezone sync',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Direct CTO Access',
    desc: 'Engineers, not sales pushers',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: '100% NDA Protection',
    desc: 'Strict data confidentiality',
  },
];

const nextSteps = [
  {
    step: '01',
    title: 'Immediate Mutual NDA Execution',
    desc: 'We execute a standard or custom Mutual NDA before reviewing your technical specs, wireframes, or codebases.',
    icon: <Lock className="w-5 h-5" />,
  },
  {
    step: '02',
    title: 'CTO & Solution Architecture Sync',
    desc: 'Our lead software architect reviews your project domain, cloud requirements, and scalability targets within 24 hours.',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    step: '03',
    title: 'Tailored Roadmap & Team Topology',
    desc: 'You receive a detailed technical proposal with fixed-price or dedicated pod pricing, tech stack recommendation, and sprint timeline.',
    icon: <FileText className="w-5 h-5" />,
  },
];

const faqData = [
  {
    q: 'How fast can we kick off a new software project?',
    a: 'We can deploy a dedicated Agile Pod to your project within 5 to 7 business days following initial architecture alignment and onboarding.',
  },
  {
    q: 'Do you sign a Mutual NDA before our initial consultation?',
    a: 'Yes, absolutely. We strictly protect client confidentiality and execute formal Mutual NDAs before reviewing any proprietary codebases or product specs.',
  },
  {
    q: 'What engagement models does Leapsofts offer?',
    a: 'We offer Dedicated Agile Engineering Pods (monthly pod topology), Fixed-Price Project Sprints for well-defined MVPs, and Technical Advisory / CTO Services.',
  },
  {
    q: 'Where will our project data and source code be stored?',
    a: 'Your source code is committed directly to your dedicated GitHub/GitLab enterprise repositories, and infrastructure is deployed strictly in your designated cloud regions (AWS, Azure, GCP).',
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

const Contact: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First item open by default
  const sanityData: SanityContactPage | null = loaderData?.sanityData || null;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Leapsofts",
      "image": "https://www.leapsofts.com/logo/Leap-soft-01.png",
      "url": "https://www.leapsofts.com/contact",
      "telephone": "+1-123-456-7890",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai"
      }
    },
    {
      "@type": "ContactPage",
      "name": "Contact Leapsofts",
      "url": "https://www.leapsofts.com/contact"
    }
  ]
};

  return (
    <div className={styles.contactPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <MetaSEO
        seo={sanityData?.seo}
        defaultTitle="Contact Us | Custom Software & AI Engineering Consultation | Leapsofts"
        defaultDescription="Get in touch with Leapsofts software architects to schedule a technical strategy session, request a project quote, or discuss custom software development."
      />
      {/* Chapter 1: Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>START A CONVERSATION</span>
            <h1 className={styles.heroTitle}>
              Let's Build Your <em>Next Enterprise System</em>
            </h1>
            <p className={styles.heroSub}>
              Have an enterprise software initiative, AI project, or product re-engineering roadmap? Book a free 30-minute enterprise software strategy session directly with our lead architects and executive team.
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

      {/* Chapter 2: Main Split - Left Scrolling Info Cards & Right Sticky Form */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          {/* Left Column: What Happens Next & Dubai HQ (Scrolls naturally) */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* What Happens Next Card */}
            <div className={styles.officeCard}>
              <span className={styles.officeBadge}>WHAT HAPPENS NEXT?</span>
              <h3 className={styles.officeTitle}>Our Consultation Process</h3>

              <div className={styles.infoList}>
                {nextSteps.map((step, sIdx) => (
                  <div key={sIdx} className={styles.infoItem}>
                    <div className={styles.infoIcon}>{step.icon}</div>
                    <div>
                      <div className={styles.infoTextTitle}>STEP {step.step}</div>
                      <div className={styles.infoTextVal}>{step.title}</div>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dubai HQ Card */}
            <div className={styles.officeCard}>
              <span className={styles.officeBadge}>GLOBAL HEADQUARTERS</span>
              <h3 className={styles.officeTitle}>Dubai Hub (UAE)</h3>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={styles.infoTextTitle}>Location</div>
                    <div className={styles.infoTextVal}>Empire Heights A Business Bay / Dubai Silicon Oasis, IFZA, Dubai, UAE</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={styles.infoTextTitle}>Email Consultation</div>
                    <div className={styles.infoTextVal}>
                      <a href="mailto:contact@leapsofts.com">contact@leapsofts.com</a>
                    </div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={styles.infoTextTitle}>Direct Line</div>
                    <div className={styles.infoTextVal}>
                      <a href="tel:+971568309734">+971 56 830 9734</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sticky High-Converting Form Container */}
          <motion.div
            className={styles.formCardWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="mb-6 pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-[#FF7917] uppercase tracking-wider block mb-1">PROJECT INQUIRY FORM</span>
              <h2 className="text-2xl font-bold text-white">Schedule an Architecture Session</h2>
              <p className="text-sm text-gray-400 mt-1">Fill out the form below to receive a response from our lead architects within 24 hours.</p>
            </div>
            <ContactForm isEmbedded={true} />
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: FAQ Section - Interactive Animated Accordion below main split */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.label}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.title}>
            Common <em>Consultation Questions</em>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about initiating a software engineering project with Leapsofts. Click any question to reveal insights.
          </p>
        </motion.div>

        <motion.div
          className={styles.faqGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.activeFaqCard : ''}`}
                variants={cardChildVariant}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  className={styles.faqQuestionBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFaq(idx);
                  }}
                  aria-expanded={isOpen}
                >
                  <div className={styles.faqTitleGroup}>
                    <HelpCircle className={styles.faqIcon} />
                    <h3 className={styles.faqQuestion}>{item.q}</h3>
                  </div>
                  <ChevronDown
                    className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.faqAnswerWrapper}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                    >
                      <p className={styles.faqAnswer}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
