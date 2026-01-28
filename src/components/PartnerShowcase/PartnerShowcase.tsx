import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '../Button/Button';
import styles from './PartnerShowcase.module.css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TabData {
    id: string;
    label: string;
    isActive?: boolean;
}

interface PartnerData {
    id: string;
    brand: {
        name: string;
        logo: string;
        description: string;
        actionLabel: string;
        actionUrl: string;
    };
    highlight: string;
    visualImg: string;
    projectList?: string[];
    brandVisualImg: string;
    tabs: TabData[];
}

interface PartnerShowcaseProps {
    projects: PartnerData[];
}

const PartnerShowcase: React.FC<PartnerShowcaseProps> = ({ projects }) => {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className={styles.mainSwiper}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ShowcaseItem data={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const ShowcaseItem: React.FC<{ data: PartnerData }> = ({ data }) => {
    const swiperSlide = useSwiperSlide();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Auto-rotate tabs inside the slide
    React.useEffect(() => {
        if (isInteracting) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % data.tabs.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [data.tabs.length, isInteracting]);

    const handleInteraction = () => {
        setIsInteracting(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsInteracting(false), 5000);
    };

    const handleWheel = (e: React.WheelEvent) => {
        handleInteraction();
        if (e.deltaY > 0) {
            setActiveIndex((prev) => (prev + 1) % data.tabs.length);
        } else if (e.deltaY < 0) {
            setActiveIndex((prev) => (prev - 1 + data.tabs.length) % data.tabs.length);
        }
    };

    const handleDragEnd = (_: any, info: any) => {
        handleInteraction();
        const threshold = 50;
        if (info.offset.y < -threshold) {
            setActiveIndex((prev) => (prev + 1) % data.tabs.length);
        } else if (info.offset.y > threshold) {
            setActiveIndex((prev) => (prev - 1 + data.tabs.length) % data.tabs.length);
        }
    };

    const descWords = data.brand.description.split(' ');
    const midPoint = Math.ceil(descWords.length / 2);
    const descPart1 = descWords.slice(0, midPoint).join(' ');
    const descPart2 = descWords.slice(midPoint).join(' ');

    const dropVariants: Variants = {
        hidden: { opacity: 0, y: -60 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.15,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    const animateState = swiperSlide?.isActive ? "visible" : "hidden";

    return (
        <div className={styles.showcaseContainer}>
            <div className={styles.mainGrid}>
                {/* Left Side: Brand Card */}
                <motion.div
                    className={styles.mainCard}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
                >
                    <div className={styles.decorationTop}>
                        {[...Array(15)].map((_, i) => (
                            <div key={`top-bar-${i}`} className={styles.bar} style={{ height: `${30 + (i % 5) * 15}%`, opacity: 0.1 + (i % 3) * 0.2 }} />
                        ))}
                    </div>

                    <div className={styles.cardContent}>
                        <motion.div className={styles.brandHeader} custom={1} animate={animateState} initial="hidden" variants={dropVariants}>
                            <img src={data.brand.logo} alt={data.brand.name} className={styles.brandIcon} />
                            <h2 className={styles.brandTitle}>{data.brand.name}</h2>
                        </motion.div>

                        <div className={styles.descriptionWrapper}>
                            <motion.p className={styles.brandDescription} custom={2} animate={animateState} initial="hidden" variants={dropVariants}>
                                {descPart1}
                            </motion.p>
                            <motion.p className={styles.brandDescription} custom={3} animate={animateState} initial="hidden" variants={dropVariants}>
                                {descPart2}
                            </motion.p>
                        </div>

                        <motion.div custom={4} animate={animateState} initial="hidden" variants={dropVariants}>
                            <Button
                                color1="var(--color-primary)"
                                color2="var(--color-primary-light)"
                                text={data.brand.actionLabel}
                                hasIcon={true}
                                onClick={() => navigate(`/projects/${data.id}`)}
                            />
                        </motion.div>
                    </div>

                    <div className={styles.decorationBottom}>
                        {[...Array(30)].map((_, i) => (
                            <div key={`bottom-bar-${i}`} className={styles.bar} style={{ height: `${20 + (i % 8) * 10}%`, opacity: 0.05 + (i % 4) * 0.15 }} />
                        ))}
                    </div>
                </motion.div>

                {/* Middle Column */}
                <div className={styles.column}>
                    <motion.div
                        className={styles.insightCard}
                        initial="hidden"
                        animate={animateState}
                        variants={{
                            hidden: { opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.2
                                }
                            }
                        }}
                    >
                        <motion.p
                            className={styles.insightText}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" }
                                }
                            }}
                        >
                            {data.highlight}
                        </motion.p>
                        <div className={styles.insightDecoration}>
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={`insight-bar-${i}`}
                                    className={styles.bar}
                                    initial={{ height: "10%" }}
                                    animate={swiperSlide?.isActive ? {
                                        height: ["20%", "90%", "30%", "100%", "40%", "70%"],
                                        opacity: [0.3, 1, 0.4, 1, 0.5, 0.8],
                                    } : { height: "10%", opacity: 0.3 }}
                                    transition={{
                                        duration: 1.5 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.05
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.visualCard}
                        initial="hidden"
                        animate={animateState}
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <div className={styles.dataShowcase}>
                            <motion.h4
                                animate={animateState}
                                initial="hidden"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { delay: 0.6 } }
                                }}
                                className={styles.dataTitle}
                            >
                                Major Deliverables
                            </motion.h4>
                            <div className={styles.projectGrid}>
                                {(data.projectList || []).map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.projectDataItem}
                                        animate={animateState}
                                        initial="hidden"
                                        variants={{
                                            hidden: { opacity: 0, y: 15, x: -10 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                x: 0,
                                                transition: {
                                                    delay: 0.7 + idx * 0.1,
                                                    duration: 0.6,
                                                    ease: [0.16, 1, 0.3, 1]
                                                }
                                            }
                                        }}
                                    >
                                        <span className={styles.projectDot}></span>
                                        <p className={styles.projectLabel}>{project}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className={styles.column}>
                    <div className={styles.brandVisualCard}>
                        <motion.img
                            key={data.id + "_industry"}
                            src={data.brandVisualImg}
                            alt="Industry Logo"
                            className={styles.brandVisualImage}
                            animate={animateState}
                            initial="hidden"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 0.8, duration: 0.8, ease: "easeOut" }
                                }
                            }}
                        />
                    </div>

                    <div className={styles.tabsCard} onWheel={handleWheel}>
                        <motion.div
                            className={styles.wheelContainer}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            onDragEnd={handleDragEnd}
                        >
                            {data.tabs.map((tab, index) => {
                                let offset = index - activeIndex;
                                const len = data.tabs.length;
                                if (offset > len / 2) offset -= len;
                                if (offset < -len / 2) offset += len;
                                const isCenter = index === activeIndex;
                                return (
                                    <motion.div
                                        key={tab.id}
                                        animate={{
                                            y: offset * 70,
                                            scale: isCenter ? 1.15 : 0.85,
                                            opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.6,
                                            rotateX: offset * -45,
                                            zIndex: isCenter ? 10 : 1
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className={`${styles.tabButton} ${isCenter ? styles.activeTab : ''}`}
                                        style={{ position: 'absolute', transformOrigin: 'center center', backfaceVisibility: 'hidden', cursor: 'grab' }}
                                    >
                                        {tab.label}
                                    </motion.div>
                                );
                            })}
                            <div className={styles.wheelFadeTop}></div>
                            <div className={styles.wheelFadeBottom}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerShowcase;
