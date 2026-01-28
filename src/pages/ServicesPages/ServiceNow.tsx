import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'

const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'ServiceNow Implementation Process',
  items: [
    {
      icon: '01',
      title: 'Process Assessment',
      description:
        'Evaluate existing IT workflows to identify gaps and improvement opportunities.'
    },
    {
      icon: '02',
      title: 'Configuration',
      description:
        'Customize and adapt ServiceNow to meet unique business requirements.'
    },
    {
      icon: '03',
      title: 'Data Migration',
      description:
        'Seamlessly migrate data from legacy systems and integrate with platforms like Active Directory.'
    },
    {
      icon: '04',
      title: 'Service Enhancement',
      description:
        'Continuously refine and enhance ServiceNow applications post-implementation.'
    },
    {
      icon: '05',
      title: 'GRC Management',
      description:
        'Automate governance, risk, and compliance to meet regulatory and industry standards.'
    },
    {
      icon: '06',
      title: 'Process Automation',
      description:
        'Simplify IT service processes including incident, problem, change management, and service catalogs.'
    },
    {
      icon: '07',
      title: 'IT Operations',
      description:
        'Automate core IT operations across network, server, and cloud environments.'
    },
    {
      icon: '08',
      title: 'Asset Management',
      description:
        'Automate tracking and management of IT assets including hardware, software, and licenses.'
    },
    {
      icon: '09',
      title: 'Business Management',
      description:
        'Automate demand, project, and financial management using ServiceNow.'
    },
    {
      icon: '10',
      title: 'Security Automation',
      description:
        'Enhance security with automated vulnerability management, incident response, and compliance monitoring.'
    }
  ]
};



const ServiceNow: React.FC = () => {
  return (
    <>
    <IntroComponent
    title="ServiceNow Empower Your Business"
    description="Revolutionize your operations with ServiceNow expertise that streamlines processes, boosts efficiency, and keeps your business ahead with a unified, modern IT platform."
    />
    <InfoGrid data={reEngineeringProcessData} />
    </>
  )
}

export default ServiceNow