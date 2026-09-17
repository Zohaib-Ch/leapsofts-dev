import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './WhoWeServe.module.css';

interface WhoWeServeProps {
    titlePrefix?: string;
    titleAccent?: string;
    description: string;
}

const WhoWeServe: React.FC<WhoWeServeProps> = ({
    titlePrefix = "Who ",
    titleAccent = "we serve",
    description
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <section className={styles.whoSection}>
            <div className={styles.container}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.h2 className={styles.title} variants={textVariants}>
                        {titlePrefix}
                        <span className={styles.accent}>{titleAccent}</span>
                    </motion.h2>

                    <motion.p className={styles.description} variants={textVariants}>
                        {description}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeServe;
