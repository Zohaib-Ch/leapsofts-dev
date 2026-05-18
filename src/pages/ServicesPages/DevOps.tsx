import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';

const servicesData: EmergingTechProps['data'] = {
    label: "DEVOPS SERVICES",
    titleMain: "Continuous Delivery",
    titleAccent: "Capabilities",
    description: "We provide comprehensive DevOps solutions to automate your infrastructure, streamline delivery, and ensure high availability.",
    items: [
        {
            icon: "enterprise" as const,
            title: "Infrastructure as Code (IaC)",
            description: "Writing reusable, modular Terraform or Pulumi scripts to provision secure, version-controlled cloud environments."
        },
        {
            icon: "saas" as const,
            title: "Automated CI/CD Pipelines",
            description: "Structuring robust release tracks using GitHub Actions, GitLab CI, or Jenkins to test, build, and deploy code automatically."
        },
        {
            icon: "enterprise" as const,
            title: "Container Orchestration",
            description: "Configuring high-availability Kubernetes or Docker Swarm clusters to run, scale, and manage application containers seamlessly."
        },
        {
            icon: "saas" as const,
            title: "Logs Observability & Telemetry",
            description: "Deploying comprehensive monitoring suites via Prometheus, Grafana, and ELK to collect, query, and alert on system performance metrics."
        },
        {
            icon: "thirdParty" as const,
            title: "DevSecOps Security Audits",
            description: "Integrating static codebase scans (SAST via SonarQube) and automated container vulnerability audits into active CI/CD pipelines."
        },
        {
            icon: "legacy" as const,
            title: "Global Configuration Management",
            description: "Automating server provisioning and configuration updates across dynamic clusters using Ansible, Chef, or Puppet scripts."
        }
    ]
};

const deliverMVPData = {
    label: "DEVOPS EXCELLENCE",
    title: "Our Commitment to Deliver Your DevOps Infrastructure in",
    accentText: "3-5 months?",
    description: "Leapsofts is a leading DevOps and continuous delivery systems consulting partner. By combining fully integrated automated tooling, certified systems architects, and dedicated DevOps engineers, we build, secure, and deliver enterprise-ready release infrastructures within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Declarative IaC Blueprints.",
            description: "Building secure, repeatable staging and production environments using modular Terraform and Pulumi code."
        },
        {
            title: "GitLab CI/CD Run gates.",
            description: "Structuring robust automated testing pipelines, code quality checks, and container image scans."
        },
        {
            title: "Kubernetes Orchestrations.",
            description: "Deploying high-availability Amazon EKS clusters and automated scaling policies to handle traffic peaks."
        },
        {
            title: "Prometheus Observabilities.",
            description: "Setting up Prometheus latency logging, Grafana telemetry overlays, and real-time alert triggers."
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
  { text: "We deliver advanced DevOps engineering, automated ", bold: false },
  { text: "CI/CD release pipelines", bold: true },
  { text: ", and secure infrastructure-as-code (IaC) architectures. By integrating container orchestration systems, active telemetry monitors, and automated security scans, we empower software teams to deploy clean, high-performance features with zero operational friction.", bold: false }
];

const DevOps: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default DevOps;
