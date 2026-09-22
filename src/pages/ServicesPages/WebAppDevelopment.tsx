import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import RelatedServices from '../../components/RelatedServices/RelatedServices'
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
  label: "WEB APPLICATION DEVELOPMENT SERVICES",
  titleMain: "Building High-Performance",
  titleAccent: "Enterprise Web",
  titleEnd: "Applications",
  description: "At Leapsofts, as a specialized web application development company, we engineer custom web applications that combine modern frontend frameworks with resilient cloud backends. Leveraging React, Next.js, Node.js, and serverless cloud infrastructure (AWS/Azure), we build secure SaaS platforms, enterprise client portals, and real-time web dashboards optimized for Core Web Vitals, conversion speed, and long-term scalability.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'MODERN WEB STACK & INNOVATION',
  titleAccent: 'Enterprise Web Application',
  titleMain: 'Technologies We Master',
  description: 'We integrate cutting-edge web technologies to deliver lightning-fast response times, flawless mobile responsiveness, and bank-grade data security.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Custom SaaS Platform Architecture',
      description: 'Designing multi-tenant SaaS application backends with isolated database schemas, subscription billing, and automated user onboarding pipelines.'
    },
    {
      icon: 'saas' as const,
      title: 'React & Next.js Full-Stack Web Development',
      description: 'Building blazing-fast web applications using React 19, Next.js App Router, TypeScript, and Server-Side Rendering (SSR) for maximum SEO search engine indexing.'
    },
    {
      icon: 'hipaa' as const,
      title: 'Scalable RESTful & GraphQL Microservice APIs',
      description: 'Architecting secure, distributed API gateways utilizing Node.js, Python, and C# .NET to manage high-concurrency database queries and third-party integrations.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Progressive Web Application (PWA) Development',
      description: 'Engineering offline-capable Progressive Web Apps with service worker caching, instant push notifications, and native-like mobile responsiveness.'
    },
    {
      icon: 'mobile' as const,
      title: 'Core Web Vitals & Speed Performance Tuning',
      description: 'Optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to guarantee top Google search performance.'
    },
    {
      icon: 'legacy' as const,
      title: 'Enterprise Web Security & SOC2 Compliance',
      description: 'Implementing OAuth2/OpenID authentication, role-based access control (RBAC), TLS 1.3 encryption, and automated Cypress/Playwright security testing.'
    },
  ]
}

const infoGridData: InfoGridProps['data'] = {
  label: 'BUSINESS ADVANTAGES',
  title: 'Why Enterprise Brands Choose Our Web Application Developers',
  items: [
    {
      icon: '01',
      title: 'Cross-Device Responsive Accessibility',
      description: 'Deliver uniform, pixel-perfect user experiences across desktop monitors, tablets, and mobile viewports with fluid CSS breakpoints.'
    },
    {
      icon: '02',
      title: 'Zero-Downtime Continuous Deployment',
      description: 'Deploy new web app features, security patches, and hotfixes seamlessly using automated Vercel & AWS CI/CD pipelines without user session interruption.'
    },
    {
      icon: '03',
      title: 'Auto-Scaling Serverless Cloud Infrastructure',
      description: 'Deploy onto resilient multi-region cloud networks (AWS Elastic Beanstalk / Azure App Services) that scale automatically during peak traffic spikes.'
    },
    {
      icon: '04',
      title: 'Reduced Total Cost of Ownership (TCO)',
      description: 'Maximize engineering ROI with reusable React component libraries, decoupled microservices, and efficient cloud resource utilization.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a legacy ", bold: false },
  { text: "enterprise web portal ", bold: true },
  { text: "or engineering a new ", bold: false },
  { text: "custom SaaS web platform", bold: true },
  { text: ", our senior web architects deliver complete technical execution. We analyze your tech stack, optimize API data flows, and build a ", bold: false },
  { text: "high-converting, Core-Web-Vitals optimized web application ", bold: true },
  { text: "engineered for long-term market leadership.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Custom React & Next.js Apps',
    description: 'Blazing-fast, SEO-optimized web frontends utilizing Next.js, Server-Side Rendering (SSR), and TypeScript for peak performance.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Node.js & Python Web APIs',
    description: 'High-concurrency backend web services engineered for real-time data streaming, OAuth security, and database ORM query optimization.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Progressive Web Apps (PWA)',
    description: 'Mobile-first Progressive Web Applications featuring offline service workers, app-like interactions, and cross-platform compatibility.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Cloud Microservices & SaaS',
    description: 'Decoupled SaaS microservices architecture supporting multi-tenant isolation, automated billing, and zero-downtime releases.'
  }
];

const deliverMVPData = {
  label: "WEB DEVELOPMENT EXCELLENCE",
  title: "Deploy Your Production-Ready Custom Web Application in",
  accentText: "3-5 months",
  description: "Leapsofts is an elite custom web application development company. Leveraging automated Vercel/AWS release pipelines, modular React component libraries, and dedicated agile pods, we build and deploy enterprise web applications within 3 to 5 months.",
  items: [
    {
      title: "Agile Development Pods.",
      description: "Utilizing bi-weekly sprint deliverables and transparent Kanban boards to maintain full execution visibility."
    },
    {
      title: "Bank-Grade Web Security.",
      description: "Implementing OAuth2 authentication, CORS headers, CSRF protections, and SOC2 compliant database encryption."
    },
    {
      title: "Core Web Vitals Optimization.",
      description: "Engineering lightweight JS bundles and lazy-loaded assets to guarantee top-tier Lighthouse speed scores."
    },
    {
      title: "Continuous Post-Launch Support.",
      description: "Providing proactive cloud infrastructure monitoring, security patch updates, and ongoing feature enhancements."
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
  { text: "We deliver industry-leading ", bold: false },
  { text: "web app development services ", bold: true },
  { text: "and ", bold: false },
  { text: "custom web application development ", bold: true },
  { text: "tailored for high-growth enterprises. As an experienced web app development company, we build high-performance SaaS platforms, progressive web apps, and enterprise portals engineered for speed, security, and effortless scalability.", bold: false }
];

export function meta() {
  const title = "Web App Development Services | Leapsofts";
  const description = "Custom web application development for enterprises. Leapsofts builds high-performance, secure web apps using modern stacks. Start your project today.";
  const keywords = "web app development company, custom web application development, enterprise web development services, web application developers";
  const canonicalUrl = "https://www.leapsofts.com/services/web-app-development";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Web Application Development",
      "description": "Custom web application development for enterprises."
    },
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
          "name": "Web App Development",
          "item": "https://www.leapsofts.com/services/web-app-development"
        }
      ]
    }
  ]
};

const WebAppDevelopment: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
      <RelatedServices
        services={[
          {
            title: "Custom Software Development",
            description: "Bespoke enterprise software architecture, legacy system re-engineering, and tailored business platforms.",
            link: "/services/custom-software-development"
          },
          {
            title: "Mobile App Development",
            description: "High-performance iOS and Android mobile apps engineered with native Swift, Kotlin & cross-platform Flutter.",
            link: "/services/mobile-app-development"
          },
          {
            title: "DevOps & Cloud Automation",
            description: "Automate CI/CD delivery pipelines, container orchestration with Kubernetes, and cloud infrastructure.",
            link: "/services/devops"
          }
        ]}
      />
    </>
  )
}

export default WebAppDevelopment