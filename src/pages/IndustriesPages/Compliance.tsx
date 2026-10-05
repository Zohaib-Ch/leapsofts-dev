import { buildPageMeta, buildIndustrySchema } from '../../utils/seoHelper';
import { useIndustryPage } from '../../hooks/useIndustryPage';
import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import type { DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP';
import { getSanityIndustryBySlug } from '../../sanity/queries';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO COMPLIANCE",
  title: "Navigating regulatory complexity with automated RegTech frameworks",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Operational Transparency',
      description: "Creating secure, tamper-proof system logs, database change events, and granular user action histories to provide auditors with unquestionable operational visibility."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Continuous Audit Readiness',
      description: "Structuring scheduled report compilation runs and compliance pipelines that draft, format-validate, and package audit documents automatically for state and federal submissions."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Bulletproof Data Integrity',
      description: "Encrypting sensitive business files with hardware security modules (HSM) and customer-managed keys (BYOK), backed by comprehensive data-loss prevention policies."
    }
  ]
};

const complianceSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Governance & Compliance',
  description: 'We build robust RegTech solutions that help organizations automate compliance, manage risks, and ensure adherence to global standards.',
  items: [
    {
      icon: 'legacy',
      title: 'Automated Report Builders',
      description: "Drafting complex regulatory disclosures, tax schedules, and quarterly compliance logs automatically with built-in format checkers and validation triggers."
    },
    {
      icon: 'enterprise',
      title: 'Real-Time Risk Trackers',
      description: "Monitoring internal database modifications, ingress API logs, and administrative system tasks in real-time to flag configuration changes."
    },
    {
      icon: 'thirdParty',
      title: 'AI KYC/AML Screening',
      description: "Automating customer identity verification, screening against global sanctions lists, and executing PEP checks with intelligent machine learning matches."
    },
    {
      icon: 'product',
      title: 'Unified Policy Lifecycle',
      description: "Centralizing the drafting, revision history reviews, and employee training acknowledgement workflows of corporate bylaws and compliance codes."
    },
    {
      icon: 'saas',
      title: 'Transaction Compliance Scans',
      description: "Analyzing live payment streams and bank transfers to identify potential structural violations, money laundering patterns, or wire anomalies."
    },
    {
      icon: 'mobile',
      title: 'Encrypted Ledger Vaults',
      description: "Providing highly secure, hardware-secured storage pipelines for storing company records, immutable hashes, and compliance evidence files."
    },
    {
      icon: 'product',
      title: 'Zero-Trust Identity Gates',
      description: "Configuring multi-factor authentication (MFA), role-based permissions (RBAC), and session expiration controls to secure sensitive business pipelines."
    },
    {
      icon: 'enterprise',
      title: 'Third-Party TPRM Engines',
      description: "Structuring vendor assessment trackers displaying active risk levels, security questionnaire replies, and active SOC2 certificate expirations."
    }
  ]
};

const complianceDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR COMPLIANCE & REGTECH",
  title: "How We Deliver Your RegTech MVP in",
  accentText: "3-5 months",
  description: "Navigating volatile regulatory mandates requires software engineering that combines airtight cryptographic integrity, continuous compliance automation, and audit-ready data pipelines. Our specialized RegTech engineering pods build scalable governance engines, automated KYC/AML verification workflows, and immutable audit logs that empower enterprises to satisfy SOC2 Type II, ISO 27001, GDPR, and FedRAMP requirements on schedule.",
  items: [
    {
      title: "Immutable Audit Trails & Cryptographic Ledgering.",
      description: "We implement tamper-proof write-once-read-many (WORM) audit logs and SHA-256 cryptographic hashing to provide auditors with indisputable proof of data lineage and user access events."
    },
    {
      title: "Automated Evidence Collection & Continuous Auditing.",
      description: "Our pipelines automatically pull configuration snapshots, infrastructure changes, and access records from AWS/Azure, compiling audit-ready evidence packs for SOC2, ISO 27001, and HIPAA."
    },
    {
      title: "Real-Time Transaction Monitoring & AML Screening.",
      description: "We engineer low-latency screening engines matching transaction flows against global sanction lists, PEP databases, and behavioral anomaly heuristics to detect fraud instantly."
    },
    {
      title: "Zero-Trust Architecture & Granular Access Governance.",
      description: "We enforce role-based access control (RBAC), attribute-based access control (ABAC), hardware-backed MFA, and automated session termination to safeguard sensitive enterprise data."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do your compliance platforms automate SOC 2 Type II and ISO 27001 audits?",
    answer: "We engineer continuous compliance monitoring systems that integrate directly with cloud infrastructure (AWS, Azure, GCP), identity providers, and GitHub/GitLab. The platform automatically collects configuration logs, access reviews, and encryption verifications, compiling audit-ready compliance packages in real time."
  },
  {
    question: "How do you guarantee that system audit logs and data records cannot be altered or deleted?",
    answer: "We employ append-only immutable storage, cryptographic block chaining (SHA-256 hashes), and Write-Once-Read-Many (WORM) storage policies. Any unauthorized tampering or deletion attempt immediately triggers security alerting and creates an indelible record."
  },
  {
    question: "Can your RegTech software handle multi-jurisdictional privacy laws like GDPR, CCPA, and CPRA?",
    answer: "Yes. We build automated data privacy management modules supporting Data Subject Access Requests (DSAR), automated personal data discovery/tagging, granular consent tracking, and verifiable right-to-be-forgotten deletion workflows."
  },
  {
    question: "How fast can you build and deploy a custom regulatory reporting or AML screening engine?",
    answer: "Our dedicated engineering pods leverage pre-built, battle-tested compliance modules and open-standard integrations to deliver a production-ready RegTech MVP within 3 to 5 months, fully customized to your industry's regulatory framework."
  }
];

