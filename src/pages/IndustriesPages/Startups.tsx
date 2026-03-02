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
    subtitle: "OUR COMMITMENT TO STARTUPS",
    title: "Accelerating your journey from idea to market leadership",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Agility',
            description: "We use rapid prototyping and agile methodologies to help you iterate quickly, ensuring your product stays ahead of the curve and aligned with user feedback."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Scalability',
            description: "Building a foundation for the future. Our architectures are designed to handle rapid growth in users, data, and complexity without missing a beat."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Innovation',
            description: "We bring startup-focused expertise to help you integrate cutting-edge AI and tech, turning your disruptive ideas into functional realities."
        },
    ]
}

const startupSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Our solutions for',
    titleMain: 'High-Growth Startups',
    description: 'We provide end-to-end technical partnership for startups, from MVP development to scaling global platforms and securing subsequent funding rounds.',
    items: [
        {
            icon: 'legacy',
            title: 'MVP Engineering',
            description: 'Build a lean, functional core of your product to validate your vision and attract early adopters.'
        },
        {
            icon: 'enterprise',
            title: 'Product Scaling',
            description: 'Refactor and optimize your architecture to support massive growth and high-concurrency demands.'
        },
        {
            icon: 'thirdParty',
            title: 'CTO-as-a-Service',
            description: 'Access high-level strategic technical leadership and roadmap planning without the full-time overhead.'
        },
        {
            icon: 'product',
            title: 'Pitch-Ready Demos',
            description: 'Develop high-fidelity prototypes and proof-of-concepts tailored for investor presentations.'
        },
        {
            icon: 'saas',
            title: 'Cloud Infrastructure',
            description: 'Design and deploy cost-effective, secure cloud environments that scale with your user base.'
        },
        {
            icon: 'mobile',
            title: 'Rapid App Iteration',
            description: 'Quickly test and deploy new features based on market data and user behavioral analysis.'
        }
    ]
}

const streamlineDescription = [
    { text: "Launch your ", bold: false },
    { text: "startup vision ", bold: true },
    { text: "with the right technical partner. Leapsofts offers a ", bold: false },
    { text: "complimentary MVP strategy session ", bold: true },
    { text: "to help you define your ", bold: false },
    { text: "path to launch ", bold: true },
    { text: "and long-term scaling strategy.", bold: false },
];

const Startups: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Startup Product Development",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Startup Engineering Partner"
                description=""
                introDescription={[
                    { text: "From initial concept to hyper-growth, we provide the technical agility and engineering excellence startups need to disrupt industries.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Startup "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={startupSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" disruptive startups"
            />
        </>
    )
}

export default Startups
