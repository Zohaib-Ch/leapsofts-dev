export interface ProjectData {
    type: 'industry' | 'project';
    id: string;
    brand: {
        name: string;
        logo: string;
        description: string;
    };
    highlight?: Record<string, string[]>;
    projectList: string[];
    brandVisualImg: string;
    tabs?: { id: string; label: string; isActive?: boolean }[];
    impact: {
        title: string;
        images: string[];
    };
    tabImages?: Record<string, string>;
    summary: {
        description: string;
        details: { label: string; value: string }[];
    };
    techStack: {
        title: string;
        items: {
            label: string;
            techs: { name: string; icon?: string }[];
        }[];
    };
}

export const projectsData: ProjectData[] = [
    {
        type: 'industry',
        id: 'project-industry-0',
        brand: {
            name: 'Automotive',
            logo: '/icons/industries/automotive-link.svg',
            description: 'End-to-end orchestration for OEMs and dealers. Modular and scalable to unify showroom and online journeys into one seamless retail experience.',
        },
        highlight: {
            'tab-0-0': ['Agile Auto'],
            'tab-0-1': ['Autoleap'],
            'tab-0-2': ['Arabwheels']
        },
        projectList: ['Agile Auto', 'Autoleap', 'Arabwheels'],
        brandVisualImg: '/icons/industries/automotive-link.svg',
        tabs: [
            { id: 'tab-0-0', label: 'Dealership network' },
            { id: 'tab-0-1', label: 'Auto repair', isActive: true },
            { id: 'tab-0-2', label: 'Used car marketplace' }
        ],
        impact: {
            title: "Revolutionizing Automotive Sales with AI Orchestration",
            images: ["/projectImages/agileauto.png", "/projectImages/autoleap.png"]
        },
        tabImages: {
            'tab-0-0': '/projectImages/agileauto1.png',
            'tab-0-1': '/projectImages/autoleap.png',
            'tab-0-2': '/projectImages/arabwheel1.png'
        },
        summary: {
            description: "We implemented a comprehensive digital ecosystem for a leading automotive OEM, bridging the gap between digital discovery and physical showrooms.",
            details: [
                { label: "Industry", value: "Automotive" },
                { label: "Project Type", value: "Omnichannel Retail Platform" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "AI/LLM", techs: [{ name: "GPT-4o", icon: "/technologies/mixture.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Infrastructure", techs: [{ name: "AWS", icon: "/technologies/aws.png" }, { name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Backend", techs: [{ name: "Python", icon: "/technologies/mixture.png" }, { name: "FastAPI", icon: "/technologies/nodejs.png" }] }
            ]
        }
    },
    {
        type: 'industry',
        id: 'project-industry-2',
        brand: {
            name: 'Healthcare',
            logo: '/icons/industries/healthcare-link.svg',
            description: 'Advanced digital health platforms connecting patients and providers. Our solutions prioritize data security and seamless integration across healthcare ecosystems.',
        },
        highlight: {
            'tab-2-0': ['Genpsych'],
            'tab-2-1': ['Pinoyaya'],
        },
        projectList: ['Genpsych', 'Pinoyaya'],
        brandVisualImg: '/icons/industries/healthcare-link.svg',
        tabs: [
            { id: 'tab-2-0', label: 'Hospitals' },
            { id: 'tab-2-1', label: 'Pinoyaya', isActive: true },
        ],
        impact: {
            title: "Scaling Patient Care with Remote Monitoring",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-2-0': '/projectImages/hospital.png',
            'tab-2-1': '/projectImages/pinoyaya.png',
        },
        summary: {
            description: "Connecting healthcare providers with patients through a secure, HIPAA-compliant platform that enables real-time monitoring and better health outcomes.",
            details: [
                { label: "Industry", value: "Healthcare" },
                { label: "Project Type", value: "Remote Health Platform" },
                { label: "Service", value: "HealthTech Engineering" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Mobile", techs: [{ name: "Flutter", icon: "/technologies/flutter.png" }] },
                { label: "Real-time", techs: [{ name: "WebSockets", icon: "/technologies/nodejs.png" }] },
                { label: "Cloud", techs: [{ name: "AWS HealthLake", icon: "/technologies/aws.png" }] },
                { label: "Analytics", techs: [{ name: "TensorFlow", icon: "/technologies/tensorflow.png" }] }
            ]
        }
    },
    // {
    //     type: 'industry',
    //     id: 'project-industry-4',
    //     brand: {
    //         name: 'Construction',
    //         logo: '/icons/industries/construction-link.svg',
    //         description: 'Digital project management and BIM integration for large-scale construction. Streamline site operations and resource allocation with real-time data visualizers.',
    //     },
    //     highlight: {
    //         'tab-4-0': ['DesignStudio'],
    //         'tab-4-1': ['EngiX'],
    //         'tab-4-2': ['SiteVision']
    //     },
    //     projectList: ['DesignStudio', 'EngiX', 'SiteVision'],
    //     brandVisualImg: '/icons/industries/construction-link.svg',
    //     tabs: [
    //         { id: 'tab-4-0', label: 'Architecture' },
    //         { id: 'tab-4-1', label: 'Engineering', isActive: true },
    //         { id: 'tab-4-2', label: 'Site Tech' }
    //     ],
    //     impact: {
    //         title: "Optimizing Construction Workflows with BIM",
    //         images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
    //     },
    //     summary: {
    //         description: "Integrating real-time sensor data with 3D models to provide construction managers with unprecedented visibility into site operations.",
    //         details: [
    //             { label: "Industry", value: "Construction" },
    //             { label: "Project Type", value: "Digital Twin & Site Management" },
    //             { label: "Service", value: "ConTech Solutions" }
    //         ]
    //     },
    //     techStack: {
    //         title: "Tools and technologies",
    //         items: [
    //             { label: "IoT", techs: [{ name: "AWS IoT", icon: "/technologies/aws.png" }] },
    //             { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
    //             { label: "Infrastructure", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] },
    //             { label: "Backend", techs: [{ name: "NestJS", icon: "/technologies/nestjs.png" }] }
    //         ]
    //     }
    // },
    // {
    //     type: 'industry',
    //     id: 'project-industry-5',
    //     brand: {
    //         name: 'Energy',
    //         logo: '/icons/industries/energy-link.svg',
    //         description: 'Optimizing resource distribution with smart grid technology. Our energy solutions handle massive data streams to provide predictive maintenance and efficiency.',
    //     },
    //     highlight: {
    //         'tab-5-0': ['SunStream'],
    //         'tab-5-1': ['GridLock'],
    //         'tab-5-2': ['MeterMate']
    //     },
    //     projectList: ['SunStream', 'GridLock', 'MeterMate'],
    //     brandVisualImg: '/icons/industries/energy-link.svg',
    //     tabs: [
    //         { id: 'tab-5-0', label: 'Renewables' },
    //         { id: 'tab-5-1', label: 'Power Grids', isActive: true },
    //         { id: 'tab-5-2', label: 'Smart Metering' }
    //     ],
    //     impact: {
    //         title: "Intelligent Power Distribution for Smart Cities",
    //         images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
    //     },
    //     summary: {
    //         description: "Deploying AI-driven analytics to manage renewable energy integration and optimize grid stability across multi-regional distribution networks.",
    //         details: [
    //             { label: "Industry", value: "Energy" },
    //             { label: "Project Type", value: "Smart Grid Analytics" },
    //             { label: "Service", value: "EnergyTech Engineering" }
    //         ]
    //     },
    //     techStack: {
    //         title: "Tools and technologies",
    //         items: [
    //             { label: "AI/ML", techs: [{ name: "PyTorch", icon: "/technologies/pytorch.png" }, { name: "TensorFlow", icon: "/technologies/tensorflow.png" }] },
    //             { label: "Cloud", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
    //             { label: "Big Data", techs: [{ name: "Firebase", icon: "/technologies/firebase.png" }] }
    //         ]
    //     }
    // },
    {
        type: 'industry',
        id: 'project-industry-6',
        brand: {
            name: 'Compliance',
            logo: '/icons/industries/compliance-link.svg',
            description: 'Automated regulatory reporting and risk management. We provide the tools to ensure global compliance across multiple jurisdictions with immutable auditing.',
        },
        highlight: {
            'tab-6-0': ['Compliance Vision'],
            'tab-6-1': ['KYC Solutions'],
        },
        projectList: ['Compliance Vision', 'KYC Solutions'],
        brandVisualImg: '/icons/industries/compliance-link.svg',
        tabs: [
            { id: 'tab-6-0', label: 'Compliance Vision' },
            { id: 'tab-6-1', label: 'KYC Solutions', isActive: true },
        ],
        impact: {
            title: "Automating Compliance for Global Regulatory Sync",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Establishing a unified compliance framework that automatically scales with new jurisdictional requirements, ensuring zero-fault auditing.",
            details: [
                { label: "Industry", value: "Legal & Compliance" },
                { label: "Project Type", value: "RegTech Automation" },
                { label: "Service", value: "Enterprise Compliance" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Workflow", techs: [{ name: "NestJS", icon: "/technologies/nestjs.png" }] },
                { label: "Security", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Infrastructure", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Frontend", techs: [{ name: "Vue.js", icon: "/technologies/vuejs.png" }] }
            ]
        }
    },
    // {
    //     type: 'industry',
    //     id: 'project-industry-7',
    //     brand: {
    //         name: 'Startups',
    //         logo: '/icons/industries/startup-link.svg',
    //         description: 'Accelerating early-stage growth with agile software development. From MVP to scaling, we provide the technical foundation for the unicorns of tomorrow.',
    //     },
    //     highlight: {
    //         'tab-7-0': ['IdeaPad'],
    //         'tab-7-1': ['BuildIt'],
    //         'tab-7-2': ['ScaleUp']
    //     },
    //     projectList: ['IdeaPad', 'BuildIt', 'ScaleUp'],
    //     brandVisualImg: '/icons/industries/startup-link.svg',
    //     tabs: [
    //         { id: 'tab-7-0', label: 'Ideation' },
    //         { id: 'tab-7-1', label: 'MVP Development', isActive: true },
    //         { id: 'tab-7-2', label: 'Series A+ Scaling' }
    //     ],
    //     impact: {
    //         title: "From MVP to Series A in Record Time",
    //         images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
    //     },
    //     summary: {
    //         description: "Partnering with founders to build scalable MVPs that not only prove product-market fit but are architecture-ready for rapid scaling.",
    //         details: [
    //             { label: "Industry", value: "Multi-domain" },
    //             { label: "Project Type", value: "Venture Building & MVPs" },
    //             { label: "Service", value: "Strategic Development" }
    //         ]
    //     },
    //     techStack: {
    //         title: "Tools and technologies",
    //         items: [
    //             { label: "PaaS", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] },
    //             { label: "Database", techs: [{ name: "Supabase", icon: "/technologies/postgresql.png" }] },
    //             { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }] },
    //             { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/laravel.png" }] }
    //         ]
    //     }
    // },
    {
        type: 'industry',
        id: 'project-industry-8',
        brand: {
            name: 'EdTech',
            logo: '/icons/industries/education-link.svg',
            description: 'Transforming education with technology. We build learning platforms that adapt to individual student needs and empower educators with data-driven insights.',
        },
        highlight: {
            'tab-8-0': ['POPM Global'],
        },
        projectList: ['POPM Global'],
        brandVisualImg: '/icons/industries/education-link.svg',
        tabs: [
            { id: 'tab-8-0', label: 'Learning Platforms' }
        ],
        impact: {
            title: "Transforming Education with Technology",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-8-0': '/projectImages/pop.png',
        },
        summary: {
            description: "Partnering with educational institutions to create technology solutions that enhance learning outcomes and streamline administrative processes.",
            details: [
                { label: "Industry", value: "Education" },
                { label: "Project Type", value: "Learning Platforms" },
                { label: "Service", value: "Educational Technology" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }] },
                { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/laravel.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Cloud", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] }
            ]
        }
    },
    {
        type: 'industry',
        id: 'project-industry-9',
        brand: {
            name: 'Forensics',
            logo: '/icons/industries/energy-link.svg',
            description: 'Transforming education with technology. We build learning platforms that adapt to individual student needs and empower educators with data-driven insights.',
        },
        highlight: {
            'tab-9-0': ['Monolith'],
        },
        projectList: ['Monolith'],
        brandVisualImg: '/icons/industries/energy-link.svg',
        tabs: [
            { id: 'tab-9-0', label: 'Forensics' },
        ],
        impact: {
            title: "Transforming Education with Technology",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-9-0': '/projectImages/forensics.png',
        },
        summary: {
            description: "Partnering with educational institutions to create technology solutions that enhance learning outcomes and streamline administrative processes.",
            details: [
                { label: "Industry", value: "Education" },
                { label: "Project Type", value: "Learning Platforms" },
                { label: "Service", value: "Educational Technology" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }] },
                { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/laravel.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Cloud", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] }
            ]
        }
    },
    {
        type: 'industry',
        id: 'project-industry-10',
        brand: {
            name: 'FinTech',
            logo: '/icons/industries/energy-link.svg',
            description: 'Transforming education with technology. We build learning platforms that adapt to individual student needs and empower educators with data-driven insights.',
        },
        highlight: {
            'tab-10-0': ['Payment Processor Limited'],
        },
        projectList: ['Payment Processor Limited'],
        brandVisualImg: '/icons/industries/energy-link.svg',
        tabs: [
            { id: 'tab-10-0', label: 'Payment Processor Limited' },
        ],
        impact: {
            title: "Transforming Education with Technology",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-10-0': '/projectImages/payment.png',
        },
        summary: {
            description: "Partnering with educational institutions to create technology solutions that enhance learning outcomes and streamline administrative processes.",
            details: [
                { label: "Industry", value: "Education" },
                { label: "Project Type", value: "Learning Platforms" },
                { label: "Service", value: "Educational Technology" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }] },
                { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/laravel.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Cloud", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] }
            ]
        }
    },
    {
        type: 'industry',
        id: 'project-industry-11',
        brand: {
            name: 'Transportation',
            logo: '/icons/industries/education-link.svg',
            description: 'Advanced digital health platforms connecting patients and providers. Our solutions prioritize data security and seamless integration across healthcare ecosystems.',
        },
        highlight: {
            'tab-11-0': ['Neblo Ai'],
        },
        projectList: ['Neblo Ai'],
        brandVisualImg: '/icons/industries/education-link.svg',
        tabs: [
            { id: 'tab-11-0', label: 'Neblo Ai' },
        ],
        impact: {
            title: "Scaling Patient Care with Remote Monitoring",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-11-0': '/projectImages/neblo.png',
        },
        summary: {
            description: "Developing a next-generation banking core that enables traditional financial institutions to compete with agile fintech startups.",
            details: [
                { label: "Industry", value: "Finance & Banking" },
                { label: "Project Type", value: "NeoBank Core Infrastructure" },
                { label: "Service", value: "Fintech Solutions" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }, { name: "Next.js", icon: "/technologies/nodejs.png" }] },
                { label: "Cloud", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }] },
                { label: "Backend", techs: [{ name: "TypeScript", icon: "/technologies/nodejs.png" }] }
            ]
        }
    },
    {
        type: 'industry',
        id: 'project-industry-12',
        brand: {
            name: 'Wholesale and Retail',
            logo: '/icons/industries/education-link.svg',
            description: 'Advanced digital health platforms connecting patients and providers. Our solutions prioritize data security and seamless integration across healthcare ecosystems.',
        },
        highlight: {
            'tab-12-0': ['Paint Visualizer'],
            'tab-12-1': ['Zilouet'],
        },
        projectList: ['Paint Visualizer', 'Zilouet'],
        brandVisualImg: '/icons/industries/education-link.svg',
        tabs: [
            { id: 'tab-12-0', label: 'Paint Visualizer' },
            { id: 'tab-12-1', label: 'Zilouet', isActive: true },
        ],
        impact: {
            title: "Scaling Patient Care with Remote Monitoring",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-12-0': '/projectImages/paint.png',
            'tab-12-1': '/projectImages/zilouet.png',
        },
        summary: {
            description: "Developing a next-generation banking core that enables traditional financial institutions to compete with agile fintech startups.",
            details: [
                { label: "Industry", value: "Finance & Banking" },
                { label: "Project Type", value: "NeoBank Core Infrastructure" },
                { label: "Service", value: "Fintech Solutions" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }, { name: "Next.js", icon: "/technologies/nodejs.png" }] },
                { label: "Cloud", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }] },
                { label: "Backend", techs: [{ name: "TypeScript", icon: "/technologies/nodejs.png" }] }
            ]
        }
    },
       {
        type: 'industry',
        id: 'project-industry-13',
        brand: {
            name: 'AI & Automation',
            logo: '/icons/industries/education-link.svg',
            description: 'Advanced digital health platforms connecting patients and providers. Our solutions prioritize data security and seamless integration across healthcare ecosystems.',
        },
        highlight: {
            'tab-13-0': ['Sales kik'],
            'tab-13-1': ['Cypher Bot'],
            'tab-13-2': ['Facia'],
        },
        projectList: ['Sales kik', 'Cypher Bot', 'Facia'],
        brandVisualImg: '/icons/industries/education-link.svg',
        tabs: [
            { id: 'tab-13-0', label: 'Sales kik' },
            { id: 'tab-13-1', label: 'Cypher Bot', isActive: true },
            { id: 'tab-13-2', label: 'Facia' },
        ],
        impact: {
            title: "Scaling Patient Care with Remote Monitoring",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        tabImages: {
            'tab-13-0': '/ai_workflow_slack_showcase.png',
            'tab-13-1': '/ai_team_collaboration_impact.png',
            'tab-13-2': '/ai_team_collaboration_impact.png',
        },
        summary: {
            description: "Developing a next-generation banking core that enables traditional financial institutions to compete with agile fintech startups.",
            details: [
                { label: "Industry", value: "Finance & Banking" },
                { label: "Project Type", value: "NeoBank Core Infrastructure" },
                { label: "Service", value: "Fintech Solutions" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }, { name: "Next.js", icon: "/technologies/nodejs.png" }] },
                { label: "Cloud", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }] },
                { label: "Backend", techs: [{ name: "TypeScript", icon: "/technologies/nodejs.png" }] }
            ]
        }
    },
    // Sub-projects
    {
        type: 'project',
        id: 'agile-auto',
        brand: {
            name: 'Agile Auto',
            logo: '/icons/projects/agile-auto.svg',
            description: 'Advanced dealership management system with real-time inventory tracking and AI sales forecasting.',
        },
        brandVisualImg: '/icons/projects/agile-auto.svg',
        projectList: ['Real-time inventory synchronization', 'Data-driven sales forecasting engine', 'Digital showroom experience'],
        impact: {
            title: "Agile Auto",
            images: ["/projectImages/agileauto.png", "/projectImages/agileauto1.png"]
        },
        summary: {
            description: "AgileAuto is a comprehensive automotive dealership management and analytics platform designed to help automotive retailers optimize their inventory, sales, and acquisition strategies through data-driven insights",
            details: [
                { label: "Industry", value: "Automotive" },
                { label: "Project Type", value: "Dealership Management" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "Vue.js", icon: "/technologies/vuejs.png" }] },
                { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/Laravel-Logo.wine.svg" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Cache", techs: [{ name: "Redis", icon: "/technologies/redis.svg" }] },
                { label: "Testing", techs: [{ name: "PhpPest", icon: "/technologies/pest-logo.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'autoleap',
        brand: {
            name: 'Autoleap',
            logo: '/icons/projects/autoleap.svg',
            description: 'The definitive platform for modern auto repair shops. Manage appointments, parts, and customer communication in one place.',
        },
        brandVisualImg: '/icons/projects/autoleap.svg',
        projectList: ['All-in-One Shop Management', 'AI Receptionist for Auto Shops', 'Digital Vehicle Inspections (DVI)'],
        impact: {
            title: "Autoleap",
            images: ["/projectImages/autoleap.png", "/projectImages/autoleap1.png"]
        },
        summary: {
            description: "AutoLeap provides a complete automotive repair shop management solution for shop owners, service managers, and technicians to manage every aspect of their shop. Designed to help you work smarter, not harder, and grow your auto repair business, all from a single, easy-to-use platform.",
            details: [
                { label: "Industry", value: "Automotive" },
                { label: "Project Type", value: "Auto-Repair" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "Angular", icon: "/technologies/angular.svg" }] },
                { label: "Backend", techs: [{ name: "Express.js", icon: "/technologies/express_logo.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'arabwheels',
        brand: {
            name: 'ArabWheels',
            logo: '/icons/projects/arabwheels.svg',
            description: 'The Middle East\'s leading digital destination for automotive reviews, news, and classifieds.',
        },
        brandVisualImg: '/icons/projects/arabwheels.svg',
        projectList: ['Expert Reviews & Automotive Media', 'New Car Research Portal', 'Automotive Buying Guides'],
        impact: {
            title: "ArabWheels",
            images: ["/projectImages/arabwheel.png", "/projectImages/arabwheel1.png"]
        },
        summary: {
            description: "ArabWheels is a digital automotive marketplace and media platform in the UAE that facilitates the buying and selling of new and used vehicles. It provides consumers with transparent pricing, technical specifications, and expert reviews to streamline the car ownership journey.",
            details: [
                { label: "Industry", value: "Automotive" },
                { label: "Project Type", value: "Used Car Marketplace" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/react1.svg" }] },
                { label: "Backend", techs: [{ name: "Express.js", icon: "/technologies/express_logo.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }] },
                { label: "Storage", techs: [{ name: "AWS S3", icon: "/technologies/aws-s3.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'vaultguard',
        brand: {
            name: 'VaultGuard',
            logo: '/icons/projects/vaultguard.svg',
            description: 'Hyper-secure digital vault for enterprise asset management and private banking.',
        },
        brandVisualImg: '/icons/projects/vaultguard.svg',
        projectList: ['Multi-sig enterprise vault', 'Zero-trust architecture framework', 'Private banking secure portal'],
        impact: {
            title: "Securing $10B+ in Digital Assets",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "VaultGuard is a zero-trust architecture platform designed for high-net-worth individuals and institutional investors.",
            details: [
                { label: "Industry", value: "Fintech" },
                { label: "Compliance", value: "SOC2 Type II" }
            ]
        },
        techStack: {
            title: "Security Stack",
            items: [
                { label: "Encryption", techs: [{ name: "AES-256", icon: "/technologies/mixture.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'insurtech',
        brand: {
            name: 'InsurTech',
            logo: '/icons/projects/insurtech.svg',
            description: 'AI-driven claims processing and risk assessment for modern insurance providers.',
        },
        brandVisualImg: '/icons/projects/insurtech.svg',
        projectList: ['AI damage assessment engine', 'Smart fraud detection system', 'Instant payout gateway integration'],
        impact: {
            title: "Automating 80% of Insurance Claims",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Our InsurTech solution leverages machine learning to detect fraud and expedite legitimate claims, saving millions in operational costs.",
            details: [
                { label: "Domain", value: "Insurance" },
                { label: "Focus", value: "Process Automation" }
            ]
        },
        techStack: {
            title: "ML Stack",
            items: [
                { label: "AI", techs: [{ name: "PyTorch", icon: "/technologies/pytorch.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'wealthbot',
        brand: {
            name: 'WealthBot',
            logo: '/icons/projects/wealthbot.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/wealthbot.svg',
        projectList: ['Adaptive goal-based investing AI', 'Automated portfolio rebalancing', 'Real-time market sentiment analyzer'],
        impact: {
            title: "Scaling Automated Investing",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "WealthBot makes professional-grade investment strategies accessible to everyone through a simple, AI-guided interface.",
            details: [
                { label: "Type", value: "B2C Fintech" },
                { label: "Reach", value: "Global" }
            ]
        },
        techStack: {
            title: "Wealth Stack",
            items: [
                { label: "Mobile", techs: [{ name: "Flutter", icon: "/technologies/flutter.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'genpsych',
        brand: {
            name: 'Genpsych',
            logo: '/icons/projects/genpsych.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/genpsych.svg',
        projectList: ['Partial Hospitalization Program (PHP)', 'Intensive Outpatient Program (IOP)', 'Medication-Assisted Treatment (MAT)'],
        impact: {
            title: "Genpsych",
            images: ["/projectImages/hospital.png", "/projectImages/hospital1.png"]
        },
        summary: {
            description: "GenPsych offers psychiatric evaluations, medication protocols, substance abuse treatment, military programs, group therapy, individual therapy, and family therapy. We operate a Partial Care Program (PCP), Intensive Outpatient Program (IOP) and an Ambulatory (Outpatient) Detox ",
            details: [
                { label: "Industry", value: "HealthCare" },
                { label: "Project Type", value: "Hospital Management System" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "Angular", icon: "/technologies/angular.svg" }] },
                { label: "Backend", techs: [{ name: "Dot Net", icon: "/technologies/net-seeklogo.svg" }] },
                { label: "Database", techs: [{ name: "SQL Server", icon: "/technologies/sql-server.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'monolith',
        brand: {
            name: 'Monolith',
            logo: '/icons/projects/monolith.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/forensics.svg',
        projectList: ['Relay Forensic Request Portal', 'Evidence and Storage Tracking', 'Customizable Reporting & Metrics'],
        impact: {
            title: "Monolith Forensics",
            images: ["/projectImages/forensics.png", "/projectImages/forensics1.png"]
        },
        summary: {
            description: "Forensics case software designed to help clients to manage digital forensics labs, evidence, and casework. The company's platform offers features that include case tracking, evidence & document management, notes & task management, casework metrics management, task list creation, task assigning, inquiries management, clients management, digital storage management, report generation, and more, enabling clients to store and track cases from anywhere.",
            details: [
                { label: "Industry", value: "Forensics" },
                { label: "Project Type", value: "Forensics Software" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }, { name: "ElectronJS", icon: "/technologies/electronjs.svg" }] },
            ]
        }
    },
    {
        type: 'project',
        id: 'popm-global',
        brand: {
            name: 'PopM Global',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Competency Framework', 'Professional Progress Dashboard', 'Specialized Product Case Courses'],
        impact: {
            title: "PopM Global",
            images: ["/projectImages/pop.png", "/projectImages/pop1.png"]
        },
        summary: {
            description: "POPM GLOBAL is a web based educational service provider which delivers functionality just like a physical institution. Most LMSs provide common features like tracking and recording candidate progress and automates the functions of course content availability and student- teacher interactions. POPM GLOBAL level test delivers all the expected features of a Learning Management System. However the features that distinguish POPM GLOBAL from any other LMS are integrated Zoom and live Chatbot so the users can benefit from the services without having to change the platforms frequently.",
            details: [
                { label: "Industry", value: "EdTech" },
                { label: "Project Type", value: "Learning Management System" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React Native", icon: "/technologies/React.svg" }, { name: "Vue Js", icon: "/technologies/vuejs.png" }] },
                { label: "Backend", techs: [{ name: "Express", icon: "/technologies/express_logo.png" }] },
                { label: "Database", techs: [{ name: "MongoDB", icon: "/technologies/mongodb.png" }, { name: "Firebase", icon: "/technologies/firebase.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'payment-processor-limited',
        brand: {
            name: 'Payment Processor Limited',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['End-to-End Automated Payment Engine', 'Hierarchical Finance & Employee Portal', 'Automated Audit & Compliance Dashboard'],
        impact: {
            title: "Payment Processor Limited",
            images: ["/projectImages/payment.png", "/projectImages/payment1.png"]
        },
        summary: {
            description: "Payment Processor is a procurement ERP platform which facilitates B2B with 1link integration in it. Also facilities the People to make end to end payments automatedly without hustling of tracking banking details, record keeping and an employee management portal with features of creating hierarches related to finance management. It’s a solution to clear and corruption free environment to SME’s",
            details: [
                { label: "Industry", value: "FinTech" },
                { label: "Project Type", value: "Procurement ERP Platform" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Express", icon: "/technologies/express_logo.png" }] },
                { label: "Database", techs: [{ name: "SQL Server", icon: "/technologies/sql-server.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'neblo-ai',
        brand: {
            name: 'Neblo AI',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Intelligent Load Discovery Dashboard', 'Autonomous Negotiation & Booking Engine', 'Automated Dispatch & Route Optimizer',],
        impact: {
            title: "Neblo AI",
            images: ["/projectImages/neblo.png", "/projectImages/neblo1.png"]
        },
        summary: {
            description: "Neblo AI is an intelligent freight automation company reimagining the $190B U.S. spot freight market through purpose-built AI. platform leverages advanced reasoning models and custom LLM frameworks to automate how loads are discovered, booked, and dispatched—cutting through operational noise across fragmented broker and carrier networks.",
            details: [
                { label: "Industry", value: "Transportation" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Python", icon: "/technologies/python.svg" }, { name: "Django", icon: "/technologies/django.png" }],  }
            ]
        }
    },
    {
        type: 'project',
        id: 'compliance-vision',
        brand: {
            name: 'Compliance Vision',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Real-Time Computer Vision Monitoring', 'Automated Non-Compliance Alerting', 'Traceable Digital Audit Layer'],
        impact: {
            title: "Compliance Vision",
            images: ["/ai_team_collaboration_impact.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "We developed an advanced AI-powered action detection and compliance monitoring system for a leading food & beverage manufacturing company. The platform uses real-time computer vision to monitor staff activities across the entire production facility, ensuring strict adherence to operational, hygiene, and safety standards.The system analyzes live CCTV feeds to detect predefined staff actions, identify non-compliance events, and generate instant alerts for supervisors. It maintains timestamped audit logs and structured reports, creating a fully traceable digital compliance layer for production operations.",
            details: [
                { label: "Industry", value: "Compliance" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Python", icon: "/technologies/python.svg" }, { name: "Django", icon: "/technologies/django.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'sales-kik',
        brand: {
            name: 'SalesKik',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Autonomous Meeting Intelligence & Documentation', 'Custom AI Knowledge Base & Chatbots', 'Strategic KPI & Performance Tracking',],
        impact: {
            title: "SalesKik",
            images: ["/projectImages/sales.png", "/projectImages/sale1.png"]
        },
        summary: {
            description: "Saleskik is the AI-powered assistant designed to help top-performing orgnisations to reclaim their time, sharpen their focus and thrive without overwhelm, Records meetings, Document Meeting, Define KPIs and build custom chatsbots on each. User can communicate and find exact concerns from each note. ",
            details: [
                { label: "Industry", value: "AI & Automation" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Node.js", icon: "/technologies/nodejs.png" }] },
                { label: "AI/ML", techs: [{ name: "Python", icon: "/technologies/python.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'cypher-bot',
        brand: {
            name: 'Cypher Bot',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Localized High-Security Document Processing', 'Automated Technical Quantification & Summarization', 'Rapid Retrieval & Operational Intelligence'],
        impact: {
            title: "Cypher Bot",
            images: ["/ai_team_collaboration_impact.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "The primary objective is to fine-tune lightweight AI models for efficient document classification, extraction, and analysis while ensuring strict data security protocols.The system automated the quantification summarisation of large volumes of textual data, such as technical manuals, classified reports, and operational guidelines. By implementing resource-efficient AI models and advanced quantization techniques, the project aims to enhance the US Military's document management and retrieval capabilities, ensuring faster decision-making and operational readiness. Focus: Ensuring the model is capable of processing sensitive, large-scale data effectively while being deployed securely in a local environment.",
            details: [
                { label: "Industry", value: "AI & Automation" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Node.js", icon: "/technologies/nodejs.png" }] },
                { label: "AI/ML", techs: [{ name: "Python", icon: "/technologies/python.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'kyc-solutions',
        brand: {
            name: 'KYC Solution',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Forensic Identity Verification Engine', 'Automated KYC Data Extraction', 'Audit-Ready Compliance Vault',],
        impact: {
            title: "KYC Solution",
            images: ["/ai_team_collaboration_impact.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Our solution is a managed, AI-driven system designed to verify the authenticity of official documents — including government IDs, licenses, and certificates — while automatically extracting structured data for KYC and compliance workflows. It combines: Forensic-level image analysis to detect tampering, synthetic documents, deepfake-generated IDs, and template manipulation AI-based pattern recognition trained on real-world document variations across regions Cross-verification capabilities with trusted databases (where applicable) Automated data extraction (OCR + ML models) to convert unstructured document data into clean, structured records Audit-ready logging & traceability to support regulatory and compliance reviews",
            details: [
                { label: "Industry", value: "Compliance" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Node.js", icon: "/technologies/nodejs.png" }, { name: "Python", icon: "/technologies/python.svg" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'zilouet',
        brand: {
            name: 'Zilouet',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['AI-Driven Physical Attribute Analysis', 'Holistic Style & Personality Engine', 'Scalable Retail Intelligence API'],
        impact: {
            title: "Zilouet",
            images: ["/projectImages/zilouet.png", "/projectImages/zilouet1.png"]
        },
        summary: {
            description: "An advanced AI-powered fashion personalization platform designed to transform how customers discover and purchase fashion products. This solution uses computer vision and deep learning models to analyze facial features, skin tone, body structure, and personality attributes to generate highly accurate style recommendations. The system automatically classifies face shapes to recommend accessories such as glasses and facial wear, extracts skin tone to suggest complementary clothing colors, and analyzes body shapes (such as apple, pear, and other body types) to recommend the most flattering apparel styles. Additionally, it integrates personality-based styling insights and aesthetic balance concepts to provide a more holistic fashion recommendation experience.This solution is ideal for fashion brands and e-commerce platforms looking to increase customer engagement, reduce product return rates, and deliver personalized shopping experiences at scale through AI-driven intelligence. It can be deployed as a SaaS platform, API service, or integrated directly into existing digital retail systems.",
            details: [
                { label: "Industry", value: "Retail" },
                { label: "Project Type", value: "Complete End to End development " },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
            ]
        }
    },
    {
        type: 'project',
        id: 'pinoyaya',
        brand: {
            name: 'Pinoyaya',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Verified Caregiver Marketplace', 'On-Demand Booking & Scheduling', 'Secure In-App Payment & Messaging'],
        impact: {
            title: "Pinoyaya",
            images: ["/projectImages/pinoyaya.png", "/projectImages/pinoyaya1.png"]
        },
        summary: {
            description: "Pinoyaya is babysitting platform. It is a platform that connects parents with babysitters who are vetted and trained to provide quality care for children. The platform is designed to provide a safe, reliable, and convenient way for parents to find and book babysitters for their children.",
            details: [
                { label: "Industry", value: "Healthcare" },
                { label: "Project Type", value: "Complete End to End development" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React Native", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Express.js", icon: "/technologies/express_logo.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] }
            ]
        }
    },
    {
        type: 'project',
        id: 'paint-visualizer',
        brand: {
            name: 'Paint Visualizer',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['Real-Time Interactive Wall Visualizer    ', 'Intelligent Object Color Detection', 'High-Fidelity Rendering Engine',],
        impact: {
            title: "Paint Visualizer",
            images: ["/projectImages/paint.png", "/projectImages/paint1.png"]
        },
        summary: {
        description: "An interactive Wall Paint Visualizer and Object Color Detection app that enables users to upload images and experiment with different wall colors in real time. The system maintains natural shading and lighting effects to produce realistic results, making it easier to test color combinations before painting.",
            details: [
                { label: "Industry", value: "Retail" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/React.svg" }] },
                { label: "Backend", techs: [{ name: "Python", icon: "/technologies/python.svg" }] },
            ]
        }
    },
    {
        type: 'project',
        id: 'facia',
        brand: {
            name: 'Facia',
            logo: '/icons/projects/popm_global.svg',
            description: 'Personalized rob-advisory platform for retail investors, focused on long-term wealth building.',
        },
        brandVisualImg: '/icons/projects/popm_global.svg',
        projectList: ['High-Accuracy Facial Recognition & Matching', 'Anti-Spoofing & Liveness Detection', 'Multi-Modal Biometric Authentication',],
        impact: {
            title: "Facia",
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Facial recognition, liveness detection and biometrice solution.",
            details: [
                { label: "Industry", value: "AI & Automation" },
                { label: "Project Type", value: "Product Building" },
                { label: "Service", value: "Custom Software Development" }
            ]
        },
        techStack: {
            title: "Built with",
            items: [
                { label: "Frontend", techs: [{ name: "Vue.js", icon: "/technologies/vuejs.png" }] },
            ]
        }
    }
];
