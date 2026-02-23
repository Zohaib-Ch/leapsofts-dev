import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';

  const title = "Modern Foundations for High-Scale Construction Management";
  const subtitle = "";

  const introDescription = [
    { text: "Regardless of the scale—from luxury mixed-use condos to commercial offices—our custom software automates the countless moving parts of your project, ensuring growth and operational stability. ", bold: false },
  ]
  const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO CONSTRUCTION SUCCESS",
    title: "Three Commitments for Builders & Contractors",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: ' Uninterrupted Field Operations',
            description: "We commit to providing your teams with On-the-Go power. We understand that construction happens in the real world, not just the office. Our commitment is to deliver high-performance mobile tools that function without an internet connection, ensuring your personnel and fleets remain productive from groundbreaking to the final walkthrough."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Total Project Accountability',
            description: "We commit to a No Bar Goes Unaccounted For philosophy. By centralizing permitting, subcontractor tasks, and time tracking into a single custom dashboard, we ensure that every moving part of your project is visible. We promise a system that provides the transparency needed to protect your reputation and your bottom line."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Seamless Financial Governance',
            description: "We commit to removing the complexity from construction finance. By integrating your custom management system with your preferred financial tools (like QuickBooks), we ensure that budgeting, invoicing, and payments are automated and error-free. You gain the security of knowing you have total fiscal control over every phase of the operation."
        },
    ]
}
const servicesData: InfoGridProps['data'] = {
  label: 'Operational Modules — Engineering Project Success',
  title: 'Built on Leapsofts data for construction excellence.',
  items: [
    {
      icon: '01',
      title: 'On-the-Go Field Management',
      description:
        'Empower your workforce with offline-capable mobile applications. Field teams can manage crews, fleets, and tasks remotely, ensuring work never stops even without an internet connection.'
    },
    {
      icon: '02',
      title: 'Comprehensive Building Management',
      description:
        'A centralized hub for the entire build lifecycle: permitting, project planning, task assignments, time tracking, subcontractor management, and change-request processing.'
    },
    {
      icon: '03',
      title: 'Client Relationship Portal',
      description:
        'Manage the full customer journey—from pre-sale marketing and lead capture to sharing construction milestones—fostering the transparency that drives referrals.'
    },
    {
      icon: '04',
      title: 'Automated Financial Control',
      description:
        'Seamlessly integrate with providers like QuickBooks for snapshot budgeting, approvals, and invoicing. Gain total financial oversight over every aspect of your active developments.'
    },
  ]
};
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Offline-First Synchronization',
        description: 'We implement robust data-caching protocols for field apps, allowing your supervisors to log progress in remote locations and sync automatically once a connection is re-established.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Financial Ecosystem Integration',
        description: "We eliminate manual data entry by bridging your construction management platform with your existing accounting software and third-party payment gateways."
    },
];
const whyChooseUsData = {
  subtitle: 'Why Choose Us?',
  title: 'Why Choose Leapsofts?',
  items: [
    'Scalable platforms for large-scale places of business and infrastructure projects.',
    'Niche management tools for specific trades and complex technical builds.',
    'Personalized portals for luxury residential projects and high-touch customer management.',
  ]
};

const Construction: React.FC = () => {
    return (
        <>
        <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
           <CommitmentSection data={commitmentData} />
            <InfoGrid data={servicesData} />
            <ServiceFeatures items={defaultItems}/>
             <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items} /> 
        </>
    )
}

export default Construction
