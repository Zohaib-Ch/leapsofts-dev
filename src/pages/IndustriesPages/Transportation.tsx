import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
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
    defaultKeywords: "transportation software development, logistics software company, fleet management software, custom tms development, supply chain software, eld compliance software",
    canonicalUrl: "https://www.leapsofts.com/industries/transportation",
  });
}

const Transportation: React.FC = () => {
  const { data } = useIndustryPage('transportation');

  const schemaData = buildServiceSchema({
    name: "Transportation Software Development & Logistics Solutions",
    description: "Leapsofts engineers custom transportation software, fleet telematics platforms, custom TMS solutions, IoT cold-chain tracking, and automated carrier payout gateways.",
    canonicalUrl: "https://www.leapsofts.com/industries/transportation",
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

  const processTitleMain = data?.processHeader?.titleMain || "Logistics Software Engineering";
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
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Logistics Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Transportation;

