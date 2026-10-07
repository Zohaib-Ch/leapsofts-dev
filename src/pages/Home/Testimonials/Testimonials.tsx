import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './testimonials.module.css';

// Placeholder data matching the tech theme
const defaultTestimonials = [
    {
        id: 1,
        quote: "\"The overall structure and organization of their development team is incredibly impressive.\"",
        text: "The way they layer managers and team leaders to ensure quality and efficiency results in incredible work. It is difficult to find development firms that can match the quality of Fortune-500 standards, but Leapsofts executes at the highest level.",
        name: "Jake Zahara",
        role: "President, Global Guru"
    },
    {
        id: 2,
        quote: "\"They delivered a robust platform that exceeded our scalability requirements by 200%.\"",
        text: "Their technical expertise in distributed systems is unmatched. We were facing severe latency issues with our previous provider, but the Leapsofts team architected a solution that handled our peak loads effortlessly.",
        name: "Sarah Jenkins",
        role: "CTO, FinTech Sol"
    },
    {
        id: 3,
        quote: "\"Exceptional attention to detail and a true partnership approach to problem-solving.\"",
        text: "Unlike other vendors who just execute tickets, Leapsofts challenges our assumptions and helps us build better products. Their input on the architecture and UX overhaul was instrumental in boosting our retention.",
        name: "Michael Chang",
        role: "Product Director, Nexus"
    }
];

export interface TestimonialItem {
    id: number | string;
    quote: string;
    text: string;
    name: string;
    role: string;
    avatarUrl?: string;
}

export interface TestimonialsProps {
    sectionLabel?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    description?: string;
    testimonialsList?: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
    sectionLabel = "CLIENT FEEDBACK & VERIFIED REPUTATION",
    titleMain = "Proven technical excellence, ",
    titleAccent = "validated by leaders",
    titleEnd = ".",
    description = "Discover how our agile engineering pods accelerate delivery, eliminate latency bottlenecks, and scale digital products for global enterprises.",
    testimonialsList: sanityTestimonials
}) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const activeTestimonials = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : defaultTestimonials;

    return (
        <section ref={sectionRef} className={`${styles.testimonialsSection} ${isVisible ? styles.revealed : ''}`}>
            {/* Ambient Background Lights */}
            <div className={styles.ambientAuraPurple} aria-hidden="true" />
            <div className={styles.ambientAuraOrange} aria-hidden="true" />
            <div className={styles.particles} aria-hidden="true" />

            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.header}>
                    <div className={styles.labelWrapper}>
                        <span className={styles.liveDot} aria-hidden="true" />
                        <span className={styles.sectionLabel}>{sectionLabel}</span>
                    </div>
                    <h2 className={styles.title}>
                        {titleMain?.trim()}{' '}
                        <em>{titleAccent?.trim()}</em>
                        {titleEnd}
                    </h2>
                    {description && (
                        <p className={styles.subtitle}>{description}</p>
                    )}
                </div>

                {/* Central Holographic Spinner & Carousel */}
                <div className={styles.spinnerWrapper}>
                    {/* Animated Neon Rings */}
                    <div className={styles.neonCircleGlow} aria-hidden="true" />
                    <div className={styles.neonCircle} aria-hidden="true" />
                    <div className={styles.neonOuterRing} aria-hidden="true" />

                    {/* Nav Buttons (Outside Swiper) */}
                    <button ref={prevRef} className={`${styles.navButton} ${styles.navPrev}`} aria-label="Previous Testimonial">
                        <ChevronLeft size={28} strokeWidth={2.5} />
                    </button>

                    <button ref={nextRef} className={`${styles.navButton} ${styles.navNext}`} aria-label="Next Testimonial">
                        <ChevronRight size={28} strokeWidth={2.5} />
                    </button>

                    {/* Carousel Container */}
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        grabCursor={true}
                        className={styles.swiperContainer}
                    >
                        {activeTestimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.testimonialContent}>
                                    {/* 5-Star Verified Pill */}
                                    <div className={styles.starRatingRow}>
                                        <div className={styles.stars}>
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={styles.starIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className={styles.verifiedTag}>Verified Client</span>
                                    </div>

                                    {/* Quote Headline */}
                                    <p className={styles.quoteText}>{item.quote}</p>

                                    {/* Detailed Review Body */}
                                    <p className={styles.bodyText}>{item.text}</p>

                                    {/* Author Profile */}
                                    <div className={styles.authorContainer}>
                                        <div className={styles.authorAvatar}>
                                            {item.avatarUrl ? (
                                                <img src={item.avatarUrl} alt={item.name} />
                                            ) : (
                                                <span>{item.name.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>{item.name}</span>
                                            <span className={styles.authorRole}>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
