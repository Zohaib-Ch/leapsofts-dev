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

export function meta() {
  const title = "EdTech Software Development Services | Leapsofts";
  const description = "Custom eLearning & EdTech software development — LMS, mobile learning apps & virtual classrooms. Leapsofts builds scalable education platforms. Start building.";
  const keywords = "EdTech software development, eLearning platform development, LMS development company, education app development";
  const canonicalUrl = "https://www.leapsofts.com/industries/edtech";

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
      "name": "EdTech Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "EdTech & LMS Software Development",
      "description": "Custom eLearning & EdTech software development — LMS, mobile learning apps & virtual classrooms."
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
          "name": "EdTech & Education",
          "item": "https://www.leapsofts.com/industries/edtech"
        }
      ]
    }
  ]
};

const Education: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "EdTech Solution Development",
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
        titleMain="Learning "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={educationSolutionsData} />
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
