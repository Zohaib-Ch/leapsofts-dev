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
  label: "AWS CLOUD ARCHITECTURE",
  titleMain: "Orchestrating Highly Secure",
  titleAccent: "Enterprise AWS",
  titleEnd: "Environments",
  description: "At Leapsofts, we help modern enterprises maximize their infrastructure performance, scale computing capacity automatically, and reduce resource costs on Amazon Web Services. Our AWS-certified solutions architects construct custom AWS CDK blueprints, deploy high-availability Kubernetes systems via Amazon EKS, and build fault-tolerant databases that meet strict SOC2 and HIPAA compliance requirements.",
  imagePath: cloudImg
};

const emergingTechData: EmergingTechProps['data'] = {
  label: 'AWS CAPABILITIES',
  titleAccent: 'Advanced AWS',
  titleMain: 'Service Integrations',
  description: 'We integrate a wide range of AWS services to build robust, scalable, and intelligent cloud solutions tailored to your business needs.',
  items: [
    { icon: 'enterprise' as const, title: 'AWS Lambda Serverless', description: 'Deploying event-driven, microsecond-billing serverless pipelines to build highly scalable backend functions.' },
    { icon: 'saas' as const, title: 'Amazon ECS & EKS (Kubernetes)', description: 'Orchestrating containerized backend nodes and microservices utilizing AWS Fargate or managed Amazon EKS clusters.' },
    { icon: 'hipaa' as const, title: 'Amazon Aurora Serverless v2', description: 'Configuring auto-scaling, highly resilient relational databases (PostgreSQL/MySQL) with active multi-region replicas.' },
    { icon: 'ecommerce' as const, title: 'Amazon DynamoDB Global Tables', description: 'Building globally distributed NoSQL datastores with sub-10ms latency capabilities and active-active replication.' },
    { icon: 'mobile' as const, title: 'AWS Cloud Development Kit (CDK)', description: 'Enforcing Infrastructure as Code (IaC) version-control using type-safe TypeScript CDK constructs.' },
    { icon: 'legacy' as const, title: 'AWS IAM & KMS Security', description: 'Hardening platform boundaries utilizing fine-grained IAM roles, AWS Organizations SCPs, and KMS key envelope encryption.' },
  ]
};

