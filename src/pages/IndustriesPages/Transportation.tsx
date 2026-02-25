import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "Our Commitments to Logistics Excellence",
    title: "Built for Build-Buy Decisions & Scale",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Real-Time Business Visibility',
            description: "We commit to providing a 'Birds-Eye View' of your entire operation. By integrating GPS tracking and deep-dive reporting engines, we ensure you have the data needed to monitor safe driving, cargo integrity, and fleet health. Our commitment is to give you total visibility so you are always in control of the road ahead."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Resource Optimization',
            description: "We commit to maximizing every mile. By automating your warehouse and shipment operations, we promise a system that ensures full load capacity and on-time arrivals. Our goal is to eliminate the inefficiencies that drain your margins, transforming your logistics network into a high-performance efficiency engine"
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Proprietary Technical Advantage',
            description: "We commit to delivering a system you truly own. We believe that in the logistics industry, your software should be a competitive asset, not a recurring subscription expense. We commit to building a proprietary framework that scales with your fleet, integrates with your partners, and serves as a valuable asset on your balance sheet."
        },
    ]
}

const servicesData: InfoGridProps['data'] = {
    label: 'Operational Modules — Powering the Fleet',
    title: 'Streamline Your Supply Chain',
    items: [
        {
            icon: '01',
            title: 'Intelligent Fleet Operations',
            description:
                'Proactive maintenance tracking that identifies service opportunities before they become costly breakdowns, keeping your fleet in peak condition.'
        },
        {
            icon: '02',
            title: 'Field Accountability & GPS',
            description:
                'Real-time reporting on safe driving practices and the state of goods. Integrated GPS tracking helps you keep eyes on the road and maintain high service standards.'
        },
        {
            icon: '03',
            title: 'Warehouse & Load Optimization',
            description:
                'Ensure every shipment arrives on time and every truck carries a full load, maximizing resource utility and reducing wasted mileage.'
        },
        {
            icon: '04',
            title: 'Vendor & Contractor Hub',
            description:
                'Streamline progress tracking, inventory management, and automated payment processing for all third-party vendors and external contractors.'
        },
        {
            icon: '05',
            title: 'Real-Time Reporting Engine',
            description:
                'Achieve total business visibility with in-depth, data-driven insights and comprehensive reports delivered in close to real-time.'
        },
    ]
};
const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'Industry Friction Points',
    titleAccent: 'Transportation-Focused',
    titleMain: ' Solutions',
    description: 'This section identifies the "Signs it’s Time for a New System" mentioned in your data',
    items: [
        {
            icon: 'legacy',
            title: 'Manual Data Bottlenecks',
            description: 'When manual entry causes more "gridlock" than it solves, preventing real-time agility.'
        },
        {
            icon: 'enterprise',
            title: 'Inflexible Integration',
            description: 'Off-the-shelf software that creates clunky, "out-of-the-box" experiences and fails to talk to your existing tools'
        },
        {
            icon: 'thirdParty',
            title: 'Visibility Gaps',
            description: 'Lack of data-driven insights into safe driving practices, load optimization, or shipment status'
        },
        {
            icon: 'legacy',
            title: 'Legacy Maintenance',
            description: 'Outdated systems that can no longer support expanding teams or modern marketplace demands.'
        },
        {
            icon: 'legacy',
            title: 'Manual Data Bottlenecks',
            description: 'When manual entry causes more "gridlock" than it solves, preventing real-time agility.'
        },
        {
            icon: 'enterprise',
            title: 'Inflexible Integration',
            description: 'Off-the-shelf software that creates clunky, "out-of-the-box" experiences and fails to talk to your existing tools'
        },
        {
            icon: 'thirdParty',
            title: 'Visibility Gaps',
            description: 'Lack of data-driven insights into safe driving practices, load optimization, or shipment status'
        },
        {
            icon: 'legacy',
            title: 'Legacy Maintenance',
            description: 'Outdated systems that can no longer support expanding teams or modern marketplace demands.'
        },
    ]
}
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'You Control the Roadmap',
        description: 'Unlike off-the-rack software, a custom TMS is built for your unique nuances. You own the system and the value it adds to your market position.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Seamless Integration',
        description: "We eliminate 'incapable links' by integrating your custom software with your specific third-party solutions, ensuring data flows without friction"
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Total Scalability',
        description: "Our frameworks are designed to evolve with you, supporting expanding teams and new distribution channels as your business grows."
    },
];
const title = "State-of-the-Art Custom Software for the New Era of Logistics";
const subtitle = "";
const introDescription = [
    { text: "Traditional routes are changing fast. We engineer, build, and maintain custom Transportation Management Systems (TMS) that automate your processes, improve operational efficiency, and drive scalability.", bold: false },
]
const Transportation: React.FC = () => {
       const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Logistics & Fleet Solutions",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

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
            <ServiceFeatures items={defaultItems} />
        </>
    )
}

export default Transportation
