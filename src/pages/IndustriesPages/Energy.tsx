import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "Our Commitments to Energy Innovation",
    title: "Build-Buy & Scale Focused Commitments",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Absolute Operational Security',
            description: "We commit to protecting your market share with high-security, low-risk technological solutions. In an industry where security and compliance are non-negotiable, we ensure every application we build adheres to the most stringent risk management standards, keeping your data and your infrastructure safe."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Real-Time System Visibility',
            description: "We commit to preventing problems before they occur. By providing increased visibility into your networks and processes, our custom solutions allow for remote systems automation and operations monitoring. Our commitment is to give you the data-driven insights needed to increase productivity and eliminate lost revenue."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Sustainable Efficiency',
            description: "We commit to making energy management effortless. From automated metering to detailed emissions reporting, we build the tools you need to operate more sustainably. Our commitment is to help you identify every opportunity for efficiency, enabling you to save money while advancing your sustainability goals."
        },
    ]
}
const servicesData: InfoGridProps['data'] = {
    label: 'Operational Modules — Powering the Energy Business',
    title: 'Our Core Capabilities',
    items: [
        {
            icon: '01',
            title: 'IoT & Remote Automation',
            description:
                'Securely manage and adapt your IoT investments. Enable remote systems automation and real-time operations monitoring for autonomous and distributed assets.'
        },
        {
            icon: '02',
            title: 'Sustainability & Emissions Reporting',
            description:
                'Automated metering of consumption and utility data collection. Generate sustainability reports and identify cost-saving opportunities through green energy practices.'
        },
        {
            icon: '03',
            title: 'Workforce & Process Mechanization',
            description:
                'Automate hands-on management tasks to increase workforce productivity and prevent lost revenue caused by manual oversight.'
        },
        {
            icon: '04',
            title: 'High-Security Risk Management',
            description:
                'Protect every facet of your business and market share with high-security, low-risk technological solutions designed for maximum compliance.'
        },
        {
            icon: '05',
            title: 'Unified Network Infrastructure',
            description:
                'Minimize redundancy by supporting multiple devices, departments, and channels through a single platform that connects disparate applications.'
        }
    ]
};

const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Own the System, Own the Future',
        description: 'You own the framework and can cause changes as you evolve. In an industry where change is constant, custom software keeps you in the driver’s seat.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Preventing Problems Before They Occur',
        description: "Increased visibility into networks, systems, and processes allows you to identify and solve bottlenecks before they impact your operations."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Bleeding-Edge Technology Integration',
        description: "We keep your core business applications up to date with the latest digital technologies, ensuring you never fall behind"
    },
];

const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'Sector Focus — Navigating the Digital Transition',
    titleAccent: 'Energy-Focused',
    titleMain: ' Solutions',
    description: 'Focusing on the specific energy verticals mentioned in your data.',
    items: [
        {
            icon: 'legacy',
            title: 'Smart Utilities & Management',
            description: 'Digital tools that empower utilities to operate flexibly, minimize risks, and increase profits through connected data.'
        },
        {
            icon: 'enterprise',
            title: 'Connected Oil & Gas',
            description: 'High-security software for processing plants, pipelines, and labor forces to advance efficiency and raise the bottom line.'
        },
        {
            icon: 'thirdParty',
            title: 'Energy IoT Infrastructure',
            description: 'Systems designed to protect, monetize, and manage investments in everything from smart lighting to autonomous oil rigs.'
        },
        {
            icon: 'legacy',
            title: 'Smart Utilities & Management',
            description: 'Digital tools that empower utilities to operate flexibly, minimize risks, and increase profits through connected data.'
        },
        {
            icon: 'enterprise',
            title: 'Connected Oil & Gas',
            description: 'High-security software for processing plants, pipelines, and labor forces to advance efficiency and raise the bottom line.'
        },
        {
            icon: 'thirdParty',
            title: 'Energy IoT Infrastructure',
            description: 'Systems designed to protect, monetize, and manage investments in everything from smart lighting to autonomous oil rigs.'
        }
    ]
}
const title = "Custom Software Solutions for a Transformed Energy Landscape";
const subtitle = "";

const introDescription = [
    { text: "The tides of change are moving faster than ever. We empower energy organizations with the flexibility, resilience, and agility needed to streamline operations and stay ahead of the competition.", bold: false },
]
const Energy: React.FC = () => {
        const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Energy System Modernization",
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

export default Energy
