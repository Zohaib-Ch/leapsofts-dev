import IntroComponent from "../../components/IntroComponent/IntroComponent"
import Capabilities, { type CapabilitySlide } from "../../components/Capabilities/Capabilities";
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import EmergingTech from "../../components/EmergingTech/EmergingTech";

const capabilitiesSlides: CapabilitySlide[] = [
  {
    id: 'function',
    number: '< 01 >',
    title: 'Function-Based Capabilities',
    image: capabilitiesImg,
    items: [
      {
        name: 'We understand your business',
        description: 'We understand how important software stability is to your business. Our goal is to make your program as stable as possible for long-term success.'
      },
      {
        name: 'Fast and Effective Responses',
        description: '24/7 support from our worldwide team of qualified staff. Count on us to respond quickly and effectively to any problem.'
      },
      {
        name: 'Established & Proven Procedures',
        description: 'Our experts ensure your application functions properly while providing you with a superior customer experience.'
      }
    ]
  },
  {
    id: 'platform',
    number: '< 02 >',
    title: 'Platform-Based Capabilities',
    image: platformImg,
    items: [
      {
        name: 'Customer-Friendly Expertise',
        description: 'Our experts ensure your application functions properly while providing you with a superior customer experience that sets us apart.'
      },
    ]
  },
];

const emergingTechData = {
  label: 'INTEGRATION OTHER TECHNOLOGIES',
  titleAccent: 'Emerging Technologies',
  titleMain: 'We Integrate',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Enterprise  Applications',
      description: 'Our developers collaborate to deliver innovative ERP solutions that enhance core business functions, including inventory and construction management, accounting, and human resources.'
    },
    {
      icon: 'saas' as const,
      title: 'SaaS Applications',
      description: 'We have extensive experience in developing SaaS-based business applications and leverage this expertise to deliver your solution on time and within budget, addressing both challenges and opportunities effectively.'
    },
    {
      icon: 'hipaa' as const,
      title: 'HIPAA compliant applications',
      description: 'We specialize in developing complex, HIPAA-compliant applications using advanced technologies, managing the entire lifecycle to ensure full compliance with strict data protection regulations.'
    },
        {
      icon: 'ecommerce' as const,
      title: 'Ecommerce Applications',
      description: 'A customized web application gives your online business a competitive edge by automating payments, inventory, reporting, and security to ensure smooth operations.'
    },
    {
      icon: 'mobile' as const,
      title: 'Mobile Applications',
      description: 'Our professional developers build iOS, Android, and hybrid mobile apps that work standalone or with web applications, ensuring fast approval and deployment.'
    },
        {
      icon: 'legacy' as const,
      title: 'Legacy Systems',
      description: 'We help organizations modernize legacy software using advanced technologies to create more flexible, user-friendly, and efficient systems.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Third-Party Applications',
      description: 'In addition to building software from scratch, we can maintain or take over third-party solutions, starting with a thorough assessment to define needs and the path forward.'
    },
        {
      icon: 'product' as const,
      title: 'Product Development',
      description: 'We support your business through the entire product development lifecycle—from concept and prototype to release delivering high-quality solutions at competitive costs with unmatched expertise.'
    }
  ]
};

function CustomSoftwareDevelopment() {
  return (
    <>
      <IntroComponent
        title="Bring Your Business Dreams to Life with Our Custom Application Development Services"
        description="From the straightforward to the never-before-seen, we have substantial experience in delivering high-quality, scalable, and AI-powered custom application development services tailored to the specific business needs of our clients. Our solutions leverage cutting-edge technologies like machine learning, natural language processing (NLP), and automation to streamline workflows, enhance decision-making, and drive business growth."
      />
      <Capabilities
        title="Our Key Capabilities"
        description="We offer end-to-end custom application development services across various platforms and business functions."
        slides={capabilitiesSlides}
        defaultImage={capabilitiesImg}
      />
      <EmergingTech data={emergingTechData} />
    </>
  )
}

export default CustomSoftwareDevelopment