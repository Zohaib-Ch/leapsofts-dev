import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENTS TO ENERGY INNOVATION",
    title: "Build-Buy & Scale Focused Commitments",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Absolute Operational Security',
            description: "We protect your market share with high-security, low-risk technological solutions that adhere to the most stringent risk management and compliance standards."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Real-Time System Visibility',
            description: "By providing increased visibility into networks and processes, our solutions allow for remote automation and monitoring to prevent problems before they occur."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Sustainable Efficiency',
            description: "From automated metering to detailed emissions reporting, we build the tools you need to operate sustainably and identify every opportunity for efficiency."
        },
    ]
}

const energySolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Energy-Focused',
    titleMain: ' Digital Solutions',
    description: 'We empower energy organizations with the flexibility, resilience, and agility needed to streamline operations in a rapidly changing landscape.',
    items: [
        {
            icon: 'legacy',
            title: 'Smart Utilities & Management',
            description: 'Digital tools that empower utilities to operate flexibly, minimize risks, and increase profits through connected data.'
        },
        {
            icon: 'enterprise',
            title: 'Connected Oil & Gas',
            description: 'High-security software for processing plants, pipelines, and labor forces to advance efficiency.'
        },
        {
            icon: 'thirdParty',
            title: 'Energy IoT Infrastructure',
            description: 'Systems designed to protect, monetize, and manage investments in smart lighting and autonomous rigs.'
        },
        {
            icon: 'saas',
            title: 'Emissions Reporting',
            description: 'Automated metering and consumption data collection for comprehensive sustainability reporting.'
        },
        {
            icon: 'product',
            title: 'Grid Automation',
            description: 'Intelligent systems for real-time operations monitoring and autonomous asset management.'
        },
        {
            icon: 'mobile',
            title: 'Field Workforce Tools',
            description: 'Mobile applications that increase productivity and eliminate lost revenue from manual oversight.'
        }
    ]
}

const streamlineDescription = [
    { text: "Lead the ", bold: false },
    { text: "energy transition ", bold: true },
    { text: "with a modernized technical infrastructure. Leapsofts offers a ", bold: false },
    { text: "complimentary energy strategy session ", bold: true },
    { text: "to help you optimize your ", bold: false },
    { text: "operations and sustainability ", bold: true },
    { text: "goals through custom software.", bold: false },
];

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
                title="Custom Software for a Transformed Energy Landscape"
                description=""
                introDescription={[
                    { text: "Empowering energy organizations with the flexibility and intelligence needed to streamline operations and stay ahead of the competition.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Energy "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={energySolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" energy organizations"
            />
        </>
    )
}

export default Energy
