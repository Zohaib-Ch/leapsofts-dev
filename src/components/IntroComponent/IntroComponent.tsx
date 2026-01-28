import React from 'react';
import type { ReactNode } from 'react';
import styles from './intro.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';

interface IntroComponentProps {
    title: string;
    description: string;
    videoSrc?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    children?: ReactNode;
}

const IntroComponent: React.FC<IntroComponentProps> = ({
    title,
    description,
    videoSrc = "/bg_video/vid-4.mp4",
    buttonText = "Start your project",
    onButtonClick,
}) => {

    const { openContactModal } = useContactModal();

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
                    <p className={styles.subtitle}>{description}</p>
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
