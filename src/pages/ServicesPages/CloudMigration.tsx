import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
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
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';

const defaultItems: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Retain',
    description: 'Keeping select applications on-premises due to complex dependencies or strict compliance rules.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Retire',
    description: "Decommissioning outdated or redundant systems to optimize operational budgets."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Relocate',
    description: "Moving virtualized container workloads without major changes directly to managed cloud instances."
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Rehost (Lift and Shift)',
    description: "Quickest migration route to shift server images and VMs directly to cloud computing compute nodes."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Replatform',
    description: "Executing minor optimizations (like upgrading database engines) without rewriting primary application code."
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Refactoring',
    description: "Re-architecting software modules for full, microservices-based cloud-native functionality."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Repurchase',
    description: "Transitioning custom internal legacy modules directly to enterprise SaaS cloud tools."
  },
];

const deliverMVPData = {
  label: "CLOUD EXCELLENCE",
  title: "Our Commitment to Deliver Your Cloud Migration in",
  accentText: "3-5 months?",
  description: "Leapsofts is a premier enterprise cloud migration partner. By combining fully integrated automated tooling, certified cloud architects, and dedicated DevOps engineers, we relocate, optimize, and hand over complex enterprise workloads within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "AWS MGN Relocations.",
      description: "Executing low-risk physical server migrations directly into AWS EC2 with near-zero software changes."
    },
    {
      title: "DMS sync channels.",
      description: "Running zero-downtime AWS Database Migration Service (DMS) tasks to replicate active production databases."
    },
    {
      title: "Offline Snowball Transfers.",
      description: "Moving petabyte-scale local datasets into S3 buckets securely using offline Snowball Edge devices."
    },
    {
      title: "IPsec VPN secure tunnels.",
      description: "Configuring high-bandwidth site-to-site IPsec VPN networks and transit gateway routers for hybrid setups."
    }
  ]
};

