import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './testimonials.module.css';

// Placeholder data matching the tech theme
const testimonials = [
    {
        id: 1,
        quote: "\"The overall structure and organization of their development team is incredibly impressive.\"",
        text: "The way they layer managers and team leaders to ensure quality and efficiency results in incredible work. It is incredibly difficult to find development firms that can match the quality of fortune-500 companies like Apple or Microsoft, but Leapsofts does a fantastic job competing at that level.",
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
        text: "Unlike other vendors who just execute tickets, Leapsofts challenges our assumptions and helps us build better products. Their input on the UX/UI overhaul was instrumental in increasing our user retention.",
        name: "Michael Chang",
        role: "Product Director, Nexus"
    }
];

export interface TestimonialItem {
    id: number;
    quote: string;
    text: string;
    name: string;
    role: string;
}

export interface TestimonialsProps {
    sectionLabel?: string;
    testimonialsList?: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
    sectionLabel = "What Our Clients Say About Us",
    testimonialsList: sanityTestimonials
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const activeTestimonials = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : testimonials;

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.particles}></div>
            <div className={styles.container}>
                {/* Header absolute positioned */}
                <div className={styles.header}>
                    <h2 className={styles.sectionLabel}>{sectionLabel}</h2>
                </div>

                {/* Central Spinner & Slider */}
                <div className={styles.spinnerWrapper}>
                    {/* Animated Background Circles */}
                    <div className={styles.neonCircleGlow}></div>
                    <div className={styles.neonCircle}></div>

                    {/* Nav Buttons (Outside Swiper) */}
                    <button ref={prevRef} className={`${styles.navButton} ${styles.navPrev}`}>
                        <ChevronLeft size={40} strokeWidth={3} />
                    </button>

                    <button ref={nextRef} className={`${styles.navButton} ${styles.navNext}`}>
                        <ChevronRight size={40} strokeWidth={3} />
                    </button>

                    {/* Carousel */}
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 5000,
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
                                    <p className={styles.quoteText}>{item.quote}</p>
                                    <p className={styles.bodyText}>{item.text}</p>
                                    <div className={styles.authorContainer}>
                                        <span className={styles.authorName}>{item.name}</span>
                                        <span className={styles.authorRole}>{item.role}</span>
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
