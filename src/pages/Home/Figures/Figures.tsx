import React from 'react';
import styles from './figures.module.css';
import AnimatedCounter from '../../../components/AnimatedCounter/AnimatedCounter';

const highlightsData = [
    { number: 21, suffix: '', text: 'years of engineering dependable, high-impact digital products' },
    { number: 250, suffix: '+', text: 'software specialists ready to scale your product vision with precision' },
    { number: 5, suffix: '', text: 'strategic offices globally, led by our UAE headquarters to support international scale' },
    { number: 150, suffix: '+', text: 'products launched across Fortune 200 enterprises and hyper-growth startups' },
    { number: 94, suffix: '%', text: 'client retention powered by sustained technical execution and clear communication' },
    { number: 3, suffix: '', text: 'months average timeline to deploy a fully-functional, market-ready MVP' },
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
