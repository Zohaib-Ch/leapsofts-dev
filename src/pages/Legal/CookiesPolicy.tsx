import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { buildPageMeta } from '../../utils/seoHelper';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './CookiesPolicy.module.css';
import {
  Cookie,
  ShieldCheck,
  Lock,
  Settings2,
  CheckCircle2,
  Sliders,
  ChevronRight,
  Clock,
  Globe,
  ArrowRight,
  Server,
} from 'lucide-react';

export function meta() {
  return buildPageMeta({
    defaultTitle: "Cookies Policy & Tracking Transparency | Leapsofts",
    defaultDescription: "Understand how Leapsofts deploys cookies, local storage, and privacy-first web telemetry. Explore our complete cookie inventory and customize your preferences anytime.",
    defaultKeywords: "Leapsofts cookies policy, cookie consent GDPR, ePrivacy Directive cookies, website cookie inventory, cookie preferences manager, anonymous telemetry analytics",
    canonicalUrl: "https://www.leapsofts.com/cookies-policy",
  });
}

const tableOfContents = [
  { id: 'section-overview', label: '1. What Are Cookies?' },
  { id: 'section-deployment', label: '2. How We Deploy Cookies' },
  { id: 'section-consent', label: '3. Explicit Opt-In Consent' },
  { id: 'section-categories', label: '4. Cookie Categories' },
  { id: 'section-inventory', label: '5. Complete Cookie Inventory' },
  { id: 'section-telemetry', label: '6. Telemetry & Analytics' },
  { id: 'section-manage', label: '7. Managing Your Consent' },
  { id: 'section-browsers', label: '8. Browser-Level Controls' },
  { id: 'section-impact', label: '9. Impact of Disabling Cookies' },
  { id: 'section-contact', label: '10. Inquiries & DPO Contact' },
];

const guarantees = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Opt-In Consent First',
    desc: 'Analytics cookies are disabled by default until you affirmatively click Accept.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Zero Third-Party Trackers',
    desc: 'We never allow cross-site advertising networks, ad pixels, or data brokers on our domains.',
  },
  {
    icon: <Server size={20} />,
    title: 'Secure Transmission',
    desc: 'All persistent cookies are hardened with SameSite=Lax and Secure HTTPS transmission attributes.',
  },
  {
    icon: <Sliders size={20} />,
    title: 'Revoke Anytime',
    desc: 'Modify or withdraw your active consent anytime via the Cookie Settings modal or footer.',
  },
];

const cookieInventory = [
  {
    name: 'leapsofts_consent',
    provider: 'Leapsofts (First-Party)',
    category: 'Strictly Necessary',
    purpose: 'Stores your active cookie preferences and category consent flags across sessions.',
    expiry: '365 Days',
  },
  {
    name: 'leapsofts-theme',
    provider: 'Leapsofts (First-Party)',
    category: 'Functional',
    purpose: 'Stores your light or dark mode interface preference in LocalStorage to prevent screen flicker.',
    expiry: 'Persistent',
  },
  {
    name: '_va / @vercel/analytics',
    provider: 'Vercel Analytics',
    category: 'Analytics & Performance',
    purpose: 'Measures anonymized page load metrics, Core Web Vitals, and route transitions without storing PII.',
    expiry: '14 Months',
  },
  {
    name: 'session_routing',
    provider: 'Leapsofts (First-Party)',
    category: 'Strictly Necessary',
    purpose: 'Maintains state consistency during client-side route transitions and navigation tabs.',
    expiry: 'Session Only',
  },
];

