import { buildPageMeta, buildServiceSchema } from '../../utils/seoHelper';
import { useServicePage } from '../../hooks/useServicePage';
import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes from '../../components/Processes/Processes';
import { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import FAQs from '../../components/FAQs/FAQs';
import { parseFormattedText } from '../../utils/textParser';
const laptopImg = "https://cdn.sanity.io/images/egqy3ztp/production/40281c9c0b62835bf679122eb535feb8aef2fd24-1200x896.webp";

const ourServicesData: EmergingTechProps['data'] = {
  label: 'DATA SCIENCE & AI DEVELOPMENT SERVICES',
  titleAccent: 'Enterprise Artificial Intelligence',
  titleMain: ' & Machine Learning Solutions',
  description:
    'End-to-end custom AI development services, machine learning models, and Generative AI solutions engineered to automate decisions and unlock enterprise data value.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Generative AI & Custom LLM Fine-Tuning',
      description:
        'Fine-tuning open-source Large Language Models (LLMs like Llama 3 & Mistral) using LoRA/QLoRA techniques and building secure Retrieval-Augmented Generation (RAG) vector architectures.'
    },
    {
      icon: 'product' as const,
      title: 'Predictive Modeling & Machine Learning',
      description:
        'Engineering multi-variable predictive regression, classification, and time-series forecasting models using Scikit-Learn, PyTorch, and XGBoost to predict demand and revenue.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Computer Vision & Real-Time Image AI',
      description:
        'Building high-velocity Convolutional Neural Networks (CNNs) using PyTorch and YOLO for real-time object detection, automated visual inspection, and video analytics.'
    },
    {
      icon: 'saas' as const,
      title: 'Enterprise Data Lakehouses & ETL Pipelines',
      description:
        'Orchestrating high-scale data pipeline engineering using Apache Spark, Databricks, Snowflake, and dbt to feed clean structured data into machine learning models.'
    },
    {
      icon: 'product' as const,
      title: 'MLOps & Automated Model Deployment',
      description:
        'Implementing continuous training (CT/CD), model registry tracking via MLflow, and high-concurrency inference API serving on Kubernetes using Triton Inference Server.'
    },
    {
      icon: 'enterprise' as const,
      title: 'AI Recommendation Engines & Personalization',
      description:
        'Building collaborative and content-based AI recommendation systems to personalize digital product experiences and boost customer retention.'
    }
  ]
};

const processData: InfoGridProps['data'] = {
  label: 'ENTERPRISE AI ADVANTAGES',
  title: 'Why Top Brands Build Production AI Systems with Leapsofts',
  items: [
    {
      icon: '01',
      title: 'Sub-100ms Model Inference Speeds',
      description:
        'Guarantee low-latency, real-time AI model inference performance under high-concurrency API query traffic.'
    },
    {
      icon: '02',
      title: 'Algorithmic Safety & SOC2/HIPAA Governance',
      description:
        'Enforcing strict model validation gates, data anonymization, bias auditing, and compliance safeguards (HIPAA, GDPR, SOC2).'
    },
    {
      icon: '03',
      title: 'Decoupled Cloud Lakehouse Data Pipelines',
      description:
        'Integrating scalable ETL data pipelines that transform unstructured enterprise logs into clean, vectorized training datasets.'
    },
    {
      icon: '04',
      title: 'Automated MLOps Drift & Model Monitoring',
      description:
        'Sustaining accuracy over time via automated data drift alerts, continuous feature monitoring, and zero-downtime model updates.'
    }
  ]
};

