import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO WHOLESALE AND RETAIL",
  title: "Accelerating Wholesale Growth with Bespoke Tech",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Total System Transparency',
      description: "We eliminate operational blind spots by integrating real-time data feeds across your inventory and fleet, ensuring a 360-degree view of your business."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Operational ROI',
      description: "We build efficiency engines that mechanize repetitive manual tasks—from billing to onboarding—aiming for significant overhead reductions and performance gains."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Future-Proofing',
      description: "By modernizing legacy systems and utilizing scalable cloud architecture, we ensure your software remains resilient against technological shifts and integrates tools seamlessly."
    },
  ]
}

const retailSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Retail-Focused',
  titleMain: ' Digital Solutions',
  description: 'We replace outdated legacy systems with modern, integrated technology designed to expand margins and automate complex logistics.',
  items: [
    {
      icon: 'legacy',
      title: 'Inventory Management',
      description: 'Real-time stock reports and multi-warehouse tracking with predictive analytics to optimize purchasing.'
    },
    {
      icon: 'enterprise',
      title: 'Order Fulfillment',
      description: 'End-to-end tracking tools leveraging purchase history for targeted upselling and cross-selling.'
    },
    {
      icon: 'thirdParty',
      title: 'Fleet & Telematics',
      description: 'Optimization tools focused on maximizing vehicle performance and delivery productivity.'
    },
    {
      icon: 'saas',
      title: 'Billing & Payments',
      description: 'Secure, seamless transaction cycles with e-invoicing and diverse payment gateway integrations.'
    },
    {
      icon: 'product',
      title: 'Vendor & Client CRM',
      description: 'A centralized platform for managing interaction history, contact info, and sales pipelines.'
    },
    {
      icon: 'mobile',
      title: 'Employee Onboarding',
      description: 'HR platforms streamlining recruiting, compliance, and personalized training modules.'
    }
  ]
}

const streamlineDescription = [
  { text: "Streamline your ", bold: false },
  { text: "wholesale and retail operations ", bold: true },
  { text: "with a modernized technical infrastructure. Leapsofts offers a ", bold: false },
  { text: "complimentary retail strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "supply chain and customer engagement.", bold: true },
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
        title="Modern Technology for Wholesale & Retail"
        description=""
        introDescription={[
          { text: "Upgrading client relationships and automating complex logistics with custom-built retail and commerce software solutions.", bold: false }
        ]}
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
  )
}

export default WholesaleRetail
