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
  label: "PRODUCT STRATEGY",
  titleMain: "Master Your",
  titleAccent: "Market",
  titleEnd: "Presence",
  description: "Leapsofts provides a clear architectural and strategic blueprint for your product’s journey. Our development strategy focuses on market leadership, feature prioritization, and scalable growth from day one.",
  imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
  label: 'STRATEGIC PILLARS',
  title: 'Built for Success',
  items: [
    {
      icon: '01',
      title: 'Market Analysis',
      description: 'Identify trends, customer needs, and competitive opportunities to gain an edge.'
    },
    {
      icon: '02',
      title: 'Actionable Roadmaps',
      description: 'Clear milestones that guide your product from initial concept to official launch.'
    },
    {
      icon: '03',
      title: 'Feature Prioritization',
      description: 'Focus on high-value features that align with your business goals and user needs.'
    },
    {
      icon: '04',
      title: 'Iterative Design',
      description: 'Prototype and test ideas early to gather feedback and refine your product vision.'
    }
  ]
};
const ourServicesData: EmergingTechProps['data'] = {
  label: 'CORE STRATEGY',
  titleAccent: 'Impactful',
  titleMain: 'Product Design',
  description:
    'Our product development approach drives innovation, accelerates delivery, and ensures long-term business growth.',
  items: [
    { icon: 'product', title: 'Cultivate Innovation', description: 'Embed creative problem-solving at every stage of the development process.' },
    { icon: 'enterprise', title: 'Time-to-Market', description: 'Leverage agile frameworks to launch your product efficiently and competitively.' },
    { icon: 'hipaa', title: 'Scalable Growth', description: 'Build products designed for continuous evolution and long-term profitability.' },
    { icon: 'legacy', title: 'Tech Stack Strategy', description: 'Selecting the right tools and architectures to support your product’s future.' },
    { icon: 'mobile', title: 'User Experience', description: 'Ensuring your strategy is rooted in delivering exceptional value to your end-users.' },
    { icon: 'saas', title: 'Risk Management', description: 'Proactively identifying and mitigating potential technical and market risks.' },
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
  title: "Committed to",
  accentText: "Product Growth",
  description: "Leapsofts provides elite product strategists who are fully committed to your project's success. We focus on market fit, scalability, and technical excellence.",
  items: [
    {
      title: "Data-Driven Decisions.",
      description: "Using market research and user data to guide your product's direction."
    },
    {
      title: "Agile Flexibility.",
      description: "A strategy that adapts to market changes and user feedback rapidly."
    },
    {
      title: "Technical Foresight.",
      description: "Selecting technologies that support your product’s long-term evolution."
    },
    {
      title: "Value Focused.",
      description: "Ensuring every feature adds real value to your business and users."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: ANALYSIS",
    title: "Market & User Research",
    description: "We dive deep into your target market and user needs to find opportunities.",
    features: ["Competitive Audits", "User Persona Profiling", "Trend Analysis"],
  },
  {
    id: 2,
    phase: "PHASE 2: DEFINITION",
    title: "Value Proposition",
    description: "Defining what makes your product unique and how it will succeed.",
    features: ["Core Feature Mapping", "Revenue Model Design", "Success Metrics Setup"],
  },
  {
    id: 3,
    phase: "PHASE 3: BLUEPRINTING",
    title: "Development Roadmap",
    description: "Creating the technical and business plan for project execution.",
    features: ["MVP Definition", "Tech Architecture Design", "Timeline & Budgeting"],
  },
  {
    id: 4,
    phase: "PHASE 4: EXECUTION",
    title: "Strategic Oversight",
    description: "Ongoing guidance to ensure development stays aligned with the strategy.",
    features: ["Agile Management", "Feedback Integration", "GTM Launch Support"],
  },
];

const phaseLabelsDefault = ["ANALYSIS", "DEFINITION", "BLUEPRINTING", "EXECUTION"];

const ProductDevelopmentStrategy: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Master Your Market Presence"
        description="Our product development strategy service provides a clear blueprint, steering your product towards market leadership."
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
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Product "
        titleAccent="Strategy"
        titleEnd=" Session"
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
    </>
  );
};

export default ProductDevelopmentStrategy;
