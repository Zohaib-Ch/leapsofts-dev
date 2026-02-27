import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';

const servicesData: EmergingTechProps['data'] = {
    label: "DEVOPS SERVICES",
    titleMain: "Our Services",
    titleAccent: "",
    description: "We provide comprehensive DevOps solutions to automate your infrastructure, streamline delivery, and ensure high availability.",
    items: [
        {
            icon: "enterprise",
            title: "Automated Infrastructure Management",
            description: "Craft and oversee your IT infrastructure with code to streamline setup, scalability, and control of IT assets."
        },
        {
            icon: "saas",
            title: "Streamlined CI/CD Process",
            description: "Automate your software's build, test, and deployment phases with platforms like Jenkins, Travis CI, and CircleCI."
        },
        {
            icon: "hipaa",
            title: "Efficient Container Management",
            description: "Encapsulate software within containers and orchestrate them using tools such as Docker and Kubernetes."
        },
        {
            icon: "ecommerce",
            title: "Optimized Application Surveillance",
            description: "Track your applications' and infrastructure's performance and well-being, while gathering and scrutinizing log data for problem-solving."
        },
        {
            icon: "mobile",
            title: "Streamlined Cloud Management",
            description: "Efficiently oversee and refine your cloud infrastructure operations on platforms like AWS, Azure, or GCP."
        },
        {
            icon: "legacy",
            title: "Safeguarding and Adherence",
            description: "Guarantee that your software's development and launch activities meet all necessary security protocols and compliance mandates."
        }
    ]
};
const deliverMVPData = {
    label: "WHY CHOOSE LEAPSOFTS",
    title: "Why Choose Leapsofts for",
    accentText: "DevOps Services",
    description: "Leapsofts is a cloud software development company that helps accelerate your digital transformation. Whether you're moving from on-premises systems or modernizing legacy applications, Leapsofts’s expert team delivers end-to-end cloud migration consulting designed to reduce downtime, enhance performance, and unlock long-term business value.",
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

const strategyData: InfoGridProps['data'] = {
    label: "STRATEGIES",
    title: "Tailored DevOps Strategies",
    items: [
        {
            icon: "01",
            title: "DevOps Evaluation",
            description: "Our engineers will scrutinize your deployment strategies, advising on tools and methodologies to boost your operational effectiveness."
        },
        {
            icon: "02",
            title: "DevOps Streamlining",
            description: "By automating the full delivery pipeline, we cut down on deployment and rollback durations, reduce hazards, and enhance overall productivity."
        },
        {
            icon: "03",
            title: "DevOps Coordination",
            description: "We will synchronize your automated delivery pipeline with your broader development activities."
        }
    ]
};
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

const DevOps: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Streamline, Unify & Accelerate Delivery"
                description="We’ll hasten your rollout, ease the update and upgrade process, and ensure enhanced availability."
            />
            <ServiceOverview
                titleMain="Maximize"
                titleAccent='Operational Agility'
                titleEnd='with DevOps'
                description="Implementing DevOps can be intricate, necessitating strategic planning and precision. It’s pivotal for refining your development and deployment cycles, thereby reducing mistakes, boosting efficiency, and elevating client contentment. To excel in a competitive landscape, enhance operational efficacy, and raise deployment standards, consider our expert DevOps services. Our seasoned professionals are adept at guiding numerous firms through successful DevOps adoptions, equipped to automate and regulate your infrastructure deployment processes."
                imagePath="/icons/images/cloud.webp"
            />
            <InfoGrid data={strategyData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Software "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={servicesData} />
            <Processes title="OUR DEVOPS PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};

export default DevOps;
