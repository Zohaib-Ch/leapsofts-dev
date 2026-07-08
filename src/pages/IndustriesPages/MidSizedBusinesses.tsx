import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO MID-SIZED BUSINESSES",
  title: "Your Vision, Architected for Growth",
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

const streamlineDescription = [
  { text: "Scale your ", bold: false },
  { text: "mid-sized business ", bold: true },
  { text: "with a focused digital strategy. Leapsofts offers a ", bold: false },
  { text: "complimentary business strategy session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "operational bottlenecks ", bold: true },
  { text: "and roadmap your path to enterprise-level efficiency.", bold: false },
];

const title = "Custom Software Development, Enterprise Workflows & Scalable IT for Mid-Sized Businesses";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we engineer custom enterprise-grade ", bold: false },
  { text: "ERP synchronization platforms, operations orchestration portals, and legacy system modernizations ", bold: true },
  { text: "tailored specifically to bridge the technology gap for mid-market and scaling businesses. By integrating centralized inventory management hubs, deploying paperless field workforce dispatchers, and connecting secure payment gateways, we eliminate operational bottlenecks to fuel high-efficiency corporate expansion.", bold: false }
];

const MidSizedBusinesses: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Enterprise Business Solutions",
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
        titleMain="Business "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={businessSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" mid-sized businesses"
      />
    </>
  );
};

export default MidSizedBusinesses;
