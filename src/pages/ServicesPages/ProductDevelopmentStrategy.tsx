import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { parseFormattedText } from '../../utils/textParser';
import { useServicePage } from '../../hooks/useServicePage';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import FAQs from '../../components/FAQs/FAQs';
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

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('product-development-strategy');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Product Development Strategy Services | Leapsofts",
    defaultDescription: "Define a winning product development strategy with Leapsofts. We map your tech roadmap, market positioning & scalability plan before a single line of code.",
    defaultKeywords: "product development strategy, software product strategy, technology roadmap consulting, product planning services",
    canonicalUrl: "https://www.leapsofts.com/services/product-development-strategy",
  });
}



const ProductDevelopmentStrategy: React.FC = () => {
  const { data } = useServicePage('product-development-strategy');

  const schemaData = buildServiceSchema({
    name: "Product Development Strategy Services",
    description: "Define a winning product development strategy with Leapsofts.",
    canonicalUrl: "https://www.leapsofts.com/services/product-development-strategy",
    faqs: data?.faqs,
  });

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof infoGridData !== 'undefined' ? infoGridData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof infoGridData !== 'undefined' ? infoGridData.title : ''),
        description: data.infoGrid.description || (typeof infoGridData !== 'undefined' ? infoGridData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof infoGridData !== 'undefined' ? infoGridData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof ourServicesData !== 'undefined' ? ourServicesData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof ourServicesData !== 'undefined' ? ourServicesData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof ourServicesData !== 'undefined' ? ourServicesData.titleMain : ''),
        description: data.emergingTech.description || (typeof ourServicesData !== 'undefined' ? ourServicesData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof ourServicesData !== 'undefined' ? ourServicesData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
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
        label: data.serviceOverview.label || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.label : ''),
        titleMain: data.serviceOverview.titleMain || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleMain : ''),
        titleAccent: data.serviceOverview.titleAccent || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleAccent : ''),
        titleEnd: data.serviceOverview.titleEnd || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleEnd : ''),
        description: data.serviceOverview.description || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.description : ''),
        imagePath: data.serviceOverview.imageUrl || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.imagePath : undefined)
      }
    : (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData : null);

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  const activeServiceFeatures = (data?.serviceFeatures?.items && data.serviceFeatures.items.length > 0)
    ? data.serviceFeatures.items
    : serviceFeaturesData;

  const strategyCTA = data?.strategyCTA;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      {activeOverviewData && (
        <ServiceOverview
          label={activeOverviewData.label}
          titleMain={activeOverviewData.titleMain}
          titleAccent={activeOverviewData.titleAccent}
          titleEnd={activeOverviewData.titleEnd}
          description={activeOverviewData.description}
          imagePath={activeOverviewData.imagePath}
        />
      )}
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label={strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={strategyCTA?.titleMain || "Map your "}
        titleAccent={strategyCTA?.titleAccent || "product roadmap"}
        titleEnd={strategyCTA?.titleEnd || " strategy."}
        description={strategyCTA?.descriptionText ? [{ text: strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={strategyCTA?.buttonText}
        buttonPath={strategyCTA?.buttonPath}
        imageUrl={strategyCTA?.imageUrl || "/streamline.png"}
      />
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'Expert Services'}
        description={data?.serviceFeatures?.description || 'We deliver specialized strategic services to support your product development.'}
        items={activeServiceFeatures}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <EmergingTech data={activeEmergingTechData} />
      <Processes title={data?.processes?.title || "OUR STRATEGIC PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      <FAQs faqs={data?.faqs} items={data?.faqs} />
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
