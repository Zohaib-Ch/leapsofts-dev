import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Services from './CompanyServices/Services';
import About from './About/About';
import StreamlineSuccess from './Streamline/StreamlineSuccess';
import Partners from '../../components/Partners/Partners';
import Slider from '../../components/Slider/Slider';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import Testimonials from './Testimonials/Testimonials';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import Figures from './Figures/Figures';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import style from './home.module.css';
import { getSanityHomePage, getSanityBlogs } from '../../sanity/queries';

export async function loader() {
  const [data, blogs] = await Promise.all([
    getSanityHomePage(),
    getSanityBlogs(),
  ]);
  return { sanityData: data, blogs };
}

export function meta({ data }: { data?: any }) {
  const sanityData = data?.sanityData;
  const title = sanityData?.seo?.metaTitle || "Enterprise Custom Software Development Company | Leapsofts";
  const description = sanityData?.seo?.metaDescription || "Leapsofts engineers enterprise-grade custom software, cloud platforms & AI solutions. Launch your MVP in 3-5 months with zero compromise on scalability. Schedule a free strategy session today.";
  const keywords = sanityData?.seo?.keywords || "custom software development company, enterprise software engineering, cloud architecture, AI solutions, web app development, MVP development, dedicated development team";
  const canonicalUrl = sanityData?.seo?.canonicalUrl || "https://www.leapsofts.com/";
  const ogImage = sanityData?.seo?.ogImage || "https://www.leapsofts.com/logo/Leap-soft-01.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Leapsofts" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@leapsofts" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: canonicalUrl }
  ];
}

