import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import RelatedServices from '../../components/RelatedServices/RelatedServices'
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import laptopImg from "../../assets/about_laptop_3d.png";

const capabilitiesSlides: CapabilitySlide[] = [
    {
        id: 'consultation',
        number: '< 01 >',
        title: 'Consultation',
        image: capabilitiesImg,
        items: [
            {
                name: 'Custom Salesforce Architecture Advisory',
                description:
                    "Structuring scalable CRM foundations, custom metadata strategies, and robust data isolation models to secure operations."
            },
            {
                name: 'Certified Salesforce Administration & Support',
                description:
                    'Providing complete multi-tenant administration, user permissions profiles management, and sandbox release governance.'
            },
            {
                name: 'Enterprise Systems & ERP Integrations',
                description:
                    "Integrating Salesforce with external tools, billing pipelines, and email marketing databases via secure APIs."
            },
            {
                name: 'Zero-Loss Database CRM Migration',
                description:
                    'Extracting, normalizing, and migrating large legacy CRM databases into Salesforce without data loss or downtime.'
            }
        ]
    },
    {
        id: 'configuration',
        number: '< 02 >',
        title: 'Configuration',
        image: platformImg,
        items: [
            {
                name: 'Lightning Layout Personalization & Views',
                description:
                    'Configuring custom page layouts, dynamic Lightning record views, and custom permissions maps to optimize workflows.'
            },
            {
                name: 'Advanced Reporting & Tableau Dashboards',
                description:
                    'Building highly intuitive Salesforce reports, dashboard indicators, and interactive Tableau metrics to drive sales insights.'
            },
            {
                name: 'Tailored Apex Trigger Configurations',
                description:
                    'Creating custom validation gates, Apex trigger events, and complex flow automation rules to align with operations.'
            },
            {
                name: 'Dynamic Bulk Data Orchestration',
                description:
                    'Designing enterprise bulk data management solutions, handling millions of records safely using Salesforce Bulk APIs.'
            }
        ]
    },
    {
        id: 'implementation',
        number: '< 03 >',
        title: 'Implementation',
        image: capabilitiesImg,
        items: [
            {
                name: 'Automated Sales Engagement Workflows',
                description:
                    'Automating lead scoring mechanics, opportunity transitions, and email flows using Salesforce Flow Builder.'
            },
            {
                name: 'Omni-Channel Customer Service Architecture',
                description:
                    'Setting up case routing rules, live chat routing parameters, and support desk portals to elevate retention.'
            },
            {
                name: 'Financial Services Cloud Customization',
                description:
                    'Customizing FSC tools to model complex client wealth files, policy records, and secure transactions.'
            },
            {
                name: 'Custom Sales Cloud Implementations',
                description:
                    'Deploying custom Sales Cloud parameters, opportunity pipelines, and quota tracking engines to support operations.'
            }
        ]
    },
    {
        id: 'appDevelopment',
        number: '< 04 >',
        title: 'App Development',
        image: platformImg,
        items: [
            {
                name: 'Feature-Driven Agile Release Sprints',
                description:
                    'Organizing release cycles around scrum pods, using modern Salesforce DX tools for code deployment.'
            },
            {
                name: 'End-to-End AppExchange Product Design',
                description:
                    'Designing, building, and security-reviewing custom software packages for successful AppExchange launches.'
            },
            {
                name: 'Custom Force.com Cloud Development',
                description:
                    'Writing bespoke logic on the Force.com platform to automate core industrial systems and client portal APIs.'
            },
            {
                name: 'Cross-Org System Synchronizations',
                description:
                    'Enabling automated real-time synchronizations between parent and child Salesforce orgs with complete security.'
            }
        ]
    },
    {
        id: 'integration',
        number: '< 05 >',
        title: 'Integration',
        image: capabilitiesImg,
        items: [
            {
                name: 'High-Speed REST/SOAP Integration Bridges',
                description:
                    'Linking Salesforce with external applications using REST, SOAP APIs, and tailored web services.'
            },
            {
                name: 'Billing & Accounting System Sync',
                description:
                    'Syncing Salesforce account entries with tools like QuickBooks, NetSuite, or Stripe for instant invoicing.'
            },
            {
                name: 'External Data Lake Sync Managers',
                description:
                    'Configuring daily bulk data pipelines to replicate CRM tables into secure cloud data warehouses (Snowflake/BigQuery).'
            },
            {
                name: 'Marketing Cloud Journey Integrations',
                description:
                    'Syncing Salesforce records with Marketing Cloud or Pardot platforms to coordinate sophisticated customer journeys.'
            }
        ]
    }
];

