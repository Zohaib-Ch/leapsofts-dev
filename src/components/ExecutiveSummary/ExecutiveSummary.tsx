import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './ExecutiveSummary.module.css';

export interface SummaryDetail {
    label: string;
    value: string;
}

interface ExecutiveSummaryProps {
    title?: string;
    description: string;
    details: SummaryDetail[];
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
    title = "Executive summary",
    description,
    details
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className={styles.summarySection}>
            <div className={styles.container}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2 className={styles.title} variants={itemVariants}>
                        {title}
                    </motion.h2>

                    <motion.p className={styles.description} variants={itemVariants}>
                        {description}
                    </motion.p>

                    <div className={styles.detailsList}>
                        {details.map((detail, index) => (
                            <motion.div
                                key={index}
                                className={styles.detailItem}
                                variants={itemVariants}
                                whileHover={{ x: 6 }}
                            >
                                <span className={styles.detailKey}>
                                    {typeof detail.label === 'object' ? (detail.label as any)?.name || (detail.label as any)?.title || '' : detail.label}
                                </span>
                                <span className={styles.detailValue}>
                                    {typeof detail.value === 'object' ? (detail.value as any)?.name || (detail.value as any)?.title || '' : detail.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;
