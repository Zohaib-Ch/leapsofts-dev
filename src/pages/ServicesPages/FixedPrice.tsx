import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
  label: "FIXED PRICE PARTNERSHIP",
  titleMain: "Orchestrating Predictable",
  titleAccent: "Fixed-Price",
  titleEnd: "Software Delivery",
  description: "At Leapsofts, we offer a highly structured fixed-price engagement model designed for well-defined software projects, ensuring complete transparency across every milestone. Our business analysts and cloud architects document every application flow, catalog technical dependencies, and commit to clear delivery dates, allowing you to manage investments with absolute certainty.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'MODEL ADVANTAGES',
  titleAccent: 'Fixed-Price',
  titleMain: 'Delivery Guarantees',
  description: 'Discover the key advantages of choosing a fixed-price engagement model with Leapsofts.',
  items: [
    { icon: 'product' as const, title: 'Upfront Budget Certainty', description: 'Know your exact capital expenditure before any coding begins, with zero risk of mid-project cost adjustments.' },
    { icon: 'enterprise' as const, title: 'Comprehensive Scope Maps', description: 'Clear, exhaustive documentation of all features, technical dependencies, and system modules.' },
    { icon: 'product' as const, title: 'Committed Timeline Delivery', description: 'Strict timeline boundaries backed by clear milestone dates to ensure your product launches on schedule.' },
    { icon: 'hipaa' as const, title: 'Leapsofts Delivery Shield', description: 'We take on the technical execution risk, absorbing any additional hours needed to fulfill the defined scope.' },
    { icon: 'enterprise' as const, title: 'Strict QA Benchmarks', description: 'Comprehensive testing checks covering performance, integration speed, and security rules at every stage.' },
    { icon: 'mobile' as const, title: 'Strategic Resource Planning', description: 'Seamlessly coordinate your marketing, sales, and operations teams around firm software delivery dates.' },
  ]
};

const fixedPriceProcessData: InfoGridProps['data'] = {
  label: 'PREDICTABLE OUTCOMES',
  title: 'Why Choose Our Fixed Price Development Model',
  items: [
    {
      icon: '01',
      title: 'Zero Financial Creep',
      description: 'The exact price we agree upon in the contract is the price you pay, protecting your project from surprise overheads.'
    },
    {
      icon: '02',
      title: 'Fully Documented Systems',
      description: 'Receive complete, self-documenting codebases, clear API contracts, and detailed system architecture maps.'
    },
    {
      icon: '03',
      title: 'Agile Milestone Checkpoints',
      description: 'Track development progress and inspect fully operational builds at predetermined, structured milestones.'
    },
    {
      icon: '04',
      title: 'Turnkey Solution Handover',
      description: 'Get a fully functional, production-ready digital product complete with automated deployment scripts.'
    }
  ]
};

