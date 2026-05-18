import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
  label: "WEB DEVELOPMENT",
  titleMain: "Building Scalable",
  titleAccent: "Modern",
  titleEnd: "Web Applications",
  description: "At Leapsofts, we engineer highly performant web applications that bridge strategic business objectives with robust tech execution. By leveraging containerized microservices, distributed data management systems, and advanced browser rendering patterns, we deliver enterprise SaaS platforms, secure portals, and interactive dashboards engineered for absolute speed, strict security compliance, and effortless scalability.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'EMERGING TECHNOLOGIES',
  titleAccent: 'Web Innovation',
  titleMain: 'Tools We Use',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'User Interface (UI) Design & Client Side Rendering',
      description: 'Designing intuitive, accessible web interfaces that optimize user flows, using atomic design principles and modern state management to deliver instant response times.'
    },
    {
      icon: 'saas' as const,
      title: 'Dynamic Single Page Applications (SPA) & Server Side Rendering (SSR)',
      description: 'Building blazing-fast frontends using React, Next.js, and TypeScript, utilizing advanced routing, asset lazy loading, and edge rendering to achieve high core web vitals.'
    },
    {
      icon: 'hipaa' as const,
      title: 'Scalable RESTful & GraphQL Microservice Backends',
      description: 'Architecting secure, distributed backends utilizing Node.js, Python, and C# to manage complex business logic, transactional database reads/writes, and zero-trust API layers.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'High-Volume Transactional & Payment Portals',
      description: 'Developing enterprise-grade e-commerce ecosystems and customized transactional platforms integrated with secure stripe networks, billing ledgers, and inventory systems.'
    },
    {
      icon: 'mobile' as const,
      title: 'Ongoing Performance Tuning & System Maintenance',
      description: 'Providing proactive post-launch maintenance, cloud environment audits, runtime memory analysis, and dependency upgrades to guarantee constant performance and stability.'
    },
    {
      icon: 'legacy' as const,
      title: 'Rigorous Automated Testing & Security Audits',
      description: 'Conducting comprehensive functional, end-to-end (Playwright/Cypress), load testing, and static analysis checks to guarantee zero defects and SOC2 database compliance before launch.'
    },
  ]
}

