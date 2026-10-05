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
  subtitle: "OUR COMMITMENT TO MID-SIZED BUSINESSES",
  title: "Your Vision, Architected for Enterprise Growth and Operational Efficiency",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Rapid, Market-Ready Delivery',
      description: "Accelerating your product schedules by launching functional MVP architectures inside 3 to 5 months, converting business blueprints into highly responsive corporate platforms."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Full Ownership and Value Creation',
      description: "Building clean, fully-owned software components that remain exclusive intellectual assets of your enterprise with complete IP handover and zero licensing dependencies."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Operational Efficiency and ROI',
      description: "Focusing on database optimization, automated invoicing routes, and redundant workflow consolidation to significantly lower back-office cost overheads."
    }
  ]
};

const businessSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Operational innovations for',
  titleMain: 'Business Growth',
  description: 'We implement smart digital solutions to streamline operations, enhance visibility, and support scalable expansion for mid-sized enterprises.',
  items: [
    {
      icon: 'legacy',
      title: 'Smart Inventory & Logistics',
      description: "Integrating central stock ledgers with real-time sales dashboards, barcode scanners, and automated reorder alerts to streamline warehousing."
    },
    {
      icon: 'enterprise',
      title: 'Workforce & Contractor CRM',
      description: "Designing task scheduling channels, secure shift calendars, and customized contractor dashboards with complete access safety logs."
    },
    {
      icon: 'thirdParty',
      title: 'Unified Billing Gateways',
      description: "Consolidating multiple credit gateways, bank ACH channels, and billing engines into a single secure Stripe transaction portal."
    },
    {
      icon: 'product',
      title: 'Proprietary IP Creation',
      description: "Refactoring internal legacy software scripts into clean, valuable enterprise-level assets to achieve lasting competitive advantage."
    },
    {
      icon: 'saas',
      title: 'Omnichannel Staff Portals',
      description: "Developing centralized employee intranets containing instant messaging corridors, secure file shares, and performance dashboards."
    },
    {
      icon: 'mobile',
      title: 'Paperless Field Mobile Apps',
      description: "Building responsive mobile apps showing diagnostic sheets, dispatch coordinate logs, and safety checks to field crews."
    },
    {
      icon: 'product',
      title: 'Integrated Support Desks',
      description: "Structuring automated customer helpdesk ticket routing engines, user email integrations, and SLA compliance trackers."
    },
    {
      icon: 'enterprise',
      title: 'Business Intelligence & SQL Metrics',
      description: "Configuring high-fidelity business intelligence dashboards to trace key profit ratios, inventory turn metrics, and staff work hours."
    }
  ]
};

const midSizedDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR MID-SIZED ENTERPRISES",
  title: "How We Deliver Your Enterprise Solution in",
  accentText: "3-5 months",
  description: "Mid-sized organizations often struggle with fragmented off-the-shelf software subscriptions that do not talk to each other and exorbitant per-seat licensing costs. We engineer custom, fully owned enterprise platforms and modernize legacy back-office tools within 3 to 5 months—streamlining operations, integrating ERPs/CRMs, and delivering massive operational cost savings.",
  items: [
    {
      title: "Consolidated Operations & Zero Per-User Fees.",
      description: "We replace fragmented, costly SaaS stacks with unified, tailor-made corporate portals that eliminate recurring per-seat subscription overheads across your organization."
    },
    {
      title: "Seamless ERP, CRM & Legacy Database Modernization.",
      description: "We bridge legacy databases, QuickBooks, NetSuite, SAP, or Salesforce using modern API layers and real-time bidirectional data synchronizations."
    },
    {
      title: "Role-Based Security & Executive BI Dashboards.",
      description: "We configure granular departmental access controls (RBAC), multi-factor authentication, and executive business intelligence dashboards for real-time KPI tracking."
    },
    {
      title: "Predictable Fixed-Price & Agile Pod Delivery.",
      description: "Our structured delivery models give mid-market leaders complete budget predictability, transparent sprint milestones, and dedicated senior engineering pods."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "Why should a mid-sized business choose custom software over commercial off-the-shelf SaaS?",
    answer: "Off-the-shelf SaaS often forces businesses into rigid workflows and charges escalating per-seat monthly subscription fees. Custom software gives you 100% intellectual property ownership, zero recurring per-user fees, seamless integration with your existing legacy systems, and features tailored precisely to your operational advantage."
  },
  {
    question: "Can you modernize our legacy desktop software or outdated databases without disrupting daily operations?",
    answer: "Yes. We specialize in application re-engineering and legacy modernization. We use phased transition strategies and real-time database replication to ensure your team experiences zero operational downtime while migrating to modern, cloud-native web and mobile applications."
  },
  {
    question: "What ERP, CRM, and accounting systems can your software integrate with?",
    answer: "We build custom connectors and bidirectional API integrations for SAP, NetSuite, Microsoft Dynamics 365, Salesforce, HubSpot, QuickBooks Enterprise, and industry-specific legacy database systems."
  },
  {
    question: "How do you guarantee budget predictability for mid-sized enterprise projects?",
    answer: "We offer both fixed-price project contracts with crystal-clear milestone deliverables and agile dedicated engineering pods. We perform comprehensive technical discovery before development begins to eliminate scope creep and unexpected costs."
  }
];

