import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
// import Button from '../Button/Button';
import styles from './PartnerShowcase.module.css';

// Import Swiper styles
import 'swiper/css';
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
    };
    highlight: Record<string, string[]>;
    projectList: string[];
    brandVisualImg: string;
    impact: {
        title: string;
        images: string[];
    };
    tabImages?: Record<string, string>;
    tabs: TabData[];
}

interface PartnerShowcaseProps {
    projects: PartnerData[];
    activeProjectId?: string;
}

const PartnerShowcase: React.FC<PartnerShowcaseProps> = ({ projects, activeProjectId }) => {
    const swiperRef = useRef<SwiperClass | null>(null);

    React.useEffect(() => {
        if (activeProjectId && swiperRef.current) {
            const index = projects.findIndex(p => p.id === activeProjectId);
            if (index !== -1) {
                swiperRef.current.slideToLoop(index);
            }
        }
    }, [activeProjectId, projects]);

    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
                                {data.brand.description}
                            </motion.p>
                        </div>

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
                        onClick={() => {
                            const projects = data.highlight[data.tabs[activeIndex].id] || [];
                            if (projects.length > 0) {
                                const slug = projects[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                                navigate(`/projects/${slug}`);
                            }
                        }}
                        style={{ cursor: 'pointer' }}
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
                        <div className={styles.marqueeContainer}>
                            <motion.div
                                className={styles.marqueeContent}
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                animate={{
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    x: (data.highlight[data.tabs[activeIndex].id]?.length || 0) > 1 ? ["0%", "-50%"] : ["80%", "-80%"]
                                }}
                                transition={{
                                    opacity: { duration: 0.6 },
                                    filter: { duration: 0.8 },
                                    x: {
                                        duration: (data.highlight[data.tabs[activeIndex].id]?.length || 0) > 1 ? 25 : 12,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                                key={activeIndex} // Reset animation position when tab changes
                            >
                                {(() => {
                                    const projects = data.highlight[data.tabs[activeIndex].id] || [];
                                    const displayList = projects.length > 1 ? [...projects, ...projects] : projects;
                                    return displayList.map((project, idx) => (
                                        <div
                                            key={idx}
                                            className={styles.marqueeItem}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const slug = project.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                                                navigate(`/projects/${slug}`);
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span className={styles.projectDot}></span>
                                            {project}
                                        </div>
                                    ));
                                })()}
                            </motion.div>
                        </div>
                        <div className={styles.imageRevealContainer}>
                            <motion.div
                                className={styles.thumbnailWrapper}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={animateState}
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                    }
                                }}
                            >
                                <img
                                    src={data.tabImages?.[data.tabs[activeIndex].id] || data.impact.images[0]}
                                    alt={`${data.brand.name} feature`}
                                    className={styles.insightThumbnail}
                                />
                                <div className={styles.thumbnailOverlay}></div>
                            </motion.div>
                            <div className={styles.thumbnailDecoration}></div>
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
                            <div className={styles.projectGrid}>
                                {(data.projectList || []).map((project, idx) => {
                                    const isActive = (data.highlight[data.tabs[activeIndex].id] || []).includes(project);
                                    return (
                                        <motion.div
                                            key={idx}
                                            className={`${styles.projectDataItem} ${isActive ? styles.activeProjectItem : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const slug = project.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                                                navigate(`/projects/${slug}`);
                                            }}
                                            style={{ cursor: 'pointer' }}
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
                                    );
                                })}
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
