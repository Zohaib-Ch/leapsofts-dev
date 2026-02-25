import React, { useState} from 'react'
import { Outlet } from 'react-router-dom'
import Partners from '../../components/Partners/Partners'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'
import Technologies from '../../components/Slider/Slider'
import ContactForm from '../../components/ContactForm/ContactForm'
import DeliverMVP from '../../components/DeliverMVP/DeliverMVP'

export interface ProcessTitleData {
    titleMain: string;
    titleAccent?: string;
    titleEnd?: string;
}

export interface IndustriesContextType {
    setProcessTitle: React.Dispatch<React.SetStateAction<ProcessTitleData>>;
}

const deliverMVPData = {
    label: "WHY CHOOSE LEAPSOFTS",
    title: "How Can We Deliver Your MVP in",
    accentText: "3-5 months?",
    description: "Leapsofts is a custom software development company that offers software products tailored to your unique business objectives. Leveraging our structured end-to-end processes, custom project management tool, agile methodology, and AI integration expertise, we solve complex business challenges, accelerate growth, and consistently deliver MVPs within 3 to 5 months, on time, every time.",
    items: [
        {
            title: "Proven Methodologies & Processes.",
            description: "We follow agile workflows, CI/CD pipelines, and DevOps practices to accelerate delivery while maintaining top-tier quality and compliance."
        },
        {
            title: "Client-First Approach.",
            description: "From discovery to post-launch support, we collaborate with your team and stakeholders to build solutions aligned with your specific needs and business workflows."
        },
        {
            title: "Transparent Pricing Models.",
            description: "Whether it's fixed-scope development or continuous product engineering, we provide clarity, flexibility, and no hidden costs."
        },
        {
            title: "Healthcare Software Expertise.",
            description: "With years of experience building healthcare applications, we understand the nuances of EMRs, patient engagement, HIPAA compliance, and third-party integrations."
        }
    ]
};

const IndustriesLayout: React.FC = () => {
    const [processTitle, setProcessTitle] = useState<ProcessTitleData>({
        titleMain: "App Development",
        titleAccent: "Process"
    });

    const contextValue: IndustriesContextType = {
        setProcessTitle
    };

    return (
        <>
            <Outlet context={contextValue} />
            <Partners />
            <DeliverMVP data={deliverMVPData}/>
            <Technologies />
            <IndustryProcess
                titleMain={processTitle.titleMain}
                titleAccent={processTitle.titleAccent}
                titleEnd={processTitle.titleEnd}
            />
            <ContactForm />
        </>
    )
}
export default IndustriesLayout