import IntroComponent from "../../components/IntroComponent/IntroComponent"
import Capabilities, { type CapabilitySlide } from "../../components/Capabilities/Capabilities";
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'function',
    number: '< 01 >',
    title: 'Function-Based Capabilities',
    image: capabilitiesImg,
    items: [
      {
        name: 'We understand your business',
        description: 'We understand how important software stability is to your business. Our goal is to make your program as stable as possible for long-term success.'
      },
      {
        name: 'Fast and Effective Responses',
        description: '24/7 support from our worldwide team of qualified staff. Count on us to respond quickly and effectively to any problem.'
      },
      {
        name: 'Established & Proven Procedures',
        description: 'Our experts ensure your application functions properly while providing you with a superior customer experience.'
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
        name: 'Customer-Friendly Expertise',
        description: 'Our experts ensure your application functions properly while providing you with a superior customer experience that sets us apart.'
      },
    ]
  },
];

const comparisonData = {
  label: 'VALUE FOR THE CLIENT',
  titleAccent: 'Custom App Development',
  titleMain: 'vs. Off-The-Shelf Solution',
  description: 'Choosing custom application development over off-the-shelf software provides numerous benefits:',
  headers: {
    feature: 'Feature',
    custom: 'Custom Software',
    offTheShelf: 'Off-the-Shelf Software'
  },
  items: [
    {
      feature: 'Tailored Functionality',
      custom: 'Designed to meet specific business needs',
      offTheShelf: 'Generic features for a broad audience'
    },
    {
      feature: 'Scalability',
      custom: 'Easily adaptable to business growth',
      offTheShelf: 'Limited scalability options'
    },
    {
      feature: 'Integration',
      custom: 'Seamless integration with existing systems',
      offTheShelf: 'Potential compatibility issues'
    },
    {
      feature: 'Cost Efficiency',
      custom: 'Long-term savings with no licensing fees',
      offTheShelf: 'Ongoing licensing and upgrade costs'
    },
    {
      feature: 'Competitive Advantage',
      custom: 'Unique solutions providing market edge',
      offTheShelf: 'Limited differentiation'
    }
  ]
};
const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: INITIAL ASSESSMENT & IDEATION",
    title: "Discovery & Planning",
    description:
      "We dive deep into understanding your business needs, goals, and challenges.",
    features: [
      {
        title: "Business & Workflow Analysis",
        description:
          "Identify strategic goals, requirements, challenges, and operational gaps to set a clear vision and scope.",
      },
      {
        title: "Market Research & Analysis",
        description:
          "Market and competitive analysis to inform decisions—trends, customer behavior, and regulatory factors.",
      },
      {
        title: "Project Scope Definition",
        description:
          "Clear scope, methodology, deliverables, timeline, and cost for a structured execution roadmap.",
      },
    ],
  },
  {
    id: 2,
    phase: "PHASE 2: DISCOVERY",
    title: "Research & Strategy",
    description:
      "Comprehensive analysis to define the perfect solution architecture.",
    features: [
      {
        title: "Software Requirements Specification (SRS)",
        description:
          "Functional and non-functional specs: performance, security, scalability, reliability, and compliance.",
      },
      {
        title: "Technical Architecture",
        description:
          "Secure, scalable infrastructure with defined security controls and integration plans.",
      },
      {
        title: "Risk Assessment",
        description:
          "Identify risks and operational challenges; define proactive mitigation and continuity plans.",
      },
    ],
  },
  {
    id: 3,
    phase: "PHASE 3: ENGINEERING",
    title: "Agile or Fixed-Cost Custom Software Development",
    description:
      "Building your solution with cutting-edge technologies and best practices.",
    features: [
      {
        title: "Dedicated Team",
        description:
          "Full lifecycle delivery via SCRUM and Kanban—incremental, transparent, and on time.",
      },
      {
        title: "Business-Oriented Approach",
        description:
          "Full-cycle development focused on measurable business outcomes and strategic alignment.",
      },
      {
        title: "Communication & Value-Driven Collaboration",
        description:
          "Ongoing engagement, transparency, and alignment so stakeholders stay informed and decisions move fast.",
      },
    ],
  },
  {
    id: 4,
    phase: "PHASE 4: TRAINING & SUPPORT",
    title: "Launch & Continuous Support",
    description:
      "Seamless deployment and ongoing maintenance for your success.",
    features: [
      {
        title: "Seamless Integration",
        description:
          "Connect new apps with existing systems for smooth data flow and minimal disruption.",
      },
      {
        title: "Deployment & Testing",
        description:
          "Rigorous testing and structured deployment for a stable, risk-free launch.",
      },
      {
        title: "User Training & Adoption",
        description:
          "Training so your teams use the software effectively and boost productivity.",
      },
      {
        title: "Ongoing Support & System Evolution",
        description:
          "Continuous enhancements to match changing needs and keep long-term value.",
      },
    ],
  },
];

