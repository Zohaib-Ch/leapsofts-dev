import { buildPageMeta, buildIndustrySchema } from '../../utils/seoHelper';
import { useIndustryPage } from '../../hooks/useIndustryPage';
import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import type { DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO FINANCIAL ORGANIZATIONS",
  title: "Custom FinTech software built to scale transactions and secure institutional assets",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Proactive Threat Shielding',
      description: "Enforcing continuous transaction threat monitoring, secure key lockers, and advanced fraud detection suites to protect high-value customer and institutional assets from cyber threats."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Automated KYC/AML Checks',
      description: "Integrating automated verification loops, background scans, and instant document reviews to ensure compliance with KYC, AML, and international financial regulations."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Decoupled Data Architecture',
      description: "Structuring highly decoupled transaction databases, multi-region replication layers, and optimized caching to support zero-latency runs and 99.99% operational uptime."
    }
  ]
};

const ourTechInnovationsData: EmergingTechProps['data'] = {
  label: 'TECH INNOVATIONS TO CONSIDER',
  titleAccent: 'Tech innovations for',
  titleMain: 'FinTech solutions',
  description: 'We leverage cutting-edge technologies to future-proof your financial solutions and enhance operational efficiency.',
  items: [
    {
      icon: 'legacy',
      title: 'Core Banking Digitization',
      description: 'Migrate static legacy banking cores to high-performance, API-first microservices pipelines to support scalable accounts management.'
    },
    {
      icon: 'enterprise',
      title: 'PCI Payment Gateways',
      description: 'Integrating secure tokenized credit processors, localized clearing systems, and dynamic multi-currency wallets with complete PCI-DSS compliance.'
    },
    {
      icon: 'thirdParty',
      title: 'Blockchain Ledger Systems',
      description: 'Deploying distributed ledger technologies (DLT) and type-safe smart contracts for transparent, instant cross-border payments and reconciliations.'
    },
    {
      icon: 'product',
      title: 'AI Risk Score Engines',
      description: 'Analyzing active market data, checking loan applications, and detecting transaction anomalies using predictive machine learning workflows.'
    },
    {
      icon: 'saas',
      title: 'Wealth Dashboards',
      description: 'Building sleek, responsive portfolio charts, dynamic fee calculators, and real-time stock telemetry visualizers with smooth animations.'
    },
    {
      icon: 'legacy',
      title: 'Robo-Advisors & Alerts',
      description: 'Developing automated robo-advisor engines, smart savings triggers, and customizable personal asset trackers with interactive controls.'
    },
    {
      icon: 'product',
      title: 'High-Frequency Trading Platforms',
      description: 'Designing low-latency order execution systems, real-time pricing corridors, and high-speed data stream feeds for market makers.'
    },
    {
      icon: 'enterprise',
      title: 'Digital Credit Pipelines',
      description: 'Configuring automated credit underwriting frameworks that verify bank statements and calculate credit risk profiles in seconds.'
    }
  ]
};

const fintechDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR FINTECH",
  title: "How We Deliver Your FinTech MVP in",
  accentText: "3-5 months",
  description: "Building financial technology requires an uncompromising balance of rapid go-to-market speed, strict banking security standards, and high-throughput transactional resilience. Our specialized FinTech engineering pods follow proven agile blueprints, integrating payment gateways, open banking APIs, and automated compliance pipelines to deliver production-grade MVPs on time, every time.",
  items: [
    {
      title: "PCI-DSS Level 1 & Bank-Grade Security.",
      description: "From day one, we build with tokenized payment vaults, end-to-end data encryption (AES-256), mTLS authentication, and automated vulnerability scanning to ensure strict compliance."
    },
    {
      title: "Seamless Open Banking & API Integrations.",
      description: "We architect bidirectional connectors for Plaid, Stripe, Yodlee, core banking APIs, and localized clearing houses, enabling instant account verification and fund settlement."
    },
    {
      title: "Sub-50ms Transaction Latency & High Concurrency.",
      description: "Using distributed caching, event-driven microservices (Kafka), and decoupled relational databases, our systems process high-volume transactions with zero bottlenecks."
    },
    {
      title: "Automated KYC/AML Compliance Workflows.",
      description: "We implement turnkey onboarding identity verification, sanction list screening, and real-time fraud scoring pipelines to satisfy strict global financial regulations."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you ensure PCI-DSS compliance when building custom FinTech software?",
    answer: "We implement PCI-DSS Level 1 security architectures from inception, including tokenized credit card vaults, strict network segmentation, TLS 1.3 encryption in transit, AES-256 encryption at rest, and automated continuous compliance logging."
  },
  {
    question: "Can you modernize our legacy banking core without operational downtime?",
    answer: "Yes. We use the Strangler Fig pattern to gradually decouple monolithic banking systems into event-driven microservices, running shadow transactions and automated reconciliation loops to guarantee zero downtime during cutover."
  },
  {
    question: "What third-party financial APIs and payment gateways do you integrate?",
    answer: "We have deep expertise integrating Open Banking APIs (Plaid, Yodlee, MX), payment processors (Stripe, Adyen, PayPal), core banking systems (FIS, Fiserv, Thought Machine), and crypto/DLT settlement protocols."
  },
  {
    question: "How do your FinTech engineering pods handle high-volume transaction spikes?",
    answer: "We engineer horizontal auto-scaling cloud architectures on AWS and Azure using Kubernetes, Redis distributed caching, and Apache Kafka message brokers to reliably handle thousands of concurrent transactions per second."
  }
];

