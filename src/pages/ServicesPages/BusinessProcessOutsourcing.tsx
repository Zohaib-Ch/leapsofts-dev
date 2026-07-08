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
  titleMain: "Orchestrating High-Efficiency",
  titleAccent: "Operational",
  titleEnd: "Pipelines",
  description: "At Leapsofts, we customize and engineer tech-enabled BPO solutions designed to transform manual corporate workflows into highly streamlined, automated operational pipelines. By designing customized robotic process automation scripts, training dedicated customer service teams, and configuring secure back-office databases, we help enterprises scale operational capacity, reduce transactional errors, and achieve seamless business growth with complete workflow transparency.",
  imagePath: laptopImg
};

const ourServicesData: EmergingTechProps['data'] = {
  label: 'BPO SERVICES',
  titleAccent: 'Scale',
  titleMain: 'Your Business',
  description:
    'Scalable BPO services designed to enhance efficiency, improve customer experience, and support business growth.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Omni-Channel Customer Experience (CX)',
      description: 'Orchestrating high-velocity customer communication networks across voice, email, chat, and CRM channels to maximize satisfaction.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Tier 1-3 Technical Support Teams',
      description: 'Providing certified tech specialists to troubleshoot enterprise hardware and software queries, resolving issues under strict SLAs.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Automated Back-Office Data Operations',
      description: 'Executing secure high-speed data entry, database cleansing, document indexing, and financial transaction processing.'
    },
    {
      icon: 'product' as const,
      title: 'Managed DevOps & Infrastructure Support',
      description: 'Ensuring high-availability server operations, continuous environment monitoring, and automated cloud backups.'
    },
    {
      icon: 'saas' as const,
      title: 'Process Auditing & QA Monitoring',
      description: 'Implementing rigorous transactional auditing, quality score analysis, and regular performance metric audits.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Secure Cloud Database Management',
      description: 'Maintaining secure data migrations, active backups, and data classification setups inside AWS, Azure, or GCP.'
    },
  ]
};

