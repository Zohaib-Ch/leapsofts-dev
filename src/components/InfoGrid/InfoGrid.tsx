import React from 'react';
import styles from './infoGrid.module.css';

export interface GridItem {
    icon?: React.ReactNode | string;
    title: string;
    description: string;
}

export interface InfoGridProps {
    data: {
        label?: string;
        title?: string;
        titleMain?: string;
        titleAccent?: string;
        description?: string;
        items: GridItem[];
    };
}

const InfoGrid: React.FC<InfoGridProps> = ({ data }) => {
    const renderIcon = (icon: GridItem['icon'] | undefined, index: number) => {
        if (icon) {
            if (typeof icon === 'string') {
                // If it's a URL or image path, render img
                if (icon.includes('/') || icon.includes('.')) {
                    return <img src={icon} alt="" className={styles.icon} />;
                }
                // If it's just a string/number (like '1', '01'), render text
                return <span className={styles.textIcon}>{icon}</span>;
            }
            // If it's a React component/element
            return icon;
        }
        // Fallback sequence number ("01", "02", "03", etc.)
        return <span className={styles.textIcon}>{String(index + 1).padStart(2, '0')}</span>;
    };

    const hasTitleComponents = Boolean(data.titleMain || data.titleAccent);
    const hasTitle = Boolean(data.title || hasTitleComponents);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {(hasTitle || data.label || data.description) && (
                    <div className={styles.header}>
                        {data.label && <span className={styles.label}>{data.label}</span>}
                        {hasTitle && (
                            <h2 className={styles.title}>
                                {hasTitleComponents ? (
                                    <>
                                        {data.titleMain}{' '}
                                        {data.titleAccent && (
                                            <span className={styles.accent} style={{ color: 'var(--color-primary-light, #d946ef)' }}>
                                                {data.titleAccent}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    data.title
                                )}
                            </h2>
                        )}
                        {data.description && <p className={styles.description}>{data.description}</p>}
                    </div>
                )}

                <div className={styles.grid}>
                    {data.items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {renderIcon(item.icon, index)}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoGrid;
