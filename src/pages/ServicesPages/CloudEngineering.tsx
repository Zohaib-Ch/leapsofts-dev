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
import RelatedServices from '../../components/RelatedServices/RelatedServices';

const ourSolutionsData: EmergingTechProps['data'] = {
    label: 'CLOUD ENGINEERING SERVICES & CAPABILITIES',
    titleAccent: 'Enterprise Cloud-Native',
    titleMain: 'Architecture Solutions',
    description: 'We deliver custom cloud engineering services on AWS, Microsoft Azure, and Google Cloud Platform (GCP) tailored to guarantee multi-region resilience and cost efficiency.',
    items: [
        {
            icon: 'enterprise' as const,
            title: 'Custom Multi-Cloud Architecture Design',
            description: "Designing elastic public, hybrid, and multi-cloud environments using secure VPC subnets, transit gateways, and auto-scaling load balancers."
        },
        {
            icon: 'legacy' as const,
            title: 'Infrastructure as Code (IaC) & Terraform',
            description: "Provisioning version-controlled, reproducible cloud infrastructure by writing modular Terraform, AWS CloudFormation, and Pulumi scripts."
        },
        {
            icon: 'enterprise' as const,
            title: 'Kubernetes Container Orchestration',
            description: "Deploying high-availability Kubernetes clusters (AWS EKS, Azure AKS, GCP GKE) with automated Helm deployments and service meshes."
        },
        {
            icon: 'saas' as const,
            title: 'Multi-Region Cloud Database Replication',
            description: "Configuring globally distributed, high-availability databases using Amazon Aurora, DynamoDB Global Tables, and Azure Cosmos DB."
        },
        {
            icon: 'saas' as const,
            title: 'Serverless Computing & Edge Routing',
            description: "Building event-driven, cost-optimized serverless computing pipelines via AWS Lambda, Azure Functions, and Cloudflare Workers."
        },
        {
            icon: 'thirdParty' as const,
            title: 'GitOps CI/CD Delivery Pipelines',
            description: "Integrating GitOps delivery tracks (ArgoCD, GitLab CI, GitHub Actions) to safely automate microservice rollouts and environment updates."
        },
    ]
};

const processData: InfoGridProps['data'] = {
    label: 'CLOUD INFRASTRUCTURE ADVANTAGES',
    title: 'Why Global Enterprises Choose Cloud-Native Platforms',
    items: [
        {
            icon: '01',
            title: 'Elastic Auto-Scaling Infrastructure',
            description: 'Configure automated auto-scaling rules to expand compute capacity instantly during peak user traffic, scaling down to minimize cloud spend.'
        },
        {
            icon: '02',
            title: 'Multi-Availability Zone Resiliency',
            description: 'Deploy enterprise workloads across geographically isolated cloud regions to guarantee 99.99% uptime and zero single points of failure.'
        },
        {
            icon: '03',
            title: 'Sub-Second Edge Content Delivery',
            description: 'Leverage global CDN edge caching (Cloudflare / CloudFront) to serve web application assets closer to end users, reducing latency.'
        },
        {
            icon: '04',
            title: 'Zero-Trust Cloud Security & Compliance',
            description: 'Enforce fine-grained Cloud IAM policies, KMS envelope encryption, VPC security groups, and SOC2/HIPAA compliance standards.'
        }
    ]
};

const deliverMVPData = {
    label: "CLOUD ENGINEERING EXCELLENCE",
    title: "Deploy Your Cloud Infrastructure Architecture in",
    accentText: "3-5 months",
    description: "Leapsofts is a premier cloud engineering company. Combining certified AWS, Azure, and GCP architects, automated Terraform IaC modules, and dedicated DevOps pods, we build and deploy production-ready cloud environments within 3 to 5 months.",
    items: [
        {
            title: "Proven Cloud Blueprints.",
            description: "Leveraging certified cloud migration frameworks and low-risk multi-phase workload relocation blueprints."
        },
        {
            title: "Strict SLA Alignment.",
            description: "Designing cloud infrastructure topologies that guarantee 99.99% uptime and meet strict industry compliance standards."
        },
        {
            title: "Cloud FinOps & Cost Optimization.",
            description: "Providing automated resource rightsizing scripts, reserved instance planning, and real-time cloud cost telemetry dashboards."
        },
        {
            title: "Certified Cloud Architects.",
            description: "Deploying senior cloud engineers holding AWS Certified Solutions Architect, Azure Solutions Architect, and GCP credentials."
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

export function meta() {
  const title = "Cloud Engineering Services | Leapsofts";
  const description = "Expert cloud engineering services — architecture, deployment & optimization on AWS, Azure & GCP. Leapsofts builds resilient cloud infrastructure. Get a quote.";
  const keywords = "cloud engineering services, cloud infrastructure company, cloud architecture services, cloud consulting";
  const canonicalUrl = "https://www.leapsofts.com/services/cloud-engineering";

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
      "name": "Cloud Engineering Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Cloud Engineering",
      "description": "Expert cloud engineering services — architecture, deployment & optimization on AWS, Azure & GCP."
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
          "name": "Cloud Engineering",
          "item": "https://www.leapsofts.com/services/cloud-engineering"
        }
      ]
    }
  ]
};

const CloudEngineering: React.FC = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <RelatedServices
                services={[
                    {
                        title: "Cloud Migration Services",
                        description: "Seamlessly migrate legacy infrastructure and databases to AWS, Azure, or GCP with zero downtime.",
                        link: "/services/cloud-migration"
                    },
                    {
                        title: "DevOps & CI/CD Automation",
                        description: "Accelerate delivery velocity with containerized microservices and automated CI/CD pipelines.",
                        link: "/services/devops"
                    },
                    {
                        title: "AWS Managed Services",
                        description: "Build, deploy, and scale enterprise architectures on Amazon Web Services cloud infrastructure.",
                        link: "/services/aws"
                    }
                ]}
            />
        </>
    );
};

export default CloudEngineering;
