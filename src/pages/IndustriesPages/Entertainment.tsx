import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "Our Commitments to Media Innovation",
    title: "Tailored commitments focusing on the Custom vs. Off-the-shelf and Scale data.",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Flexible Scaling',
            description: "We commit to building software that is both robust and adaptable. In a landscape of constant change, we ensure your platform is engineered to handle rapid user growth and shifting distribution channels without sacrificing performance or stability."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Content Integrity',
            description: "We commit to the security of your creative assets. By implementing advanced paywall systems and anti-theft protocols, we ensure your business model is protected, giving you full control over how your content is accessed, shared, and monetized across the digital world."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Data-Driven Growth',
            description: "We commit to turning your user interactions into actionable intelligence. We don't just provide a platform; we provide a high-power reporting engine that allows you to monitor engagement in real-time. Our commitment is to give you the data needed to make informed marketing and production decisions that drive long-term success."
        },
    ]
}
const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'TECH INNOVATIONS TO CONSIDER',
    titleAccent: 'Industry-Specific',
    titleMain: ' Solutions',
    description: 'Focusing on the diverse sectors covered in your data.',
    items: [
        {
            icon: 'legacy',
            title: 'Video & Music Streaming',
            description: 'High-performance platforms for on-demand audio and visual content.'
        },
        {
            icon: 'enterprise',
            title: 'Gaming & Esports',
            description: 'Scalable software architecture designed for high-concurrency and interactive play.'
        },
        {
            icon: 'thirdParty',
            title: 'Social Media & Networking',
            description: 'Custom community platforms focused on real-time engagement and content sharing.'
        },
        {
            icon: 'product',
            title: 'Digital & Print Publishing',
            description: 'Modernizing the editorial lifecycle from content creation to global distribution.'
        },
        {
            icon: 'saas',
            title: 'AR/VR Experiences',
            description: 'Immersive technologies that redefine how audiences interact with entertainment.'
        },
        {
            icon: 'saas',
            title: 'Media & Advertising',
            description: 'Targeted delivery systems and ad-tech integration to maximize revenue.'
        },
              {
            icon: 'legacy',
            title: 'Video & Music Streaming',
            description: 'High-performance platforms for on-demand audio and visual content.'
        },
        {
            icon: 'enterprise',
            title: 'Gaming & Esports',
            description: 'Scalable software architecture designed for high-concurrency and interactive play.'
        },
        {
            icon: 'thirdParty',
            title: 'Social Media & Networking',
            description: 'Custom community platforms focused on real-time engagement and content sharing.'
        },
        {
            icon: 'product',
            title: 'Digital & Print Publishing',
            description: 'Modernizing the editorial lifecycle from content creation to global distribution.'
        },
        {
            icon: 'saas',
            title: 'AR/VR Experiences',
            description: 'Immersive technologies that redefine how audiences interact with entertainment.'
        },
        {
            icon: 'saas',
            title: 'Media & Advertising',
            description: 'Targeted delivery systems and ad-tech integration to maximize revenue.'
        },
    ]
}
const servicesData: InfoGridProps['data'] = {
  label: 'Operational Modules — Engineering Project Success',
  title: 'Refined from the "Leapsofts" data to focus on high-impact features.',
  items: [
    {
      icon: '01',
      title: 'Intelligent Content Security',
      description:
        'Protect your intellectual property with integrated paywalls, subscription management, and robust anti-piracy measures to ensure content is shared only within your defined limits.'
    },
    {
      icon: '02',
      title: 'Real-Time Engagement Monitoring',
      description:
        'Custom reporting engines that provide at-a-glance insights into content performance and user behavior, enabling data-driven production and investment decisions.'
    },
    {
      icon: '03',
      title: 'Dynamic Delivery Channels',
      description:
        'Multi-platform support (web, mobile, and smart devices) to meet your audience where they are—at home or on the go—with high-performing, low-latency streaming.'
    },
    {
      icon: '04',
      title: 'UX-Centric Design',
      description:
        'High-performing, visually engaging interfaces designed to reduce churn and keep users returning for more through seamless navigation and personalization.'
    },
  ]
};
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'High-Availability Cloud Services',
        description: 'We utilize advanced cloud infrastructure to ensure your streaming or gaming services are "always on," providing 99.9% uptime regardless of traffic spikes.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Third-Party API & Ad-Tech Sync',
        description: "Seamlessly connecting your platform to global payment gateways, advertising networks, and social APIs for a unified ecosystem."
    },
];
  const title = "Custom Media & Entertainment Solutions for the Digital Revolution";
  const subtitle = "";

  const introDescription = [
    { text: "As consumer preferences shift toward on-demand, multi-channel content, we build robust and flexible software that allows your business to produce, manage, and distribute media at a global scale", bold: false },
  ]

const Entertainment: React.FC = () => {
    return (
        <>
             <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
             <CommitmentSection data={commitmentData} />
            <EmergingTech data={ourTechInnovationsData} />
            <InfoGrid data={servicesData} />
            <ServiceFeatures items={defaultItems}/>
        </>
    )
}

export default Entertainment
