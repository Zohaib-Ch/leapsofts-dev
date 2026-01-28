import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './ImpactShowcase.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export interface ImpactStat {
    id: number;
    value: string;
    label: string;
    icon?: React.ReactNode;
}

interface ImpactShowcaseProps {
    title: string;
    stats: ImpactStat[];
    images: string[];
}

const ImpactShowcase: React.FC<ImpactShowcaseProps> = ({
    title,
    stats,
    images
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
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.decoration} />
            <div className={styles.decoration} style={{ right: 0, bottom: 0, background: 'var(--color-secondary)', opacity: 0.1 }} />

            <div className={styles.container}>
                {/* Left Column */}
                <motion.div
                    className={styles.contentColumn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2 className={styles.title} variants={itemVariants}>
                        {title}
                    </motion.h2>

                    <div className={styles.statsWrapper}>
                        <motion.p className={styles.resultsLabel} variants={itemVariants}>
                            Results delivered
                        </motion.p>

                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                className={styles.statItem}
                                variants={itemVariants}
                                whileHover={{
                                    x: 10,
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'var(--color-primary-light)'
                                }}
                            >
                                <div className={styles.statIconWrapper}>
                                    {stat.icon}
                                </div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    className={styles.visualColumn}
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className={styles.imageCard}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            pagination={{ clickable: true }}
                            className={styles.swiperContainer}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <motion.img
                                        src={img}
                                        alt={`Impact Showcase ${index + 1}`}
                                        className={styles.sliderImage}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactShowcase;
