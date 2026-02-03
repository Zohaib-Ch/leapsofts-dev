import React from 'react';
import type { ReactNode } from 'react';
import styles from './intro.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';

interface IntroComponentProps {
    title: string;
    title2?: string;
    description: string;
    videoSrc?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    children?: ReactNode;
    introDescription?: {text: string, bold: boolean}[];
}

const IntroComponent: React.FC<IntroComponentProps> = ({
    title,
    title2,
    description,
    videoSrc = "/bg_video/vid-4.mp4",
    buttonText = "Schedule a Consultation",
    onButtonClick,
    introDescription,
}) => {

    const { openContactModal } = useContactModal();
    console.log(description);
    const handleClick = () => {
        openContactModal();
        onButtonClick && onButtonClick();
    };

    return (
        <section className={styles.intro} id="intro">
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.videoBackground}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <h1 className={styles.title}>{title2}</h1>
                    <p className={styles.subtitle}>
                        {introDescription?.map((item, index) => (
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
