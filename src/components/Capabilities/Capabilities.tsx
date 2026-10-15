import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './capabilities.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface CapabilityItem {
    name: string;
    description: string;
}

export interface CapabilitySlide {
    id: string;
    number: string;
    title: string;
    items: CapabilityItem[];
    image?: string; // Optional override image (Dark mode default)
    imageLight?: string; // Optional override image (Light mode)
}

interface CapabilitiesProps {
    title: string;
    description?: string;
    slides: CapabilitySlide[];
    defaultImage?: string; // Fallback image for all slides (Dark mode default)
    defaultImageLight?: string; // Fallback image for all slides (Light mode)
}

/**
 * 3D Perspective Glass Card with Mouse-Tracking Specular Spotlight & Floating Badges
 */
const CapabilityVisualCard: React.FC<{
    src: string;
    alt: string;
    slideNumber?: string;
}> = ({ src, alt, slideNumber }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (cardRef.current) {
            rectRef.current = cardRef.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        if (!rectRef.current) {
            rectRef.current = cardRef.current.getBoundingClientRect();
        }
        const clientX = e.clientX;
        const clientY = e.clientY;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const rect = rectRef.current;
            if (!rect || !cardRef.current) return;
            const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
            const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
            const rotateY = ((x - 50) / 50) * 5;
            const rotateX = ((50 - y) / 50) * 5;

            cardRef.current.style.setProperty('--spotlight-x', `${x}%`);
            cardRef.current.style.setProperty('--spotlight-y', `${y}%`);
            cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };

    const handleMouseLeave = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rectRef.current = null;
        if (cardRef.current) {
            cardRef.current.style.setProperty('--spotlight-x', '50%');
            cardRef.current.style.setProperty('--spotlight-y', '50%');
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div className={styles.visualContainer}>
            <div
                ref={cardRef}
                className={styles.visualCard}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    '--spotlight-x': '50%',
                    '--spotlight-y': '50%',
                    '--spotlight-size': '240px',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                } as React.CSSProperties}
            >
                {/* Glowing Glass Outer Border */}
                <div className={styles.glassBorderGlow} aria-hidden="true" />

                {/* Floating Micro-Chip Top Left */}
                <div className={styles.floatingChipTop} aria-hidden="true">
                    <span className={styles.chipPulse} />
                    <span>Enterprise Architecture</span>
                </div>

                {/* Floating Micro-Chip Bottom Right: Slide Number Badge */}
                {slideNumber && (
                    <div className={styles.floatingChipBottom} aria-hidden="true">
                        <span>{slideNumber}</span>
                    </div>
                )}

                {/* Main Slide Image */}
                <img
                    src={src}
                    alt={alt}
                    className={styles.mainImage}
                    loading="lazy"
                />

                {/* Specular Lighting & Depth Overlays */}
                <div className={styles.spotlightOverlay} aria-hidden="true" />
                <div className={styles.spotlightLens} aria-hidden="true" />
            </div>
        </div>
    );
};

