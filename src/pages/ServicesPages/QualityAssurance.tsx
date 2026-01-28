import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';

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
const QualityAssurance: React.FC = () => {
    return (
        <>
            <div>
                <IntroComponent
                    title="Keep Bugs at Bay, Focus on Success"
                    description="Minimize time spent on resolving problems and devote more to creating products that delight your users!"
                />
            </div>
            <div>
                <ServiceOverview
                    label="BRIEF OVERVIEW"
                    titleMain="Elevating"
                    titleAccent="Software"
                    titleEnd="Dependability"
                    description="Before your software goes live, let us put it through rigorous testing to ensure it's bulletproof. Our QA services cover everything from regression testing to performance analysis, ensuring reliable, high-quality outcomes meeting any quality standards."
                    imagePath="/icons/images/phone-and-flying-cubes-4.gif"
                />
            </div>
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