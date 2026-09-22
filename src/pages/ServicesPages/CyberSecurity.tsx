import { useServicePage } from '../../hooks/useServicePage';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import InfoGrid, { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import ServiceFeatures, { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import RelatedServices from '../../components/RelatedServices/RelatedServices';
import laptopImg from "../../assets/about_laptop_3d.png";

const serviceOverviewData = {
    label: "CYBERSECURITY",
    titleMain: "Securing Your",
    titleAccent: "Enterprise",
    titleEnd: "Perimeter",
    description: "At Leapsofts, we customize and engineer highly secure, multi-layered enterprise defensive perimeters designed to isolate digital threats and lock down critical data fields. By auditing source code vulnerabilities, designing strict Zero-Trust security structures, configuring automated SIEM alerting channels, and deploying real-time penetration checks, we help organizations protect core system configurations, ensure reliable data isolation, and achieve rigorous SOC2, HIPAA, and GDPR regulatory compliance.",
    imagePath: laptopImg
};

const infoGridData: InfoGridProps['data'] = {
    label: 'SECURITY BENEFITS',
    title: 'Why Prioritize Security Now',
    items: [
        {
            icon: '01',
            title: 'Minimized Threat Attack Vector',
            description: 'Proactively shut down potential entry paths, tracing irregular directory behaviors and database queries before exploitation.'
        },
        {
            icon: '02',
            title: 'Uninterrupted Staging & Live Operations',
            description: 'Ensure your core sales engines and transactional databases remain fully online even during sustained DDoS attempts.'
        },
        {
            icon: '03',
            title: 'Rigorous Global Regulatory Readiness',
            description: 'Achieve elite enterprise compliance ratings, preventing costly data breach penalties and operational license losses.'
        },
        {
            icon: '04',
            title: 'Elevated User Record Security',
            description: 'Foster unshakeable customer brand loyalty by securing highly sensitive personal records and transaction history.'
        }
    ]
};

const cyberSecurityData: EmergingTechProps['data'] = {
    label: 'SECURITY SERVICES',
    titleAccent: 'Threat',
    titleMain: 'Protection',
    description: 'We provide end-to-end security solutions to protect your organization from evolving digital threats and ensure business continuity.',
    items: [
        {
            icon: 'enterprise' as const,
            title: "Vulnerability Audits & Code Defect Scans",
            description: "Conducting automated code audits, dependency validations, and static analysis scans using SonarQube to discover backdoors."
        },
        {
            icon: 'product' as const,
            title: "Incident Response & Forensic Isolation",
            description: "Deploying immediate incident response protocols, isolating compromised nodes, and conducting root-cause forensics."
        },
        {
            icon: 'thirdParty' as const,
            title: "24/7 SIEM Continuous Threat Monitoring",
            description: "Orchestrating real-time telemetry scans utilizing Splunk or ELK setups to trace irregular database queries and connections."
        },
        {
            icon: 'legacy' as const,
            title: "SOC2, HIPAA, & GDPR Compliance Shield",
            description: "Auditing internal configurations, user directory logs, and network architectures to guarantee total compliance."
        },
        {
            icon: 'hipaa' as const,
            title: "Zero-Trust Identity & IAM Governance",
            description: "Enforcing strict Multi-Factor Authentication (MFA), role-based access controls (RBAC), and rotating credentials keys."
        },
        {
            icon: 'enterprise' as const,
            title: "Enterprise Network & Transport Fortification",
            description: "Deploying secure Cloudflare edge protection, automated WAF firewall triggers, and end-to-end TLS encryption pipelines."
        },
    ]
};

const streamlineDescription = [
  { text: "Whether modernizing a complex ", bold: false },
  { text: "legacy enterprise web portal ", bold: true },
  { text: "or engineering a ", bold: false },
  { text: "new Zero-Trust framework", bold: true },
  { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current security configurations, map out potential threat vectors, evaluate compliance levels, and formulate a ", bold: false },
  { text: "highly efficient, customized threat mitigation plan ", bold: true },
  { text: "built to unlock massive digital growth and streamline customer retention.", bold: false }
];

const serviceFeaturesData: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Penetration Testing',
        description: 'Executing simulated exploits against software networks, APIs, and databases to locate authorization holes.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Managed SOC',
        description: 'Deploying a dedicated, around-the-clock Security Operations Center to discover and mitigate incoming threat vectors.'
    },
    {
        icon: '/industryicons/sphere.svg',
        title: 'Cloud Security',
        description: 'Hardening public and private cloud configurations across AWS, Azure, or GCP using automated IAM rules.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Encryption Services',
        description: 'Enforcing AES-256 data-at-rest encryption and dynamic TLS 1.3 transport security protocols.'
    }
];

const deliverMVPData = {
    label: "SECURITY EXCELLENCE",
    title: "Our Commitment to Deliver Your Security Framework in",
    accentText: "3-5 months?",
    description: "Leapsofts is an elite custom cybersecurity and risk advisory partner. By combining fully integrated CI/CD, certified security engineers, and dedicated defensive pods, we build and deploy enterprise-ready security architectures within an accelerated 3 to 5 month timeline—on time, every time.",
    items: [
        {
            title: "Proactive Vigilance.",
            description: "Leveraging continuous threat intelligence feeds and automated scans to capture vulnerabilities before release."
        },
        {
            title: "Rapid Remediation.",
            description: "Minimizing data exposure and user downtime through isolated node controls and secure automated failovers."
        },
        {
            title: "Tailored Security.",
            description: "Designing secure networking schemas and zero-trust policies modeled around your distinct digital perimeter."
        },
        {
            title: "Expert Knowledge.",
            description: "Deploying senior security engineers holding advanced credentials including CISSP, CISM, and CEH certifications."
        }
    ]
};

const processPhasesDefault: ProcessPhase[] = [
  {
    id: 1,
    phase: "PHASE 1: THREAT LANDSCAPE DISCOVERY & AUDITING",
    title: "Perimeter Auditing & Threat Profiling",
    description:
      "We map your active server ports, profile user access logs, and audit codebase dependencies.",
    features: [
      {
        title: "Domain Perimeter Scanning",
        description:
          "Scan external domain boundaries, exposed API routes, and network ports for security loopholes."
      },
      {
        title: "Legacy Codebase SAST Auditing",
        description:
          "Run static analysis scans on active code repositories to discover hardcoded access keys or query vulnerabilities."
      },
      {
        title: "Compliance Gap Analysis",
        description:
          "Evaluate historical systems against target compliance registries (SOC2, HIPAA, GDPR) to build gap reports."
      }
    ]
  },
  {
    id: 2,
    phase: "PHASE 2: ZERO-TRUST ARCHITECTURE & DEFENSIVE DESIGN",
    title: "Zero-Trust Layouts & Encryption Models",
    description:
      "Designing strict IAM parameters, data encryption layers, and SIEM logging triggers.",
    features: [
      {
        title: "Zero-Trust IAM Directory Design",
        description:
          "Model precise role-based access rules (RBAC), multi-factor checks, and rotating key operations."
      },
      {
        title: "End-to-End Encryption Schemas",
        description:
          "Draft system-wide data protection architectures using AES-256 at-rest and TLS 1.3 in-transit."
      },
      {
        title: "SIEM Telemetry Logs Setup",
        description:
          "Define database logging guidelines and configure automatic alert thresholds inside SIEM dashboards."
      }
    ]
  },
  {
    id: 3,
    phase: "PHASE 3: HIGH-VELOCITY SECURITY INTEGRATION & TESTING",
    title: "Security Tooling & Penetration Testing",
    description:
      "Deploying firewalls, automated vulnerability checks, and running simulated system exploits.",
    features: [
      {
        title: "Web App Firewall & WAF Setup",
        description:
          "Configure Cloudflare edge protection shields and automated WAF rate-limiting triggers."
      },
      {
        title: "Penetration Testing Sprints",
        description:
          "Conduct simulated manual and automated penetration sweeps against database nodes and network clusters."
      },
      {
        title: "CI/CD SAST Pipeline Blocks",
        description:
          "Integrate automated vulnerability scanner blocks within active GitHub/GitLab code release tracks."
      }
    ]
  },
  {
    id: 4,
    phase: "PHASE 4: CONTINUOUS VIGILANCE & THREAT MONITORING",
    title: "SOC Telemetry Auditing & Patch Evolutions",
    description:
      "Around-the-clock security scans, dynamic access key rotations, and regular OS upgrades.",
    features: [
      {
        title: "24/7 Managed SOC Telemetry Logs",
        description:
          "Orchestrate continuous SIEM scanning sweeps to catch, analyze, and quarantine incoming threats."
      },
      {
        title: "Automated Penetration Sweeps",
        description:
          "Schedule regular automated pentest sweeps and update access credential variables dynamically."
      },
      {
        title: "Dynamic Core Patch Upgrades",
        description:
          "Perform regular software version updates, database security updates, and infrastructure configurations tuning."
      }
    ]
  }
];

const phaseLabelsDefault = [
  "STRATEGY & DISCOVERY",
  "ZERO-TRUST & ENCRYPTION",
  "SECURITY CODING & PENTESTS",
  "SOC TELEMETRY & MONITORING",
];

const title = "Enterprise Cyber Security, Threat Mitigation & Zero-Trust Governance";
const subtitle = "";

const introDescription = [
  { text: "We deliver advanced threat mitigation, custom ", bold: false },
  { text: "Zero-Trust Identity & Access Management (IAM) architectures", bold: true },
  { text: ", and continuous SOC security operations monitoring. By streamlining automated static code analysis, vulnerability assessments, and multi-region database encryption networks, we engineer secure systems constructed to repel intrusion events and enforce global compliance standards.", bold: false }
]

export function meta() {
  const title = "Cyber Security Services | Leapsofts";
  const description = "Enterprise-grade cybersecurity services including penetration testing, zero-trust architecture & compliance. Leapsofts protects your digital assets. Get started.";
  const keywords = "cybersecurity services, penetration testing company, zero-trust security, enterprise security solutions, cybersecurity consulting";
  const canonicalUrl = "https://www.leapsofts.com/services/cyber-security";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Cyber Security Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "Cyber Security & Penetration Testing",
      "description": "Enterprise-grade cybersecurity services including penetration testing, zero-trust architecture & compliance."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.leapsofts.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Security",
          "item": "https://www.leapsofts.com/services/cyber-security"
        }
      ]
    }
  ]
};

