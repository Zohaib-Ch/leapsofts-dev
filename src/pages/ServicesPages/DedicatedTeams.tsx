import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const ourServicesData: EmergingTechProps['data'] = {
  label: 'WEB OPTIMIZATION',
  titleAccent: 'Web',
  titleMain: ' Performance',
  description: 'Optimized web application services designed to boost performance, reduce costs, and accelerate business outcomes.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'End-to-End Coverage',
      description: 'Access skilled technical talent to fill critical roles and ensure smooth project execution.'
    },
    {
      icon: 'product' as const,
      title: 'Faster Market Launch',
      description: 'Accelerate product releases through strong QA planning, project management, and clear scope definition.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Cost Optimization',
      description: 'Reduce operational costs with flexible teams tailored to your project requirements.'
    },
    {
      icon: 'saas' as const,
      title: 'Business Focus Enablement',
      description: 'Free up internal teams to focus on core business activities while we manage execution.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Elite Technical Expertise',
      description: 'Work with top-tier engineering talent selected for deep technical excellence.'
    },
    {
      icon: 'enterprise' as const,
      title: 'End-to-End Coverage',
      description: 'Access skilled technical talent to fill critical roles and ensure smooth project execution.'
    },
    {
      icon: 'product' as const,
      title: 'Faster Market Launch',
      description: 'Accelerate product releases through strong QA planning, project management, and clear scope definition.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Cost Optimization',
      description: 'Reduce operational costs with flexible teams tailored to your project requirements.'
    },
    {
      icon: 'saas' as const,
      title: 'Business Focus Enablement',
      description: 'Free up internal teams to focus on core business activities while we manage execution.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Elite Technical Expertise',
      description: 'Work with top-tier engineering talent selected for deep technical excellence.'
    }
  ]
};
const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: TEAM ALIGNMENT & DISCOVERY",
        title: "Requirement Understanding & Team Formation",
        description: "We align business objectives with the right talent by understanding scope, goals, and technical needs.",
        features: [
            "Business & Technical Requirement Analysis",
            "Role Definition & Skill Mapping",
            "Dedicated Team Composition",
        ],
    },
    {
        id: 2,
        phase: "PHASE 2: PROJECT INITIATION",
        title: "Onboarding & Execution Planning",
        description: "Seamless onboarding of the dedicated team with clear workflows, tools, and delivery expectations.",
        features: [
            "Knowledge Transfer & Environment Setup",
            "Process & Communication Framework",
            "Milestone & Delivery Planning",
        ],
    },
    {
        id: 3,
        phase: "PHASE 3: DELIVERY & COLLABORATION",
        title: "Agile Execution & Team Coordination",
        description: "Our dedicated team works as an extension of yours, delivering consistently through agile practices.",
        features: [
            "Sprint-Based Development",
            "Continuous Collaboration & Reporting",
            "Quality Assurance & Performance Tracking",
        ],
    },
    {
        id: 4,
        phase: "PHASE 4: SCALING & CONTINUITY",
        title: "Optimization, Support & Team Scaling",
        description: "We ensure long-term success with ongoing optimization, scalability, and operational stability.",
        features: [
            "Team Scaling & Resource Optimization",
            "Ongoing Support & Maintenance",
            "Process Improvement & Long-Term Engagement",
        ],
    },
];

const phaseLabelsDefault = [
    "TEAM ALIGNMENT",
    "PROJECT INITIATION",
    "DELIVERY & COLLABORATION",
    "SCALING & CONTINUITY",
];
const whyChooseUsData = {
  subtitle: 'CLIENT-FOCUSED APPROACH',
  title: 'LeapSofts’s Client-Focused Strategy',
  items: [
    'Transparent operations with cloud-based code access and real-time visibility.',
    'Regular updates with consistent communication and progress reporting.',
    'Synchronized collaboration through daily or weekly scrum meetings.',
    'Ongoing product reviews via demos and sprint evaluations for continuous improvement.'
  ]
};




const DedicatedTeams: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Where Elite Tech Talent Thrives"
                description="Tech innovators adore our services and for good reason. We provide them with the finest tech talent in the industry."
            />
            <EmergingTech data={ourServicesData} />
            <Processes title="OUR DEDICATED TEAMS PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />

            <WhyChooseUs 
            subtitle={whyChooseUsData.subtitle}
            title={whyChooseUsData.title}
            items={whyChooseUsData.items}
            />
        </>
    );
};

export default DedicatedTeams;
