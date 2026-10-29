import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
    ShieldCheck,
    Zap,
    Lock,
    Cpu,
    Cloud,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import styles from './heroSlider.module.css';
import Button from '../Button/Button';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import { useContactModal } from '../../context/ContactModalContext';
import { useTheme } from '../../context/ThemeContext';
import type { SanityHero } from '../../sanity/types';

export interface HeroSlideData {
    id: string;
    number: string;
    tagline: string;
    titleMain: string;
    titleAccent: string;
    titleEnd?: string;
    description: string;
    buttonText: string;
    buttonPath?: string;
    backgroundImage: string;
    backgroundImageLight?: string;
    backgroundAlt: string;
    backgroundAltLight?: string;
    trustBadges: { icon: 'shield' | 'zap' | 'lock' | 'cloud' | 'cpu' | 'sparkles'; text: string }[];
    metrics: { label: string; value: string }[];
}

const DEFAULT_SLIDES: HeroSlideData[] = [
    {
        id: 'software-platform',
        number: '01',
        tagline: 'Enterprise Software Development',
        titleMain: 'Custom Software Engineered for',
        titleAccent: 'Enterprise Scale & Velocity',
        titleEnd: '',
        description: 'Architect high-concurrency microservices, resilient APIs, and custom software platforms with 100% code ownership and zero tech debt.',
        buttonText: 'Schedule Architecture Review',
        backgroundImage: 'https://cdn.sanity.io/images/egqy3ztp/production/300a88c669f0a4b78f69b76ce9f0443debaa18e3-1376x768.jpg',
        backgroundImageLight: 'https://cdn.sanity.io/images/egqy3ztp/production/e4a7e8fc7793adc7502f5dedf23b61d40dd3d09c-1376x768.jpg',
        backgroundAlt: 'Enterprise microservices architecture topology with glowing API gateway orchestrations in dark mode',
        backgroundAltLight: 'Architectural enterprise microservices cluster rendered in frosted glass and daylight in light mode',
        trustBadges: [
            { icon: 'shield', text: 'Enterprise Architecture' },
            { icon: 'zap', text: 'High-Concurrency Ready' },
            { icon: 'lock', text: '100% Code Ownership' },
        ],
        metrics: [
            { label: 'Uptime SLA Guarantee', value: '99.999%' },
            { label: 'Code & IP Handover', value: '100%' },
            { label: 'Architecture Guarantee', value: 'Zero Debt' }
        ]
    },
    {
        id: 'mvp-velocity',
        number: '02',
        tagline: 'Accelerated MVP Launch Pods',
        titleMain: 'From Concept to Production MVP in',
        titleAccent: '3 to 5 Months',
        titleEnd: '',
        description: 'Deploy dedicated senior software engineering pods that accelerate product roadmaps into focused bi-weekly sprints with guaranteed milestone SLAs.',
        buttonText: 'Launch MVP Sprint',
        backgroundImage: 'https://cdn.sanity.io/images/egqy3ztp/production/2558f5f3d6fb5a616b665b90a81c5770d186440c-1376x768.jpg',
        backgroundImageLight: 'https://cdn.sanity.io/images/egqy3ztp/production/5bcc71d4a396083825fa569ea47df488990317b2-1376x768.jpg',
        backgroundAlt: 'Agile MVP velocity dashboard cockpit showing bi-weekly sprint delivery metrics in dark mode',
        backgroundAltLight: 'Agile MVP velocity and sprint burndown dashboard on floating devices in daylight in light mode',
        trustBadges: [
            { icon: 'zap', text: '3-5 Mo MVP Velocity' },
            { icon: 'cpu', text: 'Bi-Weekly Agile Sprints' },
            { icon: 'shield', text: 'Guaranteed Milestone SLA' },
        ],
        metrics: [
            { label: 'Production Launch', value: '3-5 Months' },
            { label: 'Sprint Cadence', value: 'Bi-Weekly' },
            { label: 'Senior Pod Talent', value: 'Top 1%' }
        ]
    },
    {
        id: 'cloud-ai',
        number: '03',
        tagline: 'Cloud Modernization & Autonomous AI',
        titleMain: 'Zero-Downtime Cloud Modernization &',
        titleAccent: 'Autonomous AI Agents',
        titleEnd: '',
        description: 'Modernize legacy systems on AWS & Azure, deploy CI/CD pipelines, and embed secure enterprise AI agents with SOC2 Type II compliance.',
        buttonText: 'Map Cloud & AI Roadmap',
        backgroundImage: 'https://cdn.sanity.io/images/egqy3ztp/production/96ca2be4c98d5886dd1f0f997235c1a12ff3c76c-1376x768.jpg',
        backgroundImageLight: 'https://cdn.sanity.io/images/egqy3ztp/production/654c7d81a958b80a785ceb358fc48e629bb363d4-1376x768.jpg',
        backgroundAlt: 'Autonomous AI neural model network and zero-trust cloud infrastructure in dark mode',
        backgroundAltLight: 'Autonomous AI neural network and SOC2 compliance cloud servers in daylight in light mode',
        trustBadges: [
            { icon: 'cloud', text: '99.99% Cloud SLA' },
            { icon: 'shield', text: 'SOC2 & ISO 27001 Ready' },
            { icon: 'lock', text: 'Zero-Downtime Cutover' },
        ],
        metrics: [
            { label: 'Cloud Availability SLA', value: '99.99%' },
            { label: 'Security Compliance', value: 'SOC2 Type II' },
            { label: 'AI Orchestration', value: 'Multi-Agent' }
        ]
    }
];

