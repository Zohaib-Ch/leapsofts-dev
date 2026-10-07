import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import styles from './RelatedServices.module.css';

export interface RelatedServiceItem {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesProps {
  title?: string;
  sectionLabel?: string;
  services: RelatedServiceItem[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({
  title = "Explore Related Engineering Capabilities",
  sectionLabel = "RELATED SERVICES",
  services,
}) => {
  if (!services || services.length === 0) return null;

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{sectionLabel}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.grid}>
          {services.map((item, index) => (
            <Link key={index} to={item.link} className={styles.card}>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
              <div className={styles.cardLink}>
                <span>Learn More</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
