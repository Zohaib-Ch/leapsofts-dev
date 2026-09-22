import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import laptopImg from "../../assets/about_laptop_3d.png";

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE POD STRATEGY & DISCOVERY",
    title: "Resource Audits & Team Structure Scoping",
    description: "We align key product goals with technical resources by scoping scope constraints, language specs, and senior positions.",
    features: [
      {
        title: "Staff Deficit Discovery Scans",
        description:
          "Audit active pipeline targets and existing staff levels to map critical talent constraints."
      },
      {
        title: "Pod Seniority Matrix Profiling",
        description:
          "Define precise technical profiles (backend language fluencies, React experience scales, and system security credentials)."
      },
      {
        title: "Agile Pod Blueprint Delivery",
        description:
          "Draft initial team sizes, sprint delivery speeds, budget forecasts, and sandbox onboarding blueprints."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: POD ONBOARDING & PIPELINE SYNCHRONIZATION",
    title: "Structured Transition & Communication Setups",
    description: "Seamless synchronization of developer pods with your repository rules, daily tasks, and shared workspaces.",
    features: [
      {
        title: "System Architecture Deep-Dives",
        description:
          "Review historical codebases, data mapping rules, API connections, and documentation structures."
      },
      {
        title: "Development Sandboxes Provisioning",
        description:
          "Configure secure local instances, developer Git directory permissions, and credential access keys."
      },
      {
        title: "Daily Scrum Stand-Ups Sync",
        description:
          "Define communication boundaries inside Slack/Teams and establish daily stand-up meeting guidelines."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SPRINT DEVELOPMENT",
    title: "Agile Feature Construction & Continuous QA Gates",
    description: "Our developers function natively inside your sprints, creating secure code and verifying visual criteria.",
    features: [
      {
        title: "Sprint-Based Coding Cycles",
        description:
          "Code modular UI components, optimize database queries, and author clean, robust branch pull-requests."
      },
      {
        title: "Continuous Automated Testing Gates",
        description:
          "Run static analysis checks via SonarQube and verify front-end components using Playwright browser scripts."
      },
      {
        title: "CI/CD Staging Deliveries",
        description:
          "Trigger automated build releases directly to staging environments for quick visual validation by stakeholders."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CAPACITY EVOLUTION & LONG-TERM SUPPORT",
    title: "Elastic Pod Adjustments & Telemetry Audits",
    description: "Ongoing developer scaling, performance metric scans, and server maintenance sweeps.",
    features: [
      {
        title: "Elastic Team Scaling Adjustments",
        description:
          "Dynamically scale active pod allocations to align with commercial launch waves and feature priority changes."
      },
      {
        title: "Scrum Velocity Telemetry Audits",
        description:
          "Monitor daily burn-down charts, code delivery metrics, and overall process qualities."
      },
      {
        title: "Continuous Platform Maintenance",
        description:
          "Provide regular security reviews, operating systems upgrades, and database performance tuning sweeps."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "TEAM ONBOARDING",
  "SPRINT CODING & QA",
  "CAPACITY EVOLUTION",
];

const serviceOverviewData = {
  label: "DEDICATED TEAMS",
  titleMain: "Scaling Your",
  titleAccent: "Enterprise",
  titleEnd: "Thruput",
  description: "At Leapsofts, we specialize in curating and managing dedicated engineering teams designed to accelerate product development cycles and tackle complex architecture milestones. By hand-picking senior backend developers, frontend React specialists, and certified DevOps engineers who align with your tech stack, we construct highly cohesive agile pods that work natively inside your Jira boards, Slack channels, and code repositories with complete operational alignment.",
  imagePath: laptopImg
};

const capabilitiesData: CapabilitySlide[] = [
  {
    id: '1',
    number: '01',
    title: 'Full-Stack Development',
    items: [
      { name: 'React & Next.js Interface Engineering', description: 'Developing high-fidelity, fluid layouts utilizing React, Next.js, and advanced CSS frameworks, optimized for Core Web Vitals.' },
      { name: 'High-Concurrency Backend Abstractions', description: 'Engineering resilient backend services using Node.js, Go, or Python with secure PostgreSQL or Redis datastores.' },
      { name: 'Automated DevOps & Multi-Stage Pipelines', description: 'Constructing Docker-based release environments and automated GitHub Actions CI/CD to accelerate releases safely.' }
    ],
    image: capabilitiesImg
  },
  {
    id: '2',
    number: '02',
    title: 'Specialized Engineering',
    items: [
      { name: 'Applied Machine Learning Pipelines', description: 'Deploying custom PyTorch models, text embeddings, and vector database indexing directly into active software structures.' },
      { name: 'Continuous Vulnerability Auditing', description: 'Enforcing strict Zero-Trust directory configurations, static code scans (SAST), and compliance shielding.' },
      { name: 'Scale Infrastructure & Serverless', description: 'Configuring auto-scaling cloud clusters, serverless API routers, and secure multi-region databases on AWS or Azure.' }
    ],
    image: platformImg
  }
];

const infoGridData: InfoGridProps['data'] = {
  label: 'BENEFITS',
  title: 'Why Choose Dedicated Teams Now',
  items: [
    {
      icon: '01',
      title: 'Rapid 14-Day Team Onboarding',
      description: 'Assemble customized engineering squads and start active coding within two weeks with pre-vetted specialists.'
    },
    {
      icon: '02',
      title: 'Top-Tier Senior Talent Pool',
      description: 'Gain access to senior programmers and technical leads holding advanced industry certifications.'
    },
    {
      icon: '03',
      title: 'Native Code & Tools Integration',
      description: 'Our engineers fit natively inside your daily Scrum processes, Git branches, and communication portals.'
    },
    {
      icon: '04',
      title: 'Optimized Resource Efficiency',
      description: 'Substantially reduce recruitment fees, employee training costs, and database overheads.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new custom product architecture", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current developer footprints, map out active resource bottlenecks, evaluate tech stack profiles, and formulate a ", bold: false },
  { text: "highly efficient, customized team scaling plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline agile velocity.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Project Management',
    description: 'Deploying dedicated Scrum Masters to optimize sprint velocities and coordinate stand-up check-ins.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Quality Engineering',
    description: 'Integrating QA automation specialists to run Playwright E2E browser tests and unit checks.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Product Strategy',
    description: 'Collaborating with product owners to convert commercial goals into clear technical task backlogs.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Continuous Support',
    description: 'Delivering around-the-clock maintenance, bug resolution tasks, and regular software performance reviews.'
  }
];

const deliverMVPData = {
  label: "TEAM EXCELLENCE",
  title: "Our Commitment to Deliver Your Technical Launch in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite custom dedicated teams and agile staffing partner. By combining fully integrated CI/CD, certified Scrum Masters, and dedicated engineering pods, we launch and deploy highly stable software products within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Crystal-Clear Communication.",
      description: "Conducting daily stand-up check-ins, dynamic sprint reviews, and writing complete technical document logs."
    },
    {
      title: "Tailored Team Structure.",
      description: "Hand-picking dedicated developers whose technical backgrounds precisely match your target architecture guidelines."
    },
    {
      title: "Agile Adaptability.",
      description: "Leveraging iterative sprint cycles and continuous testing steps to enable quick features pivots."
    },
    {
      title: "Long-Term Partnership.",
      description: "Providing continuous support, capacity scaling adjustments, and ongoing strategic technology consulting."
    }
  ]
};

const title = "Elite Dedicated Engineering Teams & Elastic Agile Pods";
const subtitle = "";

const introDescription = [
  { text: "Hire ", bold: false },
  { text: "dedicated software development teams ", bold: true },
  { text: "and elastic engineering pods embedded directly in your workflows. As a premier provider of ", bold: false },
  { text: "IT staff augmentation services", bold: true },
  { text: ", we deploy senior software architects, full-stack developers, and certified Scrum Masters ready to scale your product velocity with zero onboarding friction.", bold: false }
];

export function meta() {
  const title = "Dedicated Development Teams | Leapsofts";
  const description = "Hire dedicated software development teams from Leapsofts. Scale your engineering capacity with senior developers embedded in your workflows. Start today.";
  const keywords = "dedicated development team, hire dedicated developers, staff augmentation services, offshore development team";
  const canonicalUrl = "https://www.leapsofts.com/services/dedicated-teams";

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
      "name": "Dedicated Development Teams",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Dedicated Software Engineering Teams",
      "description": "Hire dedicated software development teams from Leapsofts. Scale your engineering capacity."
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
          "name": "Dedicated Teams",
          "item": "https://www.leapsofts.com/services/dedicated-teams"
        }
      ]
    }
  ]
};

const DedicatedTeams: React.FC = () => {
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
      <Capabilities
        title="Dedicated Team Capabilities"
        slides={capabilitiesData}
        defaultImage={capabilitiesImg}
      />
      <InfoGrid data={infoGridData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="dedicated team"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Expert Engineering Pods'
        description='Our dedicated teams offer a full spectrum of engineering and management services to support your product lifecycle.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR CUSTOM DEDICATED TEAMS PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Fixed Price Development Model",
            description: "On-budget, milestone-driven software execution model for clearly defined product specifications.",
            link: "/services/fixed-price"
          },
          {
            title: "Custom Software Development",
            description: "Full-cycle enterprise software engineering, bespoke applications, and legacy platform modernization.",
            link: "/services/custom-software-development"
          },
          {
            title: "Quality Assurance & Testing Teams",
            description: "Dedicated manual and automated QA squads to ensure zero-defect software releases.",
            link: "/services/quality-assurance"
          }
        ]}
      />
    </>
  );
};

export default DedicatedTeams;
