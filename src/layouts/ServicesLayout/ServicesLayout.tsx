import { Outlet, useLocation } from 'react-router'
import Partners from '../../components/Partners/Partners'
import Testimonials from '../../pages/Home/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm'

function ServicesLayout() {
  const location = useLocation()
  return (
    <>
      <Outlet key={location.pathname} />
      <Partners />
      <Testimonials/>
      <ContactForm/>
    </>
  )
}

export default ServicesLayout