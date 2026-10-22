import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getSanityCaseStudies } from '../../sanity/queries';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './IndustrySlider.module.css';

interface IndustrySliderProps {
  onIndustryClick?: (name: string) => void;
  excludeIndustries?: string[];
}

const INDUSTRY_PATH_MAP: Record<string, string> = {
  'finance': '/industries/finance',
  'fintech': '/industries/finance',
  'healthcare': '/industries/healthcare',
  'automotive': '/industries/automotive',
  'edtech': '/industries/edtech',
  'education': '/industries/edtech',
  'construction': '/industries/construction',
  'compliance': '/industries/compliance',
  'forensics': '/industries/compliance',
  'energy': '/industries/energy',
  'startups': '/industries/startups',
  'mid-sized businesses': '/industries/mid-sized-businesses',
  'wholesale and retail': '/industries/wholesale-retail',
  'wholesale & retail': '/industries/wholesale-retail',
  'retail': '/industries/wholesale-retail',
  'ecommerce': '/industries/wholesale-retail',
  'fashiontech': '/industries/wholesale-retail',
  'entertainment': '/industries/entertainment',
  'real estate': '/industries/real-estate',
  'realestate': '/industries/real-estate',
  'transportation': '/industries/transportation',
  'ai & automation': '/services/data-science-ai',
  'ai-automation': '/services/data-science-ai',
  'project-industry-0': '/industries/automotive',
  'project-industry-2': '/industries/healthcare',
  'project-industry-4': '/industries/construction',
  'project-industry-5': '/industries/energy',
  'project-industry-6': '/industries/compliance',
  'project-industry-7': '/industries/startups',
  'project-industry-8': '/industries/edtech',
  'project-industry-9': '/industries/compliance',
  'project-industry-10': '/industries/finance',
  'project-industry-11': '/industries/transportation',
  'project-industry-12': '/industries/wholesale-retail',
  'project-industry-13': '/services/data-science-ai',
};

