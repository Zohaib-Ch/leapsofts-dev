import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Custom Software Development', path: '/services/custom-software-development' },
      { name: 'Data Science & AI', path: '/services/data-science-ai' },
      { name: 'Cloud Engineering', path: '/services/cloud-engineering' },
      { name: 'Dedicated Teams', path: '/services/dedicated-teams' },
      { name: 'Product Development Strategy', path: '/services/product-development-strategy' },
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
              <img className={styles["footer-logo"]} src="/logo/Leap-soft-w.png" alt="" />
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
                    <p className={styles["contact-detail"]}>+971 56 830 9734</p>
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
                  <a href="mailto:contact@leapsofts.com" className={styles["contact-email"]}>
                    contact@leapsofts.com
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
          <p className={styles["copyright"]}>&copy; {currentYear} Leapsofts. All rights reserved.</p>
          <div className={styles["social-links"]}>
            <a
              href="https://www.linkedin.com/company/leapsofts/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
