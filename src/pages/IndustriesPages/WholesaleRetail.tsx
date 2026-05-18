import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

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
  { text: "At Leapsofts, we engineer highly performant, security-first ", bold: false },
  { text: "wholesale distribution systems, omnichannel retail engines, and multi-channel inventory management platforms ", bold: true },
  { text: "tailored to clear supply chain complexities and expand profit margins. By integrating automated stock replenishment workflows, optimizing multi-warehouse coordinate routing, and deploying unified e-commerce checkout paths, we empower retail brands and wholesale distributors to achieve global scale with absolute operational efficiency.", bold: false }
];

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
    </>
  );
};

export default WholesaleRetail;
