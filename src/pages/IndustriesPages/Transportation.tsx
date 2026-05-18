import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENTS TO LOGISTICS EXCELLENCE",
  title: "Built for Strategic Scale & Ownership",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Real-Time Fleet Visibility',
      description: "Integrating high-frequency GPS telematics and vehicle OBD-II metrics tunnels to trace precise transit schedules, driver rest hours, and cargo status from dispatch to delivery."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Resource Capacity Optimization',
      description: "Deploying intelligent load-matching algorithms and multi-warehouse supply chain trackers that ensure full truckloads (FTL) and prevent dry-van empty miles."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Proprietary Technical Advantage',
      description: "Architecting fully bespoke, modular TMS frameworks that remain direct intellectual assets of your logistics enterprise, enabling secure API sharing with brokers."
    }
  ]
};

const transportationSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Logistics-Focused',
  titleMain: ' Digital Solutions',
  description: 'We engineer custom Transportation Management Systems (TMS) that automate processes, improve operational efficiency, and drive global scalability.',
  items: [
    {
      icon: 'legacy',
      title: 'Fleet Telematics & Diagnostics',
      description: "Aggregating vehicle engine diagnostics, tire pressure logs, and predictive mechanical service alerts to schedule garage repairs before breakdowns occur."
    },
    {
      icon: 'enterprise',
      title: 'GPS Coordinate Plotting',
      description: "Plotting high-frequency geographic locations alongside driver rest-hour logs to maintain strict HOS and ELD regulatory safety compliance."
    },
    {
      icon: 'thirdParty',
      title: 'Smart Warehouse Management',
      description: "Automating cross-docking workflows, tracking shelf inventory quantities via barcode scans, and managing inbound carrier shipping reservations."
    },
    {
      icon: 'saas',
      title: 'Carrier & Broker Portals',
      description: "Developing safe dashboards letting broker networks post shipment details, coordinate carrier bidding runs, and upload bills of lading (BOL)."
    },
    {
      icon: 'product',
      title: 'Custom TMS Architectures',
      description: "Structuring scalable, multi-tenant Transportation Management Systems containing modular dispatch boards and pricing engines."
    },
    {
      icon: 'mobile',
      title: 'Live SQL Logistics Metrics',
      description: "Delivering real-time SQL business intelligence reports summarizing cost-per-mile ratios, on-time delivery levels, and driver utilization curves."
    },
    {
      icon: 'product',
      title: 'IoT Cold Chain Telemetry',
      description: "Deploying active Bluetooth temperature and humidity monitors inside cargo holds to preserve sensitive food and pharmaceutical shipments."
    },
    {
      icon: 'enterprise',
      title: 'Carrier Payout Gateways',
      description: "Integrating Stripe payment gateways to automate driver quick-pay disbursements, process invoice financing, and track fuel card balances."
    }
  ]
};

const streamlineDescription = [
  { text: "Accelerate your ", bold: false },
  { text: "logistics supply chain ", bold: true },
  { text: "with a modern technical infrastructure. Leapsofts offers a ", bold: false },
  { text: "complimentary transportation strategy session ", bold: true },
  { text: "to help you optimize ", bold: false },
  { text: "fleet management and route efficiency.", bold: true },
];

const title = "Transportation Software Development, Fleet Telematics & Custom TMS Solutions";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we engineer resilient, enterprise-grade ", bold: false },
  { text: "Transportation Management Systems (TMS), real-time fleet telematics platforms, and multi-warehouse coordination portals ", bold: true },
  { text: "designed to streamline global supply chains and logistics corridors. By implementing automated driver dispatch engines, tracking live cargo temperature telemetry, and deploying intelligent route optimization algorithms, we help fleet operators and shipping lines maximize capacity and lower fuel burn overheads.", bold: false }
];

const Transportation: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Logistics & Fleet Solutions",
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
        titleMain="Logistics "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={transportationSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" transportation businesses"
      />
    </>
  );
};

export default Transportation;
