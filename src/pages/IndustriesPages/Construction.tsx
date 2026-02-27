import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO CONSTRUCTION SUCCESS",
  title: "Unwavering Standards for Builders",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Uninterrupted Field Operations',
      description: "We deliver high-performance mobile tools that function without an internet connection, ensuring your personnel and fleets remain productive from groundbreaking to the final walkthrough."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Total Project Accountability',
      description: "By centralizing permitting, subcontractor tasks, and time tracking into a single custom dashboard, we ensure that every moving part of your project is visible."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Seamless Financial Governance',
      description: "By integrating your custom management system with your preferred financial tools, we ensure that budgeting, invoicing, and payments are automated and error-free."
    },
  ]
}

const constructionSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Construction Firms',
  description: 'We build end-to-end construction management platforms that optimize field operations, streamline back-office tasks, and ensure project profitability.',
  items: [
    {
      icon: 'legacy',
      title: 'Field Operation Apps',
      description: 'Offline-capable mobile solutions for crew management, task logging, and real-time progress tracking.'
    },
    {
      icon: 'enterprise',
      title: 'BIM Integration',
      description: 'Connect your management software with 3D modeling tools for better visualization and coordination.'
    },
    {
      icon: 'thirdParty',
      title: 'Financial Management',
      description: 'Automated budgeting, invoicing, and integration with ERP/accounting software like QuickBooks.'
    },
    {
      icon: 'product',
      title: 'Subcontractor Portals',
      description: 'Centralized hubs for managing vendor contracts, timelines, and payment approvals.'
    },
    {
      icon: 'saas',
      title: 'Asset & Fleet Tracking',
      description: 'Real-time monitoring of heavy equipment and vehicle fleets to optimize utilization and maintenance.'
    },
    {
      icon: 'mobile',
      title: 'Compliance & Safety',
      description: 'Digital safety audits and regulatory document management to ensure job site standards are met.'
    }
  ]
}

const streamlineDescription = [
  { text: "Build a ", bold: false },
  { text: "stronger digital foundation ", bold: true },
  { text: "for your construction projects. Leapsofts offers a ", bold: false },
  { text: "complimentary construction strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "project lifecycle ", bold: true },
  { text: "from bidding to delivery.", bold: false },
];

const Construction: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Construction Management Software",
      titleAccent: "Process"
    });
  }, [setProcessTitle]);

  return (
    <>
      <IntroComponent
        title="Building the Future of Construction Tech"
        description=""
        introDescription={[
          { text: "Transforming the construction lifecycle with custom software solutions designed for scale, efficiency, and total project accountability.", bold: false }
        ]}
      />
      <CommitmentSection data={commitmentData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Project "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={constructionSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" construction businesses"
      />
    </>
  )
}

export default Construction
