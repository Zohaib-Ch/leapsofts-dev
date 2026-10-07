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
  subtitle: "OUR COMMITMENT TO CONSTRUCTION SUCCESS",
  title: "Unwavering Standards for Builders and Contractors",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Uninterrupted Field Operations',
      description: "Engineering high-performance, offline-first mobile databases that allow crew leads and site inspectors to log tasks, update schedules, and snap photo reports with zero cellular connection."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Total Project Accountability',
      description: "Centralizing city building permits, subcontractor timelines, daily logs, and labor hours under a single dashboard that keeps everyone focused on project deadlines."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Seamless Financial Governance',
      description: "Connecting construction operations with accounting ERP tools like QuickBooks, Sage, and Procore to automate subcontractor payouts, materials purchases, and daily expense reports."
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
      description: "Building responsive mobile apps letting foremen log materials, record labor hours, and submit photo-backed progress updates from remote job sites without cell signals."
    },
    {
      icon: 'enterprise',
      title: 'BIM 3D Model Synch Bridges',
      description: "Integrating building information modeling (BIM) engines to map 3D construction blueprints with active subcontractor work phases dynamically."
    },
    {
      icon: 'thirdParty',
      title: 'ERP & Sage Accounting Bridges',
      description: "Developing secure billing synchronizations with Sage, QuickBooks, and Procore to manage contractor draws, lien waivers, and purchase orders."
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
      title: 'Compliance & OSHA Safety Audits',
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

const title = "Construction Software Development Services & ConTech Solutions";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "construction software development, construction management software, and offline-first field apps ", bold: true },
  { text: "engineered to provide total visibility across complex job sites. By automating subcontractor task dispatches, integrating BIM 3D models, and deploying IoT equipment telemetry, we help builders prevent budget leaks and ensure safety compliance.", bold: false }
];

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('construction');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Construction Software Development Services & ConTech | Leapsofts",
    defaultDescription: "Leapsofts engineers custom construction management software, offline-first field mobile apps, BIM 3D blueprint integrations, and equipment IoT platforms.",
    defaultKeywords: "construction software development, construction management software, contech software development, bim integration software, offline construction apps",
    canonicalUrl: "https://www.leapsofts.com/industries/construction",
  });
}

const Construction: React.FC = () => {
  const { data } = useIndustryPage('construction');

  const schemaData = buildServiceSchema({
    name: "Construction Software Development Services & ConTech",
    description: "Leapsofts engineers custom construction management software, offline-first field mobile apps, BIM 3D blueprint integrations, and equipment IoT platforms.",
    canonicalUrl: "https://www.leapsofts.com/industries/construction",
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

  const activeRelatedServices = (data?.relatedServices?.items && data.relatedServices.items.length > 0)
    ? data.relatedServices.items
    : [
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
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Build a "}
        titleAccent={data?.strategyCTA?.titleAccent || "stronger"}
        titleEnd={data?.strategyCTA?.titleEnd || " digital foundation."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Construction Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " construction businesses"}
      />
      <FAQs
        title="Construction & ConTech Software FAQ"
        subtitle="Common questions about offline field mobile apps, BIM 3D blueprint integrations, heavy equipment IoT, and ERP accounting sync."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended ConTech Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Construction;

