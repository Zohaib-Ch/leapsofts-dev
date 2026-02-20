import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';

  const commitmentData: CommitmentSectionProps['data'] = {
        subtitle: "OUR COMMITMENT TO WHOLESALE AND RETAIL",
        title: "Tailored software solutions for growing businesses",
        items: [
            {
                icon: '/industryicons/sphere.svg',
                title: 'Total System Transparency',
                description: "We commit to eliminating the blind spots in your operations. By integrating IoT sensors and real-time data feeds across your inventory and fleet, we ensure that you have a 360-degree view of your business at any moment. You will never have to make a critical decision based on outdated information."
            },
            {
                icon: '/industryicons/bipiramida.svg',
                title: 'Operational ROI',
                description: "We don't just build software; we build efficiency engines. We commit to a development strategy that focuses on mechanizing your most repetitive manual tasks—from billing to onboarding. Our goal is to replicate the results of our top clients, who have seen overhead reductions and efficiency gains translating to a 250% return on their technology investment.",
            },
            {
                icon: '/industryicons/diamond.svg',
                title: 'Future-Proofing',
                description: "We commit to building solutions that grow alongside your ambitions. By modernizing legacy systems and utilizing scalable cloud architecture, we ensure your software remains resilient against technological shifts. Our focus is on creating bleeding-edge systems that allow you to integrate new digital tools seamlessly, preventing your business from being held back by outdated technology.",
            },
        ]
    }
    const servicesData: InfoGridProps['data'] = {
  label: 'OPERATIONAL MODULES',
  title: 'Integrated Software for Efficiency',
  items: [
    {
      icon: '01',
      title: 'Inventory Management',
      description:
        'Provides real-time stock reports, multi-warehouse tracking, and predictive analytics to prevent stockouts, avoid overstocking, and optimize purchasing decisions.'
    },
    {
      icon: '02',
      title: 'Order Fulfillment',
      description:
        'End-to-end tracking tools for customer orders, seamlessly leveraging purchase history to facilitate targeted, high-conversion upselling and cross-selling opportunities.'
    },
    {
      icon: '03',
      title: 'Fleet Management',
      description:
        'Sophisticated telematics and optimization tools focused on maximizing vehicle performance, ensuring driver safety, and increasing productivity throughout the entire vehicle lifecycle and delivery process.'
    },
    {
      icon: '04',
      title: 'Billing & Payments',
      description:
        'Integrates secure, seamless transaction cycles (e.g., e-invoicing, diverse payment gateways) to ensure a smooth, secure, and hassle-free final step in the customer and B2B journey.'
    },
    {
      icon: '05',
      title: 'Vendor & Client CRM',
      description:
        'A centralized platform for managing all vendor data, interaction history, contact information, and client sales pipelines, ensuring a single source of consistent and accurate data.'
    },
    {
      icon: '06',
      title: 'Employee Onboarding',
      description:
        'A dedicated HR platform streamlining the entire process from automated recruiting and compliance checks to personalized training modules for more effective and rapid team coordination.'
    }
  ]
};
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'IoT & Smart Warehousing',
        description: 'We integrate cutting-edge sensors for ambient warehouse condition monitoring and transportation tracking directly into your Enterprise Resource Planning (ERP) system, providing complete, real-time operational visibility.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Third-Party Ecosystems',
        description: 'We eliminate restrictive data silos by seamlessly integrating your custom software with all existing e-commerce platforms (e.g., Shopify, Magento), marketplace APIs, and specialized supply chain tools (e.g., 3PL systems).'
    },
];
    const title = "Custom CRM Software Development";
    const subtitle = ""
    const introDescription = [
        { text: "Replace outdated legacy systems with modern, integrated technology designed specifically to expand operational margins, automate complex logistics, and significantly upgrade client relationships across the wholesale and retail sectors", bold: false },
    ]

const WholesaleRetail: React.FC = () => {
    return (
        <>
            <IntroComponent
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <CommitmentSection data={commitmentData} />
            <InfoGrid data={servicesData} />
            <ServiceFeatures items={defaultItems} />
        </>
    )
}

export default WholesaleRetail
