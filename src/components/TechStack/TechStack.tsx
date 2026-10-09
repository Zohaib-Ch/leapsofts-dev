import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './TechStack.module.css';

interface TechStackItemData {
    name: string;
    icon?: string;
    iconPreset?: string;
    iconImageUrl?: string;
}

interface TechStackRow {
    label: string;
    techs: TechStackItemData[];
}

interface TechStackProps {
    title: string;
    items: TechStackRow[];
}

const TechStack: React.FC<TechStackProps> = ({ title, items }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
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
        <section className={styles.techSection}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 className={styles.title} variants={itemVariants}>
                    {title}
                </motion.h2>

                <div className={styles.itemsList}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.stackItem}
                            variants={itemVariants}
                            whileHover={{ x: 8 }}
                        >
                            <span className={styles.itemLabel}>
                                {typeof item.label === 'object' ? (item.label as any)?.name || (item.label as any)?.title || '' : item.label}
                            </span>
                            <div className={styles.techGroup}>
                                {item.techs?.map((tech: any, tIdx: number) => {
                                    const iconSrc = tech.iconImageUrl || tech.iconPreset || tech.icon;
                                    const techName = typeof tech === 'string'
                                        ? tech
                                        : (typeof tech.name === 'object' ? (tech.name as any)?.name || (tech.name as any)?.title || '' : tech.name);
                                    return (
                                        <div key={tIdx} className={styles.techBadge}>
                                            <div className={styles.hexagonWrapper}>
                                                <div className={styles.hexagonBorder}>
                                                    <div className={styles.hexagonContent}>
                                                        {iconSrc && (
                                                            <img src={iconSrc} alt={techName} className={styles.techIcon} />
                                                        )}
                                                        <span className={styles.itemValue}>{techName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};


export default TechStack;
