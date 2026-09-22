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
export function meta() {
  const title = "Software Development Case Studies | Leapsofts Portfolio";
  const description = "Explore Leapsofts' portfolio of enterprise software projects — from fintech platforms to healthcare systems and AI-powered applications. See our work.";
  const keywords = "software development portfolio, custom software case studies, enterprise software projects, development portfolio";
  const canonicalUrl = "https://www.leapsofts.com/projects";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://www.leapsofts.com/logo/Leap-soft-01.png" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const Projects: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string | undefined>(undefined);
  const [sanityProjects, setSanityProjects] = useState<SanityCaseStudy[] | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSanityCaseStudies().then((data) => {
      if (data && data.length > 0) setSanityProjects(data);
    });
  }, []);

  const industryProjects = React.useMemo(() => {
    const fallbackProjects = projectsData.filter(project => project.type === 'industry');
    if (!sanityProjects || sanityProjects.length === 0) return fallbackProjects;

    const sanityIndustries = sanityProjects.filter(sp => sp.type === 'industry');
    const combinedList: any[] = [];

    // 1. Process Sanity industries (including newly added ones)
    sanityIndustries.forEach((sanityItem) => {
      const fallback = fallbackProjects.find(fp => fp.id === sanityItem.id || fp.brand?.name === sanityItem.title || fp.brand?.name === sanityItem.brand?.name);

      const highlightMap: Record<string, string[]> = { ...(fallback?.highlight || {}) };
      if (sanityItem.highlightItems && sanityItem.highlightItems.length > 0) {
        sanityItem.highlightItems.forEach((item) => {
          if (item.tabId && item.projects) {
            highlightMap[item.tabId] = item.projects;
          }
        });
      }

      combinedList.push({
        type: 'industry',
        id: sanityItem.slug || sanityItem.id || fallback?.id || `industry-${sanityItem.title.toLowerCase().replace(/\s+/g, '-')}`,
        brand: {
          name: sanityItem.brand?.name || sanityItem.title || fallback?.brand?.name || '',
          logo: sanityItem.brand?.logo || sanityItem.brand?.logoPreset || fallback?.brand?.logo || '/icons/industries/automotive-link.svg',
          description: sanityItem.brand?.description || fallback?.brand?.description || '',
        },
        projectList: (() => {
          const rawList = sanityItem.projectList && sanityItem.projectList.length > 0 ? sanityItem.projectList : fallback?.projectList || [];
          return rawList.map((item: any) => {
            if (typeof item === 'string') return item;
            if (typeof item === 'object' && item !== null) {
              return item.title || item.name || item._ref || '';
            }
            return String(item || '');
          }).filter(Boolean);
        })(),
        brandVisualImg: sanityItem.brandVisualImg || sanityItem.brandVisualImgPreset || fallback?.brandVisualImg || sanityItem.brand?.logo || fallback?.brand?.logo || '/icons/industries/automotive-link.svg',
        tabs: sanityItem.tabs && sanityItem.tabs.length > 0 ? sanityItem.tabs : fallback?.tabs || [],
        highlight: highlightMap,
        impact: {
          title: sanityItem.impact?.title || fallback?.impact?.title || sanityItem.title,
          images: sanityItem.impact?.images && sanityItem.impact.images.length > 0 ? sanityItem.impact.images : fallback?.impact?.images || [],
        },
      });
    });

    // 2. Add fallback industries that haven't been created in Sanity yet
    fallbackProjects.forEach((fallback) => {
      const existsInSanity = sanityIndustries.some(sp => sp.id === fallback.id || sp.title === fallback.brand.name || sp.brand?.name === fallback.brand.name);
      if (!existsInSanity) {
        combinedList.push(fallback);
      }
    });

    return combinedList;
  }, [sanityProjects]);

  const introDescription = [
    { text: "Our custom software development case studies showcase how Leapsofts combines domain expertise, cloud engineering architectures, and production-ready AI software development to build high-performance products used by global enterprises and scaling businesses worldwide.", bold: false },
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
