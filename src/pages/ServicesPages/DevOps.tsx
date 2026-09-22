import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

const servicesData: EmergingTechProps['data'] = {
    label: "DEVOPS SERVICES & AUTOMATION CAPABILITIES",
    titleAccent: "DevOps Solutions & ",
    titleMain: "Continuous Integration",
    description: "We provide end-to-end DevOps consulting and automation services to provision infrastructure as code, build CI/CD pipelines, and guarantee high-availability cloud releases.",
    items: [
        {
            icon: "enterprise" as const,
            title: "Infrastructure as Code (IaC) & Terraform",
            description: "Writing reusable, version-controlled Terraform, Pulumi, and AWS CloudFormation templates to automate cloud infrastructure provisioning."
        },
        {
            icon: "saas" as const,
            title: "Automated CI/CD Pipeline Engineering",
            description: "Structuring automated build, test, and deployment tracks using GitHub Actions, GitLab CI, Jenkins, and Azure DevOps pipelines."
        },
        {
            icon: "enterprise" as const,
            title: "Kubernetes & Container Orchestration",
            description: "Deploying high-availability Kubernetes clusters (AWS EKS, Azure AKS, GCP GKE) with automated pod scaling, Helm charts, and ingress controllers."
        },
        {
            icon: "saas" as const,
            title: "Prometheus & Grafana Telemetry",
            description: "Deploying full-stack observability suites using Prometheus, Grafana, and Datadog to capture real-time latency, error rates, and CPU metrics."
        },
        {
            icon: "thirdParty" as const,
            title: "DevSecOps Security & Vulnerability Audits",
            description: "Integrating static code analysis (SAST via SonarQube), dependency scanners, and container image vulnerability audits into commit loops."
        },
        {
            icon: "legacy" as const,
            title: "Automated Configuration Management",
            description: "Automating server node setups, patch distributions, and cluster configuration syncs using Ansible, Chef, and Puppet scripts."
        }
    ]
};

