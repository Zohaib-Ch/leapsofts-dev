import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './capabilities.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CapabilityItem {
    name: string;
    description: string;
}

export interface CapabilitySlide {
    id: string;
    number: string;
    title: string;
    items: CapabilityItem[];
    image?: string; // Optional override image
}

interface CapabilitiesProps {
    title: string;
    description?: string;
    slides: CapabilitySlide[];
    defaultImage?: string; // Fallback image for all slides
}

const Capabilities: React.FC<CapabilitiesProps> = ({
    title,
    // description,
    slides,
    defaultImage
}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop((activeIndex - 1 + slides.length) % slides.length);
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop((activeIndex + 1) % slides.length);
            console.log('swiperRef.current', swiperRef.current.activeIndex);
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
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id || index}>
                                <div className={styles.slideContent}>
                                    {/* Left Visual */}
                                    <div className={styles.visualWrapper}>
                                        <img
                                            src={slide.image || defaultImage}
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
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className={styles.navigationWrapper}>
                        <button className={styles.navBtn} onClick={handlePrev}>
                            <ChevronLeft size={24} />
                        </button>
                        <div className={styles.pagination}>
                            {slides.map((_, index) => (
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
