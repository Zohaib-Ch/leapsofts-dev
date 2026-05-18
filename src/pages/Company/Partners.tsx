import React, { useEffect } from 'react'
import PartnerHero from '../../components/PartnerHero/PartnerHero'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import ContactForm from '../../components/ContactForm/ContactForm'
import Processes from '../../components/Processes/Processes'
import { type ProcessPhase } from '../../components/Processes/Processes'
import styles from './partners.module.css'

const Partners: React.FC = () => {
  useEffect(() => {
    // Set document title
    const prevTitle = document.title;
    document.title = 'Strategic Alliances & Software Partnerships | Leapsofts';

    // Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    let prevDescription = '';
    if (metaDescription) {
      prevDescription = metaDescription.getAttribute('content') || '';
      metaDescription.setAttribute('content', 'Discover premium strategic partnerships, custom software co-development models, and AI-driven enterprise software joint ventures with Leapsofts to accelerate business transformation.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Discover premium strategic partnerships, custom software co-development models, and AI-driven enterprise software joint ventures with Leapsofts to accelerate business transformation.');
      document.head.appendChild(metaDescription);
    }

    // Manage meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    let prevKeywords = '';
    if (metaKeywords) {
      prevKeywords = metaKeywords.getAttribute('content') || '';
      metaKeywords.setAttribute('content', 'software partnerships, strategic alliances, custom software co-delivery, enterprise software ventures, AI development partners, Leapsofts partnerships');
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', 'software partnerships, strategic alliances, custom software co-delivery, enterprise software ventures, AI development partners, Leapsofts partnerships');
      document.head.appendChild(metaKeywords);
    }

    // Manage Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let prevOgTitle = '';
    if (ogTitle) {
      prevOgTitle = ogTitle.getAttribute('content') || '';
      ogTitle.setAttribute('content', 'Strategic Alliances & Software Partnerships | Leapsofts');
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', 'Strategic Alliances & Software Partnerships | Leapsofts');
      document.head.appendChild(ogTitle);
    }

    // Manage Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    let prevOgDesc = '';
    if (ogDesc) {
      prevOgDesc = ogDesc.getAttribute('content') || '';
      ogDesc.setAttribute('content', 'Accelerate your digital evolution with Leapsofts strategic software alliances, mutual co-delivery, and advanced artificial intelligence partnerships.');
    } else {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', 'Accelerate your digital evolution with Leapsofts strategic software alliances, mutual co-delivery, and advanced artificial intelligence partnerships.');
      document.head.appendChild(ogDesc);
    }

    return () => {
      document.title = prevTitle;
      if (metaDescription) {
        if (prevDescription) {
          metaDescription.setAttribute('content', prevDescription);
        } else {
          metaDescription.remove();
        }
      }
      if (metaKeywords) {
        if (prevKeywords) {
          metaKeywords.setAttribute('content', prevKeywords);
        } else {
          metaKeywords.remove();
        }
      }
      if (ogTitle) {
        if (prevOgTitle) {
          ogTitle.setAttribute('content', prevOgTitle);
        } else {
          ogTitle.remove();
        }
      }
      if (ogDesc) {
        if (prevOgDesc) {
          ogDesc.setAttribute('content', prevOgDesc);
        } else {
          ogDesc.remove();
        }
      }
    };
  }, []);

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


  return (
    <>
      <div id="partners" className="partners-page" style={{ background: 'var(--bg-dark)' }}>
        <PartnerHero
          title="Strategic"
          description={[
            [
              { text: "we empower organizations to achieve meaningful business transformation through ", bold: false },
              { text: "AI-driven ", bold: true },
              { text: "strategic partnerships and enterprise software development", bold: true },
              { text: ". By combining advanced ", bold: false },
              { text: "artificial intelligence", bold: true },
              { text: ", ", bold: false },
              { text: "custom software engineering", bold: true },
              { text: ", and deep domain expertise, we help businesses design, build, and scale intelligent digital solutions that drive measurable impact.", bold: false },
            ],
            "Our approach extends beyond traditional software development. With 2 decades of software experience, from strategy and architecture to development, integration, and continuous optimization, every solution is engineered to align with long-term business objectives.",
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
