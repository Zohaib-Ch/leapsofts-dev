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

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO WHOLESALE AND RETAIL",
  title: "Accelerating Wholesale Growth with Bespoke Tech",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Total System Transparency',
      description: "Eliminating operational blind spots by linking active stock metrics with dispatch telematics, providing teams with a real-time, 360-degree view of your supply chain network."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Accelerated Operational ROI',
      description: "We build intelligent optimization engines that mechanize repetitive processing, order routing, and client billing procedures to cut manual overheads."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Dynamic Scalability',
      description: "Modernizing monolithic inventory databases to modular, cloud-native container platforms to support high seasonal peaks without site latency or transaction drops."
    }
  ]
};

const retailSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Retail-Focused',
  titleMain: ' Digital Solutions',
  description: 'We replace outdated legacy systems with modern, integrated technology designed to expand margins and automate complex logistics.',
  items: [
    {
      icon: 'legacy',
      title: 'Predictive Inventory Control',
      description: 'Deploying multi-warehouse inventory systems featuring real-time stock counts, automated replenishment thresholds, and machine-learning-driven seasonal demand forecasting.'
    },
    {
      icon: 'enterprise',
      title: 'Omnichannel Checkout Gateways',
      description: 'Integrating secure transaction processors, localized regional payment routes, and unified cart flows across mobile, web, and physical POS networks.'
    },
    {
      icon: 'thirdParty',
      title: 'Smart Order Orchestration',
      description: 'Automating checkout fulfillment paths using advanced route algorithms to dispatch orders from the closest warehouse holding adequate stock.'
    },
    {
      icon: 'saas',
      title: 'Fleet Telematics & Routing',
      description: 'Enabling high-frequency GPS coordinate mapping, dynamic transit route calculations, and vehicle diagnostic logging to guarantee delivery SLA speeds.'
    },
    {
      icon: 'product',
      title: 'B2B Wholesaler Portals',
      description: 'Building dedicated self-service wholesale client dashboards with customizable bulk pricing tables, credit line parameters, and instant invoice tracking.'
    },
    {
      icon: 'legacy',
      title: 'Supplier Relationship CRM',
      description: 'Centralizing supplier contract directories, performance SLAs, item fulfillment metrics, and automated purchase requisition cycles.'
    },
    {
      icon: 'product',
      title: 'Dynamic Price Calculators',
      description: 'Configuring real-time calculation engines that adjust wholesale pricing tiers based on order volume, customer loyalty scores, and current inventory thresholds.'
    },
    {
      icon: 'enterprise',
      title: 'Retail Staff Onboarding',
      description: 'Streamlining multi-branch employee training tracking, security check verifications, and shift schedules updates through integrated employee platforms.'
    }
  ]
};

const streamlineDescription = [
  { text: "Streamline your ", bold: false },
  { text: "wholesale and retail operations ", bold: true },
  { text: "with a modernized technical infrastructure. Leapsofts offers a ", bold: false },
  { text: "complimentary retail strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "supply chain and customer engagement.", bold: true },
];

const title = "Wholesale & Retail Software Development, Omnichannel E-commerce & Smart Logistics";
const subtitle = "";
const introDescription = [
  { text: "We deliver cutting-edge ", bold: false },
  { text: "retail software development, wholesale management software, and inventory management systems ", bold: true },
  { text: "engineered to optimize supply chains and increase margins. By building automated stock replenishment workflows, multi-warehouse routing engines, and B2B portal integrations, we empower retailers and distributors to scale effortlessly.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('wholesale-retail');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Retail & Wholesale Software Development | Leapsofts",
    defaultDescription: "Custom retail & wholesale software — POS, inventory management & ecommerce platforms. Leapsofts modernizes operations for scaling retailers. Get a quote.",
    defaultKeywords: "retail software development, wholesale management software, inventory management system, ecommerce software development",
    canonicalUrl: "https://www.leapsofts.com/industries/wholesale-retail",
  });
}



const WholesaleRetail: React.FC = () => {
  const { data } = useIndustryPage('wholesale-retail');

  const schemaData = buildServiceSchema({
    name: "Retail & Wholesale Software Development",
    description: "Custom retail & wholesale software — POS, inventory management & ecommerce platforms.",
    canonicalUrl: "https://www.leapsofts.com/industries/wholesale-retail",
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
        label: data.solutionsSection.label || retailSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || retailSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || retailSolutionsData.titleMain,
        description: data.solutionsSection.description || retailSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : retailSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "E-Commerce Software Engineering";
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
          title: "Shopify Store Development",
          description: "Build custom Shopify themes and Hydrogen headless storefronts.",
          link: "/services/shopify"
        },
        {
          title: "Web App Development",
          description: "Engineer custom B2B wholesale portals and inventory management dashboards.",
          link: "/services/web-app-development"
        },
        {
          title: "Custom Software Development",
          description: "Build bespoke supply chain management and logistics automation platforms.",
          link: "/services/custom-software-development"
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
        titleAccent={data?.strategyCTA?.titleAccent || "Retail"}
        titleEnd={data?.strategyCTA?.titleEnd || " supply chain."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Retail Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " retail businesses"}
      />
      <FAQs
        title="Wholesale & Retail Software FAQ"
        subtitle="Common questions about omnichannel POS integration, B2B wholesale portals, predictive inventory, and headless commerce."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Retail Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default WholesaleRetail;
