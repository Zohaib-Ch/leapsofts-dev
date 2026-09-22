import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
  label: "ENTERPRISE MODERNIZATION",
  titleMain: "Orchestrating Strategic",
  titleAccent: "Digital Evolution",
  titleEnd: "Roadmaps",
  description: "At Leapsofts, we guide mid-market and enterprise organizations through structural digital evolution campaigns, transforming legacy dependencies into modern growth assets. Our solutions architects evaluate code-level technical debt, plan monolithic-to-microservices migrations, and build secure, data-driven cloud systems that meet strict operational metrics and security certifications.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'TRANSFORMATION CAPABILITIES',
  titleAccent: 'Corporate',
  titleMain: 'Digital Evolution',
  description: 'We integrate cutting-edge digital solutions to modernize your workflows and enhance customer engagement.',
  items: [
    { icon: 'enterprise' as const, title: 'Monolithic Decoupling', description: 'Re-architecting rigid, legacy mainframes into agile, high-performance API-first cloud microservices.' },
    { icon: 'enterprise' as const, title: 'Unified Big Data Lakes', description: 'Establishing secure, central data repositories utilizing Snowflake or BigQuery with automated transformation flows.' },
    { icon: 'enterprise' as const, title: 'Omnichannel Commerce Setup', description: 'Building high-performance unified transaction networks across React storefronts, native platforms, and CRM centers.' },
    { icon: 'product' as const, title: 'Intelligent Process Automation', description: 'Deploying automated serverless bots and integration frameworks to replace manual operational tasks.' },
    { icon: 'saas' as const, title: 'Predictive Operations Analytics', description: 'Integrating machine learning scoring and customer segment modeling directly into operational reporting feeds.' },
    { icon: 'thirdParty' as const, title: 'Global System Integrations', description: 'Unifying disconnected internal databases, inventory tracking APIs, and billing engines into a fast sync grid.' },
  ]
};

const digitalEvolutionProcessData: InfoGridProps['data'] = {
  label: 'EVOLUTION VALUE ADVANTAGE',
  title: 'Why Transform Your Business Systems with Leapsofts',
  items: [
    {
      icon: '01',
      title: 'Eliminate Mainframe Technical Debt',
      description: 'Upgrade brittle legacy databases and spaghetti code blocks to clean, type-safe, and self-documenting codebases.'
    },
    {
      icon: '02',
      title: 'Multi-Fold Operational Speeds',
      description: 'Automate repetitive cross-department approvals, decreasing client onboarding times from days to seconds.'
    },
    {
      icon: '03',
      title: 'Predictive Corporate Intelligence',
      description: 'Transition standard database spreadsheets into real-time business dashboards with live predictive telemetry.'
    },
    {
      icon: '04',
      title: 'Future-Proof Market Agility',
      description: 'Easily plug in new software products, partner APIs, or SaaS integrations without risking legacy core failures.'
    }
  ]
};

const streamlineDescription = [
  { text: "Your digital future depends on your ability to ", bold: false },
  { text: "adapt and lead", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary evolution strategy session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "high-impact opportunities ", bold: true },
  { text: "that drive long-term business agility and success.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Strategy Design',
    description: 'Defining a clear path for your organization’s digital journey.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Tech Modernization',
    description: 'Upgrading legacy infrastructure to support modern digital goals.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Workflow Automation',
    description: 'Implementing tools to reduce manual overhead and increase speed.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Talent Alignment',
    description: 'Helping your team adopt and excel with new digital tools.'
  }
];

