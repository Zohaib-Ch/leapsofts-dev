import React from 'react';
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
    'knife.png',
    'newDark.avif',
    'Instrat.png'
  ];

  const getLogoWrapperClass = (partner: string) => {
    if (partner.includes('osorio')) return `${styles.logo} ${styles.logoOsorio}`;
    if (partner.includes('knife')) return `${styles.logo} ${styles.logoKnife}`;
    if (partner.includes('Instrat')) return `${styles.logo} ${styles.logoInstrat}`;
    return styles.logo;
  };

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
            <div className={styles["marqueeTrack"]}>
              {/* Primary Group */}
              <div className={styles["marqueeGroup"]}>
                {logoFiles.map((partner, index) => (
                  <div key={`partner-a-${index}`} className={getLogoWrapperClass(partner)}>
                    <img
                      src={"/partner-logos/" + partner}
                      alt={partner.split('.')[0]}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              {/* Dual Duplicate Group for Seamless 120fps Loop */}
              <div className={styles["marqueeGroup"]} aria-hidden="true">
                {logoFiles.map((partner, index) => (
                  <div key={`partner-b-${index}`} className={getLogoWrapperClass(partner)}>
                    <img
                      src={"/partner-logos/" + partner}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;