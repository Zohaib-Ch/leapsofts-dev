import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { buildPageMeta } from '../../utils/seoHelper';
import styles from './PrivacyPolicy.module.css';
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  Database,
  Cpu,
  Eye,
  Globe,
  Clock,
  Mail,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Scale,
  Server,
  Building2,
} from 'lucide-react';

export function meta() {
  return buildPageMeta({
    defaultTitle: "Privacy Policy & Enterprise Data Protection Standards | Leapsofts",
    defaultDescription: "Read the official Privacy Policy of Leapsofts Enterprise Software LLC. Learn how we safeguard your data, enforce 100% client IP protection, and comply with GDPR, CCPA, and ISO 27001 standards.",
    defaultKeywords: "Leapsofts privacy policy, enterprise data protection, GDPR compliance software company, CCPA CPRA privacy rights, client IP ownership, zero trust data security, software engineering confidentiality NDA Dubai US",
    canonicalUrl: "https://www.leapsofts.com/privacy-policy",
  });
}

const tableOfContents = [
  { id: 'section-scope', label: '1. Scope & Entity Overview' },
  { id: 'section-collection', label: '2. Information We Collect' },
  { id: 'section-cookies', label: '3. Cookies & Tracking Technologies' },
  { id: 'section-legal-bases', label: '4. Legal Bases for Processing' },
  { id: 'section-usage', label: '5. How We Use Personal Data' },
  { id: 'section-client-ip', label: '6. Client Code & IP Protection' },
  { id: 'section-gdpr', label: '7. GDPR & European Rights' },
  { id: 'section-ccpa', label: '8. California Rights (CCPA / CPRA)' },
  { id: 'section-retention', label: '9. Data Retention & Erasure' },
  { id: 'section-subprocessors', label: '10. Sub-processors & Transfers' },
  { id: 'section-security', label: '11. Zero-Trust Security Standards' },
  { id: 'section-children', label: '12. Children’s Privacy' },
  { id: 'section-contact', label: '13. DPO & Contact Information' },
];

const guarantees = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Zero Data Selling',
    desc: 'We never sell, rent, or monetize your personal data or project briefs to third parties.',
  },
  {
    icon: <Lock size={20} />,
    title: '100% Client IP Protection',
    desc: 'All custom software, schemas, and models developed belong strictly to you under mutual NDA.',
  },
  {
    icon: <Server size={20} />,
    title: 'Zero-Trust Encryption',
    desc: 'TLS 1.3 in-transit and AES-256 at-rest encryption enforced across all communication channels.',
  },
  {
    icon: <Scale size={20} />,
    title: 'Global Privacy Rights',
    desc: 'Full compliance mechanisms for GDPR, UK GDPR, and California CPRA access and erasure requests.',
  },
];

