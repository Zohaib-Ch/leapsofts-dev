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

const startupDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR STARTUPS",
  title: "How We Deliver Your Startup MVP in",
  accentText: "3-5 months",
  description: "For early-stage and venture-backed founders, speed-to-market and capital efficiency make or break product survival. We operate as your dedicated technical co-founder and rapid engineering pod, translating product briefs into investor-grade, scalable cloud software within 3 to 5 months while ensuring complete IP ownership and zero technical debt.",
  items: [
    {
      title: "Agile 2-Week Sprints & Full Transparency.",
      description: "We run rapid, continuous deployment sprints with live staging environments, weekly milestone demos, and complete visibility into our GitHub commits and Jira boards."
    },
    {
      title: "Cost-Optimized Serverless & Cloud Architecture.",
      description: "We architect pay-per-use serverless backends on AWS/GCP with automated scaling rules, keeping monthly burn low while effortlessly handling sudden launch-day traffic spikes."
    },
    {
      title: "Turnkey Stripe Billing & SaaS Subscription Tiers.",
      description: "From day one, we integrate Stripe Checkout, customer billing portals, metered usage tracking, and multi-currency payment options to monetize your product from the first user."
    },
    {
      title: "100% IP Ownership & Clean, Handover-Ready Code.",
      description: "All intellectual property, repositories, and cloud assets remain 100% yours. We write modular, well-documented TypeScript code that your in-house team can easily inherit."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you deliver a production-ready SaaS MVP in only 3 to 5 months?",
    answer: "We utilize battle-tested architectural boilerplates, modular React/Node micro-frontends, and automated CI/CD pipelines. This eliminates repetitive scaffolding and lets our senior engineers focus exclusively on your unique core business logic and differentiators."
  },
  {
    question: "Do founders retain 100% ownership of the code and intellectual property?",
    answer: "Yes, absolutely. All source code, Git repositories, software architecture diagrams, and cloud infrastructure accounts are 100% owned by your company under strict IP assignment and confidentiality agreements."
  },
  {
    question: "Can Leapsofts provide fractional CTO and technical advisory support for fundraising?",
    answer: "Yes. Our senior architects provide CTO-as-a-Service, assisting founders with investor pitch technical decks, software architecture reviews, scalability plans, and technical due diligence preparation for Seed and Series A rounds."
  },
  {
    question: "What happens after our MVP is successfully launched?",
    answer: "We support seamless post-launch scaling: our embedded engineering pods can continue iterating on product features, manage cloud infrastructure, optimize conversion funnels, or help hire and onboard your in-house technical team."
  }
];

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
    defaultKeywords: "software development for startups, startup mvp development company, rapid mvp development services, mvp developers for startups, saas startup engineering, cto as a service for startups, seed stage mvp development, startup software product development, agile mvp delivery 3 to 5 months, startup cloud architecture, fractional cto consulting, venture backed startup software development, stripe billing saas multi-tenant architecture",
    canonicalUrl: "https://www.leapsofts.com/industries/startups",
  });
}

const Startups: React.FC = () => {
  const { data } = useIndustryPage('startups');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/startups";
  const schemaData = buildIndustrySchema({
    name: "Startup Software Development & MVP Services",
    description: "Fast-track MVP development and startup software engineering — from ideation to investor-ready product.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Startups & Scale-ups",
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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || startupDeliverMVPData.label,
        title: data.deliverMVP.title || startupDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || startupDeliverMVPData.accentText,
        description: data.deliverMVP.description || startupDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : startupDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "High-Velocity MVP Engineering";
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
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Services for Startups"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Startups;

