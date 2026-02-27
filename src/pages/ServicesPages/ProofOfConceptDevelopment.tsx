import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import laptopImg from "../../assets/about_laptop_3d.png";
const capabilitiesSlides: CapabilitySlide[] = [
    {
        id: 'consultation',
        number: '< 01 >',
        title: 'LeapSofts, Pioneering POC Development Services',
        image: capabilitiesImg,
        items: [
            {
                name: 'Validation of Concept',
                description: "Our team is committed to making your idea come true, supported by detailed and checked research."
            },
            {
                name: 'Prototype Creation',
                description: "We are really good at turning your ideas into real, working models, providing full design and development services."
            },
            {
                name: 'Product Development',
                description: "We’ll help you at every step of creating your software, from the start to its release, making sure your product does well."
            },
            {
                name: 'Idea Evaluation and Optimization',
                description: "Our method involves predicting, making plans, and carefully checking everything after developing a Proof of Concept. This helps you find the best solution while reducing money risks."
            },
            {
                name: 'Streamlining Your Development Journey',
                description: "Our team is good at finding and fixing problems in how you develop software, making testing better. We give you software that’s ready to use right after it’s approved."
            }
        ]
    },
    {
        id: 'configuration',
        number: '< 02 >',
        title: 'LeapSofts, Unlocking Success, Minimizing Risks',
        image: platformImg,
        items: [
            {
                name: 'Stakeholder Insights',
                description: "Work with us and talk to people involved in your project to use their feedback for making smart choices. Test your product in the market to see how people like it, learn important things, and avoid repeated problems."
            },
            {
                name: 'Strategic Project Analysis',
                description: "Our team of software specialists will carefully examine your project and help you create a good plan to make your future projects successful and work more efficiently."
            },
            {
                name: 'Implementation Advisory',
                description: "LeapSoft’s Salesforce consulting enhances scalability, customization, and creates intuitive applications."
            },
            {
                name: 'Comprehensive Management',
                description: "Providing total CRM administration and upkeep, along with scalable solutions."
            },
            {
                name: 'CRM Integration',
                description: "LeapSoft’s integration services streamline your marketing, sales, and customer service through automation."
            }
        ]
    }
];

const serviceOverviewData = {
    label: "POC DEVELOPMENT",
    titleMain: "Validate Your",
    titleAccent: "Innovation",
    titleEnd: "Early",
    description: "Leapsofts helps companies reduce technical and market risks through strategic Proof of Concept development. We turn your ambitious ideas into functional demonstrators, providing the technical evidence needed to secure stakeholder buy-in and investment.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'POC BENEFITS',
    title: 'Why Start with a POC',
    items: [
        {
            icon: '01',
            title: 'Risk Mitigation',
            description: 'Identify and address technical blockers before committing to full-scale development.'
        },
        {
            icon: '02',
            title: 'Cost Efficiency',
            description: 'Spend less to validate core functionality than building a complete product.'
        },
        {
            icon: '03',
            title: 'Stakeholder Buy-in',
            description: 'Prove the value of your idea with a tangible, working demonstration.'
        },
        {
            icon: '04',
            title: 'Faster Learning',
            description: 'Gather user feedback early to refine your product roadmap.'
        }
    ]
};

const streamlineDescription = [
    { text: "Don't leave your innovation to ", bold: false },
    { text: "chance", bold: true },
    { text: ". Leapsofts offers a ", bold: false },
    { text: "complimentary POC feasibility session ", bold: true },
    { text: "to help you identify the ", bold: false },
    { text: "best path to validation ", bold: true },
    { text: "for your most ambitious digital ideas.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Rapid Prototyping',
        description: 'Building interactive UI mocks and click-through flows to test user experience.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Technical Feasibility',
        description: 'Coding core backend logic to prove complex integrations or algorithms.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Architecture Blueprint',
        description: 'Defining the tech stack and system design for future full-scale development.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Market Testing',
        description: 'Creating light versions of your product to test user engagement in the real world.'
    }
];

const deliverMVPData = {
    label: "POC EXCELLENCE",
    title: "Committed to",
    accentText: "Proven Success",
    description: "Leapsofts provides senior technical advisors who are fully committed to your project's success. We focus on innovation, technical honesty, and strategic clarity.",
    items: [
        {
            title: "Technical Rigor.",
            description: "Answering the 'can it be done' question with clear technical evidence."
        },
        {
            title: "Strategic Speed.",
            description: "Delivering functional POCs in weeks, not months."
        },
        {
            title: "Clear Roadmap.",
            description: "Transitioning smoothly from successful POC to full-scale project planning."
        },
        {
            title: "Honest Assessment.",
            description: "Providing transparent feedback on feasibility and potential roadblocks."
        }
    ]
};
const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: SOLUTION DESIGN & PLANNING",
        title: "Conceptualization & Requirement Gathering",
        description:
            "We begin by fully understanding your business goals, defining the scope, and outlining the project objectives.",
        features: [
            "Requirement Analysis & Documentation",
            "Market Research & Competitive Analysis",
            "Defining Project Scope & Budget",
        ],
    },
    {
        id: 2,
        phase: "PHASE 2: DEVELOPMENT & EXECUTION",
        title: "Prototype & Software Development",
        description:
            "We bring your idea to life by developing a functional prototype followed by full-scale software development using the latest technology.",
        features: [
            "Prototype Creation & Testing",
            "Custom Software Development",
            "System Integration & Data Management",
        ],
    },
    {
        id: 3,
        phase: "PHASE 3: TESTING & VALIDATION",
        title: "Quality Assurance & Testing",
        description:
            "Thorough testing is conducted to ensure the software meets quality standards and is ready for deployment.",
        features: [
            "Unit & System Testing",
            "Bug Fixes & Performance Optimization",
            "User Acceptance Testing (UAT)",
        ],
    },
    {
        id: 4,
        phase: "PHASE 4: DEPLOYMENT & MAINTENANCE",
        title: "Deployment & Post-Launch Support",
        description:
            "We deploy the software into your live environment and provide continuous maintenance and support.",
        features: [
            "Seamless Deployment to Client Environment",
            "Ongoing Technical Support & Maintenance",
            "Post-Launch Monitoring & Optimization",
        ],
    },
];

const phaseLabelsDefault = [
    "SOLUTION DESIGN & PLANNING",
    "DEVELOPMENT & EXECUTION",
    "TESTING & VALIDATION",
    "DEPLOYMENT & MAINTENANCE",
];



const ProofOfConceptDevelopment: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Elevate Your Business with Confidence"
                description="Explore new business ideas safely with detailed testing and project forecasts."
            />
            <ServiceOverview
                label={serviceOverviewData.label}
                titleMain={serviceOverviewData.titleMain}
                titleAccent={serviceOverviewData.titleAccent}
                titleEnd={serviceOverviewData.titleEnd}
                description={serviceOverviewData.description}
                imagePath={serviceOverviewData.imagePath}
            />
            <Capabilities
                title="Our Key Capabilities"
                description="We offer end-to-end custom application development services."
                slides={capabilitiesSlides}
                defaultImage={capabilitiesImg}
            />
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="POC "
                titleAccent="Feasibility"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert POC Services'
                description='We deliver specialized services to validate your digital innovations.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <Processes title="OUR PROOF OF CONCEPT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};

export default ProofOfConceptDevelopment;
