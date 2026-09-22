import { useServicePage } from '../../hooks/useServicePage';
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
  label: "SHOPIFY DEVELOPMENT",
  titleMain: "Engineering Scalable",
  titleAccent: "Headless Store",
  titleEnd: "Systems",
  description: "At Leapsofts, we customize and engineer robust Shopify Plus architectures designed to unlock measurable commerce success. By configuring custom theme layers, designing decoupled frontends using Shopify's Hydrogen framework, and building robust API connections to sync ERPs, inventory records, and payment systems, we help major retail brands achieve rapid loading speeds, superior mobile layouts, and seamless checkout operations.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'SHOPIFY SERVICES',
  titleAccent: 'Your',
  titleMain: 'Commerce Partner',
  description:
    'Your comprehensive partner for building, customizing, integrating, and scaling Shopify-based e-commerce solutions.',
  items: [
    {
      icon: 'ecommerce' as const,
      title: 'Shopify Store Setup & Design Customization',
      description: 'Building new online stores from custom design specifications, implementing modular theme components, and seeding checkout workflows.'
    },
    {
      icon: 'product' as const,
      title: 'Liquid Template Development & Layout Tuning',
      description: 'Writing complex Liquid logic, custom sections schema parameters, and optimizing front-end assets to protect mobile conversion.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Enterprise ERP & Inventory API Bridges',
      description: 'Connecting your storefront with back-office databases, ERP systems, and warehouse inventories via secure REST/GraphQL integrations.'
    },
    {
      icon: 'saas' as const,
      title: 'Bespoke Custom Shopify App Engineering',
      description: 'Developing custom private apps using Node.js or Ruby on Rails to automate complex operational and customer loyalty tasks.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Shopify Plus Upgrade & Enterprise Systems',
      description: 'Scoping and customizing enterprise attributes like Shopify Functions, Checkout Extensibility, and advanced B2B portals.'
    },
    {
      icon: 'legacy' as const,
      title: 'Zero-Loss Database E-Commerce Migration',
      description: 'Migrating product datasets, transaction records, customer vaults, and SEO metadata from legacy platforms (WooCommerce/Magento) with zero downtime.'
    },
  ]
};