const streamlineDescription = [
  { text: "Budget predictability shouldn't mean a ", bold: false },
  { text: "lack of flexibility", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary fixed-price consultation ", bold: true },
  { text: "to help you define a ", bold: false },
  { text: "clear project roadmap ", bold: true },
  { text: "that ensures quality and delivery within your specific budget constraints.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Scope Definition',
    description: 'Detailed documentation of functional and technical requirements.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Milestone Tracking',
    description: 'Clear progress updates tied to pre-defined project stages.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Fixed Timelines',
    description: 'Commitment to specific start and end dates for your project.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Turnkey Delivery',
    description: 'A complete, ready-to-use product delivered on the agreed date.'
  }
];

const deliverMVPData = {
  label: "FIXED PRICE EXCELLENCE",
  title: "Our Commitment to Deliver Your Fixed Price Project in",
  accentText: "3-5 months?",
  description: "Leapsofts is a premier fixed-price software engineering and product delivery partner. By combining fully integrated automated tooling, certified technical scoping experts, and dedicated agile engineering pods, we scoping, build, and deliver high-performance custom platforms within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Strict Software Scoping.",
      description: "Conducting exhaustive upfront discovery phases to map every application flow, database relation, and system connection."
    },
    {
      title: "Budget & Scope Shield.",
      description: "Absorbing technical execution risks by committing to a rigid contract price with zero hidden cost surprises."
    },
    {
      title: "Firm Release deadlines.",
      description: "Structuring development sprints around guaranteed milestone delivery dates to launch on schedule."
    },
    {
      title: "Turnkey Solution Handover.",
      description: "Delivering fully compiled production builds, self-documenting codebases, and automated cloud script runners."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & SCOPE DEFINITION",
    title: "Requirements Gathering & Discovery Blueprint",
    description: "We run active stakeholder workshops to isolate core business objectives and target user demographics.",
    features: [
      {
        title: "Requirements Gathering Workshops",
        description: "Run active stakeholder sessions to map primary business actions, API connections, and systems."
      },
      {
        title: "Friction & Technical Debt Reviews",
        description: "Analyze manual data entry steps, security rules, and legacy dependencies constraints."
      },
      {
        title: "SRS Specification Blueprint",
        description: "Deliver a detailed Software Requirement Specification (SRS) doc detailing all database flows."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DESIGN & ARCHITECTURE Blueprint",
    title: "Database Schemas & System Architecture Designs",
    description: "Designing optimized entity-relationship models (ERD) and secure data flow paths.",
    features: [
      {
        title: "Modular IaC Codebases",
        description: "Write repeatable cloud infrastructure scripts to build isolated, secure developer staging layers."
      },
      {
        title: "VPC & VNet Topologies",
        description: "Configure secure public and private subnets, transit tunnels, gateways, and load balancers."
      },
      {
        title: "Key Protection & Security Guides",
        description: "Enforce granular user access boundaries, activate KMS encrypt tags, and write access audit logs."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SYSTEM DEPLOYMENT",
    title: "Milestone-Based Sprints & Stress Runs",
    description: "Executing rapid development sprints with fully verified, functional product releases at every milestone.",
    features: [
      {
        title: "Milestone Product Releases",
        description: "Compile and release fully operational test modules at predetermined checkpoints."
      },
      {
        title: "Automated Build Compilation",
        description: "Integrate linters, package builders, and automated testing hooks inside GitLab/GitHub runners."
      },
      {
        title: "Transaction Stress Audits",
        description: "Execute automated stress routines via k6 to confirm microservice capacity bounds under heavy loads."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & HANDOVER",
    title: "Telemetry Ingestion & SLA-Driven Support",
    description: "Handing over the production build complete with automated CloudFormation or Bicep scripts.",
    features: [
      {
        title: "Prometheus & Grafana Ingestion",
        description: "Orchestrate central dashboard telemetries, configure query speeds monitors, and enable slack alerts."
      },
      {
        title: "SLA-Driven L2/L3 Support",
        description: "Provide continuous support coverage sweeps, security patching updates, and system scaling reviews."
      },
      {
        title: "Instance Schedule Optimization",
        description: "Deploy automated cron scripts to shut down inactive clusters and auto-scale active transaction pools."
      }
    ]
  }
];

const phaseLabelsDefault = [
  'Requirement Discovery',
  'Solution Design',
  'Product Development',
  'Continuous Support'
];

const title = "Fixed Price Software Development, Precise Scoping & Guaranteed Milestones";
const subtitle = "";

const introDescription = [
  { text: "We deliver elite software development services backed by ", bold: false },
  { text: "guaranteed fixed-price budgets and precise scopes", bold: true },
  { text: ". By conducting exhaustive early technical discovery phases, authoring complete software requirement specifications (SRS), and mapping exact architectural modules before active coding, we protect your organization from budget creep and ensure turnkey delivery on strict timelines.", bold: false }
];

const FixedPrice: React.FC = () => {
  return (
    <>
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
      <InfoGrid data={fixedPriceProcessData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="project execution"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized services to support your fixed-price engagements.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR FIXED PRICE PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default FixedPrice;
