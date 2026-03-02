import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO MID-SIZED BUSINESSES",
    title: "Your Vision, Architected for Growth",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Rapid, Market-Ready Delivery',
            description: "We accelerate your time-to-market by delivering a functional Minimum Viable Product (MVP) in just 3 to 5 months, transforming ideas into growth-driving solutions."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Full Ownership and Value Creation',
            description: "We build software that serves as a permanent asset for your organization. You get full proprietary rights and valuable Intellectual Property (IP)."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Operational Efficiency and ROI',
            description: "Our development philosophy centers on streamlining processes and reducing overhead, aiming for significant cost savings and genuine return on investment."
        },
    ]
}

const businessSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Operational innovations for',
    titleMain: 'Business Growth',
    description: 'We implement smart digital solutions to streamline operations, enhance visibility, and support scalable expansion for mid-sized enterprises.',
    items: [
        {
            icon: 'legacy',
            title: 'Inventory & Logistics',
            description: 'Centralize stock management into one unified ecosystem to save time and reduce costs.'
        },
        {
            icon: 'enterprise',
            title: 'Workforce Orchestration',
            description: 'Streamline employee and contractor management with secure task assignment and monitoring.'
        },
        {
            icon: 'thirdParty',
            title: 'Unified Payment Systems',
            description: 'Combine multiple third-party payment platforms into a single secure solution for transactions.'
        },
        {
            icon: 'product',
            title: 'IP Asset Creation',
            description: 'Convert operational systems into valuable intellectual property to gain lasting competitive advantage.'
        },
        {
            icon: 'saas',
            title: 'Omnichannel Portals',
            description: 'Empower teams with a custom portal that integrates communication, reporting, and workflows.'
        },
        {
            icon: 'mobile',
            title: 'Paperless Field Operations',
            description: 'Digitize orders and shipping processes, enabling field teams via custom mobile and tablet apps.'
        }
    ]
}

const streamlineDescription = [
    { text: "Scale your ", bold: false },
    { text: "mid-sized business ", bold: true },
    { text: "with a focused digital strategy. Leapsofts offers a ", bold: false },
    { text: "complimentary business strategy session ", bold: true },
    { text: "to help you identify ", bold: false },
    { text: "operational bottlenecks ", bold: true },
    { text: "and roadmap your path to enterprise-level efficiency.", bold: false },
];

const MidSizedBusinesses: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Enterprise Business Solutions",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Custom Solutions for Mid-Sized Businesses"
                description=""
                introDescription={[
                    { text: "Helping businesses nationwide streamline operations, increase efficiency, and achieve long-term goals through top-shelf software engineering.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Business "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={businessSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" mid-sized businesses"
            />
        </>
    )
}

export default MidSizedBusinesses
