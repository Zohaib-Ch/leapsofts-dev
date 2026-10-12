import React from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Code2,
  RefreshCw,
  Coins,
  ShieldCheck,
  Database,
  Cloud,
  Smartphone,
  CheckCircle2,
  BrainCircuit,
  Rocket,
  Layers,
  Sparkles,
} from 'lucide-react';
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

const getServiceIcon = (title: string, link: string) => {
  const text = (title + ' ' + link).toLowerCase();
  if (text.includes('cyber') || text.includes('security') || text.includes('threat')) return ShieldCheck;
  if (text.includes('fixed price') || text.includes('pricing') || text.includes('cost')) return Coins;
  if (text.includes('re-engineering') || text.includes('moderniz')) return RefreshCw;
  if (text.includes('custom') || text.includes('software')) return Code2;
  if (text.includes('data governance') || text.includes('compliance')) return Database;
  if (text.includes('data science') || text.includes('ai') || text.includes('intelligence')) return BrainCircuit;
  if (text.includes('cloud') || text.includes('devops') || text.includes('aws') || text.includes('azure')) return Cloud;
  if (text.includes('mobile') || text.includes('ios') || text.includes('android')) return Smartphone;
  if (text.includes('qa') || text.includes('quality') || text.includes('testing')) return CheckCircle2;
  if (text.includes('startup') || text.includes('mvp') || text.includes('launch')) return Rocket;
  if (text.includes('strategy') || text.includes('evolution')) return Sparkles;
  return Layers;
};

const RelatedServices: React.FC<RelatedServicesProps> = ({
  title = "Explore Related Engineering Capabilities",
  sectionLabel = "RELATED SERVICES",
  services,
}) => {
  if (!services || services.length === 0) return null;

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{sectionLabel}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.grid}>
          {services.map((item, index) => {
            const IconComponent = getServiceIcon(item.title, item.link);
            return (
              <Link key={index} to={item.link} className={styles.card}>
                {/* Holographic 1px Gradient Border */}
                <div className={styles.cardBorderGlow} />

                {/* Liquid Glass Shimmer Sheen */}
                <div className={styles.cardShimmer} />

                {/* Card Top: Icon Box & Step Capsule */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={24} className={styles.icon} />
                  </div>
                  <span className={styles.stepBadge}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>

                {/* Interactive Action Pill */}
                <div className={styles.actionPill}>
                  <span className={styles.pillText}>Explore Capability</span>
                  <div className={styles.arrowCircle}>
                    <ArrowRight size={15} className={styles.arrowIcon} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
