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
  label: "SHOPIFY DEVELOPMENT",
  titleMain: "Elevate Your",
  titleAccent: "E-Commerce",
  titleEnd: "Store",
  description: "Leapsofts is your comprehensive partner for building, customizing, integrating, and scaling Shopify-based e-commerce solutions. We focus on creating high-converting, visually stunning, and technically robust online stores that drive business growth.",
  imagePath: laptopImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'SHOPIFY SERVICES',
  titleAccent: 'Your',
  titleMain: 'Commerce Partner',
  description:
    'Your comprehensive partner for building, customizing, integrating, and scaling Shopify-based e-commerce solutions.',
  items: [
    { icon: 'ecommerce', title: 'Store Creation', description: 'Quick and efficient setup of your Shopify online store for a speedy launch.' },
    { icon: 'product', title: 'Theme Personalization', description: 'Deep customization focusing on unique mobile and web user experiences.' },
    { icon: 'thirdParty', title: 'System Integration', description: 'Seamlessly connecting Shopify with your ERP, CRM, and marketing tools.' },
    { icon: 'saas', title: 'Custom App Development', description: 'Building bespoke Shopify apps to add unique functionality to your store.' },
    { icon: 'enterprise', title: 'Shopify Plus', description: 'Scalable solutions for high-volume merchants and enterprise brands.' },
    { icon: 'legacy', title: 'Seamless Migration', description: 'Securely transitioning your store from other platforms to Shopify.' },
  ]
};
const infoGridData: InfoGridProps['data'] = {
  label: 'ADVANTAGES',
  title: 'Why Choose Leapsofts for Shopify',
  items: [
    {
      icon: '01',
      title: 'Smooth Operations',
      description: 'Guaranteeing uninterrupted store functionality and high availability.'
    },
    {
      icon: '02',
      title: 'Conversion Focused',
      description: 'Designing user journeys specifically optimized to drive sales.'
    },
    {
      icon: '03',
      title: 'Swift Market Entry',
      description: 'Accelerated development timelines for faster store launches.'
    },
    {
      icon: '04',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security and architecture that grows with you.'
    }
  ]
};

const streamlineDescription = [
  { text: "Your e-commerce success depends on a ", bold: false },
  { text: "seamless user experience", bold: true },
  { text: ". Leapsofts offers a ", bold: false },
  { text: "complimentary Shopify audit session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "conversion bottlenecks ", bold: true },
  { text: "and growth opportunities for your online presence.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Custom Liquid Dev',
    description: 'Expert Liquid coding for complex theme logic and layout needs.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Headless Commerce',
    description: 'Building decoupled Shopify storefronts using Hydrogen or custom frameworks.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Performance Tuning',
    description: 'Optimizing page load speeds and Core Web Vitals for better SEO.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'SEO & Marketing',
    description: 'Ensuring your store is built for visibility and effective marketing.'
  }
];

const deliverMVPData = {
  label: "SHOPIFY EXCELLENCE",
  title: "Committed to",
  accentText: "Commerce Success",
  description: "Leapsofts provides dedicated e-commerce specialists who are fully committed to your project's success. We focus on conversion, scalability, and technical excellence.",
  items: [
    {
      title: "Expert Developers.",
      description: "A team with deep experience in the Shopify ecosystem and APIs."
    },
    {
      title: "High Performance.",
      description: "Building stores that handle high traffic and transactions smoothly."
    },
    {
      title: "User-Centric Design.",
      description: "Interfaces that guide users naturally from arrival to checkout."
    },
    {
      title: "Long-term Support.",
      description: "Ongoing maintenance to keep your store updated and competitive."
    }
  ]
};
const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: REQUIREMENT ANALYSIS",
    title: "Understanding Business Needs",
    description:
      "We clarify objectives, document requirements, and align expectations before execution.",
    features: [
      "Business & Technical Requirement Gathering",
      "Stakeholder Discussions",
      "Initial Design & Roadmap Planning",
    ],
  },
  {
    id: 2,
    phase: "PHASE 2: SOLUTION DESIGN",
    title: "Architecture & UX Planning",
    description:
      "Transform requirements into a scalable, user-focused solution blueprint.",
    features: [
      "System Architecture Design",
      "UI/UX Wireframes & Prototypes",
      "Technology Stack Finalization",
    ],
  },
  {
    id: 3,
    phase: "PHASE 3: DEVELOPMENT & EVALUATION",
    title: "Agile Development & Quality Assurance",
    description:
      "We build, test, and refine the product through iterative development cycles.",
    features: [
      "Frontend & Backend Development",
      "Agile SCRUM with Weekly Reviews",
      "QA Testing & Performance Validation",
    ],
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS SUPPORT",
    title: "Launch, Support & Maintenance",
    description:
      "Ensuring smooth deployment with long-term operational reliability.",
    features: [
      "Production Deployment",
      "SLA-Based L3 & Operational Support",
      "Ongoing Maintenance & Enhancements",
    ],
  },
];

const phaseLabelsDefault = [
  "REQUIREMENT ANALYSIS",
  "SOLUTION DESIGN",
  "DEVELOPMENT & EVALUATION",
  "CONTINUOUS SUPPORT",
];



const title = "Advancing Digital Commerce Evolution";
const subtitle = "";

const introDescription = [
  { text: "Leapsofts enhances businesses with enterprise-level Shopify capabilities.", bold: false },
]

const Shopify: React.FC = () => {
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
        label="STREAMLINE YOUR SUCCESS"
        titleMain="E-commerce "
        titleAccent="Audit"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert E-comm Skills'
        description='Our teams bring deep expertise in Shopify and modern e-commerce architectures.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR SHOPIFY DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default Shopify