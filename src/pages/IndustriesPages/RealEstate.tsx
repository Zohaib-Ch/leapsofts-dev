import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "Our Commitments to Real Estate Leaders",
    title: "Tailored commitments focusing on the Custom vs. Off-the-shelf and Scale data.",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Frictionless Management',
            description: "We commit to building the 'Easy and Robust UI' your team deserves. We understand that property management involves juggling countless resident concerns. Our commitment is to provide intuitive interfaces that simplify daily tasks, ensuring that both your internal staff and your tenants have a seamless, frustration-free experience."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Scalable Asset Ownership',
            description: "We commit to providing a framework you truly own. We don't believe in the limitations of off-the-shelf software. Our commitment is to deliver a proprietary system that grows with your portfolio, allowing you to add new properties, departments, and third-party integrations whenever your business demands it."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Community-Centric Innovation',
            description: "We commit to more than just property management, we commit to resident satisfaction. Our development focus includes building the social and communication tools needed to turn your units into communities. We promise to deliver the features that increase tenant retention and make your properties the preferred choice in the market."
        },
    ]
}
const servicesData: InfoGridProps['data'] = {
  label: 'Operational Modules — Total Territory Control',
  title: 'Detailed features focused on both the manager and the resident experience',
    items: [
        {
            icon: '01',
            title: 'Seamless Application Processing',
            description:
                'Streamline the journey for new residents. From vetting rental applicants to supporting buyers through the mortgage process, we make onboarding effortless.'
        },
        {
            icon: '02',
            title: 'Maintenance & Asset Management',
            description:
                'Handle work orders for everything from major renovations to minor repairs. Coordinate subcontractors and track quality to keep properties in "as-new" condition.'
        },
        {
            icon: '03',
            title: 'Unified Billing & Accounting',
            description:
                'Execute mass charges for rent or HOA dues and manage vendor payments with ease. Full integration with CRMs and accounting platforms ensures every cent is tracked.'
        },
        {
            icon: '04',
            title: 'Tenant Satisfaction & Community',
            description:
                'Build more than just units—build communities. Features include conversation forums, neighbor reviews, and mass communication tools to drive resident engagement.'
        },
    ]
};
const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'TECH INNOVATIONS TO CONSIDER',
    titleAccent: 'Industry-Specific',
    titleMain: ' Solutions',
    description: 'Focusing on the diverse sectors covered in your data.',
    items: [
        {
            icon: 'legacy',
            title: 'Real Estate Development',
            description: 'Custom tools for managing sales, buyer pipelines, and mortgage processing in new developments.'
        },
        {
            icon: 'enterprise',
            title: 'Property Management',
            description: 'Robust platforms for long-term rental oversight, maintenance workflows, and tenant retention.'
        },
        {
            icon: 'thirdParty',
            title: 'HOA Software Solutions',
            description: 'Specialized systems for Homeowners’ Associations to handle dues, community governance, and mass communication'
        },
        {
            icon: 'legacy',
            title: 'Real Estate Development',
            description: 'Custom tools for managing sales, buyer pipelines, and mortgage processing in new developments.'
        },
        {
            icon: 'enterprise',
            title: 'Property Management',
            description: 'Robust platforms for long-term rental oversight, maintenance workflows, and tenant retention.'
        },
        {
            icon: 'thirdParty',
            title: 'HOA Software Solutions',
            description: 'Specialized systems for Homeowners’ Associations to handle dues, community governance, and mass communication'
        },
               {
            icon: 'legacy',
            title: 'Real Estate Development',
            description: 'Custom tools for managing sales, buyer pipelines, and mortgage processing in new developments.'
        },
        {
            icon: 'enterprise',
            title: 'Property Management',
            description: 'Robust platforms for long-term rental oversight, maintenance workflows, and tenant retention.'
        },
        {
            icon: 'thirdParty',
            title: 'HOA Software Solutions',
            description: 'Specialized systems for Homeowners’ Associations to handle dues, community governance, and mass communication'
        }
    ]
}
const whyChooseUsData = {
    subtitle: 'Custom vs. Off-the-Shelf Strategic Advantage',
    title: 'Complete Ownership & Nuanced Solutions',
    items: [
        'Bespoke systems tailored to your unique property nuances and business needs.',
        'Scalable frameworks you own, free from vendor lock-in or subscriptions.',
        'Modernize legacy platforms with strategic system renovations and better workflows.',
    ]
};

const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Robust UI/UX Design',
        description: 'We deliver intuitive, visually appealing front-end and back-end interfaces, making it easy for both managers and tenants to navigate the platform.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Ecosystem Harmonization',
        description: "Eliminate data duplication. Our solutions integrate directly with your current CRMs, ERPs, inventory lists, and existing bookkeeping systems."
    },
];
const title = "Custom Real Estate Management: Opening the Right Doors for Your Business";
const subtitle = "";

const introDescription = [
    { text: "Real estate management is a complex, high-stakes adventure. We build custom software that automates the details, simplifies resident concerns, and makes every property feel like home.", bold: false },
]

const RealEstate: React.FC = () => {
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
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items} />
            <ServiceFeatures items={defaultItems} />
        </>
    )
}

export default RealEstate
