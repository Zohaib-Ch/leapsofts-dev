import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';


import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import phonesImg from '../../assets/phones.webp';

import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
import { useServicePage } from '../../hooks/useServicePage';

const mobileAppSlides: CapabilitySlide[] = [
  {
    id: 'integrate-mobile-web',
    number: '< 01 >',
    title: 'Integrate Mobile With Web',
    image: "/streamline.webp",
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
    image: "/streamline.webp",
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
    image: "/streamline.webp",
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
    image: "/streamline.webp",
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

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('mobile-app-development');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Mobile App Development Services | Leapsofts",
    defaultDescription: "iOS & Android mobile app development for enterprises & startups. Leapsofts builds high-performance, scalable mobile apps with clean UX. Get a free estimate.",
    defaultKeywords: "mobile app development company, iOS app development, Android app development, custom mobile application development",
    canonicalUrl: "https://www.leapsofts.com/services/mobile-app-development",
  });
}



const MobileAppDevelopment: React.FC = () => {
  const { data } = useServicePage('mobile-app-development');

  const schemaData = buildServiceSchema({
    name: "Mobile App Development Services",
    description: "iOS & Android mobile app development for enterprises & startups.",
    canonicalUrl: "https://www.leapsofts.com/services/mobile-app-development",
    faqs: data?.faqs,
  });


  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || 'MOBILE APP DEVELOPMENT COMPANY',
        titleMain: data.serviceOverview.titleMain || 'High-Performance Enterprise',
        titleAccent: data.serviceOverview.titleAccent || 'iOS & Android',
        titleEnd: data.serviceOverview.titleEnd || 'Mobile Applications',
        description: data.serviceOverview.description || 'At Leapsofts, as a full-service mobile app development company, we design and engineer custom mobile applications that bridge corporate cloud backends, real-time databases, and device sensors. By managing full-cycle app development—from Swift and Kotlin native coding to React Native and Flutter cross-platform frameworks, offline-first data sync, and automated App Store releases—we deliver secure, responsive mobile solutions that drive user retention.',
        imagePath: data.serviceOverview.imageUrl || "/streamline.webp"
      }
    : null;

  const activeCapabilitiesSlides = (data?.capabilitiesSection?.slides && data.capabilitiesSection.slides.length > 0)
    ? data.capabilitiesSection.slides.map(slide => ({
        id: slide.id || 'slide',
        number: slide.number || '< 01 >',
        title: slide.title || '',
        image: slide.imageUrl || "/streamline.webp",
        items: slide.items || []
      }))
    : mobileAppSlides;

  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || '',
        titleMain: data.infoGrid.titleMain,
        titleAccent: data.infoGrid.titleAccent,
        title: data.infoGrid.title || (data.infoGrid.titleMain || data.infoGrid.titleAccent ? undefined : ''),
        description: data.infoGrid.description || '',
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : null;

  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || emergingTechData.label,
        titleAccent: data.emergingTech.titleAccent || emergingTechData.titleAccent,
        titleMain: data.emergingTech.titleMain || emergingTechData.titleMain,
        description: data.emergingTech.description || emergingTechData.description,
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : emergingTechData;

  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || deliverMVPData.label,
        title: data.deliverMVP.title || deliverMVPData.title,
        accentText: data.deliverMVP.accentText || deliverMVPData.accentText,
        description: data.deliverMVP.description || deliverMVPData.description,
        items: data.deliverMVP.items || deliverMVPData.items
      }
    : deliverMVPData;

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
  const activeServiceFeaturesItems: ServiceFeatureItem[] = (data?.serviceFeatures?.items && data.serviceFeatures.items.length > 0)
    ? data.serviceFeatures.items.map(item => ({
        icon: item.icon || '/industryicons/sphere.svg',
        title: item.title,
        description: item.description
      }))
    : defaultItems;



  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      {activeOverviewData && activeOverviewData.description && (
        <ServiceOverview
          label={activeOverviewData?.label || 'MOBILE APP DEVELOPMENT COMPANY'}
          titleMain={activeOverviewData?.titleMain || 'High-Performance Enterprise'}
          titleAccent={activeOverviewData?.titleAccent || 'iOS & Android'}
          titleEnd={activeOverviewData?.titleEnd || 'Mobile Applications'}
          description={activeOverviewData?.description || 'At Leapsofts, as a full-service mobile app development company, we design and engineer custom mobile applications that bridge corporate cloud backends, real-time databases, and device sensors. By managing full-cycle app development—from Swift and Kotlin native coding to React Native and Flutter cross-platform frameworks, offline-first data sync, and automated App Store releases—we deliver secure, responsive mobile solutions that drive user retention.'}
          imagePath={activeOverviewData?.imagePath || phonesImg}
        />
      )}
      {activeCapabilitiesSlides && activeCapabilitiesSlides.length > 0 && (
        <Capabilities
          title={data?.capabilitiesSection?.title || "Our Mobile App Development Capabilities"}
          slides={activeCapabilitiesSlides}
          defaultImage={phonesImg}
        />
      )}
      {activeInfoGridData && activeInfoGridData.items && activeInfoGridData.items.length > 0 && (
        <InfoGrid data={activeInfoGridData} />
      )}
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Map your "}
        titleAccent={data?.strategyCTA?.titleAccent || "mobile"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        imageUrl={data?.strategyCTA?.imageUrl || phonesImg}
      />
      {data?.comparisonTable && (
        <ComparisonTable data={data.comparisonTable} />
      )}
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'Custom Mobile App Development Services We Provide'}
        items={activeServiceFeaturesItems}
      />
      {activeEmergingTechData && activeEmergingTechData.items && activeEmergingTechData.items.length > 0 && (
        <EmergingTech data={activeEmergingTechData} />
      )}
      {activeDeliverMVPData && activeDeliverMVPData.items && activeDeliverMVPData.items.length > 0 && (
        <DeliverMVP data={activeDeliverMVPData} />
      )}
      {activeProcessPhases && activeProcessPhases.length > 0 && (
        <Processes title={data?.processes?.title || "OUR CUSTOM MOBILE DEVELOPMENT PROCESS"} processPhases={activeProcessPhases} phaseLabels={activePhaseLabels} />
      )}
      <FAQs title="Mobile App Development FAQ" subtitle="Everything you need to know about our iOS, Android, Flutter/React Native, and Store submission services." faqs={data?.faqs} items={data?.faqs} />
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