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

export function meta() {
  const title = "Automotive Software Development Services | Leapsofts";
  const description = "Custom automotive software — dealer management, connected vehicle platforms & EV integration. Leapsofts builds next-gen digital solutions for the auto industry.";
  const keywords = "automotive software development, dealer management software, connected vehicle software, EV software development";
  const canonicalUrl = "https://www.leapsofts.com/industries/automotive";

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
      "name": "Automotive Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Automotive & Telematics Software Engineering",
      "description": "Custom automotive software — dealer management, connected vehicle platforms & EV integration."
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
          "name": "Automotive",
          "item": "https://www.leapsofts.com/industries/automotive"
        }
      ]
    }
  ]
};

const Automotive: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Automotive Product Development",
      titleAccent: "Process"
    });
  }, [setProcessTitle]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <CommitmentSection data={commitmentData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Automotive "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={automotiveSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" automotive businesses"
      />
      <RelatedServices
        services={[
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
        ]}
      />
    </>
  );
};

export default Automotive;
