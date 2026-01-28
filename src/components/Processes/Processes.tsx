import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

    return (
        <div
            className={styles.cardContent}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={styles.topSection}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                }}
            >
                <span className={styles.phaseLabel}>{phase.phase}</span>
            </motion.div>

            <div className={styles.cardMainArea}>
                <AnimatePresence mode="popLayout">
                    {!isHovered && (
                        <motion.div
                            key="title"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3,
                                scale: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className={styles.titleContainer}
                        >
                            <h3 className={styles.cardTitle}>{phase.title}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    layout
                    className={styles.featuresWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <motion.div
                        className={styles.divider}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.4,
                            ease: "easeOut"
                        }}
                    />
                    <ul className={styles.featuresList}>
                        {phase.features.map((feature, idx) => {
                            const isObject = typeof feature !== "string";
                            const title = isObject ? (feature as ProcessFeature).title : (feature as string);
                            const description = isObject ? (feature as ProcessFeature).description : null;

                            return (
                                <motion.li
                                    key={idx}
                                    className={styles.featureItem}
                                    layout
                                    initial={{ opacity: 0, y: -15, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        delay: 0.4 + (idx * 0.15),
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                >
                                    <div className={styles.featureHeader}>
                                        <span className={styles.featureIcon}>❯</span>
                                        <span className={styles.featureTitleText}>{title}</span>
                                    </div>
                                    <AnimatePresence>
                                        {isHovered && description && (
                                            <motion.div
                                                className={styles.featureDescription}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.4, ease: "easeOut", delay: 0.4 + (idx * 0.15) },
                                                        opacity: { duration: 0.3, delay: 0.5 + (idx * 0.15) }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.2 },
                                                        opacity: { duration: 0.1 }
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
                </motion.div>
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
    const [activePhase, setActivePhase] = useState(0); // 0-indexed, default to Engineering (index 2)

    const handlePhaseClick = (index: number) => {
        console.log(index);
        setActivePhase(index);
    };

    return (
        <section className={styles.processes}>
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
                                    ? "/shapes/tile-dark-purple-gradient.svg"
                                    : "/shapes/tile-black.svg";

                                // Vertical position: Phase 4 at bottom (stackIndex 0), Phase 1 at top (stackIndex 3)
                                const verticalOffset = stackIndex * 60;

                                // Z-index: higher stack position = higher z-index, but active always on top
                                const zIndex = stackIndex + 1;

                                return (
                                    <div
                                        key={phaseIndex}
                                        className={`${styles.tile} ${isActive ? styles.activeTile : ""}`}
                                        style={{
                                            bottom: `${verticalOffset}px`,
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
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
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
