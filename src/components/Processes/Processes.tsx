import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Processes.module.css";

export interface ProcessFeature {
    title: string;
    description: string;
}

export interface ProcessPhase {
    id: number;
    phase: string;
    title: string;
    description: string;
    features: (string | ProcessFeature)[];
}

const CardContent: React.FC<{ phase: ProcessPhase }> = ({ phase }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
        setExpandedItem(null);
    }, [phase.id]);

    const toggleFeature = (idx: number) => {
        setExpandedItem(prev => prev === idx ? null : idx);
    };

    return (
        <div
            className={styles.cardContent}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={styles.topSection}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
            >
                <span className={styles.phaseLabel}>{phase.phase}</span>
            </motion.div>

            <div ref={scrollRef} className={styles.cardMainArea}>
                <AnimatePresence mode="popLayout">
                    {!isHovered && expandedItem === null && (
                        <motion.div
                            key="title"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.titleContainer}
                        >
                            <h3 className={styles.cardTitle}>{phase.title}</h3>
                            {phase.description && (
                                <p className={styles.phaseDescription}>{phase.description}</p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={styles.featuresWrapper}>
                    <div className={styles.divider} />
                    <ul className={styles.featuresList}>
                        {phase.features.map((feature, idx) => {
                            const isObject = typeof feature !== "string";
                            const title = isObject ? (feature as ProcessFeature).title : (feature as string);
                            const description = isObject ? (feature as ProcessFeature).description : null;
                            const isItemExpanded = isHovered || expandedItem === idx;

                            return (
                                <motion.li
                                    key={idx}
                                    className={`${styles.featureItem} ${isItemExpanded ? styles.featureExpanded : ''}`}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.18, delay: idx * 0.035, ease: "easeOut" }}
                                    onClick={() => toggleFeature(idx)}
                                >
                                    <div className={styles.featureHeader}>
                                        <span className={`${styles.featureIcon} ${isItemExpanded ? styles.iconExpanded : ''}`}>❯</span>
                                        <span className={styles.featureTitleText}>{title}</span>
                                    </div>
                                    <AnimatePresence>
                                        {isItemExpanded && description && (
                                            <motion.div
                                                className={styles.featureDescription}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: {
                                                            duration: 0.42,
                                                            ease: [0.25, 1, 0.5, 1],
                                                            delay: isHovered ? 0.12 + (idx * 0.08) : 0
                                                        },
                                                        opacity: {
                                                            duration: 0.35,
                                                            ease: "easeOut",
                                                            delay: isHovered ? 0.16 + (idx * 0.08) : 0.05
                                                        }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.25, ease: "easeInOut" },
                                                        opacity: { duration: 0.18 }
                                                    }
                                                }}
                                            >
                                                <p className={styles.descriptionText}>{description}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

interface ProcessPhaseProps {
    title: string;
    phaseLabels: string[];
    processPhases: ProcessPhase[];
}

const Processes: React.FC<ProcessPhaseProps> = ({ title, phaseLabels, processPhases }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [activePhase, setActivePhase] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
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

    const handlePhaseClick = (index: number) => {
        setActivePhase(index);
    };

    return (
        <section ref={sectionRef} className={`${styles.processes} ${isVisible ? styles.revealed : ''}`}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    {title}
                </h2>

                <div className={styles.content}>
                    {/* Left side - 3D Tile Stack */}
                    <div className={styles.tileStack}>
                        <div className={styles.tilesContainer}>
                            {/* Render tiles from Phase 4 (bottom) to Phase 1 (top) */}
                            {[3, 2, 1, 0].map((phaseIndex, stackIndex) => {
                                const isActive = phaseIndex === activePhase;
                                const tileImage = isActive
                                    ? (isLight ? "/shapes/tile-light-active.svg?v=darkstyle" : "/shapes/tile-dark-purple-gradient.svg")
                                    : (isLight ? "/shapes/tile-light.svg?v=darkstyle" : "/shapes/tile-black.svg");

                                const verticalOffset = stackIndex * 60;
                                const zIndex = stackIndex + 1;

                                return (
                                    <div
                                        key={phaseIndex}
                                        className={`${styles.tile} ${isActive ? styles.activeTile : ""}`}
                                        style={{
                                            bottom: `calc(var(--tile-offset, 60px) * ${stackIndex})`,
                                            zIndex: zIndex,
                                        }}
                                    >
                                        <div className={styles.tileInner}>
                                            <img src={tileImage} alt={`Phase ${phaseIndex + 1}`} />
                                            <span className={`${styles.tileLabel} ${isActive ? styles.activeTileLabel : ""}`} onClick={() => handlePhaseClick(phaseIndex)}>
                                                {phaseLabels[phaseIndex]}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side - Sliding Cards with Tabs */}
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardsWrapper}>
                            <AnimatePresence mode="wait">
                                {processPhases.map((phase, index) => {
                                    const isActive = index === activePhase;
                                    if (!isActive) return null;

                                    return (
                                        <motion.div
                                            key={phase.id}
                                            className={styles.phaseCard}
                                            initial={{ opacity: 0, x: 8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -8 }}
                                            transition={{ duration: 0.16, ease: "easeOut" }}
                                        >
                                            <CardContent phase={phase} />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Phase Tabs on the right side of cards */}
                        <div className={styles.phaseTabs}>
                            {processPhases.map((_, index) => (
                                <div
                                    key={index}
                                    className={`${styles.phaseTab} ${index === activePhase ? styles.activeTab : ""}`}
                                    onClick={() => handlePhaseClick(index)}
                                >
                                    <span className={styles.tabText}>PHASE {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Labels */}
                <div className={styles.bottomNav}>
                    {phaseLabels.map((label, index) => (
                        <button
                            key={index}
                            className={`${styles.navLabel} ${index === activePhase ? styles.activeNavLabel : ""}`}
                            onClick={() => handlePhaseClick(index)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Processes;
