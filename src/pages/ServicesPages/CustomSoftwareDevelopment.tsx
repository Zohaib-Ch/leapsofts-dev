import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import IntroComponent from "../../components/IntroComponent/IntroComponent";
import Capabilities, { type CapabilitySlide } from "../../components/Capabilities/Capabilities";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
import { useServicePage } from '../../hooks/useServicePage';
import { getSanityServiceBySlug } from '../../sanity/queries';

const capabilitiesSlidesDefault: CapabilitySlide[] = [
  {
    id: 'function',
    number: '< 01 >',
    title: 'Function-Based Capabilities',
    image: "/streamline.webp",
    items: [
      {
        name: 'Architectural Integrity & Stability',
        description: 'We prioritize system durability and database normalization at every stage. Our engineering team designs clean, highly testable codebases that protect your enterprise workflows against scalability bottlenecks and legacy regressions.'
      },
      {
        name: 'High-Availability SLA Guarantees',
        description: 'Benefit from proactive, 24/7 technical support managed by our global engineering squads. We implement real-time system logging, anomaly detection, and automated hotfixes to ensure 99.99% operational uptime.'
      },
      {
        name: 'Standardized Security & SDLC Workflows',
        description: 'Our developers operate under strict Software Development Life Cycle (SDLC) models, integrating automated static analysis, strict linters, SAST scanning, and multi-peer code reviews into every release cycle.'
      }
    ]
  },
  {
    id: 'platform',
    number: '< 02 >',
    title: 'Platform-Based Capabilities',
    image: "/streamline.webp",
    items: [
      {
        name: 'Cloud-Native & API Orchestration',
        description: 'We specialize in building secure cloud-native environments and complex API integration topologies. From containerized microservices managed via Kubernetes to distributed cache layers (Redis) and robust database schemes, we ensure zero friction in data flows.'
      }
    ]
  }
];

