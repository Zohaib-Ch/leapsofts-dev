import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import RelatedServices from '../../components/RelatedServices/RelatedServices'
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
const laptopImg = "https://cdn.sanity.io/images/egqy3ztp/production/40281c9c0b62835bf679122eb535feb8aef2fd24-1200x896.webp";
import { useServicePage } from '../../hooks/useServicePage';

const serviceOverviewData = {
  label: "RE-ENGINEERING",
  titleMain: "Modernize Your",
  titleAccent: "Legacy",
  titleEnd: "Systems",
  description: "At Leapsofts, we engineer systematic modernization strategies that safeguard your business logic while upgrading your operational capacity. By auditing existing code, refactoring relational database models, and migrating legacy services to containerized AWS, Azure, or GCP environments, we help organizations transition from costly, high-risk systems to secure, agile, and modular platforms that support modern growth.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'OUR SERVICES',
  titleAccent: 'Modernization',
  titleMain: 'Revamp Services',
  description: 'Comprehensive application re-engineering services to modernize your digital infrastructure and drive business growth.',
  items: [
    {
      icon: 'legacy' as const,
      title: 'Legacy Modernization & Code Refactoring',
      description: 'Upgrading aging codebases (e.g., .NET Framework, older Java, PHP) into modern languages (TypeScript, Node.js, C# .NET Core) for greater stability.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Automated DevOps & Infrastructure as Code',
      description: 'Establishing reliable CI/CD pipelines, containerizing workloads (Docker, Kubernetes), and defining infrastructure configurations via Terraform.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Zero-Downtime Cloud Migrations & Architecture',
      description: 'Migrating on-premise servers and legacy systems to highly scalable multi-region cloud infrastructures with zero operational downtime.'
    },
    {
      icon: 'product' as const,
      title: 'Algorithmic Tuning & SQL Query Optimization',
      description: 'Debugging performance bottlenecks, refactoring nested loops, and optimizing database queries and indexes to achieve rapid execution times.'
    },
    {
      icon: 'saas' as const,
      title: 'High-Fidelity Interface Re-Engineering',
      description: 'Redesigning archaic, complex screens into intuitive, modern, and accessible user flows that enhance operational productivity and user adoption.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Microservices Decoupling & API Integrations',
      description: 'Breaking down complex monoliths into modular microservices with structured GraphQL or RESTful API gateways for fluid interoperability.'
    },
  ]
}

const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Re-Engineer Now',
  items: [
    {
      icon: '01',
      title: 'Infrastructure & Operational Cost Reduction',
      description: 'Eliminate expensive maintenance overhead, license lock-in fees, and fragile server resources by migrating to serverless, pay-as-you-go cloud architectures.'
    },
    {
      icon: '02',
      title: 'Elastic Scalability & Resource Balancing',
      description: 'Prepare your applications to handle high transaction volumes and sudden user growth through containerized cloud clusters and edge caching.'
    },
    {
      icon: '03',
      title: 'Zero-Trust Compliance & Database Security',
      description: 'Upgrade legacy data security structures to support modern compliance controls including TLS data-at-rest encryption, OAuth2 verification, HIPAA, and SOC2 guidelines.'
    },
    {
      icon: '04',
      title: 'Optimized Interface Speeds & Fluid User Flows',
      description: 'Replace sluggish, multi-click processes with instant-action web and mobile user interfaces that accelerate daily tasks and reduce employee fatigue.'
    }
  ]
}

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new modern infrastructure", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out dependency parameters, evaluate legacy software codebases, and formulate a ", bold: false },
  { text: "highly efficient, zero-downtime re-engineering plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline user retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Cloud Migration',
    description: 'Transitioning legacy workloads to secure, multi-region AWS, Azure, or GCP instances with structured rolling updates.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Microservices',
    description: 'Deconstructing tight monolith dependencies into decoupled, containerized service units utilizing Docker and Kubernetes.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Database Refactoring',
    description: 'Upgrading legacy SQL schemas, migrating data structures, and optimizing distributed indexing systems for fast performance.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'API Modernization',
    description: 'Designing secure RESTful and GraphQL API bridges with structured schemas and API gateways to optimize third-party integrations.'
  }
];