const processData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Outsource to Us',
  items: [
    {
      icon: '01',
      title: 'Maximized Cost Efficiency',
      description: 'Significantly reduce operating expenses and overhead costs by leveraging optimized global talent pools.'
    },
    {
      icon: '02',
      title: 'Decoupled Strategic Focus',
      description: 'Free up your internal core teams to concentrate on market expansions and high-value product developments.'
    },
    {
      icon: '03',
      title: 'Pre-Vetted Professional Pool',
      description: 'Gain instant access to highly trained back-office, technical support, and data entry specialists.'
    },
    {
      icon: '04',
      title: 'Flexible Operational Elasticity',
      description: 'Scale your active support pods up or down within weeks to adjust to seasonal demands or volume shifts.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new tech-enabled BPO unit", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current workflows, map out potential operational automation paths, evaluate support needs, and formulate a ", bold: false },
  { text: "highly efficient, customized operational scaling plan ", bold: true },
  { text: "built to unlock massive organizational growth and streamline customer interactions.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Project Management',
    description: 'Deploying dedicated Agile project managers to verify service level agreement (SLA) alignments.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Tech Integration',
    description: 'Integrating advanced robotic process automation (RPA) tools to eliminate repetitive manual tasks.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Customized Teams',
    description: 'Assembling tailored client teams with deep expertise in custom data schemas, logistics, or finance.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Data Security',
    description: 'Enforcing strict ISO 27001, SOC2 data protection, and secure VPN workspace network controls.'
  }
];

const deliverMVPData = {
  label: "BPO EXCELLENCE",
  title: "Our Commitment to Deliver Your Support Operations in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom process outsourcing and operational advisory partner. By combining fully integrated CI/CD, certified operations managers, and dedicated back-office pods, we implement and deploy enterprise-ready BPO workflows within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Performance Tracking.",
      description: "Accessing comprehensive real-time dashboards detailing SLA percentages, ticket resolution volumes, and output metrics."
    },
    {
      title: "Seamless Transition.",
      description: "Enforcing a rigorous 30-day onboarding program to map processes, document guidelines, and train dedicated pods."
    },
    {
      title: "Continuous Improvement.",
      description: "Configuring regular process audits and feedback loops to identify and automate bottlenecks."
    },
    {
      title: "Global Standards.",
      description: "Adhering to international quality guidelines (ISO 9001/27001) to protect customer data assets."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: PROCESS DISCOVERY & DISPATCH AUDITING",
    title: "Operations Mapping & SLA Definition",
    description:
      "We map active customer tickets history, catalog update steps, and manual administrative queues.",
    features: [
      {
        title: "Active Process Mapping",
        description:
          "Trace operational interfaces, logging steps, and workflow systems to build detailed pipeline maps."
      },
      {
        title: "SLA Metric Alignments",
        description:
          "Define strict service level goals (target response times, query resolution speeds, and throughput checks)."
      },
      {
        title: "Transition Blueprint Delivery",
        description:
          "Draft transition schedules, pod structures, and communications protocols before onboarding teams."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: TEAM FORMATION & INFRASTRUCTURE INTEGRATION",
    title: "Talent Sourcing & Portal Setups",
    description:
      "Sourcing highly skilled specialists, building training manuals, and configuring secure networks.",
    features: [
      {
        title: "Targeted Team Selection",
        description:
          "Sourced and vet operational agents, technical support engineers, and billing specialists matching your niche."
      },
      {
        title: "Secure Workspace Network Setup",
        description:
          "Configure secure VPN networks, multi-factor logins (MFA), and dedicated workspace virtual environments."
      },
      {
        title: "Standard Operating Procedures (SOP)",
        description:
          "Draft step-by-step operating guidelines and author centralized troubleshooting databases."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SYSTEM SETUP & LAUNCH",
    title: "Active Launch & Continuous Quality Auditing",
    description:
      "Official release of operational pods, live ticket processing, and regular quality score checks.",
    features: [
      {
        title: "Active Operations Dispatch",
        description:
          "Route live customer query streams, database cleaning runs, and transaction ledger entry tasks."
      },
      {
        title: "Rigorous Quality Auditing",
        description:
          "Trace agent responses, log query resolutions, and perform compliance checks."
      },
      {
        title: "Data Protection Monitoring",
        description:
          "Enforce active document handling controls, rotate access keys, and restrict data sharing."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS PROCESS OPTIMIZATION",
    title: "Robotic Process Automation & Scale Reviews",
    description:
      "Deploying RPA tools, evaluating performance indicators, and adjusting active pod allocations.",
    features: [
      {
        title: "Robotic Process Automation RPA",
        description:
          "Code custom script tasks and automated web macros to eliminate manual raw data transcription pipelines."
      },
      {
        title: "Real-Time Telemetry Tracking",
        description:
          "Monitor daily response speeds, transaction accuracy rates, and customer satisfaction percentages."
      },
      {
        title: "Agile Pod Scaling Audits",
        description:
          "Coordinate regular process reviews, update standard procedures, and scale operational capacities dynamically."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "TEAM & NETWORK INTEGRATION",
  "ACTIVE SYSTEM LAUNCH",
  "PROCESS OPTIMIZATION",
];

const title = "Tech-Enabled BPO & Process Automation Operations";
const subtitle = "";

const introDescription = [
  { text: "We deliver advanced process automation, custom ", bold: false },
  { text: "back-office operational workflows", bold: true },
  { text: ", and secure omni-channel customer service configurations. By integrating high-velocity data extraction, automated invoice processing APIs, and dedicated technical support pods, we engineer scalable business process outsourcing models designed to maximize cost efficiency and simplify operational overhead.", bold: false }
]

const BusinessProcessOutsourcing: React.FC = () => {
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
      <InfoGrid data={processData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="operational BPO"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core BPO Capabilities'
        description='We deliver expert services across various business process domains.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR CUSTOM BPO PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default BusinessProcessOutsourcing;
