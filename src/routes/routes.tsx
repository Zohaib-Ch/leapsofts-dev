import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout/MainLayout';
import CustomSoftwareDevelopment from '../pages/ServicesPages/CustomSoftwareDevelopment';
import ServicesLayout from '../layouts/ServicesLayout/ServicesLayout';
import MobileAppDevelopment from '../pages/ServicesPages/MobileAppDevelopment';
import WebAppDevelopment from '../pages/ServicesPages/WebAppDevelopment';
import AppReengineering from '../pages/ServicesPages/AppReengineering';
import QualityAssurance from '../pages/ServicesPages/QualityAssurance';
import Salesforce from '../pages/ServicesPages/Salesforce';
import Shopify from '../pages/ServicesPages/Shopify';
import ServiceNow from '../pages/ServicesPages/ServiceNow';
import DataScienceAI from '../pages/ServicesPages/DataScienceAI';
import CyberSecurity from '../pages/ServicesPages/CyberSecurity';
import BusinessProcessOutsourcing from '../pages/ServicesPages/BusinessProcessOutsourcing';
import DataGovernance from '../pages/ServicesPages/DataGovernance';
import DedicatedTeams from '../pages/ServicesPages/DedicatedTeams';
import CloudEngineering from '../pages/ServicesPages/CloudEngineering';
import CloudMigration from '../pages/ServicesPages/CloudMigration';
import DevOps from '../pages/ServicesPages/DevOps';
import AWS from '../pages/ServicesPages/AWS';
import Azure from '../pages/ServicesPages/Azure';
import DigitalEvolution from '../pages/ServicesPages/DigitalEvolution';
import FixedPrice from '../pages/ServicesPages/FixedPrice';
import IdeationWorkshop from '../pages/ServicesPages/IdeationWorkshop';
import ProductDevelopmentStrategy from '../pages/ServicesPages/ProductDevelopmentStrategy';
import ProofOfConceptDevelopment from '../pages/ServicesPages/ProofOfConceptDevelopment';
import IndustriesLayout from '../layouts/IndustriesLayout/IndustriesLayout';
import Finance from '../pages/IndustriesPages/Finance';
import Healthcare from '../pages/IndustriesPages/Healthcare';
import MidSizedBusinesses from '../pages/IndustriesPages/MidSizedBusinesses';
import WholesaleRetail from '../pages/IndustriesPages/WholesaleRetail';
import Education from '../pages/IndustriesPages/Education';
import Construction from '../pages/IndustriesPages/Construction';
import Entertainment from '../pages/IndustriesPages/Entertainment';
import RealEstate from '../pages/IndustriesPages/RealEstate';
import Transportation from '../pages/IndustriesPages/Transportation';
import Energy from '../pages/IndustriesPages/Energy';
import Projects from '../pages/Company/Projects';
import Partners from '../pages/Company/Partners';
import ProjectDetails from '../pages/Company/ProjectDetails';
import Error from '../pages/ErrorPage/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: 'partners',
                        element: <Partners />
                    }
                ]
            },
            {
                path: 'services',
                element: <ServicesLayout />,
                children: [
                    {
                        path: 'custom-software-development',
                        element: <CustomSoftwareDevelopment />,
                    },
                    {
                        path: 'mobile-app-development',
                        element: <MobileAppDevelopment />,
                    },
                    {
                        path: 'web-app-development',
                        element: <WebAppDevelopment />,
                    },
                    {
                        path: 'app-reengineering',
                        element: <AppReengineering />,
                    },
                    {
                        path: 'quality-assurance',
                        element: <QualityAssurance />,
                    },
                    {
                        path: 'salesforce',
                        element: <Salesforce />,
                    },
                    {
                        path: 'shopify',
                        element: <Shopify />
                    },
                    {
                        path: 'service-now',
                        element: <ServiceNow />
                    },
                    {
                        path: 'data-science-ai',
                        element: <DataScienceAI />
                    },
                    {
                        path: 'cyber-security',
                        element: <CyberSecurity />
                    },
                    {
                        path: 'business-process-outsourcing',
                        element: <BusinessProcessOutsourcing />
                    },
                    {
                        path: 'data-governance',
                        element: <DataGovernance />
                    },
                    {
                        path: 'dedicated-teams',
                        element: <DedicatedTeams />
                    },
                    {
                        path: 'cloud-engineering',
                        element: <CloudEngineering />
                    },
                    {
                        path: 'cloud-migration',
                        element: <CloudMigration />
                    },
                    {
                        path: 'devops',
                        element: <DevOps />
                    },
                    {
                        path: 'aws',
                        element: <AWS />
                    },
                    {
                        path: 'azure',
                        element: <Azure />
                    },
                    {
                        path: 'digital-evolution',
                        element: <DigitalEvolution />
                    },
                    {
                        path: 'fixed-price',
                        element: <FixedPrice />
                    },
                    {
                        path: 'ideation-workshop',
                        element: <IdeationWorkshop />
                    },
                    {
                        path: 'product-development-strategy',
                        element: <ProductDevelopmentStrategy />
                    },
                    {
                        path: 'proof-of-concept-development',
                        element: <ProofOfConceptDevelopment />
                    },
                ],
            },
            {
                path: 'industries',
                element: <IndustriesLayout />,
                children: [
                    {
                        path: 'finance',
                        element: <Finance />
                    },
                    {
                        path: 'healthcare',
                        element: <Healthcare />
                    },
                    {
                        path: 'mid-sized-businesses',
                        element: <MidSizedBusinesses />
                    },
                    {
                        path: 'wholesale-retail',
                        element: <WholesaleRetail />
                    },
                    {
                        path: 'ed-tech',
                        element: <Education />
                    },
                    {
                        path: 'construction',
                        element: <Construction />
                    },
                    {
                        path: 'entertainment',
                        element: <Entertainment />
                    },
                    {
                        path: 'real-estate',
                        element: <RealEstate />
                    },
                    {
                        path: 'transportation',
                        element: <Transportation />
                    },
                    {
                        path: 'energy',
                        element: <Energy />
                    }
                ]
            },
            // Partners route moved to MainLayout

            {
                path: 'projects',
                children: [
                    {
                        path: '',
                        element: <Projects />
                    },
                    {
                        path: ':id',
                        element: <ProjectDetails />
                    }
                ]
            },
            {
                path: '*',
                element: <Error />
            }
        ],
    }
]);

export default router;