const streamlineDescription = [
  { text: "Scale your ", bold: false },
  { text: "mid-sized business ", bold: true },
  { text: "with a focused digital strategy. Leapsofts offers a ", bold: false },
  { text: "complimentary business strategy session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "operational bottlenecks ", bold: true },
  { text: "and roadmap your path to enterprise-level efficiency.", bold: false },
];

const title = "Custom Software Development for Mid-Sized Businesses & Mid-Market Enterprises";
const subtitle = "";
const introDescription = [
  { text: "We deliver specialized ", bold: false },
  { text: "software development for mid-sized businesses & mid-market companies ", bold: true },
  { text: "seeking enterprise-quality engineering. By building custom ERP sync platforms, operations management portals, and paperless field mobile apps, we help growing SMBs bridge technical gaps and accelerate scalable corporate expansion.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('mid-sized-businesses');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Software Development for Mid-Sized Businesses & Enterprises | Leapsofts",
    defaultDescription: "Leapsofts engineers custom software for mid-sized businesses & mid-market companies — enterprise ERP integration, legacy app re-engineering, paperless mobile apps & BI analytics.",
    defaultKeywords: "software development for mid-sized businesses, mid-market custom software development, enterprise application development, custom business process automation, legacy software modernization, mid-sized enterprise erp crm development, custom workflow automation software, database migration services, internal tool development, proprietary enterprise software, cloud modernization for mid-market, zero license fee custom software",
    canonicalUrl: "https://www.leapsofts.com/industries/mid-sized-businesses",
  });
}

const MidSizedBusinesses: React.FC = () => {
  const { data } = useIndustryPage('mid-sized-businesses');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/mid-sized-businesses";
  const schemaData = buildIndustrySchema({
    name: "Enterprise Software Solutions for Mid-Sized Businesses",
    description: "Custom software solutions for mid-sized businesses — modernization, automation, and digital transformation.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Mid-Sized Enterprise",
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
        label: data.solutionsSection.label || businessSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || businessSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || businessSolutionsData.titleMain,
        description: data.solutionsSection.description || businessSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : businessSolutionsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || midSizedDeliverMVPData.label,
        title: data.deliverMVP.title || midSizedDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || midSizedDeliverMVPData.accentText,
        description: data.deliverMVP.description || midSizedDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : midSizedDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Enterprise Application Engineering";
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
          title: "Custom Software Development",
          description: "Build bespoke business management software tailored to your workflows.",
          link: "/services/custom-software-development"
        },
        {
          title: "Fixed Price Software Development",
          description: "Deliver your software project on a predictable, fixed-cost budget.",
          link: "/services/fixed-price"
        },
        {
          title: "Application Re-Engineering",
          description: "Modernize legacy database tools and desktop software into web applications.",
          link: "/services/app-reengineering"
        }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Scale your "}
        titleAccent={data?.strategyCTA?.titleAccent || "mid-sized business"}
        titleEnd={data?.strategyCTA?.titleEnd || " with custom software."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Business Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " mid-sized businesses"}
      />
      <FAQs
        title="Mid-Sized Business Software FAQ"
        subtitle="Common questions about custom enterprise software vs SaaS, legacy app re-engineering, ERP integration, and IP ownership."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Enterprise Modernization Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default MidSizedBusinesses;