interface HeroSliderProps {
    slides?: HeroSlideData[];
    autoPlayInterval?: number;
    onButtonClick?: (slide?: HeroSlideData) => void;
    cmsHero?: SanityHero;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
    slides: customSlides,
    autoPlayInterval: customAutoPlayInterval,
    onButtonClick,
    cmsHero
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { openContactModal } = useContactModal();

    // Priority: cmsHero.autoPlayInterval -> prop autoPlayInterval -> 5000ms
    const autoPlayInterval = cmsHero?.autoPlayInterval || customAutoPlayInterval || 5000;

    // Merge multi-slide or single-slide cmsHero data, falling back gracefully to engineered defaults
    const slides = useMemo<HeroSlideData[]>(() => {
        if (customSlides && customSlides.length > 0) return customSlides;

        // If Sanity CMS has configured multi-slide showcase
        if (cmsHero?.slides && cmsHero.slides.length > 0) {
            return cmsHero.slides.map((s, idx) => {
                const fallback = DEFAULT_SLIDES[idx % DEFAULT_SLIDES.length];
                return {
                    id: s.id || fallback.id || `slide-${idx + 1}`,
                    number: s.number || fallback.number || `0${idx + 1}`,
                    tagline: s.tagline || fallback.tagline,
                    titleMain: s.titleMain || fallback.titleMain,
                    titleAccent: s.titleAccent || fallback.titleAccent,
                    titleEnd: s.titleEnd !== undefined ? s.titleEnd : (fallback.titleEnd || ''),
                    description: s.description || fallback.description,
                    buttonText: s.buttonText || fallback.buttonText,
                    buttonPath: s.buttonPath || fallback.buttonPath || '#contact',
                    backgroundImage: s.imageUrl || fallback.backgroundImage,
                    backgroundImageLight: s.imageLightUrl || fallback.backgroundImageLight,
                    backgroundAlt: s.backgroundAlt || fallback.backgroundAlt,
                    backgroundAltLight: s.backgroundAltLight || fallback.backgroundAltLight,
                    trustBadges: s.trustBadges && s.trustBadges.length > 0
                        ? s.trustBadges
                        : fallback.trustBadges,
                    metrics: s.metrics && s.metrics.length > 0
                        ? s.metrics
                        : fallback.metrics,
                };
            });
        }

        // If legacy single-slide CMS fields exist
        if (cmsHero && (cmsHero.title || cmsHero.subtitle || cmsHero.imageUrl)) {
            return DEFAULT_SLIDES.map((slide, idx) => {
                if (idx === 0) {
                    let titleMain = slide.titleMain;
                    let titleAccent = slide.titleAccent;

                    if (cmsHero.title && cmsHero.title2 && cmsHero.title2.length <= 25) {
                        titleMain = cmsHero.title;
                        titleAccent = cmsHero.title2;
                    } else if (cmsHero.title && cmsHero.title.includes('Engineered for')) {
                        const parts = cmsHero.title.split('Engineered for');
                        titleMain = (parts[0] + 'Engineered for').trim();
                        titleAccent = parts[1].trim();
                    } else if (cmsHero.title) {
                        titleMain = cmsHero.title;
                        titleAccent = cmsHero.title2 || '';
                    }

                    const conciseDesc = cmsHero.subtitle && cmsHero.subtitle.length <= 145
                        ? cmsHero.subtitle
                        : slide.description;

                    return {
                        ...slide,
                        titleMain,
                        titleAccent,
                        description: conciseDesc,
                        buttonText: cmsHero.primaryCtaText || slide.buttonText,
                        buttonPath: cmsHero.primaryCtaPath || '#contact',
                        backgroundImage: cmsHero.imageUrl || slide.backgroundImage,
                        backgroundImageLight: cmsHero.imageLightUrl || slide.backgroundImageLight
                    };
                }
                return slide;
            });
        }

        return DEFAULT_SLIDES;
    }, [customSlides, cmsHero]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);