const phaseLabelsDefault = [
  "INITIAL ASSESSMENT & IDEATION",
  "DISCOVERY",
  "ENGINEERING",
  "TRAINING & SUPPORT",
];

const deliverMVPData = {
  label: "WHY CHOOSE LEAPSOFTS",
  title: "How Can We Deliver Your Mobile App in",
  accentText: "3-5 months?",
  description: "Leapsofts is a custom software development company that offers software products tailored to your unique business objectives. Leveraging our structured end-to-end processes, custom project management tool, agile methodology, and AI integration expertise, we solve complex business challenges, accelerate growth, and consistently deliver MVPs within 3 to 5 months, on time, every time.",
  items: [
    {
      title: "Proven Methodologies & Processes.",
      description: "We follow agile workflows, CI/CD pipelines, and DevOps practices to accelerate delivery while maintaining top-tier quality and compliance."
    },
    {
      title: "Client-First Approach.",
      description: "From discovery to post-launch support, we collaborate with your team and stakeholders to build solutions aligned with your specific needs and business workflows."
    },
    {
      title: "Transparent Pricing Models.",
      description: "Whether it's fixed-scope development or continuous product engineering, we provide clarity, flexibility, and no hidden costs."
    },
    {
      title: "Healthcare Software Expertise.",
      description: "With years of experience building healthcare applications, we understand the nuances of EMRs, patient engagement, HIPAA compliance, and third-party integrations."
    }
  ]
};
const streamlineDescription = [
  { text: "Whether you're modernizing an ", bold: false },
  { text: "existing enterprise software system ", bold: true },
  { text: "or launching a ", bold: false },
  { text: "new digital product", bold: true },
  { text: ", Leapsofts offers a ", bold: false },
  { text: "complimentary software strategy session ", bold: true },
  { text: "designed to deliver value almost immediately. We take the time to understand your business objectives, technical landscape, and operational challenges then provide actionable insights on how ", bold: false },
  { text: "bespoke, cost-effective custom software solutions ", bold: true },
  { text: "can streamline workflows, improve efficiency, and support scalable growth.", bold: false },
];
const title = "Bring Your Business Dreams to Life with Our Custom Application Development Services";
const subtitle = "";

const introDescription = [
    { text: "From the straightforward to the never-before-seen, we have substantial experience in delivering high-quality, scalable, and AI-powered custom application development services tailored to the specific business needs of our clients. Our solutions leverage cutting-edge technologies like machine learning, natural language processing (NLP), and automation to streamline workflows, enhance decision-making, and drive business growth.", bold: false },
]

function CustomSoftwareDevelopment() {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <Capabilities
        title="Our Key Capabilities"
        description="We offer end-to-end custom application development services across various platforms and business functions."
        slides={capabilitiesSlides}
        defaultImage={capabilitiesImg}
      />
      <ComparisonTable data={comparisonData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Software "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default CustomSoftwareDevelopment