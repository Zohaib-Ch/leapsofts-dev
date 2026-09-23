import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import laptopImg from "../../assets/about_laptop_3d.png";

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'consultation',
    number: '< 01 >',
    title: 'Leapsofts, Pioneering POC Engineering Services',
    image: capabilitiesImg,
    items: [
      {
        name: 'Concept Boundary Validation',
        description: "Testing technical boundaries and core integration feasibility backed by rigorous code experiments and data audits."
      },
      {
        name: 'Clickable Functional Prototype',
        description: "Crafting highly interactive, high-fidelity clickable models that demonstrate exact user flows and software capabilities."
      },
      {
        name: 'Scalable Stack Architecture',
        description: "Providing granular tech stack reviews, database layout drafts, and API interface plans before deep development starts."
      },
      {
        name: 'Algorithm Feasibility Scoring',
        description: "Simulating execution performance, calculating response latencies, and evaluating algorithmic efficiency in sandbox states."
      },
      {
        name: 'Isolated Sandboxes',
        description: "Building isolated, rapid-to-launch backend workspaces that can be easily validated by internal stakeholders."
      }
    ]
  },
  {
    id: 'configuration',
    number: '< 02 >',
    title: 'Technical Risk Minimization & System Validation',
    image: platformImg,
    items: [
      {
        name: 'Stakeholder Alignment Demos',
        description: "Presenting live, fully functional software models to executive teams to capture critical system feedbacks."
      },
      {
        name: 'API Ingress Stress Testing',
        description: "Evaluating connection rates, data latency constraints, and capacity limits of third-party platform gateways."
      },
      {
        name: 'Modular Backend Decoupling',
        description: "Isolating complex backend logic into decoupled containerized microservices to prove system compatibility."
      },
      {
        name: 'Cloud Resource Estimation',
        description: "Mapping exact serverless costs, database reads/writes capacities, and auto-scaling constraints."
      },
      {
        name: 'Production-Ready Blueprints',
        description: "Delivering self-documenting codebases, clear interface contracts, and Docker assets upon sandbox approvals."
      }
    ]
  }
];

const serviceOverviewData = {
  label: "TECHNICAL FEASIBILITY VALIDATION",
  titleMain: "Validating Complex",
  titleAccent: "POC Topologies",
  titleEnd: "With Absolute Rigor",
  description: "At Leapsofts, we help modern enterprises and fast-growing startups validate complex technical concepts, address architectural uncertainties, and demonstrate software viability. Our senior engineers construct fully integrated cloud-native prototypes, verify advanced integration endpoints, and build isolated software demonstrators that satisfy strict performance and feasibility metrics.",
  imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
  label: 'POC VALUE ADVANTAGE',
  title: 'Why Build Your Digital Workloads on a POC First',
  items: [
    {
      icon: '01',
      title: 'Drastic Execution Risk Reduction',
      description: 'Identify and resolve complex algorithmic bottlenecks and API gateway issues before committing to major coding sprints.'
    },
    {
      icon: '02',
      title: 'Massive Capital Conservation',
      description: 'Minimize upfront expenditures by proving application feasibility and interface viability in lightweight sandboxes.'
    },
    {
      icon: '03',
      title: 'Seamless Executive Alignment',
      description: 'Secure corporate approvals and project investments using tactile, fully functional product demonstrators.'
    },
    {
      icon: '04',
      title: 'Accelerated Product Learning',
      description: 'Acquire critical user flow feedbacks and telemetry trends early to optimize the long-term software blueprint.'
    }
  ]
};

