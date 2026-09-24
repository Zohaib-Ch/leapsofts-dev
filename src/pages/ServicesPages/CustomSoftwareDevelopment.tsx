import React from 'react';
import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import IntroComponent from "../../components/IntroComponent/IntroComponent";
import Capabilities, { type CapabilitySlide } from "../../components/Capabilities/Capabilities";
const capabilitiesImg = "https://cdn.sanity.io/images/egqy3ztp/production/5f3a29d131d28568ef0b90f5fe02d69cd0a3d065-1200x896.webp";
const platformImg = "https://cdn.sanity.io/images/egqy3ztp/production/5f3a29d131d28568ef0b90f5fe02d69cd0a3d065-1200x896.webp";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
import { useServicePage } from '../../hooks/useServicePage';
import { getSanityServiceBySlug } from '../../sanity/queries';

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'function',
    number: '< 01 >',
    title: 'Function-Based Capabilities',
    image: capabilitiesImg,
    items: [
      {
        name: 'Architectural Integrity & Stability',
        description: 'We prioritize system durability and database normalization at every stage. Our engineering team designs clean, highly testable codebases that protect your enterprise workflows against scalability bottlenecks and legacy regressions.'
      },
      {
        name: 'High-Availability SLA Guarantees',
        description: 'Benefit from proactive, 24/7 technical support managed by our global engineering squads. We implement real-time system logging, anomaly detection, and automated hotfixes to ensure continuous operational uptime.'
      },
      {
        name: 'Standardized Security & SDLC Workflows',
        description: 'Our developers operate under strict Software Development Life Cycle (SDLC) models, integrating automated unit tests, strict linters, and regular code reviews to ensure top-tier software delivery.'
      }
    ]
  },
  {
    id: 'platform',
    number: '< 02 >',
    title: 'Platform-Based Capabilities',
    image: platformImg,
    items: [
      {
        name: 'Cloud-Native & API Orchestration',
        description: 'We specialize in building secure cloud-native environments and complex API integration topologies. From containerized microservices managed via Kubernetes to distributed cache layers (like Redis) and robust database schemes, we ensure zero friction in data flows.'
      },
    ]
  },
];

