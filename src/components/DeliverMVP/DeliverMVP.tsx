import React, { useState } from 'react';
import styles from './DeliverMVP.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface DeliverMVPItem {
    title: string;
    description: string;
}

export interface DeliverMVPProps {
    data: {
        label: string;
        title: string;
        accentText: string;
        description: string;
        items: DeliverMVPItem[];
    };
}

const DeliverMVP: React.FC<DeliverMVPProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <div className={styles.textContent}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={styles.label}
                        >
                            {data.label}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={styles.title}
                        >
                            {data.title} <span className={styles.accent}>{data.accentText}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={styles.description}
                        >
                            {data.description}
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={styles.readMoreBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className={styles.icon}
                            >
                                <ChevronDown size={18} />
                            </motion.span>
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.logoWrapper}
                    >
                        <img src="/logo/Leap-soft-01.png" alt="Leapsofts Logo" className={styles.logo} />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                            className={styles.dropdown}
                        >
                            <div className={styles.itemsGrid}>
                                {data.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={styles.item}
                                    >
                                        <div className={styles.shimmer}></div>
                                        <div className={styles.itemHeader}>
                                            <span className={styles.itemIcon}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <h3 className={styles.itemTitle}>{item.title}</h3>
                                        </div>
                                        <p className={styles.itemDescription}>{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default DeliverMVP;
