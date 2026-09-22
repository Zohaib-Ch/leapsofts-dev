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
  label: "PRODUCT ARCHITECTURE & STRATEGY",
  titleMain: "Orchestrating Elite",
  titleAccent: "Product Development",
  titleEnd: "Blueprints",
  description: "At Leapsofts, we help modern enterprises and fast-growing startups map comprehensive software development strategies that balance technical scalability with rapid business results. Our senior product strategists and system architects perform rigorous risk assessments, define optimal tech stacks, and configure JIRA/GitHub sprint roadmaps designed for sustained product evolution.",
  imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
  label: 'STRATEGIC PILLARS',
  title: 'Why Build Your Product Strategy With Leapsofts',
  items: [
    {
      icon: '01',
      title: 'Laser-Focused Market Fit',
      description: 'Verify real product demand and customer workflows using data-backed user persona profiles and competitive analysis.'
    },
    {
      icon: '02',
      title: 'Clear Release Timelines',
      description: 'Mitigate execution delay using strict functional requirement specifications (SRS) and modular milestone paths.'
    },
    {
      icon: '03',
      title: 'Scalable System Foundation',
      description: 'Establish clean, decoupled software architectures, type-safe API boundaries, and optimized cloud platforms.'
    },
    {
      icon: '04',
      title: 'Optimized Resource Allocation',
      description: 'Ensure development teams focus exclusively on high-value features, maximizing capital performance.'
    }
  ]
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'STRATEGY CAPABILITIES',
  titleAccent: 'Enterprise',
  titleMain: 'Product Strategy',
  description: 'Our product development approach drives innovation, accelerates delivery, and ensures long-term business growth.',
  items: [
    { icon: 'product' as const, title: 'Scalable Tech Stack Selection', description: 'Selecting optimal programming languages, database structures, and cloud infrastructures designed for long-term growth.' },
    { icon: 'enterprise' as const, title: 'Strict MVP Scope Mapping', description: 'Isolating core functional requirements to build highly focused, fast-to-market digital products.' },
    { icon: 'hipaa' as const, title: 'Technical Risk Assessments', description: 'Proactively identifying code-level dependencies, third-party API limits, and platform security threats.' },
    { icon: 'legacy' as const, title: 'High-Velocity Sprint Roadmaps', description: 'Structuring predictable development sprint plans, agile backlog epics, and release checkpoints.' },
    { icon: 'mobile' as const, title: 'Data-Led System Designs', description: 'Designing robust user telemetry frameworks, database models, and analytics metrics from day one.' },
    { icon: 'saas' as const, title: 'Go-To-Market Technical Playbooks', description: 'Structuring secure, zero-downtime canary release steps and cloud monitoring tools.' },
  ]
};

