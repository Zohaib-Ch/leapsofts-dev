import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IndustryProcess.module.css';

interface ProcessStep {
    id: string;
    number: string;
    title: string;
    description: string;
    gridArea: string;
    color: string;
}

interface Category {
    label: string;
    gridRow: string;
    color: string;
}

const CATEGORIES: Category[] = [
    { label: 'strategy', gridRow: '1 / 3', color: 'var(--color-primary-light)' },
    { label: 'development', gridRow: '3 / 7', color: '#C601F3' },
    { label: 'support', gridRow: '7 / 9', color: 'var(--color-orange)' },
];

const STEPS: ProcessStep[] = [
    {
        id: 'idea',
        number: '01',
        title: 'Idea',
        description: 'You tell us which business goals your new software should enable.',
        gridArea: '1 / 2 / 2 / 5',
        color: 'var(--color-primary-light)',
    },
    {
        id: 'ba',
        number: '02',
        title: 'Business Analysis',
        description: 'We analyze your requirements and define the scope of the project.',
        gridArea: '2 / 3 / 3 / 8',
        color: 'var(--color-primary-light)',
    },
    {
        id: 'proto',
        number: '03',
        title: 'UI Prototyping',
        description: 'Creating visual representations of the application interface.',
        gridArea: '3 / 4 / 4 / 8',
        color: '#C601F3',
    },
    {
        id: 'mvp',
        number: '04',
        title: 'MVP Development',
        description: 'Building the core features of your product for initial launch.',
        gridArea: '4 / 5 / 5 / 19',
        color: '#C601F3',
    },
    {
        id: 'testing',
        number: '05',
        title: 'Testing',
        description: 'Ensuring quality and reliability through rigorous checks.',
        gridArea: '5 / 4 / 6 / 19',
        color: '#C601F3',
    },
    {
        id: 'deployment',
        number: '06',
        title: 'Deployment',
        description: 'Releasing the software to a production environment.',
        gridArea: '6 / 9 / 7 / 19',
        color: '#C601F3',
    },
    {
        id: 'uat',
        number: '07',
        title: 'UAT',
        description: 'User Acceptance Testing to ensure the solution meets needs.',
        gridArea: '7 / 19 / 8 / 21',
        color: 'var(--color-orange)',
    },
    {
        id: 'future',
        number: '',
        title: 'Future development',
        description: 'Ongoing improvements and new features post-launch.',
        gridArea: '8 / 21 / 9 / 26',
        color: 'var(--text-muted)',
    },
];

const WEEKS = Array.from({ length: 12 }, (_, i) => ({
    label: `Week ${i + 1}`,
    gridColumn: `${(i * 2) + 2} / ${(i * 2) + 4}`,
}));

interface IndustryProcessProps {
    titleMain: string;
    titleAccent?: string;
    titleEnd?: string;
}

const IndustryProcess: React.FC<IndustryProcessProps> = ({ titleMain, titleAccent = "Process", titleEnd }) => {
    const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

    return (
        <section className={`${styles.processSection} anchor-block`}>
            <div className="container">
                <motion.div
                    className={styles.titleSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.chartLabel}>OUR PROCESS</p>
                    <h2 className={styles.chartTitle}>
                        {titleMain} <span>{titleAccent}</span>
                        {titleEnd}
                    </h2>
                    <p className={styles.chartDescription}>
                        As part of Leapsofts’s commitment to delivering an MVP within 6 to 12 months, the following depiction of a typical project lifecycle highlights Leapsofts’s streamlined approach to healthcare product development. Our end-to-end development process is designed to deliver custom healthcare software on time, on budget, and on point—every time.
                    </p>
                </motion.div>

                <div className={styles.chartWrapper}>
                    <div className={styles.chartContainer}>
                        {/* Categories */}
                        {CATEGORIES.map((cat, idx) => (
                            <motion.div
                                key={cat.label}
                                className={styles.categoryLabel}
                                style={{ gridRow: cat.gridRow, gridColumnStart: 1 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <span className={styles.categoryText} style={{ color: cat.color }}>
                                    {cat.label}
                                </span>
                            </motion.div>
                        ))}

                        {/* Steps */}
                        {STEPS.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                className={styles.stepItem}
                                style={{ gridArea: step.gridArea }}
                                onMouseEnter={() => setActiveStep(step)}
                                onMouseLeave={() => setActiveStep(null)}
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.05), ease: "easeOut" }}
                            >
                                <h3 className={styles.stepTitle}>
                                    {step.number} {step.title}
                                </h3>
                                <div
                                    className={styles.stepBar}
                                    style={{ backgroundColor: step.color }}
                                />
                                {step.id === 'future' && (
                                    <svg aria-hidden="true" width="100%" height="1" className="absolute bottom-0 left-0">
                                        <line
                                            strokeDasharray="5, 5"
                                            x1="0"
                                            y1="0"
                                            x2="100%"
                                            y2="0"
                                            style={{ strokeWidth: 2, stroke: 'var(--border-color)' }}
                                        />
                                    </svg>
                                )}
                            </motion.div>
                        ))}

                        {/* Active Step Info (Sticky Detail Box) */}
                        <AnimatePresence>
                            {activeStep && (
                                <motion.div
                                    className={`${styles.detailBox} ${styles.active}`}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={styles.detailContentWrapper}>
                                        <div className={styles.detailHeader}>
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" className={styles.detailIcon}>
                                                <path d="M6.51285 2.99494L12.2561 2.99477L16.0851 9.62716L10.341 9.62686L6.51285 2.99494Z" fill="currentColor" opacity="0.8" />
                                                <path d="M6.51213 16.2587L12.2562 16.259L16.085 9.6272L10.341 9.6269L6.51213 16.2587Z" fill="currentColor" />
                                            </svg>
                                            <h4 className={styles.detailTitle}>{activeStep.title}</h4>
                                        </div>
                                        <p className={styles.detailContent}>{activeStep.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Weeks */}
                        {WEEKS.map((week, idx) => (
                            <motion.div
                                key={week.label}
                                className={styles.timelineLabel}
                                style={{ gridRowStart: 9, gridColumn: week.gridColumn }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.05) }}
                            >
                                <span>{week.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default IndustryProcess;