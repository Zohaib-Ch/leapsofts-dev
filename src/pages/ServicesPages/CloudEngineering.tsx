import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import mobileAppImg from "../../assets/phones.webp";
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';

const ourSolutionsData: EmergingTechProps['data'] = {
    label: 'CLOUD SERVICES',
    titleAccent: 'Cloud',
    titleMain: 'Capabilities',
    description: 'We provide custom-designed cloud platform architectures tailored to your business needs, ensuring efficiency, scalability, and innovation.',
    items: [
        {
            icon: 'enterprise' as const,
            title: 'Custom Cloud Architecture & Design',
            description: "Designing elastic public, private, or hybrid cloud environments using secure VPC subnets, transit gateways, and load balancers."
        },
        {
            icon: 'legacy' as const,
            title: 'Infrastructure as Code (IaC) Sprints',
            description: "Enforcing complete environment traceability by writing modular Terraform or Pulumi configurations."
        },
        {
            icon: 'enterprise' as const,
            title: 'Kubernetes & Container Orchestration',
            description: "Deploying high-availability Kubernetes clusters (AWS EKS, GCP GKE, Azure AKS) with automated Helm deployments."
        },
        {
            icon: 'saas' as const,
            title: 'Multi-Region Database Replication',
            description: "Configuring globally distributed, highly available databases utilizing Amazon Aurora, DynamoDB Global Tables, or Cloud Spanner."
        },
        {
            icon: 'saas' as const,
            title: 'Serverless Computing & Edge Routing',
            description: "Building event-driven, cost-effective serverless pipelines via AWS Lambda, Google Cloud Functions, and Cloudflare Workers."
        },
        {
            icon: 'thirdParty' as const,
            title: 'Continuous CI/CD Delivery Pipelines',
            description: "Integrating GitOps delivery tracks (ArgoCD, GitHub Actions) to safely automate and roll out environment updates."
        },
    ]
};

const processData: InfoGridProps['data'] = {
    label: 'CLOUD VALUE',
    title: 'Why Migrate to Cloud-Native Platforms',
    items: [
        {
            icon: '01',
            title: 'Automatic Elastic Auto-Scaling',
            description: 'Configure auto-scaling triggers to expand computing nodes under high load, scaling back down to minimize costs.'
        },
        {
            icon: '02',
            title: 'Dynamic High Availability',
            description: 'Deploy workloads across multiple geographical zones to protect applications from isolated datacenter failure events.'
        },
        {
            icon: '03',
            title: 'Sub-Second Edge Network Speeds',
            description: 'Utilize global CDN edge caches to load asset bundles closer to end users, reducing application latency.'
        },
        {
            icon: '04',
            title: 'Strict Cloud Security Shields',
            description: 'Enforce fine-grained cloud-level access keys using AWS IAM roles, KMS encryption, and VPC security groups.'
        }
    ]
};

