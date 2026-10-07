import React from 'react';
import { Zap, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import styles from './HeroMotionVisual.module.css';

interface HeroMotionVisualProps {
    className?: string;
}

const HeroMotionVisual: React.FC<HeroMotionVisualProps> = ({ className }) => {
    return (
        <div className={`${styles.visualWrapper} ${className || ''}`} aria-hidden="true">
            {/* Ambient Gradient Auras (Zero Filter/Blur Overhead) */}
            <div className={styles.ambientAuraPurple} />
            <div className={styles.ambientAuraOrange} />

            {/* Central Tech Canvas */}
            <div className={styles.sceneContainer}>
                {/* 3D Geometric Ring Accents (GPU Composited) */}
                <div className={styles.orbitSystem}>
                    <div className={`${styles.ring} ${styles.ring1}`} />
                    <div className={`${styles.ring} ${styles.ring2}`} />
                </div>

                {/* Static SVG Constellation Grid (Zero Paint Cycles) */}
                <svg className={styles.svgNetwork} viewBox="0 0 400 400" fill="none">
                    <defs>
                        <linearGradient id="laserGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="laserGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#c026d3" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M200,200 L80,110 M200,200 L320,110 M200,200 L110,290 M200,200 L300,290"
                        stroke="url(#laserGrad1)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                    />
                    <path
                        d="M80,110 Q140,50 200,90 T320,110"
                        stroke="url(#laserGrad2)"
                        strokeWidth="1.5"
                        fill="none"
                    />

                    {/* Nodes */}
                    <circle cx="80" cy="110" r="4.5" fill="#9333ea" />
                    <circle cx="320" cy="110" r="4.5" fill="#f97316" />
                    <circle cx="110" cy="290" r="4" fill="#3b82f6" />
                    <circle cx="300" cy="290" r="4.5" fill="#c026d3" />
                </svg>

                {/* Central Tech Core */}
                <div className={styles.coreHologram}>
                    <div className={styles.coreInnerGlow} />
                    <div className={styles.coreIconWrapper}>
                        <Cpu className={styles.coreIcon} size={32} />
                    </div>
                </div>

                {/* Performance-Optimized Floating Glass Badges */}
                {/* Badge 1: MVP Velocity */}
                <div className={`${styles.glassBadge} ${styles.badgeTopRight}`}>
                    <div className={styles.badgeIconBox} style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
                        <Zap size={16} color="#ffffff" />
                    </div>
                    <div className={styles.badgeContent}>
                        <div className={styles.badgeHeader}>
                            <span className={styles.badgeTitle}>MVP Velocity</span>
                            <span className={styles.liveIndicator}>
                                <span className={styles.liveDot} />
                                3-5 mo
                            </span>
                        </div>
                        <div className={styles.progressBarWrapper}>
                            <div className={styles.progressBarFill} />
                        </div>
                    </div>
                </div>

                {/* Badge 2: Enterprise Security */}
                <div className={`${styles.glassBadge} ${styles.badgeBottomLeft}`}>
                    <div className={styles.badgeIconBox} style={{ background: 'linear-gradient(135deg, #9333ea, #7e22ce)' }}>
                        <ShieldCheck size={16} color="#ffffff" />
                    </div>
                    <div className={styles.badgeContent}>
                        <span className={styles.badgeTitle}>SOC2 & ISO 27001</span>
                        <span className={styles.badgeSubtitle}>Enterprise Shield Active</span>
                    </div>
                </div>

                {/* Badge 3: Cloud Scalability */}
                <div className={`${styles.glassBadge} ${styles.badgeBottomRight}`}>
                    <div className={styles.badgeIconBox} style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                        <Sparkles size={16} color="#ffffff" />
                    </div>
                    <div className={styles.badgeContent}>
                        <span className={styles.badgeTitle}>99.99% Cloud SLA</span>
                        <span className={styles.badgeSubtitle}>High Concurrency & AI</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroMotionVisual;