const cloudMigrationProcessData: InfoGridProps['data'] = {
  label: 'MIGRATION VALUE',
  title: 'Discover the Benefits of Migrating On-Premises Infrastructure to a Scalable Cloud Environment',
  items: [
    {
      icon: '01',
      title: 'Zero Physical Datacenter Footprint',
      description: 'Eliminate physical server space, power supplies, cooling costs, and expensive on-site system maintenance fees.'
    },
    {
      icon: '02',
      title: 'Instant Disaster Redundancy',
      description: 'Deploy automated server images backup and multi-region recovery protocols to keep systems operational.'
    },
    {
      icon: '03',
      title: 'Flexible Operational Expenses',
      description: 'Transition capital asset expenses into flexible, pay-as-you-go cloud service rates, reducing licensing overheads.'
    }
  ]
};

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'rehost',
    number: '< 01 >',
    title: 'Workload Rehosting & Replatforming',
    image: capabilitiesImg,
    items: [
      {
        name: 'Lift-and-Shift Migrations',
        description: 'Rehosting physical servers and VMs directly to cloud compute instances using AWS Application Migration Service (MGN).'
      },
      {
        name: 'Operating System Upgrades',
        description: 'Replatforming database and web servers to modern operating systems and managed runtime systems to improve performance.'
      },
      {
        name: 'Cloud-Ready Refactoring',
        description: 'Upgrading legacy applications to utilize cloud-native managed databases and scalable file systems.'
      }
    ]
  },
  {
    id: 'relocation',
    number: '< 02 >',
    title: 'Zero-Downtime Data Relocation',
    image: platformImg,
    items: [
      {
        name: 'Database Migration Services',
        description: 'Replicating critical relational schemas with zero-data-loss pipelines using AWS DMS or Azure Database Migration Service.'
      },
      {
        name: 'Large-Scale Offline Transfers',
        description: 'Moving petabyte-scale datastores securely using offline transfer systems like AWS Snowball Edge.'
      },
      {
        name: 'Real-Time Data Syncing',
        description: 'Configuring continuous transaction logs capture (CDC) to keep cloud datastores perfectly synced with active local nodes.'
      }
    ]
  },
  {
    id: 'hybrid',
    number: '< 03 >',
    title: 'Hybrid Cloud Integration',
    image: capabilitiesImg,
    items: [
      {
        name: 'Dedicated Express Interconnects',
        description: 'Establishing secure, high-bandwidth connections using AWS Direct Connect or Azure ExpressRoute.'
      },
      {
        name: 'High-Performance VPN Tunnels',
        description: 'Deploying site-to-site IPsec VPN tunnels with redundant gateways to ensure absolute hybrid network security.'
      },
      {
        name: 'Active Directory Federation',
        description: 'Synchronizing on-premises user credentials and permissions with cloud directories using Entra ID.'
      }
    ]
  }
];

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & PORTFOLIO ASSESSMENT",
    title: "Resource Audits & Workload Discovery",
    description: "We scan existing server nodes, profile security rules, and catalog database volumes.",
    features: [
      {
        title: "On-Premises Inventory Scans",
        description: "Scan active ports, operating systems configurations, and directory relationships."
      },
      {
        title: "SLA Capacity Assessments",
        description: "Analyze peak traffic loads, read/write database ratios, and latency thresholds."
      },
      {
        title: "Target Cloud Blueprints",
        description: "Draft initial topology diagrams, database mappings, and multi-stage migration tracks."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & SECURE VPC DESIGN",
    title: "Infrastructure as Code & Security Hardening",
    description: "Writing robust Terraform structures, designing transit pipelines, and configuring IAM boundaries.",
    features: [
      {
        title: "Modular Terraform Codebase",
        description: "Author repeatable IaC scripts to provision VPCs, routing configurations, and computing clusters."
      },
      {
        title: "VPC Networking Layouts",
        description: "Design secure public and private subnets, transit connections, and internet access gateways."
      },
      {
        title: "Zero-Trust IAM Directories",
        description: "Enforce granular role boundaries, encrypt database keys via KMS, and activate multi-factor checks."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY WAVE MIGRATION & TESTING",
    title: "Database Relocations & Container Deployments",
    description: "Executing live wave migrations, containerizing app nodes, and executing load tests.",
    features: [
      {
        title: "Zero-Downtime Data Relocations",
        description: "Migrate active databases using replication services to prevent transactional interruptions."
      },
      {
        title: "Kubernetes Pod Containerization",
        description: "Package software microservices into Docker containers and deploy pods on AWS EKS or GKE clusters."
      },
      {
        title: "Stress Telemetry Sweeps",
        description: "Execute automated performance tests via k6 under peak load configurations to verify target SLA speeds."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OPTIMIZATION & TELEMETRY",
    title: "Prometheus Monitoring & Rolling Upgrades",
    description: "Deploying central logging structures, optimizing infrastructure costs, and configuring GitOps releases.",
    features: [
      {
        title: "Prometheus & Grafana Telemetry",
        description: "Orchestrate real-time metrics dashboards, configure query speeds telemetry, and enable automated alerting channels."
      },
      {
        title: "Automated cost-optimization",
        description: "Deploy automated instance scaling guidelines, rightsizing recommendations, and spot-instances pools."
      },
      {
        title: "GitOps Continuous Upgrades",
        description: "Configure GitOps delivery loops (ArgoCD) to execute zero-downtime rolling upgrades across microservices."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "DISCOVERY & ASSESSMENT",
  "STRATEGY & ARCHITECTURE",
  "MIGRATION EXECUTION",
  "OPTIMIZATION & GOVERNANCE",
];

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new multi-region cloud cluster", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current infrastructure setups, map out potential network latencies, evaluate compliance directories, and formulate a ", bold: false },
  { text: "highly efficient, customized cloud migration plan ", bold: true },
  { text: "built to unlock massive scale and streamline infrastructure costs.", bold: false }
];

const title = "Enterprise Cloud Migration Services & Legacy Workload Relocation";
const subtitle = "";

const introDescription = [
  { text: "We deliver full-cycle ", bold: false },
  { text: "cloud migration services ", bold: true },
  { text: "and ", bold: false },
  { text: "legacy system cloud relocation ", bold: true },
  { text: "with zero downtime. As an experienced cloud migration company, we transition legacy on-premises servers, Oracle databases, and VMware environments to AWS, Azure, or GCP safely and efficiently.", bold: false }
];

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('cloud-migration');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Cloud Migration Services | Leapsofts",
    defaultDescription: "Seamless cloud migration services with zero downtime. Leapsofts migrates legacy infrastructure to AWS, Azure or GCP securely and efficiently. Start now.",
    defaultKeywords: "cloud migration services, cloud migration company, AWS migration, Azure migration, legacy to cloud migration",
    canonicalUrl: "https://www.leapsofts.com/services/cloud-migration",
  });
}



const CloudMigration: React.FC = () => {
  const { data } = useServicePage('cloud-migration');

  const schemaData = buildServiceSchema({
    name: "Cloud Migration Services",
    description: "Seamless cloud migration services with zero downtime.",
    canonicalUrl: "https://www.leapsofts.com/services/cloud-migration",
    faqs: data?.faqs,
  });

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof cloudMigrationProcessData !== 'undefined' ? cloudMigrationProcessData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof cloudMigrationProcessData !== 'undefined' ? cloudMigrationProcessData.title : ''),
        description: data.infoGrid.description || (typeof cloudMigrationProcessData !== 'undefined' ? cloudMigrationProcessData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof cloudMigrationProcessData !== 'undefined' ? cloudMigrationProcessData : { items: [] });

  
  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.label : ''),
        title: data.deliverMVP.title || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.title : ''),
        accentText: data.deliverMVP.accentText || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.accentText : ''),
        description: data.deliverMVP.description || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.description : ''),
        items: data.deliverMVP.items || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.items : [])
      }
    : (typeof deliverMVPData !== 'undefined' ? deliverMVPData : { label: '', title: '', accentText: '', description: '', items: [] });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || "CLOUD MIGRATION",
        titleMain: data.serviceOverview.titleMain || "Zero-Downtime ",
        titleAccent: data.serviceOverview.titleAccent || "Cloud Migration ",
        titleEnd: data.serviceOverview.titleEnd || "& Enterprise Relocation",
        description: data.serviceOverview.description || "At Leapsofts, we specialize in planning and executing high-fidelity cloud migration strategies that transition legacy physical servers, virtual machines, and monolithic databases to auto-scaling AWS, Azure, or GCP cloud environments. By leveraging automated migration tools (AWS MGN, Azure Migrate), live database sync channels (AWS DMS), and secure Landing Zone architectures, we relocate enterprise software with zero business disruption and optimal FinOps performance.",
        imagePath: data.serviceOverview.imageUrl || mobileAppImg
      }
    : null;

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
        label={activeOverviewData?.label || "CLOUD MIGRATION"}
        titleMain={activeOverviewData?.titleMain || "Zero-Downtime "}
        titleAccent={activeOverviewData?.titleAccent || "Cloud Migration "}
        titleEnd={activeOverviewData?.titleEnd || "& Enterprise Relocation"}
        description={activeOverviewData?.description || "At Leapsofts, we specialize in planning and executing high-fidelity cloud migration strategies that transition legacy physical servers, virtual machines, and monolithic databases to auto-scaling AWS, Azure, or GCP cloud environments. By leveraging automated migration tools (AWS MGN, Azure Migrate), live database sync channels (AWS DMS), and secure Landing Zone architectures, we relocate enterprise software with zero business disruption and optimal FinOps performance."}
        imagePath={activeOverviewData?.imagePath || mobileAppImg}
      />
      <Capabilities
        title={data?.capabilitiesSection?.title || "Cloud Migration Capabilities"}
        slides={data?.capabilitiesSection?.slides || capabilitiesSlides}
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Map your "}
        titleAccent={data?.strategyCTA?.titleAccent || "cloud migration"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
      />
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'The 7 Rs Cloud Migration Framework'}
        description={data?.serviceFeatures?.description || 'Every business has different needs. Whether you are migrating Oracle, VMware, or PaaS applications, we tailor the migration tools and processes to fit your infrastructure.'}
        items={data?.serviceFeatures?.items || defaultItems}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <Processes
        title={data?.processes?.title || "OUR CLOUD MIGRATION PROCESS"}
        processPhases={activeProcessPhases}
        phaseLabels={activePhaseLabels}
      />
      <FAQs
        title="Cloud Migration & Modernization FAQ"
        subtitle="Everything you need to know about lift-and-shift, AWS/Azure migration tooling, database replication, and zero-downtime cutovers."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        services={[
          {
            title: "Cloud Engineering & Architecture",
            description: "Build resilient, auto-scaling cloud environments and serverless architectures on AWS & Azure.",
            link: "/services/cloud-engineering"
          },
          {
            title: "DevOps & CI/CD Automation",
            description: "Automate container releases, infrastructure as code (Terraform), and continuous deployment.",
            link: "/services/devops"
          },
          {
            title: "AWS Cloud Migration & Managed Services",
            description: "Certified Amazon Web Services migration, database transfer (DMS), and cloud support.",
            link: "/services/aws"
          }
        ]}
      />
    </>
  );
};

export default CloudMigration;
