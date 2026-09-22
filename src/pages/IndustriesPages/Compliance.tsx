import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection';
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

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

export function meta() {
  const title = "Compliance Management Software Development | Leapsofts";
  const description = "Custom regulatory compliance software — risk management, audit trails & reporting platforms. Leapsofts builds compliance-ready systems for regulated industries.";
  const keywords = "compliance software development, regulatory compliance software, risk management software, audit management software";
  const canonicalUrl = "https://www.leapsofts.com/industries/compliance";

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
      "name": "Compliance Management Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Compliance Management Software Engineering",
      "description": "Custom regulatory compliance software — risk management, audit trails & reporting platforms."
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
          "name": "Compliance & RegTech",
          "item": "https://www.leapsofts.com/industries/compliance"
        }
      ]
    }
  ]
};

const Compliance: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Compliance Software Development",
      titleAccent: "Process"
    });
  }, [setProcessTitle]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <CommitmentSection data={commitmentData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Compliance "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={complianceSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" compliant organizations"
      />
      <RelatedServices
        services={[
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
        ]}
      />
    </>
  );
};

export default Compliance;
