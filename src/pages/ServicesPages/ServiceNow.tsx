import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import RelatedServices from '../../components/RelatedServices/RelatedServices'
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
  label: "SERVICENOW SOLUTIONS",
  titleMain: "Unifying Your",
  titleAccent: "Enterprise",
  titleEnd: "Workflows",
  description: "At Leapsofts, we customize and engineer highly optimized ServiceNow environments designed to connect disparate organizational silos into cohesive digital workflows. By designing customized Scoped Applications, writing optimized, secure Business Rules and Client Scripts, and configuring robust integration hubs via secure REST APIs and MID Server architectures, we help major organizations automate service delivery, enforce strict security compliance, and achieve full operational transparency.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'SERVICENOW SERVICES',
  titleAccent: 'Digital',
  titleMain: 'Workflows',
  description:
    'We specialize in expanding the reach of ServiceNow across your enterprise, from IT to HR and Customer Service.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'IT Service Management (ITSM) Modernization',
      description: 'Automating incident, change, problem, and request management pipelines with customized Service Portal widgets.'
    },
    {
      icon: 'enterprise' as const,
      title: 'IT Operations Management (ITOM) Discovery',
      description: 'Gain visibility into your infrastructure, set up discovery schedules, map application service layers, and manage health risks.'
    },
    {
      icon: 'enterprise' as const,
      title: 'HR Service Delivery (HRSD) Lifecycle Automation',
      description: 'Configuring employee center portals, onboarding profiles, and case management tools to simplify employee interactions.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Security Operations (SecOps) & Threat Response',
      description: 'Unifying vulnerability scanners, configuring automated security response workflows, and setting up incident management pipelines.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Governance, Risk, & Compliance (GRC) Auditing',
      description: 'Automating policy lifecycles, compliance frameworks, audit trails, and risk management profiles directly inside the Now Platform.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Customer Service Management (CSM) Workflows',
      description: 'Configuring omni-channel customer service portals, routing cases dynamically, and connecting frontend queries to backend developers.'
    },
  ]
};

