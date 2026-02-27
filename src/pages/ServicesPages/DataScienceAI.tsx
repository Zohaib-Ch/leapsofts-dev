import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
const ourServicesData: EmergingTechProps['data'] = {
  label: 'AI SERVICES',
  titleAccent: 'AI',
  titleMain: ' Pathway',
  description:
    'End-to-end AI services designed to unlock insights, improve decision-making, and accelerate intelligent transformation.',
  items: [
    {
      icon: 'enterprise',
      title: 'Analytics & Strategic Insight',
      description:
        'Scale your analytics with a data-centric strategy for tangible business impact.'
    },
    {
      icon: 'product',
      title: 'Enhanced Data Exploration',
      description:
        'Broaden customer understanding using additional data sources and predictive insights.'
    },
    {
      icon: 'enterprise',
      title: 'Strategic Data Handling',
      description:
        'Ensure governance, profitability, and regulatory compliance beyond data integration.'
    },
    {
      icon: 'saas',
      title: 'Empowering Data Utilization',
      description:
        'Equip teams with intuitive tools to harness data effectively and adopt AI smoothly.'
    },
    {
      icon: 'product',
      title: 'Ready-Made & Custom AI Solutions',
      description:
        'Leverage ready-to-deploy AI solutions or opt for bespoke services tailored to your needs.'
    },
    {
      icon: 'enterprise',
      title: 'Analytics & Strategic Insight',
      description:
        'Scale your analytics with a data-centric strategy for tangible business impact.'
    },
    {
      icon: 'product',
      title: 'Enhanced Data Exploration',
      description:
        'Broaden customer understanding using additional data sources and predictive insights.'
    },
    {
      icon: 'enterprise',
      title: 'Strategic Data Handling',
      description:
        'Ensure governance, profitability, and regulatory compliance beyond data integration.'
    },
    {
      icon: 'saas',
      title: 'Empowering Data Utilization',
      description:
        'Equip teams with intuitive tools to harness data effectively and adopt AI smoothly.'
    },
    {
      icon: 'product',
      title: 'Ready-Made & Custom AI Solutions',
      description:
        'Leverage ready-to-deploy AI solutions or opt for bespoke services tailored to your needs.'
    }
  ]
};
const processData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'AI Implementation Pathway',
  items: [
    {
      icon: '01',
      title: 'Cloud & Edge-First Strategy',
      description:
        'Adopt a cloud-native, edge-centric methodology for sustained efficiency and immediate responsiveness.'
    },
    {
      icon: '02',
      title: 'ML Model Creation',
      description:
        'Craft powerful machine learning models for optimal outcomes and improved functionality.'
    },
    {
      icon: '03',
      title: 'AI-Driven Big Data',
      description:
        'Conceptualize, build, and implement big data infrastructures enhanced by AI.'
    },
    {
      icon: '04',
      title: 'Accelerating AI Adoption',
      description:
        'Identify business use cases and opportunities, and define a strategic AI adoption roadmap.'
    },
    {
      icon: '05',
      title: 'Seamless AI Integrations',
      description:
        'Enable system connectivity through integrations with AI-ready'
    }
  ]
}

const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Retain',
        description: 'Keeping select applications on-premises due to dependencies or compliance.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Retire',
        description: "Decommissioning outdated or unused systems."
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Relocate',
        description: "Moving infrastructure without major changes to cloud platforms."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Rehost (Lift and Shift)',
        description: "Quickest way to move VMs or workloads to the cloud."
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Replatform',
        description: "Making minor optimizations without rewriting code."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Refactoring',
        description: "Re-architecting for full cloud-native functionality."
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Repurchase',
        description: "Transitioning to a SaaS solution."
    },
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
const deliverMVPData = {
    label: "WHY CHOOSE LEAPSOFTS",
  title: "Why Choose Leapsofts for",
  accentText: "Data Science & AI Services",
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


const DataScienceAI: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Harness Data Accessibility"
                description="LeapSofts constructs contemporary, secure, and scalable web apps to streamline your business operations."
            />
            <ServiceOverview
                titleMain="Maximize"
                titleAccent='Operational Agility'
                titleEnd='with Data Science & AI'
                description="Implementing Data Science & AI can be intricate, necessitating strategic planning and precision. It’s pivotal for refining your development and deployment cycles, thereby reducing mistakes, boosting efficiency, and elevating client contentment. To excel in a competitive landscape, enhance operational efficacy, and raise deployment standards, consider our expert Data Science & AI services. Our seasoned professionals are adept at guiding numerous firms through successful Data Science & AI adoptions, equipped to automate and regulate your infrastructure deployment processes."
                imagePath="/icons/images/cloud.webp"
            />
            <EmergingTech data = {ourServicesData} />
            <InfoGrid data = {processData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Software "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
      title='Types of'
      description='Every business has different needs. Whether you are migrating Oracle, VMware, or PaaS applications, we tailor the migration tools and processes to fit your infrastructure.'
       items={defaultItems} />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR CLOUD MIGRATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};

export default DataScienceAI;
