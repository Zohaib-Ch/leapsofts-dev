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
  label: "WEB DEVELOPMENT",
  titleMain: "Building Scalable",
  titleAccent: "Modern",
  titleEnd: "Web Applications",
  description: "Leapsofts designs and develops high-performance web applications tailored to your business needs. From complex enterprise systems to innovative SaaS platforms, we leverage the latest technologies to ensure your web presence is secure, scalable, and user-centric.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'EMERGING TECHNOLOGIES',
  titleAccent: 'Web Innovation',
  titleMain: 'Tools We Use',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'User Experience Craftsmanship',
      description: 'LeapSofts deep rooted knowledge in UI/UX design and frontend development enables us to forge exceptional user experiences.'
    },
    {
      icon: 'saas' as const,
      title: ' Frontend Innovation',
      description: 'LeapSofts provides comprehensive frontend development, focusing on creating intuitive, user focused web and solutions.'
    },
    {
      icon: 'hipaa' as const,
      title: 'Backend Engineering',
      description: 'LeapSofts specializes in creating backend systems that are adaptable, scalable, and straightforward to manage.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Ecommerce Website Creation',
      description: 'LeapSofts excels in developing ecommerce web applications, encompassing online storefronts and payment integrations.'
    },
    {
      icon: 'mobile' as const,
      title: 'Web Application Support',
      description: 'Postlaunch, LeapSofts offers maintenance and update services for web apps, addressing bug fixes and performance.'
    },
    {
      icon: 'legacy' as const,
      title: 'Web App Quality Assurance',
      description: 'LeapSofts conducts thorough testing of web applications prior to release, ensuring they are free from defects.'
    },
  ]
}

const infoGridData: InfoGridProps['data'] = {
  label: 'WHY US',
  title: 'Value of Modern Web Apps',
  items: [
    {
      icon: '01',
      title: 'Global Accessibility',
      description: 'Reach your users anywhere with web solutions optimized for all devices and browsers.'
    },
    {
      icon: '02',
      title: 'Real-time Updates',
      description: 'Deploy updates seamlessly without requiring users to download new versions.'
    },
    {
      icon: '03',
      title: 'Scalable Infrastructure',
      description: 'Built on cloud-native architectures that grow as your user base expands.'
    },
    {
      icon: '04',
      title: 'Cost Efficiency',
      description: 'Reduce operational overhead with efficient development cycles and managed services.'
    }
  ]
};

const streamlineDescription = [
  { text: "Transform your ", bold: false },
  { text: "digital vision ", bold: true },
  { text: "into reality. Leapsofts offers a ", bold: false },
  { text: "complimentary web strategy session ", bold: true },
  { text: "to help you design a ", bold: false },
  { text: "modern architecture ", bold: true },
  { text: "that ensures long-term success and rapid market entry.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'React & Next.js',
    description: 'Building fast, SEO-friendly frontends with the most popular modern frameworks.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Node.js & Python',
    description: 'Scalable backend services designed for high availability and performance.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'PWA Development',
    description: 'Creating progressive web apps that offer app-like experiences in the browser.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Microservices',
    description: 'Architecting modular systems that allow for independent scaling and maintenance.'
  }
];

const deliverMVPData = {
  label: "WEB EXCELLENCE",
  title: "Committed to",
  accentText: "Seamless Execution",
  description: "Leapsofts delivers high-performing web applications that are fully committed to your project's success. We focus on transparency, communication, and technical rigor to deliver results that exceed expectations.",
  items: [
    {
      title: "Agile Development.",
      description: "Iterative sprints focused on delivering functional value early and often."
    },
    {
      title: "Security First.",
      description: "Implementing industry-standard security protocols to protect your data and users."
    },
    {
      title: "UX-Driven Design.",
      description: "Every feature is designed with the end-user in mind to ensure maximum engagement."
    },
    {
      title: "Post-Launch Support.",
      description: "Continuous monitoring and updates to keep your application running at peak performance."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: REQUIREMENT ANALYSIS",
    title: "Understanding Business Needs",
    description: "We clarify objectives, document requirements, and align expectations before execution.",
    features: [
      "Business & Technical Requirement Gathering",
      "Stakeholder Discussions",
      "Initial Design & Roadmap Planning",
    ],
  },
  {
    id: 2,
    phase: "PHASE 2: DISCOVERY",
    title: "Blueprinting a Scalable & Secure Solution",
    description: "Transform requirements into a scalable, user-focused solution blueprint.",
    features: [
      "Software Requirements Specification (SRS)",
      "Technical Architecture Design",
      "Risk Management & Mitigation Strategy",
    ],
  },
  {
    id: 3,
    phase: "PHASE 3: DEVELOPMENT & EVALUATION",
    title: "Agile Development & Quality Assurance",
    description: "We build, test, and refine the product through iterative development cycles.",
    features: [
      "Frontend & Backend Engineering",
      "Agile SCRUM with Weekly Reviews",
      "QA Testing & Performance Validation",
    ],
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS SUPPORT",
    title: "Launch, Support & Maintenance",
    description: "Ensuring smooth deployment with long-term operational reliability.",
    features: [
      "Production Deployment & Rollout",
      "SLA-Based Operational Support",
      "Ongoing Maintenance & Enhancements",
    ],
  },
];

const phaseLabelsDefault = [
  "REQUIREMENT ANALYSIS",
  "SOLUTION DESIGN",
  "DEVELOPMENT & EVALUATION",
  "CONTINUOUS SUPPORT",
];

const WebAppDevelopment: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Advanced Web Applications"
        description="Scalable, secure, and modern web solutions designed to propel your business forward."
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
        titleMain="Web "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core Web Capabilities'
        description='We utilize industry-leading tools and architectural patterns to deliver robust web applications.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR WEB APP DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default WebAppDevelopment