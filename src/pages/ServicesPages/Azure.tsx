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
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import laptopImg from "../../assets/about_laptop_3d.png";
import { useServicePage } from '../../hooks/useServicePage';

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'azure-data-ai',
    number: '< 01 >',
    title: 'Azure Data & Enterprise Analytics',
    image: capabilitiesImg,
    items: [
      {
        name: 'Azure Databricks Spark Engine',
        description: 'Deploying managed Apache Spark environments and automated ETL pipelines to process large-scale data streams.'
      },
      {
        name: 'Azure Synapse Integrations',
        description: 'Orchestrating enterprise data warehouses and unified analytics layers to process complex operational intelligence queries.'
      },
      {
        name: 'Azure Cosmos DB Global Scaling',
        description: 'Configuring multi-model, globally distributed NoSQL databases with guaranteed single-digit millisecond latency speeds.'
      },
      {
        name: 'Azure OpenAI & ML Services',
        description: 'Deploying custom machine learning networks and natural language engines using managed Azure OpenAI models.'
      }
    ]
  },
  {
    id: 'azure-platform-security',
    number: '< 02 >',
    title: 'Azure Identity & Security Hardening',
    image: platformImg,
    items: [
      {
        name: 'Microsoft Entra ID Directories',
        description: 'Enforcing secure enterprise identity control, single sign-on access, and multi-factor conditional rules.'
      },
      {
        name: 'Microsoft Sentinel SIEM Threat Hunting',
        description: 'Deploying cloud-native Security Information and Event Management (SIEM) systems to detect and intercept threat actors.'
      },
      {
        name: 'Azure Key Vault Key Protection',
        description: 'Managing central application secret lockers, automated SSH key rotations, and KMS envelope encryption.'
      },
      {
        name: 'Azure Policy Compliance Shields',
        description: 'Enforcing corporate governance rules, automated resource limits, and real-time environment isolation metrics.'
      }
    ]
  }
];

const serviceOverviewData = {
  label: "AZURE CLOUD SYSTEMS",
  titleMain: "Orchestrating Scalable",
  titleAccent: "Hybrid Azure",
  titleEnd: "Environments",
  description: "At Leapsofts, we help modern enterprises maximize their infrastructure efficiency, automate software releases, and optimize operating costs on Microsoft Azure. Our Microsoft-certified engineers develop modular Azure Bicep blueprints, deploy containerized microservices via Azure Kubernetes Service (AKS), and design robust data repositories that satisfy strict SOC2, HIPAA, and GDPR compliance rules.",
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
    { icon: 'ecommerce' as const, title: 'Azure Kubernetes Service (AKS)', description: 'Deploy and manage containerized applications with ease.' },
    { icon: 'mobile' as const, title: 'Microsoft Entra ID Access', description: 'Enterprise-grade identity and access management for secure cloud apps.' },
    { icon: 'legacy' as const, title: 'Azure Monitor Logs', description: 'Full observability into your applications, infrastructure, and network.' },
  ]
};