const comparisonData = {
  label: 'ENTERPRISE ADVANTAGE',
  titleAccent: 'Bespoke Custom Software Development',
  titleMain: 'vs. Off-The-Shelf SaaS Platforms',
  description: 'Investing in custom software engineering over off-the-shelf software packages delivers strategic long-term advantages:',
  headers: {
    feature: 'Evaluation Criteria',
    custom: 'Custom Software Solution',
    offTheShelf: 'Off-the-Shelf Commercial Software'
  },
  items: [
    {
      feature: 'Tailored Business Logic',
      custom: 'Custom software applications are engineered from the ground up to support your specific business model, regulatory constraints, and proprietary workflows.',
      offTheShelf: 'Packaged SaaS platforms force your operational teams to adapt their internal processes to rigid, pre-built software constraints.'
    },
    {
      feature: 'Enterprise Scalability',
      custom: 'Built on elastic microservices and distributed cloud databases (AWS/Azure) that scale automatically alongside transaction volume.',
      offTheShelf: 'Restricted by seat-based licensing tiers, multi-tenant usage caps, and steep API call overage charges.'
    },
    {
      feature: 'API & Database Integration',
      custom: 'Bespoke REST/GraphQL API bridges engineered to synchronize seamlessly with legacy enterprise systems and third-party tools.',
      offTheShelf: 'Dependent on static, fragile plugins that break during core framework or third-party software updates.'
    },
    {
      feature: 'Total Cost of Ownership (TCO)',
      custom: 'High-ROI digital asset with 100% IP ownership, zero recurring user seat fees, and zero vendor lock-in overhead.',
      offTheShelf: 'Compounding monthly subscription costs, per-user seat fees, and forced upgrades for basic enterprise features.'
    },
    {
      feature: 'Competitive IP Advantage',
      custom: 'Exclusive proprietary source code and intellectual property that creates a defensible digital moat over industry competitors.',
      offTheShelf: 'Generic digital infrastructure shared directly with your competitors, providing zero product differentiation.'
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: DISCOVERY & ARCHITECTURE PLANNING",
    title: "Discovery & Planning",
    description:
      "We isolate key strategic operational gaps, align project scope with target market demands, and define a clear software roadmap.",
    features: [
      {
        title: "Business & Workflow Discovery",
        description:
          "Analyze existing operations, technical dependencies, and workflow blockages to align the software scope with target outcomes."
      },
      {
        title: "Strategic Product Mapping",
        description:
          "Conduct deep technical feasibility studies, evaluate data models, and select the optimal modern stack to scale with future demands."
      },
      {
        title: "Roadmap & Budget Definition",
        description:
          "Deliver an exhaustive, milestone-driven execution plan, resource allocation map, and transparent investment breakdown."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: SECURE SYSTEM SPECIFICATION",
    title: "Research & Strategy",
    description:
      "Comprehensive technical analysis to formulate strict functional requirements covering security controls, cloud scalability, and regulatory compliance.",
    features: [
      {
        title: "Architectural Design & SRS",
        description:
          "Produce detailed Software Requirements Specifications (SRS) covering data flow schemas, API endpoints, security protocols, and compliance criteria."
      },
      {
        title: "Infrastructure & Tech Stack",
        description:
          "Map out a zero-trust, resilient cloud infrastructure topology, detailing secure multi-tenant settings and integrations."
      },
      {
        title: "Strategic Risk Mitigation",
        description:
          "Conduct extensive threat vector profiling, establish data isolation guidelines, and draft proactive business continuity protocols."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: AGILE HIGH-VELOCITY ENGINEERING",
    title: "Agile Custom Software Development",
    description:
      "Building your enterprise solution with premium modern technologies, clean structures, and strict automated code auditing.",
    features: [
      {
        title: "Dedicated Agile Pods",
        description:
          "Deploy highly integrated, cross-functional squads utilizing SCRUM and Kanban workflows for total execution transparency."
      },
      {
        title: "Architecture-First Coding",
        description:
          "Maintain robust, self-documenting code bases leveraging automated unit tests, strict linters, and multi-peer pull request reviews."
      },
      {
        title: "Continuous Value Delivery",
        description:
          "Deliver functional weekly builds alongside transparent sprint dashboards, keeping key stakeholders closely aligned with progress."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: SYSTEM DEPLOYMENT & SYSTEMS EVOLUTION",
    title: "Launch & Continuous Support",
    description:
      "Seamless secure deployment, continuous architectural upgrades, and proactive scaling to maintain long-term digital superiority.",
    features: [
      {
        title: "Integrated Ecosystem Sync",
        description:
          "Integrate new platforms and systems with legacy databases and client APIs securely with zero operational downtime."
      },
      {
        title: "Pre-Launch QA & Deployment",
        description:
          "Perform exhaustive automated load testing, secure penetration audits, and structured cloud deployment with rolling updates."
      },
      {
        title: "User Training & Activation",
        description:
          "Conduct intensive interactive onboarding and training sessions so your internal teams adopt and utilize the software efficiently."
      },
      {
        title: "Continuous Systems Evolution",
        description:
          "Provide ongoing architectural scaling, framework updates, security patch integrations, and feature expansions."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "DISCOVERY & ARCHITECTURE",
  "SPECIFICATION",
  "ENGINEERING",
  "DEPLOYMENT & EVOLUTION",
];

const deliverMVPData = {
  label: "WHY CHOOSE LEAPSOFTS",
  title: "Our Commitment to Deliver Your Custom Software in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom software engineering partner. By combining fully integrated CI/CD pipelines, pre-built modular code repositories, and dedicated agile engineering pods, we build and deploy enterprise-ready MVPs within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Microservice Decoupling.",
      description: "Designing resilient, isolated service components to eliminate single points of failure across system networks."
    },
    {
      title: "High-Concurrency SLAs.",
      description: "Configuring elastic load balancing, caching networks, and multi-region database replication to maintain 99.99% uptime."
    },
    {
      title: "Automated Auditing Suites.",
      description: "Integrating static code linters and vulnerability scanners directly inside developer commit loops."
    },
    {
      title: "Self-Documenting Codebases.",
      description: "Building with clean OOP structures, comprehensive API swagger documentation, and unit-tested functions."
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise platform ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new SaaS ecosystem", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out code dependencies, identify performance bottlenecks, and formulate a ", bold: false },
  { text: "highly efficient, cost-optimized engineering plan ", bold: true },
  { text: "built to unlock measurable product growth and streamline operational efficiency.", bold: false }
];

const title = "Enterprise Custom Software Development Engineered to Scale";
const subtitle = "";

const introDescription = [
  { text: "We engineer enterprise-grade ", bold: false },
  { text: "custom software development services ", bold: true },
  { text: "tailored to the complex operational demands of modern businesses. As a leading ", bold: false },
  { text: "custom software development company", bold: true },
  { text: ", we combine resilient microservice architectures, cloud database models, and secure API integrations to deliver bespoke software solutions that eliminate technical debt and accelerate enterprise growth.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityServiceBySlug('custom-software-development');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Custom Software Development Services | Leapsofts",
    defaultDescription: "Build secure, scalable custom software tailored to your enterprise. Leapsofts delivers full-cycle development from architecture to deployment. Get a free quote.",
    defaultKeywords: "custom software development services, bespoke software development, enterprise application development, software development company",
    canonicalUrl: "https://www.leapsofts.com/services/custom-software-development",
  });
}

function CustomSoftwareDevelopment() {
  const { data } = useServicePage('custom-software-development');

  const schemaData = buildServiceSchema({
    name: "Custom Software Development Services",
    description: "Build secure, scalable custom software tailored to your enterprise. Leapsofts delivers full-cycle development from architecture to deployment.",
    canonicalUrl: "https://www.leapsofts.com/services/custom-software-development",
    faqs: data?.faqs,
  });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeCapabilitiesSlides = (data?.capabilitiesSection?.slides && data.capabilitiesSection.slides.length > 0)
    ? data.capabilitiesSection.slides.map(slide => ({
        id: slide.id || 'slide',
        number: slide.number || '< 01 >',
        title: slide.title || '',
        image: slide.imageUrl || capabilitiesImg,
        items: slide.items || []
      }))
    : capabilitiesSlides;

  const activeComparisonData = (data?.comparisonTable && data.comparisonTable.items?.length)
    ? {
        label: data.comparisonTable.label || comparisonData.label,
        titleAccent: data.comparisonTable.titleAccent || comparisonData.titleAccent,
        titleMain: data.comparisonTable.titleMain || comparisonData.titleMain,
        description: data.comparisonTable.description || comparisonData.description,
        headers: data.comparisonTable.headers || comparisonData.headers,
        items: data.comparisonTable.items || comparisonData.items
      }
    : comparisonData;

  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || deliverMVPData.label,
        title: data.deliverMVP.title || deliverMVPData.title,
        accentText: data.deliverMVP.accentText || deliverMVPData.accentText,
        description: data.deliverMVP.description || deliverMVPData.description,
        items: data.deliverMVP.items || deliverMVPData.items
      }
    : deliverMVPData;

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  const strategyCTA = data?.strategyCTA;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      <Capabilities
        title={data?.capabilitiesSection?.title || "Our Key Capabilities"}
        description={data?.capabilitiesSection?.description || "We offer end-to-end custom application development services across various platforms and business functions."}
        slides={activeCapabilitiesSlides}
        defaultImage={capabilitiesImg}
      />
      <ComparisonTable data={activeComparisonData} />
      <StreamlineSuccess
        label={strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={strategyCTA?.titleMain || "Map your "}
        titleAccent={strategyCTA?.titleAccent || "technical"}
        titleEnd={strategyCTA?.titleEnd || " roadmap."}
        description={strategyCTA?.descriptionText ? parseFormattedText(strategyCTA.descriptionText) : streamlineDescription}
        buttonText={strategyCTA?.buttonText}
        buttonPath={strategyCTA?.buttonPath}
        imageUrl={strategyCTA?.imageUrl || "/streamline.png"}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <Processes title={data?.processes?.title || "OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      <FAQs title="Custom Software Development FAQ" subtitle="Everything you need to know about our enterprise custom software development services, timelines, and IP ownership." faqs={data?.faqs} items={data?.faqs} />
      <RelatedServices
        services={[
          {
            title: "Web Application Development",
            description: "Build scalable, enterprise-grade cloud web platforms and SaaS solutions tailored for high performance.",
            link: "/services/web-app-development"
          },
          {
            title: "Mobile App Development",
            description: "High-performance iOS and Android mobile app development engineered with native Swift, Kotlin & Flutter.",
            link: "/services/mobile-app-development"
          },
          {
            title: "Cloud Engineering & Architecture",
            description: "Modernize infrastructure with resilient cloud-native architectures on AWS, Azure, and Google Cloud.",
            link: "/services/cloud-engineering"
          }
        ]}
      />
    </>
  );
}

export default CustomSoftwareDevelopment;