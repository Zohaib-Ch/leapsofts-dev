import { buildPageMeta, buildIndustrySchema } from '../../utils/seoHelper';
import { useIndustryPage } from '../../hooks/useIndustryPage';
import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection';
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import type { DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO AUTOMOTIVE",
  title: "Driving mobility innovation with intelligent automotive software architectures",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Precision Manufacturing & Assembly',
      description: "Automating factory diagnostic sensors, scheduling machine maintenance repairs based on real-time vibration analytics, and optimizing assembly components to accelerate time-to-market."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Secure Connected V2X Gateways',
      description: "Building robust, low-latency messaging gateways to securely aggregate high-frequency engine metrics, real-time GPS locations, and active driver diagnostic logs using V2X protocols."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'ADAS & Functional Software Safety',
      description: "Writing robust C++ routines complying with rigorous MISRA standards, containerizing firmware deployments, and executing comprehensive simulation runs against sensor pipelines to support autonomous driving."
    }
  ]
};

const automotiveSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Automotive Enterprises',
  description: 'We help automotive companies navigate the transition to electric, autonomous, and connected vehicles with cutting-edge software engineering.',
  items: [
    {
      icon: 'legacy',
      title: 'Supply Chain Digitization',
      description: "Tracing assembly components and optimizing manufacturing warehouse logistics using active RFID tags, barcode scanners, and real-time cloud inventory monitors."
    },
    {
      icon: 'enterprise',
      title: 'Smart Factory Predict AI',
      description: "Collecting structural vibration and temperature metrics from factory machines to trigger scheduled maintenance dispatches before assembly lines encounter downtime."
    },
    {
      icon: 'thirdParty',
      title: 'EV Charging Grid Control',
      description: "Developing scalable telemetry pipelines to balance electrical charging currents, manage charge port authentication grids, and forecast grid load requirements."
    },
    {
      icon: 'saas',
      title: 'High-Telemetry Fleet Tracker',
      description: "Plotting real-time coordinate positions, generating predictive fuel consumption curves, and aggregating cabin cameras telemetry for driver fatigue alert alerts."
    },
    {
      icon: 'product',
      title: 'Bespoke Dealer CRM Hubs',
      description: "Streamlining inventory ordering flows, integrating customer repair schedules with active workshop queues, and managing new car loan pre-approvals."
    },
    {
      icon: 'mobile',
      title: 'Connected Driver Mobiles',
      description: "Configuring cross-platform React Native apps allowing drivers to remotely lock/unlock vehicle cabin doors, start engines, and trace real-time tire pressure readings."
    },
    {
      icon: 'product',
      title: 'Secure OTA Firmware Vaults',
      description: "Architecting double-buffered over-the-air (OTA) firmware delivery tunnels with encrypted hashes to update automotive ECUs securely without brick risks."
    },
    {
      icon: 'enterprise',
      title: 'Connected In-Car Infotainment',
      description: "Developing custom HTML5/Android Automotive infotainment dashboards showing interactive maps, media playback panels, and local weather forecasts."
    }
  ]
};

const automotiveDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR AUTOMOTIVE",
  title: "How We Deliver Your Automotive MVP in",
  accentText: "3-5 months",
  description: "Transitioning to software-defined mobility requires specialized firmware engineering, real-time edge telemetry protocols, and stringent functional safety compliance. Our dedicated automotive engineering pods combine deep domain expertise in CAN-bus communication, ISO 26262 standards, and cloud IoT telemetry to bring connected vehicle platforms and fleet management MVPs to market rapidly without sacrificing safety or reliability.",
  items: [
    {
      title: "CAN-bus, OBD-II & Edge Telemetry Ingestion.",
      description: "We build high-throughput, low-latency edge ingestion gateways with MQTT and Protobuf, capturing sub-second vehicle diagnostics, engine parameters, and GPS coordinate tracking."
    },
    {
      title: "ISO 26262 & Automotive Functional Safety.",
      description: "Our engineering adheres to MISRA C/C++ coding guidelines and ISO 26262 ASIL standards, ensuring bulletproof safety, fault tolerance, and deterministic execution for mission-critical vehicle software."
    },
    {
      title: "EV Battery Management & OCPP Smart Charging.",
      description: "We develop intelligent EV fleet software integrating OCPP 1.6/2.0.1 and ISO 15118 protocols to balance electrical grid loads, automate billing, and extend battery lifecycle health."
    },
    {
      title: "Secure Over-The-Air (OTA) Firmware Vaults.",
      description: "We architect double-buffered, cryptographically signed OTA update pipelines backed by Hardware Security Modules (HSM) to deploy ECU firmware updates securely without brick risks."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you handle CAN-bus and OBD-II telemetry ingestion from diverse vehicle fleets?",
    answer: "We engineer modular edge-to-cloud gateways using MQTT, Protobuf, and WebSockets that ingest high-frequency CAN-bus and OBD-II diagnostics. Our architecture normalizes disparate OEM telemetry standards into a unified data schema for real-time processing and storage."
  },
  {
    question: "How do you ensure cybersecurity and safety compliance (ISO 26262 / UNECE R155/R156)?",
    answer: "We design software in compliance with ISO 26262 functional safety and UNECE R155/R156 cybersecurity regulations. Every firmware delivery channel utilizes hardware security module (HSM) root-of-trust, mTLS encryption, and automated rollback mechanisms for secure Over-The-Air (OTA) updates."
  },
  {
    question: "Can your automotive software integrate with EV charging infrastructure and battery management systems?",
    answer: "Yes. We develop smart EV fleet software integrating OCPP (Open Charge Point Protocol), ISO 15118 (Plug & Charge), and telemetry from Battery Management Systems (BMS) to optimize charging schedules, battery health, and grid load balancing."
  },
  {
    question: "Do you build custom mobile companion apps for connected car drivers and fleet operators?",
    answer: "We build native iOS/Android and cross-platform React Native companion applications featuring remote vehicle control (climate, lock/unlock), digital key authorization (BLE/NFC), live GPS tracking, trip analytics, and charging status monitoring."
  }
];

