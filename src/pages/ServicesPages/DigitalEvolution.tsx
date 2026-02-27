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
  label: "DIGITAL EVOLUTION",
  titleMain: "Evolve Your",
  titleAccent: "Digital",
  titleEnd: "Future",
  description: "Leapsofts drives digital transformation that goes beyond technology. We help you evolve your business models, enhance operational efficiency, and unlock new growth opportunities through strategic digital adoption and innovation.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'EVOLUTION SERVICES',
  titleAccent: 'Digital',
  titleMain: 'Transformation',
  description: 'We integrate cutting-edge digital solutions to modernize your workflows and enhance customer engagement.',
  items: [
    { icon: 'enterprise', title: 'Automation Strategy', description: 'Streamline repetitive tasks with intelligent digital workflows.' },
    { icon: 'enterprise', title: 'Data Analytics', description: 'Leverage big data for actionable business insights and predictions.' },
    { icon: 'enterprise', title: 'Cloud Integration', description: 'Adopt flexible cloud solutions that scale with your growth.' },
    { icon: 'product', title: 'Customer Experience', description: 'Personalize digital interactions to boost user satisfaction.' },
    { icon: 'saas', title: 'Agile Business Models', description: 'Respond rapidly to market changes with adaptable digital structures.' },
    { icon: 'thirdParty', title: 'Security & Compliance', description: 'Protect your digital assets with robust governance practices.' },
  ]
};

const digitalEvolutionProcessData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Evolve Digitally',
  items: [
    {
      icon: '01',
      title: 'Innovation',
      description: 'Stay ahead of the competition by continuously integrating the latest tech.'
    },
    {
      icon: '02',
      title: 'Productivity',
      description: 'Boost output and reduce costs through seamless digital workflows.'
    },
    {
      icon: '03',
      title: 'Insights',
      description: 'Make informed decisions based on deep data-driven customer analysis.'
    },
    {
      icon: '04',
      title: 'Sustainability',
      description: 'Build long-term business resilience with responsible digital innovation.'
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
  title: "Committed to",
  accentText: "Digital Success",
  description: "Leapsofts provides strategic digital advisors who are fully committed to your project's success. We focus on innovation, efficiency, and long-term results.",
  items: [
    {
      title: "Holistic Approach.",
      description: "Transforming every layer of your business for the digital age."
    },
    {
      title: "Future-Ready Tech.",
      description: "Selecting technologies that ensure longevity and scalability."
    },
    {
      title: "Data-Led Progress.",
      description: "Using metrics and analysis to guide your evolution journey."
    },
    {
      title: "Ongoing Partnership.",
      description: "We don't just transform; we help you continuously evolve."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: DISCOVERY",
    title: "Current State Analysis",
    description: "We audit your existing digital landscape and business objectives.",
    features: ["Digital Maturity Audit", "Goal Alignment Workshops", "Gap Analysis"],
  },
  {
    id: 2,
    phase: "PHASE 2: STRATEGY",
    title: "Evolution Blueprint",
    description: "Designing a phased roadmap for high-impact digital adoption.",
    features: ["Project Prioritization", "Tech Stack Selection", "ROI Forecasting"],
  },
  {
    id: 3,
    phase: "PHASE 3: EXECUTION",
    title: "Implementation & Integration",
    description: "Executing the digital updates and integrating new workflows.",
    features: ["Modular Rollouts", "Legacy System Updates", "System Integrations"],
  },
  {
    id: 4,
    phase: "PHASE 4: EXPANSION",
    title: "Scaling & Optimization",
    description: "Continuously improving and scaling your new digital capabilities.",
    features: ["Performance Review", "Continuous Innovation", "Strategic Expansion"],
  },
];

const phaseLabelsDefault = ["DISCOVERY", "STRATEGY", "EXECUTION", "EXPANSION"];


const DigitalEvolution: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Digital Evolution: Evolve, Enhance & Excel"
        description="Evolve your organization for the modern digital era with Leapsofts."
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <EmergingTech data={emergingTechData} />
      <InfoGrid data={digitalEvolutionProcessData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Evolution "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Services'
        description='We deliver specialized digital services to support your entire organization.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR DIGITAL EVOLUTION PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default DigitalEvolution;
