import styles from './about.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { parseFormattedText, parseEmphasisText } from '../../../utils/textParser';

export interface AboutProps {
    label?: string;
    headline?: string;
    titleAccent?: string;
    descriptionText?: string;
    imageUrl?: string;
}

const About: React.FC<AboutProps> = ({
    label = "About Us",
    headline = "Engineered for <em>execution</em>. Scale without friction.",
    titleAccent,
    descriptionText,
    imageUrl
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

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
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (visualRef.current) {
            const rect = visualRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setSpotlightPos({ x, y });

            // 3D Perspective Tilt calculation
            const rotateY = ((x - 50) / 50) * 8; // Max 8deg tilt
            const rotateX = ((50 - y) / 50) * 8;
            setTilt({ rotateX, rotateY });
        }
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setSpotlightPos({ x: 50, y: 50 });
    };

    const finalImage = imageUrl || "/leapsofts.webp";
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
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--spotlight-x': `${spotlightPos.x}%`,
                                '--spotlight-y': `${spotlightPos.y}%`,
                                '--spotlight-size': '220px',
                                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
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
