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

const Home = () => {
  const title = "Custom Software Development Company";
  const title2 = " Lauch your Product in 3-5 Months";
  const subtitle = "Leapsofts offers enterprise-grade custom software development services designed to drive business transformation. From proof of concept (PoC) and scalable software architecture to MVP development and AI-powered enterprise solutions, we deliver robust, secure, and high-performance software tailored to meet complex organizational needs. Partner with us to turn innovative ideas into market-ready solutions that enhance efficiency, scalability, and business growth.";

  const introDescription = [
    { text: "Leapsofts offers ", bold: false },
    { text: "enterprise-grade custom software development services ", bold: true },
    { text: "designed to drive business transformation. From ", bold: false },
    { text: "proof of concept (PoC) ", bold: true },
    { text: "and ", bold: false },
    { text: "scalable software architecture ", bold: true },
    { text: "to ", bold: false },
    { text: "MVP development ", bold: true },
    { text: "and ", bold: false },
    { text: "AI-powered enterprise solutions, ", bold: true },
    { text: "we deliver robust, secure, and high-performance software tailored to meet complex organizational needs. Partner with us to turn innovative ideas into market-ready solutions that enhance efficiency, scalability, and business growth.", bold: false },

  ]
  const processPhasesDefault: ProcessPhase[] = [
    {
      id: 1,
      phase: "PHASE 1: INITIAL ASSESSMENT & IDEATION",
      title: "Discovery & Planning",
      description:
        "We dive deep into understanding your business needs, goals, and challenges.",
      features: [
        {
          title: "Business & Workflow Analysis",
          description:
            "Identify strategic goals, requirements, challenges, and operational gaps to set a clear vision and scope.",
        },
        {
          title: "Market Research & Analysis",
          description:
            "Market and competitive analysis to inform decisions—trends, customer behavior, and regulatory factors.",
        },
        {
          title: "Project Scope Definition",
          description:
            "Clear scope, methodology, deliverables, timeline, and cost for a structured execution roadmap.",
        },
      ],
    },
    {
      id: 2,
      phase: "PHASE 2: DISCOVERY",
      title: "Research & Strategy",
      description:
        "Comprehensive analysis to define the perfect solution architecture.",
      features: [
        {
          title: "Software Requirements Specification (SRS)",
          description:
            "Functional and non-functional specs: performance, security, scalability, reliability, and compliance.",
        },
        {
          title: "Technical Architecture",
          description:
            "Secure, scalable infrastructure with defined security controls and integration plans.",
        },
        {
          title: "Risk Assessment",
          description:
            "Identify risks and operational challenges; define proactive mitigation and continuity plans.",
        },
      ],
    },
    {
      id: 3,
      phase: "PHASE 3: ENGINEERING",
      title: "Agile or Fixed-Cost Custom Software Development",
      description:
        "Building your solution with cutting-edge technologies and best practices.",
      features: [
        {
          title: "Dedicated Team",
          description:
            "Full lifecycle delivery via SCRUM and Kanban—incremental, transparent, and on time.",
        },
        {
          title: "Business-Oriented Approach",
          description:
            "Full-cycle development focused on measurable business outcomes and strategic alignment.",
        },
        {
          title: "Communication & Value-Driven Collaboration",
          description:
            "Ongoing engagement, transparency, and alignment so stakeholders stay informed and decisions move fast.",
        },
      ],
    },
    {
      id: 4,
      phase: "PHASE 4: TRAINING & SUPPORT",
      title: "Launch & Continuous Support",
      description:
        "Seamless deployment and ongoing maintenance for your success.",
      features: [
        {
          title: "Seamless Integration",
          description:
            "Connect new apps with existing systems for smooth data flow and minimal disruption.",
        },
        {
          title: "Deployment & Testing",
          description:
            "Rigorous testing and structured deployment for a stable, risk-free launch.",
        },
        {
          title: "User Training & Adoption",
          description:
            "Training so your teams use the software effectively and boost productivity.",
        },
        {
          title: "Ongoing Support & System Evolution",
          description:
            "Continuous enhancements to match changing needs and keep long-term value.",
        },
      ],
    },
  ];

  const phaseLabelsDefault = [
    "INITIAL ASSESSMENT & IDEATION",
    "DISCOVERY",
    "ENGINEERING",
    "TRAINING & SUPPORT",
  ];

  const streamlineDescription = [
    { text: "Whether you're modernizing an ", bold: false },
    { text: "existing enterprise software system ", bold: true },
    { text: "or launching a ", bold: false },
    { text: "new digital product", bold: true },
    { text: ", Leapsofts offers a ", bold: false },
    { text: "complimentary software strategy session ", bold: true },
    { text: "designed to deliver value almost immediately. We take the time to understand your business objectives, technical landscape, and operational challenges then provide actionable insights on how ", bold: false },
    { text: "bespoke, cost-effective custom software solutions ", bold: true },
    { text: "can streamline workflows, improve efficiency, and support scalable growth.", bold: false },
  ];

  return (
    <>
      <IntroComponent
        title={title}
        title2={title2}
        description={subtitle}
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
          label="STREAMLINE YOUR SUCCESS"
          titleMain="Software "
          titleAccent="Strategy"
          titleEnd=" Session"
          description={streamlineDescription}
          imageUrl="/streamline.png"
        />
        <IndustrySlider />
        <Slider />
      </div>

      <Partners />

      <div id="process">
        <Processes title="OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS" processPhases={processPhasesDefault} phaseLabels={phaseLabelsDefault} />
      </div>

      <div id="feedbacks">
        <Testimonials />
      </div>

      <div id="contact">
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