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
  const title = "Custom Software Development That Launches Your Product in 6-12 Months";
  const subtitle = "Leapsofts' custom software development services focus on your business goals, covering everything from proof of concept and software architecture to MVPs and AI-driven solutions that meet real-world needs.";
  const processPhasesDefault: ProcessPhase[] = [
    {
      id: 1,
      phase: "PHASE 1: INITIAL ASSESSMENT & IDEATION",
      title: "Discovery & Planning",
      description:
        "We dive deep into understanding your business needs, goals, and challenges.",
      features: [
        "Requirements Gathering",
        "Market Research & Analysis",
        "Project Scope Definition",
      ],
    },
    {
      id: 2,
      phase: "PHASE 2: DISCOVERY",
      title: "Research & Strategy",
      description:
        "Comprehensive analysis to define the perfect solution architecture.",
      features: [
        "Technical Feasibility Study",
        "Solution Architecture Design",
        "Risk Assessment & Mitigation",
      ],
    },
    {
      id: 3,
      phase: "PHASE 3: ENGINEERING",
      title: "Agile or Fixed-Cost Custom Software Development",
      description:
        "Building your solution with cutting-edge technologies and best practices.",
      features: [
        "Dedicated Team",
        "Business-Oriented Approach",
        "Communication & Value-Driven Collaboration",
      ],
    },
    {
      id: 4,
      phase: "PHASE 4: TRAINING & SUPPORT",
      title: "Launch & Continuous Support",
      description:
        "Seamless deployment and ongoing maintenance for your success.",
      features: [
        "User Training Programs",
        "24/7 Technical Support",
        "Performance Monitoring & Optimization",
      ],
    },
  ];

  const phaseLabelsDefault = [
    "INITIAL ASSESSMENT & IDEATION",
    "DISCOVERY",
    "ENGINEERING",
    "TRAINING & SUPPORT",
  ];
  return (
    <>
      <IntroComponent
        title={title}
        description={subtitle}
        onButtonClick={() => console.log('Button clicked')}
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
          description="Whether it is an existing enterprise software system or a brand-new startup, we offer a no-charge strategy session, which can bring value to the table almost in real-time. We learn about your unique needs and share how to streamline your operations by using bespoke, cost-effective custom software solutions."
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