import React from 'react';
import styles from './CommitmentSection.module.css';

interface CommitmentItem {
    icon: string; // URL to the SVG icon
    title: string;
    description: string;
}

interface CommitmentSectionProps {
    subtitle?: string;
    title?: string;
    items?: CommitmentItem[];
}

const defaultItems: CommitmentItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Insight & Analysis',
        description: 'Real-time financial reports to machine-learning-based predictive analytics, financial modeling, and algorithmic trading, Leapsofts\'s custom financial software development empowers financial organizations to do more - and more accurately - with their data.',
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Customer Experience',
        description: 'Online and mobile banking offerings are critical in today\'s market, and Leapsofts\'s financial software experts know how to provide customers with convenient access to their banking needs without compromising security. Our UX experts ensure our software is easy to use.',
    },
    {
        icon: '/industryicons/diamond.svg',
        title: 'Security Measures',
        description: 'Our custom financial software solutions put security first. Encryption technologies, fraud detection algorithms, advanced identity verification, and real-time compliance monitoring ensure your fintech organization stays safe and remains protected.',
    },
];

interface CommitmentItemProps extends CommitmentItem {
    index: number;
}

const Card: React.FC<CommitmentItemProps> = ({ icon, title, description, index }) => {
    const arrows = [
        '/industryicons/arrow-with-plume-pink.svg',
        '/industryicons/arrow-with-plume-green-dark.svg',
        '/industryicons/arrow-with-plume-bright-purple.svg'
    ];

    const colors = [styles.pink, styles.green, styles.purple];

    const arrowSrc = arrows[index % arrows.length];
    const colorClass = colors[index % colors.length];

    return (
        <div className={`${styles.card} ${colorClass}`}>
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                    <img src={icon} alt={title} className={styles.industryIcon} />
                    {index === 0 && (
                        <img src="/industryicons/lens-blue-1.svg" alt="" className={styles.lensGlow} />
                    )}
                </div>
                <div className={styles.arrowsWrapper}>
                    <img src={arrowSrc} alt="decoration" className={`${styles.plumeArrow} ${styles.plumeArrowSmall}`} />
                    <img src={arrowSrc} alt="decoration" className={`${styles.plumeArrow} ${styles.plumeArrowLarge}`} />
                </div>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

const CommitmentSection: React.FC<CommitmentSectionProps> = ({
    subtitle = "OUR COMMITMENT TO FINANCIAL ORGANIZATIONS",
    title = "Bringing banking & finance into the digital age",
    items = defaultItems,
}) => {
    return (
        <section className={styles.commitmentSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionSubtitle}>{subtitle}</span>
                    <h2 className={styles.sectionTitle}>{title}</h2>
                </div>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <Card key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommitmentSection;
