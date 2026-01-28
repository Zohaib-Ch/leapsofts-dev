import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import PartnerShowcase from '../../components/PartnerShowcase/PartnerShowcase';
import WhoWeServe from '../../components/WhoWeServe/WhoWeServe';
import Partners from '../../components/Partners/Partners';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import ContactForm from '../../components/ContactForm/ContactForm';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Results we've delivered across industries"
        description="From startups to Fortune 500s, we help businesses across the globe scale faster and work smarter."
      />
      <Partners />
      <PartnerShowcase projects={projectsData} />
      <WhoWeServe
        description="Orchestrating commerce, intelligence and innovation across asset finance, retail and advisory ecosystems."
      />
      <IndustrySlider />
      <div style={{overflow: 'hidden'}}>
        <ContactForm />
      </div>
      
    </>
  )
}

export default Projects