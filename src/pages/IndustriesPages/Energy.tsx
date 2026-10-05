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
  subtitle: "OUR COMMITMENTS TO ENERGY INNOVATION",
  title: "Bespoke energy software designed for smart grid automation and carbon transparency",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Absolute Operational Security',
      description: "Hardening critical grid interfaces against exterior threats using zero-trust ingress gateways, network segmentation, and real-time anomaly alerts that comply with NERC CIP standards."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Real-Time System Visibility',
      description: "Deploying high-frequency telemetric dashboards that stream live metrics from remote rigs and solar fields, letting teams resolve grid imbalances before failures."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Sustainable Efficiency',
      description: "Automating smart metering systems and carbon offset registries to supply companies with transparent sustainability auditing and green energy compliance reports."
    }
  ]
};

const energySolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Energy-Focused',
  titleMain: ' Digital Solutions',
  description: 'We empower energy organizations with the flexibility, resilience, and agility needed to streamline operations in a rapidly changing landscape.',
  items: [
    {
      icon: 'legacy',
      title: 'Smart Grid Utilities',
      description: "Building scalable data ingestion engines that collect metrics from smart household meters to forecast local consumption spikes and adjust production."
    },
    {
      icon: 'enterprise',
      title: 'Rig Telemetry IoT',
      description: "Configuring high-reliability software to trace pressure thresholds and drill velocities on remote rigs, sending warning logs to safety engineers."
    },
    {
      icon: 'thirdParty',
      title: 'Wind & Solar Analytics',
      description: "Integrating real-time angle adjustments and solar panel orientation metrics to maximize green energy capture depending on active weather feeds."
    },
    {
      icon: 'saas',
      title: 'Automated Carbon Tracking',
      description: "Aggregating hardware gas sensors and factory exhaust metrics to generate fully validated, auditable EPA carbon emissions compliance records."
    },
    {
      icon: 'product',
      title: 'Substation Load Balancing',
      description: "Developing intelligent algorithms to route excess electrical power to storage battery vaults during off-peak hours and dump during high loads."
    },
    {
      icon: 'mobile',
      title: 'Field Crew Dispatch Ports',
      description: "Building responsive mobile apps displaying remote site diagnostic logs, map coordinates, and safety check procedures to technicians offline."
    },
    {
      icon: 'product',
      title: 'SCADA Protocol Bridges',
      description: "Designing type-safe Modbus and DNP3 protocol converters to securely translate legacy hardware metrics into standard cloud-accessible JSON data."
    },
    {
      icon: 'enterprise',
      title: 'Battery Health Predictor',
      description: "Aggregating temperature, charge cycles, and terminal resistance metrics from utility-scale lithium batteries to forecast cell degradation profiles."
    }
  ]
};

const energyDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR ENERGY & CLEANTECH",
  title: "How We Deliver Your CleanTech MVP in",
  accentText: "3-5 months",
  description: "Utilities, renewable energy operators, and CleanTech innovators need mission-critical reliability, SCADA protocol compatibility, and strict NERC CIP cybersecurity. Our specialized CleanTech engineering pods build smart grid telemetry pipelines, automated carbon accounting portals, and distributed battery energy storage (BESS) dashboards in 3 to 5 months.",
  items: [
    {
      title: "SCADA, Modbus & DNP3 Protocol Ingestion.",
      description: "We build secure edge gateways translating legacy industrial SCADA, Modbus TCP/RTU, and DNP3 protocols into high-throughput cloud MQTT and Kafka streams."
    },
    {
      title: "NERC CIP & Critical Infrastructure Cybersecurity.",
      description: "We enforce zero-trust network segmentation, air-gapped data brokers, hardware security module (HSM) encryption, and continuous intrusion detection to protect electrical assets."
    },
    {
      title: "Smart Grid Load Balancing & Battery Optimization.",
      description: "We deploy predictive algorithms forecasting renewable generation curves against peak municipal demands, orchestrating automated BESS charge/discharge cycles."
    },
    {
      title: "Automated Carbon Tracking & ESG Verification.",
      description: "We develop tamper-proof carbon accounting ledgers aggregating facility energy draw and solar offset metrics for auditable EPA and CSRD sustainability disclosures."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do your energy platforms connect legacy SCADA systems to modern cloud dashboards?",
    answer: "We deploy secure edge IoT gateways running protocol translators for Modbus, DNP3, IEC 61850, and OPC-UA. These gateways safely normalize operational technology (OT) telemetry into encrypted JSON payloads over MQTT/mTLS for cloud-based monitoring without exposing industrial control networks."
  },
  {
    question: "How do you ensure cybersecurity compliance with NERC CIP regulations for critical infrastructure?",
    answer: "We design software following NERC CIP and NIST SP 800-82 guidelines. This includes strict network isolation between OT and IT layers, hardware-backed multi-factor authentication, immutable audit logging, and automated threat anomaly detection."
  },
  {
    question: "Can your CleanTech software optimize Battery Energy Storage Systems (BESS)?",
    answer: "Yes. We build battery analytics platforms that monitor cell voltages, state of charge (SoC), state of health (SoH), and internal temperatures to automate intelligent arbitrage: charging during low-cost solar/wind generation and discharging during high-rate peak demand."
  },
  {
    question: "How do your carbon accounting modules calculate and verify greenhouse gas (GHG) emissions?",
    answer: "We integrate directly with smart meters, utility billing APIs, and IoT emissions sensors to calculate Scope 1, 2, and 3 emissions in real time, formatted strictly to GHG Protocol, EPA, and European CSRD reporting standards."
  }
];

