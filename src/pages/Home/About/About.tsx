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

    const finalImage = imageUrl || "/leapsofts.webp";
    const descSegments = parseFormattedText(descriptionText || defaultAboutDescription);

    return (
        <section ref={sectionRef} className={styles.aboutSection}>
            <div className={styles.container}>

                {/* Brand Content Area */}
                <div className={styles.brandArea}>
                    <div className={styles.brandContent}>
                        <span className={styles.label}>{label}</span>
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
                        <a href="#figures" className={styles.readMore}>
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
                            src={finalImage}
                            alt="Futuristic Tech Visualization"
                            className={styles.dashboardImage}
                            loading="lazy"
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