const deliverMVPData = {
    label: "DEVOPS AUTOMATION EXCELLENCE",
    title: "Build & Deploy Your Production DevOps Infrastructure in",
    accentText: "3-5 months",
    description: "Leapsofts is a premier DevOps services and CI/CD consulting company. Combining certified DevOps architects, pre-tested Terraform modules, and automated pipeline scripts, we engineer production-ready deployment environments within 3 to 5 months.",
    items: [
        {
            title: "Modular IaC Templates.",
            description: "Provisioning reproducible staging and production cloud environments using modular Terraform and Pulumi code repositories."
        },
        {
            title: "GitLab/GitHub Run Gates.",
            description: "Structuring automated unit testing runs, SonarQube static code checks, and Docker container vulnerability scans."
        },
        {
            title: "Kubernetes Auto-Scaling.",
            description: "Deploying elastic Amazon EKS/Azure AKS clusters with Horizontal Pod Autoscalers (HPA) to absorb sudden traffic spikes."
        },
        {
            title: "Real-Time Observability.",
            description: "Configuring Prometheus metric collectors, Grafana dashboard overlays, and automated PagerDuty alert triggers."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: PIPELINE DISCOVERY & TOOLCHAIN ASSESSMENT",
    title: "Toolchain Audits & Branching Discovery",
    description: "We audit existing compilation steps, local environments, and manual build processes.",
    features: [
      {
        title: "Build Pipeline Discovery Scans",
        description: "Analyze compilation runtimes, artifact repositories dependencies, and configuration maps."
      },
      {
        title: "Git Workflow Assessments",
        description: "Audit branching models, peer-review patterns, and active webhook integrations."
      },
      {
        title: "Target Toolchain Blueprints",
        description: "Draft structural CI/CD blueprints, IaC configurations, and artifact storage strategies."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & COMPILATION AUTOMATION",
    title: "Infrastructure as Code & Secure Pipelines",
    description: "Writing robust Terraform modules, designing transit pipelines, and configuring IAM boundaries.",
    features: [
      {
        title: "Modular Terraform Codebase",
        description: "Author repeatable IaC scripts to provision VPCs, routing configurations, and computing clusters."
      },
      {
        title: "Automated Build Compilation",
        description: "Integrate linters, package builders, and automated testing hooks inside GitLab/GitHub runners."
      },
      {
        title: "Secure Vault Credentials",
        description: "Configure centralized credential management (HashiCorp Vault) with automated access key rotation rules."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: CONTAINERIZATION & ORCHESTRATION SPRINTS",
    title: "Docker Integrations & High-Availability Clusters",
    description: "Orchestrating high-availability clusters, container network rules, and ingress routes.",
    features: [
      {
        title: "Docker Microservices Containerization",
        description: "Author multi-stage Dockerfiles to package applications into lightweight, secure container images."
      },
      {
        title: "Kubernetes Cluster Provisioning",
        description: "Deploy production-ready Kubernetes nodes (EKS/GKE) with automated scaling rules and private subnets."
      },
      {
        title: "E2E Automated Verification Gates",
        description: "Run automated Playwright visual checks against temporary branch builds prior to repository merges."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: OBSERVABILITY TELEMETRY & GOVERNANCE",
    title: "Prometheus Monitoring & GitOps Rollouts",
    description: "Deploying central logging structures, optimizing infrastructure costs, and configuring GitOps releases.",
    features: [
      {
        title: "Prometheus & Grafana Integration",
        description: "Orchestrate real-time telemetry dashboards, configure query speeds telemetry, and enable automated alerting channels."
      },
      {
        title: "GitOps Continuous Upgrades",
        description: "Configure GitOps delivery loops (ArgoCD) to execute zero-downtime rolling upgrades across microservices."
      },
      {
        title: "Automated Cost-Optimization",
        description: "Deploy automated instance scaling guidelines, rightsizing recommendations, and spot-instances pools."
      }
    ]
  }
];

const phaseLabelsDefault = [
    "PIPELINE DISCOVERY",
    "IAC & AUTOMATION",
    "CONTAINER SPRINTS",
    "TELEMETRY & GOVERNANCE",
];

const strategyData: InfoGridProps['data'] = {
    label: "DEVOPS BENEFITS",
    title: "Maximize Operational Agility & Velocity",
    items: [
        {
            icon: "01",
            title: "High Deployment Frequency",
            description: "Enable continuous code deployments, transitioning from monthly manual release cycles to automated daily releases."
        },
        {
            icon: "02",
            title: "Accelerated Lead Times",
            description: "Dramatically reduce the duration from writing the first line of code to having the feature live on production."
        },
        {
            icon: "03",
            title: "Low Mean Time to Recovery (MTTR)",
            description: "Leverage automated rollbacks and canary deployments to instantly resolve runtime bugs and eliminate site downtime."
        }
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise build pipeline ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new GitOps delivery infrastructure", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current deployment tools, map out VCS structures, identify container orchestration gaps, and formulate a ", bold: false },
  { text: "highly efficient, customized DevOps automation plan ", bold: true },
  { text: "built to unlock massive release speeds and eliminate build errors.", bold: false }
];

const title = "Enterprise DevOps Automation, Continuous Delivery & Infrastructure-as-Code";
const subtitle = "";

const introDescription = [
  { text: "We provide end-to-end ", bold: false },
  { text: "DevOps services & consulting ", bold: true },
  { text: "to accelerate continuous integration and software delivery. As a top DevOps automation company, we build automated ", bold: false },
  { text: "CI/CD release pipelines", bold: true },
  { text: ", Kubernetes container orchestrations, and Terraform infrastructure-as-code (IaC) solutions designed to eliminate release friction and maintain 99.99% operational uptime.", bold: false }
];

export function meta() {
  const title = "DevOps Services & Consulting | Leapsofts";
  const description = "Accelerate software delivery with expert DevOps services. Leapsofts implements CI/CD pipelines, container orchestration & monitoring for enterprises. Talk to us.";
  const keywords = "DevOps services, DevOps consulting, CI/CD pipeline development, Kubernetes DevOps, DevOps automation";
  const canonicalUrl = "https://www.leapsofts.com/services/devops";

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
      "name": "DevOps Services & Consulting",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "DevOps Services & CI/CD Consulting",
      "description": "Accelerate software delivery with expert DevOps services. Leapsofts implements CI/CD pipelines."
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
          "name": "DevOps",
          "item": "https://www.leapsofts.com/services/devops"
        }
      ]
    }
  ]
};

const DevOps: React.FC = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <ServiceOverview
                titleMain="Maximize"
                titleAccent='Operational Agility'
                titleEnd='with DevOps'
                description="At Leapsofts, we specialize in building highly resilient, secure DevOps environments designed to accelerate release cycles and eliminate build errors. By writing reusable Terraform modules, containerizing application nodes, and setting up automated testing check gates, our engineers transition development teams into high-velocity continuous deployment setups with maximum uptime."
                imagePath="/icons/images/cloud.webp"
            />
            <InfoGrid data={strategyData} />
            <StreamlineSuccess
                label="COMPLIMENTARY STRATEGY SESSION"
                titleMain="Map your "
                titleAccent="DevOps automation"
                titleEnd=" roadmap."
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={servicesData} />
            <Processes title="OUR CUSTOM DEVOPS PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
            <RelatedServices
                services={[
                    {
                        title: "Cloud Engineering & Infrastructure",
                        description: "Design resilient cloud architectures, VPC networks, and microservices topologies on AWS & Azure.",
                        link: "/services/cloud-engineering"
                    },
                    {
                        title: "Quality Assurance & Testing",
                        description: "Integrate automated unit tests, regression suites, and static code linters into CI/CD build loops.",
                        link: "/services/quality-assurance"
                    },
                    {
                        title: "Cyber Security & DevSecOps",
                        description: "Embed zero-trust security checks and automated vulnerability scanners directly into deployment pipelines.",
                        link: "/services/cyber-security"
                    }
                ]}
            />
        </>
    );
};

export default DevOps;
