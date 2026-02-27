import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import laptopImg from "../../assets/about_laptop_3d.png";

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: TEAM ALIGNMENT & DISCOVERY",
    title: "Requirement Understanding & Team Formation",
    description: "We align business objectives with the right talent by understanding scope, goals, and technical needs.",
    features: [
      "Business & Technical Requirement Analysis",
      "Role Definition & Skill Mapping",
      "Dedicated Team Composition",
    ],
  },
  {
    id: 2,
    phase: "PHASE 2: PROJECT INITIATION",
    title: "Onboarding & Execution Planning",
    description: "Seamless onboarding of the dedicated team with clear workflows, tools, and delivery expectations.",
    features: [
      "Knowledge Transfer & Environment Setup",
      "Process & Communication Framework",
      "Milestone & Delivery Planning",
    ],
  },
  {
    id: 3,
    phase: "PHASE 3: DELIVERY & COLLABORATION",
    title: "Agile Execution & Team Coordination",
    description: "Our dedicated team works as an extension of yours, delivering consistently through agile practices.",
    features: [
      "Sprint-Based Development",
      "Continuous Collaboration & Reporting",
      "Quality Assurance & Performance Tracking",
    ],
  },
  {
    id: 4,
    phase: "PHASE 4: SCALING & CONTINUITY",
    title: "Optimization, Support & Team Scaling",
    description: "We ensure long-term success with ongoing optimization, scalability, and operational stability.",
    features: [
      "Team Scaling & Resource Optimization",
      "Ongoing Support & Maintenance",
      "Process Improvement & Long-Term Engagement",
    ],
  },
];

const phaseLabelsDefault = [
  "TEAM ALIGNMENT",
  "PROJECT INITIATION",
  "DELIVERY & COLLABORATION",
  "SCALING & CONTINUITY",
];

const serviceOverviewData = {
  label: "DEDICATED TEAMS",
  titleMain: "Scale Your",
  titleAccent: "Engineering",
  titleEnd: "Capabilities",
  description: "Build your product with a dedicated team of experts that integrates seamlessly into your workflow. Our dedicated teams provide the scalability and specialized skills needed to accelerate development and maintain high-quality standards.",
  imagePath: laptopImg
};

const capabilitiesData: CapabilitySlide[] = [
  {
    id: '1',
    number: '01',
    title: 'Full-Stack Development',
    items: [
      { name: 'Frontend Excellence', description: 'Specialized in building responsive, high-performance user interfaces with React and Next.js.' },
      { name: 'Robust Backend', description: 'Developing scalable architectures using Node.js, Python, and cloud-native services.' },
      { name: 'DevOps & CI/CD', description: 'Automating deployment pipelines for faster and more reliable releases.' }
    ],
    image: capabilitiesImg
  },
  {
    id: '2',
    number: '02',
    title: 'Specialized Expertise',
    items: [
      { name: 'AI & Data Science', description: 'Integrating intelligent features and data-driven insights into your products.' },
      { name: 'Cybersecurity', description: 'Ensuring your application is secure and compliant with industry standards.' },
      { name: 'Cloud Engineering', description: 'Optimizing infrastructure for performance, cost, and reliability.' }
    ],
    image: platformImg
  }
];

const infoGridData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Choose Dedicated Teams',
  items: [
    {
      icon: '01',
      title: 'Immediate Onboarding',
      description: 'Quickly scale your team with pre-vetted experts ready to contribute from day one.'
    },
    {
      icon: '02',
      title: 'Technical Excellence',
      description: 'Access top-tier talent with deep expertise in the latest technologies and best practices.'
    },
    {
      icon: '03',
      title: 'Seamless Integration',
      description: 'Our teams follow your processes and tools, acting as a natural extension of your internal staff.'
    },
    {
      icon: '04',
      title: 'Cost-Effective Scaling',
      description: 'Reduce overhead costs associated with hiring and training while maintaining high productivity.'
    }
  ]
};

const streamlineDescription = [
  { text: "Need to scale your ", bold: false },
  { text: "technical capacity ", bold: true },
  { text: "without the hiring headache? Leapsofts offers a ", bold: false },
  { text: "complimentary team strategy session ", bold: true },
  { text: "to help you identify the right roles and ", bold: false },
  { text: "expert talent ", bold: true },
  { text: "required to meet your project milestones on time and within budget.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Project Management',
    description: 'Dedicated Scrum Masters to ensure agile workflows and consistent delivery.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Quality Engineering',
    description: 'Integrated QA experts to maintain high code quality and product reliability.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Product Strategy',
    description: 'Working closely with stakeholders to align technical execution with business goals.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Continuous Support',
    description: 'Ongoing technical support and maintenance to ensure long-term stability.'
  }
];

const deliverMVPData = {
  label: "TEAM EXCELLENCE",
  title: "Partnering for",
  accentText: "Technical Success",
  description: "Leapsofts provides high-performing dedicated teams that are fully committed to your project's success. We focus on transparency, communication, and technical rigor to deliver results that exceed expectations.",
  items: [
    {
      title: "Crystal-Clear Communication.",
      description: "Regular updates, stand-ups, and documentation ensure everyone is aligned and informed."
    },
    {
      title: "Tailored Team Structure.",
      description: "We hand-pick experts whose skills and experience perfectly match your project requirements."
    },
    {
      title: "Agile Adaptability.",
      description: "Our teams are trained in agile methodologies, allowing for rapid pivots and iterative improvements."
    },
    {
      title: "Long-Term Partnership.",
      description: "We don't just provide resources; we build long-term relationships focused on sustainable growth."
    }
  ]
};




const DedicatedTeams: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Where Elite Tech Talent Thrives"
        description="Tech innovators adore our services and for good reason. We provide them with the finest tech talent in the industry."
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
        title="Dedicated Team Capabilities"
        slides={capabilitiesData}
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={infoGridData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Team "
        titleAccent="Scaling"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core Services'
        description='Our dedicated teams offer a full spectrum of engineering and management services to support your product lifecycle.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR DEDICATED TEAMS PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default DedicatedTeams;