const streamlineDescription = [
  { text: "Don't leave your innovation to ", bold: false },
  { text: "chance", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary POC feasibility session ", bold: true },
  { text: "to help you identify the ", bold: false },
  { text: "best path to validation ", bold: true },
  { text: "for your most ambitious digital ideas.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Rapid Prototyping',
    description: 'Building interactive UI mocks and click-through flows to test user experience.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Technical Feasibility',
    description: 'Coding core backend logic to prove complex integrations or algorithms.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Architecture Blueprint',
    description: 'Defining the tech stack and system design for future full-scale development.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Market Testing',
    description: 'Creating light versions of your product to test user engagement in the real world.'
  }
];

const deliverMVPData = {
  label: "POC EXCELLENCE",
  title: "Our Commitment to Deliver Your Feasibility Demonstrator in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite technical feasibility and Proof of Concept development partner. By combining fully integrated automated tooling, certified systems engineers, and dedicated product strategists, we scoping, code, and deliver functional validation sandboxes within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Rapid Sandbox Setups.",
      description: "Leveraging lightweight microservice templates and pre-built API integration sandboxes to construct functional models in days."
    },
    {
      title: "Technical Boundary Checks.",
      description: "Validating database read/write caps, API latency boundaries, and system capacity constraints under simulated loads."
    },
    {
      title: "Tangible Feasibility Proofs.",
      description: "Authoring clear technical evidence reports and live, interactive client demonstrators to secure stakeholder buy-in."
    },
    {
      title: "SLA-Compliant Scopes.",
      description: "Designing the POC stack to integrate perfectly with your enterprise security parameters and compliance targets."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & FEASIBILITY REVIEW",
    title: "Technical Scopes & Boundary Reviews",
    description: "Defining primary project targets, user workflows, and core technical uncertainties to solve.",
    features: [
      {
        title: "Algorithmic Uncertainty Scopes",
        description: "Draft critical technical challenge lists, and set concrete verification metrics."
      },
      {
        title: "API Ingress Integration Checks",
        description: "Scan connection documentation of external systems to map security controls."
      },
      {
        title: "Sandbox Environment Designs",
        description: "Draft modular cloud architectures and isolated database entity maps."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & SANDBOX SETUP",
    title: "Type-Safe Infrastructure & Sandbox Sprints",
    description: "Writing type-safe Terraform or Bicep scripts to build isolated testing workspaces with absolute speed.",
    features: [
      {
        title: "Type-Safe IaC Environment Mocks",
        description: "Script repeatable sandbox boundaries to segregate dev testing layers completely."
      },
      {
        title: "REST & GraphQL Endpoint Schemas",
        description: "Configure interface routes and structure simple mockup response files."
      },
      {
        title: "Key Vault Secret Protections",
        description: "Setup KMS secret managers, define isolated access boundaries (IAM), and store credential maps."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SYSTEM DEPLOYMENT",
    title: "Functional Prototypes & High-Concurrency stress runs",
    description: "Constructing lightweight, functional backend routines and executing stress checks.",
    features: [
      {
        title: "Decoupled Serverless Sandboxes",
        description: "Deploy serverless backend mockups containing core algorithmic routines."
      },
      {
        title: "High-Concurrency stress runs",
        description: "Run automated transactional traffic simulations via k6 to measure latency points."
      },
      {
        title: "Live Database Replications",
        description: "Pipe simulated transaction streams to verify database read/write stability boundaries."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & HANDOVER",
    title: "Application Telemetries & Repo Handover",
    description: "Deploying central logging structures, setting L2/L3 support rules, and transferring repositories.",
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
        title: "Turnkey Code Repository Handover",
        description: "Transfer documented clean code repositories, API integration charts, and Docker setups."
      }
    ]
  }
];

const phaseLabelsDefault = ["FEASIBILITY DISCOVERY", "IAC SANDBOX SETUP", "PROTOTYPE SPRINT", "TELEMETRY & HANDOVER"];

const title = "Proof of Concept Development, Rapid Prototyping & Technical Feasibility Validation";
const subtitle = "";

const introDescription = [
  { text: "We deliver full-spectrum ", bold: false },
  { text: "proof of concept development services & rapid prototype engineering ", bold: true },
  { text: "to validate complex algorithms, technical integrations, and platform performance before full-scale software investments. As a trusted PoC development company, we construct isolated sandboxes to de-risk technology decisions and secure executive buy-in.", bold: false }
];

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('proof-of-concept-development');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Proof of Concept Development Services | Leapsofts",
    defaultDescription: "Build a validated PoC in weeks, not months. Leapsofts designs focused proof-of-concept builds to de-risk your investment before full product development.",
    defaultKeywords: "proof of concept development, PoC development company, software prototype development, MVP proof of concept",
    canonicalUrl: "https://www.leapsofts.com/services/proof-of-concept-development",
  });
}



const ProofOfConceptDevelopment: React.FC = () => {
  const { data } = useServicePage('proof-of-concept-development');

  const schemaData = buildServiceSchema({
    name: "Proof of Concept Development Services",
    description: "Build a validated PoC in weeks, not months.",
    canonicalUrl: "https://www.leapsofts.com/services/proof-of-concept-development",
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
    ? [{ text: data.hero.introText, bold: false }]
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <Capabilities
        title="Our Key Capabilities"
        description="We offer end-to-end custom application development services."
        slides={capabilitiesSlides}
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="POC feasibility"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert POC Services'
        description='We deliver specialized services to validate your digital innovations.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <Processes title="OUR PROOF OF CONCEPT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Product Ideation Workshop",
            description: "Refine user flows and feature sets during interactive discovery sessions.",
            link: "/services/ideation-workshop"
          },
          {
            title: "Fixed Price Software Development",
            description: "Transition your validated PoC into a turnkey, budget-guaranteed software build.",
            link: "/services/fixed-price"
          },
          {
            title: "Custom Software Development",
            description: "Scale your validated prototype into a full enterprise software platform.",
            link: "/services/custom-software-development"
          }
        ]}
      />
    </>
  );
};

export default ProofOfConceptDevelopment;
