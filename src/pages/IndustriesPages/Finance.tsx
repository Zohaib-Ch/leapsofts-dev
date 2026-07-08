import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO FINANCIAL ORGANIZATIONS",
  title: "Custom FinTech software built to scale transactions and secure assets",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Proactive Threat Shielding',
      description: "Enforcing continuous transaction threat monitoring, secure key lockers, and advanced fraud detection suites to protect high-value customer and institutional assets from cyber threats."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Automated KYC/AML Checks',
      description: "Integrating automated verification loops, background scans, and instant document reviews to ensure compliance with KYC, AML, and international financial regulations."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Decoupled Data Architecture',
      description: "Structuring highly decoupled transaction databases, multi-region replication layers, and optimized caching to support zero-latency runs and 99.99% operational uptime."
    }
  ]
};

const ourTechInnovationsData: EmergingTechProps['data'] = {
  label: 'TECH INNOVATIONS TO CONSIDER',
  titleAccent: 'Tech innovations for',
  titleMain: 'FinTech solutions',
  description: 'We leverage cutting-edge technologies to future-proof your financial solutions and enhance operational efficiency.',
  items: [
    {
      icon: 'legacy',
      title: 'Core Banking Digitization',
      description: 'Migrate static legacy banking cores to high-performance, API-first microservices pipelines to support scalable accounts management.'
    },
    {
      icon: 'enterprise',
      title: 'PCI Payment Gateways',
      description: 'Integrating secure tokenized credit processors, localized clearing systems, and dynamic multi-currency wallets with complete PCI-DSS compliance.'
    },
    {
      icon: 'thirdParty',
      title: 'Blockchain Ledger Systems',
      description: 'Deploying distributed ledger technologies (DLT) and type-safe smart contracts for transparent, instant cross-border payments and reconciliations.'
    },
    {
      icon: 'product',
      title: 'AI Risk Score Engines',
      description: 'Analyzing active market data, checking loan applications, and detecting transaction anomalies using predictive machine learning workflows.'
    },
    {
      icon: 'saas',
      title: 'Wealth Dashboards',
      description: 'Building sleek, responsive portfolio charts, dynamic fee calculators, and real-time stock telemetry visualizers with smooth animations.'
    },
    {
      icon: 'legacy',
      title: 'Robo-Advisors & Alerts',
      description: 'Developing automated robo-advisor engines, smart savings triggers, and customizable personal asset trackers with interactive controls.'
    },
    {
      icon: 'product',
      title: 'High-Frequency Trading Platforms',
      description: 'Designing low-latency order execution systems, real-time pricing corridors, and high-speed data stream feeds for market makers.'
    },
    {
      icon: 'enterprise',
      title: 'Digital Credit Pipelines',
      description: 'Configuring automated credit underwriting frameworks that verify bank statements and calculate credit risk profiles in seconds.'
    }
  ]
};

const streamlineDescription = [
  { text: "Whether it is an ", bold: false },
  { text: "existing enterprise software system ", bold: true },
  { text: "or a ", bold: false },
  { text: "brand-new fintech startup", bold: true },
  { text: ", we offer a ", bold: false },
  { text: "no-charge strategy session", bold: true },
  { text: ", which can bring value to the table almost in real-time. We learn about your unique compliance needs and share how to streamline your transactions by using ", bold: false },
  { text: "bespoke, PCI-DSS-compliant custom software solutions", bold: true },
  { text: ".", bold: false },
];

const title = "FinTech Software Development, Secure Payment Gateways & Trading Architectures";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we build highly secure, transaction-resilient ", bold: false },
  { text: "financial technology (FinTech) platforms, custom banking portals, and algorithmic trading systems ", bold: true },
  { text: "engineered to handle hyper-scale transaction volumes with absolute precision. By integrating PCI-DSS compliant checkout structures, automating multi-currency clearing runs, and designing real-time risk telemetry engines, we future-proof financial firms and enable zero-friction asset movement.", bold: false }
];

const Finance: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "FinTech App Development",
      titleAccent: "Process"
    });
  }, [setProcessTitle]);

  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <CommitmentSection data={commitmentData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Software "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/strategy_session_dashboard.png"
      />
      <EmergingTech data={ourTechInnovationsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" financial businesses"
      />
    </>
  );
};

export default Finance;
