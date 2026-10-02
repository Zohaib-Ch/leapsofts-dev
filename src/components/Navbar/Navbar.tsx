import { useState, useEffect, useRef, memo } from 'react';
import Button from '../Button/Button';
import { Link, useLocation, useNavigate } from 'react-router';
import styles from './Navbar.module.css';
import {
  Code2,
  Laptop,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  Cloud,
  ShoppingBag,
  Layers,
  BrainCircuit,
  ShieldCheck,
  Users,
  Database,
  Server,
  CloudUpload,
  GitMerge,
  Cpu,
  Globe2,
  TrendingUp,
  Coins,
  Lightbulb,
  Sparkles,
  FileCode2,
  Building2,
  Activity,
  Briefcase,
  Store,
  GraduationCap,
  HardHat,
  Tv,
  Building,
  Truck,
  Zap,
  Car,
  FileCheck,
  Rocket,
  ChevronDown,
  Target,
  Handshake,
  Mail,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

interface ServiceItem {
  name: string;
  path: string;
  icon: any;
  desc?: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

interface IndustryItem {
  name: string;
  path: string;
  icon: any;
}

interface AboutItem {
  name: string;
  path: string;
  icon: any;
  desc?: string;
}

type ActiveDropdown = 'services' | 'industries' | 'about' | null;

const SERVICES_DATA: ServiceCategory[] = [
  {
    category: 'Product Engineering',
    items: [
      { name: 'Custom Software Development', path: '/services/custom-software-development', icon: Code2, desc: 'Bespoke enterprise platforms' },
      { name: 'Web App Development', path: '/services/web-app-development', icon: Laptop, desc: 'High-performance web apps' },
      { name: 'Mobile App Development', path: '/services/mobile-app-development', icon: Smartphone, desc: 'iOS, Android & Flutter apps' },
      { name: 'Application Re-Engineering', path: '/services/app-reengineering', icon: RefreshCw, desc: 'Legacy modernization' },
      { name: 'Quality Assurance', path: '/services/quality-assurance', icon: CheckCircle2, desc: 'Automated testing & QA' },
      { name: 'Salesforce', path: '/services/salesforce', icon: Cloud, desc: 'Custom CRM & Apex workflows' },
      { name: 'Shopify', path: '/services/shopify', icon: ShoppingBag, desc: 'Headless e-commerce solutions' },
      { name: 'ServiceNow', path: '/services/service-now', icon: Layers, desc: 'Enterprise ITSM automation' },
    ],
  },
  {
    category: 'Next Gen Services',
    items: [
      { name: 'Data Science & AI', path: '/services/data-science-ai', icon: BrainCircuit, desc: 'LLM & predictive analytics' },
      { name: 'Cyber Security', path: '/services/cyber-security', icon: ShieldCheck, desc: 'Zero-trust architecture' },
      { name: 'Business Process Outsourcing', path: '/services/business-process-outsourcing', icon: Users, desc: 'Managed operational pods' },
      { name: 'Data Governance', path: '/services/data-governance', icon: Database, desc: 'HIPAA & GDPR compliance' },
      { name: 'Dedicated Teams', path: '/services/dedicated-teams', icon: Users, desc: 'Agile squads on-demand' },
    ],
  },
  {
    category: 'Cloud Services',
    items: [
      { name: 'Cloud Engineering', path: '/services/cloud-engineering', icon: Server, desc: 'Multi-tenant cloud architecture' },
      { name: 'Cloud Migration', path: '/services/cloud-migration', icon: CloudUpload, desc: 'Zero-downtime database shift' },
      { name: 'DevOps', path: '/services/devops', icon: GitMerge, desc: 'CI/CD & Kubernetes pipelines' },
      { name: 'AWS', path: '/services/aws', icon: Cpu, desc: 'Serverless cloud infrastructure' },
      { name: 'Azure', path: '/services/azure', icon: Globe2, desc: 'Enterprise Microsoft cloud' },
    ],
  },
  {
    category: 'Solutions',
    items: [
      { name: 'Digital Evolution', path: '/services/digital-evolution', icon: TrendingUp, desc: 'Digital transformation strategy' },
      { name: 'Fixed Price', path: '/services/fixed-price', icon: Coins, desc: 'Predictable milestone pricing' },
      { name: 'Ideation Workshop', path: '/services/ideation-workshop', icon: Lightbulb, desc: 'Feasibility & scope mapping' },
      { name: 'Product Development Strategy', path: '/services/product-development-strategy', icon: Sparkles, desc: 'Market alignment & roadmap' },
      { name: 'Proof Of Concept Development', path: '/services/proof-of-concept-development', icon: FileCode2, desc: 'Rapid prototype validation' },
    ],
  },
  {
    category: 'Sales & Revenue Growth',
    items: [
      { name: 'Full-Cycle Sales Execution & AE', path: '/services/sales-execution-ae', icon: Target, desc: 'End-to-end sales handling from lead to signed deal' },
      { name: 'Outbound Demand Generation', path: '/services/outbound-demand-gen', icon: Rocket, desc: 'Proactive cold outreach & predictable pipeline' },
      { name: 'Paid Media & Performance Marketing', path: '/services/paid-media-performance', icon: TrendingUp, desc: 'Data-driven paid ads to capture demand' },
      { name: 'Inbound & Organic Growth', path: '/services/inbound-organic-growth', icon: Sparkles, desc: 'SEO, thought leadership & brand authority' },
      { name: 'Revenue Operations & Systems', path: '/services/revenue-operations-systems', icon: Zap, desc: 'CRM architecture & workflow automation' },
    ],
  },
];

const INDUSTRIES_DATA: IndustryItem[] = [
  { name: 'Finance', path: '/industries/finance', icon: Coins },
  { name: 'Healthcare', path: '/industries/healthcare', icon: Activity },
  { name: 'Mid-Sized Businesses', path: '/industries/mid-sized-businesses', icon: Briefcase },
  { name: 'Wholesale and Retail', path: '/industries/wholesale-retail', icon: Store },
  { name: 'EdTech', path: '/industries/edtech', icon: GraduationCap },
  { name: 'Construction', path: '/industries/construction', icon: HardHat },
  { name: 'Entertainment', path: '/industries/entertainment', icon: Tv },
  { name: 'Real Estate', path: '/industries/real-estate', icon: Building },
  { name: 'Transportation', path: '/industries/transportation', icon: Truck },
  { name: 'Energy', path: '/industries/energy', icon: Zap },
  { name: 'Automotive', path: '/industries/automotive', icon: Car },
  { name: 'Compliance', path: '/industries/compliance', icon: FileCheck },
  { name: 'Startups', path: '/industries/startups', icon: Rocket },
];

const ABOUT_DATA: AboutItem[] = [
  { name: 'About Leapsofts', path: '/about', icon: Building2, desc: 'Our journey & engineering ethos' },
  { name: 'Engineering Insights', path: '/blog', icon: Sparkles, desc: 'Articles & tech insights' },
  { name: 'Mission & Creed', path: '/about/mission', icon: Target, desc: 'Core vision & principles' },
  { name: 'Engineering Leadership', path: '/about/leadership', icon: Users, desc: 'Executive leadership team' },
  { name: 'Global Footprint & Compliance', path: '/about/global-footprint', icon: Globe2, desc: 'Regional hubs & security' },
  { name: 'Strategic Partnerships', path: '/partners', icon: Handshake, desc: 'Cloud & tech ecosystem' },
  { name: 'Contact Us', path: '/contact', icon: Mail, desc: 'Get in touch with our engineers' },
];

const Navbar = memo(() => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const scrollTicking = useRef(false);
  const scrollStateRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTicking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const shouldBeScrolled = currentScroll > 30;
          if (scrollStateRef.current !== shouldBeScrolled) {
            scrollStateRef.current = shouldBeScrolled;
            setIsScrolled(shouldBeScrolled);
          }
          if (currentScroll > 100) {
            setActiveDropdown(null);
          }
          scrollTicking.current = false;
        });
        scrollTicking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(`.${styles['mega-dropdown-shell']}`) &&
        !target.closest(`.${styles['nav-link']}`)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: 'services' | 'industries' | 'about') => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <>
      <nav className={`${styles['navbar']} ${isScrolled ? styles['scrolled'] : ''}`}>
        <div className={styles['nav-container']}>
          <Link to="/" className={styles['nav-logo']} onClick={closeDropdowns}>
            <img src="/logo/Leap-soft-01.png" width="100" height="100" alt="Leapsofts Logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className={styles['nav-links-desktop']}>
            <li>
              <button
                className={`${styles['nav-link']} ${activeDropdown === 'services' ? styles['active'] : ''}`}
                onClick={toggleDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
              >
                Services
                <ChevronDown className={`${styles['dropdown-arrow']} ${activeDropdown === 'services' ? styles['rotated'] : ''}`} size={14} />
              </button>
            </li>
            <li>
              <button
                className={`${styles['nav-link']} ${activeDropdown === 'industries' ? styles['active'] : ''}`}
                onClick={toggleDropdown('industries')}
                aria-expanded={activeDropdown === 'industries'}
              >
                Industries
                <ChevronDown className={`${styles['dropdown-arrow']} ${activeDropdown === 'industries' ? styles['rotated'] : ''}`} size={14} />
              </button>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${styles['nav-link']} ${location.startsWith('/projects') ? styles['active'] : ''}`}
                onClick={closeDropdowns}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <button
                className={`${styles['nav-link']} ${activeDropdown === 'about' ? styles['active'] : ''}`}
                onClick={toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                About Us
                <ChevronDown className={`${styles['dropdown-arrow']} ${activeDropdown === 'about' ? styles['rotated'] : ''}`} size={14} />
              </button>
            </li>
          </ul>

          <div className={styles['nav-cta']}>
            <Button
              text="Strategic Partnerships"
              color1="var(--color-primary)"
              color2="var(--color-primary-light)"
              className={styles['nav-btn-compact']}
              onClick={() => {
                closeDropdowns();
                navigate('/partners');
              }}
            />
          </div>

          <button
            className={`${styles['mobile-menu-btn']} ${isMobileMenuOpen ? styles['active'] : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Hardware-Accelerated Single Dropdown Shell */}
      <div className={styles['dropdown-container']}>
        <div className={`${styles['mega-dropdown-shell']} ${activeDropdown ? styles['open'] : ''}`}>
          <div className={styles['dropdown-content']}>
            {/* Services Tab Content */}
            {activeDropdown === 'services' && (
              <div className={styles['dropdown-tab-pane']} key="services">
                <div className={styles['services-grid']}>
                  {SERVICES_DATA.map((category, index) => (
                    <div key={index} className={styles['service-category']}>
                      <h4 className={styles['category-title']}>{category.category}</h4>
                      <ul className={styles['category-items']}>
                        {category.items.map((item, itemIndex) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className={`${styles['service-link']} ${location === item.path ? styles['active'] : ''}`}
                                onClick={closeDropdowns}
                              >
                                <div className={styles['service-link-icon']}>
                                  <ItemIcon size={15} />
                                </div>
                                <div className={styles['service-link-text']}>
                                  <span className={styles['service-link-title']}>{item.name}</span>
                                  {item.desc && <span className={styles['service-link-desc']}>{item.desc}</span>}
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industries Tab Content */}
            {activeDropdown === 'industries' && (
              <div className={styles['dropdown-tab-pane']} key="industries">
                <div className={styles['dropdown-header']}>
                  <div className={styles['dropdown-header-left']}>
                    <div className={styles['dropdown-header-icon']}>
                      <Building2 size={18} />
                    </div>
                    <h3>Industries We Serve</h3>
                  </div>
                  <span className={styles['dropdown-header-tag']}>Domain Expertise</span>
                </div>

                <div className={styles['industries-grid']}>
                  {INDUSTRIES_DATA.map((industry, index) => {
                    const IndIcon = industry.icon;
                    return (
                      <Link
                        key={index}
                        to={industry.path}
                        className={`${styles['industry-card']} ${location === industry.path ? styles['active'] : ''}`}
                        onClick={closeDropdowns}
                      >
                        <div className={styles['industry-card-icon']}>
                          <IndIcon size={18} />
                        </div>
                        <div className={styles['industry-card-info']}>
                          <span className={styles['industry-card-name']}>{industry.name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* About Tab Content */}
            {activeDropdown === 'about' && (
              <div className={styles['dropdown-tab-pane']} key="about">
                <div className={styles['dropdown-header']}>
                  <div className={styles['dropdown-header-left']}>
                    <div className={styles['dropdown-header-icon']}>
                      <Building2 size={18} />
                    </div>
                    <h3>Who We Are</h3>
                  </div>
                  <span className={styles['dropdown-header-tag']}>Company & Insights</span>
                </div>

                <div className={styles['about-grid']}>
                  {ABOUT_DATA.map((item, index) => {
                    const AboutIcon = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`${styles['industry-card']} ${location === item.path ? styles['active'] : ''}`}
                        onClick={closeDropdowns}
                      >
                        <div className={styles['industry-card-icon']}>
                          <AboutIcon size={18} />
                        </div>
                        <div className={styles['industry-card-info']}>
                          <span className={styles['industry-card-name']}>{item.name}</span>
                          {item.desc && <span className={styles['service-link-desc']}>{item.desc}</span>}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop Blur Overlay */}
      {activeDropdown && (
        <div
          className={styles['dropdown-overlay']}
          onClick={closeDropdowns}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`${styles['mobile-nav']} ${isMobileMenuOpen ? styles['open'] : ''}`}>
        <div className={styles['mobile-nav-content']}>
          {/* Services Accordion */}
          <div className={styles['mobile-accordion']}>
            <button
              className={`${styles['mobile-accordion-header']} ${mobileServicesOpen ? styles['active'] : ''}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown className={`${styles['accordion-arrow']} ${mobileServicesOpen ? styles['rotated'] : ''}`} size={16} />
            </button>
            <div className={`${styles['mobile-accordion-content-wrapper']} ${mobileServicesOpen ? styles['open'] : ''}`}>
              <div className={styles['mobile-accordion-content']}>
                {SERVICES_DATA.map((cat, idx) => (
                  <div key={idx} className={styles['mobile-category']}>
                    <h5 className={styles['mobile-category-title']}>{cat.category}</h5>
                    <ul className={styles['mobile-category-items']}>
                      {cat.items.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <li key={itemIdx}>
                            <Link
                              to={item.path}
                              className={`${styles['mobile-service-link']} ${location === item.path ? styles['active'] : ''}`}
                              onClick={closeMobileMenu}
                            >
                              <ItemIcon size={16} />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Accordion */}
          <div className={styles['mobile-accordion']}>
            <button
              className={`${styles['mobile-accordion-header']} ${mobileIndustriesOpen ? styles['active'] : ''}`}
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            >
              <span>Industries</span>
              <ChevronDown className={`${styles['accordion-arrow']} ${mobileIndustriesOpen ? styles['rotated'] : ''}`} size={16} />
            </button>
            <div className={`${styles['mobile-accordion-content-wrapper']} ${mobileIndustriesOpen ? styles['open'] : ''}`}>
              <div className={styles['mobile-accordion-content']}>
                <div className={styles['mobile-category-items']}>
                  {INDUSTRIES_DATA.map((ind, idx) => {
                    const IndIcon = ind.icon;
                    return (
                      <Link
                        key={idx}
                        to={ind.path}
                        className={`${styles['mobile-service-link']} ${location === ind.path ? styles['active'] : ''}`}
                        onClick={closeMobileMenu}
                      >
                        <IndIcon size={16} />
                        <span>{ind.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Link */}
          <Link to="/projects" className={styles['mobile-link']} onClick={closeMobileMenu}>
            <span>Case Studies</span>
            <ArrowRight size={16} />
          </Link>

          {/* About Accordion */}
          <div className={styles['mobile-accordion']}>
            <button
              className={`${styles['mobile-accordion-header']} ${mobileAboutOpen ? styles['active'] : ''}`}
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              <span>About Us</span>
              <ChevronDown className={`${styles['accordion-arrow']} ${mobileAboutOpen ? styles['rotated'] : ''}`} size={16} />
            </button>
            <div className={`${styles['mobile-accordion-content-wrapper']} ${mobileAboutOpen ? styles['open'] : ''}`}>
              <div className={styles['mobile-accordion-content']}>
                <div className={styles['mobile-category-items']}>
                  {ABOUT_DATA.map((ab, idx) => {
                    const AbIcon = ab.icon;
                    return (
                      <Link
                        key={idx}
                        to={ab.path}
                        className={`${styles['mobile-service-link']} ${location === ab.path ? styles['active'] : ''}`}
                        onClick={closeMobileMenu}
                      >
                        <AbIcon size={16} />
                        <span>{ab.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={styles['mobile-cta']}>
            <Button
              text="Strategic Partnerships"
              color1="var(--color-primary)"
              color2="var(--color-primary-light)"
              className={styles['nav-btn-compact']}
              onClick={() => {
                closeMobileMenu();
                navigate('/partners');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
