import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import Capabilities, { type CapabilitySlide } from '../../components/Capabilities/Capabilities'
import capabilitiesImg from "../../assets/capabilities_3d.png";
import platformImg from "../../assets/capabilities_platform.png";
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';

const mobileAppSlides: CapabilitySlide[] = [
  {
    id: 'integrate-mobile-web',
    number: '< 01 >',
    title: 'Integrate Mobile With Web',
    image: capabilitiesImg,
    items: [
      {
        name: 'Seamless Integration',
        description: 'Transform your existing web application into a seamless mobile experience that integrates perfectly with your current platform.'
      },
      {
        name: 'Cross-Platform Compatibility',
        description: 'Consistent user experience across desktop and mobile devices with perfect synchronization.'
      },
      {
        name: 'Synchronized Data',
        description: 'Real-time data synchronization ensures seamless access across all devices.'
      }
    ]
  },
  {
    id: 'ios-android-platforms',
    number: '< 02 >',
    title: 'Build for iOS and Android Platforms',
    image: platformImg,
    items: [
      {
        name: 'Native Development',
        description: 'Native iOS and Android development by expert engineers to get your app to market faster.'
      },
      {
        name: 'Platform-Specific Optimization',
        description: 'Platform-specific optimization using native features for optimal performance and natural user experience.'
      },
      {
        name: 'Faster Time to Market',
        description: 'Reach both iOS and Android users simultaneously with rapid development and deployment.'
      }
    ]
  },
  {
    id: 'streamline-business',
    number: '< 03 >',
    title: 'Streamline Your Business Processes',
    image: capabilitiesImg,
    items: [
      {
        name: 'Remote Work Solutions',
        description: 'Enable remote work and reduce inefficiencies by integrating mobile apps with your internal systems.'
      },
      {
        name: 'Process Automation',
        description: 'Automate routine tasks and workflows to reduce errors and free your team for strategic work.'
      },
      {
        name: 'Cost Efficiency',
        description: 'Improve productivity and cut costs by eliminating redundant processes with mobile solutions.'
      }
    ]
  },
  {
    id: 'standalone-app',
    number: '< 04 >',
    title: 'Create a Stand-Alone Mobile App',
    image: platformImg,
    items: [
      {
        name: 'Mobile-First Solutions',
        description: 'Transform your mobile vision into a customer-focused app, whether you\'re a start-up or established company.'
      },
      {
        name: 'Custom App Development',
        description: 'End-to-end custom mobile app development tailored to your specific business needs and target audience.'
      },
      {
        name: 'Innovation & Execution',
        description: 'Transform innovative ideas into functional, user-friendly mobile applications that drive engagement and business results.'
      }
    ]
  }
]

const emergingTechData: EmergingTechProps['data'] = {
  label: 'INTEGRATION OTHER TECHNOLOGIES',
  titleAccent: 'Emerging Technologies',
  titleMain: 'We Integrate',
  description: 'To take your app from great to unforgettable, we integrate the latest technologies and enhancements that improve functionality, user engagement, and business insights.',
  items: [
    {
      icon: 'enterprise' as const,
      title: 'Process Automation Solutions',
      description: 'Automate business operations to focus on core competencies and eliminate labor-intensive systems.'
    },
    {
      icon: 'mobile' as const,
      title: 'Multimedia Tools',
      description: 'Video and audio streaming, image processing, social network integration, and monetization features.'
    },
    {
      icon: 'ecommerce' as const,
      title: 'Ecommerce Apps',
      description: 'Secure and efficient customer experiences with inventory and payment management solutions.'
    },
    {
      icon: 'thirdParty' as const,
      title: 'Social Networking Apps',
      description: 'Seamlessly connect with existing social networking platforms for enhanced user engagement.'
    },
    {
      icon: 'enterprise' as const,
      title: 'Internal Corporate Solutions',
      description: 'Enhance existing ERP systems with mobile solutions that improve efficiency and accountability.'
    },
    {
      icon: 'mobile' as const,
      title: 'Lifestyle & Leisure Apps',
      description: 'Mobile apps that provide access to events, sports, food, travel, and lifestyle activities.'
    },
    {
      icon: 'mobile' as const,
      title: 'News & Information Apps',
      description: 'Personalized news and information experiences with full control over UI and design.'
    },
    {
      icon: 'product' as const,
      title: 'One-of-a-Kind Apps',
      description: 'Custom mobile applications built from the ground up for unique business needs.'
    },
  ]
};

const MobileAppDevelopment: React.FC = () => {
  return (
    <>
      <IntroComponent
        title="Mobile App Development Services"
        description="At Leapsofts, we do more than just develop apps; we craft engaging digital experiences. With our rapid, agile, and scalable mobile app development approach, we position you at the forefront of innovation, swiftly propelling you ahead of the competition."
      />
      <Capabilities title="Our Mobile App Development Capabilities" slides={mobileAppSlides} />
      <EmergingTech data={emergingTechData} />
    </>
  )
}

export default MobileAppDevelopment