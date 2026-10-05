import { buildPageMeta, buildIndustrySchema } from '../../utils/seoHelper';
import { useIndustryPage } from '../../hooks/useIndustryPage';
import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import FAQs from '../../components/FAQs/FAQs';
import type { DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP';
import { getSanityIndustryBySlug } from '../../sanity/queries';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENTS TO LOGISTICS EXCELLENCE",
  title: "Built for Strategic Scale, Efficiency, and Asset Ownership",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Real-Time Fleet Visibility',
      description: "Integrating high-frequency GPS telematics and vehicle OBD-II metrics tunnels to trace precise transit schedules, driver rest hours, and cargo status from dispatch to delivery."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Resource Capacity Optimization',
      description: "Deploying intelligent load-matching algorithms and multi-warehouse supply chain trackers that ensure full truckloads (FTL) and prevent dry-van empty miles."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Proprietary Technical Advantage',
      description: "Architecting fully bespoke, modular TMS frameworks that remain direct intellectual assets of your logistics enterprise, enabling secure API sharing with brokers."
    }
  ]
};

const transportationSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Logistics-Focused',
  titleMain: ' Digital Solutions',
  description: 'We engineer custom Transportation Management Systems (TMS) that automate processes, improve operational efficiency, and drive global scalability.',
  items: [
    {
      icon: 'legacy',
      title: 'Fleet Telematics & Diagnostics',
      description: "Aggregating vehicle engine diagnostics, tire pressure logs, and predictive mechanical service alerts to schedule garage repairs before breakdowns occur."
    },
    {
      icon: 'enterprise',
      title: 'GPS Coordinate Plotting',
      description: "Plotting high-frequency geographic locations alongside driver rest-hour logs to maintain strict HOS and ELD regulatory safety compliance."
    },
    {
      icon: 'thirdParty',
      title: 'Smart Warehouse Management',
      description: "Automating cross-docking workflows, tracking shelf inventory quantities via barcode scans, and managing inbound carrier shipping reservations."
    },
    {
      icon: 'saas',
      title: 'Carrier & Broker Portals',
      description: "Developing safe dashboards letting broker networks post shipment details, coordinate carrier bidding runs, and upload bills of lading (BOL)."
    },
    {
      icon: 'product',
      title: 'Custom TMS Architectures',
      description: "Structuring scalable, multi-tenant Transportation Management Systems containing modular dispatch boards and pricing engines."
    },
    {
      icon: 'mobile',
      title: 'Live SQL Logistics Metrics',
      description: "Delivering real-time SQL business intelligence reports summarizing cost-per-mile ratios, on-time delivery levels, and driver utilization curves."
    },
    {
      icon: 'product',
      title: 'IoT Cold Chain Telemetry',
      description: "Deploying active Bluetooth temperature and humidity monitors inside cargo holds to preserve sensitive food and pharmaceutical shipments."
    },
    {
      icon: 'enterprise',
      title: 'Carrier Payout Gateways',
      description: "Integrating Stripe payment gateways to automate driver quick-pay disbursements, process invoice financing, and track fuel card balances."
    }
  ]
};

const transportationDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR TRANSPORTATION & LOGISTICS",
  title: "How We Deliver Your Logistics MVP in",
  accentText: "3-5 months",
  description: "Global freight forwarders, 3PL providers, and carrier fleets require real-time vehicle telemetry, algorithmic load-matching, and automated driver dispatching. Our specialized logistics engineering pods build custom Transportation Management Systems (TMS), ELD-compliant driver mobile apps, and IoT tracking platforms in 3 to 5 months to eliminate empty miles and reduce fuel burn.",
  items: [
    {
      title: "Real-Time Fleet Telematics & ELD/HOS Compliance.",
      description: "We integrate electronic logging devices (ELD), OBD-II diagnostic ports, and sub-second GPS tracking to automate Hours of Service (HOS) logs and IFTA fuel tax calculations."
    },
    {
      title: "Algorithmic Load Matching & Route Optimization.",
      description: "We engineer constraint-based routing algorithms (VRP) that factor in traffic conditions, weight limits, delivery time windows, and multi-stop drop-offs to maximize truck capacity."
    },
    {
      title: "IoT Cold-Chain & Environmental Telemetry.",
      description: "We deploy Bluetooth Low Energy (BLE) and cellular IoT sensors inside refrigerated trailers, alerting dispatchers instantly if temperatures breach safe thresholds for pharmaceuticals or perishables."
    },
    {
      title: "Automated Carrier Settlement & Instant Quick-Pay.",
      description: "We build automated rate-con generation, digitized Proof of Delivery (e-POD) scanning, and Stripe/ACH quick-pay disbursements for carriers upon delivery confirmation."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do your logistics platforms ensure FMCSA ELD and Hours of Service (HOS) compliance?",
    answer: "We build direct integrations with certified hardware Electronic Logging Devices (ELD) via Bluetooth and CAN-bus. The platform automatically logs driving hours, rest breaks, and duty status changes in real time, alerting fleet dispatchers to potential HOS violations before they occur."
  },
  {
    question: "Can your custom TMS software optimize multi-stop delivery routes and reduce empty miles?",
    answer: "Yes. We engineer Vehicle Routing Problem (VRP) solvers that dynamically calculate optimal multi-stop routes based on live traffic, delivery appointment windows, bridge weight restrictions, and fuel consumption curves, saving up to 25% in fleet transit costs."
  },
  {
    question: "How do you track temperature-sensitive freight across cold-chain logistics networks?",
    answer: "We deploy cloud-connected IoT sensors that transmit live temperature, humidity, door-open events, and GPS coordinates directly to our telemetry dashboard. Instant SMS and push alerts trigger if refrigerated trailers deviate from safe holding ranges."
  },
  {
    question: "Can your system automate bill of lading (BOL) and proof of delivery (POD) capture?",
    answer: "Yes. Our driver mobile apps feature on-device document scanning, OCR text extraction, digital signature capture (e-POD), and instant PDF upload to automatically generate and send invoices to shippers upon delivery."
  }
];

