import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
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
    defaultKeywords: "compliance software development, regulatory compliance software, risk management software, audit management software, regtech solutions",
    canonicalUrl: "https://www.leapsofts.com/industries/compliance",
  });
}

const Compliance: React.FC = () => {
  const { data } = useIndustryPage('compliance');

  const schemaData = buildServiceSchema({
    name: "Compliance Management Software Development & RegTech",
    description: "Leapsofts engineers enterprise regulatory compliance software, automated risk management platforms, zero-trust audit trails & SOC2/KYC/AML RegTech engines.",
    canonicalUrl: "https://www.leapsofts.com/industries/compliance",
    faqs: data?.faqs,
  });
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeCommitmentData = (data?.commitmentSection && data.commitmentSection.items?.length)
    ? {
        subtitle: data.commitmentSection.subtitle || commitmentData.subtitle,
        title: data.commitmentSection.title || commitmentData.title,
        items: data.commitmentSection.items
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

  const processTitleMain = data?.processHeader?.titleMain || "Compliance Product Development";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
  }, [setProcessTitle, processTitleMain, processTitleAccent]);

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
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended RegTech & Compliance Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Compliance;

