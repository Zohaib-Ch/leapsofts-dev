import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
import phoneImg from "../../assets/phones.webp";

const ourServicesData: EmergingTechProps['data'] = {
    label: 'QA SERVICES',
    titleAccent: 'Our',
    titleMain: ' Services',
    description: 'We offer a comprehensive suite of quality assurance services designed to identify issues early and ensure your software meets the highest standards of performance and security.',
    items: [
        {
            icon: 'product' as const,
            title: "Comprehensive Functional & Regression Audits",
            description: "Validating UI elements, state transitions, and core user actions against technical specifications using automated and structured manual testing."
        },
        {
            icon: 'product' as const,
            title: "Non-Functional & Security Vulnerability Scanning",
            description: "Analyzing API response times, memory leak thresholds, and cross-site scripting (XSS) vectors to guarantee system durability."
        },
        {
            icon: 'enterprise' as const,
            title: "Isolated Unit & Component Testing",
            description: "Writing modular, isolated unit tests using Jest, Vitest, or JUnit to verify isolated functions, classes, and logic layers."
        },
        {
            icon: 'enterprise' as const,
            title: "Automated Integration & API Test Suites",
            description: "Testing communication schemas between distributed microservices and database read/write nodes via Postman and custom scripts."
        },
        {
            icon: 'hipaa' as const,
            title: "End-to-End (E2E) Browser Automation",
            description: "Simulating complex, multi-step customer journeys using Playwright and Cypress to identify frontend rendering anomalies."
        },
        {
            icon: 'enterprise' as const,
            title: "User Acceptance Testing (UAT) Governance",
            description: "Formulating structured staging trials and test cases to verify the platform meets user objectives before official deployment."
        },
        {
            icon: 'enterprise' as const,
            title: "Continuous Regression Shielding",
            description: "Integrating automated regression shields into active Git hooks to verify code modifications do not disrupt legacy functions."
        },
        {
            icon: 'hipaa' as const,
            title: "High-Concurrency Stress & Load Audits",
            description: "Leveraging k6 and JMeter to simulate thousands of concurrent user queries, monitoring CPU boundaries and database indexing limits."
        },
        {
            icon: 'hipaa' as const,
            title: "Penetration Testing & SOC2/HIPAA Audits",
            description: "Conducting systematic penetration checks, evaluating OAuth2 keychain protocols, and auditing data encryption standards."
        },
        {
            icon: 'hipaa' as const,
            title: "Accessibility (WCAG) & Usability Audits",
            description: "Evaluating user interface components against Web Content Accessibility Guidelines (WCAG 2.1) to ensure full digital inclusivity."
        }
    ]
};

