import React, { useState} from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../pages/Home/About/About'
import Partners from '../../components/Partners/Partners'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'
import Technologies from '../../components/Slider/Slider'
import ContactForm from '../../components/ContactForm/ContactForm'

export interface ProcessTitleData {
    titleMain: string;
    titleAccent?: string;
    titleEnd?: string;
}

export interface IndustriesContextType {
    setProcessTitle: React.Dispatch<React.SetStateAction<ProcessTitleData>>;
}

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
            <About />
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