import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import InfoGrid from '../../components/InfoGrid/InfoGrid';
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
const servicesData: InfoGridProps['data'] = {
  label: 'OUR SERVICES',
  title: 'What We Offer',
  items: [
    {
      icon: '01',
      title: 'Expert Consultation',
      description:
        "LeapSoft's AWS consultants conduct a thorough analysis of your business and offer fully planned and budgeted solution architectures."
    },
    {
      icon: '02',
      title: 'Skilled Implementation',
      description:
        'Our team is adept in crafting, deploying, and transitioning applications to top cloud platforms, aiding in your business growth.'
    },
    {
      icon: '03',
      title: 'Seamless Integration',
      description:
        'We specialize in app integrations with AWS-hosted data sources and connecting extensive enterprise-scale solutions.'
    },
    {
      icon: '04',
      title: 'Backend Engineering',
      description:
        'Utilize AWS for integrated backend development, supporting mobile and web app creators in building and scaling their projects.'
    },
    {
      icon: '05',
      title: 'Dynamic Scaling',
      description:
        'LeapSoft ensures your backend efficiently handles increasing app traffic, preventing downtime and ensuring smooth business operations.'
    }
  ]
};


const AWS: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Expand Boundlessly, Innovate Freely"
                description="Concentrate on acquiring customers and expanding your business, leaving infrastructure management to us. LeapSofts will assist you in scaling and innovating using AWS."
            />
            <InfoGrid data={servicesData} />
        </>
    );
};

export default AWS;
