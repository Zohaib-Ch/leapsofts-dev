import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import styles from './PartnerHero.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import { Users, Star } from 'lucide-react';

const FloatingElements = () => {
    return (
        <div className={styles.floatingDecorations}>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className={styles.decoration}
                    initial={{
                        x: Math.random() * 100 - 50 + "%",
                        y: Math.random() * 100 - 50 + "%",
                        opacity: 0
                    }}
                    animate={{
                        y: ["-10%", "10%"],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    style={{
                        width: 20 + Math.random() * 60,
                        height: 2 + Math.random() * 10,
                        background: 'var(--color-primary-light)',
                        filter: 'blur(20px)',
                        borderRadius: '100px',
                        zIndex: 0
                    }}
                />
            ))}
        </div>
    );
};

export type DescriptionSegment = { text: string; bold: boolean };
export type PartnerHeroDescription =
    | string
    | (string | DescriptionSegment[])[];

interface PartnerHeroProps {
    title?: string;
    description?: PartnerHeroDescription;
    videoSrc?: string;
}

const renderParagraph = (content: string | DescriptionSegment[]) => {
    if (typeof content === "string") {
        return content;
    }
    return content.map((seg, i) =>
        seg.bold ? (
            <strong key={i}>{seg.text}</strong>
        ) : (
            <span key={i}>{seg.text}</span>
        )
    );
};

const PartnerHero: React.FC<PartnerHeroProps> = ({
    title = "Strategic",
    description = "Empowering business transformation by harnessing AI-driven strategic partnerships for bold global innovation and growth.",
    videoSrc = "/bg_video/vid-4.mp4"
}) => {
    const { openContactModal } = useContactModal();

    const isMultiParagraph = Array.isArray(description);

    return (
        <section className={styles.hero}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.videoBackground}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>

            <div className={styles.overlay}></div>
            <FloatingElements />

            {/* Breadcrumb Navigation */}
            <div className={styles.breadcrumbBar}>
                <div className={styles.breadcrumbContainer}>
                    <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link to="/about" className={styles.breadcrumbLink}>Company</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span className={styles.breadcrumbCurrent}>Strategic Partnerships</span>
                </div>
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.label}>
                        STRATEGIC TECHNOLOGY PARTNERSHIPS & ALLIANCES
                    </span>

                    <h1 className={styles.title}>
                        Leapsofts <span className={styles.highlight}>{title}</span> Partners
                    </h1>

                    {isMultiParagraph ? (
                        <div className={styles.descriptionBlock}>
                            {description.map((paragraph, i) => (
                                <p key={i} className={styles.description}>
                                    {renderParagraph(paragraph)}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.description}>
                            {description}
                        </p>
                    )}

                    <div className={styles.badges}>
                        <div className={styles.badge}>
                            <Users size={16} /> <span>Product Delivery Excellence</span>
                        </div>
                        <div className={styles.badge}>
                            <Star size={16} /> <span>Result Oriented Marketing</span>
                        </div>
                    </div>

                    <div className={styles.actionArea}>
                        <Button
                            text="Become a Partner"
                            color1="var(--color-primary)"
                            color2="var(--color-primary-light)"
                            onClick={openContactModal}
                            hasIcon
                        />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.animationWrapper}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                    <div className={styles.imageFrame}>
                        <img
                            src="/hand-shake.webp"
                            alt="Strategic Partnership Collaboration"
                            className={styles.heroImage}
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerHero;
