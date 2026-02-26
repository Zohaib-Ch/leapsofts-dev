import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import mobileAppImg from "../../assets/phones.webp";
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';

const mobileAppSlides: CapabilitySlide[] = [
  {
    id: 'integrate-mobile-web',
    number: '< 01 >',
    title: 'Integrate Mobile With Web',
    image: capabilitiesImg,
    items: [
      {
        name: 'Seamless Integration',
        description: 'Transform your existing web application into a seamless mobile experience that integrates perfectly with your current platform.'
      },
      {
        name: 'Cross-Platform Compatibility',
        description: 'Consistent user experience across desktop and mobile devices with perfect synchronization.'
      },
      {
        name: 'Synchronized Data',
        description: 'Real-time data synchronization ensures seamless access across all devices.'
      }
    ]
  },
  {
    id: 'ios-android-platforms',
    number: '< 02 >',
    title: 'Build for iOS and Android Platforms',
    image: platformImg,
    items: [
      {
        name: 'Native Development',
        description: 'Native iOS and Android development by expert engineers to get your app to market faster.'
      },
      {
        name: 'Platform-Specific Optimization',
        description: 'Platform-specific optimization using native features for optimal performance and natural user experience.'
      },
      {
        name: 'Faster Time to Market',
        description: 'Reach both iOS and Android users simultaneously with rapid development and deployment.'
      }
    ]
  },
  {
    id: 'streamline-business',
    number: '< 03 >',
    title: 'Streamline Your Business Processes',
    image: capabilitiesImg,
    items: [
      {
        name: 'Remote Work Solutions',
        description: 'Enable remote work and reduce inefficiencies by integrating mobile apps with your internal systems.'
      },
      {
        name: 'Process Automation',
        description: 'Automate routine tasks and workflows to reduce errors and free your team for strategic work.'
      },
      {
        name: 'Cost Efficiency',
        description: 'Improve productivity and cut costs by eliminating redundant processes with mobile solutions.'
      }
    ]
  },
  {
    id: 'standalone-app',
    number: '< 04 >',
    title: 'Create a Stand-Alone Mobile App',
    image: platformImg,
    items: [
      {
        name: 'Mobile-First Solutions',
        description: 'Transform your mobile vision into a customer-focused app, whether you\'re a start-up or established company.'
      },
      {
        name: 'Custom App Development',
        description: 'End-to-end custom mobile app development tailored to your specific business needs and target audience.'
      },
      {
        name: 'Innovation & Execution',
        description: 'Transform innovative ideas into functional, user-friendly mobile applications that drive engagement and business results.'
      }
    ]
  }
]

const emergingTechData: EmergingTechProps['data'] = {
  label: 'INTEGRATION OTHER TECHNOLOGIES',
  titleAccent: 'Emerging Technologies',
  titleMain: 'We Integrate',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Process Automation Solutions',
      description: 'Automate business operations to focus on core competencies and eliminate labor-intensive systems.'
    },
    {
      icon: 'mobile' as const,
      title: 'Multimedia Tools',
      description: 'Video and audio streaming, image processing, social network integration, and monetization features.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Ecommerce Apps',
      description: 'Secure and efficient customer experiences with inventory and payment management solutions.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Social Networking Apps',
      description: 'Seamlessly connect with existing social networking platforms for enhanced user engagement.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Internal Corporate Solutions',
      description: 'Enhance existing ERP systems with mobile solutions that improve efficiency and accountability.'
    },
    {
      icon: 'mobile' as const,
      title: 'Lifestyle & Leisure Apps',
      description: 'Mobile apps that provide access to events, sports, food, travel, and lifestyle activities.'
    },
    {
      icon: 'mobile' as const,
      title: 'News & Information Apps',
      description: 'Personalized news and information experiences with full control over UI and design.'
    },
    {
      icon: 'product' as const,
      title: 'One-of-a-Kind Apps',
      description: 'Custom mobile applications built from the ground up for unique business needs.'
    },
  ]
};
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Mobile App Security',
        description: 'Security is baked in from the start. We implement secure login (OAuth, biometrics), data encryption, role-based access controls, and compliance standards to protect your users and business.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'On-Demand App Solutions',
        description: "We specialize in building on-demand apps for industries like healthcare, e-commerce, and logistics, featuring real-time tracking, dynamic scheduling, and mobile payments that power instant access and convenience."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Wearable and IoT App Development',
        description: "From smartwatches to industrial sensors, we develop mobile apps that connect to wearables and IoT devices for real-time monitoring, automation, and smarter experiences."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Mobile Strategy Session',
        description: "We start with a strategy session to align your business goals, target audience, and technology stack. Whether you need an iOS app, an Android app, or a cross-platform solution, we help define the right approach to maximize user engagement and long-term scalability."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Project Discovery for Mobile Applications',
        description: "We analyze your workflows, customer journeys, and business logic to design cutting-edge mobile app solutions that balance user experience, functionality, and performance from day one."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Custom Mobile App Development',
        description: "Our development team builds tailor-made mobile apps using frameworks like Swift, Kotlin, Flutter, and React Native. From MVPs for startups to enterprise-grade solutions, we prioritize high-quality code, seamless UI/UX design, and speed-to-market."
    },
];
const deliverMVPData = {
    label: "WHY CHOOSE LEAPSOFTS",
    title: "How Can We Deliver Your Mobile App in",
    accentText: "3-5 months?",
    description: "Leapsofts is a custom software development company that offers software products tailored to your unique business objectives. Leveraging our structured end-to-end processes, custom project management tool, agile methodology, and AI integration expertise, we solve complex business challenges, accelerate growth, and consistently deliver mobile apps within 3 to 5 months, on time, every time.",
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

  const title = "Mobile App Development Services";
const subtitle = "";

const introDescription = [
    { text: "At Leapsofts, we specialize in delivering custom mobile app development services that align with your business goals. Whether you're a startup aiming to disrupt the market or an enterprise seeking digital transformation, our end-to-end solutions are designed to provide user-friendly, high-performance mobile experiences across iOS, Android, and cross-platform environments.", bold: false },
]


const MobileAppDevelopment: React.FC = () => {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
      label='BRIEF OVERVIEW'
      titleMain='Ready for the Mobile App?'
      titleAccent='Fast-forward'
      titleEnd='to our solution:'
      description='We create custom mobile apps that help businesses grow, streamline processes, and keep users engaged. From iOS to Android and everything in between, we handle the entire development process.'
      imagePath={mobileAppImg}
      />
      <Capabilities title="Our Mobile App Development Capabilities" slides={mobileAppSlides} />
         <StreamlineSuccess
          label="STREAMLINE YOUR SUCCESS"
          titleMain="Software "
          titleAccent="Strategy"
          titleEnd=" Session"
          description={streamlineDescription}
          imageUrl="/streamline.png"
        />
      <ServiceFeatures
      title='Custom Mobile App Development Services We Provide'
       items={defaultItems} />
      <EmergingTech data={emergingTechData} />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  )
}

export default MobileAppDevelopment