const servicesData: InfoGridProps['data'] = {
  label: 'AWS VALUE ADVANTAGE',
  title: 'Why Build Your Digital Workloads on AWS',
  items: [
    {
      icon: '01',
      title: 'Multi-Zone Disaster Redundancy',
      description: 'Deploy workloads across multiple geographical zones to protect applications from isolated datacenter failure events.'
    },
    {
      icon: '02',
      title: 'Instant Auto-Scaling Elasticity',
      description: 'Configure EC2 Auto Scaling groups and serverless triggers to dynamically expand computing resources under heavy user load.'
    },
    {
      icon: '03',
      title: 'Optimized Resource Expenditure',
      description: 'Transition capital asset expenses into flexible, pay-as-you-go cloud service rates, reducing operational overheads.'
    },
    {
      icon: '04',
      title: 'Advanced AI & ML Services',
      description: 'Deploy custom machine learning models and text embeddings utilizing managed Amazon SageMaker and Bedrock services.'
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
  title: "Our Commitment to Deliver Your AWS Infrastructure in",
  accentText: "3-5 months?",
  description: "Leapsofts is an elite AWS consulting and infrastructure advisory partner. By combining fully integrated automated tooling, certified AWS solutions architects, and dedicated DevOps engineers, we design, build, and hand over production-ready AWS environments within an accelerated 3 to 5 month timeline—on time, every time.",
  items: [
    {
      title: "AWS CDK constructs.",
      description: "Building fully automated virtual private clouds and secure compute layers using type-safe AWS CDK constructs."
    },
    {
      title: "Aurora Serverless scale.",
      description: "Configuring high-concurrency Aurora database instances and Global DynamoDB tables to support massive traffic."
    },
    {
      title: "WAF Guard Shields.",
      description: "Enforcing KMS encryptions, Shield DDoS mitigations, and IAM role hierarchies to satisfy SOC2 compliance standards."
    },
    {
      title: "Fargate computing clusters.",
      description: "Deploying stateless containerized workloads across isolated Fargate environments to optimize compute costs."
    }
  ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: AGILE DISCOVERY & READINESS ASSESSMENT",
    title: "Well-Architected Reviews & Discoveries",
    description: "We evaluate your current workloads against the six pillars of the AWS Well-Architected Framework.",
    features: [
      {
        title: "AWS Well-Architected Audits",
        description: "Analyze security, performance efficiency, cost optimizations, and operational excellence gaps."
      },
      {
        title: "Workload Discovery Scans",
        description: "Catalog on-premises databases, computing systems dependencies, and active ports."
      },
      {
        title: "Target Cloud Blueprinting",
        description: "Draft structural VPC layouts, private subnets mappings, NAT gateways, and cost projections."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: IAC DEVELOPMENT & SECURE VPC DESIGN",
    title: "AWS CDK Provisions & IAM Hardening",
    description: "Writing reusable CDK constructs and configuring secure VPC routing rules.",
    features: [
      {
        title: "Modular AWS CDK Codebase",
        description: "Author type-safe TypeScript CDK modules to provision environments with absolute consistency."
      },
      {
        title: "VPC Networking Architecture",
        description: "Configure secure public and private subnets, transit gateways, and routing configurations."
      },
      {
        title: "Zero-Trust IAM Schemes",
        description: "Harden identity permissions, manage KMS encryption keys, and set up cloud access logging."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY WORKLOAD DEPLOYMENT",
    title: "Database Syncing & Container Runs",
    description: "Syncing relational data databases with zero downtime using automated replication waves.",
    features: [
      {
        title: "Zero-Loss Database Migrations",
        description: "Migrate active transactions securely using AWS DMS with zero application interruptions."
      },
      {
        title: "Fargate Container Orchestrations",
        description: "Orchestrate application pods on AWS Fargate serverless containers or EKS Kubernetes clusters."
      },
      {
        title: "Transaction Stress Sprints",
        description: "Run automated k6 performance checks to verify AWS cluster responsiveness under high traffic."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS OBSERVABILITY & COST OPTIMIZATION",
    title: "CloudWatch Telemetry & Cost Scripts",
    description: "Deploying central logging structures, optimizing infrastructure costs, and configuring GitOps releases.",
    features: [
      {
        title: "CloudWatch Metrics Observability",
        description: "Deploy real-time cloud dashboard telemetries, trace response latencies, and configure email alerts."
      },
      {
        title: "Instance Schedule Rightsizing",
        description: "Implement automated script schedulers to shut down staging pools and activate Spot instances."
      },
      {
        title: "Continuous DevOps Sweeps",
        description: "Conduct regular server OS patching, security boundary scans, and database maintenance checks."
      }
    ]
  }
];

const phaseLabelsDefault = [
    "READINESS ASSESSMENT",
    "CDK & VPC DESIGN",
    "WORKLOAD DEPLOYMENT",
    "TELEMETRY & GOVERNANCE",
];

const title = "AWS Consulting Services, Serverless Scaling & Multi-Region Cloud Architecture";
const subtitle = "";

const introDescription = [
  { text: "We design and deploy highly secure, robust ", bold: false },
  { text: "Amazon Web Services (AWS) cloud platform topologies", bold: true },
  { text: ", leveraging serverless microservices, modular AWS Cloud Development Kit (CDK) constructs, and automated containerization. By integrating multi-region Amazon Aurora relational datastores, AWS Transit Gateways, and WAF shields, we build elite digital architectures designed to handle extreme global scaling with maximum durability.", bold: false }
];

const AWS: React.FC = () => {
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <ServiceOverview
        label={serviceOverviewData.label}
        titleMain={serviceOverviewData.titleMain}
        titleAccent={serviceOverviewData.titleAccent}
        titleEnd={serviceOverviewData.titleEnd}
        description={serviceOverviewData.description}
        imagePath={serviceOverviewData.imagePath}
      />
      <InfoGrid data={servicesData} />
      <StreamlineSuccess
        label="COMPLIMENTARY STRATEGY SESSION"
        titleMain="Map your "
        titleAccent="AWS architecture"
        titleEnd=" roadmap."
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <ServiceFeatures
        title='AWS Capabilities'
        description='We deliver expert services across the entire AWS ecosystem.'
        items={serviceFeaturesData}
      />
      <DeliverMVP data={deliverMVPData} />
      <EmergingTech data={emergingTechData} />
      <Processes title="OUR AWS CLOUD PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
    </>
  );
};

export default AWS;
