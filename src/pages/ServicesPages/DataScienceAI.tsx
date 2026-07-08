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
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import laptopImg from "../../assets/about_laptop_3d.png";

const ourServicesData: EmergingTechProps['data'] = {
  label: 'AI SERVICES',
  titleAccent: 'AI &',
  titleMain: ' Data Science',
  description:
    'End-to-end AI services designed to unlock insights, improve decision-making, and accelerate intelligent transformation.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Natural Language Processing & LLM Tuning',
      description:
        'Fine-tuning custom LLMs (e.g. Llama-3, Mistral) via LoRA/QLoRA methods and building secure RAG (Retrieval-Augmented Generation) architectures for semantic data retrieval.'
    },
    {
      icon: 'product' as const,
      title: 'Predictive Modeling & Statistical Forecasting',
      description:
        'Designing multi-variable regression, classification, and time-series forecasting scripts using Scikit-Learn, XGBoost, and Prophet to anticipate supply chain and pricing movements.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Computer Vision & Edge Image Processing',
      description:
        'Building high-velocity convolutional networks (CNNs) using PyTorch and YOLO for real-time object identification, video analysis, and quality inspections.'
    },
    {
      icon: 'saas' as const,
      title: 'Distributed Data Processing & Lakehouses',
      description:
        'Orchestrating large-scale data cleansing and aggregation pipelines using Apache Spark, Databricks, and dbt to feed machine learning schemas.'
    },
    {
      icon: 'product' as const,
      title: 'MLOps & Continuous Model Deployment',
      description:
        'Implementing continuous integration for machine learning (CT/CD), registry tracking via MLflow, and high-concurrency model serving on Kubernetes via Triton or BentoML.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Recommendation Engines & User Profiling',
      description:
        'Crafting collaborative and content-based recommendation systems to personalize digital layouts, boosting customer average order value (AOV).'
    }
  ]
};

const processData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'AI Implementation Pathway',
  items: [
    {
      icon: '01',
      title: 'High-Throughput Model Inference',
      description:
        'Guarantee sub-100ms model inference speeds under high transactional request volumes.'
    },
    {
      icon: '02',
      title: 'Algorithmic Bias & Safety Governance',
      description:
        'Enforcing strict model validation controls, feature drift audits, and data privacy safeguards (HIPAA/GDPR).'
    },
    {
      icon: '03',
      title: 'Decoupled Lakehouse Pipelines',
      description:
        'Integrating scalable ETL data extraction that structures dirty enterprise logs cleanly for model training.'
    },
    {
      icon: '04',
      title: 'Robust Real-World MLOps Scaling',
      description:
        'Keeping systems secure and peak-performing via continuous feature tracking, automated drift alerts, and containerized rollouts.'
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

const DataScienceAI: React.FC = () => {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
        label="PREDICTIVE SYSTEMS & APPLIED AI"
        titleMain="Transforming Raw Data into"
        titleAccent="Predictive "
        titleEnd="Intelligence"
        description="At Leapsofts, we bridge the gap between academic AI research and reliable, scalable production systems. By building secure data pipelines inside modern lakehouses (Databricks, Snowflake), training custom deep learning models for NLP and computer vision, and establishing robust MLOps governance gates, we empower enterprises to forecast market trends, automate document analysis, and deploy high-performance generative AI systems with complete algorithmic transparency."
        imagePath={laptopImg}
      />
      <InfoGrid data={processData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="Applied AI"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='Core AI Capabilities'
        description='Every business has different needs. Whether you are building private LLM applications, time-series forecasting, or edge computer vision pipelines, we customize the ML architecture to fit your enterprise.'
        items={defaultItems}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={ourServicesData} />
      <Processes title="OUR Applied AI PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default DataScienceAI;
