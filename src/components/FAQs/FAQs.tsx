import React, { useState, useRef, useMemo } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQs.module.css';
import { useLocation } from 'react-router-dom';
import fetchFaqs from '../../services/FAQService';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQsProps {
    title?: string;
    subtitle?: string;
}

const FAQs: React.FC<FAQsProps> = ({
    title = "FAQ's",
    subtitle
}) => {
    const serviceKey = useLocation().pathname.split('/')[2];
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const faqs: FAQItem[] = useMemo(() => fetchFaqs(serviceKey), [serviceKey]);
    const contentRef = useRef<HTMLDivElement>(null);

    const defaultSubtitle = `Common questions about ${serviceKey.replace(/-/g, ' ')}`;

    const toggleSection = () => {
        setIsExpanded(!isExpanded);
        if (isExpanded) {
            setActiveIndex(null);
        }
    };

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (faqs.length === 0) {
        return null;
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.sectionLabel}>FAQS</span>

                <div className={styles.faqWrapper}>
                    <div className={styles.faqInner}>
                        {/* Header with toggle */}
                        <div className={styles.header} onClick={toggleSection}>
                            <div className={styles.headerContent}>
                                <div className={styles.headerTitle}>
                                    <h2 className={styles.title}>{title}</h2>
                                    <button
                                        className={`${styles.toggleBtn} ${isExpanded ? styles.expanded : ''}`}
                                        aria-label={isExpanded ? 'Collapse FAQs' : 'Expand FAQs'}
                                    >
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['btn-arrow']}>
                                            <path d="M6.51285 2.99494L12.2561 2.99477L16.0851 9.62716L10.341 9.62686L6.51285 2.99494Z" className={styles['arrow-top']} />
                                            <path d="M6.51213 16.2587L12.2562 16.259L16.085 9.6272L10.341 9.6269L6.51213 16.2587Z" className={styles['arrow-bottom']} />
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.titleDivider}></div>
                                <p className={styles.subtitle}>{subtitle || defaultSubtitle}</p>
                            </div>
                        </div>

                        {/* Questions List */}
                        <div
                            ref={contentRef}
                            className={`${styles.questionsContainer} ${isExpanded ? styles.questionsExpanded : ''}`}
                        >
                            <div className={styles.questionsList}>
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.questionItem} ${activeIndex === index ? styles.questionActive : ''}`}
                                    >
                                        <button
                                            className={styles.questionHeader}
                                            onClick={() => toggleQuestion(index)}
                                            aria-expanded={activeIndex === index}
                                        >
                                            <span className={styles.questionText}>{faq.question}</span>
                                            <span className={`${styles.questionIcon} ${activeIndex === index ? styles.iconActive : ''}`}>
                                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </button>
                                        <div
                                            className={`${styles.answerWrapper} ${activeIndex === index ? styles.answerExpanded : ''}`}
                                        >
                                            <div className={styles.answer}>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;

