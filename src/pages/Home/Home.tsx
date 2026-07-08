import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from './CompanyServices/Services';
import About from './About/About';
import StreamlineSuccess from './Streamline/StreamlineSuccess';
import Partners from '../../components/Partners/Partners';
import Slider from '../../components/Slider/Slider';
import Processes, { type ProcessPhase } from '../../components/Processes/Processes';
import Testimonials from './Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import Figures from './Figures/Figures';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import style from './home.module.css';

const Home = () => {
  const title = "Custom Software Engineered for Enterprise Velocity";
  const title2 = "Launch your product in 3-5 months with zero compromise on scalability.";
  const subtitle = "Leapsofts engineers enterprise-grade custom software and scalable cloud solutions that power modern digital transformation. From proof of concept (PoC) and resilient software architecture to accelerated MVP development and AI-driven system orchestrations, we translate complex business objectives into secure, high-performance platforms engineered for long-term growth and bulletproof operations.";

  const introDescription = [
    { text: "Leapsofts engineers ", bold: false },
    { text: "enterprise-grade custom software ", bold: true },
    { text: "and scalable cloud solutions that power modern digital transformation. From ", bold: false },
    { text: "proof of concept (PoC) ", bold: true },
    { text: "and ", bold: false },
    { text: "resilient software architecture ", bold: true },
    { text: "to accelerated ", bold: false },
    { text: "MVP development", bold: true },
    { text: " and AI-driven system orchestrations, we translate complex business objectives into secure, high-performance platforms engineered for long-term growth and bulletproof operations.", bold: false }
  ];

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

  return (
    <>
      <IntroComponent
        title={title}
        title2={title2}
        description={subtitle}
        buttonText="Schedule a Strategy Session"
        onButtonClick={() => console.log('Button clicked')}
        introDescription={introDescription}
      />

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="figures">
        <Figures />
      </div>

      <div id="projects">
        <StreamlineSuccess
          label="COMPLIMENTARY STRATEGY SESSION"
          titleMain="Map your "
          titleAccent="technical"
          titleEnd=" roadmap."
          description={streamlineDescription}
          imageUrl="/streamline.png"
        />
        <IndustrySlider />
        <Slider />
      </div>


      <div id="process">
        <Processes title="OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      </div>
      <Partners />

      <div id="feedbacks">
        <Testimonials />
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