import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';

const ourServicesData: EmergingTechProps['data'] = {
  label: 'FIXED PRICE BENEFITS',
  titleAccent: 'Unlock Your',
  titleMain: ' Digital Advancement',
  description:
    'Discover the key advantages of choosing a fixed-price engagement model with LeapSofts.',
  items: [
    {
      icon: 'product',
      title: 'Accelerated Delivery Assurance',
      description:
        'Agile engineering practices and efficient development ensure fast, obstacle-free delivery.'
    },
    {
      icon: 'enterprise',
      title: 'Strategic Edge',
      description:
        'Save time and resources while scaling faster than competitors without excessive costs.'
    },
    {
      icon: 'product',
      title: 'Superior Product Assurance',
      description:
        'Continuous quality assurance throughout the project ensures all requirements are met.'
    },
    {
      icon: 'hipaa',
      title: 'Safety & Confidentiality',
      description:
        'All work is protected under strict NDAs, ensuring complete security and IP protection.'
    }
  ]
};
const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: 'PHASE 1: REQUIREMENT DISCOVERY',
    title: 'Align Vision and Scope',
    description:
      'We collaborate with stakeholders to define goals, validate feasibility, and translate ideas into clear, actionable requirements.',
    features: [
      'Stakeholder Workshops & Goal Alignment',
      'Business, Functional & Technical Requirement Gathering',
      'Feasibility Analysis, Risk Assessment & Delivery Roadmap'
    ]
  },
  {
    id: 2,
    phase: 'PHASE 2: SOLUTION DESIGN',
    title: 'Design Scalable Solutions',
    description:
      'We convert requirements into a secure, scalable, and user-focused solution architecture with a strong design foundation.',
    features: [
      'System Architecture, Data Flow & API Design',
      'UI/UX Wireframes, Prototypes & Design Systems',
      'Technology Stack, Cloud Strategy & Security Planning'
    ]
  },
  {
    id: 3,
    phase: 'PHASE 3: PRODUCT DEVELOPMENT',
    title: 'Deliver with Agility',
    description:
      'Using agile methodologies, we build, integrate, and validate the product through continuous testing and iteration.',
    features: [
      'Frontend, Backend & Mobile Development',
      'Agile SCRUM, CI/CD Pipelines & System Integrations',
      'QA Testing, UAT Support, Performance & Security Validation'
    ]
  },
  {
    id: 4,
    phase: 'PHASE 4: CONTINUOUS SUPPORT',
    title: 'Operate and Evolve',
    description:
      'We ensure smooth deployment, reliable operations, and continuous optimization backed by SLA-driven support.',
    features: [
      'Production Deployment & Release Management',
      'SLA-Based L2/L3 Support, Monitoring & Incident Handling',
      'Ongoing Maintenance, Optimization & Feature Enhancements'
    ]
  }
];

const phaseLabelsDefault = [
  'Requirement Discovery',
  'Solution Design',
  'Product Development',
  'Continuous Support'
];
const fixedPriceProcessData: InfoGridProps['data'] = {
  label: 'DISCOVERY WORKSHOP',
  title: 'Exploring Your Options',
  items: [
    {
      icon: '01',
      title: 'Technical Analysis',
      description:
        'Identify and address high-risk technical challenges with well-evaluated, optimal solutions.'
    },
    {
      icon: '02',
      title: 'User Experience Narrative',
      description:
        'Develop a comprehensive product narrative outlining features, flows, and user interactions.'
    },
    {
      icon: '03',
      title: 'Dynamic Prototype',
      description:
        'Create engaging UI/UX prototypes that visualize and validate the final product experience.'
    },
    {
      icon: '04',
      title: 'Project Blueprint',
      description:
        'Define a clear delivery strategy including scope, timelines, and cost estimation.'
    }
  ]
};



const FixedPrice: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Enhanced, Swift Development"
                description="Elevate your pace with LeapSofts’s comprehensive full stack software development offerings, delivered at a fixed cost while maintaining top-tier quality."
            />
            <EmergingTech data={ourServicesData}/>
            <Processes title="OUR FIXED PRICE PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />

            <InfoGrid data={fixedPriceProcessData}/>
    </>
    );
};

export default FixedPrice;
