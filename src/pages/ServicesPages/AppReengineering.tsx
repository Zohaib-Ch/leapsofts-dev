import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'


const ourServicesData: EmergingTechProps['data'] = {
  label: 'OUR SERVICES',
  titleAccent: 'Our',
  titleMain: ' Services',
  description: 'Comprehensive application re-engineering services to modernize your digital infrastructure and drive business growth.',
  items: [
    {
      icon: 'legacy',
      title: 'Update Legacy Systems',
      description: 'Elevate aging systems to new, streamlined platforms.'
    },
    {
      icon: 'enterprise',
      title: 'DevOps Transformation',
      description: 'Streamline your software delivery with efficient DevOps practices.'
    },
    {
      icon: 'thirdParty',
      title: 'Platform Upgrades',
      description: 'Modernize your platforms to align with cutting edge technologies.'
    },
    {
      icon: 'product',
      title: 'Code Enhancement',
      description: 'Optimize your codebase for better performance and easier maintenance.'
    },
    {
      icon: 'saas',
      title: 'UI/UX Design Overhaul',
      description: 'Redesign your user interface for an improved user experience.'
    },
    {
      icon: 'enterprise',
      title: 'System Integration',
      description: 'Merge separate systems to improve operational efficiency.'
    },
    {
      icon: 'ecommerce',
      title: 'Data Transfer',
      description: 'Securely relocate your data with no loss of critical information.'
    },
    {
      icon: 'saas',
      title: 'Performance Boost',
      description: 'Optimize application efficiency and uptime for superior performance.'
    },
    {
      icon: 'mobile',
      title: 'Mobile App Redesign',
      description: 'Update your mobile applications to support the latest device capabilities.'
    },
    {
      icon: 'thirdParty',
      title: 'Seamless Cloud Transition',
      description: 'Transition your applications seamlessly to the cloud for enhanced scalability.'
    }
  ]
}
const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'Application Re-Engineering Steps',
  items: [
    {
      icon: '01',
      title: 'Evaluate',
      description: 'Evaluating and pinpointing current system aspects'
    },
    {
      icon: '02',
      title: 'Crafting',
      description: 'Crafting a strategic re-engineering blueprint'
    },
    {
      icon: '03',
      title: 'Construct',
      description: 'Constructing the updated application framework'
    },
    {
      icon: '04',
      title: 'Execute',
      description: 'Executing the revamped architecture'
    },
    {
      icon: '05',
      title: 'Quality Check',
      description: 'Rigorous quality checks and user validation tests'
    },
    {
      icon: '06',
      title: 'Support',
      description: 'Rollout support and ongoing upkeep'
    }
  ]
}

const AppReengineering: React.FC = () => {
  return (
    <>
      <IntroComponent title="Revamp Your Legacy Systems" description="Upgrade and enhance your old applications to triple performance efficiency and cut costs by up to 30%." />
      <EmergingTech data={ourServicesData} />
      <InfoGrid data={reEngineeringProcessData} />
    </>
  )
}

export default AppReengineering