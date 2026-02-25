import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'TECH INNOVATIONS TO CONSIDER',
    titleAccent: 'Tech innovations for',
    titleMain: 'FinTech solutions',
    description: 'We leverage cutting-edge technologies to future-proof your financial solutions and enhance operational efficiency.',
    items: [
        {
            icon: 'legacy',
            title: 'Banking Digitization',
            description: 'Integrate core financial services into digital ecosystems via cloud and mobile apps.'
        },
        {
            icon: 'enterprise',
            title: 'Talent Retention',
            description: 'Support secure remote work with VDI and zero-trust networks for efficiency and safety.'
        },
        {
            icon: 'thirdParty',
            title: 'Blockchain Integration',
            description: 'Use DLT for secure, transparent, and immutable cross-border payments and smart contracts.'
        },
        {
            icon: 'product',
            title: 'System Modernization',
            description: 'Migrate monolithic systems to modular architectures to meet regulations and new tech.'
        },
        {
            icon: 'saas',
            title: 'Process Optimization',
            description: 'Use AI and BPM tools to automate procedures for faster, personalized, and efficient service.'
        },
        {
            icon: 'legacy',
            title: 'Banking Digitization',
            description: 'Integrate core financial services into digital ecosystems via cloud and mobile apps.'
        },
        {
            icon: 'enterprise',
            title: 'Talent Retention',
            description: 'Support secure remote work with VDI and zero-trust networks for efficiency and safety.'
        },
        {
            icon: 'thirdParty',
            title: 'Blockchain Integration',
            description: 'Use DLT for secure, transparent, and immutable cross-border payments and smart contracts.'
        },
        {
            icon: 'product',
            title: 'System Modernization',
            description: 'Migrate monolithic systems to modular architectures to meet regulations and new tech.'
        },
        {
            icon: 'saas',
            title: 'Process Optimization',
            description: 'Use AI and BPM tools to automate procedures for faster, personalized, and efficient service.'
        }
    ]
}

const title = "LeapSofts Technologies Are Fintech Developers";
const subtitle = ""
const introDescription = [
    { text: "Secure software solutions to enhance user experience in the new, digital landscape Allow Leapsofts Technologies to help you bring your financial services firm into the digital age with software that's as sharp as you are.", bold: false },
]
const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO FINANCIAL ORGANIZATIONS",
    title: "Bringing banking & finance into the digital age",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Cyber-Attack Protection',
            description: "Preventing security compromises is paramount. We implement secure, compliant software architecture and continuous, real-time threat monitoring. This proactive defense strategy shields your reputation and protects high-value customer and institutional assets from increasingly sophisticated cyber threats."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Regulatory Compliance',
            description: "Strict and ever-changing financial regulations often clog operational processes. We develop flexible systems that automate compliance checks, ensuring your organization remains fully compliant with regional and international mandates (e.g., GDPR, Basel III, KYC/AML) while preserving business agility.",
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Data Management',
            description: "Effectively organizing, securing, and utilizing high-stakes financial data is critical. Our solutions adhere to the most stringent international standards, implementing robust data governance frameworks to ensure data integrity, accessibility, and confidentiality across all platforms.",
        },
    ]
}
const whyChooseUsData = {
    subtitle: 'Why Choose Us?',
    title: 'Why Choose Leapsofts?',
    items: [
        'Leapsofts Technologies offers a full professional development team with a strong customer-focused approach.',
        'Our expertise in diverse technologies and financial services enables us to deliver tailored, effective solutions.',
        'Our UI/UX specialists create visually appealing, user-friendly apps that enhance customer experience for financial institutions.',
        'We ensure bulletproof security through proactive prevention strategies and robust incident response to protect financial data.'
    ]
};

const Finance: React.FC = () => {
        const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "FinTech App Development",
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
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Software "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={[
                    { text: "Whether it is an ", bold: false },
                    { text: "existing enterprise software system ", bold: true },
                    { text: "or a ", bold: false },
                    { text: "brand-new startup", bold: true },
                    { text: ", we offer a ", bold: false },
                    { text: "no-charge strategy session", bold: true },
                    { text: ", which can bring value to the table almost in real-time. We learn about your unique needs and share how to streamline your operations by using ", bold: false },
                    { text: "bespoke, cost-effective custom software solutions", bold: true },
                    { text: ".", bold: false },
                ]}
                imageUrl="/strategy_session_dashboard.png"
            />
            <EmergingTech data={ourTechInnovationsData} />
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items} />
        </>
    )
}

export default Finance
