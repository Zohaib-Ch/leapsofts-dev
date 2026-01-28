import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech from '../../components/EmergingTech/EmergingTech';
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const whyChooseUsData = {
  subtitle: 'What We Do?',
  title: 'Driving Product Success',
  items: [
    'Market analysis and insights to identify trends, customer needs, and competitive opportunities',
    'Clear roadmap creation with actionable milestones from concept to launch',
    'Feature prioritization focused on customer value and business alignment',
    'Design and prototyping to visualize ideas and enable early testing and feedback',
    'Agile development frameworks for flexible, rapid, and user-driven iteration',
    'Go-to-market strategy covering launch planning, marketing, sales, and customer acquisition'
  ]
};
const ourServicesData: EmergingTechProps['data'] = {
  label: 'PRODUCT DEVELOPMENT',
  titleAccent: 'Strategic',
  titleMain: ' Impact',
  description:
    'Our product development approach drives innovation, accelerates delivery, and ensures long-term business growth.',
  items: [
    {
      icon: 'product',
      title: 'Cultivate Innovation',
      description:
        'Embed innovation at every stage to deliver differentiated, market-leading products.'
    },
    {
      icon: 'enterprise',
      title: 'Accelerated Time-to-Market',
      description:
        'Leverage agile roadmaps to move efficiently from ideation to launch without compromising quality.'
    },
    {
      icon: 'hipaa',
      title: 'Sustainable Growth',
      description:
        'Build products designed for continuous evolution, long-term relevance, and profitability.'
    }
  ]
};

const ProductDevelopmentStrategy: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Master Your Market Presence"
                description="With many tech ventures struggling to define their development path, Leapsofts is here to guide you. Our product development strategy service provides a clear blueprint, steering your product through every stage towards market leadership."
            />
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items}
            />
            <EmergingTech data={ourServicesData}/>
        </>
    );
};

export default ProductDevelopmentStrategy;
