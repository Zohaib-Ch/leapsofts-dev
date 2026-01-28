import React from 'react';
import styles from './whyChooseUs.module.css';

export interface WhyChooseUsProps {
    subtitle?: string;
    title: string;
    items: string[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ subtitle, title, items }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {subtitle && (
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.subtitle}>{subtitle}</span>
                            <div className={styles.decoLine} />

                            {/* Optional: Add a small SVG wave if needed, closely matching the image */}
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" className="text-primary-light">
                                <path d="M0 6C2 2 4 2 6 6S10 10 12 6 16 2 18 6 22 10 24 6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <div className={styles.listContainer}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className={styles.numberWrapper}>
                                {index + 1}
                            </div>
                            <p className={styles.text}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