    const touchStartX = useRef<number | null>(null);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning, currentSlide]);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning, slides.length]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning, slides.length]);

    // Slide auto-advance is perfectly synchronized with the liquid progress bar animation
    const handleProgressComplete = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    // Touch gesture swipe handling for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diffX = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diffX) > 45) {
            if (diffX > 0) nextSlide();
            else prevSlide();
        }
        touchStartX.current = null;
    };

    const handleCtaClick = () => {
        if (onButtonClick) {
            onButtonClick(activeSlide);
        } else if (activeSlide.buttonPath) {
            if (activeSlide.buttonPath.startsWith('#')) {
                const elem = document.getElementById(activeSlide.buttonPath.replace('#', ''));
                if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                } else {
                    openContactModal();
                }
            } else {
                window.location.href = activeSlide.buttonPath;
            }
        } else {
            openContactModal();
        }
    };

    const renderBadgeIcon = (icon: string) => {
        switch (icon) {
            case 'shield': return <ShieldCheck size={14} className={styles.trustIcon} />;
            case 'zap': return <Zap size={14} className={styles.trustIcon} />;
            case 'lock': return <Lock size={14} className={styles.trustIcon} />;
            case 'cloud': return <Cloud size={14} className={styles.trustIcon} />;
            case 'cpu': return <Cpu size={14} className={styles.trustIcon} />;
            default: return <Sparkles size={14} className={styles.trustIcon} />;
        }
    };

    const activeSlide = slides[currentSlide];

    return (
        <section
            className={`${styles.heroStage} ${isLoaded ? styles.isLoaded : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Cinematic Hero Showcase"
        >
            {/* Background Images Layer Stack with Smooth Crossfade & Ambient Ken Burns */}
            <div className={styles.backgroundStack} aria-hidden="true">
                {slides.map((slide, idx) => {
                    const isActive = idx === currentSlide;
                    const isLight = theme === 'light';
                    const rawBg = isLight && slide.backgroundImageLight
                        ? slide.backgroundImageLight
                        : slide.backgroundImage;
                    const currentAlt = isLight && slide.backgroundAltLight
                        ? slide.backgroundAltLight
                        : slide.backgroundAlt;

                    const isSanity = rawBg.includes('cdn.sanity.io');
                    const separator = rawBg.includes('?') ? '&' : '?';
                    const currentBg = isSanity ? `${rawBg}${separator}auto=format&fit=max&w=1200&q=80` : rawBg;
                    const srcSet = isSanity
                        ? `${rawBg}${separator}auto=format&fit=max&w=640&q=80 640w, ${rawBg}${separator}auto=format&fit=max&w=1024&q=80 1024w, ${rawBg}${separator}auto=format&fit=max&w=1376&q=80 1376w`
                        : undefined;

                    return (
                        <div
                            key={slide.id}
                            className={`${styles.backgroundImageWrapper} ${isActive ? styles.bgActive : styles.bgInactive}`}
                        >
                            <img
                                src={currentBg}
                                srcSet={srcSet}
                                sizes="100vw"
                                alt={currentAlt}
                                className={styles.backgroundImage}
                                loading={idx === 0 ? 'eager' : 'lazy'}
                                fetchPriority={idx === 0 ? 'high' : 'low'}
                                decoding={idx === 0 ? 'sync' : 'async'}
                                width="1376"
                                height="768"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Interactive Ambient Particle Canvas Layer */}
            <div className={styles.particleWrapper} aria-hidden="true">
                <ParticleCanvas />
            </div>

            {/* Text Contrast Gradient Scrim (Left-Side Only) */}
            <div className={styles.scrimHorizontal} aria-hidden="true" />

            {/* Top & Bottom Edge Blur Overlays */}
            <div className={styles.edgeBlurTop} aria-hidden="true" />
            <div className={styles.edgeBlurBottom} aria-hidden="true" />

            {/* Foreground Content Container */}
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper} key={`content-block-${activeSlide.id}`}>
                    {/* Clean Gradient Subheading Eyebrow */}
                    {activeSlide.tagline && (
                        <p className={styles.taglineEyebrow}>
                            {activeSlide.tagline}
                        </p>
                    )}

                    {/* Master Animated Headline */}
                    <h1 className={styles.masterTitle}>
                        <span className={styles.titleLine}>
                            {activeSlide.titleMain}{' '}
                            <span className={styles.gradientAccent}>
                                {activeSlide.titleAccent}
                            </span>
                            {activeSlide.titleEnd ? ` ${activeSlide.titleEnd}` : ''}
                        </span>
                    </h1>

                    {/* Concise Animated Subtitle */}
                    <p className={styles.masterSubtitle}>
                        {activeSlide.description}
                    </p>

                    {/* High-Impact Proof Points / Metrics Strip */}
                    <div className={styles.metricsRow}>
                        {activeSlide.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className={styles.metricCard}>
                                <span className={styles.metricCardValue}>{metric.value}</span>
                                <span className={styles.metricCardLabel}>{metric.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Primary Call to Action Button */}
                    <div className={styles.ctaRow}>
                        <Button
                            text={activeSlide.buttonText}
                            color1="var(--color-primary)"
                            color2="var(--color-primary-light)"
                            onClick={handleCtaClick}
                            hasIcon
                        />
                    </div>

                    {/* Micro Trust Badges Row */}
                    <div className={styles.trustBadgesRow}>
                        {activeSlide.trustBadges.map((badge, bIdx) => (
                            <div key={bIdx} className={styles.trustBadgeItem}>
                                {renderBadgeIcon(badge.icon)}
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Minimalist Slide Controls Bar (Center Dashes Only) */}
                <div className={styles.controlsBar}>
                    {/* Interactive Slide Progress Indicators */}
                    <div className={styles.indicatorsList} role="tablist" aria-label="Slide Selection">
                        {slides.map((slide, idx) => (
                            <button
                                key={slide.id}
                                type="button"
                                onClick={() => goToSlide(idx)}
                                className={`${styles.indicatorPill} ${idx === currentSlide ? styles.indicatorActive : ''}`}
                                role="tab"
                                aria-selected={idx === currentSlide}
                                aria-label={`Slide ${idx + 1}: ${slide.tagline}`}
                            >
                                <span className={styles.indicatorTrack}>
                                    {idx === currentSlide && (
                                        <span
                                            key={`progress-fill-${currentSlide}`}
                                            className={styles.indicatorProgressFill}
                                            style={{
                                                animationDuration: `${autoPlayInterval}ms`
                                            }}
                                            onAnimationEnd={handleProgressComplete}
                                        />
                                    )}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
