import React from 'react'
import styles from './ServiceOverview.module.css'
import { useContactModal } from '../../context/ContactModalContext';

interface ServiceOverviewProps {
    label?: string;
    titleMain?: string;
    titleAccent?: string;
    titleEnd?: string;
    description?: string;
    imagePath: string;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
    label = "Brief Overview",
    titleMain,
    titleAccent,
    titleEnd,
    description,
    imagePath
}) => {
     const { openContactModal } = useContactModal();

    const handleClick = () => {
        openContactModal();
    };
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{label}</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.contentLeftTitle}>
                        <h2>
                            {titleMain} <span className={styles.accent}>{titleAccent}</span> {titleEnd}
                        </h2>
                    </div>
                    <div className={styles.contentLeftDescription}>{description}</div>
                    <div className={styles.contentLeftCall}>
                        <p>
                            <span onClick={handleClick} className={styles.call}>Schedule a call </span>
                            to talk about how we can prepare your software for the real world, or keep reading to learn more about our approach.
                        </p>
                    </div>
                </div>
                <div className={styles.contentRight}>
                    <img src={imagePath} alt="Software Testing Solution" />
                </div>
            </div>
        </div>
    )
}

export default ServiceOverview