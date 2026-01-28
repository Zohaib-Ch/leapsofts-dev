import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';

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
            <EmergingTech data={servicesData} />
            <InfoGrid data={strategyData} />
        </>
    );
};

export default DevOps;

