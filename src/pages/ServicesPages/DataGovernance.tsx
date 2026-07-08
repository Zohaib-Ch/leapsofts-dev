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
    label: "DATA GOVERNANCE",
    titleMain: "Orchestrating Trustworthy",
    titleAccent: "Enterprise",
    titleEnd: "Environments",
    description: "At Leapsofts, we customize and engineer resilient Data Governance frameworks designed to convert fragmented corporate databases into a single, highly audited source of truth. By designing unified Master Data Management rules, charting visual end-to-end data lineage logs, configuring automated catalog platforms (Collibra, Alation), and setting up role-based query filters, we enable major enterprises to preserve data integrity, protect sensitive PII, and achieve absolute compliance readiness.",
    imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
    label: 'GOVERNANCE SERVICES',
    titleAccent: 'Data',
    titleMain: 'Integrity',
    description: 'We offer a range of services to ensure your data remains accurate, compliant, and accessible across your organization.',
    items: [
        {
            icon: 'enterprise' as const,
            title: 'Data Quality Management & Validation Pipelines',
            description: 'Orchestrating automated cleansing, deduplication, and schema validation scripts to ensure complete analytical integrity.'
        },
        {
            icon: 'enterprise' as const,
            title: 'Global Compliance (GDPR, HIPAA) Auditing',
            description: 'Configuring strict PII data masking, retention timelines, and audit trails to align systems with international laws.'
        },
        {
            icon: 'enterprise' as const,
            title: 'Master Data Management (MDM) Architecture',
            description: 'Constructing unified Golden Records databases that synchronize key client data across disparate CRM and ERP hubs.'
        },
        {
            icon: 'product' as const,
            title: 'Data Lifecycle & Tiered Storage Retention',
            description: 'Setting up cost-effective database lifecycles, automated historical archiving, and secure system-wide deletions.'
        },
        {
            icon: 'saas' as const,
            title: 'Metadata Tagging & Catalog Engines',
            description: 'Integrating advanced automated schemas, indexing dynamic metadata, and configuring interactive search portals.'
        },
        {
            icon: 'thirdParty' as const,
            title: 'Granular Access Controls & Query Filters',
            description: 'Enforcing Apache Ranger role policies, row-level filters, and database permission models to protect fields.'
        },
    ]
};

const infoGridData: InfoGridProps['data'] = {
    label: 'WHY GOVERNANCE',
    title: 'Value of Trusted Data',
    items: [
        {
            icon: "01",
            title: "Validated Analytics Accuracy",
            description: "Equip your data analysts with highly accurate, structured data pipelines that eliminate manual query validation efforts."
        },
        {
            icon: "02",
            title: "Eradicated Data Pipeline Silos",
            description: "Speed up cross-department operational workflows by standardizing database schemas and naming rules globally."
        },
        {
            icon: "03",
            title: "Robust System Audit Trails",
            description: "Minimize the risk of expensive regulatory data leaks by installing strict access control locks."
        },
        {
            icon: "04",
            title: "Unlocked Data Capital",
            description: "Turn your raw transaction records and logs into highly indexed, searchable directories that feed downstream AI models."
        }
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new metadata catalog", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current database environments, map out potential compliance gaps, evaluate stewardship rules, and formulate a ", bold: false },
  { text: "highly efficient, customized data cataloging plan ", bold: true },
  { text: "built to unlock massive predictive growth and streamline database security.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Policy Development',
        description: 'Establishing clear, corporate-wide directories, classification rules, and database schema conventions.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Tool Selection',
        description: 'Selecting and configuring optimal catalog suites including Collibra, Alation, or Apache Atlas.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Data Stewardship',
        description: 'Defining clear ownership, steward roles, and query approval pipelines across global divisions.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Auditing & Reporting',
        description: 'Orchestrating regular system compliance reviews, metadata checks, and performance reporting charts.'
    }
];

const deliverMVPData = {
    label: "DATA EXCELLENCE",
    title: "Our Commitment to Deliver Your Governance Framework in",
    accentText: "3-5 months?",
    description: "Leapsofts is an elite custom data architecture and governance advisory partner. By combining fully integrated CI/CD, certified data architects, and dedicated cataloging pods, we implement and deploy enterprise-ready data governance frameworks within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Holistic Overview.",
            description: "Scanning and mapping all relational, unstructured, and stream databases across your enterprise."
        },
        {
            title: "Security Integrated.",
            description: "Aligning data access rules directly with your Zero-Trust network infrastructure and SSO portals."
        },
        {
            title: "Practical Frameworks.",
            description: "Authoring practical, lightweight standard procedures that corporate teams actually follow."
        },
        {
            title: "Technology Agnostic.",
            description: "Integrating seamlessly with your active technology stack, including Databricks, Snowflake, and PostgreSQL."
        }
    ]
};