const resolveIndustryPath = (name?: string, rawPath?: string): string => {
  const cleanName = (name || '').toLowerCase().trim();
  if (INDUSTRY_PATH_MAP[cleanName]) return INDUSTRY_PATH_MAP[cleanName];

  const cleanPath = (rawPath || '').toLowerCase().trim().replace(/^\/industries\//, '').replace(/^\//, '');
  if (INDUSTRY_PATH_MAP[cleanPath]) return INDUSTRY_PATH_MAP[cleanPath];

  if (cleanName.includes('finance') || cleanName.includes('fintech')) return '/industries/finance';
  if (cleanName.includes('health')) return '/industries/healthcare';
  if (cleanName.includes('auto')) return '/industries/automotive';
  if (cleanName.includes('edtech') || cleanName.includes('education')) return '/industries/edtech';
  if (cleanName.includes('construction')) return '/industries/construction';
  if (cleanName.includes('compliance') || cleanName.includes('forensic')) return '/industries/compliance';
  if (cleanName.includes('energy')) return '/industries/energy';
  if (cleanName.includes('startup')) return '/industries/startups';
  if (cleanName.includes('mid-sized') || cleanName.includes('business')) return '/industries/mid-sized-businesses';
  if (cleanName.includes('wholesale') || cleanName.includes('retail') || cleanName.includes('commerce')) return '/industries/wholesale-retail';
  if (cleanName.includes('entertain')) return '/industries/entertainment';
  if (cleanName.includes('real') || cleanName.includes('estate')) return '/industries/real-estate';
  if (cleanName.includes('transport')) return '/industries/transportation';
  if (cleanName.includes('ai') || cleanName.includes('automation')) return '/services/data-science-ai';

  return '/industries/healthcare';
};

const defaultIndustries = [
  { name: 'Finance', path: '/industries/finance', icon: '/icons/industries/finance-link.svg' },
  { name: 'Healthcare', path: '/industries/healthcare', icon: '/icons/industries/healthcare-link.svg' },
  { name: 'Automotive', path: '/industries/automotive', icon: '/icons/industries/automotive-link.svg' },
  { name: 'EdTech', path: '/industries/edtech', icon: '/icons/industries/education-link.svg' },
  { name: 'Construction', path: '/industries/construction', icon: '/icons/industries/construction-link.svg' },
  { name: 'Compliance', path: '/industries/compliance', icon: '/icons/industries/compliance-link.svg' },
  { name: 'Energy', path: '/industries/energy', icon: '/icons/industries/energy-link.svg' },
  { name: 'Startups', path: '/industries/startups', icon: '/icons/industries/startup-link.svg' },
  { name: 'Mid-Sized Businesses', path: '/industries/mid-sized-businesses', icon: '/icons/industries/startup-link.svg' },
  { name: 'Wholesale and Retail', path: '/industries/wholesale-retail', icon: '/icons/industries/energy-link.svg' },
  { name: 'Entertainment', path: '/industries/entertainment', icon: '/icons/industries/finance-link.svg' },
  { name: 'Real Estate', path: '/industries/real-estate', icon: '/icons/industries/compliance-link.svg' },
  { name: 'Transportation', path: '/industries/transportation', icon: '/icons/industries/automotive-link.svg' },
  { name: 'FinTech', path: '/industries/finance', icon: '/icons/industries/finance-link.svg' },
  { name: 'Forensics', path: '/industries/compliance', icon: '/icons/industries/energy-link.svg' },
  { name: 'AI & Automation', path: '/services/data-science-ai', icon: '/icons/industries/finance-link.svg' },
];

const IndustrySlider: React.FC<IndustrySliderProps> = ({ onIndustryClick, excludeIndustries = [] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sanityCaseStudies, setSanityCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    getSanityCaseStudies().then((data) => {
      if (data && data.length > 0) {
        setSanityCaseStudies(data);
      }
    });
  }, []);

  const allIndustries = React.useMemo(() => {
    const list = defaultIndustries.map(item => ({
      ...item,
      path: resolveIndustryPath(item.name, item.path)
    }));

    if (sanityCaseStudies && sanityCaseStudies.length > 0) {
      const sanityIndustries = sanityCaseStudies.filter(cs => cs.type === 'industry');
      sanityIndustries.forEach((sanityItem) => {
        const name = sanityItem.brand?.name || sanityItem.title;
        if (!name) return;

        const resolvedPath = resolveIndustryPath(name, sanityItem.slug);
        const existingIndex = list.findIndex(item => item.name.toLowerCase().trim() === name.toLowerCase().trim());
        const icon = sanityItem.brand?.logo || sanityItem.brand?.logoPreset || '/icons/industries/automotive-link.svg';

        if (existingIndex !== -1) {
          list[existingIndex] = {
            ...list[existingIndex],
            path: resolvedPath,
            icon: icon || list[existingIndex].icon,
          };
        } else {
          list.push({
            name: name,
            path: resolvedPath,
            icon: icon,
          });
        }
      });
    }

    return list;
  }, [sanityCaseStudies]);

  const filteredIndustries = excludeIndustries.length > 0
    ? allIndustries.filter((industry) => !excludeIndustries.includes(industry.name))
    : allIndustries;

  return (
    <section ref={sectionRef} className={`${styles.sliderSection} ${isVisible ? styles.revealed : ''}`}>
      <div className={styles.container}>
        <span className={styles.label}>INDUSTRIES WE WORK IN</span>

        <div className={styles.swiperWrapper}>
          <button ref={prevRef} className={`${styles.navButton} ${styles.prev}`}>
            <ChevronLeft />
          </button>

          <button ref={nextRef} className={`${styles.navButton} ${styles.next}`}>
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={filteredIndustries.length > 5}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className={styles.swiper}
          >
            {filteredIndustries.map((industry) => (
              <SwiperSlide key={industry.name} style={{ width: 'auto' }}>
                <Link
                  to={industry.path}
                  className={styles.industryCard}
                  onClick={(e) => {
                    if (onIndustryClick) {
                      e.preventDefault();
                      onIndustryClick(industry.name);
                    }
                  }}
                >
                  <img
                    src={industry.icon}
                    alt=""
                    className={styles.icon}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className={styles.name}>{industry.name}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IndustrySlider;