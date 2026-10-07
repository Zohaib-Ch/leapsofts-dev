import React from 'react';
import type { ReactNode } from 'react';
import styles from './intro.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import { parseFormattedText, type FormattedSegment } from '../../utils/textParser';

interface IntroComponentProps {
    title: string;
    title2?: string;
    description: string | FormattedSegment[];
    videoSrc?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    children?: ReactNode;
    introDescription?: FormattedSegment[];
}

const IntroComponent: React.FC<IntroComponentProps> = ({
    title,
    title2,
    description,
    videoSrc = "/bg_video/leapsofts2.mp4",
    buttonText = "Schedule a Consultation",
    onButtonClick,
    introDescription,
}) => {

    const { openContactModal } = useContactModal();
    const handleClick = () => {
        openContactModal();
        onButtonClick && onButtonClick();
    };

    const segments = introDescription && introDescription.length > 0 
        ? parseFormattedText(introDescription)
        : parseFormattedText(description);

    return (
        <section className={styles.intro} id="intro">
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

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    {title2 && <span className={styles.title} style={{ display: 'block', marginTop: '-0.5rem', fontSize: '2.5rem', opacity: 0.9 }}>{title2}</span>}
                    <p className={styles.subtitle}>
                        {segments.map((item, index) => (
                            <span key={index} className={item.bold ? styles.bold : ''}>
                                {item.text}
                            </span>
                        ))}
                    </p>
                    <Button
                        text={buttonText}
                        color1="var(--color-primary)"
                        color2="var(--color-primary-light)"
                        onClick={handleClick}
                        hasIcon
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroComponent;
