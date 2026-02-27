import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import laptopImg from "../../assets/about_laptop_3d.png";


const serviceOverviewData = {
    label: "DATA GOVERNANCE",
    titleMain: "Master Your",
    titleAccent: "Data",
    titleEnd: "Universe",
    description: "Leapsofts provides comprehensive data governance solutions to ensure your data is a trusted, secure, and valuable asset. We help you establish the framework, policies, and standards needed to turn your data into a strategic advantage.",
    imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
    label: 'GOVERNANCE SERVICES',
    titleAccent: 'Data',
    titleMain: 'Integrity',
    description: 'We offer a range of services to ensure your data remains accurate, compliant, and accessible across your organization.',
    items: [
        { icon: 'enterprise', title: 'Data Quality Management', description: 'Elevate the accuracy and completeness of your business data.' },
        { icon: 'enterprise', title: 'Compliance & Security', description: 'Navigate complex regulatory landscapes like GDPR and HIPAA with confidence.' },
        { icon: 'enterprise', title: 'Master Data Management', description: 'Create a single, unified source of truth for your critical information.' },
        { icon: 'product', title: 'Data Lifecycle Management', description: 'Optimize the flow and storage of data from creation to deletion.' },
        { icon: 'saas', title: 'Metadata Management', description: 'Unlock the power of your data through comprehensive metadata strategies.' },
        { icon: 'thirdParty', title: 'Data Access Governance', description: 'Ensure the right people have the right access to the right data.' },
    ]
};

const infoGridData: InfoGridProps['data'] = {
    label: 'WHY GOVERNANCE',
    title: 'Value of Trusted Data',
    items: [
        {
            icon: "01",
            title: "Better Decisions",
            description: "Empower your leadership with accurate, real-time data insights."
        },
        {
            icon: "02",
            title: "Operational Efficiency",
            description: "Reduce data silos and manual reconciliation with unified standards."
        },
        {
            icon: "03",
            title: "Risk Mitigation",
            description: "Minimize the chance of data breaches and compliance failures."
        },
        {
            icon: "04",
            title: "Strategic Value",
            description: "Treat your data as a high-value asset that drives innovation."
        }
    ]
}

const streamlineDescription = [
    { text: "Your data is your ", bold: false },
    { text: "competitive edge", bold: true },
    { text: ". Leapsofts offers a ", bold: false },
    { text: "complimentary data strategy session ", bold: true },
    { text: "to help you design a ", bold: false },
    { text: "governance framework ", bold: true },
    { text: "that ensures data integrity and supports your long-term business goals.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Policy Development',
        description: 'Establishing clear rules and standards for data usage and management.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Tool Selection',
        description: 'Identifying and implementing the best governance and cataloging platforms.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Data Stewardship',
        description: 'Defining roles and responsibilities for data owners across the business.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Auditing & Reporting',
        description: 'Regular reviews to ensure policies are followed and goals are met.'
    }
];

const deliverMVPData = {
    label: "DATA EXCELLENCE",
    title: "Committed to",
    accentText: "Data Integrity",
    description: "Leapsofts provides expert data governors who are fully committed to your project's success. We focus on transparency, compliance, and strategic alignment.",
    items: [
        {
            title: "Holistic Overview.",
            description: "Ensuring every piece of data is accounted for and managed properly."
        },
        {
            title: "Security Integrated.",
            description: "Governance that works hand-in-hand with your cybersecurity strategy."
        },
        {
            title: "Practical Frameworks.",
            description: "Designing policies that people actually follow and use."
        },
        {
            title: "Technology Agnostic.",
            description: "We work with your existing stack to build a custom governance solution."
        }
    ]
};

const processesData: ProcessPhase[] = [
    {
        id: 1,
        phase: "Phase 1: ASSESSMENT",
        title: "Discovery & Strategy",
        description: "Evaluating your current environment and defining clear objectives.",
        features: ["Evaluate Data Environment", "Identify Quality Gaps", "Define Strategic Goals"]
    },
    {
        id: 2,
        phase: "Phase 2: FRAMEWORK",
        title: "Policy Development",
        description: "Establishing the policies and roles necessary for effective data management.",
        features: ["Establish Policies & Standards", "Set Up Stewardship Roles", "Framework Architecture"]
    },
    {
        id: 3,
        phase: "Phase 3: INTEGRATION",
        title: "Technology Setup",
        description: "Implementing the right tools to automate and enforce governance policies.",
        features: ["Select Compliance Tools", "Management System Setup", "Existing System Integration"]
    },
    {
        id: 4,
        phase: "Phase 4: OPERATIONS",
        title: "Rollout & Evolution",
        description: "Rolling out governance across the organization and continuous improvement.",
        features: ["Stakeholder Training", "Policy Rollout", "Continuous Monitoring"]
    }
]

const phaseLabels = ["ASSESSMENT", "FRAMEWORK", "INTEGRATION", "OPERATIONS"];

const DataGovernance: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Master Your Data Universe"
                description="Transform your data into a powerful asset with Leapsofts Data Governance services."
            />
            <ServiceOverview
                label={serviceOverviewData.label}
                titleMain={serviceOverviewData.titleMain}
                titleAccent={serviceOverviewData.titleAccent}
                titleEnd={serviceOverviewData.titleEnd}
                description={serviceOverviewData.description}
                imagePath={serviceOverviewData.imagePath}
            />
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Data "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Core Governance Skills'
                description='We deliver expert services to ensure your data remains a high-value asset.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={emergingTechData} />
            <Processes
                title="OUR DATA GOVERNANCE PROCESS"
                phaseLabels={phaseLabels}
                processPhases={processesData}
            />
        </>
    );
};

export default DataGovernance;