const deliverMVPData = {
  label: "EVOLUTION EXCELLENCE",
  title: "Our Commitment to Deliver Your Digital Transformation in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite enterprise systems transformation and digital evolution partner. By combining fully integrated automated tooling, certified solutions architects, and dedicated DevOps engineers, we build, secure, and deliver modernized operational systems within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Monolithic Decoupling.",
      description: "Systematically isolating obsolete legacy mainframe processes into high-performance cloud microservices."
    },
    {
      title: "Modern Data Lakes.",
      description: "Consolidating siloed corporate databases into unified, secure analytical systems like Snowflake or BigQuery."
    },
    {
      title: "Zero-Downtime Migration.",
      description: "Orchestrating safe canary deployments and legacy system sync routines to maintain absolute operational uptime."
    },
    {
      title: "Intelligent Automations.",
      description: "Implementing predictive analytics triggers, API pipelines, and corporate process workflows to eliminate human errors."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & READINESS ASSESSMENT",
    title: "Codebase-Level Debt Audits & Discoveries",
    description: "We audit your existing digital landscape, codebase technical debt, and business objectives.",
    features: [
      {
        title: "Codebase-Level Debt Audits",
        description: "Scan legacy code files, dependencies relationships, database models, and active port layers."
      },
      {
        title: "Friction Point Assessments",
        description: "Analyze manual entry sheets, API connection speeds, and internal database latencies."
      },
      {
        title: "Modernization Blueprint",
        description: "Draft structural target microservice schemas, database mapping routes, and roadmap phases."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DESIGN & MICROSERVICES PROVISIONS",
    title: "API Blueprints & Infrastructure provisions",
    description: "Designing a phased roadmap and writing robust Terraform modules to isolate legacy layers.",
    features: [
      {
        title: "Modular Terraform Codebases",
        description: "Author repeatable cloud infra scripts to build isolated, secure developer staging layers."
      },
      {
        title: "REST & GraphQL API Blueprints",
        description: "Design secure data gateways and service integrations that act as firewalls around legacy DBs."
      },
      {
        title: "Zero-Trust Security Frameworks",
        description: "Enforce granular user access boundaries, activate KMS encrypt tags, and write access audit logs."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SYSTEM DEPLOYMENT",
    title: "Monolithic Decouplings & Data Syncs",
    description: "Executing the digital updates and integrating new workflows with zero transaction loss.",
    features: [
      {
        title: "Monolithic Decoupling Sprints",
        description: "Re-architect monolithic applications into Docker containers using zero-downtime canary updates."
      },
      {
        title: "Live Database Replications",
        description: "Establish automated replication pipelines to sync operational logs with zero transactional losses."
      },
      {
        title: "Transaction Stress Audits",
        description: "Execute automated stress routines via k6 to confirm microservice capacity bounds under heavy loads."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & EXPANSION",
    title: "Telemetry Ingestion & Cost Trimming",
    description: "Continuously improving and scaling your new digital capabilities with active optimization scripts.",
    features: [
      {
        title: "Prometheus & Grafana Ingestion",
        description: "Orchestrate central dashboard telemetries, configure query speeds monitors, and enable slack alerts."
      },
      {
        title: "Instance Schedule Optimization",
        description: "Deploy automated cron scripts to shut down inactive clusters and auto-scale active transaction pools."
      },
      {
        title: "Continuous DevOps Cycles",
        description: "Execute visual releases, dependency updates, and automated security penetration reviews regularly."
      }
    ]
  }
];

const phaseLabelsDefault = [
    "READINESS ASSESSMENT",
    "CDK & VPC DESIGN",
    "WORKLOAD DEPLOYMENT",
    "TELEMETRY & GOVERNANCE",
];

const title = "Digital Evolution, Legacy Modernization & Enterprise Systems Transformation";
const subtitle = "";

const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "digital transformation services & digital evolution consulting ", bold: true },
  { text: "to re-architect monolithic core networks, modernize data pathways, and automate customer-facing workflows. As an enterprise digital transformation partner, we build cloud-native microservices and intelligent process automations with zero business downtime.", bold: false }
];

export function meta() {
  const title = "Digital Transformation Services | Leapsofts";
  const description = "End-to-end digital transformation consulting & implementation. Leapsofts modernizes enterprise operations through technology strategy & AI adoption. Talk to us.";
  const keywords = "digital transformation services, digital evolution consulting, enterprise digital transformation, technology modernization";
  const canonicalUrl = "https://www.leapsofts.com/services/digital-evolution";

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
      "name": "Digital Transformation Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Digital Transformation & Technology Modernization",
      "description": "End-to-end digital transformation consulting & implementation."
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
          "name": "Digital Evolution",
          "item": "https://www.leapsofts.com/services/digital-evolution"
        }
      ]
    }
  ]
};

const DigitalEvolution: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <InfoGrid data={digitalEvolutionProcessData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="business transformation"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized digital services to support your entire organization.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR CUSTOM DIGITAL EVOLUTION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Application Re-Engineering",
            description: "Modernize monolithic legacy applications into decoupled cloud-native microservices.",
            link: "/services/app-reengineering"
          },
          {
            title: "Cloud Engineering & Architecture",
            description: "Design resilient cloud infrastructure and high-availability server clusters on AWS & Azure.",
            link: "/services/cloud-engineering"
          },
          {
            title: "Data Science & AI Solutions",
            description: "Embed machine learning algorithms and predictive telemetry into core workflows.",
            link: "/services/data-science-ai"
          }
        ]}
      />
    </>
  );
};

export default DigitalEvolution;
