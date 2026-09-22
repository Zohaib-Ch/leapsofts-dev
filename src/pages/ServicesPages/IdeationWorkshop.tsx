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
  label: "IDEATION & DISCOVERY",
  titleMain: "Orchestrating Strategic",
  titleAccent: "Product Ideation",
  titleEnd: "Workshops",
  description: "At Leapsofts, we guide founders and enterprise leaders through accelerated ideation workshops designed to crystallize user value, validate technical feasibility, and map dynamic feature roadmaps. Our senior product strategists and system architects turn abstract ideas into actionable software specifications and user personas within structured sprint cycles.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'WORKSHOP CAPABILITIES',
  titleAccent: 'Accelerated',
  titleMain: 'Discovery Methods',
  description: 'Our discovery workshops are designed to unlock creativity, validate ideas, and define a clear path from concept to execution.',
  items: [
    { icon: 'product' as const, title: 'Design Thinking Facilitation', description: 'Guided workshops leveraging user-journey mappings, empathy outlines, and structured whiteboard sprints.' },
    { icon: 'enterprise' as const, title: 'Feasibility Audit Checks', description: 'Deep analysis of third-party APIs, database integration rules, and system scalability structures.' },
    { icon: 'product' as const, title: 'Rapid Interface Wireframes', description: 'Creating clickable low-fidelity mockups and user flow paths to visualize app actions early.' },
    { icon: 'hipaa' as const, title: 'Feature Prioritizations', description: 'Isolating key features using MoSCoW mapping frameworks to build highly focused MVP scopes.' },
    { icon: 'enterprise' as const, title: 'Dynamic Data Flow Maps', description: 'Designing clean database relationship schemes and system data pipelines before writing code.' },
    { icon: 'product' as const, title: 'Strategic Release Blueprints', description: 'Establishing clear development sprint backlogs, release timelines, and cost-benefit forecasts.' },
  ]
};

const ideationProcessData: InfoGridProps['data'] = {
  label: 'WORKSHOP OUTCOMES',
  title: 'What You Gain From Our Discovery Sessions',
  items: [
    {
      icon: '01',
      title: 'Laser-Focused Concept Clarity',
      description: 'A fully articulated value proposition, user problem statement, and primary system feature list.'
    },
    {
      icon: '02',
      title: 'Validated Technical Architecture',
      description: 'A complete initial assessment of cloud frameworks, database engines, and external API structures.'
    },
    {
      icon: '03',
      title: 'Validated User Personas',
      description: 'Rich profile models of your core client base, detailing their motivations, actions, and friction points.'
    },
    {
      icon: '04',
      title: 'Development-Ready Roadmaps',
      description: 'A phased development strategy outlining sprint phases, testing dates, and product release plans.'
    }
  ]
};

