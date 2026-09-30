import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { parseFormattedText } from '../../utils/textParser';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import FAQs from '../../components/FAQs/FAQs';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

import { useServicePage } from '../../hooks/useServicePage';

const serviceOverviewData = {
  label: "BPO SOLUTIONS",
  titleMain: "Orchestrating High-Efficiency",
  titleAccent: "Operational",
  titleEnd: "Pipelines",
  description: "At Leapsofts, we customize and engineer tech-enabled BPO solutions designed to transform manual corporate workflows into highly streamlined, automated operational pipelines. By designing customized robotic process automation scripts, training dedicated customer service teams, and configuring secure back-office databases, we help enterprises scale operational capacity, reduce transactional errors, and achieve seamless business growth with complete workflow transparency.",
  imagePath: "/streamline.webp"
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
  { text: "We deliver tech-enabled ", bold: false },
  { text: "business process outsourcing (BPO) services & software outsourcing ", bold: true },
  { text: "designed to automate back-office operations, customer experience (CX) channels, and technical support teams. As a global software outsourcing company, we optimize workflow pipelines to cut operating costs and accelerate business scalability.", bold: false }
]

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('business-process-outsourcing');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Business Process Outsourcing Services | Leapsofts",
    defaultDescription: "Streamline operations with BPO services from Leapsofts. We manage complex business processes so you can focus on growth. Get a free assessment today.",
    defaultKeywords: "business process outsourcing, BPO services, software outsourcing company, offshore outsourcing services",
    canonicalUrl: "https://www.leapsofts.com/services/business-process-outsourcing",
  });
}



const BusinessProcessOutsourcing: React.FC = () => {
  const { data } = useServicePage('business-process-outsourcing');

  const schemaData = buildServiceSchema({
    name: "Business Process Outsourcing Services",
    description: "Streamline operations with BPO services from Leapsofts.",
    canonicalUrl: "https://www.leapsofts.com/services/business-process-outsourcing",
    faqs: data?.faqs,
  });


  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || serviceOverviewData.label,
        titleMain: data.serviceOverview.titleMain || serviceOverviewData.titleMain,
        titleAccent: data.serviceOverview.titleAccent || serviceOverviewData.titleAccent,
        titleEnd: data.serviceOverview.titleEnd || serviceOverviewData.titleEnd,
        description: data.serviceOverview.description || serviceOverviewData.description,
        imagePath: data.serviceOverview.imageUrl || serviceOverviewData.imagePath
      }
    : serviceOverviewData;

  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || processData.label,
        titleMain: data?.infoGrid?.titleMain,
        titleAccent: data?.infoGrid?.titleAccent,
        title: data?.infoGrid?.title || (data?.infoGrid?.titleMain || data?.infoGrid?.titleAccent ? undefined : processData.title),
        description: data.infoGrid.description || processData.description,
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : processData;

  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || ourServicesData.label,
        titleAccent: data.emergingTech.titleAccent || ourServicesData.titleAccent,
        titleMain: data.emergingTech.titleMain || ourServicesData.titleMain,
        description: data.emergingTech.description || ourServicesData.description,
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : ourServicesData;

  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || deliverMVPData.label,
        title: data.deliverMVP.title || deliverMVPData.title,
        accentText: data.deliverMVP.accentText || deliverMVPData.accentText,
        description: data.deliverMVP.description || deliverMVPData.description,
        items: data.deliverMVP.items || deliverMVPData.items
      }
    : deliverMVPData;

  const activeProcessPhases: ProcessPhase[] = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases.map((phase, index) => ({
        id: phase.id ?? (index + 1),
        phase: phase.phase || `PHASE ${index + 1}`,
        title: phase.title || '',
        description: phase.description || '',
        features: phase.features || []
      }))
    : (processPhasesDefault);

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  const activeServiceFeatures = (data?.serviceFeatures?.items && data.serviceFeatures.items.length > 0)
    ? data.serviceFeatures.items
    : serviceFeaturesData;

  const strategyCTA = data?.strategyCTA;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      {activeOverviewData && activeOverviewData.description && (
        <ServiceOverview
          label={activeOverviewData.label}
          titleMain={activeOverviewData.titleMain}
          titleAccent={activeOverviewData.titleAccent}
          titleEnd={activeOverviewData.titleEnd}
          description={activeOverviewData.description}
          imagePath={activeOverviewData.imagePath}
        />
      )}
      {activeInfoGridData && activeInfoGridData.items && activeInfoGridData.items.length > 0 && (
        <InfoGrid data={activeInfoGridData} />
      )}
      <StreamlineSuccess
        label={strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={strategyCTA?.titleMain || "Map your "}
        titleAccent={strategyCTA?.titleAccent || "operational BPO"}
        titleEnd={strategyCTA?.titleEnd || " roadmap."}
        description={strategyCTA?.descriptionText ? [{ text: strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={strategyCTA?.buttonText || "Claim BPO Strategy Session"}
        buttonPath={strategyCTA?.buttonPath || "#contact"}
        imageUrl={strategyCTA?.imageUrl || "/streamline.webp"}
      />
      {((data?.serviceFeatures?.items && data.serviceFeatures.items.length > 0) || activeServiceFeatures.length > 0) && (
        <ServiceFeatures
          title={data?.serviceFeatures?.title || 'Core BPO Capabilities'}
          description={data?.serviceFeatures?.description || 'We deliver expert services across various business process domains.'}
          items={activeServiceFeatures}
        />
      )}
      {activeDeliverMVPData && activeDeliverMVPData.items && activeDeliverMVPData.items.length > 0 && (
        <DeliverMVP data={activeDeliverMVPData} />
      )}
      {activeEmergingTechData && activeEmergingTechData.items && activeEmergingTechData.items.length > 0 && (
        <EmergingTech data={activeEmergingTechData} />
      )}
      {activeProcessPhases && activeProcessPhases.length > 0 && (
        <Processes title={data?.processes?.title || "OUR CUSTOM BPO PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      )}
      <FAQs
        title="Tech-Enabled BPO & Process Automation FAQ"
        subtitle="Common questions about BPO team onboarding, RPA automation, SLA guarantees, data privacy, and global operations."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        services={[
          {
            title: "Dedicated Development Teams",
            description: "Hire offshore software engineers and technical support specialists.",
            link: "/services/dedicated-teams"
          },
          {
            title: "Custom Software Development",
            description: "Build custom workflow automation systems and back-office portals.",
            link: "/services/custom-software-development"
          },
          {
            title: "Quality Assurance & Testing",
            description: "Outsource software testing, regression audits, and automated QA.",
            link: "/services/quality-assurance"
          }
        ]}
      />
    </>
  );
};

export default BusinessProcessOutsourcing;
