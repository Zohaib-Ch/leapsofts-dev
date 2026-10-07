import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './Partners.module.css';

export interface PartnersProps {
  label?: string;
  titleMain?: string;
  titleAccent?: string;
  titleEnd?: string;
  description?: string;
}

const Partners: React.FC<PartnersProps> = ({
  label = "GLOBAL ALLIANCES & CLIENT ECOSYSTEM",
  titleMain = "Trusted by pioneering startups & ",
  titleAccent = "industry leaders",
  titleEnd = ".",
  description = "Collaborating with certified cloud platforms and global enterprises to engineer mission-critical digital products."
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
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

  const logoFiles = [
    'Afirme.png',
    'Dewford.png',
    'digicars.png',
    'techadvancer.svg',
    'aa-logo.svg',
    'hpe.svg',
    'truper.svg',
    'joget.svg',
    'osorio.png',
    'cmolds.png',
    'ipmd-logo.png',
    'harris-paints.png',
    'JBreeden.png',
    'knife.jpg',
    'newDark.avif',
    'Instrat.png'
  ];

  return (
    <section ref={sectionRef} className={`${styles.sectionWrapper} ${isVisible ? styles.revealed : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
          </div>
          <h2 className={styles.title}>
            {titleMain?.trim()}{' '}
            <em>{titleAccent?.trim()}</em>
            {titleEnd}
          </h2>
          {description && (
            <p className={styles.subtitle}>{description}</p>
          )}
        </div>

        <div className={styles["partner-list"]}>
          <div className={styles["slider"]}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 70,
                },
              }}
              className={styles["swiper"]}
            >
              {logoFiles.map((partner, index) => (
                <SwiperSlide key={`${partner}-${index}`} className={styles["slide"]}>
                  <div className={styles["logo"]}>
                    <img
                      src={"/partner-logos/" + partner}
                      alt={partner.split('.')[0]}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;