const streamlineDescription = [
  { text: "Accelerate your ", bold: false },
  { text: "automotive innovation ", bold: true },
  { text: "with a focused approach. Leapsofts offers a ", bold: false },
  { text: "complimentary strategy session ", bold: true },
  { text: "to help you define your ", bold: false },
  { text: "digital roadmap ", bold: true },
  { text: "for the next generation of mobility and connected car solutions.", bold: false },
];

const title = "Automotive Software Development, Connected Car Telematics & V2X IoT Systems";
const subtitle = "";
const introDescription = [
  { text: "We deliver cutting-edge ", bold: false },
  { text: "automotive software development services, dealer management software, and connected vehicle telematics ", bold: true },
  { text: "engineered for auto manufacturers and EV fleet operators. By building real-time V2X messaging gateways, ADAS sensor integrations, and predictive factory IoT portals, we accelerate digital mobility across global supply chains.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('automotive');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Automotive Software Development Services | Leapsofts",
    defaultDescription: "Custom automotive software — dealer management, connected vehicle platforms & EV integration. Leapsofts builds next-gen digital solutions for the auto industry.",
    defaultKeywords: "automotive software development, connected vehicle software company, custom automotive software development, dealer management software development, fleet telematics platform, ev charging software ocpp, can-bus telemetry integration, iso 26262 automotive software, ota firmware update platform, automotive embedded software, connected car app development, dealership inventory software, vehicle diagnostics predictive maintenance",
    canonicalUrl: "https://www.leapsofts.com/industries/automotive",
  });
}

const Automotive: React.FC = () => {
  const { data } = useIndustryPage('automotive');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/automotive";
  const schemaData = buildIndustrySchema({
    name: "Automotive Software Development Services",
    description: "Custom automotive software — fleet management, telematics, connected vehicle platforms.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Automotive & Transportation",
    faqs: activeFaqs,
  });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeCommitmentData: CommitmentSectionProps['data'] = (data?.commitmentSection && data.commitmentSection.items?.length)
    ? {
        subtitle: data.commitmentSection.subtitle || commitmentData.subtitle,
        title: data.commitmentSection.title || commitmentData.title,
        items: data.commitmentSection.items.map((item, idx) => ({
          icon: item.icon || commitmentData.items?.[idx]?.icon || '/industryicons/sphere.svg',
          title: item.title,
          description: item.description
        }))
      }
    : commitmentData;

  const activeSolutionsData = (data?.solutionsSection && data.solutionsSection.items?.length)
    ? {
        label: data.solutionsSection.label || automotiveSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || automotiveSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || automotiveSolutionsData.titleMain,
        description: data.solutionsSection.description || automotiveSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : automotiveSolutionsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || automotiveDeliverMVPData.label,
        title: data.deliverMVP.title || automotiveDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || automotiveDeliverMVPData.accentText,
        description: data.deliverMVP.description || automotiveDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : automotiveDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Automotive Product Development";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
    if (setDeliverMVPData) {
      setDeliverMVPData(activeDeliverMVPData);
    }
  }, [setProcessTitle, setDeliverMVPData, processTitleMain, processTitleAccent, activeDeliverMVPData]);

  const activeRelatedServices = (data?.relatedServices?.items && data.relatedServices.items.length > 0)
    ? data.relatedServices.items
    : [
        {
          title: "Custom Software Development",
          description: "Engineer custom automotive telematics and enterprise IoT management dashboards.",
          link: "/services/custom-software-development"
        },
        {
          title: "Mobile App Development",
          description: "Build connected iOS & Android driver companion mobile applications.",
          link: "/services/mobile-app-development"
        },
        {
          title: "Cloud Engineering & Infrastructure",
          description: "Architect low-latency IoT cloud gateways on AWS & Azure.",
          link: "/services/cloud-engineering"
        }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Future-proof your "}
        titleAccent={data?.strategyCTA?.titleAccent || "Mobility"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Automotive Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " automotive businesses"}
      />
      <FAQs
        title="Automotive & Mobility Engineering FAQ"
        subtitle="Common questions about ISO 26262 compliance, OTA firmware update pipelines, V2X telematics, and dealer management platforms."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Automotive Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Automotive;
