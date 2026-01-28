import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import Capabilities from '../../components/Capabilities/Capabilities';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
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
                description="Explore new business ideas safely with detailed testing, accurate project forecasts, and expert advice."
            />
            <Capabilities
                title="Our Key Capabilities"
                description="we offer end-to-end custom application development services across various platforms and business functions."
                slides={capabilitiesSlides}
                defaultImage={capabilitiesImg}
            />
            <Processes title="OUR PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />

        </>
    );
};

export default ProofOfConceptDevelopment;
