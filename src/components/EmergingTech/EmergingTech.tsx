import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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
            modules={[Autoplay]}
            spaceBetween={24}
            centeredSlides={false}
            grabCursor={true}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className={styles.swiper}
          >
            {data.items.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      {getIcon(item.icon)}
                    </div>
                    <span className={styles.stepBadge}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EmergingTech;
