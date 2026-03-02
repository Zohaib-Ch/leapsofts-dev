import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import phoneImg from "../../assets/phones.webp";

const ourServicesData: EmergingTechProps['data'] = {
    label: 'QA SERVICES',
    titleAccent: 'Our',
    titleMain: ' Services',
    description: 'We offer a comprehensive suite of quality assurance services designed to identify issues early and ensure your software meets the highest standards of performance and security.',
    items: [
        {
            icon: 'product',
            title: "Functionality Checks",
            description: "Assess software for functionality, usability, and compatibility."
        },
        {
            icon: 'product',
            title: "Non-Functional Evaluation",
            description: "Examine performance, security, and other non-functional elements of the software."
        },
        {
            icon: 'enterprise',
            title: "Component Testing",
            description: "Test individual units like functions and methods for efficacy."
        },
        {
            icon: 'enterprise',
            title: "Integration Review",
            description: "Confirm the proper integration of software components."
        },
        {
            icon: 'hipaa',
            title: "System Examination",
            description: "Ensure the entire software system aligns with specified requirements."
        },
        {
            icon: 'enterprise',
            title: "Customer Approval Testing",
            description: "Validate the software against customer acceptance standards."
        },
        {
            icon: 'enterprise',
            title: "Update and Change Verification",
            description: "Guarantee that updates do not introduce new issues."
        },
        {
            icon: 'hipaa',
            title: "Load Performance Analysis",
            description: "Test software behavior under various loads and environments."
        },
        {
            icon: 'hipaa',
            title: "Security Assessment",
            description: "Identify and address potential security vulnerabilities."
        },
        {
            icon: 'hipaa',
            title: "End-User Experience Testing",
            description: "Determine if the software fulfills the end-user's requirements."
        }
    ]
};

const processesData: ProcessPhase[] = [
    {
        id: 1,
        phase: "Phase 1: Discovery Phase",
        title: "Discovery Phase",
        description: "Define the scope and methodology for testing, establishing a foundation for quality assurance in any digital product.",
        features: ["Scope Definition", "Methodology Setup", "QA Foundation"]
    },
    {
        id: 2,
        phase: "Phase 2: Strategy Formulation",
        title: "Strategy Formulation",
        description: "Determine testing methods and procedures to shape the execution strategy.",
        features: ["Testing Methods", "Procedures Definition", "Execution Strategy"]
    },
    {
        id: 3,
        phase: "Phase 3: Implementation Phase",
        title: "Implementation Phase",
        description: "Run the final code and evaluate its performance against expected outcomes.",
        features: ["Code Execution", "Performance Evaluation", "Outcome Matching"]
    },
    {
        id: 4,
        phase: "Phase 4: Analysis & Feedbook",
        title: "Analysis & Feedback",
        description: "Deliver a comprehensive test report offering insights into the software's code quality.",
        features: ["Comprehensive Reporting", "Quality Insights", "Feedback Delivery"]
    }
]

const phaseLabel = processesData.map((process) => process.title);

const infoGridData: InfoGridProps['data'] = {
    label: 'QA BENEFITS',
    title: 'Why Quality Assurance Matters',
    items: [
        {
            icon: '01',
            title: 'Cost Efficiency',
            description: 'Identify and fix bugs early in the development cycle to reduce long-term maintenance costs.'
        },
        {
            icon: '02',
            title: 'User Satisfaction',
            description: 'Ensure a seamless, bug-free experience that keeps your users engaged and satisfied.'
        },
        {
            icon: '03',
            title: 'Security Assurance',
            description: 'Protect sensitive user data by identifying and patching vulnerabilities before launch.'
        },
        {
            icon: '04',
            title: 'Brand Reputation',
            description: 'Deliver high-quality products that reinforce your brand’s commitment to excellence.'
        }
    ]
};

const streamlineDescription = [
    { text: "Optimizing your ", bold: false },
    { text: "software quality ", bold: true },
    { text: "doesn't have to be complicated. At Leapsofts, we offer a ", bold: false },
    { text: "complimentary QA strategy session ", bold: true },
    { text: "to help you identify gaps in your testing process and implement ", bold: false },
    { text: "automated solutions ", bold: true },
    { text: "that accelerate your release cycles without compromising on standards.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Automation Testing',
        description: 'Implementing robust automated test suites to speed up regression and repetitive testing tasks.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Manual Testing',
        description: 'Exhaustive human-led testing to uncover edge cases and evaluate user experience nuances.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Performance Testing',
        description: 'Stress-testing your application to ensure it remains stable under high traffic and heavy loads.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Security Audits',
        description: 'In-depth security analysis to identify potential threats and ensure data integrity.'
    }
];

const deliverMVPData = {
    label: "QA EXCELLENCE",
    title: "Our Commitment to",
    accentText: "Superior Quality",
    description: "Leapsofts provides end-to-end quality assurance services that integrate seamlessly with your development workflow. Our goal is to ensure that every product we touch meets the highest industry standards for reliability, security, and performance.",
    items: [
        {
            title: "Zero-Defect Policy.",
            description: "We strive for perfection in every test cycle, ensuring that critical bugs are addressed before they reach production."
        },
        {
            title: "Agile Integration.",
            description: "Our QA teams work in parallel with developers, providing immediate feedback and ensuring continuous quality throughout the sprint."
        },
        {
            title: "Advanced Tooling.",
            description: "We leverage the latest testing frameworks and AI-driven tools to provide comprehensive coverage across web, mobile, and API platforms."
        },
        {
            title: "User-Centric Testing.",
            description: "Beyond just code, we test for usability and accessibility to ensure your product is inclusive and easy to navigate."
        }
    ]
};
const title = "Keep Bugs at Bay, Focus on Success";
const subtitle = "";

const introDescription = [
    { text: "Minimize time spent on resolving problems and devote more to creating products that delight your users!", bold: false },
]

const QualityAssurance: React.FC = () => {
    return (
        <>
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <ServiceOverview
                label="BRIEF OVERVIEW"
                titleMain="Elevating"
                titleAccent="Software"
                titleEnd="Dependability"
                description="Before your software goes live, let us put it through rigorous testing to ensure it's bulletproof. Our QA services cover everything from regression testing to performance analysis, ensuring reliable, high-quality outcomes meeting any quality standards."
                imagePath={phoneImg}
            />
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="QA "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Our QA'
                description='We offer specialized testing services tailored to your project requirements, ensuring robust performance and security.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={ourServicesData} />
            <Processes
                title="Software Verification & Validation Framework"
                phaseLabels={phaseLabel}
                processPhases={processesData}
            />
        </>
    );
};

export default QualityAssurance;