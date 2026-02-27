import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import cloudImg from "../../assets/about_laptop_3d.png";
const serviceOverviewData = {
  label: "AWS CLOUD",
  titleMain: "Master Your",
  titleAccent: "Infrastructure",
  titleEnd: "with AWS",
  description: "Leapsofts helps you leverage the full power of Amazon Web Services to build, deploy, and scale applications with ease. Our AWS experts provide end-to-end cloud solutions that optimize costs, enhance security, and ensure high availability for your business-critical workloads.",
  imagePath: cloudImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'AWS ECOSYSTEM',
  titleAccent: 'Cloud Innovation',
  titleMain: 'AWS Services',
  description: 'We integrate a wide range of AWS services to build robust, scalable, and intelligent cloud solutions tailored to your business needs.',
  items: [
    { icon: 'enterprise' as const, title: 'AWS Lambda', description: 'Serverless computing for building highly scalable and cost-effective applications.' },
    { icon: 'saas' as const, title: 'Amazon EC2', description: 'Reliable and resizable compute capacity in the cloud for any workload.' },
    { icon: 'hipaa' as const, title: 'Amazon RDS', description: 'Managed relational databases that are easy to set up, operate, and scale.' },
    { icon: 'ecommerce' as const, title: 'Amazon S3', description: 'Highly durable and scalable object storage for all your data needs.' },
    { icon: 'mobile' as const, title: 'AWS CloudFormation', description: 'Infrastructure as code for automated and consistent resource provisioning.' },
    { icon: 'legacy' as const, title: 'AWS IAM', description: 'Fine-grained access control to manage your AWS resources securely.' },
  ]
};

const servicesData: InfoGridProps['data'] = {
  label: 'AWS BENEFITS',
  title: 'Why Choose AWS Cloud',
  items: [
    {
      icon: '01',
      title: 'Global Reach',
      description: 'Deploy applications globally in minutes with AWS’s extensive network of data centers.'
    },
    {
      icon: '02',
      title: 'Scalability',
      description: 'Scale your resources up or down automatically based on demand to optimize performance.'
    },
    {
      icon: '03',
      title: 'Cost Savings',
      description: 'Pay only for what you use with AWS’s flexible pricing models and cost management tools.'
    },
    {
      icon: '04',
      title: 'Innovation',
      description: 'Access the latest technologies in AI, ML, IoT, and more to drive your business forward.'
    }
  ]
};

const streamlineDescription = [
  { text: "Optimizing your ", bold: false },
  { text: "cloud infrastructure ", bold: true },
  { text: "starts with a solid plan. Leapsofts offers a ", bold: false },
  { text: "complimentary AWS strategy session ", bold: true },
  { text: "to help you design a ", bold: false },
  { text: "well-architected framework ", bold: true },
  { text: "that maximizes efficiency and security on the cloud.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
  {
    icon: '/industryicons/sphere.svg',
    title: 'Cloud Migration',
    description: 'Seamlessly move your on-premises workloads to AWS with minimal downtime.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'DevOps on AWS',
    description: 'Automate your development pipelines with AWS CodePipeline and CodeDeploy.'
  },
  {
    icon: '/industryicons/sphere.svg',
    title: 'Managed Services',
    description: 'Ongoing monitoring, patching, and optimization of your AWS environment.'
  },
  {
    icon: '/industryicons/bipiramida.svg',
    title: 'Security Audits',
    description: 'Comprehensive security assessments to ensure your AWS setup meets compliance standards.'
  }
];

const deliverMVPData = {
  label: "AWS EXCELLENCE",
  title: "Partnering for",
  accentText: "Cloud Success",
  description: "Leapsofts is dedicated to delivering high-quality AWS solutions that drive business value. We focus on reliability, security, and performance to ensure your cloud journey is a success.",
  items: [
    {
      title: "Expert Consultation.",
      description: "Deep expertise in AWS architectures to guide your cloud strategy."
    },
    {
      title: "Security by Design.",
      description: "Implementing best practices to protect your data and infrastructure."
    },
    {
      title: "Operational Excellence.",
      description: "Structured processes for managing and optimizing cloud workloads."
    },
    {
      title: "Continuous Improvement.",
      description: "Regular reviews and enhancements to keep your cloud setup peak-performing."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: ASSESSMENT",
    title: "Readiness & Gap Analysis",
    description: "We evaluate your current infrastructure and define a roadmap for AWS adoption.",
    features: ["Infrastructure Review", "Cost Estimation", "Migration Strategy Planning"],
  },
  {
    id: 2,
    phase: "PHASE 2: DESIGN",
    title: "Well-Architected Framework",
    description: "Designing a secure, high-performing, and cost-efficient AWS architecture.",
    features: ["VPC & Network Design", "Security Groups & IAM Setup", "Storage & Compute Selection"],
  },
  {
    id: 3,
    phase: "PHASE 3: IMPLEMENTATION",
    title: "Deployment & Migration",
    description: "Executing the migration and setting up the AWS environment with automation.",
    features: ["Data Migration", "Infrastructure Provisioning", "CI/CD Setup"],
  },
  {
    id: 4,
    phase: "PHASE 4: OPERATIONS",
    title: "Monitoring & Optimization",
    description: "Providing ongoing support and continuous improvement of your AWS setup.",
    features: ["24/7 Monitoring", "Performance Tweaks", "Cost Optimization Reviews"],
  },
];

const phaseLabelsDefault = ["ASSESSMENT", "DESIGN", "IMPLEMENTATION", "OPERATIONS"];


const AWS: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Expand Boundlessly, Innovate Freely"
        description="Concentrate on acquiring customers and expanding your business, leaving infrastructure management to us."
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <EmergingTech data={emergingTechData} />
      <InfoGrid data={servicesData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="AWS "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='AWS Capabilities'
        description='We deliver expert services across the entire AWS ecosystem.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <Processes title="OUR AWS CLOUD PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default AWS;
