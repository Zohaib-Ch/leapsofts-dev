import styles from './about.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { parseFormattedText, parseEmphasisText } from '../../../utils/textParser';
import { useTheme } from '../../../context/ThemeContext';

export interface AboutProps {
    label?: string;
    headline?: string;
    titleAccent?: string;
    descriptionText?: string;
    imageUrl?: string;
    imageUrlLight?: string;
}

const About: React.FC<AboutProps> = ({
    label = "About Us",
    headline = "Engineered for <em>execution</em>. Scale without friction.",
    titleAccent,
    descriptionText,
    imageUrl,
    imageUrlLight
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const rafRef = useRef<number | null>(null);

    const defaultAboutDescription = [
        { text: "At Leapsofts, we engineer and deliver fully-realized ", bold: false },
        { text: "minimum viable products (MVPs) in just 3 to 5 months", bold: true },
        { text: " by unifying ", bold: false },
        { text: "process automation", bold: true },
        { text: ", ", bold: false },
        { text: "deep domain intelligence", bold: true },
        { text: ", and a culture built on absolute technical excellence. By bypassing standard agency overhead and leveraging pre-built modular architectures, we accelerate development without compromising quality, enabling global enterprises and ambitious startups to bring innovative solutions to market faster and with greater budget efficiency.", bold: false }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (visualRef.current) {
            rectRef.current = visualRef.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!visualRef.current) return;
        if (!rectRef.current) {
            rectRef.current = visualRef.current.getBoundingClientRect();
        }
        const clientX = e.clientX;
        const clientY = e.clientY;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const rect = rectRef.current;
            if (!rect || !visualRef.current) return;
            const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
            const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
            const rotateY = ((x - 50) / 50) * 8;
            const rotateX = ((50 - y) / 50) * 8;

            visualRef.current.style.setProperty('--spotlight-x', `${x}%`);
            visualRef.current.style.setProperty('--spotlight-y', `${y}%`);
            visualRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };

    const handleMouseLeave = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rectRef.current = null;
        if (visualRef.current) {
            visualRef.current.style.setProperty('--spotlight-x', '50%');
            visualRef.current.style.setProperty('--spotlight-y', '50%');
            visualRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
    };

    const { theme } = useTheme();
    const darkImage = imageUrl || "/leapsofts.webp";
    const lightImage = imageUrlLight || darkImage;
    const finalImage = theme === 'light' ? lightImage : darkImage;
    const descSegments = parseFormattedText(descriptionText || defaultAboutDescription);

    return (
        <section ref={sectionRef} className={styles.aboutSection}>
            {/* Ambient Background Gradient Glows */}
            <div className={styles.ambientAuraPurple} aria-hidden="true" />
            <div className={styles.ambientAuraOrange} aria-hidden="true" />
            <div className={styles.ambientGridLines} aria-hidden="true" />

            <div className={styles.container}>
                {/* Brand Content Area with Scroll Reveal */}
                <div className={`${styles.brandArea} ${isVisible ? styles.revealed : ''}`}>
                    <div className={styles.brandContent}>
                        <div className={styles.labelWrapper}>
                            <span className={styles.label}>{label}</span>
                        </div>
                        
                        <h2 className={styles.headline}>
                            {parseEmphasisText(headline, titleAccent)}
                        </h2>

                        <p className={styles.description}>
                            {descSegments.map((segment, index) => (
                                segment.bold ? (
                                    <strong key={index}>{segment.text}</strong>
                                ) : (
                                    <span key={index}>{segment.text}</span>
                                )
                            ))}
                        </p>

                        <div className={styles.ctaWrapper}>
                            <a href="#figures" className={styles.readMore}>
                                <span>Read more</span>
                                <div className={styles.iconWrapper}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* 3D Isometric Visual Container with Interactive Lighting & Tilt */}
                    <div className={styles.visualContainer}>
                        <div
                            ref={visualRef}
                            className={styles.visual}
                            onMouseEnter={handleMouseEnter}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--spotlight-x': '50%',
                                '--spotlight-y': '50%',
                                '--spotlight-size': '220px',
                                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                            } as React.CSSProperties}
                        >
                            {/* Glass Border Glow */}
                            <div className={styles.glassBorderGlow} />
                            
                            <img
                                src={finalImage}
                                alt="Futuristic Tech Visualization"
                                className={styles.dashboardImage}
                                loading="lazy"
                            />
                            <div className={styles.spotlightOverlay} />
                            <div className={styles.spotlightLens} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
