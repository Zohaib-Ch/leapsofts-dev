import { buildPageMeta } from '../../utils/seoHelper';
import React from 'react';
import styles from './partners.module.css';
import PartnerHero from '../../components/PartnerHero/PartnerHero';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import ContactForm from '../../components/ContactForm/ContactForm';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import { getSanityAboutPage } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityAboutPage('aboutPage');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Strategic Technology Partnerships | Leapsofts",
    defaultDescription: "Leapsofts partners with global technology leaders to deliver cutting-edge software solutions. Explore our strategic partnerships and certified alliances.",
    defaultKeywords: "technology partnerships, software development partners, certified technology partner, strategic technology alliances",
    canonicalUrl: "https://www.leapsofts.com/partners",
  });
}

const Partners: React.FC = () => {
  const benefitsData: InfoGridProps['data'] = {
    label: 'BENEFITS',
    title: 'Simplified incentives, smarter tools, greater impact.',
    items: [
      {
        icon: '01',
        title: 'Accelerated Innovation',
        description:
          'Strategic partnerships bring together complementary expertise and technologies, enabling faster innovation and the development of advanced, AI-driven software solutions.'
      },
      {
        icon: '02',
        title: 'Enhanced Customer Acquisition',
        description:
          'Strategic partnerships expand market reach by leveraging shared networks, co-selling opportunities, and established client relationships—helping businesses acquire customers faster and more cost-effectively.'
      },
      {
        icon: '03',
        title: 'Scalable Growth Opportunities',
        description:
          'By sharing resources and market access, strategic partnerships enable scalable expansion into new regions and industries with reduced operational complexity.'
      },
      {
        icon: '04',
        title: 'Improved Operational Efficiency',
        description:
          'Aligned processes, automation, and collaborative execution models streamline operations, reduce costs, and improve overall delivery efficiency.'
      },
      {
        icon: '05',
        title: 'Reduced Risk and Faster Time-to-Market',
        description:
          'Leveraging proven delivery frameworks and shared accountability minimizes risk while accelerating time-to-market for complex enterprise software initiatives.'
      }
    ]
  };

  const partnershipProcessPhases: ProcessPhase[] = [
    {
      id: 1,
      phase: "PHASE 1: PARTNERSHIP INITIATION",
      title: "Partnership Initiation",
      description:
        "Partnership initiation establishes the foundation for a successful strategic collaboration. At Leapsofts, this phase focuses on aligning vision, objectives, and success metrics while assessing mutual capabilities and long-term fit.",
      features: [
        {
          title: "Vision Alignment",
          description:
            "Establish a shared strategic vision by aligning business objectives, growth goals, and long-term success criteria for a strong partnership foundation.",
        },
        {
          title: "Capability Review",
          description:
            "Evaluate technical expertise, domain strengths, and operational capabilities to confirm partnership fit and identify areas of synergy.",
        },
        {
          title: "Partnership Framework",
          description:
            "Define the partnership structure with clear roles, responsibilities, governance models, and collaboration processes for effective execution.",
        },
      ],
    },
    {
      id: 2,
      phase: "PHASE 2: INTEGRATION PLANNING",
      title: "Integration Planning",
      description:
        "Integration planning ensures a smooth and efficient alignment between systems, teams, and processes at the early stages of the partnership. At Leapsofts, we define a clear integration strategy that addresses technical architecture, data flows, security requirements, and operational dependencies.",
      features: [
        {
          title: "Integration Strategy",
          description:
            "Define technical architecture, data flows, security requirements, and operational dependencies for seamless interoperability.",
        },
        {
          title: "Solution Roadmap",
          description:
            "Plan joint solution development and timelines to minimize risk and reduce complexity across platforms.",
        },
        {
          title: "Team Setup",
          description:
            "Allocate resources and establish teams to support integration and collaboration.",
        },
      ],
    },
    {
      id: 3,
      phase: "PHASE 3: EXECUTION & CO-DELIVERY",
      title: "Execution & Co-Delivery",
      description:
        "Execution & Co-Delivery at Leapsofts transforms strategic plans into measurable results by collaboratively developing, testing, and deploying enterprise-grade solutions.",
      features: [
        {
          title: "Solution Delivery",
          description:
            "Collaboratively design, develop, test, and deploy enterprise-grade solutions using proven frameworks for quality, scalability, and timely execution.",
        },
        {
          title: "Market Launch",
          description:
            "Execute coordinated go-to-market and co-marketing strategies for faster market entry, stronger positioning, and accelerated customer acquisition.",
        },
        {
          title: "Performance Tracking",
          description:
            "Continuously monitor KPIs, delivery metrics, and business outcomes to optimize performance and maximize partnership value.",
        },
      ],
    },
    {
      id: 4,
      phase: "PHASE 4: GROWTH & EVOLUTION",
      title: "Growth & Evolution",
      description:
        "Growth & Evolution focuses on scaling the partnership by implementing strategic growth initiatives, expanding market opportunities, and maximizing business impact. Leapsofts ensures alignment and accountability through regular governance reviews, refining roles, responsibilities, and collaboration processes.",
      features: [
        {
          title: "Growth Strategy",
          description:
            "Develop and implement a strategic roadmap to expand partnership opportunities, enhance market reach, and maximize business impact over time.",
        },
        {
          title: "Governance Review",
          description:
            "Regularly assess and refine governance structures, roles, and collaboration processes for alignment, accountability, and operational efficiency.",
        },
        {
          title: "Continuous Innovation",
          description:
            "Drive ongoing innovation by integrating emerging technologies, optimizing solutions, and adapting to evolving market trends for sustained growth.",
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

  const partnersSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.leapsofts.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Company",
            "item": "https://www.leapsofts.com/about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Strategic Partnerships",
            "item": "https://www.leapsofts.com/partners"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.leapsofts.com/partners#webpage",
        "url": "https://www.leapsofts.com/partners",
        "name": "Strategic Technology Partnerships | Leapsofts",
        "description": "Leapsofts partners with global technology leaders to deliver cutting-edge software solutions. Explore our strategic partnerships and certified alliances.",
        "publisher": {
          "@type": "Organization",
          "name": "Leapsofts",
          "url": "https://www.leapsofts.com",
          "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersSchema) }} />
      <div id="partners" className="partners-page" style={{ background: 'var(--bg-dark)' }}>
        <PartnerHero
          title="Strategic"
          description={[
            [
              { text: "At Leapsofts, we empower organizations to achieve meaningful business transformation through ", bold: false },
              { text: "strategic technology partnerships ", bold: true },
              { text: "with AWS, Microsoft Azure, and Salesforce, alongside high-performance ", bold: false },
              { text: "custom software development", bold: true },
              { text: " and ", bold: false },
              { text: "enterprise software engineering", bold: true },
              { text: " co-delivery models. By combining advanced ", bold: false },
              { text: "artificial intelligence", bold: true },
              { text: ", ", bold: false },
              { text: "cloud engineering", bold: true },
              { text: ", and deep domain expertise, we help businesses design, build, and scale intelligent digital solutions.", bold: false },
            ],
            "Our collaborative ecosystem extends beyond traditional software outsourcing to deliver mutual growth, joint technological innovation, and scalable co-development models.",
          ]}
        />
      </div>
      <div id="overview">
        <StreamlineSuccess
          label="STREAMLINE YOUR SUCCESS"
          titleMain="Software "
          titleAccent="Strategy"
          titleEnd=" Session"
          description={[
            { text: "Whether you're modernizing an ", bold: false },
            { text: "existing enterprise software system ", bold: true },
            { text: "or launching a ", bold: false },
            { text: "new digital product", bold: true },
            { text: ", Leapsofts offers a ", bold: false },
            { text: "complimentary software strategy session ", bold: true },
            { text: "designed to deliver value almost immediately. We take the time to understand your business objectives, technical landscape, and operational challenges then provide actionable insights on how ", bold: false },
            { text: "bespoke, cost-effective custom software solutions ", bold: true },
            { text: "can streamline workflows, improve efficiency, and support scalable growth.", bold: false },
          ]}
          imageUrl="/streamline.webp"
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
  );
};

export default Partners;
