import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENTS TO MEDIA INNOVATION",
    title: "Customization & Scalability Commitments",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Flexible Scaling',
            description: "We build software that is engineered to handle rapid user growth and shifting distribution channels without sacrificing performance or stability."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Content Integrity',
            description: "By implementing advanced paywall systems and anti-theft protocols, we ensure your creative assets and business model are protected across the digital world."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Data-Driven Growth',
            description: "We provide high-power reporting engines that turn user interactions into actionable intelligence, driving informed marketing and production decisions."
        },
    ]
}

const entertainmentSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Entertainment-Focused',
    titleMain: ' Digital Solutions',
    description: 'We build robust and flexible software that allows your business to produce, manage, and distribute media at a global scale.',
    items: [
        {
            icon: 'legacy',
            title: 'Video & Music Streaming',
            description: 'High-performance platforms for on-demand audio and visual content with low latency.'
        },
        {
            icon: 'enterprise',
            title: 'Gaming & Esports',
            description: 'Scalable software architecture designed for high-concurrency and interactive play.'
        },
        {
            icon: 'thirdParty',
            title: 'Social Media Platforms',
            description: 'Custom community platforms focused on real-time engagement and content sharing.'
        },
        {
            icon: 'product',
            title: 'Digital Publishing',
            description: 'Modernizing the editorial lifecycle from content creation to global distribution.'
        },
        {
            icon: 'saas',
            title: 'Ad-Tech Integration',
            description: 'Targeted delivery systems and seamless ad-network integration to maximize revenue.'
        },
        {
            icon: 'mobile',
            title: 'Immersive AR/VR',
            description: 'Cutting-edge technologies that redefine how audiences interact with entertainment content.'
        }
    ]
}

const streamlineDescription = [
    { text: "Captivate your ", bold: false },
    { text: "digital audience ", bold: true },
    { text: "with a robust and scalable platform. Leapsofts offers a ", bold: false },
    { text: "complimentary media strategy session ", bold: true },
    { text: "to help you optimize your ", bold: false },
    { text: "content distribution ", bold: true },
    { text: "and monetization model.", bold: false },
];

const Entertainment: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Entertainment Media Solutions",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Media & Entertainment Solutions for the Digital Age"
                description=""
                introDescription={[
                    { text: "Empowering creators and distributors with the technical agility to reach global audiences through secure, high-performance digital platforms.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Media "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={entertainmentSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" entertainment businesses"
            />
        </>
    )
}

export default Entertainment