const Capabilities: React.FC<CapabilitiesProps> = ({
    title,
    slides,
    defaultImage = "/streamline.webp",
    defaultImageLight
}) => {
    const { theme } = useTheme();
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-chunk slides so no slide ever has more than 3 items, splitting remaining items into new slides
    const processedSlides: CapabilitySlide[] = React.useMemo(() => {
        if (!slides || slides.length === 0) return [];
        const result: CapabilitySlide[] = [];
        let counter = 1;

        slides.forEach((slide) => {
            const items = slide.items || [];
            if (items.length <= 3) {
                result.push({
                    ...slide,
                    number: `< ${String(counter++).padStart(2, '0')} >`
                });
            } else {
                for (let i = 0; i < items.length; i += 3) {
                    const chunk = items.slice(i, i + 3);
                    const partIndex = Math.floor(i / 3) + 1;
                    result.push({
                        ...slide,
                        id: `${slide.id || 'slide'}-p${partIndex}`,
                        number: `< ${String(counter++).padStart(2, '0')} >`,
                        items: chunk
                    });
                }
            }
        });

        return result;
    }, [slides]);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop((activeIndex - 1 + processedSlides.length) % processedSlides.length);
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop((activeIndex + 1) % processedSlides.length);
        }
    };

    // Extract "Capabilities" from title to highlight
    const titleParts = title.split('Capabilities');
    const mainTitle = titleParts[0];
    const highlight = titleParts.length > 1 ? 'Capabilities' : '';

    return (
        <section className={styles.section}>
            {/* Ambient Soft Orbital Arc Vector Backdrop */}
            <div className={styles.orbitalBackdrop} aria-hidden="true">
                <div className={styles.ambientGlowPurple} />
                <div className={styles.ambientGlowOrange} />
                <svg
                    className={styles.orbitalSvg}
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="capOrbitPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="capOrbitOrange" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
                            <stop offset="60%" stopColor="#fb923c" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.25" />
                        </linearGradient>
                    </defs>

                    {/* Concentric Soft Orbital Arcs framing the left visual card area */}
                    <ellipse cx="360" cy="400" rx="360" ry="280" stroke="url(#capOrbitPurple)" strokeWidth="1" strokeDasharray="6 8" opacity="0.5" />
                    <ellipse cx="360" cy="400" rx="500" ry="370" stroke="url(#capOrbitOrange)" strokeWidth="1" opacity="0.3" />

                    {/* Celestial Tech Constellation Dots */}
                    <circle cx="360" cy="120" r="3" fill="#ff6b00" opacity="0.65" />
                    <circle cx="580" cy="230" r="2.5" fill="#c084fc" opacity="0.6" />
                    <circle cx="210" cy="580" r="3" fill="#ff6b00" opacity="0.55" />
                    <circle cx="680" cy="490" r="2.5" fill="#38bdf8" opacity="0.45" />

                    {/* Clean Tech Corner Crosshair */}
                    <g opacity="0.3" stroke="#ffffff" strokeWidth="1">
                        <line x1="80" y1="680" x2="100" y2="680" />
                        <line x1="90" y1="670" x2="90" y2="690" />
                    </g>
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {mainTitle}
                        <em className={styles.titleAccent}>{highlight}</em>
                    </h2>
                </div>

                <div className={styles.swiperContainer}>
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade]}
                        spaceBetween={50}
                        effect={'fade'}
                        loop={true}
                        loopAdditionalSlides={1}
                        fadeEffect={{ crossFade: true }}
                        speed={800}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        className={styles.swiper}
                    >
                        {processedSlides.map((slide, index) => {
                            const darkSlideImg = slide.image || defaultImage;
                            const lightSlideImg = slide.imageLight || defaultImageLight || darkSlideImg;
                            const finalSlideImg = theme === 'light' ? lightSlideImg : darkSlideImg;

                            return (
                                <SwiperSlide key={slide.id || index}>
                                    <div className={styles.slideContent}>
                                        {/* Left Visual: 3D Perspective Glass Card */}
                                        <div className={styles.visualWrapper}>
                                            <CapabilityVisualCard
                                                src={finalSlideImg}
                                                alt={slide.title}
                                                slideNumber={slide.number}
                                            />
                                        </div>

                                        {/* Right Content */}
                                        <div className={styles.textContent}>
                                            <div className={styles.badgeWrapper}>
                                                <span className={styles.livePulseDot} aria-hidden="true" />
                                                <span className={styles.slideNumber}>{slide.number}</span>
                                            </div>

                                            <h3 className={styles.slideTitle}>{slide.title}</h3>

                                            <div className={styles.capabilitiesList}>
                                                {slide.items.map((item, i) => (
                                                    <div key={i} className={styles.capabilityItem}>
                                                        {/* Refined Squircle Icon Badge */}
                                                        <div className={styles.iconWrapper} aria-hidden="true">
                                                            <svg className={styles.arrowIcon} viewBox="0 0 16 16" fill="none">
                                                                <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>

                                                        <div className={styles.itemContent}>
                                                            <p className={styles.itemText}>
                                                                <span className={styles.itemName}>{item.name}:</span> {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Modern Glass Pill Navigation Controls */}
                    <div className={styles.navigationWrapper}>
                        <div className={styles.navPill}>
                            <button
                                className={styles.navBtn}
                                onClick={handlePrev}
                                aria-label="Previous capability slide"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <div className={styles.pagination}>
                                {processedSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                                        onClick={() => {
                                            if (swiperRef.current) {
                                                swiperRef.current.slideToLoop(index);
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                className={styles.navBtn}
                                onClick={handleNext}
                                aria-label="Next capability slide"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