const Home = ({ loaderData }: { loaderData?: any }) => {
  const { sanityData, blogs } = loaderData || {};

  const title = sanityData?.hero?.title || "Custom Software Engineered for Enterprise Velocity";
  const title2 = sanityData?.hero?.title2 || "Launch your product in 3-5 months with zero compromise on scalability.";
  const subtitle = sanityData?.hero?.subtitle || "Leapsofts engineers enterprise-grade custom software and scalable cloud solutions that power modern digital transformation. From proof of concept (PoC) and resilient software architecture to accelerated MVP development and AI-driven system orchestrations, we translate complex business objectives into secure, high-performance platforms engineered for long-term growth and bulletproof operations.";

  const processPhasesDefault: ProcessPhase[] = [
    {
      id: 1,
      phase: "PHASE 1: DISCOVERY & ARCHITECTURE PLANNING",
      title: "Discovery & Planning",
      description:
        "We isolate key strategic operational gaps, align project scope with target market demands, and define a clear software roadmap.",
      features: [
        {
          title: "Business & Workflow Discovery",
          description:
            "Analyze existing operations, technical dependencies, and workflow blockages to align the software scope with target outcomes.",
        },
        {
          title: "Strategic Product Mapping",
          description:
            "Conduct deep technical feasibility studies, evaluate data models, and select the optimal modern stack to scale with future demands.",
        },
        {
          title: "Roadmap & Budget Definition",
          description:
            "Deliver an exhaustive, milestone-driven execution plan, resource allocation map, and transparent investment breakdown.",
        },
      ],
    },
    {
      id: 2,
      phase: "PHASE 2: SECURE SYSTEM SPECIFICATION",
      title: "Research & Strategy",
      description:
        "Comprehensive technical analysis to formulate strict functional requirements covering security controls, cloud scalability, and regulatory compliance.",
      features: [
        {
          title: "Architectural Design & SRS",
          description:
            "Produce detailed Software Requirements Specifications (SRS) covering data flow schemas, API endpoints, security protocols, and compliance criteria.",
        },
        {
          title: "Infrastructure & Tech Stack",
          description:
            "Map out a zero-trust, resilient cloud infrastructure topology, detailing secure multi-tenant settings and integrations.",
        },
        {
          title: "Strategic Risk Mitigation",
          description:
            "Conduct extensive threat vector profiling, establish data isolation guidelines, and draft proactive business continuity protocols.",
        },
      ],
    },
    {
      id: 3,
      phase: "PHASE 3: AGILE HIGH-VELOCITY ENGINEERING",
      title: "Agile Custom Software Development",
      description:
        "Building your enterprise solution with premium modern technologies, clean structures, and strict automated code auditing.",
      features: [
        {
          title: "Dedicated Agile Pods",
          description:
            "Deploy highly integrated, cross-functional squads utilizing SCRUM and Kanban workflows for total execution transparency.",
        },
        {
          title: "Architecture-First Coding",
          description:
            "Maintain robust, self-documenting code bases leveraging automated unit tests, strict linters, and multi-peer pull request reviews.",
        },
        {
          title: "Continuous Value Delivery",
          description:
            "Deliver functional weekly builds alongside transparent sprint dashboards, keeping key stakeholders closely aligned with progress.",
        },
      ],
    },
    {
      id: 4,
      phase: "PHASE 4: SYSTEM DEPLOYMENT & SYSTEMS EVOLUTION",
      title: "Launch & Continuous Support",
      description:
        "Seamless secure deployment, continuous architectural upgrades, and proactive scaling to maintain long-term digital supremacy.",
      features: [
        {
          title: "Integrated Ecosystem Sync",
          description:
            "Integrate new platforms and systems with legacy databases and client APIs securely with zero operational downtime.",
        },
        {
          title: "Pre-Launch QA & Deployment",
          description:
            "Perform exhaustive automated load testing, secure penetration audits, and structured cloud deployment with rolling updates.",
        },
        {
          title: "User Training & Activation",
          description:
            "Conduct intensive interactive onboarding and training sessions so your internal teams adopt and utilize the software efficiently.",
        },
        {
          title: "Continuous Systems Evolution",
          description:
            "Provide ongoing architectural scaling, framework updates, security patch integrations, and feature expansions.",
        },
      ],
    },
  ];

  const phaseLabelsDefault = [
    "DISCOVERY & ARCHITECTURE",
    "SPECIFICATION",
    "ENGINEERING",
    "DEPLOYMENT & EVOLUTION",
  ];

  const streamlineDescription = [
    { text: "Whether modernizing a complex ", bold: false },
    { text: "legacy enterprise platform ", bold: true },
    { text: "or engineering a ", bold: false },
    { text: "new SaaS ecosystem", bold: true },
    { text: ", our experts deliver immediate technical clarity. We conduct a deep-dive analysis of your current systems, map out code dependencies, identify performance bottlenecks, and formulate a ", bold: false },
    { text: "highly efficient, cost-optimized engineering plan ", bold: true },
    { text: "built to unlock measurable product growth and streamline operational efficiency.", bold: false }
  ];

  const processPhases = sanityData?.processes?.phases && sanityData.processes.phases.length > 0
    ? (sanityData.processes.phases as ProcessPhase[])
    : processPhasesDefault;

  const phaseLabels = sanityData?.processes?.phaseLabels && sanityData.processes.phaseLabels.length > 0
    ? (sanityData.processes.phaseLabels as string[])
    : phaseLabelsDefault;

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.leapsofts.com/#organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.leapsofts.com/logo/Leap-soft-01.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-56-830-9734",
          "contactType": "customer service",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://twitter.com/leapsofts",
          "https://www.linkedin.com/company/leapsofts"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.leapsofts.com/#website",
        "url": "https://www.leapsofts.com",
        "name": "Leapsofts",
        "publisher": {
          "@id": "https://www.leapsofts.com/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.leapsofts.com/#service",
        "name": "Leapsofts Custom Software Development",
        "url": "https://www.leapsofts.com",
        "priceRange": "$$$",
        "image": "https://www.leapsofts.com/logo/Leap-soft-01.png",
        "telephone": "+971-56-830-9734",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AE",
          "addressRegion": "Dubai"
        },
        "areaServed": ["Global", "United Arab Emirates", "United States", "Saudi Arabia", "United Kingdom"],
        "description": "Enterprise-grade custom software development, cloud infrastructure architecture, mobile application engineering, and AI solution integrations."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <IntroComponent
        title={title}
        title2={title2}
        description={subtitle}
        buttonText={sanityData?.hero?.primaryCtaText || "Schedule a Strategy Session"}
        onButtonClick={() => {
          const path = sanityData?.hero?.primaryCtaPath || '#contact';
          if (path.startsWith('#')) {
            const elem = document.getElementById(path.replace('#', ''));
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = path;
          }
        }}
      />

      <div id="services">
        <Services
          label={sanityData?.coreCapabilities?.label}
          titleMain={sanityData?.coreCapabilities?.titleMain}
          titleAccent={sanityData?.coreCapabilities?.titleAccent}
          titleEnd={sanityData?.coreCapabilities?.titleEnd}
          services={sanityData?.coreCapabilities?.services}
        />
      </div>

      <div id="about">
        <About
          label={sanityData?.aboutUs?.label}
          headline={sanityData?.aboutUs?.headline}
          titleAccent={sanityData?.aboutUs?.titleAccent}
          descriptionText={sanityData?.aboutUs?.descriptionText}
          imageUrl={sanityData?.aboutUs?.imageUrl}
        />
      </div>
      <div id="figures">
        <Figures stats={sanityData?.aboutUs?.stats} />
      </div>

      <div id="projects">
        <StreamlineSuccess
          label={sanityData?.strategy?.label || "COMPLIMENTARY STRATEGY SESSION"}
          titleMain={sanityData?.strategy?.titleMain || "Map your "}
          titleAccent={sanityData?.strategy?.titleAccent || "technical"}
          titleEnd={sanityData?.strategy?.titleEnd || " roadmap."}
          description={sanityData?.strategy?.descriptionText || streamlineDescription}
          description2={sanityData?.strategy?.description2Text}
          buttonText={sanityData?.strategy?.buttonText || "Claim Strategy Session"}
          buttonPath={sanityData?.strategy?.buttonPath || "#contact"}
          imageUrl={sanityData?.strategy?.imageUrl || "/streamline.webp"}
        />
        <IndustrySlider />
        <Slider />
      </div>


      <div id="process">
        <Processes
          title={sanityData?.processes?.title || "OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS"}
          processPhases={processPhases}
          phaseLabels={phaseLabels}
        />
      </div>
      <Partners />

      <div id="feedbacks">
        <Testimonials
          sectionLabel={sanityData?.testimonials?.sectionLabel}
          testimonialsList={sanityData?.testimonials?.testimonialsList}
        />
      </div>

      <div id="insights">
        <BlogSection initialBlogs={blogs} />
      </div>

      <div id="contact" className={style.contactContainer} >
        <ContactForm />
      </div>
      <HashScroll />
    </>
  );
};

const HashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

export default Home;