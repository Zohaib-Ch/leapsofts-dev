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
    defaultKeywords: "energy software development, utilities software company, renewable energy software, smart grid software, scada iot integration",
    canonicalUrl: "https://www.leapsofts.com/industries/energy",
  });
}

const Energy: React.FC = () => {
  const { data } = useIndustryPage('energy');

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/energy";
  const schemaData = buildIndustrySchema({
    name: "Energy & Utilities Software Development Services",
    description: "Custom energy management software — SCADA systems, smart grid solutions, and renewable energy platforms.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Energy & Utilities",
    faqs: data?.faqs,
  });
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeCommitmentData = (data?.commitmentSection && data.commitmentSection.items?.length)
    ? {
        subtitle: data.commitmentSection.subtitle || commitmentData.subtitle,
        title: data.commitmentSection.title || commitmentData.title,
        items: data.commitmentSection.items
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

  const processTitleMain = data?.processHeader?.titleMain || "Energy Software Engineering";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
  }, [setProcessTitle, processTitleMain, processTitleAccent]);

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
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Energy Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Energy;

