import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection';
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO STARTUPS",
  title: "Accelerating your journey from idea to market leadership",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Agile Rapid Prototyping',
      description: "Leveraging modern component frameworks and agile sprints to ship functional MVP prototypes inside 3-5 months, enabling startups to validate their product-market fit based on user data."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Cost-Efficient Scalability',
      description: "Architecting auto-scaling serverless structures and pay-as-you-go databases to support sudden traffic spikes from product launches without draining capital."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Continuous Technical Innovation',
      description: "Serving as your strategic engineering partner to rapidly inject advanced AI features, LLM workflows, and web3 technologies directly into your core product."
    }
  ]
};

const startupSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'High-Growth Startups',
  description: 'We provide end-to-end technical partnership for startups, from MVP development to scaling global platforms and securing subsequent funding rounds.',
  items: [
    {
      icon: 'legacy',
      title: 'Rapid MVP Engineering',
      description: "Designing and building a clean, highly polished MVP containing your core value proposition within 3-5 months to validate your ideas with real users."
    },
    {
      icon: 'enterprise',
      title: 'High-Growth Scale Refactors',
      description: "Optimizing monolithic codebase segments into high-performance microservices and caching structures to handle concurrent traffic surges during launches."
    },
    {
      icon: 'thirdParty',
      title: 'Strategic CTO-as-a-Service',
      description: "Providing high-level technical direction, security audits, database blueprint designs, and product roadmap planning without full-time executive overhead."
    },
    {
      icon: 'product',
      title: 'Pitch-Ready Interactive Demos',
      description: "Developing visually stunning, high-fidelity proof-of-concept portals and interactive wireframes tailored specifically for investor pitch presentations."
    },
    {
      icon: 'saas',
      title: 'Cost-Effective Serverless Cloud',
      description: "Deploying automated, modular cloud infrastructures using AWS or Azure with strict budget triggers to keep operational costs low while scaling."
    },
    {
      icon: 'mobile',
      title: 'Fast Feature Iterations',
      description: "Configuring robust CI/CD pipelines and feature flags to launch and test new interface updates securely without interrupting active users."
    },
    {
      icon: 'product',
      title: 'AI Integration Pipelines',
      description: "Injecting predictive algorithms, custom LLM agents, and semantic search bars directly into your web or mobile applications to leapfrog competition."
    },
    {
      icon: 'enterprise',
      title: 'Monetization & Stripe Billing',
      description: "Setting up Stripe subscription tiers, credit-metered paywalls, and user billing analytics to capture early product revenue streams seamlessly."
    }
  ]
};

const streamlineDescription = [
  { text: "Launch your ", bold: false },
  { text: "startup vision ", bold: true },
  { text: "with the right technical partner. Leapsofts offers a ", bold: false },
  { text: "complimentary MVP strategy session ", bold: true },
  { text: "to help you define your ", bold: false },
  { text: "path to launch ", bold: true },
  { text: "and long-term scaling strategy.", bold: false },
];

const title = "Startup Software Development, Rapid MVP Delivery & CTO-as-a-Service";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we act as a high-velocity ", bold: false },
  { text: "startup engineering partner, MVP delivery engine, and technical scaling strategist ", bold: true },
  { text: "designed to take disruptive ideas to market in record time. By establishing rapid prototyping sandboxes, designing cost-efficient serverless infrastructures, and building pitch-perfect interactive demonstrations, we provide early-stage and high-growth startups with the technical agility required to validate ideas and secure investor funding.", bold: false }
];

export function meta() {
  const title = "Software Development for Startups | Leapsofts";
  const description = "Launch your startup MVP in 3-5 months with Leapsofts. Expert custom software engineering, product strategy & scalable architecture for venture-backed teams.";
  const keywords = "software development for startups, startup MVP development, tech startup software company, MVP developers for startups";
  const canonicalUrl = "https://www.leapsofts.com/industries/startups";

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
      "name": "Software Development for Startups",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Startup MVP & Software Engineering",
      "description": "Launch your startup MVP in 3-5 months with Leapsofts."
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
          "name": "Startups",
          "item": "https://www.leapsofts.com/industries/startups"
        }
      ]
    }
  ]
};

const Startups: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Startup Product Development",
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
        titleMain="Startup "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={startupSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" disruptive startups"
      />
      <RelatedServices
        title="Recommended Services for Startups"
        services={[
          {
            title: "Proof of Concept & MVP Development",
            description: "Launch your validated product in 3-5 months with zero compromise on scalability.",
            link: "/services/proof-of-concept-development"
          },
          {
            title: "Custom Web App Development",
            description: "Build high-performance SaaS web applications designed for rapid investor scaling.",
            link: "/services/web-app-development"
          },
          {
            title: "Dedicated Development Teams",
            description: "Scale your engineering capacity instantly with embedded senior developers.",
            link: "/services/dedicated-teams"
          }
        ]}
      />
    </>
  );
};

export default Startups;
