import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';


const data = {
    label: "DATA GOVERNANCE",
    title: "Our Services",
    description: "We provide comprehensive data governance solutions to ensure your data is a trusted, secure, and valuable asset.",
    items: [
        {
            icon: "01",
            title: "Data Quality Management",
            description: "Elevate the accuracy, completeness, and reliability of your data."
        },
        {
            icon: "02",
            title: "Data Compliance and Security",
            description: "Navigate complex regulatory landscapes with confidence."
        },
        {
            icon: "03",
            title: "Master Data Management",
            description: "Create a single, unified source of truth for your critical business data."
        },
        {
            icon: "04",
            title: "Data Lifecycle Management",
            description: "Optimize the flow and storage of data from creation to deletion."
        },
        {
            icon: "05",
            title: "Metadata Management",
            description: "Unlock the power of your data through comprehensive metadata strategies."
        }
    ]
}

const processesData: ProcessPhase[] = [
    {
        id: 1,
        phase: "Phase 1: Discovery & Strategy",
        title: "Discovery & Strategy",
        description: "Evaluating your current environment and defining clear objectives for your data governance journey.",
        features: ["Evaluate Data Environment", "Identify Quality Gaps", "Define Strategic Goals"]
    },
    {
        id: 2,
        phase: "Phase 2: Framework Development",
        title: "Framework Development",
        description: "Establishing the policies, standards, and roles necessary for effective data management.",
        features: ["Establish Policies & Standards", "Set Up Stewardship Roles", "Framework Architecture"]
    },
    {
        id: 3,
        phase: "Phase 3: Technology Integration",
        title: "Technology Integration",
        description: "Selecting and implementing the right tools to automate and enforce governance policies.",
        features: ["Select Compliance Tools", "Management System Setup", "Existing System Integration"]
    },
    {
        id: 4,
        phase: "Phase 4: Operations & Evolution",
        title: "Operations & Evolution",
        description: "Rolling out governance across the organization and continuously adapting to new needs.",
        features: ["Stakeholder Training", "Policy Rollout", "Continuous Monitoring"]
    }
]

const phaseLabels = processesData.map((process) => process.title);  

const DataGovernance: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Master Your Data Universe with LeapSofts"
                description="Transform your data into a powerful asset with LeapSofts Data Governance services. We ensure your data is managed, secure, and strategically leveraged to support your business goals."
            />
            <ServiceOverview
                label="Brief Overview"
                titleMain="Elevating Your"
                titleAccent="Data Potential"
                titleEnd=""
                description="In an era where data dictates business strategies, LeapSofts’s Data Governance services stand as a beacon of excellence. Our approach is designed to ensure your data is not only compliant with the latest regulations but also optimized for maximum utility and security. We empower organizations to harness the true value of their data, ensuring it’s accurately managed and effectively utilized across all business areas. With LeapSofts, you gain a partner committed to elevating your data’s potential, turning it into a catalyst for innovation and competitive advantage."
                imagePath="/icons/images/capabilities.webp"
            />
            <InfoGrid data={data} />
            <Processes
                title="Our Data Governance Framework"
                phaseLabels={phaseLabels}
                processPhases={processesData}
            />
        </>
    );
};

export default DataGovernance;

