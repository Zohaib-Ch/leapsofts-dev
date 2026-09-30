import React, { useState } from 'react';
import styles from './ComparisonTable.module.css';

export interface ComparisonItem {
  feature: string;
  custom: string;
  offTheShelf: string;
}

export interface ComparisonData {
  label?: string;
  titleAccent?: string;
  titleMain?: string;
  title?: string;
  description?: string;
  headers?: {
    feature?: string;
    custom?: string;
    offTheShelf?: string;
  };
  headerCol1?: string;
  headerCol2?: string;
  headerCol3?: string;
  items?: ComparisonItem[];
  rows?: any[];
}

interface ComparisonTableProps {
  data?: ComparisonData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'custom' | 'offTheShelf'>('custom');

  if (!data) return null;

  const label = data.label || 'HEAD-TO-HEAD COMPARISON';
  const titleAccent = data.titleAccent || '';
  const titleMain = data.titleMain || data.title || 'Custom Enterprise Solutions vs. Generic Templates';
  const description = data.description || '';

  const headerFeature = data.headers?.feature || data.headerCol1 || 'Feature / Capability';
  const headerCustom = data.headers?.custom || data.headerCol2 || 'Leapsofts Custom Engineering';
  const headerOffTheShelf = data.headers?.offTheShelf || data.headerCol3 || 'Generic Templates / Off-the-Shelf';

  const rawList = (Array.isArray(data.items) && data.items.length > 0)
    ? data.items
    : (Array.isArray(data.rows) && data.rows.length > 0 ? data.rows : []);

  const normalizedItems: ComparisonItem[] = rawList
    .filter((item) => item !== null && item !== undefined)
    .map((item: any) => ({
      feature: item.feature || item.title || item.name || '',
      custom: item.custom || item.col1 || item.customSolution || '',
      offTheShelf: item.offTheShelf || item.col2 || item.genericTemplate || '',
    }));

  if (normalizedItems.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          <h2 className={styles.title}>
            {titleAccent && <span className={styles.titleAccent}>{titleAccent}</span>}
            {titleMain}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {/* Desktop Table View */}
        <div className={styles.desktopTable}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>{headerFeature}</div>
            <div className={styles.colCustom}>{headerCustom}</div>
            <div className={styles.colOff}>{headerOffTheShelf}</div>
          </div>
          <div className={styles.tableBody}>
            {normalizedItems.map((item, index) => (
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
              {headerCustom}
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'offTheShelf' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('offTheShelf')}
            >
              {headerOffTheShelf}
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
                {normalizedItems.map((item, index) => (
                  <div key={index} className={styles.mobileCard}>
                    <h4 className={styles.mobileFeatureTitle}>{item.feature}</h4>
                    <p className={styles.mobileFeatureValue}>{item.custom}</p>
                  </div>
                ))}
              </div>
              {/* Off-the-shelf Column */}
              <div className={styles.mobileColumn}>
                {normalizedItems.map((item, index) => (
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
