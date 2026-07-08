import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

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
  { text: "At Leapsofts, we build high-fidelity, high-concurrency ", bold: false },
  { text: "video and music streaming architectures, esports platform portals, and digital rights management (DRM) systems ", bold: true },
  { text: "engineered to deliver flawless media playback to global audiences. By implementing low-latency CDN routing, secure server-side dynamic ad insertions, and zero-knowledge paywall architectures, we help media companies and digital creators scale their content distribution with absolute telemetry controls.", bold: false }
];

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
    </>
  );
};

export default Entertainment;