const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Maximize Your ServiceNow ROI',
  items: [
    {
      icon: '01',
      title: 'Unified Single System of Action',
      description: 'Break down functional silos, aggregating security logs, IT services, and employee requests into a single database system of action.'
    },
    {
      icon: '02',
      title: 'End-to-End Workflow Orchestration',
      description: 'Eradicate manual transaction errors and accelerate daily service delivery schedules by automating approval structures.'
    },
    {
      icon: '03',
      title: 'Real-Time Performance Dashboarding',
      description: 'Equip your leadership with real-time incident reports, system health dashboards, and Tableau metrics.'
    },
    {
      icon: '04',
      title: 'Resilient ServiceNow Scoped Abstractions',
      description: 'Deploy modular, secure custom applications (Scoped Apps) that scale dynamically with your organizational complexity without breaking.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new ServiceNow ecosystem", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current instances, map out application configurations, evaluate custom workflows, and formulate a ", bold: false },
  { text: "highly efficient, optimized Scoped App/ITSM engineering plan ", bold: true },
  { text: "built to unlock massive operational growth and streamline corporate governance.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Platform Implementation',
    description: 'Bespoke setup, configuration, and migration of ServiceNow ITSM, ITOM, and CSM modules.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Custom App Build',
    description: 'Designing and writing customized Scoped Applications on the Now Platform to solve unique operational needs.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Legacy Integration',
    description: 'Connecting ServiceNow to legacy ERP databases, client gateways, and billing channels using secure REST/SOAP APIs.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Upgrade & Migration',
    description: 'Ensuring smooth transitions to the latest ServiceNow releases (e.g. Washington/Xanadu) with zero downtime.'
  }
];

const deliverMVPData = {
  label: "SERVICENOW EXCELLENCE",
  title: "Our Commitment to Deliver Your Workflows in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom ServiceNow engineering partner. By combining fully integrated CI/CD, certified ServiceNow developers, and dedicated agile pods, we implement and deploy enterprise-ready ServiceNow workflows within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Certified Experts.",
      description: "Accessing senior developers and architects holding advanced ServiceNow certs (ITSM, ITOM, HRSD)."
    },
    {
      title: "OOTB First Approach.",
      description: "Prioritizing out-of-the-box ServiceNow features to ensure easy future upgrades and metadata stability."
    },
    {
      title: "Modular Deployment.",
      description: "A phased sandbox approach that delivers value quickly and minimizes system downtime."
    },
    {
      title: "User Training.",
      description: "Interactive user training sessions, dashboard tutorials, and technical manuals to guarantee rapid platform adoption."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: SERVICENOW STRATEGY & INSTANCE DISCOVERY",
    title: "Needs Maturity & Gap Analysis",
    description:
      "We analyze your active CRM settings, baseline workflows, and identify MID server configuration bottlenecks.",
    features: [
      {
        title: "Instance Configuration Audit",
        description:
          "Parse current client scripts, Business Rules, and UI actions to locate performance bottlenecks."
      },
      {
        title: "Strategic Maturity Workshops",
        description:
          "Coordinate with key IT directors to establish benchmark incident-response times and compliance scales."
      },
      {
        title: "Sandbox Deployment Blueprinting",
        description:
          "Draft detailed data integration specifications, update set release paths, and scoped app boundaries."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: FOUNDATION ARCHITECTURE & SYSTEM DESIGN",
    title: "Instance Setup & MID Configuration",
    description:
      "Setting up secure connection gateways, LDAP mapping, and Access Control list rules.",
    features: [
      {
        title: "MID Server Secure Connections",
        description:
          "Configure local MID Servers to synchronize on-premise infrastructure data with the ServiceNow cloud org."
      },
      {
        title: "IntegrationHub API Schema",
        description:
          "Map lightweight REST, SOAP, and IntegrationHub schemas connecting external directories (AD, Azure)."
      },
      {
        title: "Strict Access Control List Setup",
        description:
          "Establish precise ACL properties, user role maps, encryption keys, and SSO parameters."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY WORKFLOW & SCOPED APP CODING",
    title: "Scoped App Building & Flow Design",
    description:
      "Writing optimized scoped logic, building Flow Designer workflows, and conducting ATF checks.",
    features: [
      {
        title: "Bespoke Scoped Applications",
        description:
          "Code robust Scoped Apps utilizing modular tables, Javascript Business Rules, and Client Scripts."
      },
      {
        title: "Flow Designer Orchestration",
        description:
          "Construct event-driven workflow automation trees and dynamic case routing tasks."
      },
      {
        title: "Automated Test Framework ATF",
        description:
          "Run strict automated test suites (ATF) to verify workflow parity and guarantee upgrade readiness."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: SANDBOX TRANSITION & CRM EVOLUTION",
    title: "Update Set Releases & Platform Maintenance",
    description:
      "Seamless migrations, service portals activation, and regular platform upgrades reviews.",
    features: [
      {
        title: "Update Set Staged Deployment",
        description:
          "Migrate configuration packages safely from Development sandboxes into Production orgs."
      },
      {
        title: "Portal Activation & Onboarding",
        description:
          "Publish customized Service Portals and conduct onboarding workshops to promote active adoption."
      },
      {
        title: "Proactive Release Upgrades",
        description:
          "Deliver regular security patches, system health reviews, and version upgrades (Washington/Xanadu) support."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "INSTANCE FOUNDATION",
  "WORKFLOW CODING",
  "RELEASE EVOLUTION",
];

const title = "Enterprise ServiceNow Development & Platform Orchestration";
const subtitle = "";

const introDescription = [
  { text: "We provide enterprise ", bold: false },
  { text: "ServiceNow implementation services & ServiceNow consulting ", bold: true },
  { text: "to automate digital workflows across ITSM, ITOM, HRSD, and CSM platforms. As certified ServiceNow specialists, we build custom Scoped Applications, configure IntegrationHub endpoints, and optimize Now Platform instances for seamless corporate governance.", bold: false }
]

export function meta() {
  const title = "ServiceNow Development Services | Leapsofts";
  const description = "Expert ServiceNow implementation, customization & integration. Leapsofts transforms enterprise workflows with certified ServiceNow engineering. Get a quote.";
  const keywords = "ServiceNow development, ServiceNow implementation, ServiceNow consulting, ServiceNow integration services";
  const canonicalUrl = "https://www.leapsofts.com/services/service-now";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "ServiceNow Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "ServiceNow Implementation & Workflow Automation",
      "description": "Expert ServiceNow implementation, customization & integration."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.leapsofts.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ServiceNow",
          "item": "https://www.leapsofts.com/services/service-now"
        }
      ]
    }
  ]
};

const ServiceNow: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="ServiceNow"
        titleEnd=" roadmap."
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
      <Processes title="OUR CUSTOM SERVICENOW PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Custom Software Development",
            description: "Build custom enterprise applications tailored to your business logic.",
            link: "/services/custom-software-development"
          },
          {
            title: "DevOps Services & Consulting",
            description: "Automate delivery pipelines and continuous infrastructure integration.",
            link: "/services/devops"
          },
          {
            title: "Salesforce Development & Integration",
            description: "Integrate CRM workflows with ServiceNow ITSM & CSM platforms.",
            link: "/services/salesforce"
          }
        ]}
      />
    </>
  )
}

export default ServiceNow