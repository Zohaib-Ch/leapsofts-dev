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
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

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

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!visualRef.current) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const rect = visualRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        rafRef.current = requestAnimationFrame(() => {
            const x = ((clientX - rect.left) / rect.width) * 100;
            const y = ((clientY - rect.top) / rect.height) * 100;
            setSpotlightPos({ x, y });

            // Smooth lightweight 3D Tilt (Max 6deg, no lag)
            const rotateY = ((x - 50) / 50) * 6;
            const rotateX = ((50 - y) / 50) * 6;
            setTilt({ rotateX, rotateY });
        });
    };

    const handleMouseLeave = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setTilt({ rotateX: 0, rotateY: 0 });
        setSpotlightPos({ x: 50, y: 50 });
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
            {/* Ambient Soft Orbital Arc Vector Backdrop */}
            <div className={styles.orbitalBackdrop} aria-hidden="true">
                <div className={styles.ambientGlowPurple} />
                <div className={styles.ambientGlowOrange} />

                <svg
                    className={styles.orbitalSvg}
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="softOrbitPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="softOrbitOrange" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.45" />
                            <stop offset="60%" stopColor="#fb923c" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>

                    {/* Concentric Soft Orbital Arcs framing the right visual card area */}
                    <ellipse cx="1080" cy="400" rx="420" ry="320" stroke="url(#softOrbitPurple)" strokeWidth="1" strokeDasharray="6 8" opacity="0.6" />
                    <ellipse cx="1080" cy="400" rx="560" ry="420" stroke="url(#softOrbitOrange)" strokeWidth="1" opacity="0.4" />
                    <ellipse cx="1080" cy="400" rx="700" ry="520" stroke="url(#softOrbitPurple)" strokeWidth="1" strokeDasharray="10 10" opacity="0.3" />

                    {/* Soft Diagonal Accent Rays in empty space */}
                    <path d="M960,80 L1380,500" stroke="url(#softOrbitOrange)" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
                    <path d="M780,140 L1200,560" stroke="url(#softOrbitPurple)" strokeWidth="1" opacity="0.25" />

                    {/* Ambient Celestial Constellation Dots */}
                    <circle cx="1080" cy="80" r="3" fill="#ff6b00" opacity="0.7" />
                    <circle cx="1280" cy="220" r="2.5" fill="#c084fc" opacity="0.6" />
                    <circle cx="940" cy="620" r="3" fill="#ff6b00" opacity="0.6" />
                    <circle cx="1380" cy="500" r="2.5" fill="#38bdf8" opacity="0.5" />
                    <circle cx="780" cy="140" r="2" fill="#c084fc" opacity="0.6" />

                    {/* Clean Corner Tech Crosshair in bottom right */}
                    <g opacity="0.4" stroke="#ffffff" strokeWidth="1">
                        <line x1="1340" y1="720" x2="1360" y2="720" />
                        <line x1="1350" y1="710" x2="1350" y2="730" />
                    </g>
                </svg>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}>
                    {/* Monospace Section Tag with Refined Live Dot */}
                    <div className={styles.labelWrapper}>
                        <span className={styles.livePulseDot} aria-hidden="true" />
                        <span className={styles.label}>{label}</span>
                    </div>

                    {/* High-Impact Kinetic Gradient Headline */}
                    <h2 className={styles.title}>
                        {titleMain?.trim()}{' '}
                        <span className={styles.gradientAccent}>{titleAccent?.trim()}</span>{' '}
                        {titleEnd?.trim()}
                    </h2>

                    {/* Rich Formatted Description */}
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
                        <p className={styles.descriptionSecondary}>{description2}</p>
                    )}

                    {/* Modern Soft One-Line Deliverable Pills with Vector Micro-Icons */}
                    <div className={styles.perksRow}>
                        <div className={styles.perkBadge}>
                            <div className={styles.perkIconWrapper}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                            <span className={styles.perkText}>45-Min Architecture Audit</span>
                        </div>

                        <div className={styles.perkBadge}>
                            <div className={styles.perkIconWrapper}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <span className={styles.perkText}>NDA & IP Protected</span>
                        </div>

                        <div className={styles.perkBadge}>
                            <div className={styles.perkIconWrapper}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                    <polyline points="2 17 12 22 22 17" />
                                    <polyline points="2 12 12 17 22 12" />
                                </svg>
                            </div>
                            <span className={styles.perkText}>Actionable Tech Blueprint</span>
                        </div>
                    </div>

                    {/* Action Row */}
                    <div className={styles.ctaRow}>
                        <div className={styles.buttonWrapper}>
                            <Button
                                text={buttonText}
                                color1="var(--color-primary)"
                                color2="var(--color-primary-light)"
                                onClick={handleButtonClick}
                                hasIcon
                            />
                        </div>
                        <div className={styles.trustMicro}>
                            <span className={styles.trustCheck}>✓</span>
                            <span>No commitment required • Direct consultation with senior solution architects</span>
                        </div>
                    </div>
                </div>

                {/* 3D Perspective Visual Card with Spotlight & Floating Micro-Chips */}
                <div className={`${styles.visualContainer} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}>
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
                        {/* Glowing Glass Outer Border */}
                        <div className={styles.glassBorderGlow} aria-hidden="true" />

                        {/* Floating Micro-Chip: Top Left */}
                        <div className={styles.floatingChipTop} aria-hidden="true">
                            <span className={styles.chipPulse} />
                            <span>1-on-1 CTO Session</span>
                        </div>

                        {/* Floating Micro-Chip: Bottom Right */}
                        <div className={styles.floatingChipBottom} aria-hidden="true">
                            <span>🚀 MVP in 3-5 Months</span>
                        </div>

                        <img
                            src={imageUrl}
                            alt="Strategy Session Dashboard"
                            className={styles.dashboardImage}
                            loading="lazy"
                        />
                        <div className={styles.spotlightOverlay} aria-hidden="true" />
                        <div className={styles.spotlightLens} aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamlineSuccess;
