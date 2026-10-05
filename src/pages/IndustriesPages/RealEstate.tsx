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

const realEstateDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR PROPTECH & REAL ESTATE",
  title: "How We Deliver Your PropTech MVP in",
  accentText: "3-5 months",
  description: "Real estate developers, property managers, and PropTech innovators need fast-performing listing portals, automated lease workflows, and IoT smart building controls. Our dedicated PropTech engineering pods build MLS/IDX-integrated marketplaces, tenant mobile companion apps, and automated asset management platforms in 3 to 5 months to maximize net operating income (NOI).",
  items: [
    {
      title: "RESO Web API & RETS/IDX Real-Time Normalization.",
      description: "We build high-speed MLS search engines ingesting normalized property feeds via RESO Web API and RETS, supporting lightning-fast geospatial map searches and instant listing updates."
    },
    {
      title: "Automated Digital Lease Execution & Tenant Screening.",
      description: "We integrate DocuSign/HelloSign e-signature workflows, TransUnion/Experian credit/background checks, and identity verification into a zero-friction tenant onboarding portal."
    },
    {
      title: "Automated Rent Collection & Split Accounting.",
      description: "We deploy Stripe ACH and credit card processing with automated late-fee triggers, tenant deposit escrows, and direct multi-owner distribution payouts."
    },
    {
      title: "Smart Building IoT & Digital Key Access.",
      description: "We connect smart door locks (Salto, Latch, Dormakaba), HVAC sensors, and energy meters to a centralized management hub and tenant mobile application."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you integrate with multiple MLS systems and handle RESO Web API standards?",
    answer: "We engineer high-performance data pipelines that connect directly to Multiple Listing Services (MLS) via RESO Web API and RETS. Our backend normalizes disparate field schemas, geocodes listings, and optimizes database search indices for sub-100ms property searches."
  },
  {
    question: "Can your real estate software automate tenant screening and lease signing?",
    answer: "Yes. We build end-to-end leasing portals that integrate automated identity verification, background/credit checks via TransUnion or Experian, and compliant digital lease execution via e-signature APIs like DocuSign or HelloSign."
  },
  {
    question: "How do your tenant mobile applications integrate with smart building hardware and IoT locks?",
    answer: "We build native iOS and Android apps integrating Bluetooth Low Energy (BLE), NFC, and cloud IoT APIs to communicate with smart access control systems (Latch, Salto, Brivo), letting residents unlock doors, grant visitor guest passes, and adjust climate controls."
  },
  {
    question: "Can your PropTech platform handle automated recurring rent payments and owner distribution payouts?",
    answer: "Yes. We integrate Stripe, Dwolla, or Plaid to support zero-fee ACH bank debits, automated recurring rent charges, payment failure retries, security deposit escrow tracking, and automated disbursement payouts to property owners."
  }
];

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
    defaultKeywords: "real estate software development, proptech software development company, property management software development, reso web api mls integration, custom real estate crm, tenant portal mobile app, digital lease signing automation, hoa management software, smart building iot lock software, real estate listing platform development, commercial property management software, automated rent payment processing",
    canonicalUrl: "https://www.leapsofts.com/industries/real-estate",
  });
}

const RealEstate: React.FC = () => {
  const { data } = useIndustryPage('real-estate');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/real-estate";
  const schemaData = buildIndustrySchema({
    name: "PropTech & Real Estate Software Development Services",
    description: "Custom property technology software — listing platforms, CRM, property management, and virtual tours.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Real Estate & PropTech",
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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || realEstateDeliverMVPData.label,
        title: data.deliverMVP.title || realEstateDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || realEstateDeliverMVPData.accentText,
        description: data.deliverMVP.description || realEstateDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : realEstateDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "PropTech Software Engineering";
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
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended PropTech Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default RealEstate;

