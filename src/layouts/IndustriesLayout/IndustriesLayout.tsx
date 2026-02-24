import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../pages/Home/About/About'
import Technologies from '../../components/Slider/Slider'
import Partners from '../../components/Partners/Partners'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'
import ContactForm from '../../components/ContactForm/ContactForm'

const IndustriesLayout: React.FC = () => {

    return (
        <>
            <Outlet />
            <Partners />
            <About />
            <Technologies />
            <IndustryProcess titleMain='Finance'/>
            <ContactForm />
        </>
    )
}
export default IndustriesLayout