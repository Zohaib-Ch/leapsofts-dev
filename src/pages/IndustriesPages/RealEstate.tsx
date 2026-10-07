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
  subtitle: "OUR COMMITMENTS TO REAL ESTATE LEADERS",
  title: "Tailored for Build, Buy, and Scale Property Operations",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Frictionless Portfolio Management',
      description: "Deploying modular resident dashboards and automated lease workflows that digitize routine tenant check-ins, key handouts, and utility configurations."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Scalable Asset Ownership',
      description: "Building database infrastructures engineered to scale alongside your property volumes, accommodating thousands of multi-family complexes, B2B workspaces, and retail assets."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Community-Centric Innovation',
      description: "Integrating high-fidelity communication interfaces, local neighborhood business boards, and booking channels for shared community amenities to elevate resident retention."
    }
  ]
};

const realEstateSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Real Estate-Focused',
  titleMain: ' Digital Ecosystems',
  description: 'We build custom software that automates details, simplifies resident concerns, and optimizes property management for high-stakes portfolios.',
  items: [
    {
      icon: 'legacy',
      title: 'Multi-Family Management Platforms',
      description: "Developing robust lease lifecycle engines that handle automated background screenings, digital document signing (e-Sign), and move-in logs."
    },
    {
      icon: 'enterprise',
      title: 'Developer CRM & Sales Pipelines',
      description: "Structuring customized sales trackers displaying active construction progress, virtual tour pathways, and mortgage application integrations."
    },
    {
      icon: 'thirdParty',
      title: 'Governance & HOA Portals',
      description: "Designing community portals to distribute policy bylaws, handle digital voting boards, and track monthly amenity reserve balances."
    },
    {
      icon: 'saas',
      title: 'Smart Dispatch & Work Orders',
      description: "Automating subcontractor assignment pipelines, tracking work status from tenant photo uploads, and managing maintenance inspection schedules."
    },
    {
      icon: 'product',
      title: 'Unified Billing & Rent Gateways',
      description: "Integrating Stripe payment rails to automate recurring monthly rent drafts, coordinate late-fee triggers, and manage direct bank deposits."
    },
    {
      icon: 'mobile',
      title: 'Mobile Tenant Companions',
      description: "Building responsive React Native applications that act as digital keys, community chats, and direct maintenance channels for residents."
    },
    {
      icon: 'product',
      title: 'Flex-Space Booking Engines',
      description: "Configuring seat maps and conference room calendars with immediate Stripe micro-transaction checkouts for hot-desking properties."
    },
    {
      icon: 'enterprise',
      title: 'Smart Building IoT Bridges',
      description: "Connecting automated smart locks, digital utility monitors, and smart thermostats to centralized management hubs to cut vacancy overheads."
    }
  ]
};

const streamlineDescription = [
  { text: "Transform your ", bold: false },
  { text: "property portfolio ", bold: true },
  { text: "with a robust technical foundation. Leapsofts offers a ", bold: false },
  { text: "complimentary real estate strategy session ", bold: true },
  { text: "to help you optimize ", bold: false },
  { text: "management workflows ", bold: true },
  { text: "and increase resident satisfaction.", bold: false },
];

const title = "Real Estate Software Development Services & PropTech Solutions";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-spectrum ", bold: false },
  { text: "real estate software development, PropTech software solutions, and property management systems ", bold: true },
  { text: "engineered for asset managers, real estate agencies, and property developers. By deploying automated lease execution paths, tenant portal mobile apps, and smart building IoT bridges, we optimize property yields and occupancy.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('real-estate');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Real Estate Software Development Services & PropTech | Leapsofts",
    defaultDescription: "Leapsofts engineers custom real estate software, property management platforms, MLS RETS/RESO Web API integrations, and tenant portal mobile apps.",
    defaultKeywords: "real estate software development, proptech software company, property management software, mls integration software, tenant portal mobile app, reso web api integration",
    canonicalUrl: "https://www.leapsofts.com/industries/real-estate",
  });
}

const RealEstate: React.FC = () => {
  const { data } = useIndustryPage('real-estate');

  const schemaData = buildServiceSchema({
    name: "Real Estate Software Development Services & PropTech",
    description: "Leapsofts engineers custom real estate software, property management platforms, MLS RETS/RESO Web API integrations, and tenant portal mobile apps.",
    canonicalUrl: "https://www.leapsofts.com/industries/real-estate",
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
        label: data.solutionsSection.label || realEstateSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || realEstateSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || realEstateSolutionsData.titleMain,
        description: data.solutionsSection.description || realEstateSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : realEstateSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "PropTech Software Engineering";
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
          title: "Web App Development",
          description: "Engineer custom property listing portals and tenant management dashboards.",
          link: "/services/web-app-development"
        },
        {
          title: "Mobile App Development",
          description: "Build iOS & Android mobile apps for tenant maintenance requests and digital keys.",
          link: "/services/mobile-app-development"
        },
        {
          title: "Custom Software Development",
          description: "Build tailored MLS integrations, lease execution engines, and HOA portals.",
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
        titleMain={data?.strategyCTA?.titleMain || "Transform your "}
        titleAccent={data?.strategyCTA?.titleAccent || "property portfolio"}
        titleEnd={data?.strategyCTA?.titleEnd || " with a robust foundation."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Real Estate Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " real estate businesses"}
      />
      <FAQs
        title="Real Estate & PropTech Software FAQ"
        subtitle="Common questions about RESO Web API MLS integration, automated lease signing, tenant mobile apps, and smart building IoT."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended PropTech Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default RealEstate;

