import React, { useState, useRef, useEffect } from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import PartnerShowcase from '../../components/PartnerShowcase/PartnerShowcase';
import WhoWeServe from '../../components/WhoWeServe/WhoWeServe';
import Partners from '../../components/Partners/Partners';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import ContactForm from '../../components/ContactForm/ContactForm';
import { projectsData } from '../../data/projectsData';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityCaseStudies } from '../../sanity/queries';
import type { SanityCaseStudy } from '../../sanity/types';

const Projects: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string | undefined>(undefined);
  const [sanityProjects, setSanityProjects] = useState<SanityCaseStudy[] | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const industryProjects = sanityProjects || projectsData.filter(project => project.type === 'industry');

  useEffect(() => {
    getSanityCaseStudies().then((data) => {
      if (data) setSanityProjects(data);
    });
  }, []);

  const introDescription = [
    { text: "Our case studies showcase how Leapsofts combines domain expertise, modern architectures, and AI-ready software development to build real products used by businesses worldwide.", bold: false },
  ];

  const handleIndustryClick = (name: string) => {
    const mapping: Record<string, string> = {
      'Healthcare': 'project-industry-2',
      'Startups': 'project-industry-7',
      'Construction': 'project-industry-4',
      'Energy': 'project-industry-5',
      'Compliance': 'project-industry-6',
      'Automotive': 'project-industry-0',
      'EdTech': 'project-industry-8',
      'Forensics': 'project-industry-9',
      'FinTech': 'project-industry-10',
      'Transportation': 'project-industry-11',
      'Wholesale and Retail': 'project-industry-12',
      'AI & Automation': 'project-industry-13',
    };

    const projectId = mapping[name];
    if (projectId) {
      setActiveIndustryId(projectId);
      showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <MetaSEO
        defaultTitle="Enterprise Case Studies & Production Portfolio | Leapsofts"
        defaultDescription="Explore detailed project case studies demonstrating how Leapsofts combines domain expertise, robust engineering architectures, and production-ready custom software."
      />
      <div id="projects-hero-section">
        <IntroComponent
          title="Enterprise Software Case Studies"
          title2="Built for Scale. Proven in Production"
          description=''
          introDescription={introDescription}
        />
      </div>
      <div id="projects-showcase" ref={showcaseRef}>
        <PartnerShowcase
          projects={industryProjects as any}
          activeProjectId={activeIndustryId}
        />
      </div>
      <div id="projects-industry-slider">
        <IndustrySlider
          onIndustryClick={handleIndustryClick}
          excludeIndustries={['Mid-Sized Businesses', 'Entertainment', 'Startups', 'Construction', 'Energy', 'Real Estate']}
        />
      </div>
      <div id="projects-who-we-serve">
        <WhoWeServe
          description="Orchestrating commerce, intelligence and innovation across asset finance, retail and advisory ecosystems."
        />
      </div>
      <div id="projects-partners-section">
        <Partners />
      </div>
      <div id="projects-contact-form-section" style={{ overflow: 'hidden' }}>
        <ContactForm />
      </div>
    </>
  )
}

export default Projects