const streamlineDescription = [
  { text: "Accelerate your ", bold: false },
  { text: "logistics supply chain ", bold: true },
  { text: "with a modern technical infrastructure. Leapsofts offers a ", bold: false },
  { text: "complimentary transportation strategy session ", bold: true },
  { text: "to help you optimize ", bold: false },
  { text: "fleet management and route efficiency.", bold: true },
];

const title = "Transportation Software Development Services & Custom TMS Solutions";
const subtitle = "";
const introDescription = [
  { text: "We engineer enterprise-grade ", bold: false },
  { text: "transportation software development, fleet management systems, and logistics software solutions ", bold: true },
  { text: "designed to streamline global supply chains. By deploying automated dispatch engines, IoT cold-chain telemetry, and route optimization algorithms, we empower shipping and freight companies to lower transit overheads.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('transportation');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Transportation Software Development & Logistics Solutions | Leapsofts",
    defaultDescription: "Leapsofts engineers custom transportation software, fleet telematics platforms, custom TMS solutions, IoT cold-chain tracking, and automated carrier payout gateways.",
    defaultKeywords: "transportation software development, logistics software development company, custom tms software development, fleet telematics management software, fmcsa eld compliance software, freight broker dispatch software, gps tracking logistics mobile app, vehicle routing optimization algorithm, cold chain iot temperature monitoring, cross dock warehouse management, carrier payout billing automation, supply chain visibility platform",
    canonicalUrl: "https://www.leapsofts.com/industries/transportation",
  });
}

const Transportation: React.FC = () => {
  const { data } = useIndustryPage('transportation');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/transportation";
  const schemaData = buildIndustrySchema({
    name: "Transportation & Logistics Software Development Services",
    description: "Custom logistics software — route optimization, fleet tracking, supply chain, and freight management.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Transportation & Logistics",
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
        label: data.solutionsSection.label || transportationSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || transportationSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || transportationSolutionsData.titleMain,
        description: data.solutionsSection.description || transportationSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : transportationSolutionsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || transportationDeliverMVPData.label,
        title: data.deliverMVP.title || transportationDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || transportationDeliverMVPData.accentText,
        description: data.deliverMVP.description || transportationDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : transportationDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Logistics Software Engineering";
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
          description: "Build custom Transportation Management Systems (TMS) and dispatch boards.",
          link: "/services/custom-software-development"
        },
        {
          title: "Mobile App Development",
          description: "Engineer native iOS & Android driver companion and ELD logging mobile apps.",
          link: "/services/mobile-app-development"
        },
        {
          title: "Cloud Engineering & Infrastructure",
          description: "Architect high-frequency GPS telemetry and IoT data pipelines on AWS & Azure.",
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
        titleMain={data?.strategyCTA?.titleMain || "Accelerate your "}
        titleAccent={data?.strategyCTA?.titleAccent || "logistics supply chain"}
        titleEnd={data?.strategyCTA?.titleEnd || " with custom software."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Transportation Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " transportation businesses"}
      />
      <FAQs
        title="Transportation & Logistics Software FAQ"
        subtitle="Common questions about carrier ELD integration, automated load-matching algorithms, IoT cold-chain tracking, and custom TMS architectures."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Logistics Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Transportation;

