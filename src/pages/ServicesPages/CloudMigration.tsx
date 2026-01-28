import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import Capabilities from '../../components/Capabilities/Capabilities';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
const cloudMigrationProcessData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'Streamlined Cloud Adoption',
  items: [
    {
      icon: '01',
      title: 'Cloud Strategy & Planning',
      description:
        'Define a comprehensive cloud migration strategy covering data replication, storage, and archiving.'
    },
    {
      icon: '02',
      title: 'Application Transition',
      description:
        'Migrate applications to the cloud through re-architecting, re-platforming, or re-hosting.'
    },
    {
      icon: '03',
      title: 'Infrastructure Relocation',
      description:
        'Transfer servers, networks, and core infrastructure securely to cloud environments.'
    },
    {
      icon: '04',
      title: 'Platform Migration',
      description:
        'Execute platform migrations including data transfer, compatibility testing, and post-migration support.'
    },
    {
      icon: '05',
      title: 'Cloud Enhancement & Management',
      description:
        'Optimize cloud performance, security, and cost-efficiency through monitoring and automation.'
    }
  ]
};
const capabilitiesSlides: CapabilitySlide[] = [
    {
        id: 'iaas',
        number: '< 01 >',
        title: 'IaaS (Infrastructure as a Service)',
        image: capabilitiesImg,
        items: [
            {
                name: 'Provider Infrastructure Access',
                description:
                    'Access on-demand computing resources such as servers, storage, and networking via cloud providers.'
            },
            {
                name: 'Flexible Resource Control',
                description:
                    'Maintain control over infrastructure while eliminating the need for physical data centers.'
            },
            {
                name: 'Ideal for Hosted Applications',
                description:
                    'Best suited for businesses comfortable running applications in third-party cloud environments.'
            }
        ]
    },
    {
        id: 'paas',
        number: '< 02 >',
        title: 'PaaS (Platform as a Service)',
        image: platformImg,
        items: [
            {
                name: 'Rapid Application Development',
                description:
                    'Accelerate application development, deployment, and management through cloud platforms.'
            },
            {
                name: 'Built-in Development Tools',
                description:
                    'Leverage ready-to-use tools for building, testing, and scaling applications.'
            },
            {
                name: 'Reduced Infrastructure Overhead',
                description:
                    'Focus on development while the platform manages infrastructure and runtime.'
            }
        ]
    },
    {
        id: 'saas',
        number: '< 03 >',
        title: 'SaaS (Software as a Service)',
        image: capabilitiesImg,
        items: [
            {
                name: 'Cloud-Hosted Software',
                description:
                    'Access software applications through the web or APIs without installation.'
            },
            {
                name: 'Subscription-Based Model',
                description:
                    'Use scalable, pay-as-you-go software services with minimal maintenance effort.'
            },
            {
                name: 'Business-Ready Solutions',
                description:
                    'Ideal for organizations seeking quick adoption and ease of use.'
            }
        ]
    }
];

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




const CloudMigration: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Effortless Cloud Migration"
                description="LeapSofts: Your gateway to complete digital transformation is just a few clicks away."
            />
            <InfoGrid data={cloudMigrationProcessData} />
            <Capabilities
            title="Streamlined Cloud Adoption"
            description=''
            slides={capabilitiesSlides}
            defaultImage={capabilitiesImg}/>

              <Processes title="OUR CLOUD MIGRATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
            
        </>
    );
};

export default CloudMigration;