const retentionData = [
  {
    category: 'Consultation & Inbound Inquiries',
    dataTypes: 'Name, corporate email, phone number, project brief',
    retention: '3 years from last interaction, or immediately upon deletion request',
    purpose: 'Client onboarding, strategy sessions, and commercial communications',
  },
  {
    category: 'Active Client Project Data',
    dataTypes: 'Contractual communications, billing records, architectural diagrams',
    retention: '7 years following project completion (statutory legal/tax obligations)',
    purpose: 'Contract fulfillment, audit trails, and tax compliance',
  },
  {
    category: 'Technical Telemetry & Analytics',
    dataTypes: 'Anonymized IP, browser type, device metadata, interaction metrics',
    retention: '14 months (rolling basis via privacy-first telemetry)',
    purpose: 'Site optimization, DDoS mitigation, and performance monitoring',
  },
  {
    category: 'Cookie Consent Preferences',
    dataTypes: 'Consent token, timestamp, selected category flags',
    retention: '12 months (re-prompted annually per ePrivacy Directive)',
    purpose: 'Compliance audit proof and interface preference preservation',
  },
];

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'October 2026';
  const effectiveDate = 'October 2026';
  const [activeId, setActiveId] = useState<string>('section-scope');

  useEffect(() => {
    const handleScrollSpy = () => {
      // 1. Detect if the user reached the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom && tableOfContents.length > 0) {
        setActiveId(tableOfContents[tableOfContents.length - 1].id);
        return;
      }

      // 2. Calculate dominant section in the viewport reading zone
      const viewportTop = 110; // directly beneath floating navbar
      const viewportBottom = window.innerHeight;
      let maxVisibleScore = -1;
      let dominantId = tableOfContents[0].id;

      for (const item of tableOfContents) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        // Calculate vertical overlap with the active viewport window
        const visibleTop = Math.max(rect.top, viewportTop);
        const visibleBottom = Math.min(rect.bottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > 0) {
          // Boost sections whose header is in the natural reading zone (upper-middle viewport)
          const isHeaderInReadingZone =
            rect.top >= viewportTop - 50 && rect.top <= window.innerHeight * 0.55;
          const score = visibleHeight + (isHeaderInReadingZone ? 250 : 0);

          if (score > maxVisibleScore) {
            maxVisibleScore = score;
            dominantId = item.id;
          }
        }
      }

      if (maxVisibleScore > 0) {
        setActiveId(dominantId);
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Leapsofts Enterprise Software LLC',
    url: 'https://www.leapsofts.com/privacy-policy',
    description:
      'Official Privacy Policy and Data Governance standards of Leapsofts Enterprise Software LLC.',
    publisher: {
      '@type': 'Organization',
      name: 'Leapsofts',
      url: 'https://www.leapsofts.com',
      logo: 'https://www.leapsofts.com/logo/Leap-soft-01.png',
    },
    dateModified: '2026-10-01',
    datePublished: '2021-01-01',
  };

  return (
    <div className={styles.pageContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className={styles.innerWrap}>
        {/* ==========================================================================
            Hero Section
            ========================================================================== */}
        <header className={styles.hero}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <ChevronRight size={14} />
            <span>Legal</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)' }}>Privacy Policy</span>
          </nav>

          <div className={styles.badge}>
            <ShieldCheck size={14} />
            Enterprise Data Protection & Compliance
          </div>

          <h1 className={styles.title}>
            Privacy Policy & <span className={styles.titleGradient}>Data Protection Standards</span>
          </h1>

          <p className={styles.subtitle}>
            Leapsofts Enterprise Software LLC (&quot;Leapsofts&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to the highest standards of data privacy, regulatory compliance, and client confidentiality. This comprehensive policy details how we collect, process, protect, and retain information across our web applications, engineering consultations, and managed client environments in accordance with the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA), and international privacy frameworks.
          </p>

          <div className={styles.metaStrip}>
            <div className={styles.metaChip}>
              <Clock size={14} />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className={styles.metaChip}>
              <Globe size={14} />
              <span>Jurisdictions: Global (UAE • USA • EU • UK)</span>
            </div>
            <div className={styles.metaChip}>
              <Mail size={14} />
              <span>DPO: privacy@leapsofts.com</span>
            </div>
          </div>
        </header>

        {/* ==========================================================================
            Guarantees Ribbon
            ========================================================================== */}
        <div className={styles.guaranteesGrid}>
          {guarantees.map((item, idx) => (
            <div key={idx} className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>{item.icon}</div>
              <h3 className={styles.guaranteeTitle}>{item.title}</h3>
              <p className={styles.guaranteeDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ==========================================================================
            Layout: Sidebar TOC + Main Content
            ========================================================================== */}
        <div className={styles.layout}>
          {/* Quick Navigation Sidebar */}
          <aside className={styles.sidebar} aria-label="Table of Contents">
            <h2 className={styles.sidebarTitle}>Policy Table of Contents</h2>
            <ul className={styles.tocList}>
              {tableOfContents.map((section) => (
                <li key={section.id} className={styles.tocItem}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleScrollTo(e, section.id)}
                    className={`${styles.tocLink} ${activeId === section.id ? styles.tocLinkActive : ''}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Area */}
          <main className={styles.contentArea}>
            {/* Section 1 */}
            <section id="section-scope" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>01</span>
                <h2 className={styles.sectionTitle}>Scope & Entity Overview</h2>
              </div>
              <p className={styles.bodyText}>
                This Privacy Policy applies to personal data collected through <strong>leapsofts.com</strong>, associated subdomains, marketing landing pages, software strategy discovery sessions, customer relationship channels, and direct communications with our technical delivery pods.
              </p>
              <p className={styles.bodyText}>
                <strong>Data Controller:</strong> Leapsofts Enterprise Software LLC, operating engineering hubs in Dubai, United Arab Emirates (HQ) and North America (USA). When you engage Leapsofts for bespoke custom software engineering, dedicated agile pod deployment, or cloud migrations, we serve as a <strong>Data Processor</strong> or service provider for your customer data, governed strictly by our mutual Master Services Agreement (MSA) and Data Processing Addendum (DPA).
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-collection" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>02</span>
                <h2 className={styles.sectionTitle}>Information We Collect</h2>
              </div>
              <p className={styles.bodyText}>
                We collect personal information directly from you, automatically through your browser interaction, and from third-party professional channels when you request technical advisory services:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Consultation & Contact Details:</strong> When you submit a project inquiry, strategy session booking, or contact form, we collect your full name, corporate email address, telephone number, job title, company name, geographic territory, project roadmap details, and approximate investment parameters.
                </li>
                <li>
                  <strong>Mutual Non-Disclosure Agreement (NDA) Information:</strong> Authorized corporate signatory name, corporate entity registration numbers, and legal office addresses necessary to execute binding confidentiality agreements prior to technical code reviews.
                </li>
                <li>
                  <strong>Technical Device & Telemetry Data:</strong> IP address (anonymized at collection boundary), browser type, language settings, operating system, referring URL, time zone, and navigational telemetry across our service pages.
                </li>
                <li>
                  <strong>Recruitment & Talent Data:</strong> Resumes, code portfolio URLs (e.g. GitHub), professional references, and employment histories submitted when applying for engineering positions within our global agile squads.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-cookies" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>03</span>
                <h2 className={styles.sectionTitle}>Cookies & Tracking Technologies</h2>
              </div>
              <p className={styles.bodyText}>
                We deploy strictly necessary cookies to ensure secure session authentication, routing, and theme persistence. With your affirmative consent, we also deploy performance and analytics cookies to measure aggregated site velocity and user experience patterns.
              </p>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <CheckCircle2 size={16} />
                  <span>Privacy-First Cookie Architecture</span>
                </div>
                <p className={styles.calloutText}>
                  Analytics cookies are disabled by default until you click &quot;Accept&quot; on our consent banner. You can review our full disclosure and modify your active toggles at any time by visiting our dedicated{' '}
                  <Link to="/cookies-policy" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>
                    Cookies Policy
                  </Link>{' '}
                  or clicking the &quot;Cookie Settings&quot; option in our website footer.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-legal-bases" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>04</span>
                <h2 className={styles.sectionTitle}>Legal Bases for Processing (GDPR)</h2>
              </div>
              <p className={styles.bodyText}>
                Under Article 6 of the General Data Protection Regulation (GDPR), Leapsofts processes personal data exclusively under legitimate legal justifications:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Performance of a Contract (Art. 6(1)(b)):</strong> Processing necessary to fulfill obligations under engineering contracts, execute statements of work (SOW), and deliver agreed-upon software milestones.
                </li>
                <li>
                  <strong>Legitimate Interests (Art. 6(1)(f)):</strong> Processing necessary to maintain website cybersecurity, prevent distributed denial-of-service (DDoS) attacks, detect fraud, and communicate directly with enterprise prospects requesting technical advisory.
                </li>
                <li>
                  <strong>Consent (Art. 6(1)(a)):</strong> For non-essential tracking cookies and marketing newsletters, where you have granted explicit, freely given, and revocable consent.
                </li>
                <li>
                  <strong>Legal Obligation (Art. 6(1)(c)):</strong> Retaining financial records, tax disclosures, and anti-money laundering (AML) compliance documentation mandated by applicable corporate regulations.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-usage" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>05</span>
                <h2 className={styles.sectionTitle}>How We Use Personal Data</h2>
              </div>
              <p className={styles.bodyText}>
                We use collected information solely for professional, transparent business purposes:
              </p>
              <ul className={styles.bulletList}>
                <li>Delivering high-velocity technical scoping, architecture proposals, and MVP project timelines.</li>
                <li>Conducting confidential engineering review calls with Senior Technical Leads and CTO advisors.</li>
                <li>Maintaining continuous continuous-integration (CI/CD) pipelines, staging preview environments, and client portals.</li>
                <li>Protecting our digital assets against unauthorized intrusion, credential stuffing, and bot scraping.</li>
                <li>Complying with statutory accounting, tax reporting, and corporate governance rules.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-client-ip" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>06</span>
                <h2 className={styles.sectionTitle}>Client Code & Intellectual Property Protection</h2>
              </div>
              <p className={styles.bodyText}>
                As an enterprise custom software engineering firm, code confidentiality is fundamental to our business model. We maintain strict organizational and technical guarantees regarding proprietary client assets:
              </p>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <Lock size={16} />
                  <span>100% IP Transfer & Zero Model Training</span>
                </div>
                <p className={styles.calloutText}>
                  Leapsofts guarantees that all source code, software architecture blueprints, database schemas, and custom AI model weights created for your organization remain 100% your proprietary Intellectual Property. <strong>We do not use client source code or internal project data to train public foundation models or third-party AI platforms.</strong> All developer pods work within isolated, access-controlled virtual environments.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-gdpr" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>07</span>
                <h2 className={styles.sectionTitle}>GDPR & European Data Subject Rights</h2>
              </div>
              <p className={styles.bodyText}>
                If you are a resident of the European Economic Area (EEA), United Kingdom (UK), or Switzerland, Chapter III of the GDPR grants you comprehensive data privacy rights:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Right of Access (Art. 15):</strong> Request a complete, machine-readable copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification (Art. 16):</strong> Request immediate correction of inaccurate or incomplete records.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;, Art. 17):</strong> Request deletion of your personal data where statutory retention grounds no longer apply.</li>
                <li><strong>Right to Restriction of Processing (Art. 18):</strong> Restrict active processing while accuracy or legal disputes are investigated.</li>
                <li><strong>Right to Data Portability (Art. 20):</strong> Receive your personal data in a structured, commonly used CSV or JSON format.</li>
                <li><strong>Right to Object (Art. 21):</strong> Object at any time to processing based on legitimate interests or direct marketing.</li>
              </ul>
              <p className={styles.bodyText}>
                To exercise any of these rights, email our Data Protection Officer at{' '}
                <a href="mailto:privacy@leapsofts.com" style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}>
                  privacy@leapsofts.com
                </a>
                . We respond to verified requests within thirty (30) days without charge.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-ccpa" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>08</span>
                <h2 className={styles.sectionTitle}>California Privacy Rights (CCPA / CPRA)</h2>
              </div>
              <p className={styles.bodyText}>
                This section provides supplemental disclosures required by the California Consumer Privacy Act as amended by the California Privacy Rights Act (CPRA).
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Right to Know & Access:</strong> You may request the categories and specific pieces of personal information collected in the preceding 12 months.</li>
                <li><strong>Right to Delete:</strong> You have the right to request deletion of personal information collected directly from you.</li>
                <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal data.</li>
                <li>
                  <strong>No Sale or Sharing of Personal Information:</strong> Leapsofts does not &quot;sell&quot; or &quot;share&quot; personal information for cross-context behavioral advertising as defined by the CCPA/CPRA, and has not done so in the preceding 12 months.
                </li>
                <li><strong>Non-Discrimination:</strong> We will never discriminate, alter service pricing, or degrade quality if you exercise your California privacy rights.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-retention" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>09</span>
                <h2 className={styles.sectionTitle}>Data Retention & Erasure Schedule</h2>
              </div>
              <p className={styles.bodyText}>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or satisfy legal, audit, accounting, and security obligations:
              </p>
              <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Data Elements</th>
                      <th>Retention Window</th>
                      <th>Primary Justification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionData.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.category}</strong></td>
                        <td>{row.dataTypes}</td>
                        <td>{row.retention}</td>
                        <td>{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-subprocessors" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>10</span>
                <h2 className={styles.sectionTitle}>Sub-processors & International Transfers</h2>
              </div>
              <p className={styles.bodyText}>
                To host our web applications and provide enterprise-grade reliability, we engage vetted third-party sub-processors adhering to stringent security benchmarks:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Vercel Inc. (USA):</strong> Edge hosting, serverless execution, and application distribution.</li>
                <li><strong>Amazon Web Services (AWS) & Microsoft Azure:</strong> Secure cloud compute, isolated database clusters, and backup storage.</li>
                <li><strong>Sanity.io:</strong> Headless content management infrastructure with SOC 2 compliance.</li>
              </ul>
              <p className={styles.bodyText}>
                When personal data is transferred across international borders outside the EEA or UK, we enforce the European Commission’s Standard Contractual Clauses (SCCs), UK International Data Transfer Agreements (IDTAs), and equivalent cross-border data protection safeguards.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-security" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>11</span>
                <h2 className={styles.sectionTitle}>Zero-Trust Security Architecture</h2>
              </div>
              <p className={styles.bodyText}>
                We implement comprehensive technical and organizational safeguards engineered to protect data against unauthorized disclosure, alteration, or exfiltration:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Cryptographic Standards:</strong> All external web traffic is enforced over TLS 1.3 encryption. Stored databases and confidential backups are encrypted with AES-256.</li>
                <li><strong>Least-Privilege Access Controls:</strong> Strict role-based access control (RBAC), multi-factor authentication (MFA), and zero-trust internal perimeter access.</li>
                <li><strong>Automated Vulnerability Audits:</strong> Continuous static application security testing (SAST), software dependency auditing, and regular penetration testing.</li>
                <li><strong>Incident Response & Notification:</strong> In the unlikely event of a verified data breach involving personal data, we notify affected individuals and regulatory authorities within 72 hours in accordance with GDPR Article 33.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="section-children" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>12</span>
                <h2 className={styles.sectionTitle}>Children’s Privacy</h2>
              </div>
              <p className={styles.bodyText}>
                Our website and engineering services are exclusively directed to commercial enterprises, professionals, and individuals aged eighteen (18) and older. We do not knowingly collect or solicit personal data from minors under 16 years of age. If you believe a child has submitted personal data to us, contact us immediately at{' '}
                <a href="mailto:privacy@leapsofts.com" style={{ color: 'var(--color-primary-light)' }}>
                  privacy@leapsofts.com
                </a>{' '}
                and we will promptly delete the data from our active records.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-contact" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>13</span>
                <h2 className={styles.sectionTitle}>DPO Contact Information & Revisions</h2>
              </div>
              <p className={styles.bodyText}>
                We periodically update this Privacy Policy to reflect emerging legal regulations, evolving security frameworks, and architectural enhancements. Changes will be posted to this page with an updated &quot;Last Updated&quot; revision timestamp.
              </p>
              <p className={styles.bodyText}>
                For privacy inquiries, Data Subject Access Requests (DSAR), or questions regarding our data protection standards, please contact our Data Protection Officer:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Email:</strong> <a href="mailto:privacy@leapsofts.com" style={{ color: 'var(--color-primary-light)' }}>privacy@leapsofts.com</a></li>
                <li><strong>Legal Team:</strong> <a href="mailto:legal@leapsofts.com" style={{ color: 'var(--color-primary-light)' }}>legal@leapsofts.com</a></li>
                <li><strong>Global HQ (Dubai):</strong> Leapsofts Enterprise Software LLC, Dubai Silicon Oasis / Business Bay, Dubai, United Arab Emirates</li>
                <li><strong>Americas Hub:</strong> Leapsofts Operations, United States</li>
              </ul>
            </section>

            {/* Contact / NDA CTA Card */}
            <div className={styles.contactCtaCard}>
              <div className={styles.ctaTextGroup}>
                <h3>Need a Mutual NDA Before Sharing Your Project?</h3>
                <p>
                  We execute binding bilateral NDAs before discussing your technical architecture, codebases, or intellectual property.
                </p>
              </div>
              <Link to="/contact" className={styles.ctaBtn}>
                Request Confidential Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
