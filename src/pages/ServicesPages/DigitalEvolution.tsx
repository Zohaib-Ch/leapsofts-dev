import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';

const digitalEvolutionProcessData: InfoGridProps['data'] = {
  label: 'OUR SERVICES',
  title: 'Driving Digital Excellence',
  items: [
    {
      icon: '01',
      title: 'Continuous Innovation',
      description:
        'Continuously integrate the latest technologies to drive innovation and maintain competitive advantage.'
    },
    {
      icon: '02',
      title: 'Enhanced Efficiency',
      description:
        'Streamline operations through automation and digital workflows, reducing costs and boosting productivity.'
    },
    {
      icon: '03',
      title: 'Data-Driven Decisions',
      description:
        'Leverage big data analytics to gain insights, predict customer behavior, and make informed decisions.'
    },
    {
      icon: '04',
      title: 'Scalability',
      description:
        'Adopt flexible digital solutions that scale effortlessly with evolving business needs.'
    },
    {
      icon: '05',
      title: 'Customer Experience',
      description:
        'Deliver personalized, engaging digital experiences that enhance customer satisfaction.'
    },
    {
      icon: '06',
      title: 'Agility and Flexibility',
      description:
        'Respond rapidly to market changes with agile, adaptable digital business models.'
    },
    {
      icon: '07',
      title: 'Risk Management',
      description:
        'Strengthen security and compliance with robust digital practices that protect data and assets.'
    },
    {
      icon: '08',
      title: 'Sustainable Growth',
      description:
        'Support long-term business growth through sustainable strategies and responsible innovation.'
    },
    {
      icon: '09',
      title: 'Talent Attraction and Retention',
      description:
        'Create innovative, technology-driven environments that attract and retain top talent.'
    }
  ]
};


const DigitalEvolution: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Digital Evolution Evolve, Enhance & Excel"
                description="Embracing digital evolution means leading the industry, not just keeping up. With Leapsofts, enhance operational efficiency, unlock new growth opportunities, and gain deeper customer insights. Let our strategies drive your long-term business agility and success."
            />
            <InfoGrid data={digitalEvolutionProcessData}/>
        </>
    );
};

export default DigitalEvolution;
