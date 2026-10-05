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

const constructionDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR CONSTRUCTION & CONTECH",
  title: "How We Deliver Your ConTech MVP in",
  accentText: "3-5 months",
  description: "Modern construction enterprises require seamless field-to-office communication, robust offline data capture in zero-signal environments, and tight integration with BIM blueprints and financial ERPs. Our specialized ConTech engineering pods develop custom construction management software, offline-first mobile apps, and job-site IoT tracking platforms within 3 to 5 months to eliminate project cost overruns.",
  items: [
    {
      title: "Offline-First Mobile Architecture with Conflict-Free Sync.",
      description: "We engineer SQLite and WatermelonDB offline-first mobile apps that let job-site foremen record daily logs, capture punch-list photos, and log safety audits without cellular service, syncing automatically once reconnected."
    },
    {
      title: "BIM 3D Model & CAD Blueprint Integration.",
      description: "We integrate Autodesk Forge, Revit, and BIM 360 APIs to render interactive 3D building models directly within web and mobile applications for real-time spatial inspections."
    },
    {
      title: "Procore, Autodesk, Sage & QuickBooks ERP Bridges.",
      description: "We build automated data pipelines that reconcile subcontractor AIA billing, change orders, lien waivers, and payroll hours with your central accounting and project ERPs."
    },
    {
      title: "Job-Site IoT Telemetry & Heavy Equipment Tracking.",
      description: "We connect GPS geofencing, engine hour meters, and vibration sensors to monitor heavy machinery utilization, prevent tool theft, and schedule predictive maintenance."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do your construction mobile apps function when job sites have zero internet connectivity?",
    answer: "We engineer offline-first mobile applications using local embedded databases (SQLite/WatermelonDB) and CRDT-based synchronization algorithms. Foremen can log punch lists, capture high-res progress photos, and submit safety audits offline; the app automatically uploads and reconciles data as soon as connectivity is restored."
  },
  {
    question: "Can your custom construction software integrate with Procore, Autodesk Construction Cloud, or Sage?",
    answer: "Yes. We build bidirectional integrations using REST and GraphQL APIs to sync project drawings, RFIs, submittals, AIA billing sheets, and cost codes directly with Procore, Autodesk BIM 360, Sage 300 CRE, and QuickBooks Enterprise."
  },
  {
    question: "How do you handle 3D BIM model rendering on mobile and web devices?",
    answer: "We leverage WebGL, Three.js, and Autodesk Platform Services (APS/Forge) to render lightweight, interactive 3D BIM models directly inside browsers and tablet applications without requiring heavy desktop CAD installations."
  },
  {
    question: "How do your ConTech platforms help general contractors manage subcontractor compliance and lien waivers?",
    answer: "We build dedicated subcontractor portals that automate insurance certificate verification (COIs), digital lien waiver signing, W-9 collection, and milestone draw approvals before payments are released."
  }
];

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
    defaultKeywords: "construction software development, contech software development company, construction management software, bim 3d modeling software integration, offline construction field app, jobsite management software, procore api integration, construction estimating software, submittal rfi workflow automation, construction punch list app, equipment fleet tracking software, contractor project management platform",
    canonicalUrl: "https://www.leapsofts.com/industries/construction",
  });
}

const Construction: React.FC = () => {
  const { data } = useIndustryPage('construction');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/construction";
  const schemaData = buildIndustrySchema({
    name: "Construction Software Development Services",
    description: "Custom construction management software — BIM integrations, project tracking, and workforce management.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Construction & Real Estate",
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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || constructionDeliverMVPData.label,
        title: data.deliverMVP.title || constructionDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || constructionDeliverMVPData.accentText,
        description: data.deliverMVP.description || constructionDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : constructionDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Construction Product Development";
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
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended ConTech Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Construction;

