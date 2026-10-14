import React, { useRef, useState } from 'react';
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

const Capabilities: React.FC<CapabilitiesProps> = ({
    title,
    // description,
    slides,
    defaultImage,
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
                            // Use realIndex for loop mode to get the actual slide index
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
                                        {/* Left Visual */}
                                        <div className={styles.visualWrapper}>
                                            <img
                                                src={finalSlideImg}
                                                alt={slide.title}
                                                className={styles.mainImage}
                                            />
                                        </div>

                                    {/* Right Content */}
                                    <div className={styles.textContent}>
                                        <span className={styles.slideNumber}>{slide.number}</span>
                                        <h3 className={styles.slideTitle}>{slide.title}</h3>

                                        <div className={styles.capabilitiesList}>
                                            {slide.items.map((item, i) => (
                                                <div key={i} className={styles.capabilityItem}>
                                                    {/* Pink Chevron Icon */}
                                                    <svg className={styles.arrowIcon} viewBox="0 0 10 16">
                                                        <path d="M2.5 8L0 5.5L1.5 4L5.5 8L1.5 12L0 10.5L2.5 8Z" />
                                                        <path d="M6.5 8L4 5.5L5.5 4L9.5 8L5.5 12L4 10.5L6.5 8Z" />
                                                    </svg>

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

                    {/* Custom Navigation */}
                    <div className={styles.navigationWrapper}>
                        <button className={styles.navBtn} onClick={handlePrev}>
                            <ChevronLeft size={24} />
                        </button>
                        <div className={styles.pagination}>
                            {processedSlides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => {
                                        if (swiperRef.current) {
                                            // Use slideToLoop for proper loop navigation
                                            swiperRef.current.slideToLoop(index);
                                        }
                                    }}
                                />
                            ))}
                        </div>
                        <button className={styles.navBtn} onClick={handleNext}>
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Custom Pagination */}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
