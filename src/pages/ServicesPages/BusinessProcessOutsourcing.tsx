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
  label: "BPO SOLUTIONS",
  titleMain: "Optimize Your",
  titleAccent: "Business",
  titleEnd: "Operations",
  description: "Leapsofts provides comprehensive BPO services that allow you to focus on your core business while we handle the rest. Our technology-driven approach ensures high efficiency, cost-effectiveness, and superior quality across all outsourced processes.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'BPO SERVICES',
  titleAccent: 'Scale',
  titleMain: 'Your Business',
  description:
    'Scalable BPO services designed to enhance efficiency, improve customer experience, and support business growth.',
  items: [
    { icon: 'enterprise', title: 'Customer Experience', description: 'Manage customer interactions across phone, email, and live chat seamlessly.' },
    { icon: 'enterprise', title: 'Technical Support', description: 'Deliver timely and effective technical support to resolve challenges.' },
    { icon: 'enterprise', title: 'Back-Office Operations', description: 'Improve efficiency with expert data entry and administrative support.' },
    { icon: 'product', title: 'Managed IT Services', description: 'Ensure optimal performance of servers, networks, and systems.' },
    { icon: 'saas', title: 'Quality Assurance', description: 'Rigorous testing and quality checks for your outsourced processes.' },
    { icon: 'thirdParty', title: 'Cloud Management', description: 'Secure and efficient cloud-based data and application management.' },
  ]
};
const processData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Outsource to Us',
  items: [
    {
      icon: '01',
      title: 'Cost Efficiency',
      description: 'Significantly reduce overhead costs while maintaining high-quality output.'
    },
    {
      icon: '02',
      title: 'Operational Focus',
      description: 'Free up your internal resources to focus on core strategic initiatives.'
    },
    {
      icon: '03',
      title: 'Access to Talent',
      description: 'Gain immediate access to a pool of pre-vetted, highly skilled professionals.'
    },
    {
      icon: '04',
      title: 'Scalable Growth',
      description: 'Easily scale your operations up or down based on market demands.'
    }
  ]
};

const streamlineDescription = [
  { text: "Scaling your operations shouldn't be a ", bold: false },
  { text: "bottleneck ", bold: true },
  { text: "for your business. Leapsofts offers a ", bold: false },
  { text: "complimentary BPO strategy session ", bold: true },
  { text: "to help you design an ", bold: false },
  { text: "efficient delivery model ", bold: true },
  { text: "that ensures seamless growth and operational excellence.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Project Management',
    description: 'Dedicated managers to ensure timelines and quality standards are met.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Tech Integration',
    description: 'Implementing modern tools to automate and track outsourced tasks.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Customized Teams',
    description: 'Teams hand-picked to match your specific industry and technical needs.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Data Security',
    description: 'Rigorous protocols to ensure your sensitive business data stays protected.'
  }
];

const deliverMVPData = {
  label: "BPO EXCELLENCE",
  title: "Committed to",
  accentText: "Operational Success",
  description: "Leapsofts provides high-performing BPO teams that are fully committed to your project's success. We focus on transparency, communication, and operational rigor.",
  items: [
    {
      title: "Performance Tracking.",
      description: "Detailed metrics and reporting to ensure complete visibility into operations."
    },
    {
      title: "Seamless Transition.",
      description: "Structured onboarding to ensure our team integrates with your workflow."
    },
    {
      title: "Continuous Improvement.",
      description: "Regular feedback loops to optimize processes and increase efficiency."
    },
    {
      title: "Global Standards.",
      description: "Adhering to international quality standards for all outsourced services."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: ASSESSMENT",
    title: "Process Identification",
    description: "We analyze your current operations to identify ideal outsourcing candidates.",
    features: ["Workflow Mapping", "Cost-Benefit Analysis", "Risk Assessment"],
  },
  {
    id: 2,
    phase: "PHASE 2: SETUP",
    title: "Team & Tool Integration",
    description: "Onboarding the right talent and setting up the communication infrastructure.",
    features: ["Talent Sourcing", "SOP Development", "Tool Integration"],
  },
  {
    id: 3,
    phase: "PHASE 3: EXECUTION",
    title: "Service Delivery",
    description: "Official launch of outsourced operations with continuous management.",
    features: ["Live Operations", "Quality Monitoring", "Performance Reporting"],
  },
  {
    id: 4,
    phase: "PHASE 4: OPTIMIZATION",
    title: "Continuous Refinement",
    description: "Ongoing process improvements to drive higher value and efficiency.",
    features: ["Process Automation", "Feedback Integration", "Strategic Reviews"],
  },
];

const phaseLabelsDefault = ["ASSESSMENT", "SETUP", "EXECUTION", "OPTIMIZATION"];


const BusinessProcessOutsourcing: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Smart Operations, Results-Driven Approach."
        description="Optimize your business operations with intelligence through Leapsofts."
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <InfoGrid data={processData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Operations "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core BPO Skills'
        description='We deliver expert services across various business process domains.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR BPO PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default BusinessProcessOutsourcing;
