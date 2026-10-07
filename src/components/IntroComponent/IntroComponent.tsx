import React from 'react';
import type { ReactNode } from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';
import styles from './intro.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import { useTheme } from '../../context/ThemeContext';
import HeroMotionVisual from './HeroMotionVisual';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import { parseFormattedText, type FormattedSegment } from '../../utils/textParser';

interface IntroComponentProps {
    title: string;
    title2?: string;
    subtitle?: string;
    description?: string | FormattedSegment[];
    videoSrc?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    children?: ReactNode;
    introDescription?: FormattedSegment[];
    showMotionVisual?: boolean;
    badgeText?: string;
    titleAccent?: string;
    showTrustBadges?: boolean;
}

const renderEnhancedTitle = (rawTitle: string, explicitAccent?: string) => {
    if (explicitAccent && rawTitle.includes(explicitAccent)) {
        const parts = rawTitle.split(explicitAccent);
        return (
            <>
                {parts[0]}
                <span className={styles.gradientAccent}>{explicitAccent}</span>
                {parts.slice(1).join(explicitAccent)}
            </>
        );
    }

    const commonAccents = [
        "Enterprise Velocity",
        "Web App Development",
        "Mobile App Development",
        "Custom Software Development",
        "Cloud Migration",
        "Cloud Engineering",
        "Data Science & AI",
        "Quality Assurance",
        "Cyber Security",
        "Dedicated Teams",
        "Proof of Concept",
        "Ideation Workshop",
        "Strategic Partnerships",
    ];

    for (const accent of commonAccents) {
        if (rawTitle.toLowerCase().includes(accent.toLowerCase())) {
            const regex = new RegExp(`(${accent})`, 'i');
            const parts = rawTitle.split(regex);
            return (
                <>
                    {parts.map((part, i) =>
                        part.toLowerCase() === accent.toLowerCase() ? (
                            <span key={i} className={styles.gradientAccent}>
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}
                </>
            );
        }
    }

    const words = rawTitle.trim().split(' ');
    if (words.length >= 3) {
        const mainPart = words.slice(0, -2).join(' ');
        const accentPart = words.slice(-2).join(' ');
        return (
            <>
                {mainPart} <span className={styles.gradientAccent}>{accentPart}</span>
            </>
        );
    }

    return rawTitle;
};

const IntroComponent: React.FC<IntroComponentProps> = ({
    title,
    title2,
    subtitle,
    description,
    videoSrc = "/bg_video/leapsofts2.mp4",
    buttonText = "Schedule a Consultation",
    onButtonClick,
    introDescription,
    showMotionVisual = true,
    badgeText,
    titleAccent,
    showTrustBadges = true,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { openContactModal } = useContactModal();
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 40);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        openContactModal();
        onButtonClick && onButtonClick();
    };

    const hasIntroDesc = Boolean(introDescription && introDescription.length > 0);
    const activeSubtitle = subtitle || (hasIntroDesc && typeof description === 'string' && description.trim().length > 0 ? description : undefined);

    const bodySegments = hasIntroDesc
        ? parseFormattedText(introDescription!)
        : (description ? parseFormattedText(description) : []);

    return (
        <section className={`${styles.intro} ${isLoaded ? styles.isLoaded : ''}`} id="intro">
            {isDark ? (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster="/hero-poster.webp"
                        className={styles.videoBackground}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className={styles.overlay}></div>
                </>
            ) : (
                <div className={styles.particleWrapper}>
                    <ParticleCanvas />
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.ambientTextAura} aria-hidden="true" />

                    {/* Award-Winning Kinetic Heading */}
                    <h1 className={styles.title}>
                        {renderEnhancedTitle(title, titleAccent)}
                    </h1>

                    {/* Sub-Hero Callout Promise */}
                    {title2 && (
                        <div className={styles.title2Callout}>
                            <div className={styles.title2AccentBar} />
                            <p className={styles.title2Text}>
                                {title2.includes('3-5 months') ? (
                                    <>
                                        {title2.split('3-5 months')[0]}
                                        <span className={styles.title2Highlight}>3-5 months</span>
                                        {title2.split('3-5 months')[1]}
                                    </>
                                ) : (
                                    title2
                                )}
                            </p>
                        </div>
                    )}

                    {activeSubtitle && (
                        <h2 className={styles.heroSubtitle}>{activeSubtitle}</h2>
                    )}

                    {bodySegments.length > 0 && (
                        <p className={styles.subtitle}>
                            {bodySegments.map((item, index) => (
                                <span key={index} className={item.bold ? styles.bold : ''}>
                                    {item.text}
                                </span>
                            ))}
                        </p>
                    )}

                    <div className={styles.ctaWrapper}>
                        <Button
                            text={buttonText}
                            color1="var(--color-primary)"
                            color2="var(--color-primary-light)"
                            onClick={handleClick}
                            hasIcon
                        />
                    </div>

                    {/* Micro Trust & Verification Row */}
                    {showTrustBadges && (
                        <div className={styles.trustRow}>
                            <div className={styles.trustItem}>
                                <ShieldCheck size={15} className={styles.trustIcon} />
                                <span>Enterprise Architecture</span>
                            </div>
                            <div className={styles.trustDivider}>•</div>
                            <div className={styles.trustItem}>
                                <Zap size={15} className={styles.trustIcon} />
                                <span>3-5 Mo MVP Velocity</span>
                            </div>
                            <div className={styles.trustDivider}>•</div>
                            <div className={styles.trustItem}>
                                <Lock size={15} className={styles.trustIcon} />
                                <span>SOC2 & ISO Ready</span>
                            </div>
                        </div>
                    )}
                </div>

                {showMotionVisual && (
                    <div className={styles.visualCol}>
                        <HeroMotionVisual />
                    </div>
                )}
            </div>
        </section>
    );
};

export default IntroComponent;
