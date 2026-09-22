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
  subtitle: "OUR COMMITMENT TO CONSTRUCTION SUCCESS",
  title: "Unwavering Standards for Builders",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Uninterrupted Field Operations',
      description: "Engineering high-performance, offline-first mobile databases that allow crew leads and site inspectors to log tasks, update schedules, and snap photo reports with zero cellular connection."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Total Project Accountability',
      description: "Centralizing city building permits, subcontractor timelines, daily log logs, and labor hours under a single dashboard that keeps everyone focused on project deadlines."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Seamless Financial Governance',
      description: "Connecting construction operations with accounting ERP tools like QuickBooks and Sage to automate subcontractor payouts, materials purchases, and daily expense reports."
    }
  ]
};

const constructionSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Construction Firms',
  description: 'We build end-to-end construction management platforms that optimize field operations, streamline back-office tasks, and ensure project profitability.',
  items: [
    {
      icon: 'legacy',
      title: 'Offline-First Field Companions',
      description: "Building responsive mobile apps letting foreman log materials, record labor hours, and submit photo-backed progress updates from remote areas without cell signals."
    },
    {
      icon: 'enterprise',
      title: 'BIM 3D Model Synch Bridges',
      description: "Integrating building information modeling (BIM) engines to map 3D construction blueprints with active subcontractor work phases dynamically."
    },
    {
      icon: 'thirdParty',
      title: 'ERP & Sage Accounting Bridges',
      description: "Developing safe billing synchronizations with Sage, QuickBooks, and Procore to manage contractor draws, lien waivers, and purchase orders."
    },
    {
      icon: 'product',
      title: 'Subcontractor Central Portals',
      description: "Structuring secure bidder portals to distribute RFP details, collect scope proposals, upload insurance records, and approve daily work tickets."
    },
    {
      icon: 'saas',
      title: 'Heavy Equipment IoT Telemetry',
      description: "Connecting IoT sensors to track heavy excavator fuel burn metrics, GPS geofences, and machine engine hours to optimize fleet usage."
    },
    {
      icon: 'mobile',
      title: 'Compliance & OSHA safety Audits',
      description: "Digitizing safety checklists, managing OSHA incident reports, and running automated onsite risk evaluations to comply with building standards."
    },
    {
      icon: 'product',
      title: 'Smart Concrete & Steel Ledgers',
      description: "Tracking raw bulk materials delivery logs, concrete pour curing timelines, and structural steel arrivals against active delivery trucks."
    },
    {
      icon: 'enterprise',
      title: 'RFP Bidding & Estimation Engines',
      description: "Integrating cost calculators displaying active concrete, steel, and labor rates to help contractors compile profitable RFP responses."
    }
  ]
};

const streamlineDescription = [
  { text: "Build a ", bold: false },
  { text: "stronger digital foundation ", bold: true },
  { text: "for your construction projects. Leapsofts offers a ", bold: false },
  { text: "complimentary construction strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "project lifecycle ", bold: true },
  { text: "from bidding to delivery.", bold: false },
];

const title = "Construction Software Development, Offline-First Field Apps & BIM Integrations";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "construction software development, construction management software, and offline-first field apps ", bold: true },
  { text: "engineered to provide total visibility across complex job sites. By automating subcontractor task dispatches, integrating BIM 3D models, and deploying IoT equipment telemetry, we help builders prevent budget leaks and ensure safety compliance.", bold: false }
];

export function meta() {
  const title = "Construction Software Development Services | Leapsofts";
  const description = "Custom construction management software — project tracking, estimating & BIM integration. Leapsofts builds digital tools for modern construction firms. Get started.";
  const keywords = "construction software development, construction management software, project management software construction";
  const canonicalUrl = "https://www.leapsofts.com/industries/construction";

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
      "name": "Construction Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Construction Management Software Engineering",
      "description": "Custom construction management software — project tracking, estimating & BIM integration."
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
          "name": "Construction",
          "item": "https://www.leapsofts.com/industries/construction"
        }
      ]
    }
  ]
};

const Construction: React.FC = () => {
  const { data } = useIndustryPage('construction');
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
        label: data.solutionsSection.label || constructionSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || constructionSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || constructionSolutionsData.titleMain,
        description: data.solutionsSection.description || constructionSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : constructionSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "Construction Product Development";
  const processTitleAccent = data?.processHeader?.titleAccent || "Process";

  useEffect(() => {
    setProcessTitle({
      titleMain: processTitleMain,
      titleAccent: processTitleAccent
    });
  }, [setProcessTitle, processTitleMain, processTitleAccent]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
        titleEnd=" construction businesses"
      />
      <RelatedServices
        services={[
          {
            title: "Mobile App Development",
            description: "Engineer offline-first mobile apps for construction site crews and inspectors.",
            link: "/services/mobile-app-development"
          },
          {
            title: "Custom Software Development",
            description: "Build bespoke construction ERP tools, subcontractor bidding engines, and portals.",
            link: "/services/custom-software-development"
          },
          {
            title: "Cloud Engineering & Infrastructure",
            description: "Deploy scalable cloud databases to handle IoT equipment telemetry streams.",
            link: "/services/cloud-engineering"
          }
        ]}
      />
    </>
  );
};

export default Construction;
