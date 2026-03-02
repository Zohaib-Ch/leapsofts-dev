import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENTS TO LOGISTICS EXCELLENCE",
    title: "Built for Strategic Scale & Ownership",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Real-Time Business Visibility',
            description: "We provide a 'Birds-Eye View' of your operation through GPS tracking and reporting engines, ensuring you monitor safe driving, cargo integrity, and fleet health."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Resource Optimization',
            description: "By automating warehouse and shipment operations, we ensure full load capacity and on-time arrivals, eliminating inefficiencies that drain your margins."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Proprietary Technical Advantage',
            description: "We build a proprietary framework that you truly own. Your software becomes a competitive asset that scales with your fleet and integrates with your partners."
        },
    ]
}

const transportationSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Logistics-Focused',
    titleMain: ' Digital Solutions',
    description: 'We engineer custom Transportation Management Systems (TMS) that automate processes, improve operational efficiency, and drive global scalability.',
    items: [
        {
            icon: 'legacy',
            title: 'Fleet Operations Management',
            description: 'Proactive maintenance tracking and service scheduling to keep your fleet in peak condition.'
        },
        {
            icon: 'enterprise',
            title: 'GPS & Field Accountability',
            description: 'Real-time reporting on driving practices and shipment status with integrated GPS tracking.'
        },
        {
            icon: 'thirdParty',
            title: 'Warehouse Optimization',
            description: 'Intelligent systems to ensure full load capacity and on-time delivery across your network.'
        },
        {
            icon: 'saas',
            title: 'Vendor & Contractor Hub',
            description: 'Streamline progress tracking, inventory, and payment processing for all third-party partners.'
        },
        {
            icon: 'product',
            title: 'Custom TMS Frameworks',
            description: 'Scalable, proprietary management systems that evolve with your unique logistical needs.'
        },
        {
            icon: 'mobile',
            title: 'Real-Time Reporting',
            description: 'In-depth, data-driven insights and comprehensive performance reports delivered in real-time.'
        }
    ]
}

const streamlineDescription = [
    { text: "Accelerate your ", bold: false },
    { text: "logistics supply chain ", bold: true },
    { text: "with a modern technical infrastructure. Leapsofts offers a ", bold: false },
    { text: "complimentary transportation strategy session ", bold: true },
    { text: "to help you optimize ", bold: false },
    { text: "fleet management and route efficiency.", bold: true },
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
                title="Custom Software for the New Era of Logistics"
                description=""
                introDescription={[
                    { text: "Modernizing traditional routes with custom Transportation Management Systems (TMS) that automate your processes and drive global operational efficiency.", bold: false }
                ]}
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
    )
}

export default Transportation
