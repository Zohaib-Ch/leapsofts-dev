import { Link, useRouteLoaderData } from 'react-router';
import { useTheme } from '../../context/ThemeContext';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './Footer.module.css';
import { Linkedin, Twitter, Github } from 'lucide-react';
import type { SanitySiteSettings } from '../../sanity/types';

interface FooterProps {
  siteSettings?: SanitySiteSettings | null;
}

const Footer: React.FC<FooterProps> = ({ siteSettings: propsSettings }) => {
  const rootData = useRouteLoaderData<{ siteSettings?: SanitySiteSettings | null }>("root");
  const siteSettings = propsSettings || rootData?.siteSettings;
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { openSettings } = useCookieConsent();
  const footerLogo = theme === 'light' ? '/logo/Leap-soft-01.png' : '/logo/Leap-soft-w.png';

  const primaryPhone = siteSettings?.contactPhone || '+971 56 830 9734';
  const primaryEmail = siteSettings?.contactEmail || 'contact@leapsofts.com';
  const socialLinks = siteSettings?.socialLinks && siteSettings.socialLinks.length > 0
    ? siteSettings.socialLinks
    : [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/leapsofts/' },
        { platform: 'Twitter', url: 'https://twitter.com/leapsofts' },
        { platform: 'GitHub', url: 'https://github.com/leapsofts' },
      ];

  const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('linkedin')) return <Linkedin size={20} />;
    if (p.includes('twitter') || p.includes('x')) return <Twitter size={20} />;
    if (p.includes('github')) return <Github size={20} />;
    return null;
  };

  const footerLinks = {
    services: [
      { name: 'Custom Software Development', path: '/services/custom-software-development' },
      { name: 'Mobile App Development', path: '/services/mobile-app-development' },
      { name: 'Web App Development', path: '/services/web-app-development' },
      { name: 'Data Science & AI', path: '/services/data-science-ai' },
      { name: 'Cloud Engineering', path: '/services/cloud-engineering' },
      { name: 'DevOps & CI/CD', path: '/services/devops' },
      { name: 'Cyber Security', path: '/services/cyber-security' },
      { name: 'Dedicated Engineering Teams', path: '/services/dedicated-teams' },
    ],
    company: [
      { name: 'Case Studies', path: '/projects' },
      { name: 'Engineering Insights', path: '/blog' },
      { name: 'Strategic Partnerships', path: '/partners' },
      { name: 'Contact Us', path: '/contact' },
    ],
    industries: [
      { name: 'Finance', path: '/industries/finance' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Mid-Sized Businesses', path: '/industries/mid-sized-businesses' },
      { name: 'Wholesale and Retail', path: '/industries/wholesale-retail' },
      { name: 'EdTech', path: '/industries/edtech' },
      { name: 'Construction', path: '/industries/construction' },
      { name: 'Entertainment', path: '/industries/entertainment' },
      { name: 'Real Estate', path: '/industries/real-estate' },
      { name: 'Transportation', path: '/industries/transportation' },
      { name: 'Energy', path: '/industries/energy' },
      { name: 'Automotive', path: '/industries/automotive' },
      { name: 'Compliance', path: '/industries/compliance' },
      { name: 'Startups', path: '/industries/startups' },
    ],
  };

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-main"]}>
          <div className={styles["footer-brand"]}>
            <Link to="/">
              <img className={styles["footer-logo"]} src={footerLogo} alt="Leapsofts Enterprise Custom Software Development" />
            </Link>
            <div className={styles["footer-contact-info"]}>
              <div className={styles["contact-section"]}>
                <h5 className={styles["contact-label"]}>Visit</h5>
                <div className={styles["address-item"]}>
                  <p>EMPIRE HEIGHTS A Business Bay, Dubai, UAE</p>
                </div>
              </div>

              <div className={styles["contact-section"]}>
                <h5 className={styles["contact-label"]}>Call</h5>
                <div className={styles["call-grid"]}>
                  <div className={styles["call-item"]}>
                    <p className={styles["contact-detail"]}>{primaryPhone}</p>
                    <p className={styles["contact-sub-detail"]}>Mon-Fri from 9am to 5pm GST</p>
                  </div>
                  <div className={styles["call-item"]}>
                    <p className={styles["contact-detail"]}>+1 (409) 934-7944</p>
                    <p className={styles["contact-sub-detail"]}>Mon-Fri from 8am to 4pm CT</p>
                  </div>
                </div>
              </div>

              <div className={styles["contact-section"]}>
                <h5 className={styles["contact-label"]}>Email</h5>
                <div className={styles["email-group"]}>
                  <a href={`mailto:${primaryEmail}`} className={styles["contact-email"]}>
                    {primaryEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["footer-links-grid"]}>
            <div className={styles["footer-column"]}>
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles["footer-column"]}>
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles["footer-column"]}>
              <h4>Industries</h4>
              <ul>
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-bottom-info"]}>
            <p className={styles["copyright"]}>&copy; {currentYear} Leapsofts. All rights reserved.</p>
            <div className={styles["footer-legal-links"]}>
              <Link to="/privacy-policy" className={styles["legal-link"]}>Privacy Policy</Link>
              <span className={styles["legal-divider"]}>•</span>
              <Link to="/cookies-policy" className={styles["legal-link"]}>Cookies Policy</Link>
              <span className={styles["legal-divider"]}>•</span>
              <button
                type="button"
                onClick={openSettings}
                className={`${styles["legal-link"]} ${styles["legal-button"]}`}
              >
                Cookie Settings
              </button>
            </div>
          </div>
          <div className={styles["social-links"]}>
            {socialLinks.map((item, idx) => {
              const icon = getSocialIcon(item.platform);
              return (
                <a
                  key={item._key || idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["social-link"]}
                  aria-label={item.platform}
                >
                  {icon || item.platform}
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