const infoGridData: InfoGridProps['data'] = {
  label: 'WHY US',
  title: 'Value of Modern Web Apps',
  items: [
    {
      icon: '01',
      title: 'Global Accessibility & Device Agnostic Optimization',
      description: 'Reach your customer base globally with web applications that are fully responsive, mobile-optimized, and verified across all browsers and viewport sizes.'
    },
    {
      icon: '02',
      title: 'Zero-Downtime Hot Reloads & Continuous Deployment',
      description: 'Ship critical system updates, platform features, and hotfixes seamlessly using CI/CD pipelines without interrupting the user session or requiring updates.'
    },
    {
      icon: '03',
      title: 'Auto-Scaling Cloud Serverless Infrastructure',
      description: 'Deploy onto resilient cloud environments (AWS/Azure) utilizing serverless computing, edge databases, and content delivery networks (CDNs) that expand on demand.'
    },
    {
      icon: '04',
      title: 'Optimized Infrastructure Costs & Reduced TCO',
      description: 'Achieve significant operational cost reductions by leveraging headless services, microservice reusability, and automated resource allocations.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new SaaS web platform", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out front-end components, evaluate serverless and container options, and formulate a ", bold: false },
  { text: "highly efficient, core-web-vitals optimized engineering plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline user retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'React & Next.js',
    description: 'Blazing-fast, SEO-optimized frontends leveraging React 19, Next.js, and static site generation (SSG) to achieve maximum performance scores.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Node.js & Python',
    description: 'High-concurrency backend services designed for real-time data flows, rapid API integrations, and robust memory allocations.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'PWA Development',
    description: 'Progressive Web Apps utilizing service workers and local caching layers to deliver fully responsive, offline-capable app experiences.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Microservices',
    description: 'Architecting loosely coupled, modular service patterns that permit continuous local deployments and isolate system dependencies.'
  }
];

const deliverMVPData = {
  label: "WEB EXCELLENCE",
  title: "How Can We Deliver Your Web App in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom web engineering partner. By combining automated Vercel/AWS deployments, pre-built high-performance web modules, and dedicated agile squads, we deploy custom enterprise web applications within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Agile Sprint Delivery.",
      description: "Leveraging iterative bi-weekly sprint cycles and transparent task dashboards to deliver incremental value and maintain visual alignment."
    },
    {
      title: "Comprehensive Security.",
      description: "Integrating SOC2 database controls, SSL encryption, OAuth2 verification, and strict cross-origin resource sharing (CORS) rules to secure all transactions."
    },
    {
      title: "UX-Driven Responsive Architecture.",
      description: "Drafting technical wireframes, interactive user maps, and accessible UI grids that ensure friction-free task execution across mobile and desktop."
    },
    {
      title: "Post-Launch Web Support.",
      description: "Proactive system upgrades, cloud resource balancing, security patch audits, and performance tuning to secure long-term digital authority."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: WEB VIEWPORT DESIGN & SYSTEM PROTOTYPING",
    title: "Web Prototype & Layout Design",
    description:
      "We plan the interface hierarchies, viewport grids, and select rendering models designed to scale with your user demands.",
    features: [
      {
        title: "Atomic Responsive Wireframing",
        description:
          "Create fluid UI layouts and navigation flows across multiple screen sizes to eliminate interface friction."
      },
      {
        title: "Rendering Mode Architecture",
        description:
          "Define Next.js/React rendering models (SSR, SSG, or Client-Side Hydration) to balance initial load speeds and search engine indices."
      },
      {
        title: "API Data Schema Mapping",
        description:
          "Design lightweight REST and GraphQL communications bridges that connect user actions with backend databases."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: CLIENT-STATE & SECURE API SPECIFICATION",
    title: "State & Endpoint Configuration",
    description:
      "Formulating strict browser caching architectures, cloud networks, and transaction security rules.",
    features: [
      {
        title: "Browser Caching & Global Store",
        description:
          "Architect robust, normalized global states using Zustand or Redux alongside intelligent local caching rules."
      },
      {
        title: "CDN & Edge Topologies",
        description:
          "Configure cloud networks utilizing edge servers (Vercel/Cloudflare CDNs) to host static asset distributions with zero latency."
      },
      {
        title: "Zero-Trust Security Controls",
        description:
          "Define secure cookie headers, strict Cross-Origin Resource Sharing (CORS) configurations, and TLS encryption parameters."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY RESPONSIVE CODING",
    title: "Responsive Development & E2E Testing",
    description:
      "Building your high-performance frontend interfaces and secure backend routines in parallel agile cycles.",
    features: [
      {
        title: "Blazing-Fast UI Construction",
        description:
          "Write optimized React 19/TypeScript components achieving near-perfect Google Lighthouse performance metrics."
      },
      {
        title: "High-Concurrency Routing",
        description:
          "Develop server routes and backend services using high-concurrency Node.js or Python systems."
      },
      {
        title: "Automated E2E Testing Runs",
        description:
          "Integrate automated Playwright and Cypress end-to-end browser simulators to capture bugs before compilation."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: EDGE DEPLOYMENT & VITALS EVOLUTION",
    title: "Deployment & Vitals Tuning",
    description:
      "Seamless edge releases, continuous performance log tracking, and framework upgrades for ongoing security.",
    features: [
      {
        title: "Zero-Downtime Deployment Pipelines",
        description:
          "Establish continuous integration pipelines that deploy live upgrades with rolling releases and zero session disruption."
      },
      {
        title: "Core Web Vitals Tracking",
        description:
          "Monitor real-time system metrics (LCP, FID, CLS) and database indexes to sustain fast page response speeds."
      },
      {
        title: "Continuous Systems Evolution",
        description:
          "Implement react/framework patch sets, dependency upgrades, and security renewals to support ongoing SaaS growth."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "VIEWPORT DESIGN",
  "STATE & API SETUP",
  "RESPONSIVE CODING",
  "DEPLOYMENT & TUNING",
];

const title = "Enterprise Web Application Engineering";
const subtitle = "";

const introDescription = [
  { text: "We engineer high-performance, responsive ", bold: false },
  { text: "enterprise web applications ", bold: true },
  { text: "designed to streamline operational complexity and support global user scale. Leveraging modern frontend rendering and secure backend microservices, we build reliable SaaS platforms and digital products that eliminate latency and scale seamlessly with your growth.", bold: false }
]

const WebAppDevelopment: React.FC = () => {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <InfoGrid data={infoGridData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="web"
        titleEnd=" architecture."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core Web Capabilities'
        description='We utilize industry-leading tools and architectural patterns to deliver robust web applications.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR WEB APP DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default WebAppDevelopment