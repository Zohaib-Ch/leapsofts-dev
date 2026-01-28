import React from 'react';
import styles from './figures.module.css';
import AnimatedCounter from '../../../components/AnimatedCounter/AnimatedCounter';

const highlightsData = [
    { number: 14, suffix: '', text: 'years delivering reliable, high-impact software solutions' },
    { number: 250, suffix: '', text: 'strong engineering team ready to scale your vision with speed and precision' },
    { number: 3, suffix: '', text: 'offices, led by our U.S. headquarters, supporting businesses nationwide' },
    { number: 150, suffix: '+', text: 'clients served, from Fortune 200 leaders to innovative startups' },
    { number: 94, suffix: '%', text: 'client retention thanks to consistent results and partnership focus' },
    { number: 8, suffix: '', text: 'months average time-to-market to deliver an MVP' },
];

const Figures: React.FC = () => {
    return (
        <section id="figures" className={styles.figuresSection}>
            <div className={styles.container}>
                <div className={styles.highlights}>
                    {highlightsData.map((item, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.glassCard}>
                                <span className={styles.statNumber}>
                                    <AnimatedCounter value={item.number} />{item.suffix}
                                </span>
                                <p className={styles.statText}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Figures;
