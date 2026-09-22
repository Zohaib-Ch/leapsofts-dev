import { Outlet } from 'react-router'
import Partners from '../../components/Partners/Partners'
import FAQs from '../../components/FAQs/FAQs'
import Testimonials from '../../pages/Home/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm'

function ServicesLayout() {
  return (
    <>


      <Outlet />
      <Partners />
      <FAQs />
      <Testimonials/>
      <ContactForm/>
    </>
  )
}

export default ServicesLayout