const CyberSecurity: React.FC = () => {
  const { data } = useServicePage('cyber-security');

  
  const activeInfoGridData = (data?.infoGrid && data.infoGrid.items?.length)
    ? {
        label: data.infoGrid.label || (typeof infoGridData !== 'undefined' ? infoGridData.label : ''),
        title: data.infoGrid.titleMain || data.infoGrid.titleAccent || (typeof infoGridData !== 'undefined' ? infoGridData.title : ''),
        description: data.infoGrid.description || (typeof infoGridData !== 'undefined' ? infoGridData.description : ''),
        items: data.infoGrid.items.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          description: item.description
        }))
      }
    : (typeof infoGridData !== 'undefined' ? infoGridData : { items: [] });

  
  const activeEmergingTechData = (data?.emergingTech && data.emergingTech.items?.length)
    ? {
        label: data.emergingTech.label || (typeof cyberSecurityData !== 'undefined' ? cyberSecurityData.label : ''),
        titleAccent: data.emergingTech.titleAccent || (typeof cyberSecurityData !== 'undefined' ? cyberSecurityData.titleAccent : ''),
        titleMain: data.emergingTech.titleMain || (typeof cyberSecurityData !== 'undefined' ? cyberSecurityData.titleMain : ''),
        description: data.emergingTech.description || (typeof cyberSecurityData !== 'undefined' ? cyberSecurityData.description : ''),
        items: data.emergingTech.items.map(item => ({
          icon: (item.icon || 'enterprise') as any,
          title: item.title,
          description: item.description
        }))
      }
    : (typeof cyberSecurityData !== 'undefined' ? cyberSecurityData : { label: '', titleAccent: '', titleMain: '', description: '', items: [] });

  
  const activeDeliverMVPData = (data?.deliverMVP && data.deliverMVP.items?.length)
    ? {
        label: data.deliverMVP.label || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.label : ''),
        title: data.deliverMVP.title || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.title : ''),
        accentText: data.deliverMVP.accentText || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.accentText : ''),
        description: data.deliverMVP.description || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.description : ''),
        items: data.deliverMVP.items || (typeof deliverMVPData !== 'undefined' ? deliverMVPData.items : [])
      }
    : (typeof deliverMVPData !== 'undefined' ? deliverMVPData : { label: '', title: '', accentText: '', description: '', items: [] });

  const activeTitle = data?.hero?.title || title;
  const activeSubtitle = data?.hero?.subtitle || subtitle;
  const activeIntroDescription = data?.hero?.introText
    ? [{ text: data.hero.introText, bold: false }]
    : introDescription;

  const activeOverviewData = (data?.serviceOverview)
    ? {
        label: data.serviceOverview.label || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.label : ''),
        titleMain: data.serviceOverview.titleMain || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleMain : ''),
        titleAccent: data.serviceOverview.titleAccent || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleAccent : ''),
        titleEnd: data.serviceOverview.titleEnd || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.titleEnd : ''),
        description: data.serviceOverview.description || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.description : ''),
        imagePath: data.serviceOverview.imageUrl || (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData.imagePath : undefined)
      }
    : (typeof serviceOverviewData !== 'undefined' ? serviceOverviewData : null);

  const activeProcessPhases = (data?.processes?.processPhases && data.processes.processPhases.length > 0)
    ? data.processes.processPhases
    : processPhasesDefault;

  const activePhaseLabels = (data?.processes?.phaseLabels && data.processes.phaseLabels.length > 0)
    ? data.processes.phaseLabels
    : phaseLabelsDefault;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <IntroComponent
        title={activeTitle}
        description={activeSubtitle}
        introDescription={activeIntroDescription}
      />
            <ServiceOverview
                label={serviceOverviewData.label}
                titleMain={serviceOverviewData.titleMain}
                titleAccent={serviceOverviewData.titleAccent}
                titleEnd={serviceOverviewData.titleEnd}
                description={serviceOverviewData.description}
                imagePath={serviceOverviewData.imagePath}
            />
            <InfoGrid data={activeInfoGridData} />
            <StreamlineSuccess
                label="COMPLIMENTARY STRATEGY SESSION"
                titleMain="Map your "
                titleAccent="cybersecurity"
                titleEnd=" roadmap."
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <ServiceFeatures
                title='Expert Defensive Skills'
                description='We deliver specialized security services to support your entire organization.'
                items={serviceFeaturesData}
            />
            <DeliverMVP data={activeDeliverMVPData} />
            <EmergingTech data={activeEmergingTechData} />
            <Processes title="OUR CUSTOM CYBERSECURITY PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
            <RelatedServices
                services={[
                    {
                        title: "Data Governance Services",
                        description: "Establish zero-trust data access controls, audit trails, and compliance management.",
                        link: "/services/data-governance"
                    },
                    {
                        title: "Cloud Engineering & Security",
                        description: "Harden cloud networks, IAM roles, and infrastructure subnets on AWS, Azure & GCP.",
                        link: "/services/cloud-engineering"
                    },
                    {
                        title: "DevOps & DevSecOps",
                        description: "Automate security scanning, static code analysis, and container vulnerability checks.",
                        link: "/services/devops"
                    }
                ]}
            />
        </>
    );
};

export default CyberSecurity;
