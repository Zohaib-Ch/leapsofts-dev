import { buildPageMeta, buildIndustrySchema } from '../../utils/seoHelper';
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
import type { DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP';

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

const healthcareDeliverMVPData: DeliverMVPProps['data'] = {
  label: "WHY CHOOSE LEAPSOFTS FOR HEALTHTECH",
  title: "How We Deliver Your HealthTech MVP in",
  accentText: "3-5 months",
  description: "Engineering digital health platforms requires a strict convergence of medical workflow precision, bulletproof patient data security, and agile execution speed. Our specialized HealthTech engineering pods follow proven HIPAA blueprints, deploying HL7/FHIR interoperability, telehealth video streams, and EHR connectors to launch production-grade clinical MVPs within 3 to 5 months.",
  items: [
    {
      title: "HIPAA, HITECH & SOC2 Type II Compliance.",
      description: "From sprint one, we enforce encrypted PHI storage (AES-256), TLS 1.3 in-transit security, signed BAA agreements, and automated audit logging to guarantee zero compliance exposure."
    },
    {
      title: "HL7 FHIR & Bidirectional EHR/EMR Sync.",
      description: "We build standardized FHIR REST APIs and bidirectional connectors for Epic Systems, Cerner, Athenahealth, and Allscripts, ensuring frictionless clinical interoperability."
    },
    {
      title: "Encrypted Telehealth & Real-Time IoT Telemetry.",
      description: "We architect low-latency WebRTC video consultation rooms, dynamic patient waiting queues, and high-frequency Bluetooth/cellular medical IoT device ingest pipelines."
    },
    {
      title: "FDA SaMD & Clinical Workflow Validation.",
      description: "We follow ISO 13485 and IEC 62304 software lifecycle standards, providing comprehensive traceability documentation for Software as a Medical Device (SaMD) clearances."
    }
  ]
};

const fallbackFaqs = [
  {
    question: "How do you ensure HIPAA compliance when developing custom medical software?",
    answer: "We sign a Business Associate Agreement (BAA), implement role-based access controls (RBAC), enforce AES-256 encryption for data at rest and in transit, configure immutable audit trails, and conduct third-party penetration testing before deployment."
  },
  {
    question: "Can your team integrate with our existing EHR/EMR systems like Epic or Cerner?",
    answer: "Yes. We specialize in building HL7 FHIR-compliant API middleware and SMART on FHIR applications that seamlessly synchronize patient demographics, clinical notes, and lab results with Epic, Cerner, Athenahealth, and legacy practice management systems."
  },
  {
    question: "What protocols do you use for secure telemedicine and remote patient monitoring?",
    answer: "We utilize end-to-end encrypted WebRTC for low-latency peer-to-peer and SFU video consultations, coupled with MQTT/WebSocket protocols for streaming real-time vitals from medical IoT wearables and remote patient monitoring (RPM) hubs."
  },
  {
    question: "Do you support FDA Software as a Medical Device (SaMD) regulatory pathways?",
    answer: "Yes. Our engineering pods follow ISO 13485, IEC 62304, and FDA design control guidelines, creating rigorous verification and validation (V&V) test suites and cybersecurity documentation required for 510(k) submissions."
  }
];

const streamlineDescription = [
  { text: "Whether modernizing an ", bold: false },
  { text: "existing healthcare software system ", bold: true },
  { text: "or launching a ", bold: false },
  { text: "new digital patient product", bold: true },
  { text: ", Leapsofts offers a ", bold: false },
  { text: "complimentary software strategy session ", bold: true },
  { text: "designed to deliver value almost immediately. We assess your medical workflows, review HIPAA/FHIR compliance requirements, and provide actionable blueprints on how ", bold: false },
  { text: "bespoke, HIPAA-compliant custom software solutions ", bold: true },
  { text: "can streamline clinical operations and accelerate patient care delivery.", bold: false },
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
    defaultDescription: "HIPAA-compliant healthcare software development — EHR integrations, patient portals & telehealth platforms. Leapsofts builds secure digital health solutions.",
    defaultKeywords: "healthcare software development, hipaa compliant software development, custom healthcare software company, ehr integration services, hl7 fhir api integration, telehealth app development, patient portal software development, remote patient monitoring software, medical practice management software, dicom imaging viewer development, e-prescribing epcs software, clinical workflow automation, digital health software engineering",
    canonicalUrl: "https://www.leapsofts.com/industries/healthcare",
  });
}

const Healthcare: React.FC = () => {
  const { data } = useIndustryPage('healthcare');

  const activeFaqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : fallbackFaqs;

  const schemaCanonicalUrl = "https://www.leapsofts.com/industries/healthcare";
  const schemaData = buildIndustrySchema({
    name: "Healthcare & Life Sciences Software Development Services",
    description: "HIPAA-compliant healthcare software development — EHR, patient portals & telehealth.",
    canonicalUrl: schemaCanonicalUrl,
    industryName: "Healthcare & Life Sciences",
    faqs: activeFaqs,
  });
  const { setProcessTitle, setDeliverMVPData } = useOutletContext<IndustriesContextType>();

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

  const activeDeliverMVPData: DeliverMVPProps['data'] = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || healthcareDeliverMVPData.label,
        title: data.deliverMVP.title || healthcareDeliverMVPData.title,
        accentText: data.deliverMVP.accentText || healthcareDeliverMVPData.accentText,
        description: data.deliverMVP.description || healthcareDeliverMVPData.description,
        items: data.deliverMVP.items.map(item => ({
          title: item.title,
          description: item.description
        }))
      }
    : healthcareDeliverMVPData;

  const processTitleMain = data?.processHeader?.titleMain || "Healthcare Product Development";
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
        faqs={activeFaqs} items={activeFaqs}
      />
      <RelatedServices
        title={data?.relatedServices?.title || "Recommended Healthcare Software Services"}
        services={activeRelatedServices}
      />
    </>
  );
};

export default Healthcare;
