import React from 'react';
import {
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Cpu,
  Radio,
  Activity,
  Database,
  Network,
  Car,
  HeartPulse,
  Landmark,
  FileCheck,
  Building2,
  HardHat,
  Flame,
  Truck,
  GraduationCap,
  Rocket,
  ShoppingBag,
  Film,
  Briefcase
} from 'lucide-react';
import styles from './IndustryHero.module.css';
import Button from '../Button/Button';
import { useContactModal } from '../../context/ContactModalContext';
import { parseFormattedText, type FormattedSegment } from '../../utils/textParser';

export interface IndustryHeroProps {
  title: string;
  subtitle?: string;
  description?: string | FormattedSegment[];
  introDescription?: FormattedSegment[];
  buttonText?: string;
  onButtonClick?: () => void;
  industryKey?: string;
  badgeText?: string;
  secondaryButtonText?: string;
  secondaryButtonTarget?: string;
}

interface DomainConfig {
  sectorTag: string;
  protocolStatus: string;
  tier1: {
    label: string;
    title: string;
    status: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  };
  tier2: {
    label: string;
    title: string;
    status: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  };
  tier3: {
    label: string;
    title: string;
    status: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  };
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metric3: { value: string; label: string };
  trustBadges: string[];
}

const DOMAIN_REGISTRY: Record<string, DomainConfig> = {
  automotive: {
    sectorTag: 'CONNECTED CARS & MOBILITY SYSTEMS',
    protocolStatus: 'CAN-BUS 2.0 • ISO 15118 • MQTT TELEMETRY',
    tier1: {
      label: 'Edge & Ingestion',
      title: 'CAN-Bus & OBD-II Telematics Ingestion',
      status: 'Active Telemetry',
      icon: Radio,
    },
    tier2: {
      label: 'Security & Firmware Vault',
      title: 'Cryptographic HSM Over-The-Air (OTA) Vault',
      status: 'ISO 26262 ASIL-D',
      icon: Lock,
    },
    tier3: {
      label: 'Autonomous Core',
      title: 'V2X Cloud Gateway & Fleet Telemetry AI',
      status: 'Sub-15ms Sync',
      icon: Car,
    },
    metric1: { value: 'ISO 26262', label: 'ASIL-D Certified' },
    metric2: { value: '3-5 Mo', label: 'MVP Launch Speed' },
    metric3: { value: '<12ms', label: 'Edge-to-Cloud Latency' },
    trustBadges: ['ISO 26262 ASIL-D', 'MISRA C/C++ Certified', 'UNECE R155/R156 Ready'],
  },
  healthcare: {
    sectorTag: 'HEALTHCARE & CLINICAL INTEROPERABILITY',
    protocolStatus: 'HL7/FHIR • AES-256 VAULT • WEBRTC TELEHEALTH',
    tier1: {
      label: 'Patient Edge Layer',
      title: 'Medical Devices & Remote EHR Ingestion',
      status: 'Device Sync',
      icon: HeartPulse,
    },
    tier2: {
      label: 'Compliance Vault',
      title: 'End-to-End HIPAA Cryptographic Vault',
      status: 'HIPAA & HITECH',
      icon: ShieldCheck,
    },
    tier3: {
      label: 'Clinical Decision Core',
      title: 'Bidirectional HL7/FHIR Diagnostic Engine',
      status: '99.999% Reliability',
      icon: Activity,
    },
    metric1: { value: 'HIPAA & HITECH', label: 'Strict Compliance' },
    metric2: { value: 'HL7 / FHIR', label: 'EHR Interoperable' },
    metric3: { value: '99.999%', label: 'Clinical Uptime' },
    trustBadges: ['HIPAA Compliant', 'HL7/FHIR Certified', 'SOC 2 Type II Audited'],
  },
  finance: {
    sectorTag: 'FINTECH & HIGH-CONCURRENCY CAPITAL SYSTEMS',
    protocolStatus: 'ISO 20022 • ENCRYPTED LEDGER • REAL-TIME SETTLEMENT',
    tier1: {
      label: 'Omnichannel Edge',
      title: 'Point of Sale & Mobile Digital Wallets',
      status: 'Zero Latency',
      icon: Landmark,
    },
    tier2: {
      label: 'Financial Bus',
      title: 'ISO 20022 Gateway & Tokenized Clearing Vault',
      status: 'PCI-DSS Level 1',
      icon: Lock,
    },
    tier3: {
      label: 'Autonomous Intelligence',
      title: 'Real-Time Fraud Detection & Ledger Engine',
      status: '<10ms Settlement',
      icon: Database,
    },
    metric1: { value: 'PCI-DSS L1', label: 'Cardholder Security' },
    metric2: { value: 'Sub-10ms', label: 'Clearing Velocity' },
    metric3: { value: 'SOC 2 Ready', label: 'Audited Systems' },
    trustBadges: ['PCI-DSS Level 1', 'ISO 20022 Standard', 'SOC 2 Type II Certified'],
  },
  compliance: {
    sectorTag: 'REGTECH & INSTITUTIONAL GOVERNANCE',
    protocolStatus: 'WORM AUDIT LOG • SOC 2 TYPE II • CONTINUOUS MONITORING',
    tier1: {
      label: 'Audit Ingestion',
      title: 'Immutable WORM Audit Logging Stream',
      status: 'Tamper-Proof',
      icon: FileCheck,
    },
    tier2: {
      label: 'Governance Gateway',
      title: 'Continuous SOC 2 & ISO 27001 Monitoring',
      status: 'Continuous Sync',
      icon: ShieldCheck,
    },
    tier3: {
      label: 'Compliance Engine',
      title: 'Automated KYC, AML & Sanction Screening',
      status: 'Zero Risk Gap',
      icon: Network,
    },
    metric1: { value: 'WORM Vault', label: 'Immutable Audit' },
    metric2: { value: 'GDPR / CCPA', label: 'Privacy By Design' },
    metric3: { value: '100% Audit', label: 'Regulatory Ready' },
    trustBadges: ['SOC 2 Type II', 'ISO 27001 Standards', 'GDPR Article 17 Compliant'],
  },
  'real-estate': {
    sectorTag: 'PROPTECH & HIGH-CONCURRENCY ASSET PLATFORMS',
    protocolStatus: 'RESO WEB API • RETS PROTOCOL • SMART IOT TELEMETRY',
    tier1: {
      label: 'Property Edge',
      title: 'Smart Building Sensors & Resident Mobile Hubs',
      status: 'Live Telemetry',
      icon: Building2,
    },
    tier2: {
      label: 'Transaction Core',
      title: 'Multi-Tenant Lease Pipeline & Escrow Vault',
      status: 'Encrypted Vault',
      icon: Lock,
    },
    tier3: {
      label: 'Valuation Intelligence',
      title: 'Dynamic Asset Valuation & MLS Data Bus',
      status: 'RESO Standard',
      icon: Database,
    },
    metric1: { value: 'RESO API', label: 'MLS Interoperable' },
    metric2: { value: 'Instant Lease', label: 'Digital Escrow' },
    metric3: { value: '99.9%', label: 'Platform Uptime' },
    trustBadges: ['RESO Web API Ready', 'Encrypted Lease Vault', 'Enterprise Scalability'],
  },
  construction: {
    sectorTag: 'CONSTRUCTION & FIELD INFRASTRUCTURE PLATFORMS',
    protocolStatus: 'OPENBIM IFC • CLOUD TELEMETRY • OSHA COMPLIANCE',
    tier1: {
      label: 'Jobsite Ingestion',
      title: 'Jobsite Sensor Telemetry & Drone Scans',
      status: 'Real-Time Edge',
      icon: HardHat,
    },
    tier2: {
      label: 'Collaboration Gateway',
      title: 'BIM Cloud Data Bus & Safety Sync Vault',
      status: 'ISO 19650 BIM',
      icon: Layers,
    },
    tier3: {
      label: 'Operations Engine',
      title: 'Predictive Resource & Subcontractor ERP',
      status: 'OSHA Compliant',
      icon: Cpu,
    },
    metric1: { value: 'ISO 19650', label: 'BIM Standard' },
    metric2: { value: '3-5 Mo', label: 'MVP Velocity' },
    metric3: { value: 'Real-Time', label: 'Safety Telemetry' },
    trustBadges: ['ISO 19650 BIM Standards', 'OSHA Logging Ready', 'Sub-Second Field Sync'],
  },
  energy: {
    sectorTag: 'ENERGY & SMART UTILITY INFRASTRUCTURE',
    protocolStatus: 'MODBUS / DNP3 • IEC 61850 • REAL-TIME TELEMETRY',
    tier1: {
      label: 'Grid Ingestion',
      title: 'Smart Meter & Distributed Grid Telemetry',
      status: 'Active Feed',
      icon: Flame,
    },
    tier2: {
      label: 'Critical Infrastructure Vault',
      title: 'SCADA Interconnect & NERC-CIP Gateway',
      status: 'NERC-CIP Compliant',
      icon: ShieldCheck,
    },
    tier3: {
      label: 'Dispatch Intelligence',
      title: 'Real-Time Grid Load Balancing & Battery AI',
      status: 'Sub-Second Dispatch',
      icon: Zap,
    },
    metric1: { value: 'NERC CIP', label: 'Grid Security' },
    metric2: { value: 'Sub-Second', label: 'Dispatch Speed' },
    metric3: { value: '99.999%', label: 'Utility Reliability' },
    trustBadges: ['NERC CIP Aligned', 'IEC 61850 Protocols', 'Fault-Tolerant Grid Architecture'],
  },
  transportation: {
    sectorTag: 'LOGISTICS & GLOBAL SUPPLY CHAIN SYSTEMS',
    protocolStatus: 'EDI 204/214 • MQTT TELEMETRY • CLOUD FLEET ROUTING',
    tier1: {
      label: 'Fleet Telemetry',
      title: 'Live GPS Sensors & Cold-Chain Telemetry',
      status: 'Continuous Stream',
      icon: Truck,
    },
    tier2: {
      label: 'Logistics Bus',
      title: 'Cross-Border Freight Gateway & EDI Bus',
      status: 'EDI 204/214',
      icon: Network,
    },
    tier3: {
      label: 'Optimization Core',
      title: 'Automated Route Planning & Freight Dispatch AI',
      status: 'Dynamic ETA',
      icon: Database,
    },
    metric1: { value: 'Dynamic ETA', label: 'Zero Blindspots' },
    metric2: { value: 'EDI Bus', label: 'Carrier Integration' },
    metric3: { value: '3-5 Mo', label: 'MVP Velocity' },
    trustBadges: ['EDI 204/214 Integration', 'Cold-Chain Telemetry', 'Carrier API Ready'],
  },
  education: {
    sectorTag: 'EDTECH & LEARNING MANAGEMENT PLATFORMS',
    protocolStatus: 'LTI ADVANTAGE • SCORM/XAPI • ENCRYPTED PII VAULT',
    tier1: {
      label: 'Classroom Edge',
      title: 'Interactive Student Portals & Live Stream',
      status: 'WebRTC Low Latency',
      icon: GraduationCap,
    },
    tier2: {
      label: 'Privacy Shield',
      title: 'FERPA & COPPA Student Privacy Vault',
      status: 'FERPA / COPPA',
      icon: Lock,
    },
    tier3: {
      label: 'Curriculum Core',
      title: 'Adaptive Learning Analytics & LMS Bridge',
      status: 'LTI 1.3 Certified',
      icon: Activity,
    },
    metric1: { value: 'FERPA & COPPA', label: 'Student Data Security' },
    metric2: { value: 'LTI 1.3', label: 'Global LMS Standard' },
    metric3: { value: 'Zero Latency', label: 'Live Video Sync' },
    trustBadges: ['FERPA / COPPA Compliant', '1EdTech LTI 1.3 Standard', 'SOC 2 Architecture'],
  },
  startups: {
    sectorTag: 'VENTURE SCALE & RAPID MVP DEPLOYMENTS',
    protocolStatus: 'EVENT-DRIVEN • SERVERLESS SCALE • SOC 2 READY',
    tier1: {
      label: 'Modular Frontend',
      title: 'Cross-Platform React Native & Next.js Stacks',
      status: 'Mobile & Web',
      icon: Rocket,
    },
    tier2: {
      label: 'Scale Backbone',
      title: 'Serverless Event-Driven Cloud Microservices',
      status: 'Auto-Scaling',
      icon: Layers,
    },
    tier3: {
      label: 'Growth Core',
      title: 'Product-Led Analytics & Automated Funnels',
      status: 'Analytics Active',
      icon: Zap,
    },
    metric1: { value: '3-5 Months', label: 'Concept to Market' },
    metric2: { value: 'Zero Debt', label: 'Clean Architecture' },
    metric3: { value: 'Enterprise Ready', label: 'Cloud Foundation' },
    trustBadges: ['3-5 Month MVP Velocity', 'Serverless Auto-Scaling', 'Clean Enterprise IP'],
  },
  'wholesale-retail': {
    sectorTag: 'OMNICHANNEL COMMERCE & SUPPLY GRIDS',
    protocolStatus: 'HIGH-CONCURRENCY • CART RECOVERY • WMS SYNC',
    tier1: {
      label: 'Storefront Layer',
      title: 'Mobile Apps, Headless Frontends & Smart POS',
      status: 'Sub-Second Paint',
      icon: ShoppingBag,
    },
    tier2: {
      label: 'Inventory Bus',
      title: 'Multi-Warehouse Inventory & ERP Cloud Sync',
      status: 'Live WMS Bus',
      icon: Database,
    },
    tier3: {
      label: 'Conversion Core',
      title: 'Dynamic Pricing, AI Cart Recovery & Checkout',
      status: '99.99% Peak Uptime',
      icon: Zap,
    },
    metric1: { value: 'Sub-Second', label: 'Checkout Latency' },
    metric2: { value: 'Live WMS', label: 'Real-Time Inventory' },
    metric3: { value: '99.99%', label: 'Peak Sale Uptime' },
    trustBadges: ['PCI-DSS Level 1', 'Headless Commerce Architecture', 'High-Concurrency Ready'],
  },
  entertainment: {
    sectorTag: 'DIGITAL MEDIA & STREAMING INFRASTRUCTURE',
    protocolStatus: 'HLS / DASH • WIDEVINE / FAIRPLAY • REAL-TIME PEER SYNC',
    tier1: {
      label: 'Streaming Edge',
      title: 'Ultra-Low Latency Video Streaming & WebRTC',
      status: '<200ms Live Latency',
      icon: Film,
    },
    tier2: {
      label: 'Digital Rights Vault',
      title: 'Widevine / FairPlay DRM Security Vault',
      status: 'DRM Hardware Protected',
      icon: Lock,
    },
    tier3: {
      label: 'Content Engine',
      title: 'AI Recommendation & Global Multi-CDN Bus',
      status: 'Multi-CDN Routing',
      icon: Network,
    },
    metric1: { value: '<200ms', label: 'Global Live Latency' },
    metric2: { value: 'DRM Vault', label: 'Widevine & FairPlay' },
    metric3: { value: 'Multi-CDN', label: 'Zero Stream Buffering' },
    trustBadges: ['Ultra-Low Latency WebRTC', 'Hardware DRM Security', 'Multi-CDN Redundancy'],
  },
  'mid-sized-businesses': {
    sectorTag: 'ENTERPRISE DIGITAL EVOLUTION & SCALING',
    protocolStatus: 'API INTEGRATION BUS • AUTOMATED CI/CD • SECURE CLOUD',
    tier1: {
      label: 'Modernization Layer',
      title: 'Legacy Monolith Re-Engineering & API Bridges',
      status: 'Zero Disruption',
      icon: Briefcase,
    },
    tier2: {
      label: 'Enterprise Bus',
      title: 'Automated CI/CD Pipelines & Cloud Microservices',
      status: 'SOC 2 & ISO 27001',
      icon: ShieldCheck,
    },
    tier3: {
      label: 'Operational Core',
      title: 'Executive BI Dashboards & Workflow Automation',
      status: 'Real-Time Insights',
      icon: Activity,
    },
    metric1: { value: '3-5 Mo', label: 'Time to Value' },
    metric2: { value: 'SOC 2 Ready', label: 'Enterprise Security' },
    metric3: { value: 'Zero Disruption', label: 'Safe Migration' },
    trustBadges: ['SOC 2 & ISO 27001', 'Zero Business Downtime', 'Modular Architecture'],
  },
};

