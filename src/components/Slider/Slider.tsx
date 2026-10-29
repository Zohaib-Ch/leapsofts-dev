import React, { useRef, useState, useEffect, useMemo } from 'react';
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

    // Duplicate list once to form a seamless, mathematically infinite 120 FPS marquee loop
    const marqueeItems = useMemo(() => [...technologies, ...technologies], []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.slider} ${isVisible ? styles.revealed : ''}`}
            aria-label="Technologies We Master"
        >
            <div className={styles.marqueeViewport}>
                <div className={styles.marqueeTrack}>
                    {marqueeItems.map((tech, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={`${tech.name}-${index}`}
                                className={`${styles.hexagonWrapper} ${isEven ? styles.staggerDown : styles.staggerUp}`}
                            >
                                <div className={styles.hexagonBorder}>
                                    <div className={styles.hexagonContent}>
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={styles.icon}
                                            loading="lazy"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Slider;
