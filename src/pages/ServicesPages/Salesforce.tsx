import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import Capabilities from '../../components/Capabilities/Capabilities'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import { type CapabilitySlide } from '../../components/Capabilities/Capabilities';

const capabilitiesSlides: CapabilitySlide[] = [
    {
        id: 'consultation',
        number: '< 01 >',
        title: 'Consultation',
        image: capabilitiesImg,
        items: [
            {
                name: 'Implementation Advisory',
                description:
                    "LeapSoft’s Salesforce consulting enhances scalability, customization, and creates intuitive applications."
            },
            {
                name: 'Comprehensive Management',
                description:
                    'Providing total CRM administration and upkeep, along with scalable solutions.'
            },
            {
                name: 'CRM Integration',
                description:
                    "LeapSoft’s integration services streamline your marketing, sales, and customer service through automation."
            },
            {
                name: 'Migration Assistance',
                description:
                    'We guide your transition from existing CRM systems to Salesforce, tailoring the process to your specific requirements.'
            }
        ]
    },
    {
        id: 'configuration',
        number: '< 02 >',
        title: 'Configuration',
        image: platformImg,
        items: [
            {
                name: 'Salesforce Personalization',
                description:
                    'Develop tailored Salesforce solutions that align with business objectives and optimize returns.'
            },
            {
                name: 'Streamlined Dashboards',
                description:
                    'Facilitate effortless sales and marketing reporting with simplified data analysis and smart reporting tools.'
            },
            {
                name: 'Tailored Solutions',
                description:
                    'Adapt and enhance existing Salesforce solutions with custom development to fit your business requirements.'
            },
            {
                name: 'Advanced Data Handling',
                description:
                    'Create innovative Salesforce data management solutions for clients, ensuring secure and fluid data integration.'
            }
        ]
    },
    {
        id: 'implementation',
        number: '< 03 >',
        title: 'Implementation',
        image: capabilitiesImg,
        items: [
            {
                name: 'Sales & Marketing Automation',
                description:
                    'Optimize sales and marketing workflows for enhanced ROI and productivity.'
            },
            {
                name: 'Enhanced Service Cloud',
                description:
                    'Boost customer loyalty and engagement for partner businesses and entities.'
            },
            {
                name: 'Financial Services Advancement',
                description:
                    'Utilize integrated CRM cloud solutions to double your business growth rate.'
            },
            {
                name: 'Sales Cloud Solutions',
                description:
                    'Enhance and automate your sales process with advanced sales cloud implementations.'
            }
        ]
    },
    {
        id: 'appDevelopment',
        number: '< 04 >',
        title: 'App Development',
        image: platformImg,
        items: [
            {
                name: 'Agile Salesforce Methodology',
                description:
                    'Adopt a flexible approach to Salesforce development for deeper customer insights.'
            },
            {
                name: 'AppExchange Support',
                description:
                    'Transition your products to AppExchange and enhance them with our specialized technical assistance.'
            },
            {
                name: 'Force.com Solutions',
                description:
                    'Deliver comprehensive Force.com development services for simplifying intricate business operations.'
            },
            {
                name: 'Seamless Integration & Transfer',
                description:
                    'Aid businesses in smoothing data processes and synchronization through app integration and migration.'
            }
        ]
    },
    {
        id: 'integration',
        number: '< 05 >',
        title: 'Integration',
        image: capabilitiesImg,
        items: [
            {
                name: 'Third-Party App Integration',
                description:
                    'Link Salesforce with external applications using REST, SOAP APIs, and tailored web services.'
            },
            {
                name: 'Financial Sync',
                description:
                    'Merge Salesforce accounting for insightful data analysis, invoice management, and client profiling.'
            },
            {
                name: 'Database Synchronization',
                description:
                    'Assist businesses in automating marketing and deriving potent data insights.'
            },
            {
                name: 'Marketing Strategy Automation',
                description:
                    'Facilitate Salesforce integration with automation platforms for crafting customer journeys and cultivating leads.'
            }
        ]
    }
];


const whyChooseUsData = {
    subtitle: "Outstanding in Our Field!",
    title: "Why Opt for LeapSofts?",
    items: [
        "Accredited Salesforce Partner",
        "Adoption of Tried-and-True Methods",
        "Comprehensive Integration & Frequent Updates",
        "Streamlining of Business Operations."
    ]
};

const Salesforce: React.FC = () => {
    return (
        <>
            <IntroComponent title="Leading Salesforce Development Ally" description="LeapSofts covers every aspect of Salesforce development, from strategic planning to full-scale implementation!" />
            <Capabilities
                title="Salesforce Services Development"

                description=""
                slides={capabilitiesSlides}
                defaultImage={capabilitiesImg}
            />
            <WhyChooseUs
                subtitle={whyChooseUsData.subtitle}
                title={whyChooseUsData.title}
                items={whyChooseUsData.items}
            />
        </>
    )
}

export default Salesforce