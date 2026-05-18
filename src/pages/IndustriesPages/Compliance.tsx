import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection';
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

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
  { text: "At Leapsofts, we engineer highly secure, enterprise-grade ", bold: false },
  { text: "regulatory technology (RegTech) solutions, automated compliance checkers, and centralized audit platforms ", bold: true },
  { text: "designed to mitigate operational risk across complex global jurisdictions. By enforcing strict zero-trust access frameworks, structuring immutable transaction audit logs, and integrating intelligent sanction screening engines, we empower organizations to confidently satisfy rigorous corporate audits and regulatory reporting mandates.", bold: false }
];

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
    </>
  );
};

export default Compliance;
