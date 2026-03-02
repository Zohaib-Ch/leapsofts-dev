import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
    label: "CYBERSECURITY",
    titleMain: "Protect Your",
    titleAccent: "Digital",
    titleEnd: "Assets",
    description: "Leapsofts provides world-class cybersecurity services to safeguard your organization from evolving threats. Our proactive approach combines advanced technology with expert analysis to ensure your data and infrastructure remain secure and resilient.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'SECURITY BENEFITS',
    title: 'Why Prioritize Security',
    items: [
        {
            icon: '01',
            title: 'Reduced Risk',
            description: 'Proactively identify and mitigate vulnerabilities before they can be exploited.'
        },
        {
            icon: '02',
            title: 'Business Continuity',
            description: 'Ensure your operations remain uninterrupted even in the face of cyber attacks.'
        },
        {
            icon: '03',
            title: 'Compliance',
            description: 'Meet industry-specific regulatory requirements and avoid costly penalties.'
        },
        {
            icon: '04',
            title: 'Customer Trust',
            description: 'Protect your brand reputation and build confidence with your clients and partners.'
        }
    ]
};
const cyberSecurityData: EmergingTechProps['data'] = {
    label: 'SECURITY SERVICES',
    titleAccent: 'Threat',
    titleMain: 'Protection',
    description: 'We provide end-to-end security solutions to protect your organization from evolving digital threats and ensure business continuity.',
    items: [
        { icon: 'enterprise', title: "Vulnerability Audits", description: "Identifying and managing security weaknesses in network and software." },
        { icon: 'product', title: "Incident Response", description: "Rapidly addressing cybersecurity incidents to reduce impact." },
        { icon: 'thirdParty', title: "Continuous Monitoring", description: "Ongoing monitoring for potential cyber threats or intrusions." },
        { icon: 'legacy', title: "Regulatory Compliance", description: "Aligning security measures with legal and industry standards." },
        { icon: 'hipaa', title: "Identity Management", description: "Regulating user access to safeguard sensitive company data." },
        { icon: 'enterprise', title: "Network Fortification", description: "Implementing firewalls and encryption to protect data transit." },
    ]
};

const streamlineDescription = [
    { text: "Your organization's ", bold: false },
    { text: "security posture ", bold: true },
    { text: "is the foundation of your digital success. Leapsofts offers a ", bold: false },
    { text: "complimentary security audit session ", bold: true },
    { text: "to help you uncover ", bold: false },
    { text: "critical vulnerabilities ", bold: true },
    { text: "and design a robust defense strategy against modern cyber threats.", bold: false },
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Penetration Testing',
        description: 'Simulated attacks to test the strength of your defenses.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Managed SOC',
        description: '24/7 security operations center to monitor and respond to threats.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Cloud Security',
        description: 'Hardening your AWS, Azure, or GCP environments against attacks.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Encryption Services',
        description: 'Implementing robust data protection at rest and in transit.'
    }
];

const deliverMVPData = {
    label: "SECURITY EXCELLENCE",
    title: "Committed to",
    accentText: "Complete Safety",
    description: "Leapsofts provides elite cybersecurity specialists who are fully committed to your organization's protection. We focus on vigilance, rapid response, and technical excellence.",
    items: [
        {
            title: "Proactive Vigilance.",
            description: "Staying ahead of threats with constant research and monitoring."
        },
        {
            title: "Rapid Remediation.",
            description: "Minimizing downtime and data loss through fast, effective response."
        },
        {
            title: "Tailored Security.",
            description: "Designing defense strategies that match your specific business risk profile."
        },
        {
            title: "Expert Knowledge.",
            description: "Senior security engineers with certifications in CISSP, CEH, and more."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
    {
        id: 1,
        phase: "PHASE 1: RECONNAISSANCE",
        title: "Threat Landscape Analysis",
        description: "We identify your most critical assets and potential attack vectors.",
        features: ["Asset Discovery", "Risk Profiling", "Compliance Gap Analysis"],
    },
    {
        id: 2,
        phase: "PHASE 2: DEFENSIVE DESIGN",
        title: "Architecture Hardening",
        description: "Designing a multi-layered security framework to protect your infrastructure.",
        features: ["Firewall Configuration", "IAM Policy Setup", "Encryption Strategy"],
    },
    {
        id: 3,
        phase: "PHASE 3: DEPLOYMENT",
        title: "Security Implementation",
        description: "Installing and configuring security tools and monitoring systems.",
        features: ["SOC Integration", "Endpoint Protection", "Automated Scanners"],
    },
    {
        id: 4,
        phase: "PHASE 4: VIGILANCE",
        title: "Monitoring & Maintenance",
        description: "Ongoing security management and regular audits to ensure safety.",
        features: ["24/7 Monitoring", "Regular Pen-Testing", "Employee Training"],
    },
];

const phaseLabelsDefault = ["RECONNAISSANCE", "DESIGN", "DEPLOYMENT", "VIGILANCE"];


const title = "Maintain a Lead in Cybersecurity";
const subtitle = "";

const introDescription = [
    { text: "Leapsofts guides you through complex cybersecurity challenges, from strategy to effective response.", bold: false },
]

const CyberSecurity: React.FC = () => {
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
            <InfoGrid data={infoGridData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Security "
                titleAccent="Audit"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert Services'
                description='We deliver specialized security services to support your entire organization.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={deliverMVPData} />
            <EmergingTech data={cyberSecurityData} />
            <Processes title="OUR CYBERSECURITY PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
        </>
    );
};

export default CyberSecurity;