const serviceOverviewData = {
    label: "SALESFORCE CONSULTING & DEVELOPMENT",
    titleMain: "Enterprise Custom",
    titleAccent: "Salesforce CRM",
    titleEnd: "Solutions",
    description: "At Leapsofts, as a certified Salesforce development company, we engineer custom Salesforce environments that transform raw sales data into automated growth pipelines. By coding optimized Apex controllers, designing responsive Lightning Web Components (LWC), and orchestrating MuleSoft and REST/SOAP API integrations with external ERPs, we deliver tailored Sales Cloud, Service Cloud, and AppExchange solutions.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'SALESFORCE BUSINESS ADVANTAGES',
    title: 'Why Enterprise Leaders Partner with Our Salesforce Specialists',
    items: [
        {
            icon: '01',
            title: 'Unified 360° Customer Data Aggregation',
            description: 'Synthesize customer touchpoints, database interactions, ERP records, and support tickets into one singular Salesforce dashboard view.'
        },
        {
            icon: '02',
            title: 'Apex & LWC Pipeline Automation',
            description: 'Eradicate manual entry errors and double sales team velocity by automating lead assignment, opportunity stages, and custom workflow rules.'
        },
        {
            icon: '03',
            title: 'Tableau & Einstein Predictive Analytics',
            description: 'Equip management with real-time revenue forecasting, custom Tableau dashboards, and AI-driven predictive sales insights.'
        },
        {
            icon: '04',
            title: 'Resilient Multi-Tenant Cloud Architecture',
            description: 'A highly scalable Salesforce cloud framework engineered to accommodate scaling transaction volumes and complex multi-org structures.'
        }
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy CRM database ", bold: true },
  { text: "or implementing a ", bold: false },
  { text: "new Salesforce ecosystem", bold: true },
  { text: ", our certified Salesforce consultants deliver technical clarity. We conduct a deep-dive org audit, map custom metadata, evaluate API connections, and execute a ", bold: false },
  { text: "tailored Apex/LWC development strategy ", bold: true },
  { text: "designed to drive enterprise revenue and streamline customer retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Custom Apex Trigger Development',
        description: 'Writing robust, optimized Apex triggers, batch classes, and custom controllers to automate complex business workflows.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Lightning Web Components (LWC)',
        description: 'Building modern, lightning-fast LWC interfaces with responsive layouts and local state management for custom portals.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'AppExchange Product Engineering',
        description: 'Designing, packaging, and guiding custom ISV applications through the rigorous Salesforce Security Review process.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Salesforce Managed Services & Support',
        description: 'Providing ongoing sandbox administration, metadata cleanups, security reviews, and proactive CRM health monitoring.'
    }
];

const deliverMVPData = {
    label: "SALESFORCE IMPLEMENTATION EXCELLENCE",
    title: "Deploy Your Custom Salesforce CRM Environment in",
    accentText: "3-5 months",
    description: "Leapsofts is a premier Salesforce development company. Combining certified Salesforce developers, automated sandbox release pipelines, and dedicated agile pods, we implement and deploy enterprise-grade Salesforce solutions within an accelerated 3 to 5 month timeframe.",
    items: [
        {
            title: "Certified Developers.",
            description: "Accessing senior engineers holding certified Salesforce credentials (Apex Developer, LWC Specialist, Integration Architect)."
        },
        {
            title: "Scalable Data Models.",
            description: "Architecting custom metadata frameworks and indexed object structures that scale seamlessly under high transaction volume."
        },
        {
            title: "Seamless API Integration.",
            description: "Connecting Salesforce with legacy databases, ERPs, and third-party SaaS applications using secure REST and SOAP endpoints."
        },
        {
            title: "Agile Sandbox Deployment.",
            description: "Utilizing dedicated SCRUM pods to build, test, and validate custom features inside isolated sandbox environments."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: SALESFORCE DISCOVERY & ORG ANALYSIS",
    title: "Needs & Org Performance Analysis",
    description:
      "We analyze your active CRM settings, map existing pipelines, and locate metadata bottlenecks.",
    features: [
      {
        title: "Active Org Configuration Audit",
        description:
          "Parse current profiles, validation rules, and Apex triggers to locate performance leaks."
      },
      {
        title: "Workflow Strategy Workshops",
        description:
          "Coordinate with team leads to define target conversion metrics and map out required custom cloud flows."
      },
      {
        title: "Sandbox Release Blueprinting",
        description:
          "Draft a comprehensive schema migration plan, data isolation model, and technology configuration roadmap."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: ARCHITECTURE & DATA MODEL SPECIFICATION",
    title: "Schema Modeling & Sync Rules Setup",
    description:
      "Modeling customized relational schemas, API connection gates, and secure permissions matrices.",
    features: [
      {
        title: "Custom Entity Relationship Diagrams",
        description:
          "Map secure custom objects, child-to-parent relationships, and custom metadata indexes."
      },
      {
        title: "Integration Schema Mappings",
        description:
          "Design lightweight endpoints and synchronization frequencies using REST/SOAP Salesforce APIs."
      },
      {
        title: "Zero-Trust Sharing Policies",
        description:
          "Draft strict sharing rules, field-level security configurations, and user profile parameters."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY APEX & LWC DEVELOPMENT",
    title: "Bespoke Apex Coding & Component Building",
    description:
      "Writing optimized Apex logic triggers, responsive Lightning layouts, and running sandbox tests.",
    features: [
      {
        title: "Advanced Apex Triggers & batch",
        description:
          "Code highly efficient Apex controllers, database batch processes, and custom event handlers."
      },
      {
        title: "Lightning Web Component Grids",
        description:
          "Build modern Lightning Web Components with responsive interfaces and smart local page caching."
      },
      {
        title: "90%+ Unit Test Validation",
        description:
          "Maintain strict unit testing parameters and sandbox deployments to prevent regression issues."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: SANDBOX TRANSITION & CRM EVOLUTION",
    title: "Production Migration & Team Onboarding",
    description:
      "Seamless Change Sets rollouts, dynamic dashboards onboarding, and proactive metadata maintenance.",
    features: [
      {
        title: "Change Set Deployment Rollout",
        description:
          "Deploy custom code packages safely from Sandbox to Production using robust release gates."
      },
      {
        title: "Dashboards Interactive Activation",
        description:
          "Deliver dynamic reporting setups and interactive onboarding sessions to accelerate user CRM adoption."
      },
      {
        title: "Proactive CRM Health Governance",
        description:
          "Perform systematic Salesforce version reviews, custom metadata pruning, and database query optimizations."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "ORG ANALYSIS",
  "SCHEMA & SYNC SPECS",
  "APEX & LWC CODING",
  "PRODUCTION EVOLUTION",
];

const title = "Enterprise Salesforce Development & Cloud Architecture";
const subtitle = "";

const introDescription = [
  { text: "As a premier ", bold: false },
  { text: "Salesforce development company & CRM integration partner", bold: true },
  { text: ", we deliver bespoke Apex & Lightning Web Components (LWC) engineering, enterprise data migrations, and third-party ERP integrations. We optimize Sales Cloud and Service Cloud platforms to automate pipelines and maximize CRM ROI.", bold: false }
]

export function meta() {
  const title = "Salesforce Development Services | Leapsofts";
  const description = "Certified Salesforce development, integration & customization services. Leapsofts maximizes your Salesforce ROI with expert CRM engineering. Get a demo.";
  const keywords = "Salesforce development company, Salesforce CRM integration, Salesforce customization, Salesforce consulting services";
  const canonicalUrl = "https://www.leapsofts.com/services/salesforce";

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
      "name": "Salesforce Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Salesforce Development & CRM Integration",
      "description": "Certified Salesforce development, integration & customization services."
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
          "name": "Salesforce",
          "item": "https://www.leapsofts.com/services/salesforce"
        }
      ]
    }
  ]
};

const Salesforce: React.FC = () => {
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
            <Capabilities
                title="Our Salesforce Capabilities"
                description="We provide 360-degree Salesforce services to transform your business operations."
                slides={capabilitiesSlides}
                defaultImage={capabilitiesImg}
            />
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="COMPLIMENTARY STRATEGY SESSION"
                titleMain="Map your "
                titleAccent="Salesforce"
                titleEnd=" roadmap."
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert CRM Services'
                description='We deliver specialized Salesforce services to support your business ecosystem.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <Processes title="OUR CUSTOM SALESFORCE PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
            <RelatedServices
                services={[
                    {
                        title: "Custom Software Development",
                        description: "Engineer enterprise web applications and custom business logic.",
                        link: "/services/custom-software-development"
                    },
                    {
                        title: "Cloud Engineering & Infrastructure",
                        description: "Architect cloud infrastructure and database connectors on AWS & Azure.",
                        link: "/services/cloud-engineering"
                    },
                    {
                        title: "Dedicated Development Teams",
                        description: "Hire certified Salesforce developers and cloud architects for your team.",
                        link: "/services/dedicated-teams"
                    }
                ]}
            />
        </>
    )
}

export default Salesforce