import React, { useState, useRef, useEffect } from 'react'
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

  useEffect(() => {
    // Set document title
    const prevTitle = document.title;
    document.title = 'Enterprise Case Studies & Production Portfolio | Leapsofts';

    // Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    let prevDescription = '';
    if (metaDescription) {
      prevDescription = metaDescription.getAttribute('content') || '';
      metaDescription.setAttribute('content', 'Explore detailed project case studies demonstrating how Leapsofts combines domain expertise, robust engineering architectures, and production-ready custom software.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Explore detailed project case studies demonstrating how Leapsofts combines domain expertise, robust engineering architectures, and production-ready custom software.');
      document.head.appendChild(metaDescription);
    }

    // Manage meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    let prevKeywords = '';
    if (metaKeywords) {
      prevKeywords = metaKeywords.getAttribute('content') || '';
      metaKeywords.setAttribute('content', 'software case studies, custom development portfolio, enterprise software success stories, AI liveness detection, RegTech automation, Leapsofts portfolios');
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', 'software case studies, custom development portfolio, enterprise software success stories, AI liveness detection, RegTech automation, Leapsofts portfolios');
      document.head.appendChild(metaKeywords);
    }

    // Manage Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let prevOgTitle = '';
    if (ogTitle) {
      prevOgTitle = ogTitle.getAttribute('content') || '';
      ogTitle.setAttribute('content', 'Enterprise Case Studies & Production Portfolio | Leapsofts');
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', 'Enterprise Case Studies & Production Portfolio | Leapsofts');
      document.head.appendChild(ogTitle);
    }

    // Manage Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    let prevOgDesc = '';
    if (ogDesc) {
      prevOgDesc = ogDesc.getAttribute('content') || '';
      ogDesc.setAttribute('content', 'Discover custom software products and high-concurrency systems engineered for scale and proven in production across global industries by Leapsofts.');
    } else {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', 'Discover custom software products and high-concurrency systems engineered for scale and proven in production across global industries by Leapsofts.');
      document.head.appendChild(ogDesc);
    }

    return () => {
      document.title = prevTitle;
      if (metaDescription) {
        if (prevDescription) {
          metaDescription.setAttribute('content', prevDescription);
        } else {
          metaDescription.remove();
        }
      }
      if (metaKeywords) {
        if (prevKeywords) {
          metaKeywords.setAttribute('content', prevKeywords);
        } else {
          metaKeywords.remove();
        }
      }
      if (ogTitle) {
        if (prevOgTitle) {
          ogTitle.setAttribute('content', prevOgTitle);
        } else {
          ogTitle.remove();
        }
      }
      if (ogDesc) {
        if (prevOgDesc) {
          ogDesc.setAttribute('content', prevOgDesc);
        } else {
          ogDesc.remove();
        }
      }
    };
  }, []);

  const introDescription = [
    { text: "Our case studies showcase how Leapsofts combines domain expertise, modern architectures, and AI-ready software development to build real products used by businesses worldwide.", bold: false },

  ]

  const handleIndustryClick = (name: string) => {
    // Map industry slider names to projectsData IDs
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
