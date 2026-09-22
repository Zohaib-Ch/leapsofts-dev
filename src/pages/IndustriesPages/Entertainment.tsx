import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

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

const title = "Media & Entertainment Software Development, Low-Latency Streaming & Digital Rights";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "entertainment software development services, low-latency media streaming platforms, and digital rights management (DRM) architectures ", bold: true },
  { text: "engineered for global content reach. By building multi-bitrate HLS/DASH video pipelines, server-side ad insertions (SSAI), and esports portals, we help media companies scale audience engagement.", bold: false }
];

export function meta() {
  const title = "Entertainment Software Development Services | Leapsofts";
  const description = "Custom media & entertainment software — streaming platforms, content management & audience engagement tools. Leapsofts builds digital entertainment solutions.";
  const keywords = "entertainment software development, media software company, streaming platform development, content management software";
  const canonicalUrl = "https://www.leapsofts.com/industries/entertainment";

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
      "name": "Entertainment Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Media & Entertainment Software Engineering",
      "description": "Custom media & entertainment software — streaming platforms, content management & audience engagement tools."
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
          "name": "Media & Entertainment",
          "item": "https://www.leapsofts.com/industries/entertainment"
        }
      ]
    }
  ]
};

const Entertainment: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Entertainment Media Solutions",
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
        titleMain="Media "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={entertainmentSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" entertainment businesses"
      />
      <RelatedServices
        services={[
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
        ]}
      />
    </>
  );
};

export default Entertainment;
