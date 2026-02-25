import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection'
import InfoGrid from '../../components/InfoGrid/InfoGrid'
import { type InfoGridProps } from '../../components/InfoGrid/InfoGrid';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';
import { type ServiceFeatureItem } from '../../components/ServiceFeatures/ServiceFeatures';
const commitmentData: CommitmentSectionProps['data'] = {
    subtitle: "OUR COMMITMENT TO EDUCATIONAL INSTITUTIONS",
    title: "Secure, scalable, and student-centered digital solutions",
    items: [
        {
            icon: '/industryicons/sphere.svg',
            title: 'Off-Campus Access',
            description: "Secure, enterprise-grade applications and VDI solutions that permit students and faculty to access live educational sessions, collaborative tools, and all necessary resources anywhere, on any device (BYOD), while maintaining security."
        },
        {
            icon: '/industryicons/bipiramida.svg',
            title: 'Personalized Learning',
            description: "Development of adaptive e-learning modules, Learning Management System (LMS) tools, and AI-driven tutoring features that engage students, allowing them to master material at their own pace and in their own preferred learning style."
        },
        {
            icon: '/industryicons/diamond.svg',
            title: 'Data & Network Safety',
            description: "Custom-built security solutions designed specifically to meet educational privacy laws (e.g., FERPA, COPPA), protecting sensitive institutional data, student records, and the privacy of every user on the platform."
        },
    ]
}
const servicesData: InfoGridProps['data'] = {
    label: 'EDUCATIONAL SERVICES',
    title: 'What We Offer',
    items: [
        {
            icon: '01',
            title: 'Lesson Planning Automation',
            description:
                'Minimizing manual and repetitive administrative tasks by using AI to assist in compiling, organizing, and suggesting adjustments to lesson plans based on curriculum standards and student performance data.'
        },
        {
            icon: '02',
            title: 'Real-Time Collaboration',
            description:
                'Intuitive tools that make it simple for faculty and staff to stay organized, manage classroom activities, and foster transparent, real-time communication and progress-sharing with students and parents.'
        },
        {
            icon: '03',
            title: 'Digital Content Delivery',
            description:
                'A platform for seamlessly converting traditional textbooks, physical materials, and laboratory resources into a rich, interactive computerized format, ensuring better accessibility and media integration.'
        }
    ]
};
const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'E-Learning',
        description: 'From independent learning modules to remote access to classroom resources, our e-learning solutions empower students to learn where they want, when they want, and how they want.'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Learning Management Systems',
        description: "Leapsofts' custom applications make it easy for staff to stay organized and collaborate with students anytime, anywhere."
    },
];
    const title = "Empowering Education Through Technology";
    const subtitle = ""
    const introDescription = [
        { text: "We partner strategically with educators and institutions to foster the secure, dynamic digital learning environments needed to assist students in succeeding both inside and outside the traditional classroom setting.", bold: false },
    ]


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
                title={title}
                description={subtitle}
                introDescription={introDescription}
            />
            <CommitmentSection data={commitmentData} />
            <InfoGrid data={servicesData} />
            <ServiceFeatures items={defaultItems} />
        </>
    )
}

export default Education