const streamlineDescription = [
  { text: "Lead the ", bold: false },
  { text: "energy transition ", bold: true },
  { text: "with a modernized technical infrastructure. Leapsofts offers a ", bold: false },
  { text: "complimentary energy strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "operations and sustainability ", bold: true },
  { text: "goals through custom software.", bold: false },
];

const title = "Energy & Utilities Software Development & Smart Grid Platforms";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-spectrum ", bold: false },
  { text: "energy software development, smart grid software, and renewable energy platforms ", bold: true },
  { text: "engineered to support clean energy transitions. By building real-time turbine IoT telemetry, load balancing algorithms, and automated carbon emissions tracking, we help utility firms operate with maximum uptime and transparency.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('energy');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Energy & Utilities Software Development | Smart Grid & IoT | Leapsofts",
    defaultDescription: "Leapsofts engineers custom energy software, smart grid automation platforms, SCADA IoT telemetry engines, and renewable energy management systems.",
    defaultKeywords: "energy software development, cleantech software development company, smart grid software development, scada modbus dnp3 integration, nerc cip cybersecurity compliance, renewable energy monitoring software, battery energy storage system bess software, derms distributed energy resource management, solar wind farm telemetry platform, utility billing smart metering ami, carbon accounting esg software",
    canonicalUrl: "https://www.leapsofts.com/industries/energy",
  });
}

const Energy: React.FC = () => {
  const { data } = useIndustryPage('energy');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/energy";
  const schemaData = buildIndustrySchema({
    name: "Energy & Utilities Software Development Services",
    description: "Custom energy management software — SCADA systems, smart grid solutions, and renewable energy platforms.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Energy & Utilities",
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
        label: data.solutionsSection.label || energySolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || energySolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || energySolutionsData.titleMain,
        description: data.solutionsSection.description || energySolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : energySolutionsData;

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || energyDeliverMVPData.label,
        title: data.deliverMVP.title || energyDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || energyDeliverMVPData.accentText,
        description: data.deliverMVP.description || energyDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : energyDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Energy Software Engineering";
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
          title: "Data Science & AI Solutions",
          description: "Deploy machine learning models for predictive grid load and cell degradation forecasting.",
          link: "/services/data-science-ai"
        },
        {
          title: "Cloud Engineering & Infrastructure",
          description: "Architect high-frequency SCADA and IoT sensor data gateways on AWS & Azure.",
          link: "/services/cloud-engineering"
        },
        {
          title: "Custom Software Development",
          description: "Build custom smart metering dashboards and carbon emissions compliance portals.",
          link: "/services/custom-software-development"
        }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Lead the "}
        titleAccent={data?.strategyCTA?.titleAccent || "energy transition"}
        titleEnd={data?.strategyCTA?.titleEnd || " with custom software."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Energy Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " energy organizations"}
      />
      <FAQs
        title="Energy & Utilities Software FAQ"
        subtitle="Common questions about SCADA protocol integration, NERC CIP compliance, smart grid telemetry, and carbon accounting."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Energy Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Energy;