const deliverMVPData = {
    label: "CLOUD EXCELLENCE",
    title: "Our Commitment to Deliver Your Cloud Infrastructure in",
    accentText: "3-5 months?",
    description: "Leapsofts is an elite custom cloud systems and infrastructure advisory partner. By combining fully integrated CI/CD, certified cloud architects, and dedicated DevOps engineering pods, we build and deploy enterprise-ready cloud platforms within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Proven Methodologies.",
            description: "Leveraging certified cloud migration maps and low-risk multi-phase migration frameworks."
        },
        {
            title: "Client-First Approach.",
            description: "Aligning every stage of the infrastructure design with your business SLAs and compliance standards."
        },
        {
            title: "Transparent Cost Models.",
            description: "Providing detailed infrastructure cost analysis reports and automated cost-optimization scripts."
        },
        {
            title: "Elite Cloud Credentials.",
            description: "Deploying certified cloud architects and DevOps professionals holding advanced AWS, Azure, and GCP credentials."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: INFRASTRUCTURE DISCOVERY & ASSESSMENT",
    title: "Resource Audits & Workload Discovery",
    description:
      "We scan existing server nodes, profile security rules, and catalog database volumes.",
    features: [
      {
        title: "On-Premises Inventory Scans",
        description:
          "Scan active ports, operating systems configurations, and directory relationships."
      },
      {
        title: "SLA Capacity Assessments",
        description:
          "Analyze peak traffic loads, read/write database ratios, and latency thresholds."
      },
      {
        title: "Target Cloud Blueprints",
        description:
          "Draft initial topology diagrams, database mappings, and multi-stage migration tracks."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & SECURE VPC DESIGN",
    title: "Infrastructure as Code & Security Hardening",
    description:
      "Writing robust Terraform structures, designing transit pipelines, and configuring IAM boundaries.",
    features: [
      {
        title: "Modular Terraform Codebase",
        description:
          "Author repeatable IaC scripts to provision VPCs, routing configurations, and computing clusters."
      },
      {
        title: "VPC Networking Layouts",
        description:
          "Design secure public and private subnets, transit connections, and internet access gateways."
      },
      {
        title: "Zero-Trust IAM Directories",
        description:
          "Enforce granular role boundaries, encrypt database keys via KMS, and activate multi-factor checks."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY WAVE MIGRATION & TESTING",
    title: "Database Relocations & Container Deployments",
    description:
      "Executing live wave migrations, containerizing app nodes, and executing load tests.",
    features: [
      {
        title: "Zero-Downtime Data Relocations",
        description:
          "Migrate active databases using replication services to prevent transactional interruptions."
      },
      {
        title: "Kubernetes Pod Containerization",
        description:
          "Package software microservices into Docker containers and deploy pods on AWS EKS or GKE clusters."
      },
      {
        title: "Stress Telemetry Sweeps",
        description:
          "Execute automated performance tests via k6 under peak load configurations to verify target SLA speeds."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OPTIMIZATION & TELEMETRY",
    title: "Prometheus Monitoring & Rolling Upgrades",
    description:
      "Deploying central logging structures, optimizing infrastructure costs, and configuring GitOps releases.",
    features: [
      {
        title: "Prometheus & Grafana Telemetry",
        description:
          "Orchestrate real-time metrics dashboards, configure query speeds telemetry, and enable automated alerting channels."
      },
      {
        title: "Automated cost-optimization",
        description:
          "Deploy automated instance scaling guidelines, rightsizing recommendations, and spot-instances pools."
      },
      {
        title: "GitOps Continuous Upgrades",
        description:
          "Configure GitOps delivery loops (ArgoCD) to execute zero-downtime rolling upgrades across microservices."
      }
    ]
  }
];

const phaseLabelsDefault = [
    "STRATEGY & DISCOVERY",
    "IAC & NETWORK DESIGN",
    "WAVE MIGRATION & TESTING",
    "OPTIMIZATION & MONITORING",
];

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new multi-region cloud cluster", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current infrastructure setups, map out potential network latencies, evaluate compliance directories, and formulate a ", bold: false },
  { text: "highly efficient, customized cloud engineering plan ", bold: true },
  { text: "built to unlock massive scale and streamline infrastructure costs.", bold: false }
];

const title = "Enterprise Cloud Engineering, Cloud-Native Architectures & Multi-Region Resiliency";
const subtitle = "";

const introDescription = [
  { text: "We deliver advanced cloud-native architectures, custom ", bold: false },
  { text: "multi-cloud Kubernetes clusters", bold: true },
  { text: ", and secure infrastructure-as-code (IaC) deployment pipelines. By streamlining automated elastic load balancers, real-time log ingestion systems, and multi-region database replications, we engineer high-availability cloud platforms built to survive extreme operational traffic and eliminate network latencies.", bold: false }
]

const CloudEngineering: React.FC = () => {
    return (
        <>
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <ServiceOverview
                label='CLOUD ARCHITECTURE'
                titleMain='Orchestrating Elastic'
                titleAccent='Cloud-Native'
                titleEnd='Infrastructures'
                description='At Leapsofts, we customize and engineer resilient cloud infrastructures designed to scale systems automatically and deliver high-performance throughput. By authoring custom Terraform blueprints, containerizing applications with Docker and Kubernetes (EKS/GKE), configuring elastic auto-scaling groups, and orchestrating distributed microservices, we help enterprises migrate from legacy on-premises servers to secure cloud environments with zero operational downtime.'
                imagePath={mobileAppImg}
            />
            <InfoGrid data={processData} />
            <StreamlineSuccess
                label="COMPLIMENTARY STRATEGY SESSION"
                titleMain="Map your "
                titleAccent="cloud architecture"
                titleEnd=" roadmap."
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={ourSolutionsData} />
            <Processes title="OUR CUSTOM CLOUD MIGRATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};

export default CloudEngineering;
