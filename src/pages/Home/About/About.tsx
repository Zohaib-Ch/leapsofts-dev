import styles from './about.module.css';
import React, { useEffect, useRef, useState } from 'react';
import laptopImg from '../../../assets/about_laptop_3d.png';

const About: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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

    const handleMouseMove = (e: React.MouseEvent) => {
        if (visualRef.current) {
            const rect = visualRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setSpotlightPos({ x, y });
        }
    };
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>

                {/* Brand Content Area */}
                <div className={styles.brandArea}>
                    <div className={styles.brandContent}>
                        <span className={styles.label}>About Us</span>
                        <h2 className={styles.headline}>
                            Succeed <em>faster</em> with LEAPSOFT
                        </h2>
                        <p className={styles.description}>
                            How can Leapsoft deliver a minimal viable product in just 6 to 12 months?
                            The level of process automation that we have at Leapsoft, multiplied by our domain
                            and product-specific experience, all on the foundation of the culture to be helpful
                            to our customers, is the foundation of our high efficiency.
                        </p>
                        <a href="#about" className={styles.readMore}>
                            Read more
                            <div className={styles.iconWrapper}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div
                        ref={visualRef}
                        className={`${styles.visual} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}
                        onMouseMove={handleMouseMove}
                        style={{
                            '--spotlight-x': `${spotlightPos.x}%`,
                            '--spotlight-y': `${spotlightPos.y}%`,
                            '--spotlight-size': '180px'
                        } as React.CSSProperties}
                    >
                        <img
                            src={laptopImg}
                            alt="Futuristic Tech Visualization"
                            className={styles.dashboardImage}
                        />
                        <div className={styles.spotlightOverlay}></div>
                        <div className={styles.spotlightLens}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
