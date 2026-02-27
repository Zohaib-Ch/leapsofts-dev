import IntroComponent from '../../components/IntroComponent/IntroComponent'
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'
import Processes, { type ProcessPhase } from '../../components/Processes/Processes'
import capabilitiesImg from '../../assets/capabilities_3d.png';
import platformImg from '../../assets/capabilities_platform.png';
import laptopImg from "../../assets/about_laptop_3d.png";

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


const serviceOverviewData = {
    label: "SALESFORCE CRM",
    titleMain: "Empower Your",
    titleAccent: "Sales",
    titleEnd: "Success",
    description: "Leapsofts is your strategic partner for Salesforce development and optimization. We help you leverage the world's #1 CRM to streamline your sales, service, and marketing operations, driving higher efficiency and a better customer experience.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'SALESFORCE BENEFITS',
    title: 'Why Choose Salesforce',
    items: [
        {
            icon: '01',
            title: '360° Customer View',
            description: 'Gain a complete understanding of your customers across all touchpoints.'
        },
        {
            icon: '02',
            title: 'Automated Workflows',
            description: 'Reduce manual tasks and increase productivity with powerful automation.'
        },
        {
            icon: '03',
            title: 'Data-Driven Insights',
            description: 'Make smarter decisions with real-time analytics and predictive modeling.'
        },
        {
            icon: '04',
            title: 'Scalable Growth',
            description: 'A platform that grows with your business, from startup to enterprise.'
        }
    ]
};

const streamlineDescription = [
    { text: "Your CRM should be your ", bold: false },
    { text: "strongest asset", bold: true },
    { text: ", not a hurdle. Leapsofts offers a ", bold: false },
    { text: "complimentary Salesforce audit session ", bold: true },
    { text: "to help you identify ", bold: false },
    { text: "optimization opportunities ", bold: true },
    { text: "that increase ROI and empower your sales team.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Custom Apex Development',
        description: 'Building powerful, custom logic tailored to your specific business needs.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'LWC Development',
        description: 'Creating modern, responsive user interfaces with Lightning Web Components.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'AppExchange Build',
        description: 'Helping you develop and launch your own products on the Salesforce AppExchange.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Managed Services',
        description: 'Ongoing support and optimization to ensure your Salesforce stays peak-performing.'
    }
];

const deliverMVPData = {
    label: "SALESFORCE EXCELLENCE",
    title: "Committed to",
    accentText: "CRM Success",
    description: "Leapsofts provides certified Salesforce specialists who are fully committed to your project's success. We focus on transparency, best practices, and technical rigor.",
    items: [
        {
            title: "Certified Expertise.",
            description: "Developers and consultants with extensive Salesforce certifications."
        },
        {
            title: "Scalable Solutions.",
            description: "Designing architectures that support your long-term business growth."
        },
        {
            title: "Seamless Integration.",
            description: "Connecting Salesforce with your existing tech stack for a unified experience."
        },
        {
            title: "Agile Delivery.",
            description: "Iterative development that ensures speed and alignment with your goals."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: DISCOVERY",
        title: "Needs & Process Audit",
        description: "We analyze your current sales processes and business objectives.",
        features: ["Stakeholder Workshops", "Process Mapping", "Gap Analysis"],
    },
    {
        id: 2,
        phase: "PHASE 2: DESIGN",
        title: "Salesforce Blueprinting",
        description: "Designing the custom objects, workflows, and integrations for your org.",
        features: ["Solution Architecture", "Data Model Design", "Integration Planning"],
    },
    {
        id: 3,
        phase: "PHASE 3: IMPLEMENTATION",
        title: "Development & Config",
        description: "Building and configuring your Salesforce solution to specification.",
        features: ["Apex & LWC Prep", "Flow Automation", "Sandbox Testing"],
    },
    {
        id: 4,
        phase: "PHASE 4: OPTIMIZATION",
        title: "Launch & Training",
        description: "Deploying the solution and ensuring your team knows how to use it.",
        features: ["Production Go-Live", "User Training", "Post-Launch Support"],
    },
];

const phaseLabelsDefault = ["DISCOVERY", "DESIGN", "IMPLEMENTATION", "OPTIMIZATION"];

const Salesforce: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Leading Salesforce Development Ally"
                description="Leapsofts covers every aspect of Salesforce development, from strategy to implementation."
            />
            <ServiceOverview
                label={serviceOverviewData.label}
                titleMain={serviceOverviewData.titleMain}
                titleAccent={serviceOverviewData.titleAccent}
                titleEnd={serviceOverviewData.titleEnd}
                description={serviceOverviewData.description}
                imagePath={serviceOverviewData.imagePath}
            />
            <Capabilities
                title="Our Salesforce Capabilities"
                description="We provide 360-degree Salesforce services to transform your business operations."
                slides={capabilitiesSlides}
                defaultImage={capabilitiesImg}
            />
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Salesforce "
                titleAccent="Audit"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert CRM Services'
                description='We deliver specialized Salesforce services to support your business ecosystem.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <Processes title="OUR SALESFORCE PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    )
}

export default Salesforce