import React from 'react'
import PartnerHero from '../../components/PartnerHero/PartnerHero'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import ContactForm from '../../components/ContactForm/ContactForm'
import Processes from '../../components/Processes/Processes'
import { type ProcessPhase } from '../../components/Processes/Processes'
import styles from './partners.module.css'

const Partners: React.FC = () => {
  const benefitsData: InfoGridProps['data'] = {
    label: 'BENEFITS',
    title: 'Simplified incentives, smarter tools, greater impact.',
    items: [
      {
        icon: '01',
        title: 'Meet Clients Where They Buy',
        description:
          'Reach customers and drive new revenue through hyperscaler marketplaces and Agent Connect.'
      },
      {
        icon: '02',
        title: 'Maximize Your Earnings',
        description:
          'Simplified incentives that help you sell faster, close deals quicker, and grow.'
      },
      {
        icon: '03',
        title: 'Investing in Your Success',
        description:
          'Cloud credits, expert support, and resources to help you succeed at every stage.'
      },
      {
        icon: '04',
        title: 'Unlock Demand',
        description:
          'Co-marketing and targeted content to accelerate sales and influence buyers earlier.'
      },
      {
        icon: '05',
        title: 'AI-Driven Partner Experiences',
        description:
          'Modern tools with real-time insights and AI recommendations for faster decisions.'
      }
    ]
  };

  const partnershipProcessPhases: ProcessPhase[] = [
    {
      id: 1,
      phase: "PHASE 1: PARTNERSHIP INITIATION",
      title: "Strategic Alignment",
      description: "Align goals and define partnership direction.",
      features: [
        {
          title: "Vision Alignment",
          description: "Align strategic goals and shared success vision."
        },
        {
          title: "Capability Review",
          description: "Assess technical strengths and partnership fit."
        },
        {
          title: "Partnership Framework",
          description: "Define roles, responsibilities, and structure."
        },
      ],
    },
    {
      id: 2,
      phase: "PHASE 2: INTEGRATION PLANNING",
      title: "Integration Planning",
      description: "Plan technology and process collaboration.",
      features: [
        {
          title: "Integration Strategy",
          description: "Define APIs, data flow, and tech compatibility."
        },
        {
          title: "Solution Roadmap",
          description: "Plan joint solution development and timelines."
        },
        {
          title: "Team Setup",
          description: "Allocate resources and establish teams."
        },
      ],
    },
    {
      id: 3,
      phase: "PHASE 3: EXECUTION & CO-DELIVERY",
      title: "Joint Execution",
      description: "Deliver and launch joint solutions.",
      features: [
        {
          title: "Solution Delivery",
          description: "Develop, test, and deploy jointly."
        },
        {
          title: "Market Launch",
          description: "Execute co-marketing and go-to-market plans."
        },
        {
          title: "Performance Tracking",
          description: "Monitor KPIs and optimize outcomes."
        },
      ],
    },
    {
      id: 4,
      phase: "PHASE 4: GROWTH & EVOLUTION",
      title: "Partnership Growth",
      description: "Scale value and evolve collaboration.",
      features: [
        {
          title: "Growth Strategy",
          description: "Identify expansion and new opportunities."
        },
        {
          title: "Governance Review",
          description: "Review performance and strategic alignment."
        },
        {
          title: "Continuous Innovation",
          description: "Adapt, innovate, and evolve together."
        },
      ],
    },
  ];

  const partnershipPhaseLabels = [
    "PARTNERSHIP INITIATION",
    "INTEGRATION PLANNING",
    "EXECUTION & CO-DELIVERY",
    "GROWTH & EVOLUTION",
  ];


  return (
    <>
      <div id="partners" className="partners-page" style={{ background: 'var(--bg-dark)' }}>
        <PartnerHero
          title="Strategic Partners"
          description="Empowering business transformation by harnessing AI-driven strategic partnerships for bold global innovation and growth."
        />
      </div>
      <div id="overview">
        <StreamlineSuccess
          label="STREAMLINE YOUR SUCCESS"
          titleMain="Software "
          titleAccent="Strategy"
          titleEnd=" Session"
          description="Whether it is an existing enterprise software system or a brand-new startup, we offer a no-charge strategy session, which can bring value to the table almost in real-time. We learn about your unique needs and share how to streamline your operations by using bespoke, cost-effective custom software solutions."
          imageUrl="/streamline.png"
        />
      </div>
      <div className={styles.benefits} id="benefits">
        <InfoGrid data={benefitsData} />
      </div>
      <div id="process">
        <Processes
          title="OUR STRATEGIC PARTNERSHIP PROCESS"
          processPhases={partnershipProcessPhases}
          phaseLabels={partnershipPhaseLabels}
        />
      </div>
      <div id="consultation">
        <ContactForm />
      </div>
    </>

  )
}

export default Partners
