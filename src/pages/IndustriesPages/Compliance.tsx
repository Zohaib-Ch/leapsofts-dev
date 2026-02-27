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
    subtitle: "OUR COMMITMENT TO COMPLIANCE",
    title: "Navigating regulatory complexity with intelligent software",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Transparency',
            description: "Implementing real-time audit trails and data logging to ensure full visibility into organizational processes and regulatory adherence."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Audit Readiness',
            description: "Automate report generation and document management to ensure your business is always prepared for regulatory inspections and audits."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Integrity',
            description: "Leveraging secure data encryption and access controls to maintain the highest standards of data integrity and ethical compliance."
        },
    ]
}

const complianceSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Our solutions for',
    titleMain: 'Governance & Compliance',
    description: 'We build robust RegTech solutions that help organizations automate compliance, manage risks, and ensure adherence to global standards.',
    items: [
        {
            icon: 'legacy',
            title: 'Automated Reporting',
            description: 'Generate regulatory reports automatically with high accuracy and reduced manual effort.'
        },
        {
            icon: 'enterprise',
            title: 'Risk Management Systems',
            description: 'Monitor and mitigate operational and financial risks through data-driven insights.'
        },
        {
            icon: 'thirdParty',
            title: 'AML/KYC Automation',
            description: 'Streamline Anti-Money Laundering and Know Your Customer processes with AI-powered verification.'
        },
        {
            icon: 'product',
            title: 'Policy Management',
            description: 'Centralize and automate the lifecycle of corporate policies and procedures.'
        },
        {
            icon: 'saas',
            title: 'Continuous Monitoring',
            description: 'Real-time monitoring of transactions and workflows for potential compliance violations.'
        },
        {
            icon: 'mobile',
            title: 'Secure Document Vaults',
            description: 'Provide secure, encrypted storage for sensitive regulatory documentation and evidencing.'
        }
    ]
}

const streamlineDescription = [
    { text: "Simplify your ", bold: false },
    { text: "regulatory compliance ", bold: true },
    { text: "and reduce operational risk. Leapsofts offers a ", bold: false },
    { text: "complimentary compliance strategy session ", bold: true },
    { text: "to help you design an ", bold: false },
    { text: "automated framework ", bold: true },
    { text: "for long-term regulatory success.", bold: false },
];

const Compliance: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "Compliance Software Development",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Compliance & RegTech Solutions"
                description=""
                introDescription={[
                    { text: "Transforming regulatory challenges into competitive advantages through intelligent, automated compliance software engineering.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Compliance "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={complianceSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" compliant organizations"
            />
        </>
    )
}

export default Compliance
