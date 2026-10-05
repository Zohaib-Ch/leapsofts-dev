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

const edtechDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR EDTECH & LEARNING",
  title: "How We Deliver Your EdTech MVP in",
  accentText: "3-5 months",
  description: "Educational technology demands rich interactive multimedia delivery, uncompromising student privacy compliance, and interoperability with established academic standards. Our specialized EdTech engineering pods build custom LMS platforms, AI-driven adaptive learning tutors, and interactive WebRTC virtual classrooms in 3 to 5 months while ensuring full FERPA, COPPA, and GDPR compliance.",
  items: [
    {
      title: "SCORM, xAPI & LTI 1.3 Interoperability.",
      description: "We engineer seamless integrations with Canvas, Blackboard, Moodle, and Google Classroom, adhering to IMS Global and 1EdTech interoperability standards."
    },
    {
      title: "FERPA & COPPA-Compliant Student Data Vaults.",
      description: "We implement zero-knowledge encryption, strict parental consent gates, anonymized telemetry, and automated data deletion workflows to protect minor student privacy."
    },
    {
      title: "Low-Latency WebRTC & Interactive Virtual Classrooms.",
      description: "We build browser-based virtual classrooms featuring real-time whiteboards, breakout rooms, screen sharing, and adaptive bitrate video optimized for low-bandwidth regions."
    },
    {
      title: "AI-Powered Adaptive Learning & Automated Grading.",
      description: "We integrate custom machine learning pipelines that assess individual student mastery, adjust quiz difficulty on the fly, and assist educators with instant rubric-based grading."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you ensure student privacy and compliance with FERPA and COPPA regulations?",
    answer: "We design privacy-by-design architectures that segregate student identifiable information (PII) using AES-256 encryption, verifiable parental consent verification workflows, strict role-based access controls (RBAC), and automated data retention and purge schedules."
  },
  {
    question: "Can your custom LMS integrate with existing academic platforms like Canvas, Blackboard, or Moodle?",
    answer: "Yes. We build interoperable systems using LTI 1.3 (Learning Tools Interoperability), OneRoster, Caliper Analytics, SCORM 2004, and xAPI (Tin Can API) to ensure two-way synchronization of rosters, assignments, and grades with all major LMS ecosystems."
  },
  {
    question: "How do your virtual classroom applications perform under low-bandwidth conditions?",
    answer: "We utilize adaptive bitrate WebRTC media pipelines, audio-first prioritization algorithms, and selective forwarding units (SFUs). This ensures that live lectures and collaborative whiteboards remain crystal clear even for students on slow cellular or rural connections."
  },
  {
    question: "How can AI be integrated into our e-learning platform responsibly?",
    answer: "We build guardrailed AI features such as personalized Socratic tutors, automated diagnostic assessment generators, and smart plagiarism/AI-content indicators that support educators without hallucinating inaccurate academic content."
  }
];

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

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('edtech');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "EdTech Software Development Services | Leapsofts",
    defaultDescription: "Custom eLearning & EdTech software development — LMS, mobile learning apps & virtual classrooms. Leapsofts builds scalable education platforms. Start building.",
    defaultKeywords: "edtech software development, elearning platform development company, custom lms development, learning management system development, scorm compliant software, xapi integration services, lti 1.3 canvas moodle integration, ai personalized learning platform, virtual classroom webrtc development, student information system sis, interactive quiz assessment software, ferpa coppa compliant software",
    canonicalUrl: "https://www.leapsofts.com/industries/edtech",
  });
}

const Education: React.FC = () => {
  const { data } = useIndustryPage('edtech');
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/edtech";
  const schemaData = buildIndustrySchema({
    name: "EdTech Software Development Services",
    description: "Custom education technology software — LMS platforms, student portals, e-learning tools.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Education & EdTech",
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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || edtechDeliverMVPData.label,
        title: data.deliverMVP.title || edtechDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || edtechDeliverMVPData.accentText,
        description: data.deliverMVP.description || edtechDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : edtechDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "EdTech Product Development";
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
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent title={activeTitle} description={activeSubtitle} introDescription={activeIntroDescription} />
      <CommitmentSection data={activeCommitmentData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Transform your "}
        titleAccent={data?.strategyCTA?.titleAccent || "EdTech"}
        titleEnd={data?.strategyCTA?.titleEnd || " learning platform."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim EdTech Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " educational institutions"}
      />
      <FAQs
        title="EdTech & Learning Platforms FAQ"
        subtitle="Common questions about FERPA/COPPA compliance, custom LMS standards (LTI 1.3/SCORM), AI adaptive learning engines, and online proctoring security."
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended EdTech Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Education;
