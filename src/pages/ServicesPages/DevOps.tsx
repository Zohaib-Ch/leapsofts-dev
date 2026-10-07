import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
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
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';

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

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('devops');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "DevOps Services & Consulting | Leapsofts",
    defaultDescription: "Accelerate software delivery with expert DevOps services. Leapsofts implements CI/CD pipelines, container orchestration & monitoring for enterprises. Talk to us.",
    defaultKeywords: "DevOps services, DevOps consulting, CI/CD pipeline development, Kubernetes DevOps, DevOps automation",
    canonicalUrl: "https://www.leapsofts.com/services/devops",
  });
}



const DevOps: React.FC = () => {
  const { data } = useServicePage('devops');

  const schemaData = buildServiceSchema({
    name: "DevOps Services & Consulting",
    description: "Accelerate software delivery with expert DevOps services. Leapsofts implements CI/CD pipelines.",
    canonicalUrl: "https://www.leapsofts.com/services/devops",
    faqs: data?.faqs,
  });

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof strategyData !== 'undefined' ? strategyData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof strategyData !== 'undefined' ? strategyData.title : ''),
        description: data.infoGrid.description || (typeof strategyData !== 'undefined' ? strategyData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof strategyData !== 'undefined' ? strategyData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof servicesData !== 'undefined' ? servicesData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof servicesData !== 'undefined' ? servicesData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof servicesData !== 'undefined' ? servicesData.titleMain : ''),
        description: data.emergingTech.description || (typeof servicesData !== 'undefined' ? servicesData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof servicesData !== 'undefined' ? servicesData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
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
        label: data.serviceOverview.label || "DEVOPS ENGINEERING",
        titleMain: data.serviceOverview.titleMain || "Maximize ",
        titleAccent: data.serviceOverview.titleAccent || "Operational Agility ",
        titleEnd: data.serviceOverview.titleEnd || "with DevOps",
        description: data.serviceOverview.description || "At Leapsofts, we specialize in building highly resilient, secure DevOps environments designed to accelerate release cycles and eliminate build errors. By writing reusable Terraform modules, containerizing application nodes, and setting up automated testing check gates, our engineers transition development teams into high-velocity continuous deployment setups with maximum uptime.",
        imagePath: data.serviceOverview.imageUrl || "/icons/images/cloud.webp"
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
                label={activeOverviewData?.label || "DEVOPS ENGINEERING"}
                titleMain={activeOverviewData?.titleMain || "Maximize "}
                titleAccent={activeOverviewData?.titleAccent || "Operational Agility "}
                titleEnd={activeOverviewData?.titleEnd || "with DevOps"}
                description={activeOverviewData?.description || "At Leapsofts, we specialize in building highly resilient, secure DevOps environments designed to accelerate release cycles and eliminate build errors. By writing reusable Terraform modules, containerizing application nodes, and setting up automated testing check gates, our engineers transition development teams into high-velocity continuous deployment setups with maximum uptime."}
                imagePath={activeOverviewData?.imagePath || "/icons/images/cloud.webp"}
            />
            <InfoGrid data={activeInfoGridData} />
            <StreamlineSuccess
                label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
                titleMain={data?.strategyCTA?.titleMain || "Map your "}
                titleAccent={data?.strategyCTA?.titleAccent || "DevOps automation"}
                titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
                description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
                buttonText={data?.strategyCTA?.buttonText || "Claim Strategy Session"}
                buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
                imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
            />
            <DeliverMVP data={activeDeliverMVPData} />
            <EmergingTech data={activeEmergingTechData} />
            <Processes
                title={data?.processes?.title || "OUR CUSTOM DEVOPS PROCESS"}
                processPhases={activeProcessPhases}
                phaseLabels={activePhaseLabels}
            />
            <FAQs
                title="DevOps & CI/CD Services FAQ"
                subtitle="Everything you need to know about automated deployments, Kubernetes scaling, Terraform IaC, and continuous monitoring."
                faqs={data?.faqs} items={data?.faqs}
            />
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