const DEFAULT_CONFIG = DOMAIN_REGISTRY.automotive;

const renderEnhancedTitle = (rawTitle: string) => {
  const words = rawTitle.trim().split(' ');
  if (words.length >= 3) {
    const mainPart = words.slice(0, -2).join(' ');
    const accentPart = words.slice(-2).join(' ');
    return (
      <>
        {mainPart} <span className={styles.gradientAccent}>{accentPart}</span>
      </>
    );
  }
  return rawTitle;
};

const IndustryHero: React.FC<IndustryHeroProps> = ({
  title,
  subtitle,
  description,
  introDescription,
  buttonText = 'Schedule an Architecture Session',
  onButtonClick,
  industryKey = 'automotive',
  badgeText,
  secondaryButtonText = 'Explore Architecture',
  secondaryButtonTarget = '#process',
}) => {
  const { openContactModal } = useContactModal();

  const handlePrimaryClick = () => {
    openContactModal();
    if (onButtonClick) onButtonClick();
  };

  const cleanKey = (industryKey || '').toLowerCase().trim();
  const domain = DOMAIN_REGISTRY[cleanKey] || DEFAULT_CONFIG;

  const hasIntroDesc = Boolean(introDescription && introDescription.length > 0);
  const activeSubtitle =
    subtitle ||
    (hasIntroDesc && typeof description === 'string' && description.trim().length > 0
      ? description
      : undefined);

  const bodySegments: FormattedSegment[] = hasIntroDesc
    ? parseFormattedText(introDescription!)
    : description
    ? parseFormattedText(description)
    : [];

  const Tier1Icon = domain.tier1.icon;
  const Tier2Icon = domain.tier2.icon;
  const Tier3Icon = domain.tier3.icon;

  return (
    <section className={styles.heroSection} aria-label={`${domain.sectorTag} Overview`}>
      {/* 120 FPS Ambient Layer: No video decode, zero battery/GPU drain */}
      <div className={styles.backdropCanvas} aria-hidden="true">
        <div className={styles.ambientRadialAura} />
        <div className={styles.ambientLeftAura} />
        <div className={styles.isometricGrid} />
      </div>

      <div className={styles.container}>
        {/* Left Column: Command & Value Proposition */}
        <div className={styles.leftCol}>
          {/* Heading */}
          <h1 className={styles.title}>{renderEnhancedTitle(title)}</h1>

          {/* Subtitle */}
          {activeSubtitle && <h2 className={styles.heroSubtitle}>{activeSubtitle}</h2>}

          {/* Body paragraphs with bold keyword pills */}
          {bodySegments.length > 0 && (
            <p className={styles.descriptionBox}>
              {bodySegments.map((segment, idx) => (
                <span key={idx} className={segment.bold ? styles.boldTag : ''}>
                  {segment.text}
                </span>
              ))}
            </p>
          )}

          {/* Primary Action CTA */}
          <div className={styles.actionsRow}>
            <Button
              text={buttonText}
              color1="var(--color-primary)"
              color2="var(--color-primary-light)"
              onClick={handlePrimaryClick}
              hasIcon
            />
          </div>

          {/* Micro Trust & Compliance Ribbon */}
          <div className={styles.trustRibbon}>
            {domain.trustBadges.map((badge, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className={styles.trustDivider}>•</span>}
                <div className={styles.trustItem}>
                  <ShieldCheck size={14} className={styles.trustIcon} />
                  <span>{badge}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Cascading Staircase Architecture */}
        <div className={styles.rightCol} aria-hidden="true">
          <div className={styles.staircaseStage}>
            {/* SVG Gradient Defs for Stepping Laser Pulses */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="stairLaserGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="stairLaserGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step 1 Node (Top-Left) */}
            <div className={`${styles.stairNode} ${styles.stairStep1}`}>
              <div className={styles.stairHeader}>
                <span className={styles.stepBadge}>STEP 01 // INGESTION</span>
                <span className={`${styles.nodePill} ${styles.pillTier1}`}>{domain.tier1.status}</span>
              </div>
              <div className={styles.nodeBody}>
                <div className={`${styles.nodeIconBox} ${styles.nodeTier1}`}>
                  <Tier1Icon size={19} />
                </div>
                <div className={styles.nodeInfo}>
                  <div className={styles.nodeTierLabel}>{domain.tier1.label}</div>
                  <div className={styles.nodeName}>{domain.tier1.title}</div>
                </div>
              </div>
            </div>

            {/* Stepped Conduit 1 (Step 1 -> Step 2) */}
            <div className={`${styles.stairConduit} ${styles.conduit1}`}>
              <svg className={`${styles.conduitSvg} ${styles.desktopConduit}`} viewBox="0 0 200 36" fill="none" preserveAspectRatio="none">
                <path d="M 65,0 L 65,18 L 100,18 L 100,36" className={styles.conduitTrack} />
                <path d="M 65,0 L 65,18 L 100,18 L 100,36" className={styles.conduitPulse1} />
              </svg>
              <svg className={`${styles.conduitSvg} ${styles.mobileConduit}`} viewBox="0 0 200 36" fill="none" preserveAspectRatio="none">
                <path d="M 100,0 L 100,36" className={styles.conduitTrack} />
                <path d="M 100,0 L 100,36" className={styles.conduitPulse1} />
              </svg>
            </div>

            {/* Step 2 Node (Center) */}
            <div className={`${styles.stairNode} ${styles.stairStep2}`}>
              <div className={styles.stairHeader}>
                <span className={styles.stepBadge}>STEP 02 // SECURITY VAULT</span>
                <span className={`${styles.nodePill} ${styles.pillTier2}`}>{domain.tier2.status}</span>
              </div>
              <div className={styles.nodeBody}>
                <div className={`${styles.nodeIconBox} ${styles.nodeTier2}`}>
                  <Tier2Icon size={19} />
                </div>
                <div className={styles.nodeInfo}>
                  <div className={styles.nodeTierLabel}>{domain.tier2.label}</div>
                  <div className={styles.nodeName}>{domain.tier2.title}</div>
                </div>
              </div>
            </div>

            {/* Stepped Conduit 2 (Step 2 -> Step 3) */}
            <div className={`${styles.stairConduit} ${styles.conduit2}`}>
              <svg className={`${styles.conduitSvg} ${styles.desktopConduit}`} viewBox="0 0 200 36" fill="none" preserveAspectRatio="none">
                <path d="M 100,0 L 100,18 L 135,18 L 135,36" className={styles.conduitTrack} />
                <path d="M 100,0 L 100,18 L 135,18 L 135,36" className={styles.conduitPulse2} />
              </svg>
              <svg className={`${styles.conduitSvg} ${styles.mobileConduit}`} viewBox="0 0 200 36" fill="none" preserveAspectRatio="none">
                <path d="M 100,0 L 100,36" className={styles.conduitTrack} />
                <path d="M 100,0 L 100,36" className={styles.conduitPulse2} />
              </svg>
            </div>

            {/* Step 3 Node (Bottom-Right) */}
            <div className={`${styles.stairNode} ${styles.stairStep3}`}>
              <div className={styles.stairHeader}>
                <span className={styles.stepBadge}>STEP 03 // INTELLIGENCE</span>
                <span className={`${styles.nodePill} ${styles.pillTier3}`}>{domain.tier3.status}</span>
              </div>
              <div className={styles.nodeBody}>
                <div className={`${styles.nodeIconBox} ${styles.nodeTier3}`}>
                  <Tier3Icon size={19} />
                </div>
                <div className={styles.nodeInfo}>
                  <div className={styles.nodeTierLabel}>{domain.tier3.label}</div>
                  <div className={styles.nodeName}>{domain.tier3.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
