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
import RelatedServices from '../../components/RelatedServices/RelatedServices';

const mobileAppSlides: CapabilitySlide[] = [
  {
    id: 'integrate-mobile-web',
    number: '< 01 >',
    title: 'Integrate Mobile With Web',
    image: capabilitiesImg,
    items: [
      {
        name: 'Multi-Platform Schema Integration',
        description: 'Migrate and scale your current web system into a responsive mobile layout. We design secure RESTful and GraphQL API bridges to sync multi-platform database transactions instantaneously.'
      },
      {
        name: 'Unified Multi-Device Performance',
        description: 'Deliver an absolute visual and functional identity across all viewports. Our platforms support fluid state updates and shared component libraries, ensuring seamless data parity.'
      },
      {
        name: 'Offline-First Real-Time Synchronization',
        description: 'We design offline-first architectures utilizing localized SQL databases (SQLite/Room) and automatic cloud sync managers to protect data transactions during network interruptions.'
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
        name: 'Native iOS & Android Engineering',
        description: 'Leverage native language execution with Swift (iOS) and Kotlin (Android) to optimize thread concurrency, maximize memory efficiency, and access complete system resources.'
      },
      {
        name: 'Device Resource Optimization',
        description: 'Accelerate app responsiveness by exploiting hardware-accelerated layouts, biometric security controls (FaceID/TouchID), push notifications, and local core Bluetooth APIs.'
      },
      {
        name: 'Optimized Cross-Platform Frameworks',
        description: 'Reach multi-region markets simultaneously by leveraging high-performance hybrid setups using Flutter and React Native, utilizing shared code logic without native compromises.'
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
        name: 'Remote Asset & Workforce Orchestration',
        description: 'Bridge your internal ERP, CRM, and asset databases with field-ready mobile interfaces that support real-time resource allocations and remote task audits.'
      },
      {
        name: 'Process Automation & Edge Tasks',
        description: 'Automate standard administrative tasks, report distributions, and inventory checks at the mobile edge, eliminating system bottlenecks and reducing operational costs.'
      },
      {
        name: 'Operational Total Cost of Ownership (TCO) Reduction',
        description: 'Improve field-agent workflows, minimize paper systems, and eliminate data errors by capturing records directly into structured backends via mobile device scanners.'
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
        name: 'User Centric Product Design',
        description: 'Translate your brand strategy into high-impact, mobile-first designs. We optimize layouts, touch target dimensions, and state transitions to capture high retention.'
      },
      {
        name: 'Bespoke Architecture & SDLC Governance',
        description: 'Every standalone app is engineered under strict Software Development Life Cycle (SDLC) models, with automated security updates, automated unit test sets, and regression protection.'
      },
      {
        name: 'Continuous App Lifecycle Evolution',
        description: 'Ensure your standalone app remains functional through continuous OS version patches, performance profiling, database compression checks, and prompt Store optimizations.'
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
      description: 'Automating complex workflow transactions, inventory logging, and backend integrations to streamline enterprise systems.'
    },
    {
      icon: 'mobile' as const,
      title: 'Advanced Multimedia & Data Streaming',
      description: 'Implementing low-latency HLS video/audio streaming protocols, camera-based barcode scanning, and multi-threaded background synchronization.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Highly Secure E-Commerce & Transaction Systems',
      description: 'Building premium transactional mobile systems with integrated Stripe, Apple Pay, and Google Pay systems, protected by local biometric keychains.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Social Integration & Push Notification Topologies',
      description: 'Designing robust event-driven notification systems using Firebase (FCM) and APNS to manage high-volume push messaging.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Mobile ERP & Legacy System Integration',
      description: 'Deploying custom mobile gateways that connect on-premise relational databases, secure VPN networks, and legacy CRM architectures.'
    },
    {
      icon: 'mobile' as const,
      title: 'Hardware Integration & Bluetooth Connectivity',
      description: 'Leveraging local Bluetooth Low Energy (BLE) APIs, GPS location tracking, and mobile sensor metrics to create high-impact utility solutions.'
    },
    {
      icon: 'mobile' as const,
      title: 'Offline-Capable Content Caching Engines',
      description: 'Designing intelligent local databases (Realm/SQLite) that cache content structures for immediate offline reading and minimal network overhead.'
    },
    {
      icon: 'product' as const,
      title: 'Bespoke Custom Mobile Architectures',
      description: 'Engineering highly specialized mobile platforms tailored from the ground up to solve complex industrial and scientific business objectives.'
    },
  ]
};

const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Mobile App Security',
        description: 'Security is baked in from the start. We implement secure login (OAuth, biometrics), data encryption (AES-256), role-based access controls, and compliance standards (HIPAA, GDPR) to protect your users and business.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'On-Demand App Solutions',
        description: "We specialize in building on-demand apps for industries like healthcare, e-commerce, and logistics, featuring real-time tracking, dynamic scheduling, and mobile payments that power instant access."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Wearable and IoT App Development',
        description: "From smartwatches to industrial sensors, we develop mobile apps that connect to wearables and IoT devices via CoreBluetooth, local WiFi, or serial protocols for real-time monitoring and edge analytics."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Mobile Strategy Session',
        description: "We start with a strategy session to align your business goals, target audience, and technology stack. Whether you need native iOS, Android, or cross-platform Flutter/React Native, we map out database requirements and store submission risks."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Project Discovery for Mobile Applications',
        description: "We analyze your workflows, customer journeys, and business logic to design mobile-first solutions, producing technical wireframes, compliance targets, and API mock frameworks."
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Custom Mobile App Development',
        description: "Our development team builds custom mobile apps using frameworks like Swift, Kotlin, Flutter, and React Native. From MVPs for startups to enterprise systems, we prioritize modular components and automated App Store delivery."
    },
];

