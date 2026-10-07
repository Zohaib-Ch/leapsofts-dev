import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useIndustryPage } from '../../hooks/useIndustryPage';
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
import FAQs from '../../components/FAQs/FAQs';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO HEALTHCARE",
  title: "Custom software empowering healthcare providers to deliver patient-centric care",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Systematic Workflow Precision',
      description: "From custom clinical charting engines to automated billing workflows, our software eliminates administrative errors, speeds up claims processing, and ensures patient logs are synchronized across all care stations."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Elevated Patient Care',
      description: "Powering telemedicine portals, patient-facing dashboards, and real-time medical IoT device telemetry streams to optimize care paths and clinical decisions."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Strict Regulatory Compliance',
      description: "Guaranteed SOC2 audits, end-to-end data encryption (AES-256 both in transit and at rest), and secure database permissions aligning strictly with HIPAA, HITECH, and HL7 FHIR standards."
    }
  ]
};

const ourTechInnovationsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Healthcare organizations',
  description: 'We create healthcare software that simplifies complexity and drives better outcomes for patients and healthcare professionals. Our solutions support every aspect of healthcare delivery, from clinical workflows to patient communication.',
  items: [
    {
      icon: 'legacy',
      title: 'HL7 FHIR Interoperability',
      description: 'We configure type-safe HL7 FHIR APIs to securely sync patient records across disparate Electronic Health Records (EHR) systems, medical laboratories, and local pharmacy fulfillment pipelines without data loss.'
    },
    {
      icon: 'enterprise',
      title: 'WebRTC Teleconsultations',
      description: 'Designing latency-optimized remote medical consultation rooms using encrypted WebRTC video streaming, patient queuing frameworks, and secure digital prescription integrations.'
    },
    {
      icon: 'thirdParty',
      title: 'IoT Patient Telemetry',
      description: 'Building high-frequency IoT data ingest networks to aggregate live health indicators from wearables and medical monitors directly into clinician monitoring dashboards.'
    },
    {
      icon: 'product',
      title: 'AI-Powered Diagnostics',
      description: 'Integrating advanced machine learning pipelines and visualizers to identify abnormalities in MRI/CT scans and highlight trends in complex laboratory panels.'
    },
    {
      icon: 'saas',
      title: 'EHR & PMS Modernization',
      description: 'Transitioning slow, legacy clinic databases and practice management systems (PMS) to modern, decoupled cloud architectures with zero operational downtime.'
    },
    {
      icon: 'legacy',
      title: 'Zero-Knowledge HIPAA Vaults',
      description: 'Hardening sensitive patient database layers with zero-trust credentials, granular IAM role permission grids, and automated access audit logs.'
    },
    {
      icon: 'product',
      title: 'e-Prescribing Systems (eRx)',
      description: 'Developing safe, electronic prescription software integrated with national drug databases to auto-flag potential contraindications and dosage conflicts.'
    },
    {
      icon: 'enterprise',
      title: 'Claims & Billing Automation',
      description: 'Automating insurance claims verification and clean invoice generation using AI rule engines to dramatically reduce payment rejection rates.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether you're modernizing an ", bold: false },
  { text: "existing healthcare software system ", bold: true },
  { text: "or launching a ", bold: false },
  { text: "new digital patient product", bold: true },
  { text: ", Leapsofts offers a ", bold: false },
  { text: "complimentary software strategy session ", bold: true },
  { text: "designed to deliver value almost immediately. We take the time to understand your medical objectives, technical landscape, and compliance challenges then provide actionable insights on how ", bold: false },
  { text: "bespoke, HIPAA-compliant custom software solutions ", bold: true },
  { text: "can streamline workflows, improve efficiency, and support scalable clinical growth.", bold: false },
];

const title = "Healthcare Software Development, HIPAA Compliance & Patient-Centric Topologies";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we engineer highly secure, fully compliant ", bold: false },
  { text: "healthcare software applications, Electronic Health Records (EHR) integrations, and telemedicine platforms ", bold: true },
  { text: "tailored to the operational complexities of clinical systems. By implementing robust HIPAA and GDPR security baselines, designing intuitive HL7 FHIR interfaces, and establishing safe remote-patient monitoring pipelines, we help medical institutions optimize care delivery and eliminate administrative drag.", bold: false }
];

import { getSanityIndustryBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityIndustryBySlug('healthcare');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Healthcare Software Development Services | Leapsofts",
    defaultDescription: "HIPAA-compliant healthcare software development — EHR, patient portals & telehealth. Leapsofts builds secure digital health solutions. Schedule a consultation.",
    defaultKeywords: "healthcare software development, HIPAA compliant software, EHR software development, digital health solutions",
    canonicalUrl: "https://www.leapsofts.com/industries/healthcare",
  });
}



const Healthcare: React.FC = () => {
  const { data } = useIndustryPage('healthcare');

  const schemaData = buildServiceSchema({
    name: "Healthcare Software Development Services",
    description: "HIPAA-compliant healthcare software development — EHR, patient portals & telehealth.",
    canonicalUrl: "https://www.leapsofts.com/industries/healthcare",
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
        label: data.solutionsSection.label || ourTechInnovationsData.label,
        titleAccent: data.solutionsSection.titleAccent || ourTechInnovationsData.titleAccent,
        titleMain: data.solutionsSection.titleMain || ourTechInnovationsData.titleMain,
        description: data.solutionsSection.description || ourTechInnovationsData.description,
        items: data.solutionsSection.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : ourTechInnovationsData;

  const processTitleMain = data?.processHeader?.titleMain || "Healthcare Product Development";
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
          title: "Cyber Security & HIPAA Compliance",
          description: "Enterprise-grade penetration testing, zero-trust access, and HIPAA compliance auditing.",
          link: "/services/cyber-security"
        },
        {
          title: "Custom Mobile App Development",
          description: "Telehealth apps, remote patient monitoring portals, and secure mobile EHR systems.",
          link: "/services/mobile-app-development"
        },
        {
          title: "Data Science & AI Solutions",
          description: "AI clinical decision support, medical image processing, and predictive diagnostic analytics.",
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
        titleMain={data?.strategyCTA?.titleMain || "Accelerate your "}
        titleAccent={data?.strategyCTA?.titleAccent || "HealthTech"}
        titleEnd={data?.strategyCTA?.titleEnd || " clinical vision."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Healthcare Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.webp"}
      />
      <EmergingTech data={activeSolutionsData} />
      <Services
        label={data?.servicesSection?.label || "OUR CAPABILITIES"}
        titleMain={data?.servicesSection?.titleMain || "How we "}
        titleAccent={data?.servicesSection?.titleAccent || "empower"}
        titleEnd={data?.servicesSection?.titleEnd || " healthcare businesses"}
      />
      <FAQs
        title="Healthcare & Life Sciences Software FAQ"
        subtitle="Common questions about HIPAA compliance, HL7 FHIR integrations, WebRTC telehealth portals, and medical IoT security."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Healthcare Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Healthcare;
