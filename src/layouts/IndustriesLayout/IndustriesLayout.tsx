import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../pages/Home/About/About'
import Technologies from '../../components/Slider/Slider'
import Partners from '../../components/Partners/Partners'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'

const IndustriesLayout: React.FC = () => {

    return (
        <>
            <Outlet />
            <About />
            <Technologies />
            <Partners />
            <IndustryProcess titleMain='Finance'/>
        </>
    )
}
export default IndustriesLayout