import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';

const MidSizedBusinesses: React.FC = () => {
        const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Enterprise Business Solutions",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);
    
    const title = "Custom Solutions for Mid-Sized Businesses";
    const subtitle = ""
    const introDescription = [
        { text: "We help businesses nationwide with top-shelf software solutions. Our team of expert developers builds custom software that helps mid-sized businesses streamline their operations, increase efficiency, and achieve their goals.", bold: false },
    ]
    const ourTechInnovationsData: EmergingTechProps['data'] = {
        label: 'TECH INNOVATIONS TO CONSIDER',
        titleAccent: 'Operational innovations for',
        titleMain: 'Business growth',
        description: 'We implement smart digital solutions to streamline operations, enhance visibility, and support scalable expansion.',
        items: [
            {
                icon: 'legacy',
                title: 'Automated Timekeeping',
                description: 'Modernize employee time tracking to reduce administrative workload, improve accountability, and increase transparency.'
            },
            {
                icon: 'enterprise',
                title: 'Paperless Logistics',
                description: 'Digitize orders and shipping processes, enabling field teams to manage operations via custom mobile and tablet apps.'
            },
            {
                icon: 'thirdParty',
                title: 'Custom Dashboards',
                description: 'Monitor business performance in real time with tailored dashboards that visualize your most critical KPIs.'
            },
            {
                icon: 'product',
                title: 'IP Asset Creation',
                description: 'Convert operational systems into valuable intellectual property to gain lasting competitive advantage and increase company valuation.'
            },
            {
                icon: 'saas',
                title: 'Scalability Infrastructure',
                description: 'Build flexible frameworks that support rapid expansion, new locations, and a growing customer base.'
            },
            {
                icon: 'legacy',
                title: 'Automated Timekeeping',
                description: 'Modernize employee time tracking to reduce administrative workload, improve accountability, and increase transparency.'
            },
            {
                icon: 'enterprise',
                title: 'Paperless Logistics',
                description: 'Digitize orders and shipping processes, enabling field teams to manage operations via custom mobile and tablet apps.'
            },
            {
                icon: 'thirdParty',
                title: 'Custom Dashboards',
                description: 'Monitor business performance in real time with tailored dashboards that visualize your most critical KPIs.'
            },
            {
                icon: 'product',
                title: 'IP Asset Creation',
                description: 'Convert operational systems into valuable intellectual property to gain lasting competitive advantage and increase company valuation.'
            },
            {
                icon: 'saas',
                title: 'Scalability Infrastructure',
                description: 'Build flexible frameworks that support rapid expansion, new locations, and a growing customer base.'
            }
        ]
    };
    const servicesData: InfoGridProps['data'] = {
        label: 'OUR SERVICES',
        title: 'What We Offer',
        items: [
            {
                icon: '01',
                title: 'Inventory & Logistics',
                description:
                    'Centralize stock management into one unified ecosystem to save time, reduce costs, and improve operational accuracy.'
            },
            {
                icon: '02',
                title: 'Workforce Orchestration',
                description:
                    'Streamline employee and contractor management with a secure SSO platform to assign tasks and monitor progress efficiently.'
            },
            {
                icon: '03',
                title: 'Unified Payment Systems',
                description:
                    'Combine multiple third-party payment platforms into a single secure solution for seamless and efficient transaction management.'
            },
            {
                icon: '04',
                title: 'Omnichannel Communication',
                description:
                    'Empower teams with a custom portal that integrates communication, reporting, and essential workflows in one place.'
            },
            {
                icon: '05',
                title: 'Customer Feedback Loops',
                description:
                    'Leverage integrated feedback tools to identify issues early, track service performance, and strengthen customer retention.'
            }
        ]
    };
    const commitmentData: CommitmentSectionProps['data'] = {
        subtitle: "OUR COMMITMENT TO MID-SIZED BUSINESSES",
        title: "Your Vision, Architected for Growth",
        items: [
            {
                icon: '/industryicons/sphere.svg',
                title: 'Rapid, Market-Ready Delivery',
                description: "We commit to accelerating your time-to-market without compromising technical excellence. By leveraging unique process automation and deep domain expertise, we deliver a functional Minimum Viable Product (MVP) in just 3 to 5 months. Our goal is to transform your innovative ideas into market-ready solutions that drive immediate business growth."
            },
            {
                icon: '/industryicons/bipiramida.svg',
                title: 'Full Ownership and Value Creation',
                description: "We commit to building software that serves as a permanent asset for your organization. Unlike off-the-shelf subscriptions, our solutions are 100% tailored to your specific requirements, providing you with full proprietary rights and valuable Intellectual Property (IP). We ensure that every system we build increases your company's performance and provides a lasting competitive advantage.",
            },
            {
                icon: '/industryicons/diamond.svg',
                title: 'Operational Efficiency and ROI',
                description: "We commit to delivering measurable results that impact your bottom line. Our development philosophy is centered on streamlining business processes and reducing overhead. We partner with you to mechanize manual tasks and increase transparency, aiming for significant operational cost savings and a genuine return on investment for every project.",
            },
        ]
    }
    const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'SSO Integration',
        description: 'A single-sign-on framework that secures your data while making it easier for employees to access the tools they need.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Accountability Tracking',
        description: 'Real-time progress tracking for both internal employees and external contractors to ensure project deadlines are met.'
    },
];
    return (
        <>
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <CommitmentSection data={commitmentData} />
            <InfoGrid data={servicesData} />
            <EmergingTech data={ourTechInnovationsData} />
            <ServiceFeatures items={defaultItems}/>
        </>
    )
}

export default MidSizedBusinesses