const defaultItems: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Bespoke LLM Fine-Tuning',
    description: 'Adapting open-source foundational models to specific company datasets using PEFT/LoRA techniques.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'RAG Database Systems',
    description: "Constructing highly accurate vector databases (Pinecone, pgvector) to enable context-aware AI query actions."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Computer Vision Architectures',
    description: "Setting up custom PyTorch pipelines to process visual feeds, locate anomalies, and index images."
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'High-Scale Feature Stores',
    description: "Configuring centralized feature registries (Feast) to share structured training records across multiple active ML models."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Distributed Data Wrangling',
    description: "Deploying PySpark and Databricks clusters to parse, transform, and clean multi-terabyte raw datasets."
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Inference API Optimization',
    description: "Packaging trained models inside lightweight Docker containers optimized for high-velocity API access."
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Continuous Model Monitoring',
    description: "Installing automated monitoring tools to track data drift, conceptual changes, and accuracy drops in production."
  },
];

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: DATA PROFILING & USE-CASE ALIGNMENT",
    title: "Needs Maturity & Data Auditing",
    description:
      "We analyze database cardinality, clean missing entries, and audit data bias risk parameters.",
    features: [
      {
        title: "Active Data Quality Auditing",
        description:
          "Parse customer history logs, catalog matrices, and relational tables to evaluate feature density."
      },
      {
        title: "Model Output Scoping",
        description:
          "Coordinate with team leads to define target conversion metrics (F1-score, accuracy) and prediction boundaries."
      },
      {
        title: "Tech Stack & MLOps Blueprinting",
        description:
          "Select optimal frameworks (PyTorch, TensorFlow, Hugging Face), vector DBs, and sandbox deployment roadmaps."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: MODEL ARCHITECTURE & RAG PIPELINE DESIGN",
    title: "Feature Pipelines & Vector Schemas",
    description:
      "Designing vector databases, chunking parameters, and high-concurrency ingestion schedules.",
    features: [
      {
        title: "Custom RAG Database Schemas",
        description:
          "Configure secure vector indexes (HNSW, flat) inside pgvector or Pinecone for context-aware queries."
      },
      {
        title: "Continuous Ingestion Pipelines",
        description:
          "Design real-time Apache Spark ETL jobs to clean, transform, and extract inputs into Feast Feature Stores."
      },
      {
        title: "Data Security Profiling",
        description:
          "Set up field-level encryption, role mappings, and anonymization pipelines to secure training records."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY MODEL TRAINING & TUNING",
    title: "Agile Model Training & ATF Validation",
    description:
      "Iterative training, hyperparameter optimization, and strict evaluation validations in agile sprints.",
    features: [
      {
        title: "Distributed Model Training Sprints",
        description:
          "Train neural networks, tune weights, and adjust deep learning layers using GPU-accelerated cloud nodes."
      },
      {
        title: "Strict Performance Verification",
        description:
          "Run regression tests and validation matrices against test sets to verify accuracy and avoid overfitting issues."
      },
      {
        title: "Inference API Packaging",
        description:
          "Package trained models inside lightweight Docker containers using FastAPI or Triton Server frameworks."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: MLOPS INFERENCE & SYSTEM EVOLUTION",
    title: "Model Server Deployments & Retraining Hubs",
    description:
      "Seamless Kubernetes API rollouts, continuous drift tracking, and automated retraining pipelines.",
    features: [
      {
        title: "Scalable Model Serving Rollouts",
        description:
          "Deploy custom inference APIs on secure Kubernetes clusters equipped with automated scaling triggers."
      },
      {
        title: "Real-Time Accuracy Monitoring",
        description:
          "Configure automated alerts to track data drift, conceptual changes, and accuracy anomalies in live traffic."
      },
      {
        title: "Automated Retraining Integration",
        description:
          "Deploy orchestration scripts to trigger automatic model retraining cycles utilizing newly updated active databases."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "RAG & PIPELINE DESIGN",
  "MODEL TRAINING & TUNING",
  "MLOPS INFERENCE & GOVERNANCE",
];

const deliverMVPData = {
  label: "WHY CHOOSE LEAPSOFTS",
  title: "Why Choose Leapsofts for",
  accentText: "Data Science & AI Services",
  description: "Leapsofts is an elite custom machine learning and applied AI partner. By combining fully integrated CI/CD, certified data scientists, and dedicated MLOps engineering pods, we build and deploy enterprise-ready AI models within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "Rigorous Data Auditing.",
      description: "Performing extensive data health audits, source profiling, and cardinality checks before training any model."
    },
    {
      title: "Scalable MLOps Architectures.",
      description: "Building resilient model registries and serving pipelines using Docker, MLflow, and Kubernetes."
    },
    {
      title: "Advanced Deep Learning Stack.",
      description: "Writing optimized algorithms using Python, PyTorch, TensorFlow, and Hugging Face libraries."
    },
    {
      title: "Continuous Accuracy Tracking.",
      description: "Configuring automated drift tracking systems to verify model prediction health in live production."
    }
  ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new applied AI model", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current datasets, map out machine learning parameters, evaluate feature registries, and formulate a ", bold: false },
  { text: "highly efficient, optimized MLOps engineering plan ", bold: true },
  { text: "built to unlock massive predictive growth and streamline data retention.", bold: false }
];

const title = "Enterprise Data Science & Applied AI Engineering";
const subtitle = "";

const introDescription = [
  { text: "We engineer production-grade machine learning pipelines, custom ", bold: false },
  { text: "Large Language Model (LLM) fine-tuning configurations", bold: true },
  { text: ", and predictive analytics algorithms. By combining high-velocity Apache Spark data processing with robust MLOps orchestration (MLflow, Triton Server), we help organizations deploy resilient AI systems that automate decision mechanics and optimize user actions.", bold: false }
]

import { getSanityServiceBySlug } from '../../sanity/queries';

export async function loader() {
  const sanityData = await getSanityServiceBySlug('data-science-ai');
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  return buildPageMeta({
    sanityData: data?.sanityData,
    defaultTitle: "Data Science & AI Development Services | Leapsofts",
    defaultDescription: "AI & data science solutions for enterprises. Leapsofts builds ML models, AI integrations & data pipelines to automate decisions. Schedule a consultation.",
    defaultKeywords: "AI development company, data science services, machine learning development, AI integration services, artificial intelligence solutions",
    canonicalUrl: "https://www.leapsofts.com/services/data-science-ai",
  });
}



const DataScienceAI: React.FC = () => {
  const { data } = useServicePage('data-science-ai');

  const schemaData = buildServiceSchema({
    name: "Data Science & AI Development Services",
    description: "AI & data science solutions for enterprises. Leapsofts builds ML models, AI integrations & data pipelines.",
    canonicalUrl: "https://www.leapsofts.com/services/data-science-ai",
    faqs: data?.faqs,
  });

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof processData !== 'undefined' ? processData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof processData !== 'undefined' ? processData.title : ''),
        description: data.infoGrid.description || (typeof processData !== 'undefined' ? processData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof processData !== 'undefined' ? processData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof ourServicesData !== 'undefined' ? ourServicesData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof ourServicesData !== 'undefined' ? ourServicesData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof ourServicesData !== 'undefined' ? ourServicesData.titleMain : ''),
        description: data.emergingTech.description || (typeof ourServicesData !== 'undefined' ? ourServicesData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof ourServicesData !== 'undefined' ? ourServicesData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.label : ''),
        title: data.deliverMVP.title || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.title : ''),
        accentText: data.deliverMVP.accentText || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.accentText : ''),
        description: data.deliverMVP.description || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.description : ''),
        items: data.deliverMVP.items || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.items : [])
      }
    : (typeof deliverMVPData !== 'undefined' ? deliverMVPData : { label: '', title: '', accentText: '', description: '', items: [] });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? parseFormattedText(data.hero.introText)
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || "DATA SCIENCE & AI",
        titleMain: data.serviceOverview.titleMain || "Transforming Raw ",
        titleAccent: data.serviceOverview.titleAccent || "Enterprise Data ",
        titleEnd: data.serviceOverview.titleEnd || "into Real-Time Intelligence",
        description: data.serviceOverview.description || "At Leapsofts, we bridge the gap between academic AI research and reliable, scalable production systems. By building secure data pipelines inside modern lakehouses (Databricks, Snowflake), training custom deep learning models for NLP and computer vision, and establishing robust MLOps governance gates, we empower enterprises to forecast market trends, automate document analysis, and deploy high-performance generative AI systems with complete algorithmic transparency.",
        imagePath: data.serviceOverview.imageUrl || laptopImg
      }
    : null;

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
      <ServiceOverview
        label={activeOverviewData?.label || "DATA SCIENCE & AI"}
        titleMain={activeOverviewData?.titleMain || "Transforming Raw "}
        titleAccent={activeOverviewData?.titleAccent || "Enterprise Data "}
        titleEnd={activeOverviewData?.titleEnd || "into Real-Time Intelligence"}
        description={activeOverviewData?.description || "At Leapsofts, we bridge the gap between academic AI research and reliable, scalable production systems. By building secure data pipelines inside modern lakehouses (Databricks, Snowflake), training custom deep learning models for NLP and computer vision, and establishing robust MLOps governance gates, we empower enterprises to forecast market trends, automate document analysis, and deploy high-performance generative AI systems with complete algorithmic transparency."}
        imagePath={activeOverviewData?.imagePath || laptopImg}
      />
      <InfoGrid data={activeInfoGridData} />
      <StreamlineSuccess
        label={data?.strategyCTA?.label || "COMPLIMENTARY STRATEGY SESSION"}
        titleMain={data?.strategyCTA?.titleMain || "Map your "}
        titleAccent={data?.strategyCTA?.titleAccent || "Applied AI"}
        titleEnd={data?.strategyCTA?.titleEnd || " roadmap."}
        description={data?.strategyCTA?.descriptionText ? [{ text: data.strategyCTA.descriptionText, bold: false }] : streamlineDescription}
        buttonText={data?.strategyCTA?.buttonText || "Claim Strategy Session"}
        buttonPath={data?.strategyCTA?.buttonPath || "#contact"}
        imageUrl={data?.strategyCTA?.imageUrl || "/streamline.png"}
      />
      <ServiceFeatures
        title={data?.serviceFeatures?.title || 'Core AI Capabilities'}
        description={data?.serviceFeatures?.description || 'Every business has different needs. Whether you are building private LLM applications, time-series forecasting, or edge computer vision pipelines, we customize the ML architecture to fit your enterprise.'}
        items={data?.serviceFeatures?.items || defaultItems}
      />
      <DeliverMVP data={activeDeliverMVPData} />
      <EmergingTech data={activeEmergingTechData} />
      <Processes
        title={data?.processes?.title || "OUR Applied AI PROCESS"}
        processPhases={activeProcessPhases}
        phaseLabels={activePhaseLabels}
      />
      <FAQs
        title="Data Science & AI Development FAQ"
        subtitle="Everything you need to know about LLM fine-tuning, RAG vector architectures, predictive models, MLOps, and algorithmic data security."
        faqs={data?.faqs} items={data?.faqs}
      />
      <RelatedServices
        services={[
          {
            title: "Data Governance Services",
            description: "Build robust compliance frameworks, audit trails, and data security policies for AI models.",
            link: "/services/data-governance"
          },
          {
            title: "Custom Software Development",
            description: "Integrate predictive ML models and custom AI algorithms directly into core enterprise software.",
            link: "/services/custom-software-development"
          },
          {
            title: "Cloud Engineering & Architecture",
            description: "Design high-throughput, elastic cloud environments to host scalable machine learning workloads.",
            link: "/services/cloud-engineering"
          }
        ]}
      />
    </>
  );
};

export default DataScienceAI;
