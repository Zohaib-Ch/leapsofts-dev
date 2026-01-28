import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import Capabilities from '../../components/Capabilities/Capabilities';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'azure-data-ai',
    number: '< 01 >',
    title: 'Azure Data & AI',
    image: capabilitiesImg,
    items: [
      {
        name: 'Azure Databricks',
        description:
          'Accelerate AI scaling and data value realization with efficient cloud modernization.'
      },
      {
        name: 'Azure Synapse Optimization',
        description:
          'Unify data lakes and warehouses to deliver faster, reliable analytics across enterprises.'
      },
      {
        name: 'AI & Machine Learning on Azure',
        description:
          'Enable advanced analytics, scalable ML experiments, and efficient model deployment.'
      },
      {
        name: 'Azure Cognitive Services',
        description:
          'Enhance apps with vision, language, and intelligent decision-making capabilities.'
      } 
    ]
  },
  {
    id: 'azure-platform-security',
    number: '< 02 >',
    title: 'Azure Platform & Security',
    image: platformImg,
    items: [
      {
        name: 'Azure SQL Database Solutions',
        description:
          'Build high-performance apps using Azure SQL with integrated analytics and AI.'
      },
      {
        name: 'Azure Stack Hybrid Cloud',
        description:
          'Deliver seamless hybrid cloud experiences across on-prem and cloud environments.'
      },
      {
        name: 'Azure Cognitive Search',
        description:
          'Transform data into actionable insights using AI-powered semantic search.'
      },
      {
        name: 'Robust Azure Security',
        description:
          'Protect data and infrastructure with advanced threat detection across hybrid environments.'
      }
    ]
  }
];
const whyChooseUsData = {
  subtitle: 'Why Choose Us?',
  title: 'Why Choose LeapSofts?',
  items: [
    'Cloud-first Azure strategy aligned with Microsoft best practices',
    'Flexible managed services tailored to evolving business needs',
    'Agile and DevOps-driven delivery for faster value realization',
    'Expertise across private, public, and hybrid cloud solutions'
  ]
};

const Azure: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Focus on What’s Essential with Your Cloud Strategy"
                description="Harness the potential of Microsoft Azure to drive business growth with LeapSofts."
            />
            <Capabilities
                slides={capabilitiesSlides}
                title="Our Capabilities"
                defaultImage={capabilitiesImg}
            />
            <WhyChooseUs
             subtitle={whyChooseUsData.subtitle}
             title={whyChooseUsData.title}
             items={whyChooseUsData.items}/>
        </>
    );
};

export default Azure;
