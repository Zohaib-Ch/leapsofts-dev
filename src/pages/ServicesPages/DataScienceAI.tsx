import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import Capabilities from '../../components/Capabilities/Capabilities';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';
import platformImg from '../../assets/capabilities_platform.png';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
const ourServicesData: EmergingTechProps['data'] = {
  label: 'AI SERVICES',
  titleAccent: 'AI',
  titleMain: ' Pathway',
  description:
    'End-to-end AI services designed to unlock insights, improve decision-making, and accelerate intelligent transformation.',
  items: [
    {
      icon: 'enterprise',
      title: 'Analytics & Strategic Insight',
      description:
        'Scale your analytics with a data-centric strategy for tangible business impact.'
    },
    {
      icon: 'product',
      title: 'Enhanced Data Exploration',
      description:
        'Broaden customer understanding using additional data sources and predictive insights.'
    },
    {
      icon: 'enterprise',
      title: 'Strategic Data Handling',
      description:
        'Ensure governance, profitability, and regulatory compliance beyond data integration.'
    },
    {
      icon: 'saas',
      title: 'Empowering Data Utilization',
      description:
        'Equip teams with intuitive tools to harness data effectively and adopt AI smoothly.'
    },
    {
      icon: 'product',
      title: 'Ready-Made & Custom AI Solutions',
      description:
        'Leverage ready-to-deploy AI solutions or opt for bespoke services tailored to your needs.'
    },
    {
      icon: 'enterprise',
      title: 'Analytics & Strategic Insight',
      description:
        'Scale your analytics with a data-centric strategy for tangible business impact.'
    },
    {
      icon: 'product',
      title: 'Enhanced Data Exploration',
      description:
        'Broaden customer understanding using additional data sources and predictive insights.'
    },
    {
      icon: 'enterprise',
      title: 'Strategic Data Handling',
      description:
        'Ensure governance, profitability, and regulatory compliance beyond data integration.'
    },
    {
      icon: 'saas',
      title: 'Empowering Data Utilization',
      description:
        'Equip teams with intuitive tools to harness data effectively and adopt AI smoothly.'
    },
    {
      icon: 'product',
      title: 'Ready-Made & Custom AI Solutions',
      description:
        'Leverage ready-to-deploy AI solutions or opt for bespoke services tailored to your needs.'
    }
  ]
};
const processData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'AI Implementation Pathway',
  items: [
    {
      icon: '01',
      title: 'Cloud & Edge-First Strategy',
      description:
        'Adopt a cloud-native, edge-centric methodology for sustained efficiency and immediate responsiveness.'
    },
    {
      icon: '02',
      title: 'ML Model Creation',
      description:
        'Craft powerful machine learning models for optimal outcomes and improved functionality.'
    },
    {
      icon: '03',
      title: 'AI-Driven Big Data',
      description:
        'Conceptualize, build, and implement big data infrastructures enhanced by AI.'
    },
    {
      icon: '04',
      title: 'Accelerating AI Adoption',
      description:
        'Identify business use cases and opportunities, and define a strategic AI adoption roadmap.'
    },
    {
      icon: '05',
      title: 'Seamless AI Integrations',
      description:
        'Enable system connectivity through integrations with AI-ready'
    }
  ]
}
const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'advanced-data',
    number: '< 01 >',
    title: 'Advanced Data',
    image: capabilitiesImg,
    items: [
      {
        name: 'Data Integration & Preparation',
        description:
          'Combine, clean, and prepare data from multiple sources for reliable analytics and AI readiness.'
      },
      {
        name: 'Custom Analytics (ML/DL)',
        description:
          'Build tailored machine learning and deep learning solutions for data-driven decision-making.'
      },
      {
        name: 'Predictive Modeling & Forecasting',
        description:
          'Anticipate trends and outcomes using advanced AI-powered forecasting techniques.'
      },
      {
        name: 'Dashboards & Visualizations',
        description:
          'Transform complex data into intuitive dashboards for faster insights.'
      }
    ]
  },
  {
    id: 'generative-ai',
    number: '< 02 >',
    title: 'Generative AI',
    image: platformImg,
    items: [
      {
        name: 'AI-Driven Innovation',
        description:
          'Integrate AI into business processes to drive innovation and competitive advantage.'
      },
      {
        name: 'Creative Business Solutions',
        description:
          'Design inventive AI-powered strategies that solve complex business challenges.'
      },
      {
        name: 'Data Augmentation',
        description:
          'Generate synthetic data to improve model performance and data availability.'
      },
      {
        name: 'Explainable AI',
        description:
          'Ensure AI transparency with clear, interpretable, and trustworthy model outputs.'
      }
    ]
  },
  {
    id: 'vision-speech',
    number: '< 03 >',
    title: 'Vision & Speech',
    image: capabilitiesImg,
    items: [
      {
        name: 'Image Classification & Detection',
        description:
          'Analyze and categorize visual data for automation and quality control.'
      },
      {
        name: 'Image Segmentation',
        description:
          'Extract precise visual insights using advanced image segmentation techniques.'
      },
      {
        name: 'Facial Recognition',
        description:
          'Enable secure identity verification and personalized experiences.'
      },
      {
        name: 'Augmented Reality (AR)',
        description:
          'Integrate AR to create immersive, interactive digital experiences.'
      },
      {
        name: 'Speech Recognition (ASR)',
        description:
          'Convert spoken language into accurate text for voice-driven systems.'
      },
      {
        name: 'Custom Voice Interfaces',
        description:
          'Build personalized voice solutions for enhanced accessibility and engagement.'
      }
    ]
  },
  {
    id: 'nlp',
    number: '< 04 >',
    title: 'Natural Language Processing',
    image: platformImg,
    items: [
      {
        name: 'Custom Chatbot Development',
        description:
          'Design intelligent chatbots tailored to specific business use cases.'
      },
      {
        name: 'Custom NLP Solutions',
        description:
          'Develop AI models that understand, analyze, and generate human language.'
      },
      {
        name: 'Sentiment Analysis & Q&A',
        description:
          'Extract insights from customer emotions and provide context-aware responses.'
      },
      {
        name: 'Text-to-Speech',
        description:
          'Convert written content into natural, human-like speech.'
      }
    ]
  },
  {
    id: 'ai-consultation',
    number: '< 05 >',
    title: 'AI Consultation',
    image: capabilitiesImg,
    items: [
      {
        name: 'Assessment & Planning',
        description:
          'Evaluate AI readiness and define a clear adoption roadmap.'
      },
      {
        name: 'Customized AI Solutions',
        description:
          'Design and implement AI strategies aligned with business goals.'
      },
      {
        name: 'Skill Development & Training',
        description:
          'Upskill teams with hands-on AI training and best practices.'
      }
    ]
  }
];

const whyChooseUsData = {
  subtitle: 'WORKING PROCESS',
  title: 'Our Methodology',
  items: [
    'Sift through data to inform and shape product strategy.',
    'Clarify business challenges through expert-led definition.',
    'Transition traditional processes into AI-driven operations.',
    'Design scalable system blueprints tailored to business needs.',
    'Engineer machine learning models for prediction and insight.',
    'Integrate models via APIs to deliver seamless user experiences.'
  ]
};


const DataScienceAI: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Harness Data Accessibility"
                description="LeapSofts constructs contemporary, secure, and scalable web apps to streamline your business operations."
            />
            <EmergingTech data = {ourServicesData} />
            <InfoGrid data = {processData} />
            <Capabilities
            title="Our Key Capabilities"
            description="We offer end-to-end custom application development services across various platforms and business functions."
            slides={capabilitiesSlides}
            defaultImage={capabilitiesImg}
            />
            <WhyChooseUs
            subtitle={whyChooseUsData.subtitle}
            title={whyChooseUsData.title}
            items={whyChooseUsData.items}
            />


        </>
    );
};

export default DataScienceAI;
