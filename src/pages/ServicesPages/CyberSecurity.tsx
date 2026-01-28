import React from 'react';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import WhyChooseUs, { type WhyChooseUsProps } from '../../components/WhyChooseUs/WhyChooseUs';

const whyChooseUsData: WhyChooseUsProps = {
    subtitle: 'Why Choose Us',
    title: 'Why Opt for LeapSofts?',
    items: [
        'Lightened Compliance Load',
        'Boosted Resilience to Attacks',
        "Strengthened Security Stance",
        "Solid Security Planning",
        "Efficient Security Measures",
    ]
}
const cyberSecurityData: EmergingTechProps['data'] = {
    label: 'CYBERSECURITY',
    titleAccent: 'Our',
    titleMain: ' Services',
    description: 'We provide end-to-end security solutions to protect your organization from evolving digital threats and ensure business continuity.',
    items: [
        {
            icon: 'enterprise',
            title: "Vulnerability Oversight",
            description: "Identifying and managing security weaknesses in network, software, and systems."
        },
        {
            icon: 'product',
            title: "Incident Management",
            description: "Rapidly addressing cybersecurity incidents to reduce impact and recover operations."
        },
        {
            icon: 'thirdParty',
            title: "Security Surveillance",
            description: "Ongoing monitoring for potential cyber threats or intrusions."
        },
        {
            icon: 'legacy',
            title: "Regulatory Compliance Assurance",
            description: "Aligning security measures with applicable legal and industry standards."
        },
        {
            icon: 'hipaa',
            title: "Identity & Access Control",
            description: "Regulating user identities and access to safeguard sensitive data."
        },
        {
            icon: 'enterprise',
            title: "Data Loss Prevention Strategies",
            description: "Protecting critical data from unauthorized access and loss."
        },
        {
            icon: 'legacy',
            title: "SIEM Implementation",
            description: "Gathering and analyzing security data from various sources for proactive response."
        },
        {
            icon: 'hipaa',
            title: "Cloud Security Management",
            description: "Fortifying data and applications on cloud platforms such as AWS, Azure, and GCP."
        },
        {
            icon: 'enterprise',
            title: "Endpoint Security Solutions",
            description: "Securing devices like laptops and smartphones against cyber threats."
        }
    ]
};


const CyberSecurity: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Maintain a Lead in Cybersecurity"
                description="LeapSofts guides you through complex cybersecurity challenges, from preemptive strategy to effective crisis response. Conducting simulated cyber attacks to uncover network and application vulnerabilities."
            />
            <EmergingTech data={cyberSecurityData} />
            <WhyChooseUs title={whyChooseUsData.title} items={whyChooseUsData.items} />
        </>
    );
};

export default CyberSecurity;
