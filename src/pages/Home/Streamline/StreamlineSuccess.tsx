import React, { useEffect, useRef, useState } from 'react';
import styles from './streamline.module.css';
import Button from '../../../components/Button/Button';

interface StreamlineSuccessProps {
    label: string;
    titleMain: string;
    titleAccent?: string;
    titleEnd?: string;
    description: { text: string; bold: boolean }[];
    description2?: string;
    imageUrl: string;
}

const StreamlineSuccess: React.FC<StreamlineSuccessProps> = ({ label, titleMain, titleAccent, titleEnd, description, description2 = "", imageUrl }) => {
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
        <section
            ref={sectionRef}
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={`${styles.content} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}>
                    <span className={styles.label}>{label}</span>
                    <h2 className={styles.title}>
                        {titleMain}<span className={styles.accent}>{titleAccent}</span> {titleEnd}
                    </h2>
                    <p className={styles.description}>
                        {description.map((segment, index) => (
                            segment.bold ? (
                                <strong key={index}>{segment.text}</strong>
                            ) : (
                                <span key={index}>{segment.text}</span>
                            )
                        ))}
                    </p>
                    {description2 && (
                        <p className={styles.description}>{description2}</p>
                    )}
                    <div className={styles.buttonWrapper}>
                        <Button text="Claim Strategy Session" color1="var(--color-primary)" color2="var(--color-primary-light)" onClick={() => console.log('Button clicked')} hasIcon />
                    </div>
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
                        src={imageUrl}
                        alt="Strategy Session Dashboard"
                        className={styles.dashboardImage}
                    />
                    <div className={styles.spotlightOverlay}></div>
                    <div className={styles.spotlightLens}></div>
                </div>
            </div>
        </section>
    );
};

export default StreamlineSuccess;
