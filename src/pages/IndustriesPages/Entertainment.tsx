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
  subtitle: "OUR COMMITMENTS TO MEDIA INNOVATION",
  title: "Bespoke media software designed for global content reach and absolute security",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Flexible High-Volume Scaling',
      description: "Building resilient serverless delivery clusters and caching layers to handle massive concurrent audience peaks during live-broadcasts and popular content releases without frame drops."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Content & DRM Protection',
      description: "Deploying enterprise-grade token authorization corridors and automated copyright checking APIs to safeguard your valuable intellectual property."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Real-Time Data Analytics',
      description: "Integrating micro-second telemetry recorders and dashboard charts to track user engagement trends, stream buffering speeds, and localized content preferences."
    }
  ]
};

const entertainmentSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Entertainment-Focused',
  titleMain: ' Digital Solutions',
  description: 'We build robust and flexible software that allows your business to produce, manage, and distribute media at a global scale.',
  items: [
    {
      icon: 'legacy',
      title: 'Flawless Media Streaming',
      description: "Deploying highly optimized multi-bitrate HLS and DASH streaming networks featuring low-latency content delivery (CDN) and adaptive stream adjustments."
    },
    {
      icon: 'enterprise',
      title: 'Esports & High-Concurrency',
      description: "Architecting real-time tournament matchmaking engines, active leaderboard trackers, and spectator chat layers capable of supporting millions of concurrent players."
    },
    {
      icon: 'thirdParty',
      title: 'Real-Time Engagement Hubs',
      description: "Building customized community portal systems featuring instant interactive feeds, WebRTC audio/video hangouts, and automated content moderation gates."
    },
    {
      icon: 'saas',
      title: 'Editorial Lifecycles (CMS)',
      description: "Modernizing corporate editorial content management systems with automated translation hooks, instant drafts preview, and headless global CDN channels."
    },
    {
      icon: 'product',
      title: 'Dynamic Ad Ingestion (SSAI)',
      description: "Integrating high-performance server-side ad insertion (SSAI) systems to deliver personalized advertisements without interruptive client-side buffer pauses."
    },
    {
      icon: 'mobile',
      title: 'Immersive Web3D & AR/VR',
      description: "Developing interactive 3D WebGL scenes and augmented reality web portals to deliver next-generation experiential branding campaigns."
    },
    {
      icon: 'product',
      title: 'Digital Rights Vaults (DRM)',
      description: "Configuring hardened database vaults using Widevine and FairPlay DRM licensing keys to block unauthorized screen recordings and stream copying."
    },
    {
      icon: 'enterprise',
      title: 'Microtransaction Paywalls',
      description: "Structuring automated subscription billing flows, custom coupon systems, and immediate paywall triggers to maximize creative monetization."
    }
  ]
};

const streamlineDescription = [
  { text: "Captivate your ", bold: false },
  { text: "digital audience ", bold: true },
  { text: "with a robust and scalable platform. Leapsofts offers a ", bold: false },
  { text: "complimentary media strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "content distribution ", bold: true },
  { text: "and monetization model.", bold: false },
];

const title = "Media & Entertainment Software Development & Streaming Platforms";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "entertainment software development services, low-latency media streaming platforms, and digital rights management (DRM) architectures ", bold: true },
  { text: "engineered for global content reach. By building multi-bitrate HLS/DASH video pipelines, server-side ad insertions (SSAI), and esports portals, we help media companies scale audience engagement.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('entertainment');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Media & Entertainment Software Development | Streaming & DRM | Leapsofts",
    defaultDescription: "Leapsofts engineers custom media & entertainment software, low-latency 4K HLS/DASH streaming platforms, Widevine DRM security, and server-side ad insertion (SSAI).",
    defaultKeywords: "entertainment software development, media software company, streaming platform development, drm media security, low latency streaming software, ssai ad insertion",
    canonicalUrl: "https://www.leapsofts.com/industries/entertainment",
  });
}

const Entertainment: React.FC = () => {
  const { data } = useIndustryPage('entertainment');

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/entertainment";
  const schemaData = buildIndustrySchema({
    name: "Entertainment & Media Software Development Services",
    description: "Custom media software — OTT streaming platforms, content management systems, and digital distribution.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Entertainment & Media",
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
        label: data.solutionsSection.label || entertainmentSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || entertainmentSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || entertainmentSolutionsData.titleMain,
        description: data.solutionsSection.description || entertainmentSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : entertainmentSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "Media & Entertainment Engineering";
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
          description: "Build custom high-concurrency media portals and streaming web interfaces.",
          link: "/services/web-app-development"
        },
        {
          title: "Mobile App Development",
          description: "Engineer native iOS & Android video and audio streaming mobile apps.",
          link: "/services/mobile-app-development"
        },
        {
          title: "Cloud Engineering & Infrastructure",
          description: "Architect global CDN distribution and serverless transcoding pipelines.",
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
        titleMain={data?.strategyCTA?.titleMain || "Captivate your "}
        titleAccent={data?.strategyCTA?.titleAccent || "digital audience"}
        titleEnd={data?.strategyCTA?.titleEnd || " with a robust platform."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Media Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " entertainment businesses"}
      />
      <FAQs
        title="Entertainment & Media Software FAQ"
        subtitle="Common questions about low-latency streaming, DRM content protection, SSAI ad insertion, and esports portals."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Media Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Entertainment;

