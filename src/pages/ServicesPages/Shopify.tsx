import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import EmergingTech from '../../components/EmergingTech/EmergingTech'
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'

const emergingTechData: EmergingTechProps['data'] = {
   label: '',
  titleAccent: 'Your Comprehensive',
  titleMain: ' E-Commerce Partner',
  description:
    'Your comprehensive partner for building, customizing, integrating, and scaling Shopify-based e-commerce solutions.',
  items: [
    {
      icon: 'ecommerce' as const,
      title: 'Shopify Store Creation',
      description:
        'Quick and efficient setup of your Shopify online store, ensuring a speedy launch.'
    },
    {
      icon: 'product' as const,
      title: 'Theme Personalization',
      description:
        'Unlimited customization options for your Shopify store, with a focus on unique mobile and web UX.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Shopify System Integration',
      description:
        'Seamless integration of third-party tools with Shopify, enhancing the flexibility of your e-commerce software.'
    },
    {
      icon: 'product' as const,
      title: 'Custom Shopify Solutions',
      description:
        'Tailoring Shopify sites to include any desired functionality, fully addressing your e-commerce needs.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Shopify Plus for Enterprises',
      description:
        'Building robust e-commerce platforms capable of handling extensive transactions and enterprise-grade requirements.'
    },
    {
      icon: 'legacy' as const,
      title: 'Seamless Shopify Transition',
      description:
        'Guiding your transition to Shopify, whether from a brick-and-mortar store or another online platform.'
    }
  ]
};
const reEngineeringProcessData: InfoGridProps['data'] = {
  label: 'ADVANTAGES',
  title: 'Advantages of Choosing LeapSofts for Shopify',
  items: [
    {
      icon: '01',
      title: 'Uninterrupted Business Operations',
      description:
        'Guaranteeing smooth functioning of your online store to prevent any disruption.'
    },
    {
      icon: '02',
      title: 'Premier Shopify Experts',
      description:
        'Providing a mobile-first strategy for optimal user experience.'
    },
    {
      icon: '03',
      title: 'Swift Market Entry',
      description:
        'Ensuring a faster launch of your Shopify store.'
    },
    {
      icon: '04',
      title: 'Shopify Design Skills',
      description:
        'Expertise in creating visually appealing and functional store designs.'
    },
    {
      icon: '05',
      title: 'Versatile Teams',
      description:
        'Offering a diverse range of technical skills for comprehensive solutions.'
    },
    {
      icon: '06',
      title: 'Assured Cyber Security',
      description:
        'Maintaining the highest standards of online security for your store.'
    }
  ]
};
const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: REQUIREMENT ANALYSIS",
        title: "Understanding Business Needs",
        description:
            "We clarify objectives, document requirements, and align expectations before execution.",
        features: [
            "Business & Technical Requirement Gathering",
            "Stakeholder Discussions",
            "Initial Design & Roadmap Planning",
        ],
    },
    {
        id: 2,
        phase: "PHASE 2: SOLUTION DESIGN",
        title: "Architecture & UX Planning",
        description:
            "Transform requirements into a scalable, user-focused solution blueprint.",
        features: [
            "System Architecture Design",
            "UI/UX Wireframes & Prototypes",
            "Technology Stack Finalization",
        ],
    },
    {
        id: 3,
        phase: "PHASE 3: DEVELOPMENT & EVALUATION",
        title: "Agile Development & Quality Assurance",
        description:
            "We build, test, and refine the product through iterative development cycles.",
        features: [
            "Frontend & Backend Development",
            "Agile SCRUM with Weekly Reviews",
            "QA Testing & Performance Validation",
        ],
    },
    {
        id: 4,
        phase: "PHASE 4: CONTINUOUS SUPPORT",
        title: "Launch, Support & Maintenance",
        description:
            "Ensuring smooth deployment with long-term operational reliability.",
        features: [
            "Production Deployment",
            "SLA-Based L3 & Operational Support",
            "Ongoing Maintenance & Enhancements",
        ],
    },
];

const phaseLabelsDefault = [
    "REQUIREMENT ANALYSIS",
    "SOLUTION DESIGN",
    "DEVELOPMENT & EVALUATION",
    "CONTINUOUS SUPPORT",
];



const Shopify: React.FC = () => {
  return (
   <>
   <IntroComponent
   title="Advancing Digital Commerce Evolution"
   description="LeapSofts enhances businesses with enterprise-level capabilities, focusing on experiences that drive conversions."
   />
   <EmergingTech data={emergingTechData}
   />
   <InfoGrid data ={reEngineeringProcessData}
   />
    <Processes title="OUR WEB APP DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
   </>
  )
}

export default Shopify