const comparisonDataDefault = {
  label: 'ENTERPRISE ADVANTAGE',
  titleAccent: 'Bespoke Custom Software Development',
  titleMain: 'vs. Off-The-Shelf SaaS Platforms',
  description: 'Investing in bespoke custom software engineering over commercial off-the-shelf software packages delivers strategic, long-term operational, financial, and competitive advantages:',
  headers: {
    feature: 'Evaluation Criteria',
    custom: 'Custom Software Solution',
    offTheShelf: 'Off-the-Shelf Commercial Software'
  },
  items: [
    {
      feature: 'Tailored Business Logic',
      custom: 'Engineered from the ground up to mirror your proprietary enterprise workflows, complex business rules, and industry compliance demands.',
      offTheShelf: 'Forces operational teams to adapt internal processes to rigid, pre-built vendor constraints and generic templates.'
    },
    {
      feature: 'Enterprise Scalability',
      custom: 'Built on elastic microservices and distributed cloud databases (AWS/Azure) that scale automatically alongside transaction volume without latency spikes.',
      offTheShelf: 'Constrained by multi-tenant server sharing, API rate call throttling, and expensive seat-based licensing tier upgrades.'
    },
    {
      feature: 'API & System Integration',
      custom: 'Bespoke REST, GraphQL, and gRPC API middleware bridges engineered to synchronize seamlessly with legacy ERPs, CRMs, and internal databases.',
      offTheShelf: 'Reliant on static, fragile third-party plugins that frequently break during core framework or platform updates.'
    },
    {
      feature: 'Total Cost of Ownership (TCO)',
      custom: 'High-ROI digital asset with 100% IP ownership, zero recurring per-user seat fees, and zero vendor lock-in over a 3-5 year lifespan.',
      offTheShelf: 'Compounding annual subscription inflation, per-user pricing penalties, and forced upgrades for basic enterprise features.'
    },
    {
      feature: 'Competitive IP Advantage',
      custom: 'Exclusive proprietary source code and intellectual property that creates a defensible, unique digital moat over industry competitors.',
      offTheShelf: 'Generic digital infrastructure shared directly with your competitors, providing zero product differentiation.'
    },
    {
      feature: 'Security & Regulatory Control',
      custom: 'Total control over zero-trust security architecture, data residency, and full compliance engineering (HIPAA, SOC2, GDPR, PCI-DSS).',
      offTheShelf: 'Data stored on multi-tenant shared servers with third-party vendor access and unknown compliance auditing timelines.'
    },
    {
      feature: 'Release Cycle & Feature Control',
      custom: 'You determine feature roadmaps, security patch cycles, and release timelines based strictly on internal business priorities.',
      offTheShelf: 'Vulnerable to sudden vendor feature deprecations, forced UI redesigns, and unexpected pricing tier restructuring.'
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

const deliverMVPDataDefault = {
  label: "WHY CHOOSE LEAPSOFTS",
  title: "Our Commitment to Deliver Your Enterprise Software in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom software engineering partner. By combining fully integrated CI/CD pipelines, pre-built modular code repositories, and dedicated senior agile pods, we build and deploy enterprise-ready MVPs within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Microservice Decoupling.",
      description: "Designing resilient, isolated service components to eliminate single points of failure across enterprise system networks."
    },
    {
      title: "High-Concurrency SLAs.",
      description: "Configuring elastic load balancing, distributed caching networks, and multi-region database replication to maintain 99.99% uptime."
    },
    {
      title: "Automated Auditing Suites.",
      description: "Integrating static code linters, vulnerability scanners, and automated regression suites directly inside developer commit loops."
    },
    {
      title: "Self-Documenting Codebases.",
      description: "Building with clean OOP design patterns, OpenAPI/Swagger documentation, and unit-tested functions for effortless developer onboarding."
    },
    {
      title: "100% IP & Source Code Ownership.",
      description: "Complete handover of repository rights, deployment scripts, Docker containers, and documentation with zero vendor lock-in."
    },
    {
      title: "Dedicated Senior Engineering Squads.",
      description: "Assigned full-stack engineers, solution architects, and SCRUM masters who integrate seamlessly into your internal workflows."
    }
  ]
};

const defaultFaqs = [
  {
    question: "What is the average timeline for custom software development?",
    answer: "An initial Minimum Viable Product (MVP) or core enterprise module is typically delivered within 3 to 5 months. Larger enterprise platforms follow an iterative sprint structure, delivering functional features every 2 weeks."
  },
  {
    question: "How much does enterprise custom software development cost?",
    answer: "Costs vary based on complexity, scope, data security standards, and integration requirements. Typical custom software projects range from $25,000 for focused MVPs to $150,000+ for multi-tenant enterprise platforms. We provide transparent, milestone-driven estimates after a complimentary architecture session."
  },
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer: "You own 100% of the custom source code, database architectures, APIs, and intellectual property upon payment completion. Leapsofts signs strict Non-Disclosure Agreements (NDAs) and executes full IP transfer documentation."
  },
  {
    question: "What software development methodologies do you use?",
    answer: "We utilize Agile SCRUM and Kanban frameworks. Clients receive bi-weekly sprint reviews, access to staging environments, and real-time dashboard updates via Jira/Linear to ensure complete transparency throughout the SDLC."
  },
  {
    question: "How do you ensure data security and compliance (GDPR, HIPAA, SOC2)?",
    answer: "Security is embedded into every development sprint. We implement end-to-end AES-256 data encryption, zero-trust role-based access controls (RBAC), automated SAST vulnerability scanning, and audit trails to guarantee HIPAA, GDPR, SOC2, and PCI-DSS compliance."
  },
  {
    question: "Can you integrate new custom software with our existing legacy systems?",
    answer: "Yes. Our solution architects specialize in custom API integration, building secure REST, GraphQL, or gRPC middleware bridges to connect your new platform with legacy databases, ERPs (SAP, Oracle), and CRMs (Salesforce)."
  },
  {
    question: "What post-launch maintenance and SLA support do you provide?",
    answer: "We provide structured Post-Launch SLAs ranging from 24/7 critical incident response to continuous monthly feature enhancements, framework security patching, cloud cost optimization, and proactive server uptime monitoring."
  },
  {
    question: "What tech stack do you use for custom software development?",
    answer: "We leverage modern, industry-standard technologies: TypeScript, Node.js, Go, Python, and Java for scalable backends; React, Next.js, and Angular for high-performance web frontends; Flutter and Swift/Kotlin for mobile apps; and AWS, Azure, Docker, and Kubernetes for cloud infrastructure."
  },
  {
    question: "What is the difference between a dedicated development pod and a fixed-price project?",
    answer: "Fixed-price engagements are ideal for projects with clearly defined, static scopes and specs. Dedicated development pods provide an assigned squad of senior developers, architects, and QA engineers working on a monthly sprint basis, offering maximum flexibility for evolving product roadmaps."
  }
];

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise platform ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new SaaS ecosystem", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out code dependencies, identify performance bottlenecks, and formulate a ", bold: false },
  { text: "highly efficient, cost-optimized engineering plan ", bold: true },
  { text: "built to unlock measurable product growth and streamline operational efficiency.", bold: false }
];

const title = "Enterprise Custom Software Development Services | Leapsofts";
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

