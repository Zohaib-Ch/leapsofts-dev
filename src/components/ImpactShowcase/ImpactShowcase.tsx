import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Sparkles, ArrowRight } from 'lucide-react';
import styles from './ImpactShowcase.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ImpactShowcaseProps {
    title: string;
    images: string[];
    deliverables?: string[];
}

const ImpactShowcase: React.FC<ImpactShowcaseProps> = ({
    title,
    images,
    deliverables = []
}) => {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.decoration} />
            <div className={styles.decoration} style={{ right: 0, bottom: 0, background: 'var(--color-secondary)', opacity: 0.05 }} />

            <div className={styles.container}>
                {/* Left Column */}
                <motion.div
                    className={styles.contentColumn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div className={styles.headerBadge} variants={itemVariants}>
                        <Sparkles size={14} className={styles.sparkleIcon} />
                        <span>Project Impact & Success</span>
                    </motion.div>

                    <motion.h2 className={styles.title} variants={itemVariants}>
                        {title}
                    </motion.h2>

                    <div className={styles.deliverablesWrapper}>
                        <motion.p className={styles.resultsLabel} variants={itemVariants}>
                            Major Deliverables
                        </motion.p>

                        <div className={styles.deliverablesGrid}>
                            {deliverables.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.deliverableCard}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        borderColor: 'rgba(var(--color-primary-rgb), 0.3)'
                                    }}
                                >
                                    <div className={styles.deliverableContent}>
                                        <div className={styles.deliverableIndicator}>
                                            <ArrowRight size={16} />
                                        </div>
                                        <span className={styles.deliverableText}>{item}</span>
                                    </div>
                                    <div className={styles.cardGlow} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    className={styles.visualColumn}
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                >
                    <div className={styles.showcaseFrame}>
                        <div className={styles.frameDecoration} />
                        <div className={styles.imageCard}>
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={images.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
                                loop={images.length > 1}
                                pagination={{ clickable: true }}
                                className={styles.swiperContainer}
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.img
                                            src={img}
                                            alt={`Project Showcase ${index + 1}`}
                                            className={styles.sliderImage}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactShowcase;