const streamlineDescription = [
  { text: "Simplify your ", bold: false },
  { text: "regulatory compliance ", bold: true },
  { text: "and reduce operational risk. Leapsofts offers a ", bold: false },
  { text: "complimentary compliance strategy session ", bold: true },
  { text: "to help you design an ", bold: false },
  { text: "automated compliance framework ", bold: true },
  { text: "for long-term regulatory success.", bold: false },
];

const title = "Compliance & RegTech Solutions, Risk Mitigation & Automated Audit Trails";
const subtitle = "";
const introDescription = [
  { text: "We engineer enterprise-grade ", bold: false },
  { text: "regulatory compliance software development, risk management systems, and automated audit trail platforms ", bold: true },
  { text: "designed for highly regulated sectors. By implementing zero-trust access controls, automated KYC/AML checks, and SOC2/HIPAA compliance engines, we help organizations satisfy strict global auditing mandates.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('compliance');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Compliance Management Software Development & RegTech | Leapsofts",
    defaultDescription: "Leapsofts engineers enterprise regulatory compliance software, automated risk management platforms, zero-trust audit trails & SOC2/KYC/AML RegTech engines.",
    defaultKeywords: "compliance software development, regtech software development company, regulatory compliance software, automated compliance management software, risk management software development, soc2 compliance automation, iso 27001 compliance software, gdpr regulatory compliance platform, aml kyc screening software, audit management software, continuous compliance monitoring, worm immutable audit trail, enterprise grc software development",
    canonicalUrl: "https://www.leapsofts.com/industries/compliance",
  });
}

const Compliance: React.FC = () => {
  const { data } = useIndustryPage('compliance');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/compliance";
  const schemaData = buildIndustrySchema({
    name: "Regulatory Compliance Software Development Services",
    description: "Custom compliance management systems — GDPR, ISO 27001, SOC2 and regulatory reporting.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Regulatory Compliance",
    faqs: activeFaqs,
  });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeCommitmentData: CommitmentSectionProps['data'] = (data?.commitmentSection && data.commitmentSection.items?.length)
    ? {
        subtitle: data.commitmentSection.subtitle || commitmentData.subtitle,
        title: data.commitmentSection.title || commitmentData.title,
        items: data.commitmentSection.items.map((item, idx) => ({
          icon: item.icon || commitmentData.items?.[idx]?.icon || '/industryicons/sphere.svg',
          title: item.title,
          description: item.description
        }))
      }
    : commitmentData;

  const activeSolutionsData = (data?.solutionsSection && data.solutionsSection.items?.length)
    ? {
        label: data.solutionsSection.label || complianceSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || complianceSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || complianceSolutionsData.titleMain,
        description: data.solutionsSection.description || complianceSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : complianceSolutionsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || complianceDeliverMVPData.label,
        title: data.deliverMVP.title || complianceDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || complianceDeliverMVPData.accentText,
        description: data.deliverMVP.description || complianceDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : complianceDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Compliance Product Development";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
    if (setDeliverMVPData) {
      setDeliverMVPData(activeDeliverMVPData);
    }
  }, [setProcessTitle, setDeliverMVPData, processTitleMain, processTitleAccent, activeDeliverMVPData]);

  const activeRelatedServices = (data?.relatedServices?.items && data.relatedServices.items.length > 0)
    ? data.relatedServices.items
    : [
        {
          title: "Data Governance & Compliance",
          description: "Deploy Master Data Management (MDM) and GDPR/HIPAA compliance frameworks.",
          link: "/services/data-governance"
        },
        {
          title: "Cyber Security & Auditing",
          description: "Conduct penetration audits and zero-trust vulnerability scans.",
          link: "/services/cyber-security"
        },
        {
          title: "Custom Software Development",
          description: "Build custom enterprise risk management software and reporting dashboards.",
          link: "/services/custom-software-development"
        }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "STREAMLINE YOUR SUCCESS"}
        titleMain={data?.strategyCTA?.titleMain || "Software "}
        titleAccent={data?.strategyCTA?.titleAccent || "Strategy"}
        titleEnd={data?.strategyCTA?.titleEnd || " Session"}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Compliance Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " compliant organizations"}
      />
      <FAQs
        title="Compliance & RegTech Software FAQ"
        subtitle="Common questions about regulatory frameworks, automated audit trails, zero-trust security, and KYC/AML automation."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended RegTech & Compliance Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Compliance;

