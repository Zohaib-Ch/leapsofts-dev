import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENTS TO REAL ESTATE LEADERS",
    title: "Tailored for Build, Buy, and Scale",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Frictionless Management',
            description: "We provide intuitive interfaces that simplify daily property management tasks, ensuring both internal staff and tenants have a seamless, frustration-free experience."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Scalable Asset Ownership',
            description: "Our proprietary systems grow with your portfolio, allowing you to add new properties, departments, and third-party integrations as your business demand grows."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Community-Centric Innovation',
            description: "We build social and communication tools that turn units into communities, driving resident engagement and making your properties the preferred market choice."
        },
    ]
}

const realEstateSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Real Estate-Focused',
    titleMain: ' Digital Ecosystems',
    description: 'We build custom software that automates details, simplifies resident concerns, and optimizes property management for high-stakes portfolios.',
    items: [
        {
            icon: 'legacy',
            title: 'Property Management',
            description: 'Robust platforms for long-term rental oversight, maintenance workflows, and tenant retention.'
        },
        {
            icon: 'enterprise',
            title: 'Real Estate Development',
            description: 'Custom tools for managing sales, buyer pipelines, and mortgage processing in new developments.'
        },
        {
            icon: 'thirdParty',
            title: 'HOA Software Solutions',
            description: 'Specialized systems for Homeowners’ Associations to handle dues and community governance.'
        },
        {
            icon: 'saas',
            title: 'Maintenance Automation',
            description: 'Streamline work orders, coordinate subcontractors, and track quality for property upkeep.'
        },
        {
            icon: 'product',
            title: 'Unified Billing',
            description: 'Manage mass charges for rent or HOA dues and vendor payments with full CRM integration.'
        },
        {
            icon: 'mobile',
            title: 'Tenant Portals',
            description: 'Mobile-first applications for resident engagement, neighbor reviews, and mass communication.'
        }
    ]
}

const streamlineDescription = [
    { text: "Transform your ", bold: false },
    { text: "property portfolio ", bold: true },
    { text: "with a robust technical foundation. Leapsofts offers a ", bold: false },
    { text: "complimentary real estate strategy session ", bold: true },
    { text: "to help you optimize ", bold: false },
    { text: "management workflows ", bold: true },
    { text: "and increase resident satisfaction.", bold: false },
];

const RealEstate: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Real Estate Tech Ecosystems",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Custom Real Estate Management Solutions"
                description=""
                introDescription={[
                    { text: "Opening the right doors for your business with intelligent, automated property management software architected for scale and community engagement.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Property "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={realEstateSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" real estate businesses"
            />
        </>
    )
}

export default RealEstate
