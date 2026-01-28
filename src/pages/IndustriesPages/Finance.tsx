import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures'
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection'

const ourSolutionsData: EmergingTechProps['data'] = {
    label: 'Our Solutions',
    titleAccent: 'Our Solutions for',
    titleMain: 'Financial Organizations',
    description: 'We deliver tailored financial software solutions that enhance operational efficiency, strengthen customer experience, and ensure compliance across the financial sector. Whether you\re a bank, fintech startup, or investment firm, we build scalable tools that align with your business goals and regulatory needs.',
    items: [
        {
            icon: 'legacy',
            title: 'Update Legacy Systems',
            description: 'Elevate aging systems to new, streamlined platforms.'
        },
        {
            icon: 'enterprise',
            title: 'DevOps Transformation',
            description: 'Streamline your software delivery with efficient DevOps practices.'
        },
        {
            icon: 'thirdParty',
            title: 'Platform Upgrades',
            description: 'Modernize your platforms to align with cutting edge technologies.'
        },
        {
            icon: 'product',
            title: 'Code Enhancement',
            description: 'Optimize your codebase for better performance and easier maintenance.'
        },
        {
            icon: 'saas',
            title: 'UI/UX Design Overhaul',
            description: 'Redesign your user interface for an improved user experience.'
        },
        {
            icon: 'enterprise',
            title: 'System Integration',
            description: 'Merge separate systems to improve operational efficiency.'
        },
        {
            icon: 'ecommerce',
            title: 'Data Transfer',
            description: 'Securely relocate your data with no loss of critical information.'
        },
        {
            icon: 'saas',
            title: 'Performance Boost',
            description: 'Optimize application efficiency and uptime for superior performance.'
        },
        {
            icon: 'mobile',
            title: 'Mobile App Redesign',
            description: 'Update your mobile applications to support the latest device capabilities.'
        },
        {
            icon: 'thirdParty',
            title: 'Seamless Cloud Transition',
            description: 'Transition your applications seamlessly to the cloud for enhanced scalability.'
        }
    ]
}

const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'TECH INNOVATIONS TO CONSIDER',
    titleAccent: 'Tech innovations for',
    titleMain: 'FinTech solutions',
    description: 'As a financial software development company, we bring cutting-edge technologies to every financial software development project to future-proof your solutions and enhance efficiency.',
    items: [
        {
            icon: 'legacy',
            title: 'Update Legacy Systems',
            description: 'Elevate aging systems to new, streamlined platforms.'
        },
        {
            icon: 'enterprise',
            title: 'DevOps Transformation',
            description: 'Streamline your software delivery with efficient DevOps practices.'
        },
        {
            icon: 'thirdParty',
            title: 'Platform Upgrades',
            description: 'Modernize your platforms to align with cutting edge technologies.'
        },
        {
            icon: 'product',
            title: 'Code Enhancement',
            description: 'Optimize your codebase for better performance and easier maintenance.'
        },
        {
            icon: 'saas',
            title: 'UI/UX Design Overhaul',
            description: 'Redesign your user interface for an improved user experience.'
        },
        {
            icon: 'enterprise',
            title: 'System Integration',
            description: 'Merge separate systems to improve operational efficiency.'
        },
        {
            icon: 'ecommerce',
            title: 'Data Transfer',
            description: 'Securely relocate your data with no loss of critical information.'
        },
        {
            icon: 'saas',
            title: 'Performance Boost',
            description: 'Optimize application efficiency and uptime for superior performance.'
        },
        {
            icon: 'mobile',
            title: 'Mobile App Redesign',
            description: 'Update your mobile applications to support the latest device capabilities.'
        },
        {
            icon: 'thirdParty',
            title: 'Seamless Cloud Transition',
            description: 'Transition your applications seamlessly to the cloud for enhanced scalability.'
        }
    ]
}



const Finance: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Software Solutions for Finance & Banking"
                description="We build secure, scalable, and compliant financial software solutions that help you streamline operations, enhance security, and deliver superior customer experiences."
            />
            <CommitmentSection />
            <ServiceFeatures />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Software "
                titleAccent="Strategy"
                titleEnd=" Session"
                description="Whether it is an existing enterprise software system or a brand-new startup, we offer a no-charge strategy session, which can bring value to the table almost in real-time. We learn about your unique needs and share how to streamline your operations by using bespoke, cost-effective custom software solutions."
                imageUrl="/strategy_session_dashboard.png"
            />
            <EmergingTech data={ourSolutionsData} />
            <EmergingTech data={ourTechInnovationsData} />
            <Services />
            <IndustryProcess
                titleMain="FinTech App Development"
                titleAccent='Process'
            />
        </>
    )
}

export default Finance