const CookiesPolicy: React.FC = () => {
  const lastUpdated = 'October 2026';
  const { openSettings } = useCookieConsent();
  const [activeId, setActiveId] = useState<string>('section-overview');

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
    name: 'Cookies Policy | Leapsofts Enterprise Software LLC',
    url: 'https://www.leapsofts.com/cookies-policy',
    description: 'Official Cookies Policy and Web Telemetry Governance of Leapsofts.',
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
            <span style={{ color: 'var(--text-primary)' }}>Cookies Policy</span>
          </nav>

          <div className={styles.badge}>
            <Cookie size={14} />
            Cookie Governance & Telemetry Standards
          </div>

          <h1 className={styles.title}>
            Cookies Policy & <span className={styles.titleGradient}>Tracking Transparency</span>
          </h1>

          <p className={styles.subtitle}>
            Leapsofts Enterprise Software LLC (&quot;Leapsofts&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) believes in total transparency regarding how data is stored on your device. This policy details our use of HTTP cookies, local browser storage, and privacy-preserving performance telemetry across <strong>leapsofts.com</strong>, in accordance with the European Union ePrivacy Directive (Directive 2002/58/EC), the General Data Protection Regulation (GDPR), and international digital privacy frameworks.
          </p>

          <div className={styles.metaStrip}>
            <div className={styles.metaChip}>
              <Clock size={14} />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className={styles.metaChip}>
              <Globe size={14} />
              <span>Frameworks: ePrivacy • GDPR • CCPA</span>
            </div>
            <div className={styles.metaChip}>
              <ShieldCheck size={14} />
              <span>Default Stance: Opt-In for Non-Essential</span>
            </div>
          </div>
        </header>

        {/* Quick Interactive Consent Box */}
        <div className={styles.quickActionBox}>
          <div className={styles.quickActionText}>
            <h3>Manage Your Active Cookie Settings</h3>
            <p>
              You can inspect or adjust your category consents (Strictly Necessary, Analytics, Functional) at any time without leaving the page.
            </p>
          </div>
          <button
            type="button"
            className={styles.btnOpenSettings}
            onClick={openSettings}
          >
            <Settings2 size={16} />
            Open Cookie Preferences
          </button>
        </div>

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
            <section id="section-overview" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>01</span>
                <h2 className={styles.sectionTitle}>What Are Cookies & Local Storage?</h2>
              </div>
              <p className={styles.bodyText}>
                Cookies are small, cryptographically safe text files stored by your web browser onto your computer, tablet, or smartphone when you visit a website. They allow the server to remember your device, maintain security sessions, and retain your interface preferences across page visits.
              </p>
              <p className={styles.bodyText}>
                In addition to standard HTTP cookies, modern web applications utilize <strong>HTML5 LocalStorage</strong>. LocalStorage behaves similarly to cookies by persisting data locally within your browser, but with one critical distinction: LocalStorage data stays exclusively on your client device and is never automatically sent across the wire with every HTTP request. Leapsofts utilizes LocalStorage specifically to preserve your theme selection (dark mode vs. light mode) to eliminate visual screen flashes during navigation.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-deployment" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>02</span>
                <h2 className={styles.sectionTitle}>How We Deploy Cookies</h2>
              </div>
              <p className={styles.bodyText}>
                We categorize stored data by origin and lifecycle:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>First-Party Cookies:</strong> Set directly by the domain <code>leapsofts.com</code>. These are strictly used for core website functionality, security tokens, and consent persistence.
                </li>
                <li>
                  <strong>Session Cookies:</strong> Temporary tokens stored in memory that expire immediately upon closing your browser window.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain stored on your device until their designated expiration date (up to a maximum of 12 months) or until you manually clear your browser cache.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-consent" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>03</span>
                <h2 className={styles.sectionTitle}>Explicit Opt-In Consent Framework</h2>
              </div>
              <p className={styles.bodyText}>
                In strict compliance with the European Court of Justice (CJEU) Planet49 ruling and the ePrivacy Directive, Leapsofts enforces an <strong>affirmative, prior opt-in requirement</strong> for all non-essential cookies:
              </p>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <CheckCircle2 size={16} />
                  <span>No Pre-Ticked Boxes & No Forced Tracking</span>
                </div>
                <p className={styles.calloutText}>
                  When you first visit our site, our consent banner gives you equal, unhindered choices: <strong>&quot;Accept&quot;</strong> or <strong>&quot;Decline&quot;</strong>. If you click Decline, no analytics cookies are placed on your machine. Furthermore, we never use dark patterns, countdown timers, or cookie walls that restrict your ability to read our research, case studies, or service pages.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-categories" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>04</span>
                <h2 className={styles.sectionTitle}>Categories of Cookies We Use</h2>
              </div>
              <p className={styles.bodyText}>
                We classify cookies into three distinct functional tiers:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>1. Strictly Necessary Cookies (Exempt from Consent):</strong> Indispensable for the website to function. They enable secure HTTPS communication, CSRF protection, and record whether you have accepted or declined non-essential cookies. You cannot disable these via our settings tool, though you can block them via your browser (which may disrupt site navigation).
                </li>
                <li>
                  <strong>2. Analytics & Performance Cookies (Optional):</strong> Help us understand aggregated traffic volume, popular service verticals, and page response speeds. All telemetry is aggregated and cannot be used to isolate individual personal identities.
                </li>
                <li>
                  <strong>3. Functional & Experience Cookies (Optional):</strong> Remember your user-interface customizations (such as defaulting to light or dark mode) across subsequent visits so you do not have to reconfigure them each time.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-inventory" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>05</span>
                <h2 className={styles.sectionTitle}>Complete Cookie Inventory</h2>
              </div>
              <p className={styles.bodyText}>
                The following table provides an exhaustive, audited list of cookies and local storage tokens utilized across our web application:
              </p>
              <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Identifier</th>
                      <th>Provider</th>
                      <th>Category</th>
                      <th>Operational Purpose</th>
                      <th>Lifespan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieInventory.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className={styles.cookieBadge}>{item.name}</span>
                        </td>
                        <td>{item.provider}</td>
                        <td><strong>{item.category}</strong></td>
                        <td>{item.purpose}</td>
                        <td>{item.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-telemetry" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>06</span>
                <h2 className={styles.sectionTitle}>Telemetry & Analytics Governance</h2>
              </div>
              <p className={styles.bodyText}>
                Our performance metrics are powered by <strong>Vercel Analytics</strong>. Unlike legacy tracking platforms that rely on persistent invasive device fingerprinting, Vercel Analytics operates on privacy-preserving edge calculations:
              </p>
              <ul className={styles.bulletList}>
                <li>No cross-site tracking across external domains or internet browsing histories.</li>
                <li>Full compliance with GDPR without logging unmasked personal IP addresses.</li>
                <li>Zero data sharing or monetization with third-party advertising exchanges.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-manage" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>07</span>
                <h2 className={styles.sectionTitle}>Managing & Revoking Consent Anytime</h2>
              </div>
              <p className={styles.bodyText}>
                Under GDPR Article 7(3), you have the absolute legal right to withdraw your consent as easily as it was granted. You do not need to delete your browser history to adjust your preferences on Leapsofts:
              </p>
              <p className={styles.bodyText}>
                Simply click the <strong>&quot;Cookie Settings&quot;</strong> button located in the footer of any page on our website, or click the button below. This instantly reopens our interactive preferences modal where you can toggle individual categories on or off:
              </p>
              <div style={{ marginTop: '16px', marginBottom: '20px' }}>
                <button
                  type="button"
                  className={styles.btnOpenSettings}
                  onClick={openSettings}
                >
                  <Settings2 size={16} />
                  Adjust Preferences Now
                </button>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-browsers" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>08</span>
                <h2 className={styles.sectionTitle}>Browser-Level Cookie Controls</h2>
              </div>
              <p className={styles.bodyText}>
                In addition to our on-site controls, every major modern web browser provides comprehensive settings allowing you to inspect, block, or delete cookies globally across all domains:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies → Block third-party cookies or Clear browsing data.
                </li>
                <li>
                  <strong>Apple Safari:</strong> Settings → Safari → Privacy & Security → Block All Cookies or Prevent Cross-Site Tracking.
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection (Strict / Standard).
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions → Manage and delete cookies and site data.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-impact" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>09</span>
                <h2 className={styles.sectionTitle}>Impact of Disabling Cookies</h2>
              </div>
              <p className={styles.bodyText}>
                Declining optional cookies on Leapsofts will <strong>not</strong> restrict your access to any public pages, architectural whitepapers, service overviews, case studies, or contact channels.
              </p>
              <p className={styles.bodyText}>
                The only operational effect is that interface customizations (such as your preferred dark or light theme) will revert to our standard system default upon page reload, and anonymous performance telemetry will not be collected during your session.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-contact" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>10</span>
                <h2 className={styles.sectionTitle}>Inquiries & Data Protection Contact</h2>
              </div>
              <p className={styles.bodyText}>
                For deeper details regarding how we process client data, enforce 100% intellectual property ownership, and uphold zero-trust security safeguards, please review our comprehensive{' '}
                <Link to="/privacy-policy" style={{ color: 'var(--color-primary-light)', fontWeight: 600, textDecoration: 'underline' }}>
                  Privacy Policy
                </Link>.
              </p>
              <p className={styles.bodyText}>
                If you have questions regarding our cookie governance or wish to contact our Data Protection Officer directly:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Email:</strong> <a href="mailto:privacy@leapsofts.com" style={{ color: 'var(--color-primary-light)' }}>privacy@leapsofts.com</a></li>
                <li><strong>Legal Officer:</strong> <a href="mailto:legal@leapsofts.com" style={{ color: 'var(--color-primary-light)' }}>legal@leapsofts.com</a></li>
                <li><strong>Headquarters:</strong> Leapsofts Enterprise Software LLC, Dubai Silicon Oasis / Business Bay, Dubai, United Arab Emirates</li>
              </ul>
            </section>

            {/* Contact / Consultation CTA */}
            <div className={styles.contactCtaCard}>
              <div className={styles.ctaTextGroup}>
                <h3>Have Questions About Enterprise Data Security?</h3>
                <p>
                  Schedule a confidential strategy call with our Senior Cloud Architects to discuss compliance, data governance, and custom engineering.
                </p>
              </div>
              <Link to="/contact" className={styles.ctaBtn}>
                Schedule Strategy Session
                <ArrowRight size={16} />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
