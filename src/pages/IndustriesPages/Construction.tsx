import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENT TO CONSTRUCTION SUCCESS",
  title: "Unwavering Standards for Builders",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Uninterrupted Field Operations',
      description: "Engineering high-performance, offline-first mobile databases that allow crew leads and site inspectors to log tasks, update schedules, and snap photo reports with zero cellular connection."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Total Project Accountability',
      description: "Centralizing city building permits, subcontractor timelines, daily log logs, and labor hours under a single dashboard that keeps everyone focused on project deadlines."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Seamless Financial Governance',
      description: "Connecting construction operations with accounting ERP tools like QuickBooks and Sage to automate subcontractor payouts, materials purchases, and daily expense reports."
    }
  ]
};

const constructionSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Our solutions for',
  titleMain: 'Construction Firms',
  description: 'We build end-to-end construction management platforms that optimize field operations, streamline back-office tasks, and ensure project profitability.',
  items: [
    {
      icon: 'legacy',
      title: 'Offline-First Field Companions',
      description: "Building responsive mobile apps letting foreman log materials, record labor hours, and submit photo-backed progress updates from remote areas without cell signals."
    },
    {
      icon: 'enterprise',
      title: 'BIM 3D Model Synch Bridges',
      description: "Integrating building information modeling (BIM) engines to map 3D construction blueprints with active subcontractor work phases dynamically."
    },
    {
      icon: 'thirdParty',
      title: 'ERP & Sage Accounting Bridges',
      description: "Developing safe billing synchronizations with Sage, QuickBooks, and Procore to manage contractor draws, lien waivers, and purchase orders."
    },
    {
      icon: 'product',
      title: 'Subcontractor Central Portals',
      description: "Structuring secure bidder portals to distribute RFP details, collect scope proposals, upload insurance records, and approve daily work tickets."
    },
    {
      icon: 'saas',
      title: 'Heavy Equipment IoT Telemetry',
      description: "Connecting IoT sensors to track heavy excavator fuel burn metrics, GPS geofences, and machine engine hours to optimize fleet usage."
    },
    {
      icon: 'mobile',
      title: 'Compliance & OSHA safety Audits',
      description: "Digitizing safety checklists, managing OSHA incident reports, and running automated onsite risk evaluations to comply with building standards."
    },
    {
      icon: 'product',
      title: 'Smart Concrete & Steel Ledgers',
      description: "Tracking raw bulk materials delivery logs, concrete pour curing timelines, and structural steel arrivals against active delivery trucks."
    },
    {
      icon: 'enterprise',
      title: 'RFP Bidding & Estimation Engines',
      description: "Integrating cost calculators displaying active concrete, steel, and labor rates to help contractors compile profitable RFP responses."
    }
  ]
};

const streamlineDescription = [
  { text: "Build a ", bold: false },
  { text: "stronger digital foundation ", bold: true },
  { text: "for your construction projects. Leapsofts offers a ", bold: false },
  { text: "complimentary construction strategy session ", bold: true },
  { text: "to help you optimize your ", bold: false },
  { text: "project lifecycle ", bold: true },
  { text: "from bidding to delivery.", bold: false },
];

const title = "Construction Software Development, Offline-First Field Apps & BIM Integrations";
const subtitle = "";
const introDescription = [
  { text: "At Leapsofts, we engineer highly robust, safety-centric ", bold: false },
  { text: "construction management platforms, offline-first field logging systems, and intelligent BIM telemetry connectors ", bold: true },
  { text: "designed to provide total visibility across complex job sites and high-stakes projects. By automating subcontractor task dispatches, deploying real-time fleet utilization trackers, and integrating secure payment checkpoints, we help builders scale operations, control budget leakages, and guarantee safety standard compliance.", bold: false }
];

const Construction: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Construction Management Software",
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
        titleMain="Project "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={constructionSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" construction businesses"
      />
    </>
  );
};

export default Construction;
