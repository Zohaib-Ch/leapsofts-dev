import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close dropdowns on scroll
      if (window.scrollY > 100) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles['services-dropdown']}`) &&
        !target.closest(`.${styles['industries-dropdown']}`) &&
        !target.closest(`.${styles['nav-link']}`)) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const services = [
    {
      category: 'Product Engineering',
      items: [
        { name: 'Custom Software Development', path: '/services/custom-software-development' },
        { name: 'Web App Development', path: '/services/web-app-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Application Re-Engineering', path: '/services/app-reengineering' },
        { name: 'Quality Assurance', path: '/services/quality-assurance' },
        { name: 'Salesforce', path: '/services/salesforce' },
        { name: 'Shopify', path: '/services/shopify' },
        { name: 'ServiceNow', path: '/services/service-now' },
      ],
    },
    {
      category: 'Next Gen Services',
      items: [
        { name: 'Data Science & AI', path: '/services/data-science-ai' },
        { name: 'Cyber Security', path: '/services/cyber-security' },
        { name: 'Business Process Outsourcing', path: '/services/business-process-outsourcing' },
        { name: 'Data Governance', path: '/services/data-governance' },
        { name: 'Dedicated Teams', path: '/services/dedicated-teams' },
      ],
    },
    {
      category: 'Cloud Services',
      items: [
        { name: 'Cloud Engineering', path: '/services/cloud-engineering' },
        { name: 'Cloud Migration', path: '/services/cloud-migration' },
        { name: 'DevOps', path: '/services/devops' },
        { name: 'AWS', path: '/services/aws' },
        { name: 'Azure', path: '/services/azure' },
      ],
    },
    {
      category: 'Solutions',
      items: [
        { name: 'Digital Evolution', path: '/services/digital-evolution' },
        { name: 'Fixed Price', path: '/services/fixed-price' },
        { name: 'Ideation Workshop', path: '/services/ideation-workshop' },
        { name: 'Product Development Strategy', path: '/services/product-development-strategy' },
        { name: 'Proof Of Concept Development', path: '/services/proof-of-concept-development' },
      ],
    },
  ];

  const industries = [
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
  ];

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen((prev) => !prev);
    setIsIndustriesOpen(false);
  };

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsIndustriesOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const handleMobileServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileServicesOpen((prev) => !prev);
  };

  const handleMobileIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileIndustriesOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  return (
    <>
      <nav className={`${styles['navbar']} ${isScrolled ? styles['scrolled'] : ''}`}>
        <div className={styles['nav-container']}>
          <Link to="/" className={styles['nav-logo']}>
            <img src="/logo/Leap-soft-01.png" width="100" height="100" alt="Leapsofts" />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles['nav-links-desktop']}>
            <li>
              <button
                className={`${styles['nav-link']} ${isServicesOpen ? styles['active'] : ''}`}
                onClick={handleServicesClick}
              >
                Services
                <svg
                  className={`${styles['dropdown-arrow']} ${isServicesOpen ? styles['rotated'] : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <button
                className={`${styles['nav-link']} ${isIndustriesOpen ? styles['active'] : ''}`}
                onClick={handleIndustriesClick}
              >
                Industries
                <svg
                  className={`${styles['dropdown-arrow']} ${isIndustriesOpen ? styles['rotated'] : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/projects"
                className={styles['nav-link']}
                onClick={() => {
                  setIsServicesOpen(false);
                  setIsIndustriesOpen(false);
                }}
              >
                Case Studies
              </Link>
            </li>
            <li>
              {/* <Link to="/partners" className={styles['nav-link']}>
                Strategic Partnerships
              </Link> */}
            </li>
          </ul>

          <div className={styles['nav-cta']}>
            <Button text="Strategic Partnerships" color1="var(--color-primary)" color2="var(--color-primary-light)" onClick={() => navigate('/partners')} />
          </div>

          <button
            className={`${styles['mobile-menu-btn']} ${isMobileMenuOpen ? styles['active'] : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`${styles['mobile-nav']} ${isMobileMenuOpen ? styles['open'] : ''}`}>
        <div className={styles['mobile-nav-content']}>
          {/* Services Accordion */}
          <div className={styles['mobile-accordion']}>
            <button
              className={`${styles['mobile-accordion-header']} ${mobileServicesOpen ? styles['active'] : ''}`}
              onClick={handleMobileServicesClick}
            >
              <span>Services</span>
              <svg
                className={`${styles['accordion-arrow']} ${mobileServicesOpen ? styles['rotated'] : ''}`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`${styles['mobile-accordion-content']} ${mobileServicesOpen ? styles['open'] : ''}`}>
              {services.map((category, index) => (
                <div key={index} className={styles['mobile-category']}>
                  <h4 className={styles['mobile-category-title']}>{category.category}</h4>
                  <ul className={styles['mobile-category-items']}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`${styles['mobile-service-link']} ${location === item.path ? styles['active'] : ''}`}
                          onClick={closeMobileMenu}
                        >
                          <span className={styles['mobile-link-arrow']}>›</span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Accordion */}
          <div className={styles['mobile-accordion']}>
            <button
              className={`${styles['mobile-accordion-header']} ${mobileIndustriesOpen ? styles['active'] : ''}`}
              onClick={handleMobileIndustriesClick}
            >
              <span>Industries</span>
              <svg
                className={`${styles['accordion-arrow']} ${mobileIndustriesOpen ? styles['rotated'] : ''}`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`${styles['mobile-accordion-content']} ${mobileIndustriesOpen ? styles['open'] : ''}`}>
              <ul className={styles['mobile-industries-list']}>
                {industries.map((industry, index) => (
                  <li key={index}>
                    <Link
                      to={industry.path}
                      className={`${styles['mobile-industry-link']} ${location === industry.path ? styles['active'] : ''}`}
                      onClick={closeMobileMenu}
                    >
                      <span className={styles['mobile-link-arrow']}>›</span>
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Links */}
          <Link to="/projects" className={styles['mobile-link']} onClick={closeMobileMenu}>
            Case Studies
          </Link>
          {/* <Link to="/partners" className={styles['mobile-link']} onClick={closeMobileMenu}>
            Strategic Partnerships
          </Link> */}

          {/* Get in Touch Button */}
          <div className={styles['mobile-cta']}>
            <Button
              text="Strategic Partnerships"
              color1="var(--color-primary)"
              color2="var(--color-primary-light)"
              onClick={() => {
                closeMobileMenu();
                navigate('/partners');
                console.log('Button clicked');
              }}
            />
          </div>
        </div>
      </div>

      {/* Services Dropdown (Desktop) */}
      <div className={`${styles['services-dropdown']} ${isServicesOpen ? styles['open'] : ''}`}>
        <div className={styles['dropdown-content']}>
          <div className={styles['dropdown-header']}>
            <h3>What we do</h3>
            <span className={styles['header-arrow']}>»</span>
          </div>

          <div className={styles['services-grid']}>
            {services.map((category, index) => (
              <div key={index} className={styles['service-category']}>
                <h4 className={styles['category-title']}>{category.category}</h4>
                <ul className={styles['category-items']}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={``}>
                      <Link
                        to={item.path}
                        className={`${styles['service-link']} ${location === item.path ? styles['active'] : ''}`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className={styles['link-arrow']}>›</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Dropdown (Desktop) */}
      <div className={`${styles['industries-dropdown']} ${isIndustriesOpen ? styles['open'] : ''}`}>
        <div className={styles['dropdown-content']}>
          <div className={styles['dropdown-header']}>
            <h3>Industries we serve</h3>
            <span className={styles['header-arrow']}>»</span>
          </div>

          <div className={styles['industries-grid']}>
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.path}
                className={`${styles['industry-link']} ${location === industry.path ? styles['active'] : ''}`}
                onClick={() => setIsIndustriesOpen(false)}
              >
                <span className={styles['link-arrow']}>›</span>
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isServicesOpen || isIndustriesOpen) && (
        <div
          className={styles['dropdown-overlay']}
          onClick={() => {
            setIsServicesOpen(false);
            setIsIndustriesOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