const deliverMVPData = {
    label: "MOBILE APPLICATION ENGINEERING EXCELLENCE",
    title: "Deploy Your Custom iOS & Android Mobile App in",
    accentText: "3-5 months",
    description: "Leapsofts is a top-rated custom mobile app development company. Utilizing automated Fastlane release pipelines, modular native Swift/Kotlin frameworks, and dedicated agile pods, we build and deploy enterprise mobile apps within 3 to 5 months.",
    items: [
        {
            title: "Agile Development Squads.",
            description: "Leveraging bi-weekly sprint deliverables and transparent Kanban dashboards for total project execution visibility."
        },
        {
            title: "Bank-Grade Mobile Security.",
            description: "Implementing AES-256 data encryption, biometric authentication (FaceID/TouchID), OAuth2 tokens, and secure iOS/Android keychains."
        },
        {
            title: "UX/UI Touch Optimization.",
            description: "Designing responsive touch targets, dark mode interfaces, and fluid 60fps animations for flawless mobile user navigation."
        },
        {
            title: "App Store & Play Store Approval.",
            description: "Managing complete Apple App Store and Google Play Store review lifecycles, Store guidelines compliance, and post-launch updates."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: MOBILE HARDWARE INTEGRATION & DEVICE MAPPING",
    title: "Mobile Hardware & Gesture Design",
    description:
      "We scope native hardware features, touch gestures, and design low-latency API connections built for mobile screens.",
    features: [
      {
        title: "Native Capability Scoping",
        description:
          "Define device integrations including Bluetooth BLE registers, localized GPS boundaries, and biometric (FaceID) controls."
      },
      {
        title: "Mobile Touch Grid Wireframing",
        description:
          "Design intuitive interfaces optimized for thumbs, prioritizing proper touch targets and fluid layout gestures."
      },
      {
        title: "API Packet Efficiency Strategy",
        description:
          "Plan REST and GraphQL payloads engineered to minimize cellular data transfers and optimize database queries."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: OFFLINE STORAGE & STORE COMPLIANCE MAPPING",
    title: "Offline Schemas & Push Topologies",
    description:
      "Formulating resilient offline storage, secure notification routing, and store compliance blueprints.",
    features: [
      {
        title: "Offline-First Local Database",
        description:
          "Model high-speed SQLite, Room, or Realm schemas to cache transactions and allow complete offline application usage."
      },
      {
        title: "Push APNS & Firebase Config",
        description:
          "Map secure event-driven push notification structures utilizing Apple APNS and Google FCM routing tokens."
      },
      {
        title: "Store Submission Guidelines Audit",
        description:
          "Verify visual and system attributes against Apple App Store and Google Play guidelines to prevent rejection."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: NATIVE COMPILER & HYBRID FRAMEWORK CODING",
    title: "Native / Cross-Platform Mobile Construction",
    description:
      "Writing optimized application threads, accessing device registers, and sharing alpha releases.",
    features: [
      {
        title: "Swift & Kotlin Native Execution",
        description:
          "Write high-concurrency Swift (iOS) and Kotlin (Android) code or optimized shared hybrid Flutter packages."
      },
      {
        title: "Hardware Layer Programing",
        description:
          "Configure local camera capture, background location metrics, and Bluetooth low energy serial streams."
      },
      {
        title: "Alpha TestFlight Distributions",
        description:
          "Deploy early software builds to client teams using Apple TestFlight, Google Play Beta, or App Center pipelines."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: APP STORE SUBMISSION & CRASH EVOLUTION",
    title: "App Stores Release & Memory Tuning",
    description:
      "Direct store reviews management, real-time runtime monitoring, and swift OS boundary upgrades.",
    features: [
      {
        title: "Store Review Approval Lifecycle",
        description:
          "Package asset bundles, manage target metadata, and coordinate directly with Apple and Google reviewers."
      },
      {
        title: "Real-Time Crashlytics Audits",
        description:
          "Track runtime logs and memory leaks using Firebase Crashlytics to optimize backend scaling."
      },
      {
        title: "OS Compatibility Upgrades",
        description:
          "Deploy immediate framework and native version upgrades to support iOS and Android systems updates."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "HARDWARE MAPPING",
  "OFFLINE SCHEMAS",
  "NATIVE CODING",
  "STORE RELEASES",
];

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new mobile app platform", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out mobile tech stack parameters, evaluate offline storage bounds, and formulate a ", bold: false },
  { text: "highly efficient, native-optimized mobile engineering plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline user retention.", bold: false }
];

const title = "Enterprise Mobile Engineering & Architecture";
const subtitle = "";

const introDescription = [
  { text: "We deliver full-cycle ", bold: false },
  { text: "mobile app development services ", bold: true },
  { text: "and ", bold: false },
  { text: "iOS & Android mobile app engineering ", bold: true },
  { text: "for startups and enterprises worldwide. As a premier mobile app development company, we craft secure native Swift, Kotlin, and cross-platform Flutter/React Native solutions built for maximum performance, engagement, and scalability.", bold: false }
];

export function meta() {
  const title = "Mobile App Development Services | Leapsofts";
  const description = "iOS & Android mobile app development for enterprises & startups. Leapsofts builds high-performance, scalable mobile apps with clean UX. Get a free estimate.";
  const keywords = "mobile app development company, iOS app development, Android app development, custom mobile application development";
  const canonicalUrl = "https://www.leapsofts.com/services/mobile-app-development";

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
      "name": "Mobile App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Mobile Application Development",
      "description": "iOS & Android mobile app development for enterprises & startups."
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
          "name": "Mobile App Development",
          "item": "https://www.leapsofts.com/services/mobile-app-development"
        }
      ]
    }
  ]
};

const MobileAppDevelopment: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
        label='MOBILE APP DEVELOPMENT COMPANY'
        titleMain='High-Performance Enterprise'
        titleAccent='iOS & Android'
        titleEnd='Mobile Applications'
        description='At Leapsofts, as a full-service mobile app development company, we design and engineer custom mobile applications that bridge corporate cloud backends, real-time databases, and device sensors. By managing full-cycle app development—from Swift and Kotlin native coding to React Native and Flutter cross-platform frameworks, offline-first data sync, and automated App Store releases—we deliver secure, responsive mobile solutions that drive user retention.'
        imagePath={mobileAppImg}
      />
      <Capabilities title="Our Mobile App Development Capabilities" slides={mobileAppSlides} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="mobile"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Custom Mobile App Development Services We Provide'
        items={defaultItems}
      />
      <EmergingTech data={emergingTechData} />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR CUSTOM MOBILE DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      <RelatedServices
        services={[
          {
            title: "Web App Development",
            description: "Custom web application development for enterprise SaaS, dynamic portals, and progressive web applications.",
            link: "/services/web-app-development"
          },
          {
            title: "Custom Software Development",
            description: "End-to-end custom software engineering, legacy modernizations, and scalable microservices.",
            link: "/services/custom-software-development"
          },
          {
            title: "Data Science & AI Solutions",
            description: "Integrate machine learning, AI models, and predictive data pipelines into mobile ecosystems.",
            link: "/services/data-science-ai"
          }
        ]}
      />
    </>
  )
}

export default MobileAppDevelopment