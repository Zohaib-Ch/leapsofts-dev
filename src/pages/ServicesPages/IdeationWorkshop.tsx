import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const ourServicesData: EmergingTechProps['data'] = {
  label: 'DISCOVERY WORKSHOP',
  titleAccent: 'Empowering Your',
  titleMain: ' Creative Journey',
  description:
    'Our discovery workshops are designed to unlock creativity, validate ideas, and define a clear path from concept to execution.',
  items: [
    {
      icon: 'product',
      title: 'Creative Ecosystem',
      description:
        'We foster an open, innovation-driven environment where ideas are encouraged, explored, and refined.'
    },
    {
      icon: 'enterprise',
      title: 'Expert Facilitation',
      description:
        'Experienced facilitators guide focused brainstorming sessions to harness collective intelligence.'
    },
    {
      icon: 'product',
      title: 'Customized Workshops',
      description:
        'Each workshop is tailored to your industry, goals, and project needs for maximum relevance.'
    },
    {
      icon: 'hipaa',
      title: 'Idea Validation',
      description:
        'Collaborative evaluation helps refine ideas into viable, development-ready concepts.'
    },
    {
      icon: 'enterprise',
      title: 'Ideation Techniques',
      description:
        'Proven tools and frameworks unlock creativity and drive innovative problem-solving.'
    },
    {
      icon: 'product',
      title: 'Roadmap Creation',
      description:
        'We deliver a clear post-workshop roadmap to guide ideas from concept to implementation.'
    }
  ]
};

const ideationProcessData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'The LeapSofts Ideation Workshop Process',
  items: [
    {
      icon: '01',
      title: 'Setting the Stage',
      description:
        'Lay the foundation by aligning objectives, expectations, and success criteria for the workshop.'
    },
    {
      icon: '02',
      title: 'Participant Selection',
      description:
        'Assemble a diverse, cross-functional team to bring balanced perspectives and expertise.'
    },
    {
      icon: '03',
      title: 'Workshop Planning',
      description:
        'Design a structured agenda, tools, and activities to guide productive ideation.'
    },
    {
      icon: '04',
      title: 'Facilitation & Brainstorming',
      description:
        'Guide collaborative brainstorming sessions to generate innovative and actionable ideas.'
    },
    {
      icon: '05',
      title: 'Idea Exploration',
      description:
        'Refine, evaluate, and prioritize ideas to identify the most impactful opportunities.'
    },
    {
      icon: '06',
      title: 'Prototyping & Visualization',
      description:
        'Translate ideas into visual concepts or prototypes to validate feasibility and value.'
    },
    {
      icon: '07',
      title: 'Feedback & Iteration',
      description:
        'Incorporate feedback to improve concepts through continuous refinement.'
    },
    {
      icon: '08',
      title: 'Actionable Roadmap',
      description:
        'Create a clear, step-by-step roadmap outlining execution timelines and milestones.'
    },
    {
      icon: '09',
      title: 'Follow-Up & Support',
      description:
        'Provide post-workshop guidance and support to ensure ideas progress toward implementation.'
    }
  ]
};

const whyChooseUsData = {
  subtitle: 'Empowering Innovation',
  title: 'Why Choose LeapSofts?',
  items: [
    'Creative breakthroughs that spark innovative and groundbreaking ideas',
    'Collective genius through diverse perspectives and collaborative thinking',
    'Speedy innovation that accelerates ideas from concept to viable solutions',
    'Goal-focused creativity aligned with strategic business objectives'
  ]
};



const IdeationWorkshop: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Unleashing Creativity, Shaping Your Vision"
                description="Leapsofts’s Ideation Workshop is your launchpad to crystallize and refine your concepts. Engage with our experts to explore possibilities, define your vision, and sketch the blueprint of your future product."
            />
            <EmergingTech data={ourServicesData}/>
            <InfoGrid data={ideationProcessData}/>
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items}
            />
        </>
    );
};

export default IdeationWorkshop;