const processesData: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: DATA LANDSCAPE STRATEGY & COMPLIANCE GAP DISCOVERY",
    title: "Needs Maturity & Data Discovery Auditing",
    description:
      "We scan relational data systems, profile security risks, and locate compliance gap anomalies.",
    features: [
      {
        title: "Active Data Source Scanning",
        description:
          "Scan relational tables, cloud buckets, and data warehouses to construct detailed metadata indices."
      },
      {
        title: "Regulatory Gap Assessments",
        description:
          "Audit database security controls against target registries (GDPR, HIPAA) to identify storage gaps."
      },
      {
        title: "Governance Target Definition",
        description:
          "Draft target metadata tagging structures, catalog parameters, and sandbox release blueprints."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: GOVERNANCE ARCHITECTURE & MDM SCHEMAS DESIGN",
    title: "Master Data Schemas & Role Access Mapping",
    description:
      "Designing unified MDM systems, visual lineages, and database row access masks.",
    features: [
      {
        title: "Master Data Golden Records",
        description:
          "Design unified customer profile tables and synchronize database actions across multiple silos."
      },
      {
        title: "Visual Lineage Data Flow Maps",
        description:
          "Map the complete data lineage showing origin points, transformations, and final analysis widgets."
      },
      {
        title: "Granular Row Access Matrices",
        description:
          "Establish precise access mappings, query filters (RBAC), and cell encryption properties."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY CATALOG & PIPELINE DEPLOYMENT",
    title: "Catalog Deployments & Cleansing Scripts Integration",
    description:
      "Installing catalog platforms, automated quality sweeps, and metadata classification runs.",
    features: [
      {
        title: "Data Catalog Installation Sprints",
        description:
          "Configure enterprise data catalogs utilizing Collibra, Alation, or Apache Atlas to enable quick discovery."
      },
      {
        title: "Automated Cleansing Pipelines",
        description:
          "Integrate validation blocks and automated cleansing scripts within active ingestion data pipelines."
      },
      {
        title: "Automated Tagging Engine Setup",
        description:
          "Deploy scanning agents to tag personal profiles (PII) and compliance parameters dynamically."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS COMPLIANCE AUDITING & MAINTENANCE",
    title: "Stewardship Onboarding & Telemetry Reviews",
    description:
      "SSO user directory integrations, portal training runs, and regular schema update reviews.",
    features: [
      {
        title: "Okta / SSO Access Integrations",
        description:
          "Unify database query permissions with corporate directory profiles using secure LDAP integrations."
      },
      {
        title: "Active Steward Tool Training",
        description:
          "Conduct training workshops for data stewards and publish user directories to drive active adoption."
      },
      {
        title: "Continuous Lineage Auditing",
        description:
          "Orchestrate regular schema health audits, data lineage updates, and policy alignment audits."
      }
    ]
  }
];

const phaseLabels = [
  "STRATEGY & DISCOVERY",
  "GOVERNANCE & LINEAGE DESIGN",
  "CATALOG DEPLOYMENT Sprints",
  "COMPLIANCE TELEMETRY",
];

const title = "Enterprise Data Governance, Data Cataloging & Compliance Shields";
const subtitle = "";

const introDescription = [
  { text: "We deliver advanced data cataloging, custom ", bold: false },
  { text: "Master Data Management (MDM) frameworks", bold: true },
  { text: ", and secure data lineage orchestration. By streamlining metadata classifications, compliance shielding registries (GDPR, HIPAA), and automated access directories, we help enterprises deploy robust data governance systems built to maximize data utility and protect corporate integrity.", bold: false }
]

const DataGovernance: React.FC = () => {
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
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="COMPLIMENTARY STRATEGY SESSION"
                titleMain="Map your "
                titleAccent="data governance"
                titleEnd=" roadmap."
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert Data Systems'
                description='We deliver specialized governance services to support your enterprise workflows.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={emergingTechData} />
            <Processes
                title="OUR CUSTOM DATA GOVERNANCE PROCESS"
                phaseLabels={phaseLabels}
                processPhases={processesData}
            />
        </>
    );
};

export default DataGovernance;
