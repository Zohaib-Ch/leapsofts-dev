import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './IndustrySlider.module.css';

interface IndustrySliderProps {
  onIndustryClick?: (name: string) => void;
}

const IndustrySlider: React.FC<IndustrySliderProps> = ({ onIndustryClick }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const industries = [
    { name: 'Automotive', path: '/industries/automotive', icon: '/icons/industries/automotive-link.svg' },
    { name: 'Education', path: '/industries/education', icon: '/icons/industries/education-link.svg' },
    { name: 'Construction', path: '/industries/construction', icon: '/icons/industries/construction-link.svg' },
    { name: 'Finance', path: '/industries/finance', icon: '/icons/industries/finance-link.svg' },
    { name: 'Healthcare', path: '/industries/healthcare', icon: '/icons/industries/healthcare-link.svg' },
    { name: 'Energy', path: '/industries/energy', icon: '/icons/industries/energy-link.svg' },
    { name: 'Compliance', path: '/industries/compliance', icon: '/icons/industries/compliance-link.svg' },
    { name: 'Startups', path: '/industries/startups', icon: '/icons/industries/startup-link.svg' },
    { name: 'Mid-Sized Businesses', path: '/industries/mid-sized-businesses', icon: '/icons/industries/startup-link.svg' },
    { name: 'Wholesale and Retail', path: '/industries/wholesale-retail', icon: '/icons/industries/energy-link.svg' },
    { name: 'Entertainment', path: '/industries/entertainment', icon: '/icons/industries/finance-link.svg' },
    { name: 'Real Estate', path: '/industries/real-estate', icon: '/icons/industries/compliance-link.svg' },
    { name: 'Transportation', path: '/industries/transportation', icon: '/icons/industries/automotive-link.svg' },
  ];

  return (
    <section className={styles.sliderSection}>
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
            loop={true}
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
            {industries.map((industry, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
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