export function meta({ data }: { data?: Record<string, unknown> }) {
  return buildPageMeta({
    sanityData: (data as any)?.sanityData,
    defaultTitle: "Enterprise Custom Software Development Services | Leapsofts",
    defaultDescription: "Leapsofts delivers enterprise custom software development services tailored for scalability, security, and performance. 100% IP handover, cloud-native architecture, and 3-5 month MVP delivery. Request a free strategy session.",
    defaultKeywords: "custom software development services, enterprise software development company, bespoke software development, enterprise application development, software development company, custom enterprise software, microservices software architecture, legacy software modernization",
    canonicalUrl: "https://www.leapsofts.com/services/custom-software-development",
  });
}

function CustomSoftwareDevelopment() {
  const { data } = useServicePage('custom-software-development');

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : defaultFaqs;

  const schemaData = buildServiceSchema({
    name: "Enterprise Custom Software Development Services",
    description: "Leapsofts delivers enterprise custom software development services tailored for scalability, security, and performance. 100% IP handover and cloud-native architecture.",
    canonicalUrl: "https://www.leapsofts.com/services/custom-software-development",
    faqs: activeFaqs,
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
        image: slide.imageUrl || "/streamline.webp",
        items: slide.items || []
      }))
    : capabilitiesSlidesDefault;

  const activeComparisonData = (data?.comparisonTable && data.comparisonTable.items?.length)
    ? {
        label: data.comparisonTable.label || comparisonDataDefault.label,
        titleAccent: data.comparisonTable.titleAccent || comparisonDataDefault.titleAccent,
        titleMain: data.comparisonTable.titleMain || comparisonDataDefault.titleMain,
        description: data.comparisonTable.description || comparisonDataDefault.description,
        headers: {
          feature: data.comparisonTable.headers?.feature || comparisonDataDefault.headers.feature,
          custom: data.comparisonTable.headers?.custom || comparisonDataDefault.headers.custom,
          offTheShelf: data.comparisonTable.headers?.offTheShelf || comparisonDataDefault.headers.offTheShelf,
        },
        items: data.comparisonTable.items.map(item => ({
          feature: item.feature || '',
          custom: item.custom || '',
          offTheShelf: item.offTheShelf || ''
        }))
      }
    : comparisonDataDefault;

  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || deliverMVPDataDefault.label,
        title: data.deliverMVP.title || deliverMVPDataDefault.title,
        accentText: data.deliverMVP.accentText || deliverMVPDataDefault.accentText,
        description: data.deliverMVP.description || deliverMVPDataDefault.description,
        items: data.deliverMVP.items || deliverMVPDataDefault.items
      }
    : deliverMVPDataDefault;

  const activeProcessPhases: ProcessPhase[] = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases.map((phase, index) => ({
        id: phase.id ?? (index + 1),
        phase: phase.phase || `PHASE ${index + 1}`,
        title: phase.title || '',
        description: phase.description || '',
        features: phase.features || []
      }))
    : (processPhasesDefault);

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
      {activeCapabilitiesSlides && activeCapabilitiesSlides.length > 0 && (
        <Capabilities
          title={data?.capabilitiesSection?.title || "Our Custom Software Engineering Capabilities"}
          description={data?.capabilitiesSection?.description || "We offer end-to-end custom application development services across various platforms, cloud architectures, and enterprise business functions."}
          slides={activeCapabilitiesSlides}
          defaultImage="/streamline.webp"
        />
      )}
      {activeComparisonData && activeComparisonData.items && activeComparisonData.items.length > 0 && (
        <ComparisonTable data={activeComparisonData as ComparisonData} />
      )}
      <StreamlineSuccess
        label={strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={strategyCTA?.titleMain || "Map your "}
        titleAccent={strategyCTA?.titleAccent || "technical"}
        titleEnd={strategyCTA?.titleEnd || " roadmap."}
        description={strategyCTA?.descriptionText ? parseFormattedText(strategyCTA.descriptionText) : streamlineDescription}
        description2="During this complimentary 45-minute architectural session, our principal solution engineers analyze your current software infrastructure, audit technical debt, evaluate cloud concurrency bottlenecks, and formulate a clear, milestone-driven execution plan with transparent budget estimates."
        buttonText={strategyCTA?.buttonText || "Schedule Architectural Consultation"}
        buttonPath={strategyCTA?.buttonPath || "/contact"}
        imageUrl={strategyCTA?.imageUrl || "/streamline.webp"}
      />
      {activeDeliverMVPData && activeDeliverMVPData.items && activeDeliverMVPData.items.length > 0 && (
        <DeliverMVP data={activeDeliverMVPData} />
      )}
      {activeProcessPhases && activeProcessPhases.length > 0 && (
        <Processes title={data?.processes?.title || "OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      )}
      <FAQs title="Custom Software Development FAQ" subtitle="Everything you need to know about our enterprise custom software development services, timelines, pricing, and 100% IP ownership." faqs={activeFaqs} items={activeFaqs} />
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