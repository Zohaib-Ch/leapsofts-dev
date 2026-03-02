import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import Capabilities from '../../components/Capabilities/Capabilities';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import mobileAppImg from "../../assets/phones.webp";
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
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
const deliverMVPData = {
  label: "WHY CHOOSE LEAPSOFTS",
  title: "Why Choose Leapsofts for",
  accentText: "Cloud Migration Services",
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

const cloudMigrationProcessData: InfoGridProps['data'] = {
  label: 'Value for the client',
  title: 'Discover the Benefits of Migrating On-Premises Infrastructure to a Scalable Cloud Environment',
  items: [
    {
      icon: '01',
      title: 'Virtual Infrastructure',
      description:
        'Besides taking up valuable space, on-premises hosting infrastructure requires significant maintenance and limits developer capabilities. But cloud computing is a fully automated environment that allows businesses to outsource logistics and focus their resources on growth.'
    },
    {
      icon: '02',
      title: 'Disaster Recovery',
      description:
        'Cloud-based hosting is fully resilient and redundant, and storage backup, risk management, and disaster protocols are just table stakes. With content cached in data centers all over the world, your applications will stay online no matter what.'
    },
    {
      icon: '03',
      title: 'Scalability',
      description:
        'While traditional systems require businesses to pay for full servers whether they use their entire capacity or not, cloud-based services are designed to empower clients to grow and flex, adding or removing capacity as needed, week by week, day by day, or minute by minute.'
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
const title = "Cloud Migration Services";
const subtitle = "";

const introDescription = [
    { text: "Accelerate your digital transformation with secure, scalable, and cost-efficient cloud migration services.", bold: false },
]

const CloudMigration: React.FC = () => {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
       <ServiceOverview
      label='BRIEF OVERVIEW'
      titleMain='Ready for the Cloud?'
      titleAccent='Fast-forward'
      titleEnd='to our solution:'
      description='We simplify cloud migration to help businesses reduce costs, boost performance, and stay future-ready. From strategy to execution and ongoing support, we handle every step of the process.'
      imagePath={mobileAppImg}
      />
      <Capabilities
        title="Streamlined Cloud Adoption"
        description=''
        slides={capabilitiesSlides}
        defaultImage={capabilitiesImg} />

      <InfoGrid
        data={cloudMigrationProcessData}
      />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Software "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Types of Cloud Migration'
        description='Every business has different needs. Whether you are migrating Oracle, VMware, or PaaS applications, we tailor the migration tools and processes to fit your infrastructure.'
        items={defaultItems} />
      <DeliverMVP data={deliverMVPData} />

      <Processes title="OUR CLOUD MIGRATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />

    </>
  );
};

export default CloudMigration;