const infoGridData: InfoGridProps['data'] = {
  label: 'AZURE VALUE ADVANTAGE',
  title: 'Why Build Your Digital Workloads on Azure',
  items: [
    {
      icon: '01',
      title: 'Seamless Hybrid Synergy',
      description: 'Connect your on-premises datacenters directly to the cloud using Azure ExpressRoute and Azure Arc systems.'
    },
    {
      icon: '02',
      title: 'Enterprise-Grade Data Shielding',
      description: 'Benefit from Microsoft’s multi-billion dollar security investments and comprehensive industry compliance stamps.'
    },
    {
      icon: '03',
      title: 'Rapid Developer Pipelines',
      description: 'Accelerate software release schedules utilizing fully integrated Azure DevOps runners and automated pipelines.'
    },
    {
      icon: '04',
      title: 'Advanced Analytics Clusters',
      description: 'Analyze petabytes of unstructured operational data using integrated synapse pipelines and data lake storage clusters.'
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
  title: "Our Commitment to Deliver Your Azure Infrastructure in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite Microsoft Azure consulting and cloud optimization partner. By combining fully integrated automated tooling, certified Azure solutions architects, and dedicated DevOps engineers, we build, secure, and deliver enterprise-ready Azure release infrastructures within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Azure Synapse Warehouses.",
      description: "Aggregating enterprise big data streams into unified Synapse and Cosmos DB structures for predictive analysis."
    },
    {
      title: "Bicep IaC automation.",
      description: "Writing modular Azure Bicep code constructs to build secure, repeatable cloud virtual network systems."
    },
    {
      title: "Entra ID Access Rules.",
      description: "Enforcing conditional security boundaries, multi-factor triggers, and Sentinel SIEM security analytics."
    },
    {
      title: "Databricks Engine Runs.",
      description: "Deploying Spark computing nodes to execute real-time business telemetry scans at lightning-fast speeds."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & ARCHITECTURE ASSESSMENT",
    title: "Well-Architected Reviews & Discoveries",
    description: "We evaluate your current workloads against the six pillars of the Microsoft Azure Well-Architected Framework.",
    features: [
      {
        title: "Azure Well-Architected Audits",
        description: "Analyze security, performance efficiency, cost optimizations, and operational excellence gaps."
      },
      {
        title: "Workload Discovery Scans",
        description: "Catalog on-premises databases, computing systems dependencies, and active ports."
      },
      {
        title: "Target Cloud Blueprinting",
        description: "Draft structural virtual network layouts, private subnets mappings, NAT gateways, and cost projections."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & SECURE VPC DESIGN",
    title: "Azure Bicep Provisions & IAM Hardening",
    description: "Writing reusable Bicep or Terraform constructs and configuring secure virtual routing rules.",
    features: [
      {
        title: "Modular Azure Bicep Codebase",
        description: "Author type-safe Bicep modules to provision environments with absolute consistency."
      },
      {
        title: "VNet Networking Architecture",
        description: "Configure secure public and private subnets, transit tunnels, ExpressRoute endpoints, and routing."
      },
      {
        title: "Entra ID Identity Schemes",
        description: "Harden directory permissions, manage Key Vault secret storages, and set up cloud access logging."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY WORKLOAD DEPLOYMENT",
    title: "Database Syncing & Container Runs",
    description: "Syncing relational data databases with zero downtime using automated replication waves.",
    features: [
      {
        title: "Zero-Loss Database Migrations",
        description: "Migrate active transactions securely using Azure DMS with zero application interruptions."
      },
      {
        title: "AKS Kubernetes Container Deployments",
        description: "Orchestrate application pods on Azure Kubernetes Service (AKS) clusters with private subnets."
      },
      {
        title: "Transaction Stress Sprints",
        description: "Run automated k6 performance checks to verify Azure AKS cluster responsiveness under high traffic."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & COST OPTIMIZATION",
    title: "Azure Monitor Telemetry & Cost Scripts",
    description: "Deploying central logging structures, optimizing infrastructure costs, and configuring GitOps releases.",
    features: [
      {
        title: "Azure Monitor Metrics Observability",
        description: "Deploy real-time cloud dashboard telemetries, trace response latencies, and configure email alerts."
      },
      {
        title: "Instance Schedule Rightsizing",
        description: "Implement automated script schedulers to shut down staging pools and activate Spot instances."
      },
      {
        title: "Continuous DevOps Sweeps",
        description: "Conduct regular server OS patching, security boundary scans, and database maintenance checks."
      }
    ]
  }
];

const phaseLabelsDefault = [
    "READINESS ASSESSMENT",
    "BICEP & VNET DESIGN",
    "WORKLOAD DEPLOYMENT",
    "TELEMETRY & GOVERNANCE",
];

const title = "Azure Consulting Services, Hybrid Cloud Architecture & Enterprise Modernization";
const subtitle = "";

const introDescription = [
  { text: "As a premier ", bold: false },
  { text: "Azure development company & Microsoft Azure cloud consulting firm", bold: true },
  { text: ", we deliver hybrid cloud architectures, Azure Bicep IaC automation, and managed AKS Kubernetes clusters. We specialize in zero-downtime database migrations, Entra ID identity hardening, and enterprise cloud optimization.", bold: false }
];

export function meta() {
  const title = "Microsoft Azure Services & Development | Leapsofts";
  const description = "Enterprise Microsoft Azure cloud development, migration & integration. Leapsofts delivers certified Azure solutions for complex business needs. Get a quote.";
  const keywords = "Azure development company, Microsoft Azure services, Azure cloud consulting, Azure migration services";
  const canonicalUrl = "https://www.leapsofts.com/services/azure";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Microsoft Azure Services & Development",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Microsoft Azure Cloud Consulting & Development",
      "description": "Enterprise Microsoft Azure cloud development, migration & integration."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.leapsofts.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Azure",
          "item": "https://www.leapsofts.com/services/azure"
        }
      ]
    }
  ]
};

const Azure: React.FC = () => {
  const { data } = useServicePage('azure');


  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || serviceOverviewData.label,
        titleMain: data.serviceOverview.titleMain || serviceOverviewData.titleMain,
        titleAccent: data.serviceOverview.titleAccent || serviceOverviewData.titleAccent,
        titleEnd: data.serviceOverview.titleEnd || serviceOverviewData.titleEnd,
        description: data.serviceOverview.description || serviceOverviewData.description,
        imagePath: data.serviceOverview.imageUrl || serviceOverviewData.imagePath
      }
    : serviceOverviewData;

  const activeCapabilitiesSlides = (data?.capabilitiesSection?.slides && data.capabilitiesSection.slides.length > 0)
    ? data.capabilitiesSection.slides.map(slide => ({
        id: slide.id || 'slide',
        number: slide.number || '< 01 >',
        title: slide.title || '',
        image: slide.imageUrl || capabilitiesImg,
        items: slide.items || []
      }))
    : capabilitiesSlides;

  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || infoGridData.label,
        titleAccent: data.infoGrid.titleAccent || infoGridData.titleAccent,
        titleMain: data.infoGrid.titleMain || infoGridData.titleMain,
        description: data.infoGrid.description || infoGridData.description,
        items: data.infoGrid.items || infoGridData.items
      }
    : infoGridData;

  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || emergingTechData.label,
        titleAccent: data.emergingTech.titleAccent || emergingTechData.titleAccent,
        titleMain: data.emergingTech.titleMain || emergingTechData.titleMain,
        description: data.emergingTech.description || emergingTechData.description,
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : emergingTechData;

  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || deliverMVPData.label,
        title: data.deliverMVP.title || deliverMVPData.title,
        accentText: data.deliverMVP.accentText || deliverMVPData.accentText,
        description: data.deliverMVP.description || deliverMVPData.description,
        items: data.deliverMVP.items || deliverMVPData.items
      }
    : deliverMVPData;

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      <ServiceOverview
        label={activeOverviewData.label}
        titleMain={activeOverviewData.titleMain}
        titleAccent={activeOverviewData.titleAccent}
        titleEnd={activeOverviewData.titleEnd}
        description={activeOverviewData.description}
        imagePath={activeOverviewData.imagePath}
      />
      <Capabilities
        slides={activeCapabilitiesSlides}
        title={data?.capabilitiesSection?.title || "Our Azure Capabilities"}
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Map your "}
        titleAccent={data?.strategyCTA?.titleAccent || "Azure architecture"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
      />
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'Expert Services'}
        description='We deliver specialized Azure services to support your cloud ecosystem.'
        items={data?.serviceFeatures?.items || serviceFeaturesData}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <EmergingTech data={activeEmergingTechData} />
      <Processes title={data?.processes?.title || "OUR AZURE CLOUD PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      <RelatedServices
        services={[
          {
            title: "AWS Development & Consulting",
            description: "Explore Amazon Web Services solutions and multi-cloud infrastructure.",
            link: "/services/aws"
          },
          {
            title: "Cloud Migration Services",
            description: "Migrate legacy on-premises databases and workloads to Microsoft Azure.",
            link: "/services/cloud-migration"
          },
          {
            title: "DevOps Services & Continuous Delivery",
            description: "Build automated CI/CD deployment tracks using Azure DevOps and GitHub Actions.",
            link: "/services/devops"
          }
        ]}
      />
    </>
  );
};

export default Azure;