const streamlineDescription = [
  { text: "Whether modernizing an ", bold: false },
  { text: "enterprise banking infrastructure ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "next-gen FinTech application", bold: true },
  { text: ", our technical architects provide immediate strategic clarity. We assess your transaction flows, review regulatory compliance requirements, and map out a ", bold: false },
  { text: "bespoke, PCI-DSS compliant engineering roadmap ", bold: true },
  { text: "tailored for scale.", bold: false },
];

const title = "FinTech Software Development, Secure Payment Gateways & Trading Architectures";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we engineer highly secure, transaction-resilient ", bold: false },
  { text: "financial technology (FinTech) platforms, custom banking portals, and algorithmic trading systems ", bold: true },
  { text: "built to handle hyper-scale transaction volumes with absolute precision. By integrating PCI-DSS compliant checkout structures, automating multi-currency clearing runs, and deploying real-time risk telemetry engines, we future-proof financial firms and enable zero-friction asset movement.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('finance');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Fintech Software Development Services | Leapsofts",
    defaultDescription: "Custom fintech software development for banks, investment firms & fintech startups. Leapsofts builds secure, PCI-DSS compliant financial platforms.",
    defaultKeywords: "fintech software development, financial software development services, banking software company, custom fintech solutions, pci dss level 1 software, open banking api integration, algorithmic trading software, core banking modernization, payment gateway integration, automated loan origination software, wealth management software development, financial risk analytics platform, blockchain digital wallet development, sub-50ms trading execution engine",
    canonicalUrl: "https://www.leapsofts.com/industries/finance",
  });
}

const Finance: React.FC = () => {
  const { data } = useIndustryPage('finance');

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/finance";
  const schemaData = buildIndustrySchema({
    name: "FinTech & Financial Software Development Services",
    description: "Secure financial software development — banking platforms, payment gateways, PCI-DSS compliance.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Finance & FinTech",
    faqs: activeFaqs,
  });
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

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
        label: data.solutionsSection.label || ourTechInnovationsData.label,
        titleAccent: data.solutionsSection.titleAccent || ourTechInnovationsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || ourTechInnovationsData.titleMain,
        description: data.solutionsSection.description || ourTechInnovationsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : ourTechInnovationsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || fintechDeliverMVPData.label,
        title: data.deliverMVP.title || fintechDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || fintechDeliverMVPData.accentText,
        description: data.deliverMVP.description || fintechDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : fintechDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Fintech Software Development";
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
          title: "Cyber Security & Threat Defense",
          description: "Penetration testing, encryption protocols, and SOC2 financial threat defense.",
          link: "/services/cyber-security"
        },
        {
          title: "Data Governance & Compliance",
          description: "Automated KYC/AML verification workflows, data audits, and regulatory tracking.",
          link: "/services/data-governance"
        },
        {
          title: "Web App Development",
          description: "High-frequency financial web portals, trading dashboards, and banking applications.",
          link: "/services/web-app-development"
        }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Streamline your "}
        titleAccent={data?.strategyCTA?.titleAccent || "FinTech"}
        titleEnd={data?.strategyCTA?.titleEnd || " transaction ecosystem."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim FinTech Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " financial businesses"}
      />
      <FAQs
        title="FinTech & Banking Software FAQ"
        subtitle="Common questions about PCI-DSS compliance, core banking migrations, fraud detection, and automated KYC/AML verification."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended FinTech Engineering Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Finance;
