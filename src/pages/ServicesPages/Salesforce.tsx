import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
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
    label: "SALESFORCE CRM",
    titleMain: "Unifying Your",
    titleAccent: "Enterprise",
    titleEnd: "Ecosystem",
    description: "At Leapsofts, we engineer highly customized Salesforce environments that transform raw data pipelines into strategic business tools. By writing optimized, secure Apex controllers, designing high-fidelity Lightning Web Components, and integrating third-party marketing and billing channels, we help organizations automate client interactions, enforce security compliances, and establish a single source of truth across their entire CRM operation.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'SALESFORCE BENEFITS',
    title: 'Why Choose Salesforce',
    items: [
        {
            icon: '01',
            title: 'Unified 360° Data Aggregation',
            description: 'Synthesize customer touchpoints, database interactions, and support tickets into one singular dashboard view.'
        },
        {
            icon: '02',
            title: 'Apex & LWC Workflow Automation',
            description: 'Eradicate manual entry errors and double sales speed by automating opportunity pipelines and security controls.'
        },
        {
            icon: '03',
            title: 'Real-Time Predictive Data Metrics',
            description: 'Equip your management with real-time sales forecasting dashboards and smart predictive metrics.'
        },
        {
            icon: '04',
            title: 'Resilient Enterprise Cloud Architecture',
            description: 'A highly scalable CRM framework that adjusts smoothly as your company grows, ensuring robust performance under high user loads.'
        }
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new Salesforce ecosystem", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current org, map out metadata components, evaluate API integrations, and formulate a ", bold: false },
  { text: "highly efficient, customized Apex/LWC engineering plan ", bold: true },
  { text: "built to unlock massive sales growth and streamline client retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Custom Apex Development',
        description: 'Writing robust, optimized Apex triggers, controllers, and batch jobs to handle complex custom business logic.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'LWC Development',
        description: 'Building modern, lightning-fast Lightning Web Components with responsive designs and local state caches.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'AppExchange Build',
        description: 'Engineering, packaging, and guiding your custom application through the strict Salesforce Security Review process.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Managed Services',
        description: 'Providing ongoing sandbox support, metadata cleanups, and system health checks to keep your CRM peak-performing.'
    }
];

const deliverMVPData = {
    label: "SALESFORCE EXCELLENCE",
    title: "Our Commitment to Deliver Your Salesforce Setup in",
    accentText: "3-5 months?",
    description: "Leapsofts is an elite custom Salesforce development partner. By combining fully integrated CI/CD, certified Salesforce developers, and dedicated agile pods, we implement and deploy enterprise-ready Salesforce solutions within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Certified Expertise.",
            description: "Accessing senior developers and architects holding advanced Salesforce certs (Apex, LWC, Integration)."
        },
        {
            title: "Scalable Solutions.",
            description: "Designing customizable metadata models and database limits that scale with high transaction metrics."
        },
        {
            title: "Seamless Integration.",
            description: "Syncing Salesforce with legacy platforms, databases, and third-party APIs using secure REST controllers."
        },
        {
            title: "Agile Sandbox Delivery.",
            description: "Deploying SCRUM pods to build, test, and release clean configurations inside secure sandbox spaces."
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
  { text: "We deliver advanced Salesforce customization, custom ", bold: false },
  { text: "Apex & Lightning Web Components (LWC) development", bold: true },
  { text: ", and secure third-party ERP/CRM database integrations. By streamlining Sales Cloud workflows, custom Service Cloud setups, and AppExchange packaging, we engineer cohesive data systems that optimize client pipeline conversion and reduce operational friction.", bold: false }
]

const Salesforce: React.FC = () => {
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
        </>
    )
}

export default Salesforce