import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { type IndustriesContextType } from '../../layouts/IndustriesLayout/IndustriesLayout';
import IntroComponent from '../../components/IntroComponent/IntroComponent';
import CommitmentSection, { type CommitmentSectionProps } from '../../components/CommitmentSection/CommitmentSection';
import StreamlineSuccess from '../Home/Streamline/StreamlineSuccess';
import EmergingTech, { type EmergingTechProps } from '../../components/EmergingTech/EmergingTech';
import Services from '../Home/CompanyServices/Services';
import RelatedServices from '../../components/RelatedServices/RelatedServices';

const commitmentData: CommitmentSectionProps['data'] = {
  subtitle: "OUR COMMITMENTS TO REAL ESTATE LEADERS",
  title: "Tailored for Build, Buy, and Scale",
  items: [
    {
      icon: '/industryicons/sphere.svg',
      title: 'Frictionless Portfolio Management',
      description: "Deploying modular resident dashboards and automated lease workflows that digitize routine tenant check-ins, key handouts, and utility configurations."
    },
    {
      icon: '/industryicons/bipiramida.svg',
      title: 'Scalable Asset Ownership',
      description: "Building database infrastructures engineered to scale alongside your property volumes, accommodating thousands of multi-family complexes, B2B workspaces, and retail assets."
    },
    {
      icon: '/industryicons/diamond.svg',
      title: 'Community-Centric Innovation',
      description: "Integrating high-fidelity communication interfaces, local neighborhood business boards, and booking channels for shared community amenities to elevate resident retention."
    }
  ]
};

const realEstateSolutionsData: EmergingTechProps['data'] = {
  label: 'OUR SOLUTIONS',
  titleAccent: 'Real Estate-Focused',
  titleMain: ' Digital Ecosystems',
  description: 'We build custom software that automates details, simplifies resident concerns, and optimizes property management for high-stakes portfolios.',
  items: [
    {
      icon: 'legacy',
      title: 'Multi-Family Management Platforms',
      description: "Developing robust lease lifecycle engines that handle automated background screenings, digital document signing (e-Sign), and move-in logs."
    },
    {
      icon: 'enterprise',
      title: 'Developer CRM & Sales Pipelines',
      description: "Structuring customized sales trackers displaying active construction progress, virtual tour pathways, and mortgage application integrations."
    },
    {
      icon: 'thirdParty',
      title: 'Governance & HOA Portals',
      description: "Designing community portals to distribute policy bylaws, handle digital voting boards, and track monthly amenity reserve balances."
    },
    {
      icon: 'saas',
      title: 'Smart Dispatch & Work Orders',
      description: "Automating subcontractor assignment pipelines, tracking work status from tenant photo uploads, and managing maintenance inspection schedules."
    },
    {
      icon: 'product',
      title: 'Unified Billing & Rent Gateways',
      description: "Integrating Stripe payment rails to automate recurring monthly rent drafts, coordinate late-fee triggers, and manage direct bank deposits."
    },
    {
      icon: 'mobile',
      title: 'Mobile Tenant Companions',
      description: "Building responsive React Native applications that act as digital keys, community chats, and direct maintenance channels for residents."
    },
    {
      icon: 'product',
      title: 'Flex-Space Booking Engines',
      description: "Configuring seat maps and conference room calendars with immediate Stripe micro-transaction checkouts for hot-desking properties."
    },
    {
      icon: 'enterprise',
      title: 'Smart Building IoT Bridges',
      description: "Connecting automated smart locks, digital utility monitors, and smart thermostats to centralized management hubs to cut vacancy overheads."
    }
  ]
};

const streamlineDescription = [
  { text: "Transform your ", bold: false },
  { text: "property portfolio ", bold: true },
  { text: "with a robust technical foundation. Leapsofts offers a ", bold: false },
  { text: "complimentary real estate strategy session ", bold: true },
  { text: "to help you optimize ", bold: false },
  { text: "management workflows ", bold: true },
  { text: "and increase resident satisfaction.", bold: false },
];

const title = "Real Estate Software Development, PropTech Solutions & Property Management Systems";
const subtitle = "";
const introDescription = [
  { text: "We deliver full-spectrum ", bold: false },
  { text: "real estate software development, PropTech software solutions, and property management systems ", bold: true },
  { text: "engineered for asset managers, real estate agencies, and property developers. By deploying automated lease execution paths, tenant portal mobile apps, and smart building IoT bridges, we optimize property yields and occupancy.", bold: false }
];

export function meta() {
  const title = "Real Estate Software Development Services | Leapsofts";
  const description = "Custom real estate software — property listing platforms, CRM & investment analytics tools. Leapsofts builds proptech solutions for modern agencies. Get a quote.";
  const keywords = "real estate software development, proptech software company, property management software, MLS integration";
  const canonicalUrl = "https://www.leapsofts.com/industries/real-estate";

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Real Estate Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Leapsofts",
        "url": "https://www.leapsofts.com"
      },
      "serviceType": "PropTech & Real Estate Software Engineering",
      "description": "Custom real estate software — property listing platforms, CRM & investment analytics tools."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.leapsofts.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Real Estate",
          "item": "https://www.leapsofts.com/industries/real-estate"
        }
      ]
    }
  ]
};

const RealEstate: React.FC = () => {
  const { setProcessTitle } = useOutletContext<IndustriesContextType>();

  useEffect(() => {
    setProcessTitle({
      titleMain: "Real Estate Tech Ecosystems",
      titleAccent: "Process"
    });
  }, [setProcessTitle]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IntroComponent
        title={title}
        description={subtitle}
        introDescription={introDescription}
      />
      <CommitmentSection data={commitmentData} />
      <StreamlineSuccess
        label="STREAMLINE YOUR SUCCESS"
        titleMain="Property "
        titleAccent="Strategy"
        titleEnd=" Session"
        description={streamlineDescription}
        imageUrl="/streamline.png"
      />
      <EmergingTech data={realEstateSolutionsData} />
      <Services
        label="OUR CAPABILITIES"
        titleMain="How we "
        titleAccent="empower"
        titleEnd=" real estate businesses"
      />
      <RelatedServices
        services={[
          {
            title: "Web App Development",
            description: "Engineer custom property listing portals and tenant management dashboards.",
            link: "/services/web-app-development"
          },
          {
            title: "Mobile App Development",
            description: "Build iOS & Android mobile apps for tenant maintenance requests and digital keys.",
            link: "/services/mobile-app-development"
          },
          {
            title: "Custom Software Development",
            description: "Build tailored MLS integrations, lease execution engines, and HOA portals.",
            link: "/services/custom-software-development"
          }
        ]}
      />
    </>
  );
};

export default RealEstate;
