import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import EmergingTech from '../../components/EmergingTech/EmergingTech'
import Processes from '../../components/Processes/Processes'
import { type ProcessPhase } from '../../components/Processes/Processes'

const emergingTechData = {
  label: 'INTEGRATION OTHER TECHNOLOGIES',
  titleAccent: 'Emerging Technologies',
  titleMain: 'We Integrate',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'User Experience Craftsmanship',
      description: 'LeapSofts deep rooted knowledge in UI/UX design and frontend development enables us to forge exceptional user experiences.'
    },
    {
      icon: 'saas' as const,
      title: ' Front end Innovation',
      description: 'LeapSofts provides comprehensive frontend development, focusing on creating intuitive, user focused web and mobile solutions.'
    },
    {
      icon: 'hipaa' as const,
      title: 'Backend Engineering',
      description: 'LeapSofts specializes in creating backend systems that are adaptable, scalable, and straightforward to manage.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Ecommerce Website Creation',
      description: 'LeapSofts excels in developing ecommerce web applications, encompassing online storefronts, shopping cart systems, and payment integrations.'
    },
    {
      icon: 'mobile' as const,
      title: 'Web Application Support',
      description: 'Postlaunch, LeapSofts offers maintenance and update services for web apps, addressing bug fixes, enhancing performance, and incorporating new features.'
    },
    {
      icon: 'legacy' as const,
      title: 'Web App Quality Assurance',
      description: 'LeapSofts conducts thorough testing of web applications prior to market release, ensuring they operate seamlessly and are free from defects.'
    },
  ]
}

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: REQUIREMENT ANALYSIS",
    title: "Understanding Business Needs",
    description:
      "We clarify objectives, document requirements, and align expectations before execution.",
    features: [
      {
        title: "Business & Technical Requirement Gathering",
        description: "Deep dive into your business goals and technical constraints."
      },
      {
        title: "Stakeholder Discussions",
        description: "Collaborative sessions to ensure all voices are heard and needs met."
      },
      {
        title: "Initial Design & Roadmap Planning",
        description: "Strategic planning for the development journey ahead."
      },
    ],
  },
  {
    id: 2,
    phase: "PHASE 2: DISCOVERY",
    title: "Blueprinting a Scalable & Secure Solution",
    description:
      "Transform requirements into a scalable, user-focused solution blueprint.",
    features: [
      {
        title: "Software Requirements Specification (SRS)",
        description: "A comprehensive set of functional and non-functional system features."
      },
      {
        title: "Technical Architecture",
        description: "Infrastructure design, security measures, integrations, and scalability planning."
      },
      {
        title: "Risk Management",
        description: "Anticipate challenges and create proactive mitigation strategies."
      },
    ],
  },
  {
    id: 3,
    phase: "PHASE 3: DEVELOPMENT & EVALUATION",
    title: "Agile Development & Quality Assurance",
    description:
      "We build, test, and refine the product through iterative development cycles.",
    features: [
      {
        title: "Frontend & Backend Development",
        description: "Clean, efficient code following modern best practices."
      },
      {
        title: "Agile SCRUM with Weekly Reviews",
        description: "Consistent progress updates and rapid iteration."
      },
      {
        title: "QA Testing & Performance Validation",
        description: "Rigorous testing to ensure stability and speed."
      },
    ],
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS SUPPORT",
    title: "Launch, Support & Maintenance",
    description:
      "Ensuring smooth deployment with long-term operational reliability.",
    features: [
      {
        title: "Production Deployment",
        description: "Safe and seamless rollout to your users."
      },
      {
        title: "SLA-Based L3 & Operational Support",
        description: "Ongoing expert assistance whenever you need it."
      },
      {
        title: "Ongoing Maintenance & Enhancements",
        description: "Keeping your solution up-to-date and improving."
      },
    ],
  },
];

const phaseLabelsDefault = [
  "REQUIREMENT ANALYSIS",
  "SOLUTION DESIGN",
  "DEVELOPMENT & EVALUATION",
  "CONTINUOUS SUPPORT",
];

const WebAppDevelopment: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Advanced Web Applications"
        description="Mobile software is essential for modern businesses. With expertise across multiple technology stacks, we deliver innovative, reliable mobile apps using the latest and most effective UI/UX practices."
      />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR WEB APP DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default WebAppDevelopment