import React, { useEffect, useRef, useState } from 'react';
import styles from './streamline.module.css';
import Button from '../../../components/Button/Button';

export interface StreamlineSuccessProps {
    label?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    description?: string | { text: string; bold: boolean }[];
    description2?: string;
    buttonText?: string;
    buttonPath?: string;
    imageUrl?: string;
}

const StreamlineSuccess: React.FC<StreamlineSuccessProps> = ({
    label = "COMPLIMENTARY STRATEGY SESSION",
    titleMain = "Map your ",
    titleAccent = "technical",
    titleEnd = " roadmap.",
    description,
    description2 = "",
    buttonText = "Claim Strategy Session",
    buttonPath = "#contact",
    imageUrl = "/streamline.webp"
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    const defaultDescription = [
        { text: "Whether modernizing a complex ", bold: false },
        { text: "legacy enterprise platform ", bold: true },
        { text: "or engineering a ", bold: false },
        { text: "new SaaS ecosystem", bold: true },
        { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out code dependencies, identify performance bottlenecks, and formulate a ", bold: false },
        { text: "highly efficient, cost-optimized engineering plan ", bold: true },
        { text: "built to unlock measurable product growth and streamline operational efficiency.", bold: false }
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

    const handleButtonClick = () => {
        if (buttonPath.startsWith('#')) {
            const id = buttonPath.replace('#', '');
            const elem = document.getElementById(id);
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = buttonPath;
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
                        {titleMain?.trim()}{' '}<span className={styles.accent}>{titleAccent?.trim()}</span>{' '}{titleEnd?.trim()}
                    </h2>
                    <div className={styles.description}>
                        {typeof description === 'string' ? (
                            <p>{description}</p>
                        ) : Array.isArray(description) ? (
                            <p>
                                {description.map((segment, index) => (
                                    segment.bold ? (
                                        <strong key={index}>{segment.text}</strong>
                                    ) : (
                                        <span key={index}>{segment.text}</span>
                                    )
                                ))}
                            </p>
                        ) : (
                            <p>
                                {defaultDescription.map((segment, index) => (
                                    segment.bold ? (
                                        <strong key={index}>{segment.text}</strong>
                                    ) : (
                                        <span key={index}>{segment.text}</span>
                                    )
                                ))}
                            </p>
                        )}
                    </div>
                    {description2 && (
                        <p className={styles.description}>{description2}</p>
                    )}
                    <div className={styles.buttonWrapper}>
                        <Button text={buttonText} color1="var(--color-primary)" color2="var(--color-primary-light)" onClick={handleButtonClick} hasIcon />
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
                        loading="lazy"
                    />
                    <div className={styles.spotlightOverlay}></div>
                    <div className={styles.spotlightLens}></div>
                </div>
            </div>
        </section>
    );
};

export default StreamlineSuccess;