const deliverMVPData = {
  label: "RE-ENGINEERING EXCELLENCE",
  title: "How Can We Modernize Your System in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite legacy modernization partner. By combining fully integrated CI/CD, pre-built modular code frameworks, and dedicated re-engineering pods, we refactor and deploy enterprise-ready modernized systems within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Extensive Codebase Scans.",
      description: "Performing extensive codebase scans, dependency maps, and architectural audits to identify performance anomalies before writing any code."
    },
    {
      title: "Zero Operational Downtime.",
      description: "Formulating systematic data synchronization pipelines and canary release models to ensure continuity during the transition."
    },
    {
      title: "Modern Framework Future-Proofing.",
      description: "Developing applications using modern framework structures (TypeScript, .NET Core) and modular databases that scale with long-term goals."
    },
    {
      title: "Senior Legacy Architects.",
      description: "Deploying cross-functional engineering pods led by senior developers who specialize in code refactoring and cloud orchestration."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: LEGACY SYSTEM AUDIT & DEPENDENCY PROFILING",
    title: "Codebase & Schema Auditing",
    description:
      "We evaluate historical codebases, map complex dependencies, and identify database bottleneck profiles before refactoring.",
    features: [
      {
        title: "Monolithic Technical Debt Discovery",
        description:
          "Parse legacy code elements (.NET Framework, older Java, PHP) to map active APIs and find memory leak boundaries."
      },
      {
        title: "Entity Schema Dependency Mapping",
        description:
          "Audit relational database layouts, indexing methods, and stored routines to map transactional paths."
      },
      {
        title: "Migration Stack Blueprinting",
        description:
          "Select the modern web stack (Zustand, React, Next.js, Node.js) and draft the migration route."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: DECOUPLING & ZERO-DOWNTIME SPECIFICATION",
    title: "Microservices & Sync Blueprinting",
    description:
      "Designing container models, transaction sync gates, and detailed rollback protocols.",
    features: [
      {
        title: "Monolith Decoupling Architectures",
        description:
          "Establish boundaries to isolate monolithic business logic into manageable, serverless microservice units."
      },
      {
        title: "Data Replication Synchronization",
        description:
          "Plan secure replication pipelines using Change Data Capture (CDC) to keep databases synchronized during rebuilds."
      },
      {
        title: "Fail-Safe Rollback Specifications",
        description:
          "Establish robust server rollback specifications and system validation checks to ensure zero business interruption."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: INCREMENTAL SYSTEM REBUILD & STAGING REPLICATION",
    title: "Agile Refactoring & Pipeline Audits",
    description:
      "Rewriting system elements modularly and executing transaction parity checks.",
    features: [
      {
        title: "Incremental Microservice Coding",
        description:
          "Refactor monolithic modules into high-concurrency Node.js or C# backend services in bi-weekly agile cycles."
      },
      {
        title: "CDC Data Synchronization",
        description:
          "Maintain active, secure real-time data syncs, feeding legacy entries into new normalized database schemas."
      },
      {
        title: "Logical Parity Verification",
        description:
          "Run automated E2E browser tests and integration tests to verify modernized scripts match the legacy logic."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CANARY DEPLOYMENT & SYSTEMS EVOLUTION",
    title: "Canary Rollouts & Cloud Scaling",
    description:
      "Gradual canary system rollouts, legacy servers shutdown, and cloud resource scaling.",
    features: [
      {
        title: "Canary Release Deployments",
        description:
          "Route active web sessions gradually (e.g. 5% -> 50% -> 100%) to verify performance under production loads."
      },
      {
        title: "Legacy Infrastructure Decommission",
        description:
          "Shut down costly on-premise servers and license overheads to reduce ongoing TCO."
      },
      {
        title: "Continuous Database Tuning",
        description:
          "Audit database memory limits, adjust edge cache setups, and scale cloud configurations dynamically."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "LEGACY AUDITING",
  "DECOUPLING SPECS",
  "AGILE REBUILD",
  "CANARY EVOLUTION",
];

const title = "Legacy Software & Architecture Re-Engineering";
const subtitle = "";

const introDescription = [
  { text: "We provide end-to-end ", bold: false },
  { text: "application re-engineering services & legacy modernization ", bold: true },
  { text: "to transform aging, monolithic software into high-performance, cloud-native platforms. As a trusted software re-engineering company, we refactor legacy database schemas, decouple core microservices, and eliminate technical debt to accelerate release velocity and cut operational costs.", bold: false }
]

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('app-reengineering');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Application Re-Engineering Services | Leapsofts",
    defaultDescription: "Modernize legacy systems without disruption. Leapsofts re-engineers outdated applications into scalable, cloud-native platforms. Book a free assessment.",
    defaultKeywords: "application re-engineering, legacy modernization, software modernization services, legacy system migration",
    canonicalUrl: "https://www.leapsofts.com/services/app-reengineering",
  });
}



const AppReengineering: React.FC = () => {
  const { data } = useServicePage('app-reengineering');

  const schemaData = buildServiceSchema({
    name: "Application Re-Engineering Services",
    description: "Modernize legacy systems without disruption.",
    canonicalUrl: "https://www.leapsofts.com/services/app-reengineering",
    faqs: data?.faqs,
  });


  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
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

  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || reEngineeringProcessData.label,
        titleAccent: data.infoGrid.titleAccent || reEngineeringProcessData.titleAccent,
        titleMain: data.infoGrid.titleMain || reEngineeringProcessData.titleMain,
        description: data.infoGrid.description || reEngineeringProcessData.description,
        items: data.infoGrid.items || reEngineeringProcessData.items
      }
    : reEngineeringProcessData;

  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || ourServicesData.label,
        titleAccent: data.emergingTech.titleAccent || ourServicesData.titleAccent,
        titleMain: data.emergingTech.titleMain || ourServicesData.titleMain,
        description: data.emergingTech.description || ourServicesData.description,
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : ourServicesData;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Map your "}
        titleAccent={data?.strategyCTA?.titleAccent || "modernization"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
      />
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'Core Revamp Skills'}
        description='Our teams bring deep expertise in translating legacy code to modern stacks.'
        items={data?.serviceFeatures?.items || serviceFeaturesData}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <EmergingTech data={activeEmergingTechData} />
      <Processes title={data?.processes?.title || "OUR SYSTEM RE-ENGINEERING PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      <FAQs
        title="App Re-Engineering & Legacy Modernization FAQ"
        subtitle="Everything you need to know about code refactoring, monolith decoupling, database migration, and zero-downtime cloud cutovers."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        services={[
          {
            title: "Custom Software Development",
            description: "Build scalable enterprise web and mobile platforms engineered for long-term growth.",
            link: "/services/custom-software-development"
          },
          {
            title: "Cloud Engineering & Infrastructure",
            description: "Architect cloud-native environments, VPC networks, and serverless infrastructures on AWS & Azure.",
            link: "/services/cloud-engineering"
          },
          {
            title: "DevOps & Continuous Integration",
            description: "Automate build pipelines, container orchestration, and infrastructure-as-code deployments.",
            link: "/services/devops"
          }
        ]}
      />
    </>
  )
}

export default AppReengineering