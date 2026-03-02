import React, { useState } from 'react';
import styles from './ComparisonTable.module.css';

export interface ComparisonItem {
    feature: string;
    custom: string;
    offTheShelf: string;
}

export interface ComparisonData {
    label: string;
    titleAccent: string;
    titleMain: string;
    description: string;
    headers: {
        feature: string;
        custom: string;
        offTheShelf: string;
    };
    items: ComparisonItem[];
}

interface ComparisonTableProps {
    data: ComparisonData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<'custom' | 'offTheShelf'>('custom');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>{data.label}</span>
                    <h2 className={styles.title}>
                        <span className={styles.titleAccent}>{data.titleAccent}</span>
                        {data.titleMain}
                    </h2>
                    <p className={styles.description}>{data.description}</p>
                </div>

                {/* Desktop Table View */}
                <div className={styles.desktopTable}>
                    <div className={styles.tableHeader}>
                        <div className={styles.colFeature}>{data.headers.feature}</div>
                        <div className={styles.colCustom}>{data.headers.custom}</div>
                        <div className={styles.colOff}>{data.headers.offTheShelf}</div>
                    </div>
                    <div className={styles.tableBody}>
                        {data.items.map((item, index) => (
                            <div key={index} className={styles.tableRow}>
                                <div className={styles.colFeature}>
                                    <span className={styles.featureText}>{item.feature}</span>
                                </div>
                                <div className={styles.colCustom}>{item.custom}</div>
                                <div className={styles.colOff}>{item.offTheShelf}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View with Sliding Animation */}
                <div className={styles.mobileView}>
                    <div className={styles.mobileTabs}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'custom' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('custom')}
                        >
                            {data.headers.custom}
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'offTheShelf' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('offTheShelf')}
                        >
                            {data.headers.offTheShelf}
                        </button>
                        <div
                            className={styles.tabIndicator}
                            style={{ left: activeTab === 'custom' ? '0' : '50%' }}
                        />
                    </div>

                    <div className={styles.mobileContentWrapper}>
                        <div
                            className={styles.mobileContentInner}
                            style={{ transform: `translateX(${activeTab === 'custom' ? '0' : '-50%'})` }}
                        >
                            {/* Custom Software Column */}
                            <div className={styles.mobileColumn}>
                                {data.items.map((item, index) => (
                                    <div key={index} className={styles.mobileCard}>
                                        <h4 className={styles.mobileFeatureTitle}>{item.feature}</h4>
                                        <p className={styles.mobileFeatureValue}>{item.custom}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Off-the-shelf Column */}
                            <div className={styles.mobileColumn}>
                                {data.items.map((item, index) => (
                                    <div key={index} className={styles.mobileCard}>
                                        <h4 className={styles.mobileFeatureTitle}>{item.feature}</h4>
                                        <p className={styles.mobileFeatureValue}>{item.offTheShelf}</p>
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

export default ComparisonTable;
