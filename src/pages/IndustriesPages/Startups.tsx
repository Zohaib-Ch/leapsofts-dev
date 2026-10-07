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
      description: "Serving as your strategic engineering partner to rapidly inject advanced AI features, LLM workflows, and Web3 technologies directly into your core product."
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

const title = "Startup Software Development Services, Rapid MVP Delivery & CTO-as-a-Service";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we act as a high-velocity ", bold: false },
  { text: "startup engineering partner, MVP delivery engine, and technical scaling strategist ", bold: true },
  { text: "designed to take disruptive ideas to market in record time. By establishing rapid prototyping sandboxes, designing cost-efficient serverless infrastructures, and building pitch-perfect interactive demonstrations, we provide early-stage and high-growth startups with the technical agility required to validate ideas and secure investor funding.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('startups');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Software Development for Startups & Rapid MVP Delivery | Leapsofts",
    defaultDescription: "Launch your startup MVP in 3-5 months with Leapsofts. Custom software engineering, CTO-as-a-Service, serverless architecture & pitch-ready demos for founders.",
    defaultKeywords: "software development for startups, startup mvp development, tech startup software company, cto as a service, mvp developers for startups, saas startup engineering",
    canonicalUrl: "https://www.leapsofts.com/industries/startups",
  });
}

const Startups: React.FC = () => {
  const { data } = useIndustryPage('startups');

  const schemaData = buildServiceSchema({
    name: "Software Development for Startups & Rapid MVP Delivery",
    description: "Launch your startup MVP in 3-5 months with Leapsofts. Custom software engineering, CTO-as-a-Service, serverless architecture & pitch-ready demos for founders.",
    canonicalUrl: "https://www.leapsofts.com/industries/startups",
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
        label: data.solutionsSection.label || startupSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || startupSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || startupSolutionsData.titleMain,
        description: data.solutionsSection.description || startupSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : startupSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "High-Velocity MVP Engineering";
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
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Launch your "}
        titleAccent={data?.strategyCTA?.titleAccent || "startup vision"}
        titleEnd={data?.strategyCTA?.titleEnd || " with custom engineering."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Startup Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " disruptive startups"}
      />
      <FAQs
        title="Startup Software Development FAQ"
        subtitle="Common questions about MVP delivery timelines, CTO-as-a-Service, IP ownership, and serverless scaling."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Services for Startups"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Startups;