const infoGridData: InfoGridProps['data'] = {
  label: 'ADVANTAGES',
  title: 'Why Choose Leapsofts for Shopify',
  items: [
    {
      icon: '01',
      title: 'Uninterrupted Transactional Operations',
      description: 'Guarantee continuous database read/write speeds, high-velocity cart caching, and robust security safeguards.'
    },
    {
      icon: '02',
      title: 'Conversion-Engineered Checkout Paths',
      description: 'Construct highly accessible visual layouts and rapid checkout actions optimized to maximize average order value.'
    },
    {
      icon: '03',
      title: 'High-Velocity Agile Launch Sprints',
      description: 'Package, configure, and release customized e-commerce storefronts inside an accelerated agile roadmap.'
    },
    {
      icon: '04',
      title: 'Enterprise Shopify Plus Resilience',
      description: 'Scale smoothly during peak holiday traffic events, managing thousands of concurrent checkouts without operational delays.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new Shopify Plus ecosystem", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current settings, map out custom applications, evaluate checkout features, and formulate a ", bold: false },
  { text: "highly efficient, optimized Liquid/Hydrogen engineering plan ", bold: true },
  { text: "built to unlock massive sales growth and streamline customer conversion.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Custom Liquid Dev',
    description: 'Writing custom Liquid syntax, sections, and blocks to execute advanced layout modifications.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Headless Commerce',
    description: 'Deploying decoupled Shopify frontends using Hydrogen and React hosted on Shopify Oxygen edge nodes.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Performance Tuning',
    description: 'Tracing page-load bottlenecks, compressing images, and optimizing JavaScript execution to achieve near-perfect core web vitals.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'SEO & Marketing',
    description: 'Structuring semantic schema markups, configuring localized sitemaps, and establishing clean redirect paths.'
  }
];

const deliverMVPData = {
  label: "SHOPIFY EXCELLENCE",
  title: "Our Commitment to Deliver Your Commerce Setup in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom e-commerce engineering partner. By combining fully integrated CI/CD, certified Shopify developers, and dedicated agile pods, we implement and deploy enterprise-ready Shopify storefronts within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Expert Developers.",
      description: "Accessing senior engineers with extensive experience building in the Shopify Plus ecosystem."
    },
    {
      title: "High Performance.",
      description: "Developing stores that handle high transaction metrics and heavy holiday traffic peaks without operational delays."
    },
    {
      title: "User-Centric Design.",
      description: "Formulating visual checkout wireframes, touch-optimized product grids, and accessible interfaces."
    },
    {
      title: "Long-term Support.",
      description: "Providing continuous maintenance upgrades, theme checks, security updates, and performance tuning."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: SHOPIFY STRATEGY & ORG DISCOVERY",
    title: "E-Commerce Strategy & Analysis",
    description:
      "We audit your target transaction requirements, checkout limits, and legacy system integration fits.",
    features: [
      {
        title: "Target Market & Discovery Audit",
        description:
          "Analyze customer touchpoints, average order volume objectives, and current operational workflow blocks."
      },
      {
        title: "Platform & Integration Fit Scoping",
        description:
          "Scope customized application requirements, Liquid theme parameters, and headless Hydrogen specifications."
      },
      {
        title: "Roadmap & Inventory Planning",
        description:
          "Formulate custom timelines, backend inventory pipelines, payment setups, and migration pathways."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: UX WIREFRAMING & API SCHEMA DESIGN",
    title: "Interface Prototyping & Schema Modeling",
    description:
      "Drafting responsive layouts, secure API endpoints, and private app configurations.",
    features: [
      {
        title: "Mobile-First Touch Grid Wireframes",
        description:
          "Design visual store layouts, category navigation systems, and conversion-focused product grids."
      },
      {
        title: "GraphQL & RESTful Endpoint Design",
        description:
          "Model secure API mappings to sync backend ERP, inventory, CRM, and order fulfillment systems."
      },
      {
        title: "Custom Apps Architecture Scoping",
        description:
          "Design customized database parameters and API triggers for private Shopify applications."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY HEADLESS & LIQUID CODING",
    title: "Liquid/Hydrogen Coding & Parity Checks",
    description:
      "Building high-performance storefront layouts and secure background synchronizations in agile pods.",
    features: [
      {
        title: "High-Performance Storefront Coding",
        description:
          "Construct optimized Liquid layouts or React-based headless storefronts hosted on Shopify Oxygen edge nodes."
      },
      {
        title: "Real-Time Systems Integrations",
        description:
          "Code real-time database gateways syncing checkout activities directly into warehouse inventories."
      },
      {
        title: "Automated Core Web Vitals Audits",
        description:
          "Run automated E2E browser tests (Playwright) and performance checks to guarantee high loading speeds."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: PRODUCT MIGRATION & LAUNCH EVOLUTION",
    title: "Customer Database Rollout & Live Support",
    description:
      "Seamless product data imports, payment activation, and continuous operational optimizations.",
    features: [
      {
        title: "Zero-Loss E-Commerce Database Import",
        description:
          "Migrate product files, customer details, sitemap paths, and SEO metadata into the live store securely."
      },
      {
        title: "Payment Routing & Domain Sync",
        description:
          "Activate payment gateways, configure secure checkout profiles, and deploy active DNS routes."
      },
      {
        title: "Continuous Commerce Scaling",
        description:
          "Deliver continuous theme upgrades, regular security checks, performance tunings, and marketing adjustments."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "UX & API DESIGN",
  "HEADLESS & LIQUID CODING",
  "MIGRATION & SUPPORT",
];

const title = "Enterprise Headless Shopify Development & E-Commerce Engineering";
const subtitle = "";

const introDescription = [
  { text: "As a leading ", bold: false },
  { text: "Shopify development company & eCommerce engineering partner", bold: true },
  { text: ", we build custom Shopify themes, Hydrogen & Oxygen headless storefronts, private app integrations, and zero-downtime database migrations. We help retail brands engineer high-converting, lightning-fast digital storefronts.", bold: false }
]

export function meta() {
  const title = "Shopify Development Services | Leapsofts";
  const description = "Expert Shopify store development, custom theme design & app integration. Leapsofts builds high-converting Shopify eCommerce stores. Start your project.";
  const keywords = "Shopify development company, Shopify store development, custom Shopify theme, Shopify ecommerce development";
  const canonicalUrl = "https://www.leapsofts.com/services/shopify";

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
      "name": "Shopify Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Shopify eCommerce Development",
      "description": "Expert Shopify store development, custom theme design & app integration."
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
          "name": "Shopify",
          "item": "https://www.leapsofts.com/services/shopify"
        }
      ]
    }
  ]
};

const Shopify: React.FC = () => {
  const { data } = useServicePage('shopify');

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof infoGridData !== 'undefined' ? infoGridData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof infoGridData !== 'undefined' ? infoGridData.title : ''),
        description: data.infoGrid.description || (typeof infoGridData !== 'undefined' ? infoGridData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof infoGridData !== 'undefined' ? infoGridData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof emergingTechData !== 'undefined' ? emergingTechData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof emergingTechData !== 'undefined' ? emergingTechData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof emergingTechData !== 'undefined' ? emergingTechData.titleMain : ''),
        description: data.emergingTech.description || (typeof emergingTechData !== 'undefined' ? emergingTechData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof emergingTechData !== 'undefined' ? emergingTechData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.label : ''),
        title: data.deliverMVP.title || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.title : ''),
        accentText: data.deliverMVP.accentText || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.accentText : ''),
        description: data.deliverMVP.description || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.description : ''),
        items: data.deliverMVP.items || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.items : [])
      }
    : (typeof deliverMVPData !== 'undefined' ? deliverMVPData : { label: '', title: '', accentText: '', description: '', items: [] });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.label : ''),
        titleMain: data.serviceOverview.titleMain || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleMain : ''),
        titleAccent: data.serviceOverview.titleAccent || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleAccent : ''),
        titleEnd: data.serviceOverview.titleEnd || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleEnd : ''),
        description: data.serviceOverview.description || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.description : ''),
        imagePath: data.serviceOverview.imageUrl || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.imagePath : undefined)
      }
    : (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData : null);

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="e-commerce"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert E-comm Skills'
        description='Our teams bring deep expertise in Shopify and modern e-commerce architectures.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <EmergingTech data={activeEmergingTechData} />
      <Processes title="OUR CUSTOM SHOPIFY DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Web App Development",
            description: "Build scalable web applications and custom merchant admin portals.",
            link: "/services/web-app-development"
          },
          {
            title: "Mobile App Development",
            description: "Engineer native iOS & Android shopping applications for mobile commerce.",
            link: "/services/mobile-app-development"
          },
          {
            title: "Salesforce Development & CRM Integration",
            description: "Sync your Shopify store with Salesforce Sales & Marketing Clouds.",
            link: "/services/salesforce"
          }
        ]}
      />
    </>
  )
}

export default Shopify