const processesData: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: TEST SCENARIOS MAPPING & SDLC GOVERNANCE",
    title: "Test Mapping & Environment Scoping",
    description:
      "We scrutinize specifications for functional criteria, establish test parameters, and prepare staging environments.",
    features: [
      {
        title: "Requirement Validation Analysis",
        description:
          "Audit software design documentation and user stories to map unambiguous functional acceptance criteria."
      },
      {
        title: "Test Automation Strategy Planning",
        description:
          "Define the absolute test boundaries, structuring the precise split between automation scripts and human execution."
      },
      {
        title: "Staging Network Configuration",
        description:
          "Setup isolated staging networks, seed mock transactional databases, and configure API response mocks."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: AUTOMATION FRAMEWORK & CRITERIA CONFIG",
    title: "Framework Coding & Static Setup",
    description:
      "Constructing automated E2E browser setups, static checking files, and load stress criteria.",
    features: [
      {
        title: "Core Playwright/Cypress Frameworks",
        description:
          "Write robust automation architectures leveraging page-object models, headless configurations, and reliable locators."
      },
      {
        title: "k6 Distributed Performance Mapping",
        description:
          "Script k6 stress scenarios to execute concurrent requests, mapping CPU targets and database connection bounds."
      },
      {
        title: "Static Lint & SonarQube Controls",
        description:
          "Configure SonarQube dashboards, ESLint rules, and TypeScript compilation conditions to audit code quality."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SCRIPT EXECUTION & STRESS",
    title: "Automated Runs & Destructive Audits",
    description:
      "Executing regression sweeps on CI/CD pipelines, destructive manual tests, and thread leak monitoring.",
    features: [
      {
        title: "Continuous CI/CD Pipeline Runs",
        description:
          "Run automated E2E and component suites automatically on every code commit and pull request."
      },
      {
        title: "Destructive Edge Case Exploits",
        description:
          "Perform intensive manual testing, input injection attempts, and layout boundary checks to break components."
      },
      {
        title: "Distributed Load Simulations",
        description:
          "Simulate sustained concurrent user sessions, tracing API latencies, system memory charts, and connection pools."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: RELEASE SIGN-OFF & DEFECT SHIELDING",
    title: "Metrics Reporting & Live Protection",
    description:
      "Providing detailed test metrics dashboards, git integration shields, and live system monitoring.",
    features: [
      {
        title: "Test Coverage Report Dashboards",
        description:
          "Deliver detailed code coverage logs, open-bug statistics, and release health metrics before launching."
      },
      {
        title: "Continuous Regression Shielding",
        description:
          "Integrate automated regression guards inside codebases to verify new changes do not break legacy parameters."
      },
      {
        title: "Live Production Alert Mappings",
        description:
          "Configure real-time production error triggers to execute rollback scripts if system anomalies exceed bounds."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "TEST MAPPING",
  "FRAMEWORK SETUP",
  "VELOCITY EXECUTION",
  "RELEASE SHIELDS",
];

const infoGridData: InfoGridProps['data'] = {
    label: 'QA BENEFITS',
    title: 'Why Quality Assurance Matters',
    items: [
        {
            icon: '01',
            title: 'Early-Stage Defect Cost Mitigation',
            description: 'Fix software issues early in the design and development sprints to lower overall debugging overhead and accelerate launch speeds.'
        },
        {
            icon: '02',
            title: 'Defect-Free Retention & Experience Parity',
            description: 'Deliver smooth, high-fidelity application sessions across all browsers and screens to foster user trust and improve active retention.'
        },
        {
            icon: '03',
            title: 'Zero-Trust Threat Vector Shielding',
            description: 'Protect high-value customer records and financial ledgers by discovering and patching security vulnerabilities before launch.'
        },
        {
            icon: '04',
            title: 'Sustainable Product Integrity & Trust',
            description: 'Maintain elite product releases that reinforce your enterprise’s market authority and guarantee seamless system performance.'
        }
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new custom automation suite", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out testing parameters, evaluate code coverage criteria, and formulate a ", bold: false },
  { text: "highly efficient, high-coverage validation plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline user retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Automation Testing',
        description: 'Deploying Cypress, Playwright, and Selenium test infrastructure to automate repetitive UI and database validation tasks.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Manual Testing',
        description: 'Rigorous human-led edge case analysis, destructive testing scenarios, and high-fidelity visual layout checks.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Performance Testing',
        description: 'Simulating heavy concurrent loads using k6 to monitor network latency, server memory bounds, and database connection pools.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Security Audits',
        description: 'In-depth scanning for security threats, auditing TLS encryption methods, and checking token verification settings.'
    }
];

const deliverMVPData = {
    label: "QA EXCELLENCE",
    title: "Our Commitment to Deliver Your Verification in",
    accentText: "3-5 months?",
    description: "Leapsofts is an elite custom QA and engineering partner. By combining fully integrated CI/CD, pre-built modular testing templates, and dedicated QA pods, we deliver high-coverage, verified systems within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Zero-Defect Policy Goals.",
            description: "We establish strict quality checks at every level of the pipeline, blocking regression code before it reaches staging."
        },
        {
            title: "Agile Daily SCRUM Integration.",
            description: "Deploying integrated QA testers inside our daily SCRUM pods to review code builds alongside active development."
        },
        {
            title: "Advanced E2E Tooling.",
            description: "Leveraging AI-driven test generators, mock database generators, and headless browser clusters for complete test coverage."
        },
        {
            title: "User-Centric Visual Testing.",
            description: "Auditing mobile responsiveness, localized font layouts, and screen reader compatibility to protect user retention."
        }
    ]
};

const title = "Enterprise Quality Assurance & Test Engineering";
const subtitle = "";

const introDescription = [
  { text: "We deliver full-spectrum ", bold: false },
  { text: "quality assurance services & software testing solutions ", bold: true },
  { text: "engineered to eliminate functional regressions, stress-test database limits, and secure critical software networks. As a premier software testing company, we integrate automated QA testing frameworks and manual security audits directly into your CI/CD pipelines for 100% bug-free deployments.", bold: false }
]

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('quality-assurance');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Quality Assurance Services | Leapsofts",
    defaultDescription: "Comprehensive software QA & testing services to ensure bug-free, high-performance releases. Leapsofts delivers automated and manual testing. Get started.",
    defaultKeywords: "quality assurance services, software testing company, QA testing services, automated testing, manual QA testing",
    canonicalUrl: "https://www.leapsofts.com/services/quality-assurance",
  });
}



const QualityAssurance: React.FC = () => {
  const { data } = useServicePage('quality-assurance');

  const schemaData = buildServiceSchema({
    name: "Quality Assurance Services",
    description: "Comprehensive software QA & testing services to ensure bug-free, high-performance releases.",
    canonicalUrl: "https://www.leapsofts.com/services/quality-assurance",
    faqs: data?.faqs,
  });


  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || "QUALITY ENGINEERING",
        titleMain: data.serviceOverview.titleMain || "Continuous ",
        titleAccent: data.serviceOverview.titleAccent || "Validation & ",
        titleEnd: data.serviceOverview.titleEnd || "Security",
        description: data.serviceOverview.description || "At Leapsofts, we establish strict software validation layers that identify system vulnerabilities and logical errors long before production deployment. By combining automated regression suites, localized API integration mocks, and intensive cloud-native load testing setups, we ensure your applications achieve absolute performance reliability, robust SOC2 compliance, and optimal core web vitals.",
        imagePath: data.serviceOverview.imageUrl || phoneImg
      }
    : null;

  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || infoGridData.label,
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || infoGridData.title,
        description: data.infoGrid.description || infoGridData.description,
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : infoGridData;

  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || ourServicesData.label,
        titleAccent: data.emergingTech.titleAccent || ourServicesData.titleAccent,
        titleMain: data.emergingTech.titleMain || ourServicesData.titleMain,
        description: data.emergingTech.description || ourServicesData.description,
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : ourServicesData;

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
    : (typeof processesData !== 'undefined' ? processesData : []);

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : (typeof phaseLabelsDefault !== 'undefined' ? phaseLabelsDefault : (typeof phaseLabels !== 'undefined' ? phaseLabels : []));

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
            <ServiceOverview
                label={activeOverviewData?.label || "QUALITY ENGINEERING"}
                titleMain={activeOverviewData?.titleMain || "Continuous "}
                titleAccent={activeOverviewData?.titleAccent || "Validation & "}
                titleEnd={activeOverviewData?.titleEnd || "Security"}
                description={activeOverviewData?.description || "At Leapsofts, we establish strict software validation layers that identify system vulnerabilities and logical errors long before production deployment. By combining automated regression suites, localized API integration mocks, and intensive cloud-native load testing setups, we ensure your applications achieve absolute performance reliability, robust SOC2 compliance, and optimal core web vitals."}
                imagePath={activeOverviewData?.imagePath || phoneImg}
            />
            <InfoGrid data={activeInfoGridData} />
            <StreamlineSuccess
                label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
                titleMain={data?.strategyCTA?.titleMain || "Map your "}
                titleAccent={data?.strategyCTA?.titleAccent || "testing"}
                titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
                description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
                buttonText={data?.strategyCTA?.buttonText || "Claim Strategy Session"}
                buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
                imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
            />
            <ServiceFeatures
                title={data?.serviceFeatures?.title || 'Our QA Services'}
                description={data?.serviceFeatures?.description || 'We offer specialized testing services tailored to your project requirements, ensuring robust performance and security.'}
                items={data?.serviceFeatures?.items || serviceFeaturesData}
            />
            <DeliverMVP data={activeDeliverMVPData} />
            <EmergingTech data={activeEmergingTechData} />
            <Processes
                title={data?.processes?.title || "Software Verification & Validation Framework"}
                phaseLabels={activePhaseLabels}
                processPhases={activeProcessPhases}
            />
            <FAQs
                title="Quality Assurance & Software Testing FAQ"
                subtitle="Everything you need to know about automated testing, Playwright/Cypress frameworks, load testing, and continuous regression shielding."
                faqs={data?.faqs} items={data?.faqs}
            />
            <RelatedServices
                services={[
                    {
                        title: "Custom Software Development",
                        description: "Engineer scalable web and mobile software tailored for enterprise workflows.",
                        link: "/services/custom-software-development"
                    },
                    {
                        title: "DevOps Services & CI/CD",
                        description: "Integrate automated testing and security scans into your continuous delivery pipelines.",
                        link: "/services/devops"
                    },
                    {
                        title: "Cyber Security & Compliance",
                        description: "Conduct thorough penetration audits and zero-trust vulnerability assessments.",
                        link: "/services/cyber-security"
                    }
                ]}
            />
        </>
    );
};

export default QualityAssurance;