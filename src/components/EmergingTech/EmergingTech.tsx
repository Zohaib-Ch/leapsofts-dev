import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from './emergingTech.module.css';

/* ================= ICON MAPPING ================= */

const iconMap: Record<string, string> = {
  enterprise: '/icons/Emerging/bipiramida.svg',
  saas: '/icons/Emerging/sphere.svg',
  hipaa: '/icons/Emerging/health.svg',
  hippa: '/icons/Emerging/health.svg',
  ecommerce: '/icons/Emerging/diamond.svg',
  mobile: '/icons/Emerging/startup.svg',
  legacy: '/icons/Emerging/tetris.svg',
  thirdParty: '/icons/Emerging/tetris-2.svg',
  product: '/icons/Emerging/parallelepipeds.svg',
};

/* ================= TYPES ================= */

export interface TechItem {
  icon: string;
  title: string;
  description: string;
}

export interface EmergingTechProps {
  data: {
    label: string;
    titleAccent: string;
    titleMain: string;
    description: string;
    items: TechItem[];
  };
}

/* ================= COMPONENT ================= */

const EmergingTech: React.FC<EmergingTechProps> = ({ data }) => {
  const getIcon = (type: string) => {
    if (!type) return <img src={iconMap.enterprise} alt="icon" className={styles.icon} />;
    if (type.startsWith('/') || type.startsWith('http')) {
      return <img src={type} alt="icon" className={styles.icon} />;
    }
    const iconSrc = iconMap[type.toLowerCase()] || iconMap.enterprise;
    return <img src={iconSrc} alt={type} className={styles.icon} />;
  };

  // Provide seamless infinite buffer slides so Swiper linear flow never hitches
  const displayItems = useMemo(() => {
    if (!data?.items || data.items.length === 0) return [];
    if (data.items.length < 8) {
      return [...data.items, ...data.items, ...data.items];
    }
    return [...data.items, ...data.items];
  }, [data?.items]);

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{data.label}</span>
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>{data.titleAccent}</span>
            {data.titleMain}
          </h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={false}
            grabCursor={true}
            loop={true}
            loopAdditionalSlides={4}
            watchSlidesProgress={true}
            speed={7000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            allowTouchMove={true}
            className={styles.swiper}
          >
            {displayItems.map((item, index) => {
              const originalIndex = (index % data.items.length) + 1;
              return (
                <SwiperSlide key={index} className={styles.slide}>
                  <div className={styles.card}>
                    {/* Holographic Border Beam */}
                    <div className={styles.cardBorderGlow} />

                    {/* Liquid Glass Shimmer Sheen */}
                    <div className={styles.cardShimmer} />

                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        {getIcon(item.icon)}
                      </div>
                      <span className={styles.stepBadge}>
                        {String(originalIndex).padStart(2, '0')}
                      </span>
                    </div>

                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EmergingTech;
