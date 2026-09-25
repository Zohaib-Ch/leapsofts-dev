import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
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

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO FINANCIAL ORGANIZATIONS",
  title: "Custom FinTech software built to scale transactions and secure assets",
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

const streamlineDescription = [
  { text: "Whether it is an ", bold: false },
  { text: "existing enterprise software system ", bold: true },
  { text: "or a ", bold: false },
  { text: "brand-new fintech startup", bold: true },
  { text: ", we offer a ", bold: false },
  { text: "no-charge strategy session", bold: true },
  { text: ", which can bring value to the table almost in real-time. We learn about your unique compliance needs and share how to streamline your transactions by using ", bold: false },
  { text: "bespoke, PCI-DSS-compliant custom software solutions", bold: true },
  { text: ".", bold: false },
];

const title = "FinTech Software Development, Secure Payment Gateways & Trading Architectures";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we build highly secure, transaction-resilient ", bold: false },
  { text: "financial technology (FinTech) platforms, custom banking portals, and algorithmic trading systems ", bold: true },
  { text: "engineered to handle hyper-scale transaction volumes with absolute precision. By integrating PCI-DSS compliant checkout structures, automating multi-currency clearing runs, and designing real-time risk telemetry engines, we future-proof financial firms and enable zero-friction asset movement.", bold: false }
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
    defaultDescription: "Custom fintech software development for banks, insurance & investment firms. Leapsofts builds secure, compliance-ready financial platforms. Get a consultation.",
    defaultKeywords: "fintech software development, banking software company, financial software development, insurance software",
    canonicalUrl: "https://www.leapsofts.com/industries/finance",
  });
}



const Finance: React.FC = () => {
  const { data } = useIndustryPage('finance');

  const schemaData = buildServiceSchema({
    name: "Fintech Software Development Services",
    description: "Custom fintech software development for banks, insurance & investment firms.",
    canonicalUrl: "https://www.leapsofts.com/industries/finance",
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

  const processTitleMain = data?.processHeader?.titleMain || "Fintech Software Development";
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
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended FinTech Engineering Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Finance;
