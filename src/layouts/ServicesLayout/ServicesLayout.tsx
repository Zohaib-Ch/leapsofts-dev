import { Outlet } from 'react-router'
import Partners from '../../components/Partners/Partners'
import Testimonials from '../../pages/Home/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm'

function ServicesLayout() {
  return (
    <>
      <Outlet />
      <Partners />
      <Testimonials/>
      <ContactForm/>
    </>
  )
}

export default ServicesLayout