import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const ourSolutionsData: EmergingTechProps['data'] = {
    label: 'CLOUD SOLUTIONS',
    titleAccent: 'Our',
    titleMain: ' Solutions',
    description: 'We provide custom-designed cloud platform architectures tailored to your business needs, ensuring efficiency, scalability, and innovation.',
    items: [
        {
            icon: 'product',
            title: 'Tailored Cloud Design',
            description: "Custom cloud architectures built for scalability and innovation."
        },
        {
            icon: 'legacy',
            title: 'Legacy System Integration',
            description: "Merging existing systems with modern DevOps practices."
        },
        {
            icon: 'enterprise',
            title: 'Efficiency and Scalability Enhancement',
            description: "Optimizing infrastructure for high-performance demands."
        },
        {
            icon: 'saas',
            title: 'Proactive Alert Management',
            description: "Comprehensive monitoring for uninterrupted operational excellence."
        }
    ]
};

const workingProcessData = {
    subtitle: 'WORKING PROCESS',
    title: 'How We Work?',
    items: [
        "Infrastructure Requirement Identification",
        "Cloud Provider & Resource Selection",
        "Network & Security Configuration",
        "Application Deployment & Setup",
        "Issue Resolution",
        "Infrastructure Performance Monitoring & Enhancement"
    ]
}

const CloudEngineering: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Cloud Engineering"
                description="Build scalable, resilient, and high-performance cloud infrastructures with our expert cloud engineering services."
            />
            <EmergingTech data={ourSolutionsData} />
            <WhyChooseUs
                subtitle={workingProcessData.subtitle}
                title={workingProcessData.title}
                items={workingProcessData.items}
            />
        </>
    );
};


export default CloudEngineering;