const streamlineDescription = [
  { text: "A great product starts with a ", bold: false },
  { text: "strategic blueprint", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary product strategy session ", bold: true },
  { text: "to help you define your ", bold: false },
  { text: "path to market leadership", bold: true },
  { text: " with a focus on innovation and sustainable growth.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Roadmap Blueprinting',
    description: 'Phased development plans aligned with your business milestones.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'MVP Scoping',
    description: 'Identifying the essential features to launch fast and gather data.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'GTM Strategy',
    description: 'Comprehensive go-to-market planning for a successful product launch.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Growth Hacking',
    description: 'Strategies to scale your user base and product impact after launch.'
  }
];

const deliverMVPData = {
  label: "STRATEGY EXCELLENCE",
  title: "Our Commitment to Deliver Your Strategic Product Roadmap in",
  accentText: "3-5 months?",
  description: "Leapsofts is a premier software product engineering and strategic consultation partner. By combining fully integrated automated tooling, certified technical scoping experts, and dedicated agile engineering pods, we define, blueprint, and deliver launch-ready software products within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Analytical Market Fit.",
      description: "Evaluating market demand, competitor features matrices, and customer workflow benchmarks using dynamic telemetry audits."
    },
    {
      title: "Decoupled Stack Architecture.",
      description: "Selecting optimal serverless languages, high-concurrency database setups, and type-safe API boundaries."
    },
    {
      title: "Agile Sprint Backlogs.",
      description: "Configuring predictable agile development sprint plans, backlog epics, and strict scoping guardrails."
    },
    {
      title: "Canary Release Blueprints.",
      description: "Designing automated CI/CD deployment runners to support secure, zero-downtime rolling upgrades."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & MARKET RESEARCH",
    title: "Technical Audits & Competitive Studies",
    description: "We evaluate current technical assets, track spaghetti dependency code files, and score system maturity.",
    features: [
      {
        title: "Legacy Codebase Readiness",
        description: "Verify dependencies, catalog server components, check database models, and active port limits."
      },
      {
        title: "Competitive API Benchmarks",
        description: "Analyze competitor platform features, database speeds, connection APIs, and integrations."
      },
      {
        title: "User Persona Empathy Sprints",
        description: "Draft structural interaction workflows, identify user friction steps, and capture user actions."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DESIGN & TECH STACK BLUEPRINT",
    title: "Tech Stack Strategy & API Structures",
    description: "Selecting optimal cloud models, serverless frameworks, database engines, and language constructs.",
    features: [
      {
        title: "Modular IaC Bicep/Terraform",
        description: "Author type-safe cloud environment scripts to isolate staging layers and database gateways."
      },
      {
        title: "API Schema Specifications",
        description: "Configure Swagger REST specs, design GraphQL routes, and isolate key database tables."
      },
      {
        title: "Central Secret Management",
        description: "Establish centralized Key Vault storage, enforce granular role divisions (IAM), and trace access."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SPRINT PLAN",
    title: "MoSCoW Backlogs & Canary Release Mappings",
    description: "Categorizing project requirements into Must-Haves, Should-Haves, and Could-Haves.",
    features: [
      {
        title: "MoSCoW Prioritization Matrices",
        description: "Isolate software features to establish highly defined, low-risk MVP development scopes."
      },
      {
        title: "JIRA Backlog Epics Maps",
        description: "Draft clean development sprint tasks, Epic divisions, and checklist cards for engineers."
      },
      {
        title: "Canary Deployment Blueprints",
        description: "Design automated CI/CD runners to execute rolling upgrades with zero service downtime."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & RELEASE",
    title: "Telemetry Ingestion & SLA-Driven Support",
    description: "Deploying central dashboard telemetries, trace response latency monitors, and auto-scale configurations.",
    features: [
      {
        title: "Prometheus & Grafana Ingestion",
        description: "Orchestrate central dashboard telemetries, configure query speeds monitors, and enable slack alerts."
      },
      {
        title: "SLA-Driven Systems support",
        description: "Set L2/L3 support rules, patch update schedules, and environment scaling review loops."
      },
      {
        title: "Instance Schedule Optimization",
        description: "Deploy automated cron scripts to shut down inactive clusters and auto-scale active transaction pools."
      }
    ]
  }
];

const phaseLabelsDefault = ["MARKET RESEARCH", "TECH STACK DESIGN", "SPRINT BACKLOGS", "TELEMETRY & LAUNCH"];

const title = "Product Development Strategy, Technical Blueprints & High-Velocity Roadmaps";
const subtitle = "";

const introDescription = [
  { text: "We engineer data-driven ", bold: false },
  { text: "software product development strategies & technology roadmap consulting ", bold: true },
  { text: "plans tailored for ambitious enterprises and tech startups. By combining deep market analysis, type-safe tech stack blueprints, and strict MVP scoping controls, we mitigate execution risk and accelerate your product’s path to market leadership.", bold: false }
];

export function meta() {
  const title = "Product Development Strategy Services | Leapsofts";
  const description = "Define a winning product development strategy with Leapsofts. We map your tech roadmap, market positioning & scalability plan before a single line of code.";
  const keywords = "product development strategy, software product strategy, technology roadmap consulting, product planning services";
  const canonicalUrl = "https://www.leapsofts.com/services/product-development-strategy";

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
      "name": "Product Development Strategy Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Software Product Strategy & Roadmapping",
      "description": "Define a winning product development strategy with Leapsofts."
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
          "name": "Product Development Strategy",
          "item": "https://www.leapsofts.com/services/product-development-strategy"
        }
      ]
    }
  ]
};

const ProductDevelopmentStrategy: React.FC = () => {
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
      <InfoGrid data={infoGridData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="product roadmap"
        titleEnd=" strategy."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized strategic services to support your product development.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR STRATEGIC PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Product Ideation Workshop",
            description: "Run collaborative discovery workshops to define user personas and MVP scopes.",
            link: "/services/ideation-workshop"
          },
          {
            title: "Proof of Concept (PoC) Development",
            description: "Validate complex architectural assumptions with rapid technical prototype builds.",
            link: "/services/proof-of-concept-development"
          },
          {
            title: "Custom Software Development",
            description: "Build full-scale enterprise software products with dedicated engineering pods.",
            link: "/services/custom-software-development"
          }
        ]}
      />
    </>
  );
};

export default ProductDevelopmentStrategy;
