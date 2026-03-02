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
  label: "SERVICENOW SOLUTIONS",
  titleMain: "Revolutionize Your",
  titleAccent: "IT",
  titleEnd: "Operations",
  description: "Leapsofts provides expert ServiceNow implementation and optimization services to help you unify your IT operations, automate manual workflows, and deliver exceptional service quality across your entire organization.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'SERVICENOW SERVICES',
  titleAccent: 'Digital',
  titleMain: 'Workflows',
  description:
    'We specialize in expanding the reach of ServiceNow across your enterprise, from IT to HR and Customer Service.',
  items: [
    { icon: 'enterprise', title: 'IT Service Management', description: 'Modernize your IT service delivery with automated incident and change management.' },
    { icon: 'enterprise', title: 'IT Operations Management', description: 'Gain visibility into your infrastructure and proactively manage health and risk.' },
    { icon: 'enterprise', title: 'HR Service Delivery', description: 'Simplify employee interactions and automate HR lifecycle processes.' },
    { icon: 'enterprise', title: 'Security Operations', description: 'Unify your security tools and automate incident response and vulnerability management.' },
    { icon: 'enterprise', title: 'GRC & Risk', description: 'Automate governance, risk, and compliance workflows to ensure regulatory readiness.' },
    { icon: 'enterprise', title: 'Customer Service Mgmt', description: 'Connect customer service with other departments to resolve issues faster.' },
  ]
};

const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Maximize Your ServiceNow ROI',
  items: [
    {
      icon: '01',
      title: 'Unified Platform',
      description: 'Break down silos with a single system of action for all workflows.'
    },
    {
      icon: '02',
      title: 'Process Automation',
      description: 'Eliminate manual errors and speed up service delivery across departments.'
    },
    {
      icon: '03',
      title: 'Enhanced Visibility',
      description: 'Gain real-time insights into performance and operational health.'
    },
    {
      icon: '04',
      title: 'Scalable Architecture',
      description: 'A platform that adapts and grows with your enterprise complexity.'
    }
  ]
};

const streamlineDescription = [
  { text: "Your enterprise productivity depends on ", bold: false },
  { text: "seamless orchestration", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary ServiceNow platform audit ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "automation opportunities ", bold: true },
  { text: "that drive efficiency and reduce operational costs.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Platform Implementation',
    description: 'End-to-end setup and configuration of ServiceNow modules.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Custom App Build',
    description: 'Developing bespoke applications on the Now Platform to solve unique needs.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Legacy Integration',
    description: 'Connecting ServiceNow with your existing IT and business toolset.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Upgrade & Migration',
    description: 'Ensuring smooth transitions to the latest ServiceNow releases.'
  }
];

const deliverMVPData = {
  label: "SERVICENOW EXCELLENCE",
  title: "Committed to",
  accentText: "Workflow Success",
  description: "Leapsofts provides certified ServiceNow consultants who are fully committed to your project's success. We focus on best practices, OOTB alignment, and technical rigor.",
  items: [
    {
      title: "Certified Experts.",
      description: "A team with deep certifications across ITSM, ITOM, and HRSD."
    },
    {
      title: "OOTB First Approach.",
      description: "Prioritizing out-of-the-box features to ensure easy future upgrades."
    },
    {
      title: "Modular Deployment.",
      description: "A phased approach that delivers value quickly and minimizes risk."
    },
    {
      title: "User Training.",
      description: "Empowering your team to make the most of the ServiceNow platform."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: ASSESSMENT",
    title: "Maturity & Gap Analysis",
    description: "We audit your current processes and define the target maturity level.",
    features: ["Process Audits", "Stakeholder Alignment", "Baseline Metrics Setup"],
  },
  {
    id: 2,
    phase: "PHASE 2: FOUNDATION",
    title: "Platform Setup",
    description: "Configuring the core ServiceNow environment and data model.",
    features: ["Instance Strategy", "MID Server Setup", "LDAP/AD Integration"],
  },
  {
    id: 3,
    phase: "PHASE 3: EXECUTION",
    title: "Sprint-Based Build",
    description: "Iterative development and configuration of chosen modules.",
    features: ["Workflow Automation", "UI Policy Config", "Integration Dev"],
  },
  {
    id: 4,
    phase: "PHASE 4: OPTIMIZATION",
    title: "Go-Live & Review",
    description: "Launching the solution and reviewing performance against targets.",
    features: ["UA Testing", "KT Sessions", "Post-Launch Support"],
  },
];

const phaseLabelsDefault = ["ASSESSMENT", "FOUNDATION", "EXECUTION", "OPTIMIZATION"];



const title = "ServiceNow: Empower Your Business";
const subtitle = "";

const introDescription = [
  { text: "Revolutionize your operations with ServiceNow expertise that streamlines processes and boosts efficiency.", bold: false },
]

const ServiceNow: React.FC = () => {
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
      <InfoGrid data={reEngineeringProcessData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Platform "
        titleAccent="Audit"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Platform Services'
        description='We deliver specialized ServiceNow services to support your enterprise workflows.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR SERVICENOW PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default ServiceNow