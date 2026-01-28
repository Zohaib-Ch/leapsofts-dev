import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

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
      { name: 'Strategic Partnerships', path: '/partners' },
      { name: 'Contact', path: '/#contact' },
    ],
    industries: [
      { name: 'Finance', path: '/industries/finance' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Mid-Sized Businesses', path: '/industries/mid-sized-businesses' },
      { name: 'Wholesale and Retail', path: '/industries/wholesale-retail' },
      { name: 'Education', path: '/industries/education' },
      { name: 'Construction', path: '/industries/construction' },
      { name: 'Entertainment', path: '/industries/entertainment' },
      { name: 'Real Estate', path: '/industries/real-estate' },
      { name: 'Transportation', path: '/industries/transportation' },
      { name: 'Energy', path: '/industries/energy' },
    ],
  };

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-main"]}>
          <div className={styles["footer-brand"]}>
          <Link to={'/'}>
            <img className={styles["footer-logo"]} src="/logo/Leap-soft-w.png" alt="" />
            </Link>
            <p className={styles["footer-description"]}>
              Transforming ideas into powerful software solutions. We build
              innovative products that help businesses thrive in the digital age.
            </p>
            <div className={styles["social-links"]}>
              <a href="#" aria-label="LinkedIn" className={styles["social-link"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className={styles["social-link"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className={styles["social-link"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
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
          <p>&copy; {currentYear} Leapsofts. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
