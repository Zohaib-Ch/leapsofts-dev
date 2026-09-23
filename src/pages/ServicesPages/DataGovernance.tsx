import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
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
  { text: "We provide comprehensive ", bold: false },
  { text: "data governance services & enterprise data management ", bold: true },
  { text: "solutions including Master Data Management (MDM), data cataloging, and GDPR/HIPAA compliance frameworks. We help organizations transform fragmented databases into secure, highly audited sources of truth.", bold: false }
]

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('data-governance');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Data Governance Services | Leapsofts",
    defaultDescription: "Enterprise data governance frameworks to ensure compliance, accuracy & security. Leapsofts builds robust data strategies for regulated industries. Consult us.",
    defaultKeywords: "data governance services, enterprise data management, data compliance services, data quality management",
    canonicalUrl: "https://www.leapsofts.com/services/data-governance",
  });
}



const DataGovernance: React.FC = () => {
  const { data } = useServicePage('data-governance');

  const schemaData = buildServiceSchema({
    name: "Data Governance Services",
    description: "Enterprise data governance frameworks to ensure compliance, accuracy & security.",
    canonicalUrl: "https://www.leapsofts.com/services/data-governance",
    faqs: data?.faqs,
  });

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof infoGridData !== 'undefined' ? infoGridData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof infoGridData !== 'undefined' ? infoGridData.title : ''),
        description: data.infoGrid.description || (typeof infoGridData !== 'undefined' ? infoGridData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof infoGridData !== 'undefined' ? infoGridData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof emergingTechData !== 'undefined' ? emergingTechData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof emergingTechData !== 'undefined' ? emergingTechData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof emergingTechData !== 'undefined' ? emergingTechData.titleMain : ''),
        description: data.emergingTech.description || (typeof emergingTechData !== 'undefined' ? emergingTechData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof emergingTechData !== 'undefined' ? emergingTechData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.label : ''),
        title: data.deliverMVP.title || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.title : ''),
        accentText: data.deliverMVP.accentText || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.accentText : ''),
        description: data.deliverMVP.description || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.description : ''),
        items: data.deliverMVP.items || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.items : [])
      }
    : (typeof deliverMVPData !== 'undefined' ? deliverMVPData : { label: '', title: '', accentText: '', description: '', items: [] });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.label : ''),
        titleMain: data.serviceOverview.titleMain || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleMain : ''),
        titleAccent: data.serviceOverview.titleAccent || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleAccent : ''),
        titleEnd: data.serviceOverview.titleEnd || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleEnd : ''),
        description: data.serviceOverview.description || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.description : ''),
        imagePath: data.serviceOverview.imageUrl || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.imagePath : undefined)
      }
    : (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData : null);

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : (typeof processesData !== 'undefined' ? processesData : []);

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : (typeof phaseLabels !== 'undefined' ? phaseLabels : []);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
            <ServiceOverview
                label={serviceOverviewData.label}
                titleMain={serviceOverviewData.titleMain}
                titleAccent={serviceOverviewData.titleAccent}
                titleEnd={serviceOverviewData.titleEnd}
                description={serviceOverviewData.description}
                imagePath={serviceOverviewData.imagePath}
            />
            <InfoGrid data={activeInfoGridData} />
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
            <DeliverMVP data={activeDeliverMVPData} />
            <EmergingTech data={activeEmergingTechData} />
            <Processes
                title={data?.processes?.title || "OUR CUSTOM DATA GOVERNANCE PROCESS"}
                phaseLabels={activePhaseLabels}
                processPhases={activeProcessPhases}
            />
            <RelatedServices
                services={[
                    {
                        title: "Data Science & AI Solutions",
                        description: "Leverage governed data assets to train predictive machine learning models.",
                        link: "/services/data-science-ai"
                    },
                    {
                        title: "Cyber Security & Compliance Audits",
                        description: "Audit data encryption, OAuth2 keychains, and zero-trust access boundaries.",
                        link: "/services/cyber-security"
                    },
                    {
                        title: "Cloud Engineering & Data Warehousing",
                        description: "Architect secure data lakes on AWS Redshift, Snowflake, and Azure Synapse.",
                        link: "/services/cloud-engineering"
                    }
                ]}
            />
        </>
    );
};

export default DataGovernance;
