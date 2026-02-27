import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess'
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech'
import Services from '../Home/CompanyServices/Services';

const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO EDUCATIONAL INSTITUTIONS",
    title: "Secure, scalable, and student-centered digital solutions",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Off-Campus Access',
            description: "Secure, enterprise-grade applications and VDI solutions that permit students and faculty to access live educational sessions and collaborative tools anywhere, on any device."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Personalized Learning',
            description: "Development of adaptive e-learning modules, Learning Management System (LMS) tools, and AI-driven tutoring features that engage students and support self-paced mastery."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Data & Network Safety',
            description: "Custom-built security solutions designed specifically to meet educational privacy laws (FERPA, COPPA), protecting sensitive institutional data and student records."
        },
    ]
}

const educationSolutionsData: EmergingTechProps['data'] = {
    label: 'OUR SOLUTIONS',
    titleAccent: 'Our solutions for',
    titleMain: 'EdTech & Learning',
    description: 'We partner with educators and institutions to foster secure, dynamic digital learning environments that empower students and optimize administrative workflows.',
    items: [
        {
            icon: 'legacy',
            title: 'Custom LMS Development',
            description: 'Scalable platforms for course management, student tracking, and collaborative learning.'
        },
        {
            icon: 'enterprise',
            title: 'Lesson Planning AI',
            description: 'Automate administrative tasks and assist in curriculum alignment using intelligent AI tools.'
        },
        {
            icon: 'thirdParty',
            title: 'Collaborative Portals',
            description: 'Real-time communication tools for faculty, students, and parents to foster transparent progress tracking.'
        },
        {
            icon: 'product',
            title: 'Digital Content Delivery',
            description: 'Convert traditional materials into interactive, computer-based formats with rich media integration.'
        },
        {
            icon: 'saas',
            title: 'Adaptive Learning Modules',
            description: 'Personalized e-learning paths that adjust to student performance and learning styles.'
        },
        {
            icon: 'mobile',
            title: 'Remote Campus Access',
            description: 'Secure VDI and VPN solutions for seamless access to institutional resources from any location.'
        }
    ]
}

const streamlineDescription = [
    { text: "Enhance your ", bold: false },
    { text: "educational delivery ", bold: true },
    { text: "with the right technology stack. Leapsofts offers a ", bold: false },
    { text: "complimentary EdTech strategy session ", bold: true },
    { text: "to help you design a ", bold: false },
    { text: "digital learning ecosystem ", bold: true },
    { text: "that ensures student success and administrative efficiency.", bold: false },
];

const Education: React.FC = () => {
    const { setProcessTitle } = useOutletContext<IndustriesContextType>();

    useEffect(() => {
        setProcessTitle({
            titleMain: "EdTech Solution Development",
            titleAccent: "Process"
        });
    }, [setProcessTitle]);

    return (
        <>
            <IntroComponent
                title="Empowering Education Through Technology"
                description=""
                introDescription={[
                    { text: "Partnering with global institutions to build secure, student-centric, and highly engaging digital learning environments.", bold: false }
                ]}
            />
            <CommitmentSection data={commitmentData} />
            <StreamlineSuccess
                label="STREAMLINE YOUR SUCCESS"
                titleMain="Learning "
                titleAccent="Strategy"
                titleEnd=" Session"
                description={streamlineDescription}
                imageUrl="/streamline.png"
            />
            <EmergingTech data={educationSolutionsData} />
            <Services
                label="OUR CAPABILITIES"
                titleMain="How we "
                titleAccent="empower"
                titleEnd=" educational institutions"
            />
        </>
    )
}

export default Education
