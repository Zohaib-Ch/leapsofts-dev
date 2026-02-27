import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
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
    id: 'azure-data-ai',
    number: '< 01 >',
    title: 'Azure Data & AI',
    image: capabilitiesImg,
    items: [
      {
        name: 'Azure Databricks',
        description:
          'Accelerate AI scaling and data value realization with efficient cloud modernization.'
      },
      {
        name: 'Azure Synapse Optimization',
        description:
          'Unify data lakes and warehouses to deliver faster, reliable analytics across enterprises.'
      },
      {
        name: 'AI & Machine Learning on Azure',
        description:
          'Enable advanced analytics, scalable ML experiments, and efficient model deployment.'
      },
      {
        name: 'Azure Cognitive Services',
        description:
          'Enhance apps with vision, language, and intelligent decision-making capabilities.'
      }
    ]
  },
  {
    id: 'azure-platform-security',
    number: '< 02 >',
    title: 'Azure Platform & Security',
    image: platformImg,
    items: [
      {
        name: 'Azure SQL Database Solutions',
        description:
          'Build high-performance apps using Azure SQL with integrated analytics and AI.'
      },
      {
        name: 'Azure Stack Hybrid Cloud',
        description:
          'Deliver seamless hybrid cloud experiences across on-prem and cloud environments.'
      },
      {
        name: 'Azure Cognitive Search',
        description:
          'Transform data into actionable insights using AI-powered semantic search.'
      },
      {
        name: 'Robust Azure Security',
        description:
          'Protect data and infrastructure with advanced threat detection across hybrid environments.'
      }
    ]
  }
];

const serviceOverviewData = {
  label: "AZURE CLOUD",
  titleMain: "Accelerate Your",
  titleAccent: "Cloud Journey",
  titleEnd: "with Azure",
  description: "Leapsofts empowers businesses with Microsoft Azure to build scalable, hybrid cloud solutions. From data analytics to AI-driven applications, our Azure experts provide the strategic guidance and technical implementation needed to optimize your cloud environment and drive innovation.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'AZURE ECOSYSTEM',
  titleAccent: 'Microsoft Innovation',
  titleMain: 'Azure Services',
  description: 'We leverage the full breadth of Azure services to deliver high-performance, secure, and cost-effective cloud solutions.',
  items: [
    { icon: 'enterprise' as const, title: 'Azure Virtual Machines', description: 'Scalable compute capacity to run your applications in the cloud.' },
    { icon: 'saas' as const, title: 'Azure App Service', description: 'Quickly build, deploy, and scale web apps and APIs on your terms.' },
    { icon: 'hipaa' as const, title: 'Azure Cosmos DB', description: 'Globally distributed, multi-model database service for any scale.' },
    { icon: 'ecommerce' as const, title: 'Azure Kubernetes Service', description: 'Deploy and manage containerized applications with ease.' },
    { icon: 'mobile' as const, title: 'Azure Active Directory', description: 'Enterprise-grade identity and access management for secure cloud apps.' },
    { icon: 'legacy' as const, title: 'Azure Monitor', description: 'Full observability into your applications, infrastructure, and network.' },
  ]
};

const infoGridData: InfoGridProps['data'] = {
  label: 'AZURE BENEFITS',
  title: 'Why Choose Microsoft Azure',
  items: [
    {
      icon: '01',
      title: 'Hybrid Capability',
      description: 'Seamlessly integrate your on-premises data and apps with the Azure cloud environment.'
    },
    {
      icon: '02',
      title: 'Trust & Security',
      description: 'Benefit from Microsoft’s industry-leading security and compliance offerings.'
    },
    {
      icon: '03',
      title: 'Developer Productivity',
      description: 'Accelerate development with integrated tools and services designed for rapid delivery.'
    },
    {
      icon: '04',
      title: 'AI & Data Insights',
      description: 'Unlock the value of your data with advanced analytics and AI services on Azure.'
    }
  ]
};

const streamlineDescription = [
  { text: "Empower your ", bold: false },
  { text: "digital transformation ", bold: true },
  { text: "with Microsoft Azure. Leapsofts offers a ", bold: false },
  { text: "complimentary Azure strategy session ", bold: true },
  { text: "to help you design a ", bold: false },
  { text: "scalable cloud architecture ", bold: true },
  { text: "that grows with your business and ensures maximum reliability.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Cloud Modernization',
    description: 'Upgrade your legacy systems to Azure using modern cloud-native architectures.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Azure Data Platform',
    description: 'Building robust data lakes and warehouses with Azure Synapse and Databricks.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Identity & Security',
    description: 'Implementing secure access controls and threat protection with Azure Sentinel.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Cloud Governance',
    description: 'Establishing clear policies and cost management practices for your Azure environment.'
  }
];

const deliverMVPData = {
  label: "AZURE EXCELLENCE",
  title: "Partnering for",
  accentText: "Enterprise Success",
  description: "Leapsofts is committed to delivering top-tier Azure solutions that meet the demands of modern enterprises. We focus on scalability, security, and integration to ensure your cloud strategy is effective.",
  items: [
    {
      title: "Microsoft Cloud Expertise.",
      description: "Deep knowledge of Microsoft technologies to optimize your Azure setup."
    },
    {
      title: "Hybrid Strategy.",
      description: "Expertise in designing and managing complex hybrid cloud environments."
    },
    {
      title: "Security & Compliance.",
      description: "Ensuring your Azure workloads meet strict regulatory and security standards."
    },
    {
      title: "End-to-End Delivery.",
      description: "From strategy to implementation and management, we handle the entire lifecycle."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: DISCOVERY",
    title: "Project Scope & Assessment",
    description: "We evaluate your current environment and business goals for Azure adoption.",
    features: ["Infrastructure Audits", "Application Readiness Scoring", "Business Objective Alignment"],
  },
  {
    id: 2,
    phase: "PHASE 2: PLANNING",
    title: "Strategy & Architecture",
    description: "Defining the right Azure architecture and migration strategy for your needs.",
    features: ["Azure Tenant Setup", "Network Topologies Design", "Security & Governance Implementation"],
  },
  {
    id: 3,
    phase: "PHASE 3: EXECUTION",
    title: "Migration & Modernization",
    description: "Moving workloads to Azure and modernizing applications for the cloud.",
    features: ["Data & App Migration", "Cloud-Native Re-platforming", "DevOps Pipeline Integration"],
  },
  {
    id: 4,
    phase: "PHASE 4: MANAGEMENT",
    title: "Monitoring & Support",
    description: "Providing ongoing management and support to ensure Azure environment health.",
    features: ["Cost & Resource Monitoring", "Security Response", "Performance Optimization Reviews"],
  },
];

const phaseLabelsDefault = ["DISCOVERY", "PLANNING", "EXECUTION", "MANAGEMENT"];

const Azure: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Focus on What’s Essential with Your Cloud Strategy"
        description="Harness the potential of Microsoft Azure to drive business growth."
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
        slides={capabilitiesSlides}
        title="Our Azure Capabilities"
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={infoGridData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Azure "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized Azure services to support your cloud ecosystem.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR AZURE CLOUD PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default Azure;
