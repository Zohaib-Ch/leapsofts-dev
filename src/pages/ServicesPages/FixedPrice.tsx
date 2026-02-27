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
  label: "FIXED PRICE MODEL",
  titleMain: "Transparent &",
  titleAccent: "Predictable",
  titleEnd: "Delivery",
  description: "Leapsofts offers a fixed-price engagement model that provides complete clarity on project scope, timelines, and costs. This model is ideal for well-defined projects where budget predictability and timely delivery are paramount.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'MODEL BENEFITS',
  titleAccent: 'Fixed',
  titleMain: 'Price Advantages',
  description:
    'Discover the key advantages of choosing a fixed-price engagement model with Leapsofts.',
  items: [
    { icon: 'product', title: 'Budget Certainty', description: 'Know your exact project costs upfront with no hidden surprises.' },
    { icon: 'enterprise', title: 'Defined Scope', description: 'Clear documentation of all features and requirements before work begins.' },
    { icon: 'product', title: 'Timely Execution', description: 'Committed deadlines ensure your product launches on schedule.' },
    { icon: 'hipaa', title: 'Risk Mitigation', description: 'We take on the delivery risk, ensuring requirements are met within budget.' },
    { icon: 'enterprise', title: 'Quality Focus', description: 'Rigorous QA processes to ensure the final product meets all standards.' },
    { icon: 'mobile', title: 'Strategic Edge', description: 'Launch faster and more predictably than your competitors.' },
  ]
};
const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: 'PHASE 1: REQUIREMENT DISCOVERY',
    title: 'Align Vision and Scope',
    description:
      'We collaborate with stakeholders to define goals, validate feasibility, and translate ideas into clear, actionable requirements.',
    features: [
      'Stakeholder Workshops & Goal Alignment',
      'Business, Functional & Technical Requirement Gathering',
      'Feasibility Analysis, Risk Assessment & Delivery Roadmap'
    ]
  },
  {
    id: 2,
    phase: 'PHASE 2: SOLUTION DESIGN',
    title: 'Design Scalable Solutions',
    description:
      'We convert requirements into a secure, scalable, and user-focused solution architecture with a strong design foundation.',
    features: [
      'System Architecture, Data Flow & API Design',
      'UI/UX Wireframes, Prototypes & Design Systems',
      'Technology Stack, Cloud Strategy & Security Planning'
    ]
  },
  {
    id: 3,
    phase: 'PHASE 3: PRODUCT DEVELOPMENT',
    title: 'Deliver with Agility',
    description:
      'Using agile methodologies, we build, integrate, and validate the product through continuous testing and iteration.',
    features: [
      'Frontend, Backend & Mobile Development',
      'Agile SCRUM, CI/CD Pipelines & System Integrations',
      'QA Testing, UAT Support, Performance & Security Validation'
    ]
  },
  {
    id: 4,
    phase: 'PHASE 4: CONTINUOUS SUPPORT',
    title: 'Operate and Evolve',
    description:
      'We ensure smooth deployment, reliable operations, and continuous optimization backed by SLA-driven support.',
    features: [
      'Production Deployment & Release Management',
      'SLA-Based L2/L3 Support, Monitoring & Incident Handling',
      'Ongoing Maintenance, Optimization & Feature Enhancements'
    ]
  }
];

const phaseLabelsDefault = [
  'Requirement Discovery',
  'Solution Design',
  'Product Development',
  'Continuous Support'
];
const fixedPriceProcessData: InfoGridProps['data'] = {
  label: 'WHY CHOOSE FIXED',
  title: 'Predictability for Your Business',
  items: [
    {
      icon: '01',
      title: 'No Hidden Costs',
      description: 'The price we agree on is the price you pay, period.'
    },
    {
      icon: '02',
      title: 'Clear Deliverables',
      description: 'You get exactly what is outlined in the project scope.'
    },
    {
      icon: '03',
      title: 'Resource Planning',
      description: 'Easily plan your internal resources around fixed milestones.'
    },
    {
      icon: '04',
      title: 'Project Accountability',
      description: 'We are fully accountable for delivering the defined scope on time.'
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
  title: "Committed to",
  accentText: "Predictable Delivery",
  description: "Leapsofts provides dedicated project teams that are fully committed to your project's success. We focus on transparency, adherence to scope, and technical rigor.",
  items: [
    {
      title: "Strict Scoping.",
      description: "Ensuring every detail is captured before the project starts."
    },
    {
      title: "Transparent Pricing.",
      description: "Complete clarity on costs with no hidden fees or upgrades."
    },
    {
      title: "Quality Benchmarks.",
      description: "Hitting specific performance and security standards at every milestone."
    },
    {
      title: "Experienced Management.",
      description: "Senior PMs to ensure the project stays on track and within budget."
    }
  ]
};



const FixedPrice: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Predictable Development, Exceptional Results"
        description="Get high-quality software development with fixed-price predictability."
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <EmergingTech data={ourServicesData} />
      <InfoGrid data={fixedPriceProcessData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Project "
        titleAccent="Discovery"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized services to support your fixed-price engagements.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR FIXED PRICE PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default FixedPrice;
