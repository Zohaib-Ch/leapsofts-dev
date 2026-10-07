import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import styles from './Slider.module.css';

const technologies = [
    { name: 'ASP.NET', icon: '/technologies/aspnet.png' },
    { name: 'AWS', icon: '/technologies/aws.png' },
    { name: 'Azure', icon: '/technologies/azure.png' },
    { name: 'Express', icon: '/technologies/express_logo.png' },
    { name: 'Firebase', icon: '/technologies/firebase.png' },
    { name: 'Flutter', icon: '/technologies/flutter.png' },
    { name: 'GCP', icon: '/technologies/gcp.png' },
    { name: 'HTML', icon: '/technologies/html.png' },
    { name: 'Kotlin', icon: '/technologies/kotlin.png' },
    { name: 'Laravel', icon: '/technologies/laravel.png' },
    { name: 'AI/ML', icon: '/technologies/mixture.png' },
    { name: 'MongoDB', icon: '/technologies/mongodb.png' },
    { name: 'MySQL', icon: '/technologies/mysql.png' },
    { name: 'NestJS', icon: '/technologies/nestjs.png' },
    { name: 'Node.js', icon: '/technologies/nodejs.png' },
    { name: 'PostgreSQL', icon: '/technologies/postgresql.png' },
    { name: 'PyTorch', icon: '/technologies/pytorch.png' },
    { name: 'TensorFlow', icon: '/technologies/tensorflow.png' },
    { name: 'Vue.js', icon: '/technologies/vuejs.png' },
];

const Slider: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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

    return (
        <section ref={sectionRef} className={`${styles.slider} ${isVisible ? styles.revealed : ''}`}>
            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={50}
                slidesPerView={'auto'}
                loop={true}
                speed={3000} // Slow and smooth transition
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false, // Continue autoplay after interaction
                    pauseOnMouseEnter: true // Pause on hover if desired (optional, removing for "continuous" feel usually, but user might want it to inspect. CSS handles hover stop usually)
                }}
                freeMode={true} // Enables momentum dragging
                allowTouchMove={true} // Explicitly enable dragging
                grabCursor={true}
                className={styles.swiperContainer}
            >
                {technologies.map((tech, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.hexagonWrapper}>
                            <div className={styles.hexagonBorder}>
                                <div className={styles.hexagonContent}>
                                    <img src={tech.icon} alt={tech.name} className={styles.icon} />
                                    {/* <span className={styles.title}>{tech.name}</span> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
