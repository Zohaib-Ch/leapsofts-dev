import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const ourServicesData: EmergingTechProps['data'] = {
  label: 'BPO SERVICES',
  titleAccent: 'BPO',
  titleMain: ' Solutions',
  description:
    'Scalable BPO services designed to enhance efficiency, improve customer experience, and support business growth.',
  items: [
    {
      icon: 'enterprise',
      title: 'Customer Engagement',
      description:
        'Manage customer interactions across phone, email, and live chat to handle inquiries, complaints, and feedback seamlessly.'
    },
    {
      icon: 'enterprise',
      title: 'Tech Support Excellence',
      description:
        'Deliver timely and effective technical support to resolve product and service-related challenges.'
    },
    {
      icon: 'enterprise',
      title: 'Administrative Efficiency',
      description:
        'Improve back-office operations with efficient data entry, processing, and administrative support.'
    },
    {
      icon: 'product',
      title: 'Software Solutions',
      description:
        'Develop and implement AI and ML-driven solutions to streamline processes and improve decision-making.'
    },
    {
      icon: 'enterprise',
      title: 'IT Infrastructure',
      description:
        'Ensure optimal performance of servers, networks, and IT systems for uninterrupted operations.'
    },
    {
      icon: 'saas',
      title: 'Chatbot Solutions',
      description:
        'Build intelligent chatbot solutions to enhance customer service and support automation.'
    },
    {
      icon: 'product',
      title: 'AI/ML Expertise',
      description:
        'Develop, test, and maintain advanced AI and ML applications tailored to business needs.'
    },
    {
      icon: 'thirdParty',
      title: 'Cloud Technology',
      description:
        'Enable secure and efficient cloud-based data and application management.'
    },
    {
      icon: 'enterprise',
      title: 'Business Growth Enablement',
      description:
        'Leverage specialized BPO services to transform and scale business operations effectively.'
    }
  ]
};
const processData: InfoGridProps['data'] = {
  label: 'WORKING PROCESS',
  title: 'How We Work',
  items: [
    {
      icon: '01',
      title: 'Initial Consultation & Analysis',
      description:
        'Understand business needs, challenges, and objectives through detailed analysis.'
    },
    {
      icon: '02',
      title: 'Solution Design & Strategy',
      description:
        'Design a tailored solution and strategic roadmap aligned with business goals.'
    },
    {
      icon: '03',
      title: 'Technology Integration & Setup',
      description:
        'Integrate required technologies and set up systems for seamless operations.'
    },
    {
      icon: '04',
      title: 'Staffing & Training',
      description:
        'Provide skilled resources and training to ensure smooth adoption and execution.'
    },
    {
      icon: '05',
      title: 'Process Implementation',
      description:
        'Execute and deploy processes efficiently according to the defined strategy.'
    },
    {
      icon: '06',
      title: 'Monitoring & Optimization',
      description:
        'Continuously monitor performance and optimize processes for better results.'
    }
  ]
};
const whyChooseUsData = {
  subtitle: 'WHY CHOOSE US',
  title: 'Why Choose Leapsofts?',
  items: [
    'Expertise across multiple domains delivering proven industry solutions.',
    'Technology-driven approaches focused on innovation and efficiency.',
    'Customized and scalable solutions tailored to your business growth.'
  ]
};


const BusinessProcessOutsourcing: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Smart Operations, Results-Driven Approach."
                description="Is your enterprise equipped for the future? Embrace this crucial moment to transform your business operations with intelligence through Leapsofts."
            />
            <EmergingTech data={ourServicesData} />
            <InfoGrid data={processData} />
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items}
            />
        </>
    );
};

export default BusinessProcessOutsourcing;
