
export interface ProjectData {
    id: string;
    brand: {
        name: string;
        logo: string;
        description: string;
        actionLabel: string;
        actionUrl: string;
    };
    highlight: string;
    visualImg: string;
    projectList?: string[];
    brandVisualImg: string;
    tabs: { id: string; label: string; isActive?: boolean }[];
    // Details for the detail page
    impact: {
        title: string;
        stats: { id: number; value: string; label: string; iconType: 'clock' | 'zap' }[];
        images: string[];
    };
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
        id: 'project-industry-0',
        brand: {
            name: 'Automotive',
            logo: '/icons/industries/automotive-link.svg',
            description: 'End-to-end orchestration for OEMs and dealers. Modular and scalable to unify showroom and online journeys into one seamless retail experience.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-0',
        },
        highlight: 'Auto retail redefined. Personalized paths, connected touchpoints and AI-driven precision.',
        visualImg: '',
        projectList: ['EV Fleet Orchestration', 'AI Showroom Assistant', 'Dealer 2.0 Portal'],
        brandVisualImg: '/icons/industries/automotive-link.svg',
        tabs: [
            { id: 'tab-0-0', label: 'Dealer groups' },
            { id: 'tab-0-1', label: 'OEMs', isActive: true },
            { id: 'tab-0-2', label: 'Independent dealers' }
        ],
        impact: {
            title: "Revolutionizing Automotive Sales with AI Orchestration",
            stats: [
                { id: 1, value: "40%", label: "increase in lead conversion through AI showroom assistants", iconType: 'zap' },
                { id: 2, value: "30%", label: "reduction in fleet management overhead", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
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
        id: 'project-industry-1',
        brand: {
            name: 'Finance',
            logo: '/icons/industries/finance-link.svg',
            description: 'Revolutionizing the banking sector with secure, AI-powered financial tools. We help institutions adapt to the digital-first economy with high-performance assets.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-1',
        },
        highlight: 'Fintech evolution. Real-time transaction monitoring, secure digital wallets and automated wealth management.',
        visualImg: '',
        projectList: ['NeoBank Core Engine', 'Secure Wallet SDK', 'AI Wealth Advisor'],
        brandVisualImg: '/icons/industries/finance-link.svg',
        tabs: [
            { id: 'tab-1-0', label: 'Banking' },
            { id: 'tab-1-1', label: 'Insurance', isActive: true },
            { id: 'tab-1-2', label: 'Investments' }
        ],
        impact: {
            title: "Securing the Future of Digital Finance",
            stats: [
                { id: 1, value: "99.9%", label: "uptime for NeoBank core engine transactions", iconType: 'zap' },
                { id: 2, value: "60%", label: "faster wealth management assessment", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
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
        id: 'project-industry-2',
        brand: {
            name: 'Healthcare',
            logo: '/icons/industries/healthcare-link.svg',
            description: 'Advanced digital health platforms connecting patients and providers. Our solutions prioritize data security and seamless integration across healthcare ecosystems.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-2',
        },
        highlight: 'HealthTech innovation. Remote patient monitoring, encrypted health records and AI diagnostics.',
        visualImg: '',
        projectList: ['Patient Connect App', 'Smart EHR Sync', 'Remote Vitals Engine'],
        brandVisualImg: '/icons/industries/healthcare-link.svg',
        tabs: [
            { id: 'tab-2-0', label: 'Hospitals' },
            { id: 'tab-2-1', label: 'Clinics', isActive: true },
            { id: 'tab-2-2', label: 'Telemedicine' }
        ],
        impact: {
            title: "Scaling Patient Care with Remote Monitoring",
            stats: [
                { id: 1, value: "50%", label: "faster emergency response through remote vitals", iconType: 'zap' },
                { id: 2, value: "25%", label: "reduction in administrative paperwork", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
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
    {
        id: 'project-industry-3',
        brand: {
            name: 'Education',
            logo: '/icons/industries/education-link.svg',
            description: 'Empowering the next generation with interactive e-learning platforms. We build scalable educational tools that deliver personalized learning experiences.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-3',
        },
        highlight: 'EdTech transformation. Interactive curriculums, student tracking and gamified learning pathways.',
        visualImg: '',
        projectList: ['LMS Core Platform', 'Gamified Student Portal', 'SkillEdge Training'],
        brandVisualImg: '/icons/industries/education-link.svg',
        tabs: [
            { id: 'tab-3-0', label: 'K-12' },
            { id: 'tab-3-1', label: 'Higher Ed', isActive: true },
            { id: 'tab-3-2', label: 'Corporate Training' }
        ],
        impact: {
            title: "Gamifying Education for Better Retention",
            stats: [
                { id: 1, value: "3x", label: "higher student engagement rates", iconType: 'zap' },
                { id: 2, value: "45%", label: "faster curriculum deployment", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Building an LMS that adapts to individual learning styles, providing a personalized education experience at scale.",
            details: [
                { label: "Industry", value: "Education" },
                { label: "Project Type", value: "LMS & Gamified Learning" },
                { label: "Service", value: "EdTech Development" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "Video", techs: [{ name: "Node.js", icon: "/technologies/nodejs.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Cloud", techs: [{ name: "GCP", icon: "/technologies/gcp.png" }] },
                { label: "Frontend", techs: [{ name: "Vue.js", icon: "/technologies/vuejs.png" }] }
            ]
        }
    },
    {
        id: 'project-industry-4',
        brand: {
            name: 'Construction',
            logo: '/icons/industries/construction-link.svg',
            description: 'Digital project management and BIM integration for large-scale construction. Streamline site operations and resource allocation with real-time data visualizers.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-4',
        },
        highlight: 'Build smart. Automated resource management, 3D site monitoring and safety compliance tracking.',
        visualImg: '',
        projectList: ['BIM Sync Dashboard', 'Smart Site Tracker', 'Asset Flow Control'],
        brandVisualImg: '/icons/industries/construction-link.svg',
        tabs: [
            { id: 'tab-4-0', label: 'Architecture' },
            { id: 'tab-4-1', label: 'Engineering', isActive: true },
            { id: 'tab-4-2', label: 'Site Tech' }
        ],
        impact: {
            title: "Optimizing Construction Workflows with BIM",
            stats: [
                { id: 1, value: "20%", label: "savings on material resource allocation", iconType: 'zap' },
                { id: 2, value: "15%", label: "reduction in project timelines", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Integrating real-time sensor data with 3D models to provide construction managers with unprecedented visibility into site operations.",
            details: [
                { label: "Industry", value: "Construction" },
                { label: "Project Type", value: "Digital Twin & Site Management" },
                { label: "Service", value: "ConTech Solutions" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "IoT", techs: [{ name: "AWS IoT", icon: "/technologies/aws.png" }] },
                { label: "Database", techs: [{ name: "PostgreSQL", icon: "/technologies/postgresql.png" }] },
                { label: "Infrastructure", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] },
                { label: "Backend", techs: [{ name: "NestJS", icon: "/technologies/nestjs.png" }] }
            ]
        }
    },
    {
        id: 'project-industry-5',
        brand: {
            name: 'Energy',
            logo: '/icons/industries/energy-link.svg',
            description: 'Optimizing resource distribution with smart grid technology. Our energy solutions handle massive data streams to provide predictive maintenance and efficiency.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-5',
        },
        highlight: 'Sustainable power. Real-time grid monitoring, renewable integration and load optimization.',
        visualImg: '',
        projectList: ['Grid Optix AI', 'Solar Flow Connect', 'MeterLink Engine'],
        brandVisualImg: '/icons/industries/energy-link.svg',
        tabs: [
            { id: 'tab-5-0', label: 'Renewables' },
            { id: 'tab-5-1', label: 'Power Grids', isActive: true },
            { id: 'tab-5-2', label: 'Smart Metering' }
        ],
        impact: {
            title: "Intelligent Power Distribution for Smart Cities",
            stats: [
                { id: 1, value: "10x", label: "data processing speed for smart meters", iconType: 'zap' },
                { id: 2, value: "35%", label: "improvement in predictive maintenance accuracy", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Deploying AI-driven analytics to manage renewable energy integration and optimize grid stability across multi-regional distribution networks.",
            details: [
                { label: "Industry", value: "Energy" },
                { label: "Project Type", value: "Smart Grid Analytics" },
                { label: "Service", value: "EnergyTech Engineering" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "AI/ML", techs: [{ name: "PyTorch", icon: "/technologies/pytorch.png" }, { name: "TensorFlow", icon: "/technologies/tensorflow.png" }] },
                { label: "Cloud", techs: [{ name: "Azure", icon: "/technologies/azure.png" }] },
                { label: "Big Data", techs: [{ name: "Firebase", icon: "/technologies/firebase.png" }] }
            ]
        }
    },
    {
        id: 'project-industry-6',
        brand: {
            name: 'Compliance',
            logo: '/icons/industries/compliance-link.svg',
            description: 'Automated regulatory reporting and risk management. We provide the tools to ensure global compliance across multiple jurisdictions with immutable auditing.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-6',
        },
        highlight: 'Absolute integrity. Automated audit trails, risk assessment and global regulatory sync.',
        visualImg: '',
        projectList: ['ReguCheck Audit Tool', 'Risk Guard Dashboard', 'LexSync Engine'],
        brandVisualImg: '/icons/industries/compliance-link.svg',
        tabs: [
            { id: 'tab-6-0', label: 'Legal' },
            { id: 'tab-6-1', label: 'Audit', isActive: true },
            { id: 'tab-6-2', label: 'Governance' }
        ],
        impact: {
            title: "Automating Compliance for Global Regulatory Sync",
            stats: [
                { id: 1, value: "100%", label: "audit trail immutability with blockchain integration", iconType: 'zap' },
                { id: 2, value: "80%", label: "reduction in manual reporting time", iconType: 'clock' }
            ],
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
    {
        id: 'project-industry-7',
        brand: {
            name: 'Startups',
            logo: '/icons/industries/startup-link.svg',
            description: 'Accelerating early-stage growth with agile software development. From MVP to scaling, we provide the technical foundation for the unicorns of tomorrow.',
            actionLabel: 'View Case Study',
            actionUrl: '/projects/project-industry-7',
        },
        highlight: 'Scale fast. Rapid prototype development, cloud infrastructure and growth-centric software.',
        visualImg: '',
        projectList: ['MVP Build Engine', 'Cloud Scale Framework', 'Growth Hub Dashboard'],
        brandVisualImg: '/icons/industries/startup-link.svg',
        tabs: [
            { id: 'tab-7-0', label: 'Ideation' },
            { id: 'tab-7-1', label: 'MVP Development', isActive: true },
            { id: 'tab-7-2', label: 'Series A+ Scaling' }
        ],
        impact: {
            title: "From MVP to Series A in Record Time",
            stats: [
                { id: 1, value: "2x", label: "faster time-to-market compared to industry average", iconType: 'zap' },
                { id: 2, value: "50%", label: "lower initial infrastructure costs", iconType: 'clock' }
            ],
            images: ["/ai_workflow_slack_showcase.png", "/ai_team_collaboration_impact.png"]
        },
        summary: {
            description: "Partnering with founders to build scalable MVPs that not only prove product-market fit but are architecture-ready for rapid scaling.",
            details: [
                { label: "Industry", value: "Multi-domain" },
                { label: "Project Type", value: "Venture Building & MVPs" },
                { label: "Service", value: "Strategic Development" }
            ]
        },
        techStack: {
            title: "Tools and technologies",
            items: [
                { label: "PaaS", techs: [{ name: "AWS", icon: "/technologies/aws.png" }] },
                { label: "Database", techs: [{ name: "Supabase", icon: "/technologies/postgresql.png" }] },
                { label: "Frontend", techs: [{ name: "React", icon: "/technologies/html.png" }] },
                { label: "Backend", techs: [{ name: "Laravel", icon: "/technologies/laravel.png" }] }
            ]
        }
    }
];
