import React, { useState, useRef } from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import PartnerShowcase from '../../components/PartnerShowcase/PartnerShowcase';
import WhoWeServe from '../../components/WhoWeServe/WhoWeServe';
import Partners from '../../components/Partners/Partners';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import ContactForm from '../../components/ContactForm/ContactForm';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string | undefined>(undefined);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const industryProjects = projectsData.filter(project => project.type === 'industry');

  const introDescription = [
    { text: "Our case studies showcase how Leapsofts combines domain expertise, modern architectures, and AI-ready software development to build real products used by businesses worldwide.", bold: false },

  ]

  const handleIndustryClick = (name: string) => {
    // Map industry slider names to projectsData IDs
    const mapping: Record<string, string> = {
      'Finance': 'project-industry-1',
      'Healthcare': 'project-industry-2',
      'Startups': 'project-industry-7',
      'Construction': 'project-industry-4',
      'Energy': 'project-industry-5',
      'Compliance': 'project-industry-6',
      'Automotive': 'project-industry-0',
      'EdTech': 'project-industry-8',
      'Forensics': 'project-industry-9',
    };

    const projectId = mapping[name];
    if (projectId) {
      setActiveIndustryId(projectId);
      showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <IntroComponent
        title="Built for Scale. Proven in Production"
        description=''
        introDescription={introDescription}
      />
      <div ref={showcaseRef}>
        <PartnerShowcase
          projects={industryProjects as any}
          activeProjectId={activeIndustryId}
        />
      </div>
      <IndustrySlider onIndustryClick={handleIndustryClick} />
      <WhoWeServe
        description="Orchestrating commerce, intelligence and innovation across asset finance, retail and advisory ecosystems."
      />
      <Partners />
      <div style={{ overflow: 'hidden' }}>
        <ContactForm />
      </div>
    </>
  )
}

export default Projects
