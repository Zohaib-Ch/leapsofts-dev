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
  subtitle: "OUR COMMITMENT TO EDUCATIONAL INSTITUTIONS",
  title: "Secure, scalable, and student-centered digital solutions",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Seamless Off-Campus Access',
      description: "Designing secure WebRTC classrooms and low-bandwidth asset pipelines that permit students and faculty to access live lectures, rich media catalogs, and team projects from any device."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'AI Personalized Learning',
      description: "Development of predictive e-learning paths, interactive self-paced study dashboards, and AI-driven conversational tutoring models that customize lesson difficulty in real-time."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'FERPA & COPPA Data Safety',
      description: "Enforcing bulletproof security networks that comply with FERPA and COPPA student privacy regulations, leveraging zero-trust databases and encrypted file logs."
    }
  ]
};

const educationSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'EdTech & Learning',
  description: 'We partner with educators and institutions to foster secure, dynamic digital learning environments that empower students and optimize administrative workflows.',
  items: [
    {
      icon: 'legacy',
      title: 'Custom LMS Platforms',
      description: "Building scalable, multi-tenant learning management systems featuring modular curriculum builders, interactive quiz engines, and real-time student gradebooks."
    },
    {
      icon: 'enterprise',
      title: 'AI Curriculum Assistants',
      description: "Integrating intelligent NLP models to assist educators in automating syllabus drafts, lesson plans creation, and state standards alignments in seconds."
    },
    {
      icon: 'thirdParty',
      title: 'Collaborative Student Portals',
      description: "Developing responsive portal directories featuring instant messaging corridors, class notice boards, and unified parent-teacher tracking dashboards."
    },
    {
      icon: 'saas',
      title: 'Rich Content Delivery (CDN)',
      description: "Optimizing media delivery networks to distribute high-fidelity video tutorials, interactive e-textbooks, and smart assignments with zero latency."
    },
    {
      icon: 'product',
      title: 'AI Adaptive Learning Engines',
      description: "Structuring machine learning algorithms that track individual student test scores to customize future lessons, quizzes, and homework topics dynamically."
    },
    {
      icon: 'mobile',
      title: 'Secure Campus VDI Networks',
      description: "Configuring secure virtual desktop infrastructures (VDI) to let engineering and design students run heavy GPU lab software remotely inside browser windows."
    },
    {
      icon: 'product',
      title: 'Automated Proctoring Ports',
      description: "Designing low-overhead online examination environments with custom lock-down browsers, automated tab-switching alerts, and webcam anomaly logs."
    },
    {
      icon: 'enterprise',
      title: 'Tuition Billing & Stripe Gates',
      description: "Integrating secure payment rails for tuition installments, study material microtransactions, and automated financial aid disbursement tracking."
    }
  ]
};

const streamlineDescription = [
  { text: "Enhance your ", bold: false },
  { text: "educational delivery ", bold: true },
  { text: "with the right technology stack. Leapsofts offers a ", bold: false },
  { text: "complimentary EdTech strategy session ", bold: true },
  { text: "to help you design a ", bold: false },
  { text: "digital learning ecosystem ", bold: true },
  { text: "that ensures student success and administrative efficiency.", bold: false },
];

const title = "EdTech Software Development, Custom LMS Platforms & AI Personalized Learning";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-scale ", bold: false },
  { text: "EdTech software development services, eLearning platform development, and custom LMS solutions ", bold: true },
  { text: "engineered to elevate student engagement and streamline administrative lifecycles. By integrating FERPA/COPPA privacy vaults, virtual classroom media pipelines, and AI adaptive learning models, we power global EdTech innovation.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('edtech');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "EdTech Software Development Services | Leapsofts",
    defaultDescription: "Custom eLearning & EdTech software development — LMS, mobile learning apps & virtual classrooms. Leapsofts builds scalable education platforms. Start building.",
    defaultKeywords: "EdTech software development, eLearning platform development, LMS development company, education app development",
    canonicalUrl: "https://www.leapsofts.com/industries/edtech",
  });
}



const Education: React.FC = () => {
  const { data } = useIndustryPage('education');

  const schemaData = buildServiceSchema({
    name: "EdTech Software Development Services",
    description: "Custom eLearning & EdTech software development — LMS, mobile learning apps & virtual classrooms.",
    canonicalUrl: "https://www.leapsofts.com/industries/edtech",
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
        label: data.solutionsSection.label || educationSolutionsData.label,
        titleAccent: data.solutionsSection.titleAccent || educationSolutionsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || educationSolutionsData.titleMain,
        description: data.solutionsSection.description || educationSolutionsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : educationSolutionsData;

  const processTitleMain = data?.processHeader?.titleMain || "EdTech Product Development";
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
        titleEnd=" educational institutions"
      />
      <RelatedServices
        services={[
          {
            title: "Web App Development",
            description: "Build custom multi-tenant LMS portals and interactive student dashboards.",
            link: "/services/web-app-development"
          },
          {
            title: "Mobile App Development",
            description: "Engineer native iOS & Android mobile learning applications.",
            link: "/services/mobile-app-development"
          },
          {
            title: "Data Science & AI Solutions",
            description: "Integrate predictive student progress analytics and NLP tutoring bots.",
            link: "/services/data-science-ai"
          }
        ]}
      />
    </>
  );
};

export default Education;
