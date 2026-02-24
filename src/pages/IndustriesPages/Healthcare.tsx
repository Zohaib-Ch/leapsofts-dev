import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection from '../../components/CommitmentSection/CommitmentSection'
import { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech from '../../components/EmergingTech/EmergingTech'
import { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO HEALTHCARE",
    title: "Custom solutions empowering healthcare providers to put patients first",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Efficiency',
            description: "From workflow optimization to inventory to billing and revenue management, Syberry's custom healthcare software solutions can optimize every time-consuming process and workflow, minimizing human error and freeing up resources for what really matters."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Improved Care',
            description: "The right healthcare software can enhance the level of care medical experts provide, from EHR systems to telemedicine and patient engagement capabilities to real-time data analysis through integration with medical devices — just for starters."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Compliance',
            description: "Healthcare organizations must adhere to HIPAA and other strict regulations to protect patient privacy. Our custom healthcare software development is designed to ensure complete data privacy and compliance with regulatory requirements."
        },
    ]
}

const ourTechInnovationsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Our solutions for',
    titleMain: 'Healthcare organizations',
    description: 'We create healthcare software that simplifies complexity and drives better outcomes for patients and healthcare professionals. Our solutions support every aspect of healthcare delivery, from clinical workflows to patient communication.',
    items: [
        {
            icon: 'legacy',
            title: 'Banking Digitization',
            description: 'Integrate core financial services into digital ecosystems via cloud and mobile apps.'
        },
        {
            icon: 'enterprise',
            title: 'Talent Retention',
            description: 'Support secure remote work with VDI and zero-trust networks for efficiency and safety.'
        },
        {
            icon: 'thirdParty',
            title: 'Blockchain Integration',
            description: 'Use DLT for secure, transparent, and immutable cross-border payments and smart contracts.'
        },
        {
            icon: 'product',
            title: 'System Modernization',
            description: 'Migrate monolithic systems to modular architectures to meet regulations and new tech.'
        },
        {
            icon: 'saas',
            title: 'Process Optimization',
            description: 'Use AI and BPM tools to automate procedures for faster, personalized, and efficient service.'
        },
        {
            icon: 'legacy',
            title: 'Banking Digitization',
            description: 'Integrate core financial services into digital ecosystems via cloud and mobile apps.'
        },
        {
            icon: 'enterprise',
            title: 'Talent Retention',
            description: 'Support secure remote work with VDI and zero-trust networks for efficiency and safety.'
        },
        {
            icon: 'thirdParty',
            title: 'Blockchain Integration',
            description: 'Use DLT for secure, transparent, and immutable cross-border payments and smart contracts.'
        },
        {
            icon: 'product',
            title: 'System Modernization',
            description: 'Migrate monolithic systems to modular architectures to meet regulations and new tech.'
        },
        {
            icon: 'saas',
            title: 'Process Optimization',
            description: 'Use AI and BPM tools to automate procedures for faster, personalized, and efficient service.'
        }
    ]
}
  const streamlineDescription = [
    { text: "Whether you're modernizing an ", bold: false },
    { text: "existing enterprise software system ", bold: true },
    { text: "or launching a ", bold: false },
    { text: "new digital product", bold: true },
    { text: ", Leapsofts offers a ", bold: false },
    { text: "complimentary software strategy session ", bold: true },
    { text: "designed to deliver value almost immediately. We take the time to understand your business objectives, technical landscape, and operational challenges then provide actionable insights on how ", bold: false },
    { text: "bespoke, cost-effective custom software solutions ", bold: true },
    { text: "can streamline workflows, improve efficiency, and support scalable growth.", bold: false },
  ];
      const title = "Healthcare Software Development";
    const subtitle = ""
    const introDescription = [
        { text: "Leapsofts provides end-to-end healthcare technology solutions, ensuring HIPAA compliance and delivering patient-centric digital experiences.", bold: false },
    ]

const Healthcare: React.FC = () => {
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
                imageUrl="/streamline.png"
            />
            <EmergingTech data={ourTechInnovationsData} />
            <Services />
            <EmergingTech data={ourTechInnovationsData} />
        </>
    )
}

export default Healthcare
