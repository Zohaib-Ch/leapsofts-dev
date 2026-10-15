import React, { useRef, useEffect } from 'react';
import styles from './ServiceOverview.module.css';
import { useContactModal } from '../../context/ContactModalContext';
import { useTheme } from '../../context/ThemeContext';

interface ServiceOverviewProps {
    label?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    description?: string;
    imagePath: string;
    imagePathLight?: string;
    chipTopText?: string;
    chipBottomText?: string;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
    label = "Brief Overview",
    titleMain,
    titleAccent,
    titleEnd,
    description,
    imagePath,
    imagePathLight,
    chipTopText = "Enterprise Architecture",
    chipBottomText = "⚡ Production-Ready SLA"
}) => {
    const { openContactModal } = useContactModal();
    const { theme } = useTheme();

    const darkImage = imagePath;
    const lightImage = imagePathLight || darkImage;
    const finalImagePath = theme === 'light' ? lightImage : darkImage;

    const visualRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
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
            const rotateY = ((x - 50) / 50) * 6;
            const rotateX = ((50 - y) / 50) * 6;

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

    const handleClick = () => {
        openContactModal();
    };

    return (
        <div className={styles.container}>
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
                        <linearGradient id="serviceOrbitPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="serviceOrbitOrange" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.45" />
                            <stop offset="60%" stopColor="#fb923c" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>

                    {/* Concentric Soft Orbital Arcs framing the right visual card area */}
                    <ellipse cx="1080" cy="400" rx="380" ry="290" stroke="url(#serviceOrbitPurple)" strokeWidth="1" strokeDasharray="6 8" opacity="0.55" />
                    <ellipse cx="1080" cy="400" rx="520" ry="380" stroke="url(#serviceOrbitOrange)" strokeWidth="1" opacity="0.35" />
                    <ellipse cx="1080" cy="400" rx="660" ry="480" stroke="url(#serviceOrbitPurple)" strokeWidth="1" strokeDasharray="10 10" opacity="0.25" />

                    {/* Celestial Tech Constellation Dots */}
                    <circle cx="1080" cy="110" r="3" fill="#ff6b00" opacity="0.65" />
                    <circle cx="1260" cy="240" r="2.5" fill="#c084fc" opacity="0.6" />
                    <circle cx="920" cy="600" r="3" fill="#ff6b00" opacity="0.55" />
                    <circle cx="1360" cy="480" r="2.5" fill="#38bdf8" opacity="0.45" />

                    {/* Clean Corner Tech Crosshairs */}
                    <g opacity="0.35" stroke="#ffffff" strokeWidth="1">
                        <line x1="1330" y1="710" x2="1350" y2="710" />
                        <line x1="1340" y1="700" x2="1340" y2="720" />
                    </g>
                </svg>
            </div>

            <div className={styles.title}>
                <h3>{label}</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.contentLeftTitle}>
                        <h2>
                            {titleMain} <span className={styles.accent}>{titleAccent}</span> {titleEnd}
                        </h2>
                    </div>
                    <div className={styles.contentLeftDescription}>{description}</div>
                    <div className={styles.contentLeftCall}>
                        <p>
                            <span onClick={handleClick} className={styles.call}>Schedule a call </span>
                            to talk about how we can prepare your software for the real world, or keep reading to learn more about our approach.
                        </p>
                    </div>
                </div>

                {/* 3D Perspective Visual Card with Spotlight & Floating Micro-Chips */}
                <div className={styles.contentRight}>
                    <div
                        ref={visualRef}
                        className={styles.visual}
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            '--spotlight-x': '50%',
                            '--spotlight-y': '50%',
                            '--spotlight-size': '240px',
                            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                        } as React.CSSProperties}
                    >
                        {/* Glowing Glass Outer Border */}
                        <div className={styles.glassBorderGlow} aria-hidden="true" />

                        {/* Floating Micro-Chip: Top Left */}
                        <div className={styles.floatingChipTop} aria-hidden="true">
                            <span className={styles.chipPulse} />
                            <span>{chipTopText}</span>
                        </div>

                        {/* Floating Micro-Chip: Bottom Right */}
                        <div className={styles.floatingChipBottom} aria-hidden="true">
                            <span>{chipBottomText}</span>
                        </div>

                        {/* Core Service Image */}
                        <img
                            src={finalImagePath}
                            alt={`${titleMain || ''} ${titleAccent || ''} ${titleEnd || ''} - Leapsofts`.trim() || "Leapsofts Enterprise Service Overview"}
                            className={styles.serviceImage}
                            loading="lazy"
                        />

                        {/* Specular Spotlight Lens & Dark Depth Vignette */}
                        <div className={styles.spotlightOverlay} aria-hidden="true" />
                        <div className={styles.spotlightLens} aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;