const streamlineDescription = [
  { text: "Great products start with a ", bold: false },
  { text: "solid foundation", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary ideation strategy session ", bold: true },
  { text: "to help you prepare for a full-scale ", bold: false },
  { text: "discovery workshop ", bold: true },
  { text: "that turns your vision into a successful digital reality.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Design Thinking',
    description: 'Applying human-centered design to solve complex business problems.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Rapid Prototyping',
    description: 'Visualizing your ideas through wireframes and click-through models.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Stakeholder Alignment',
    description: 'Ensuring everyone is on the same page regarding project goals.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Scope Optimization',
    description: 'Defining a Minimum Viable Product (MVP) to get you to market faster.'
  }
];

const deliverMVPData = {
  label: "IDEATION EXCELLENCE",
  title: "Our Commitment to Deliver Your Discovery Blueprint in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite product ideation and agile discovery workshop partner. By combining fully integrated automated tooling, certified design thinking experts, and dedicated software architects, we define, validate, and blueprint launch-ready software concepts within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Empathy Sprints.",
      description: "Translating stakeholder interviews and competitor data into structured user empathy profiles and functional paths."
    },
    {
      title: "Interactive Wireframes.",
      description: "Crafting rapid low-fidelity clickable layouts and relational database flow maps before writing code."
    },
    {
      title: "MoSCoW Prioritizations.",
      description: "Isolating essential functional features into strict Must-Have groupings to design a fast-to-market MVP."
    },
    {
      title: "Strategic Release roadmaps.",
      description: "Authoring complete JIRA epic backlogs, release milestones, and comprehensive cost projections."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & STAKEHOLDER ALIGNMENT",
    title: "Empathy Mappings & User Interviews",
    description: "We run active stakeholder workshops to isolate core business objectives and target user demographics.",
    features: [
      {
        title: "Empathy Mapping Sprints",
        description: "Run active brainstorming sessions to identify client problems, motivations, and operational gaps."
      },
      {
        title: "Competitive Landscape Review",
        description: "Analyze market competitors, product differentiators, and baseline industry success parameters."
      },
      {
        title: "Stakeholder Expectation Maps",
        description: "Align core corporate goals, target user groups, and primary software scope assertions."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DESIGN & SYSTEM FLOW SCHEMES",
    title: "Low-Fidelity Wireframes & Data Schemes",
    description: "Designing clickable UI/UX wireframes and structuring primary database relationship paths.",
    features: [
      {
        title: "Clickable UI/UX Wireframes",
        description: "Construct structural low-fidelity interface layouts and initial user interaction pathways."
      },
      {
        title: "System Data Flow Maps",
        description: "Plan transactional pathways, entity-relationship models (ERD), and server configurations."
      },
      {
        title: "Directory & Security Schemes",
        description: "Map primary user access boundaries (IAM), encryption goals, and security credentials setups."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SYSTEM DEPLOYMENT",
    title: "Feasibility Runs & MoSCoW Prioritizations",
    description: "Reviewing external API compatibility, running test connections, and refining feature matrixes.",
    features: [
      {
        title: "External API Feasibility Checks",
        description: "Verify integration specs of third-party interfaces, checking latency and connectivity constraints."
      },
      {
        title: "MoSCoW Prioritization Splits",
        description: "Isolate software features into absolute 'Must-Haves' and 'Could-Haves' to streamline MVP development."
      },
      {
        title: "Cloud Performance Stress Mocks",
        description: "Formulate baseline resource projections and computing limits needed to support targeted loads."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & HANDOVER",
    title: "Developer Backlogs & Telemetry Setups",
    description: "Delivering development-ready sprint backlogs, release roadmaps, and central logging mocks.",
    features: [
      {
        title: "Development-Ready Backlogs",
        description: "Draft comprehensive software stories, Epic divisions, and checklist cards inside JIRA/GitHub."
      },
      {
        title: "SLA-Driven Systems Support",
        description: "Establish L2/L3 support rules, patch update schedules, and environment scaling review loops."
      },
      {
        title: "Grafana Dashboard Telemetry Mocks",
        description: "Set up baseline application telemetry goals to plan real-time health indicator overlays."
      }
    ]
  }
];

const phaseLabelsDefault = ["DISCOVERY ALIGNMENT", "WIRE-FRAME SYSTEMS", "FEASIBILITY RUNS", "DEVELOPER HANDOVER"];

const title = "Product Ideation Workshops, User Experience Mapping & Technical Discovery";
const subtitle = "";

const introDescription = [
  { text: "We facilitate high-impact ", bold: false },
  { text: "product ideation workshop services & software product discovery ", bold: true },
  { text: "designed to translate product visions into concrete system blueprints. By conducting collaborative design thinking sprints, low-fidelity wireframing, and database feasibility checks, we help teams design market-ready MVP roadmaps.", bold: false }
];

export function meta() {
  const title = "Product Ideation Workshop Services | Leapsofts";
  const description = "Structured product ideation workshops to define your MVP vision, tech stack & roadmap. Leapsofts aligns your team with a clear execution strategy. Book now.";
  const keywords = "product ideation workshop, MVP workshop, software product discovery, product strategy workshop";
  const canonicalUrl = "https://www.leapsofts.com/services/ideation-workshop";

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
      "name": "Product Ideation Workshop Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Product Ideation & Discovery Workshop",
      "description": "Structured product ideation workshops to define your MVP vision, tech stack & roadmap."
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
          "name": "Ideation Workshop",
          "item": "https://www.leapsofts.com/services/ideation-workshop"
        }
      ]
    }
  ]
};

const IdeationWorkshop: React.FC = () => {
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
      <InfoGrid data={ideationProcessData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="product concept"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized services to support your ideation workshops.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR IDEATION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Product Development Strategy",
            description: "Build long-term technology roadmaps and architectural scaling blueprints.",
            link: "/services/product-development-strategy"
          },
          {
            title: "Proof of Concept (PoC) Development",
            description: "Engineer rapid prototype iterations to test core technical feasibility.",
            link: "/services/proof-of-concept-development"
          },
          {
            title: "Custom Software Development",
            description: "Turn your workshop blueprint into a fully functional enterprise platform.",
            link: "/services/custom-software-development"
          }
        ]}
      />
    </>
  );
};

export default IdeationWorkshop;
