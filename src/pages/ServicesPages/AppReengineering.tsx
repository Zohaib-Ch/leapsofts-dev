import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import laptopImg from "../../assets/about_laptop_3d.png";


const serviceOverviewData = {
  label: "RE-ENGINEERING",
  titleMain: "Modernize Your",
  titleAccent: "Legacy",
  titleEnd: "Systems",
  description: "Leapsofts specializes in transforming outdated applications into modern, high-performance systems. Our re-engineering process enhances scalability, improves security, and reduces maintenance costs while preserving your core business logic.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'OUR SERVICES',
  titleAccent: 'Modernization',
  titleMain: 'Revamp Services',
  description: 'Comprehensive application re-engineering services to modernize your digital infrastructure and drive business growth.',
  items: [
    { icon: 'legacy', title: 'Legacy System Update', description: 'Elevate aging systems to new, streamlined platforms.' },
    { icon: 'enterprise', title: 'DevOps Integration', description: 'Streamline your software delivery with efficient DevOps practices.' },
    { icon: 'thirdParty', title: 'Platform Upgrades', description: 'Modernize your platforms to align with cutting edge technologies.' },
    { icon: 'product', title: 'Code Optimization', description: 'Optimize your codebase for better performance and easier maintenance.' },
    { icon: 'saas', title: 'UI/UX Redesign', description: 'Redesign your user interface for an improved user experience.' },
    { icon: 'enterprise', title: 'System Consolidation', description: 'Merge separate systems to improve operational efficiency.' },
  ]
}
const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Re-Engineer Now',
  items: [
    {
      icon: '01',
      title: 'Cost Reduction',
      description: 'Lower maintenance and operational costs by moving to modern infrastructures.'
    },
    {
      icon: '02',
      title: 'Scale & Performance',
      description: 'Handle increased loads with modern cloud-native architectures.'
    },
    {
      icon: '03',
      title: 'Security Compliance',
      description: 'Ensure your systems meet the latest security standards and regulations.'
    },
    {
      icon: '04',
      title: 'Better UX',
      description: 'Provide your users with a fast, responsive, and intuitive experience.'
    }
  ]
}

const streamlineDescription = [
  { text: "Legacy systems shouldn't hold back your ", bold: false },
  { text: "business growth", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary system audit session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "modernization opportunities ", bold: true },
  { text: "that deliver immediate ROI and long-term stability.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Cloud Migration',
    description: 'Transitioning legacy workloads to AWS, Azure, or GCP seamlessly.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Microservices',
    description: 'Breaking down monoliths into manageable, scalable micro-services.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Database Refactoring',
    description: 'Migrating and optimizing your data for better speed and reliability.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'API Modernization',
    description: 'Building robust APIs to enable modern integrations and mobile access.'
  }
];

const deliverMVPData = {
  label: "REVAMP EXCELLENCE",
  title: "Committed to",
  accentText: "System Success",
  description: "Leapsofts provides high-performing re-engineering teams that are fully committed to your project's success. We focus on transparency, communication, and technical rigor.",
  items: [
    {
      title: "Analysis & Planning.",
      description: "Deep dive into your existing code to ensure a smooth transition."
    },
    {
      title: "Zero Downtime.",
      description: "Strategies to ensure your business stays running during the update."
    },
    {
      title: "Future-Proofing.",
      description: "Using technologies that ensure your system stays relevant for years."
    },
    {
      title: "Expert Execution.",
      description: "Senior developers with decades of experience in legacy transformation."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: ASSESSMENT",
    title: "Codebase & Architecture Audit",
    description: "We evaluate your current system to identify bottlenecks and risks.",
    features: ["Performance Profiling", "Security Vulnerability Scan", "Technical Debt Analysis"],
  },
  {
    id: 2,
    phase: "PHASE 2: DESIGN",
    title: "Modern Blueprinting",
    description: "Creating a roadmap for transformation without breaking core logic.",
    features: ["New Architecture Design", "Migration Strategy", "Component Mapping"],
  },
  {
    id: 3,
    phase: "PHASE 3: DEVELOPMENT",
    title: "Iterative Modernization",
    description: "Rewriting and refactoring code in modular stages.",
    features: ["Incremental Rollouts", "Refactoring & Testing", "Integration Checks"],
  },
  {
    id: 4,
    phase: "PHASE 4: DEPLOYMENT",
    title: "Final Transition & Support",
    description: "Final switch to the new system with ongoing maintenance.",
    features: ["Live Production Switch", "User Training", "Post-Launch Monitoring"],
  },
];

const phaseLabelsDefault = ["ASSESSMENT", "DESIGN", "DEVELOPMENT", "DEPLOYMENT"];

const AppReengineering: React.FC = () => {
  return (
    <>
      <IntroComponent title="Revamp Your Legacy Systems" description="Upgrade and enhance your old applications to triple performance efficiency and cut costs." />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <EmergingTech data={ourServicesData} />
      <InfoGrid data={reEngineeringProcessData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="System "
        titleAccent="Audit"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core Revamp Skills'
        description='Our teams bring deep expertise in translating legacy code to modern stacks.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR RE-ENGINEERING PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default AppReengineering