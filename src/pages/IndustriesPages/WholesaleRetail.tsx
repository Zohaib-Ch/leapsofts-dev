import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

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

export function meta() {
  const title = "Retail & Wholesale Software Development | Leapsofts";
  const description = "Custom retail & wholesale software — POS, inventory management & ecommerce platforms. Leapsofts modernizes operations for scaling retailers. Get a quote.";
  const keywords = "retail software development, wholesale management software, inventory management system, ecommerce software development";
  const canonicalUrl = "https://www.leapsofts.com/industries/wholesale-retail";

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
      "name": "Retail & Wholesale Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Retail & Wholesale Software Engineering",
      "description": "Custom retail & wholesale software — POS, inventory management & ecommerce platforms."
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
          "name": "Wholesale & Retail",
          "item": "https://www.leapsofts.com/industries/wholesale-retail"
        }
      ]
    }
  ]
};

const WholesaleRetail: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Retail & Commerce Platforms",
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
        titleMain="Retail "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={retailSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" retail businesses"
      />
      <RelatedServices
        services={[
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
        ]}
      />
    </>
  );
};

export default WholesaleRetail;
