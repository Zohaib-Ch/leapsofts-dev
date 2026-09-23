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

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO MID-SIZED BUSINESSES",
  title: "Your Vision, Architected for Growth",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Rapid, Market-Ready Delivery',
      description: "Accelerating your product schedules by launching functional MVP architectures inside 3 to 5 months, converting business blueprints into highly responsive corporate platforms."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Full Ownership and Value Creation',
      description: "Building clean, fully-owned software components that remain exclusive intellectual assets of your enterprise with complete IP handover and zero licensing dependencies."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Operational Efficiency and ROI',
      description: "Focusing on database optimization, automated invoicing routes, and redundant workflow consolidation to significantly lower back-office cost overheads."
    }
  ]
};

const businessSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Operational innovations for',
  titleMain: 'Business Growth',
  description: 'We implement smart digital solutions to streamline operations, enhance visibility, and support scalable expansion for mid-sized enterprises.',
  items: [
    {
      icon: 'legacy',
      title: 'Smart Inventory & Logistics',
      description: "Integrating central stock ledgers with real-time sales dashboards, barcode scanners, and automated reorder alerts to streamline warehousing."
    },
    {
      icon: 'enterprise',
      title: 'Workforce & Contractor CRM',
      description: "Designing task scheduling channels, secure shift calendars, and customized contractor dashboards with complete access safety logs."
    },
    {
      icon: 'thirdParty',
      title: 'Unified Billing Gateways',
      description: "Consolidating multiple credit gateways, bank ACH channels, and billing engines into a single secure Stripe transaction portal."
    },
    {
      icon: 'product',
      title: 'Proprietary IP Creation',
      description: "Refactoring internal legacy software scripts into clean, valuable enterprise-level assets to achieve lasting competitive advantage."
    },
    {
      icon: 'saas',
      title: 'Omnichannel Staff Portals',
      description: "Developing centralized employee intranets containing instant messaging corridors, secure file shares, and performance dashboards."
    },
    {
      icon: 'mobile',
      title: 'Paperless Field Mobile Apps',
      description: "Building responsive mobile apps showing diagnostic sheets, dispatch coordinate logs, and safety checks to field crews."
    },
    {
      icon: 'product',
      title: 'Integrated Support Desks',
      description: "Structuring automated customer helpdesk ticket routing engines, user email integrations, and SLA compliance trackers."
    },
    {
      icon: 'enterprise',
      title: 'Business Intelligence & SQL Metrics',
      description: "Configuring high-fidelity business intelligence dashboards to trace key profit ratios, inventory turn metrics, and staff work hours."
    }
  ]
};

const streamlineDescription = [
  { text: "Scale your ", bold: false },
  { text: "mid-sized business ", bold: true },
  { text: "with a focused digital strategy. Leapsofts offers a ", bold: false },
  { text: "complimentary business strategy session ", bold: true },
  { text: "to help you identify ", bold: false },
  { text: "operational bottlenecks ", bold: true },
  { text: "and roadmap your path to enterprise-level efficiency.", bold: false },
];

const title = "Custom Software Development, Enterprise Workflows & Scalable IT for Mid-Sized Businesses";
const subtitle = "";
const introDescription = [
  { text: "We deliver specialized ", bold: false },
  { text: "software development for mid-sized businesses & mid-market companies ", bold: true },
  { text: "seeking enterprise-quality engineering. By building custom ERP sync platforms, operations management portals, and paperless field mobile apps, we help growing SMBs bridge technical gaps and accelerate scalable corporate expansion.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('mid-sized-businesses');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Software Development for Mid-Sized Businesses | Leapsofts",
    defaultDescription: "Scalable custom software solutions built for mid-market companies. Leapsofts delivers enterprise-quality engineering at a competitive pace and cost. Talk to us.",
    defaultKeywords: "software development for mid-sized businesses, mid-market software solutions, custom software SMB",
    canonicalUrl: "https://www.leapsofts.com/industries/mid-sized-businesses",
  });
}



const MidSizedBusinesses: React.FC = () => {
  const { data } = useIndustryPage('mid-sized-businesses');

  const schemaData = buildServiceSchema({
    name: "Software Development for Mid-Sized Businesses",
    description: "Scalable custom software solutions built for mid-market companies.",
    canonicalUrl: "https://www.leapsofts.com/industries/mid-sized-businesses",
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
        label: data.solutionsSection.label || businessSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || businessSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || businessSolutionsData.titleMain,
        description: data.solutionsSection.description || businessSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : businessSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "Enterprise Application Engineering";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
  }, [setProcessTitle, processTitleMain, processTitleAccent]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "STREAMLINE YOUR SUCCESS"}
        titleMain={data?.strategyCTA?.titleMain || "Software "}
        titleAccent={data?.strategyCTA?.titleAccent || "Strategy"}
        titleEnd={data?.strategyCTA?.titleEnd || " Session"}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" mid-sized businesses"
      />
      <RelatedServices
        services={[
          {
            title: "Custom Software Development",
            description: "Build bespoke business management software tailored to your workflows.",
            link: "/services/custom-software-development"
          },
          {
            title: "Fixed Price Software Development",
            description: "Deliver your software project on a predictable, fixed-cost budget.",
            link: "/services/fixed-price"
          },
          {
            title: "Application Re-Engineering",
            description: "Modernize legacy database tools and desktop software into web applications.",
            link: "/services/app-reengineering"
          }
        ]}
      />
    </>
  );
};

export default MidSizedBusinesses;
