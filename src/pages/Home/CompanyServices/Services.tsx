import React, { useState } from 'react';
import styles from './service.module.css';

interface ServiceData {
    id: string;
    number: string;
    title: string;
    description: string;
    items: { name: string; path: string }[];
}

const services: ServiceData[] = [
    {
        id: '01',
        number: '<01>',
        title: 'Product Engineering',
        description: 'Build scalable, reliable, and secure custom software solutions tailored to your unique business needs and goals.',
              items: [
        { name: 'Custom Software Development', path: '/services/custom-software-development' },
        { name: 'Web App Development', path: '/services/web-app-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Application Re-Engineering', path: '/services/app-reengineering' },
        { name: 'Quality Assurance', path: '/services/quality-assurance' },
        { name: 'Salesforce', path: '/services/salesforce' },
        { name: 'Shopify', path: '/services/shopify' },
        { name: 'ServiceNow', path: '/services/servicenow' },
      ],
    },
    {
        id: '02',
        number: '<02>',
        title: 'Next Gen Services',
        description: 'Accelerate your digital transformation with our cloud expertise and automated DevOps workflows for faster delivery.',
              items: [
        { name: 'Data Science & AI', path: '/services/data-science-ai' },
        { name: 'Cyber Security', path: '/services/cyber-security' },
        { name: 'Business Process Outsourcing', path: '/services/business-process-outsourcing' },
        { name: 'Data Governance', path: '/services/data-governance' },
        { name: 'Dedicated Teams', path: '/services/dedicated-teams' },
      ]
    },
    {
        id: '03',
        number: '<03>',
        title: 'Cloud & DevOps',
        description: 'Ensure your software remains up-to-date, secure, and performant with our comprehensive support and maintenance services.',
              items: [
        { name: 'Cloud Engineering', path: '/services/cloud-engineering' },
        { name: 'Cloud Migration', path: '/services/cloud-migration' },
        { name: 'DevOps', path: '/services/devops' },
        { name: 'AWS', path: '/services/aws' },
        { name: 'Azure', path: '/services/azure' },
      ]
    },
    {
        id: '04',
        number: '<04>',
        title: 'Solutions',
        description: 'Leverage the power of artificial intelligence and machine learning to gain insights and automate complex business processes.',
              items: [
        { name: 'Digital Evolution', path: '/services/digital-evolution' },
        { name: 'Fixed Price', path: '/services/fixed-price' },
        { name: 'Ideation Workshop', path: '/services/ideation-workshop' },
        { name: 'Product Development Strategy', path: '/services/product-development-strategy' },
        { name: 'Proof Of Concept Development', path: '/services/proof-of-concept-development' },
      ]
    },
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.label}>Our Core Services</span>
                    <h2 className={styles.title}>How we <em>help</em> your business</h2>
                </div>

                <div className={styles.accordion}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className={styles.cardNumber}>{service.number}</span>

                            <h3 className={styles.cardTitleCollapsed}>{service.title}</h3>

                            <div className={styles.expandedContent}>
                                <h3 className={styles.cardTitleExpanded}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                                <div className={styles.subServices}>
                                    {service.items.map((item, i) => (
                                        <div key={i} className={styles.subServiceItem} onClick={() => window.location.href = item.path}>
                                            <span className={styles.arrowIcon}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.footerIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
