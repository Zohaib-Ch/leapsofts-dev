import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection'
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech from '../../components/EmergingTech/EmergingTech'
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO AUTOMOTIVE",
    title: "Driving innovation with smart automotive software solutions",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Precision',
            description: "From supply chain optimization to manufacturing automation, our custom automotive software solutions ensure high precision and reduced time-to-market."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Connectivity',
            description: "Enable seamless connectivity between vehicles, drivers, and infrastructure through advanced IoT and telematics integrations."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Safety',
            description: "Developing robust software for ADAS and autonomous driving features that prioritize safety and reliability on every journey."
        },
    ]
}

const automotiveSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Our solutions for',
    titleMain: 'Automotive Enterprises',
    description: 'We help automotive companies navigate the transition to electric, autonomous, and connected vehicles with cutting-edge software engineering.',
    items: [
        {
            icon: 'legacy',
            title: 'Supply Chain Digitization',
            description: 'Optimize parts tracking and logistics with integrated digital platforms.'
        },
        {
            icon: 'enterprise',
            title: 'Manufacturing AI',
            description: 'Implement predictive maintenance and quality control on the factory floor.'
        },
        {
            icon: 'thirdParty',
            title: 'EV Charging Networks',
            description: 'Build and manage scalable infrastructure for electric vehicle charging stations.'
        },
        {
            icon: 'product',
            title: 'Fleet Management',
            description: 'Real-time tracking and optimization for commercial and enterprise fleets.'
        },
        {
            icon: 'saas',
            title: 'Dealer Portals',
            description: 'Streamline sales and service operations with custom dealer management systems.'
        },
        {
            icon: 'mobile',
            title: 'Connected Car Apps',
            description: 'Enhance driver experience with mobile apps for remote control and diagnostics.'
        }
    ]
}

const streamlineDescription = [
    { text: "Accelerate your ", bold: false },
    { text: "automotive innovation ", bold: true },
    { text: "with a focused approach. Leapsofts offers a ", bold: false },
    { text: "complimentary strategy session ", bold: true },
    { text: "to help you define your ", bold: false },
    { text: "digital roadmap ", bold: true },
    { text: "for the next generation of mobility solutions.", bold: false },
];

const Automotive: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Automotive Product Development",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Automotive Software Engineering"
                description=""
                introDescription={[
                    { text: "Empowering the future of mobility with scalable, secure, and intelligent automotive software solutions.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Automotive "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={automotiveSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" automotive businesses"
            />
        </>
    )
}

export default Automotive
