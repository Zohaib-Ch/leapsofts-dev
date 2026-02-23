import { Outlet } from 'react-router-dom'
import About from '../../pages/Home/About/About'
import Technologies from '../../components/Slider/Slider'
import Partners from '../../components/Partners/Partners'
import FAQs from '../../components/FAQs/FAQs'

function ServicesLayout() {
  return (
    <>


      <Outlet />
      <Partners />
      <About />
      <Technologies />
      <FAQs />
    </>
  )
}

export default ServicesLayout