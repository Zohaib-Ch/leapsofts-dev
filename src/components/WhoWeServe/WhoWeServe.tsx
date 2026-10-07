import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Building2, Rocket, TrendingUp, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import styles from './WhoWeServe.module.css';

export interface ClientPillar {
    badge: string;
    title: string;
    description: string;
    tag: string;
    highlights: string[];
    iconType?: 'enterprise' | 'startup' | 'growth';
}

interface WhoWeServeProps {
    kicker?: string;
    titlePrefix?: string;
    titleAccent?: string;
    description?: string;
    pillars?: ClientPillar[];
}

const DEFAULT_PILLARS: ClientPillar[] = [
    {
        badge: "ENTERPRISE ARCHITECTURE",
        title: "Global Enterprises & Fortune 500s",
        description: "Engineering resilient, multi-cloud platforms and modernizing mission-critical legacy architectures with zero downtime and strict institutional compliance.",
        tag: "99.99% Uptime SLA",
        iconType: "enterprise",
        highlights: [
            "Cloud microservices & legacy re-architecture",
            "Enterprise SOC2 Type II, HIPAA & ISO standards",
            "High-concurrency data models & 24/7 reliability"
        ]
    },
    {
        badge: "3-5 MONTH MVP VELOCITY",
        title: "VC-Backed Startups & High-Velocity Scaleups",
        description: "Accelerating time-to-market with dedicated engineering pods that ship production-grade MVPs, robust APIs, and scalable SaaS foundations in 3 to 5 months.",
        tag: "Rapid Market Validation",
        iconType: "startup",
        highlights: [
            "Rapid Product-Market Fit & prototype sprints",
            "Turnkey dedicated agile developer pods",
            "Automated CI/CD pipelines & elastic cloud scale"
        ]
    },
    {
        badge: "DIGITAL TRANSFORMATION",
        title: "Mid-Market Leaders & PE Portfolio Companies",
        description: "Consolidating digital tech stacks, deploying AI workflows, and unlocking operational automation for measurable EBITDA growth and margin expansion.",
        tag: "EBITDA & ROI Driven",
        iconType: "growth",
        highlights: [
            "AI workflow automation & custom RevOps pipelines",
            "Tech stack consolidation & technical due diligence",
            "Measurable operational margin & efficiency gains"
        ]
    }
];

const WhoWeServe: React.FC<WhoWeServeProps> = ({
    kicker = "TARGET CLIENT ARCHETYPES",
    titlePrefix = "Who ",
    titleAccent = "we serve",
    description = "Orchestrating commerce, intelligence, and high-velocity engineering across global enterprises, scaling startups, and private equity portfolio ecosystems.",
    pillars = DEFAULT_PILLARS
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    const renderIcon = (type?: string) => {
        switch (type) {
            case 'enterprise':
                return <Building2 className={styles.pillarIconSvg} />;
            case 'startup':
                return <Rocket className={styles.pillarIconSvg} />;
            case 'growth':
                return <TrendingUp className={styles.pillarIconSvg} />;
            default:
                return <Sparkles className={styles.pillarIconSvg} />;
        }
    };

    return (
        <section className={styles.whoSection} id="who-we-serve-section">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {kicker && (
                        <motion.span className={styles.kicker} variants={textVariants}>
                            <Sparkles className={styles.kickerIcon} />
                            {kicker}
                        </motion.span>
                    )}

                    <motion.h2 className={styles.title} variants={textVariants}>
                        {titlePrefix}
                        <span className={styles.accent}>{titleAccent}</span>
                    </motion.h2>

                    <motion.p className={styles.description} variants={textVariants}>
                        {description}
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.pillarsGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.pillarCard}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    {renderIcon(pillar.iconType)}
                                </div>
                                <span className={styles.tagBadge}>{pillar.tag}</span>
                            </div>

                            <span className={styles.pillarBadge}>{pillar.badge}</span>
                            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                            <p className={styles.pillarDesc}>{pillar.description}</p>

                            <div className={styles.highlightsContainer}>
                                <h4 className={styles.highlightsHeader}>Key Value Drivers</h4>
                                <ul className={styles.highlightsList}>
                                    {pillar.highlights.map((item, hIdx) => (
                                        <li key={hIdx} className={styles.highlightItem}>
                                            <CheckCircle2 className={styles.checkIcon} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeServe;
