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
  label: "IDEATION WORKSHOP",
  titleMain: "Crystallize Your",
  titleAccent: "Vision",
  titleEnd: "into Reality",
  description: "Leapsofts’s Ideation Workshop is a fast-paced, collaborative session designed to help you define your product’s core purpose, identify key user needs, and create a high-level roadmap for development. We turn abstract ideas into actionable project plans.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'WORKSHOP FOCUS',
  titleAccent: 'Collaborative',
  titleMain: 'Ideation',
  description:
    'Our discovery workshops are designed to unlock creativity, validate ideas, and define a clear path from concept to execution.',
  items: [
    { icon: 'product', title: 'Creative Brainstorming', description: 'Foster an environment where ideas are encouraged and refined.' },
    { icon: 'enterprise', title: 'Expert Facilitation', description: 'Guided sessions to harness collective intelligence and focus.' },
    { icon: 'product', title: 'Tailored Workshops', description: 'Workshops designed specifically for your industry and goals.' },
    { icon: 'hipaa', title: 'Concept Validation', description: 'Verify the technical and market feasibility of your ideas.' },
    { icon: 'enterprise', title: 'Iterative Design', description: 'Rapidly sketch and refine user flows and interfaces.' },
    { icon: 'product', title: 'Strategic Roadmap', description: 'Deliver a clear plan to guide your project from concept to launch.' },
  ]
};

const ideationProcessData: InfoGridProps['data'] = {
  label: 'WORKSHOP OUTCOMES',
  title: 'What You Gain',
  items: [
    {
      icon: '01',
      title: 'Concept Clarity',
      description: 'A well-defined core value proposition for your product.'
    },
    {
      icon: '02',
      title: 'Technical Feasibility',
      description: 'Initial assessment of the technologies and architecture needed.'
    },
    {
      icon: '03',
      title: 'User Personas',
      description: 'Clear understanding of who you are building for and why.'
    },
    {
      icon: '04',
      title: 'Actionable Roadmap',
      description: 'A phased plan for development, testing, and launch.'
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
  title: "Committed to",
  accentText: "Creative Success",
  description: "Leapsofts provides expert facilitators and strategists who are fully committed to your project's success. We focus on innovation, collaboration, and strategic clarity.",
  items: [
    {
      title: "Open Collaboration.",
      description: "Encouraging a flow of ideas between our experts and your team."
    },
    {
      title: "Expert Insights.",
      description: "Bringing decades of experience in product strategy to your session."
    },
    {
      title: "Structured Approach.",
      description: "Using proven frameworks to move from brainstorming to blueprints."
    },
    {
      title: "Future-Facing.",
      description: "Selecting technologies and strategies that ensure long-term relevance."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: PREPARATION",
    title: "Project Goal Alignment",
    description: "We align on the specific goals and expectations for the workshop.",
    features: ["Stakeholder Interviews", "Market Overview", "Success Criteria Setup"],
  },
  {
    id: 2,
    phase: "PHASE 2: BRAINSTORMING",
    title: "Creative Exploration",
    description: "Intensive sessions to generate and explore wide-ranging ideas.",
    features: ["Design Thinking Exercises", "User Flow Mapping", "Feature Analysis"],
  },
  {
    id: 3,
    phase: "PHASE 3: VALIDATION",
    title: "Refinement & Feasibility",
    description: "Pruning and refining ideas into a viable project concept.",
    features: ["Technical Audit", "MVP Definition", "Resource Estimations"],
  },
  {
    id: 4,
    phase: "PHASE 4: BLUEPRINT",
    title: "Actionable Roadmap",
    description: "Finalizing the delivery plan and post-workshop next steps.",
    features: ["Project Backlog Creation", "Timeline Mapping", "Budget Overview"],
  }
];

const phaseLabelsDefault = ["PREPARATION", "BRAINSTORMING", "VALIDATION", "BLUEPRINT"];



const IdeationWorkshop: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Unleashing Creativity, Shaping Your Vision"
        description="Leapsofts’s Ideation Workshop is your launchpad to crystallize and refine your concepts."
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
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Ideation "
        titleAccent="Strategy"
        titleEnd=" Session"
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
    </>
  );
};

export default IdeationWorkshop;
