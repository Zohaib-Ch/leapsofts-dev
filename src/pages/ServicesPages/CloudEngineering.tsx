import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import mobileAppImg from "../../assets/phones.webp";
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';

const ourSolutionsData: EmergingTechProps['data'] = {
    label: 'CLOUD SOLUTIONS',
    titleAccent: 'Our',
    titleMain: ' Solutions',
    description: 'We provide custom-designed cloud platform architectures tailored to your business needs, ensuring efficiency, scalability, and innovation.',
    items: [
        {
            icon: 'product',
            title: 'Tailored Cloud Design',
            description: "Custom cloud architectures built for scalability and innovation."
        },
        {
            icon: 'legacy',
            title: 'Legacy System Integration',
            description: "Merging existing systems with modern DevOps practices."
        },
        {
            icon: 'enterprise',
            title: 'Efficiency and Scalability Enhancement',
            description: "Optimizing infrastructure for high-performance demands."
        },
        {
            icon: 'saas',
            title: 'Proactive Alert Management',
            description: "Comprehensive monitoring for uninterrupted operational excellence."
        },
        {
            icon: 'saas',
            title: 'Proactive Alert Management',
            description: "Comprehensive monitoring for uninterrupted operational excellence."
        },
    ]
};
const processData: InfoGridProps['data'] = {
    label: 'WORKING PROCESS',
    title: 'AI Implementation Pathway',
    items: [
        {
            icon: '01',
            title: 'Cloud & Edge-First Strategy',
            description:
                'Adopt a cloud-native, edge-centric methodology for sustained efficiency and immediate responsiveness.'
        },
        {
            icon: '02',
            title: 'ML Model Creation',
            description:
                'Craft powerful machine learning models for optimal outcomes and improved functionality.'
        },
        {
            icon: '03',
            title: 'AI-Driven Big Data',
            description:
                'Conceptualize, build, and implement big data infrastructures enhanced by AI.'
        },
        {
            icon: '04',
            title: 'Accelerating AI Adoption',
            description:
                'Identify business use cases and opportunities, and define a strategic AI adoption roadmap.'
        },
        {
            icon: '05',
            title: 'Seamless AI Integrations',
            description:
                'Enable system connectivity through integrations with AI-ready'
        }
    ]
}
const deliverMVPData = {
    label: "WHY CHOOSE Leapsofts",
    title: "Why Choose Leapsofts for",
    accentText: "Cloud Migration Services",
    description: "Leapsofts is a cloud software development company that helps accelerate your digital transformation. Whether you're moving from on-premises systems or modernizing legacy applications, Leapsofts expert team delivers end-to-end cloud migration consulting designed to reduce downtime, enhance performance, and unlock long-term business value.",
    items: [
        {
            title: "Proven Methodologies & Processes.",
            description: "We follow tested cloud migration methodologies to ensure a seamless, low-risk transition tailored to your workloads and cloud environment."
        },
        {
            title: "Client-First Approach.",
            description: "Your business needs drive every step of the cloud journey. From discovery to post-migration support, we align our strategy with your goals, infrastructure, and compliance requirements."
        },
        {
            title: "Transparent Pricing Models.",
            description: "We offer clear pricing with no hidden fees. Whether it's fixed-scope development or continuous product engineering, you’ll get accurate forecasts for migration, optimization, and long-term cloud infrastructure costs.."
        },
        {
            title: "Healthcare Software Expertise.",
            description: "Our engineers bring deep experience across AWS, Microsoft Azure, and Google Cloud. Whether you're migrating SAP, modernizing applications, or managing hybrid cloud environments, we deliver scalable, high-performance cloud solutions."
        }
    ]
};
const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: DISCOVERY & ASSESSMENT",
        title: "Objectives & Inventory Assessment",
        description:
            "We define cloud migration goals, assess current environments, and build a prioritized application inventory.",
        features: [
            "Migration Goals & Priority Definition",
            "Application & Infrastructure Inventory",
            "Portfolio Assessment & Readiness Scoring",
        ],
    },
    {
        id: 2,
        phase: "PHASE 2: STRATEGY & ARCHITECTURE",
        title: "Strategic Development & Analysis",
        description:
            "We design the migration strategy, evaluate costs, and select the right cloud model and target architecture.",
        features: [
            "Migration Criteria & Decision Framework",
            "Cost Analysis & Savings Forecast",
            "IaaS / PaaS / SaaS Selection Strategy",
        ],
    },
    {
        id: 3,
        phase: "PHASE 3: MIGRATION EXECUTION",
        title: "Execution, Integration & Security",
        description:
            "We implement migration waves, integrate required tools, and ensure continuity, security, and performance.",
        features: [
            "Migration Runbooks & Wave Planning",
            "Tooling Integration & Automation Enablement",
            "Security, Compliance & Business Continuity Setup",
        ],
    },
    {
        id: 4,
        phase: "PHASE 4: OPTIMIZATION & GOVERNANCE",
        title: "Refinement, Monitoring & Improvement",
        description:
            "We optimize the new cloud environment with continuous monitoring, governance, and ongoing enhancements.",
        features: [
            "Performance & Cost Optimization",
            "Monitoring, Alerts & Operational Governance",
            "Continuous Refinement & Process Improvement",
        ],
    },
];

const phaseLabelsDefault = [
    "DISCOVERY & ASSESSMENT",
    "STRATEGY & ARCHITECTURE",
    "MIGRATION EXECUTION",
    "OPTIMIZATION & GOVERNANCE",
];
const streamlineDescription = [
    { text: "Whether you're modernizing an ", bold: false },
    { text: "existing enterprise software system ", bold: true },
    { text: "or launching a ", bold: false },
    { text: "new digital product", bold: true },
    { text: ", Leapsofts offers a ", bold: false },
    { text: "complimentary software strategy session ", bold: true },
    { text: "designed to deliver value almost immediately. We take the time to understand your business objectives, technical landscape, and operational challenges then provide actionable insights on how ", bold: false },
    { text: "bespoke, cost-effective custom software solutions ", bold: true },
    { text: "can streamline workflows, improve efficiency, and support scalable growth.", bold: false },
];
const title = "Cloud Migration Services";
const subtitle = "";

const introDescription = [
    { text: "Accelerate your digital transformation with secure, scalable, and cost-efficient cloud migration services.", bold: false },
]

const CloudEngineering: React.FC = () => {
    return (
        <>
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <ServiceOverview
                label='BRIEF OVERVIEW'
                titleMain='Ready for a Cloud Application?'
                titleAccent='Fast-forward'
                titleEnd='to our solution:'
                description='We simplify cloud migration to help businesses reduce costs, boost performance, and stay future-ready. From planning and strategy to execution and ongoing support, we handle every step.'
                imagePath={mobileAppImg}
            />
            <EmergingTech data={ourSolutionsData} />
            <InfoGrid data={processData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Software "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
        <DeliverMVP data={deliverMVPData} />
        <Processes title="OUR CLOUD MIGRATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};


export default CloudEngineering;
