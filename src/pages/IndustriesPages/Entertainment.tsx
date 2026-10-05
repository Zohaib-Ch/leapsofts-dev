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

const entertainmentDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR MEDIA & ENTERTAINMENT",
  title: "How We Deliver Your Media MVP in",
  accentText: "3-5 months",
  description: "Modern entertainment, streaming, and gaming platforms require sub-second video latency, multi-DRM studio-grade encryption, and seamless monetized paywalls. Our specialized media engineering pods build low-latency HLS/DASH video delivery pipelines, custom OTT web and mobile apps, and high-concurrency gaming hubs in 3 to 5 months to help entertainment brands engage global audiences.",
  items: [
    {
      title: "Low-Latency 4K HLS/DASH Video Streaming.",
      description: "We architect multi-bitrate, adaptive video streaming pipelines integrated with global edge CDNs (Cloudflare, Fastly, AWS CloudFront) ensuring zero buffering and sub-second latency."
    },
    {
      title: "Studio-Grade Multi-DRM Content Protection.",
      description: "We enforce Google Widevine, Apple FairPlay, and Microsoft PlayReady DRM encryption keys to protect premium video, audio, and gaming intellectual property from piracy."
    },
    {
      title: "Server-Side Ad Insertion (SSAI) & Monetization.",
      description: "We implement seamless server-side ad stitching (SSAI/VAST/VMAP) that bypasses client ad-blockers while preserving continuous, broadcast-quality video playback."
    },
    {
      title: "High-Concurrency Real-Time Gaming & Esports.",
      description: "We engineer WebSocket and WebRTC matchmaking engines, live leaderboard sync, and low-latency interactive chats supporting millions of concurrent viewers."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do your streaming platforms deliver 4K video with low latency across global audiences?",
    answer: "We engineer adaptive bitrate (ABR) streaming using modern HLS and MPEG-DASH protocols, integrated directly with tiered global Content Delivery Networks (CDNs) and edge caching. This guarantees sub-second video start times and zero buffering across diverse mobile and desktop connections."
  },
  {
    question: "How do you protect copyrighted media content using Digital Rights Management (DRM)?",
    answer: "We implement studio-grade Multi-DRM security pipelines supporting Apple FairPlay, Google Widevine Modular, and Microsoft PlayReady. Every stream chunk is encrypted with AES-128 keys and decrypted only inside secure hardware-backed playback environments."
  },
  {
    question: "Can your media software handle dynamic ad insertion without interrupting the video stream?",
    answer: "Yes. We implement Server-Side Ad Insertion (SSAI) adhering to IAB VAST and VMAP standards. Ads are dynamically stitched directly into the video manifest on the server side, ensuring seamless transitions, bypassing ad-blockers, and delivering personalized ads."
  },
  {
    question: "What platforms and devices do your media applications support?",
    answer: "We build unified cross-platform media applications supporting iOS, Android, web browsers, Apple TV (tvOS), Android TV, Roku, Amazon Fire TV, and Smart TV operating systems (Samsung Tizen, LG webOS)."
  }
];

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
    defaultKeywords: "entertainment software development, media software development company, video streaming platform development, 4k hls dash streaming software, multi drm security widevine fairplay, server side ad insertion ssai, ott video app development, webrtc live streaming platform, video on demand vod software, digital asset management dam for media, interactive live broadcast software, audio streaming app development",
    canonicalUrl: "https://www.leapsofts.com/industries/entertainment",
  });
}

const Entertainment: React.FC = () => {
  const { data } = useIndustryPage('entertainment');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/entertainment";
  const schemaData = buildIndustrySchema({
    name: "Entertainment & Media Software Development Services",
    description: "Custom media software — OTT streaming platforms, content management systems, and digital distribution.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Entertainment & Media",
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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || entertainmentDeliverMVPData.label,
        title: data.deliverMVP.title || entertainmentDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || entertainmentDeliverMVPData.accentText,
        description: data.deliverMVP.description || entertainmentDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : entertainmentDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Media & Entertainment Engineering";
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
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Media Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Entertainment;

