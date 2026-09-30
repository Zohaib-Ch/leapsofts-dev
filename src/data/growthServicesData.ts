export interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GrowthServicePillar {
  slug: string;
  title: string;
  subtitle: string;
  badgeText: string;
  heroDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
  metrics: MetricItem[];
  positioning: string;
  subServices: SubService[];
  comparison: {
    title: string;
    subtitle: string;
    traditional: string[];
    leapsoftsPod: string[];
  };
  faqs: FAQItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const GROWTH_SERVICES_DATA: Record<string, GrowthServicePillar> = {
  'sales-execution-ae': {
    slug: 'sales-execution-ae',
    title: 'Full-Cycle Sales Execution & AE Services',
    subtitle: 'End-to-End Sales Pods Driving Closed-Won Enterprise Contracts',
    badgeText: 'Pillar 1 • Sales Execution',
    heroDescription: 'Scale your revenue velocity without the high overhead, long ramp times, or management burden of in-house Account Executives. Our on-demand sales pods handle your complete deal lifecycle from first discovery to signed contract.',
    primaryCTA: 'Book Pipeline Discovery Call',
    secondaryCTA: 'Explore AE Pod Model',
    positioning: 'End-to-end sales handling from first touch to signed contract.',
    metrics: [
      { value: '3.8x', label: 'Pipeline Velocity', description: 'Faster deal conversion through structured BANT/MEDDPICC qualification' },
      { value: '< 5 min', label: 'Inbound Response SLA', description: 'Immediate qualification and routing of high-intent prospects' },
      { value: '42%', label: 'Win Rate Increase', description: 'Higher close rates with seasoned enterprise presentation pods' },
      { value: '0 Days', label: 'Ramp Time', description: 'Plug-and-play sales execution squads ready from day one' }
    ],
    subServices: [
      {
        id: 'inbound-handling',
        title: 'Inbound Call & Lead Handling',
        subtitle: 'Sub-5-minute SLA qualification & instant meeting routing',
        description: 'Never let a warm lead go cold. Our dedicated sales reps respond to inbound web inquiries, chat leads, and demo requests immediately, executing strict qualification criteria to route high-value opportunities to live calendar slots.',
        iconName: 'PhoneCall',
        highlights: ['< 5-minute initial response SLA', 'MEDDPICC & BANT qualification', 'Instant CRM routing & calendar sync'],
        deliverables: ['Real-time lead scoring & triage', 'Custom discovery scripts', 'Call recording & sentiment analytics']
      },
      {
        id: 'demos-pitches',
        title: 'Product Demos & Pitch Meetings',
        subtitle: 'High-impact technical discovery and live solution presentations',
        description: 'Our Account Executives conduct engaging, persona-tailored product demonstrations that highlight business value, address technical requirements, and position your offering as the clear market choice.',
        iconName: 'Presentation',
        highlights: ['Technical product mastery', 'Custom pitch deck customization', 'Stakeholder alignment & buy-in'],
        deliverables: ['Tailored live demo environments', 'Executive summary follow-ups', 'Recorded demo recordings']
      },
      {
        id: 'pipeline-management',
        title: 'Pipeline Management & Follow-ups',
        subtitle: 'Structured multi-touch cadences to keep deals warm',
        description: 'Prevent deal drop-offs with systematic multi-touch follow-up workflows. We maintain strict CRM hygiene, run deal reviews, and keep technical and economic buyers aligned throughout extended sales cycles.',
        iconName: 'Workflow',
        highlights: ['Multi-channel follow-up sequences', 'Strict CRM deal stage hygiene', 'Re-engagement campaigns for stale deals'],
        deliverables: ['Pipeline velocity dashboards', 'Weekly deal risk reports', 'Automated touchpoint logging']
      },
      {
        id: 'negotiation-closing',
        title: 'Negotiation & Deal Closing',
        subtitle: 'Objection handling, legal alignment, and contract execution',
        description: 'Cross the finish line with confidence. Our senior closing reps handle contract redlines, procurement requirements, pricing objections, and final signature collection to lock in revenue.',
        iconName: 'FileCheck2',
        highlights: ['Procurement & legal redline guidance', 'Objection handling frameworks', 'Value-based price negotiations'],
        deliverables: ['Signed Master Service Agreements (MSAs)', 'Smooth customer handoff briefs', 'Win-loss analysis reports']
      }
    ],
    comparison: {
      title: 'In-House AE Team vs. Leapsofts On-Demand AE Squads',
      subtitle: 'Why high-growth tech companies scale faster with managed sales execution',
      traditional: [
        '$180,000+ average base + OTE cost per AE',
        '4-6 months ramp time before first closed deal',
        'High turnover risk & continuous recruitment cost',
        'Management overhead & CRM tracking headaches'
      ],
      leapsoftsPod: [
        'Predictable, transparent pod subscription pricing',
        'Immediate execution with battle-tested AE pods',
        'Built-in redundancy with zero turnover downtime',
        'Complete CRM integration & real-time analytics'
      ]
    },
    faqs: [
      {
        question: 'How quickly can your AE sales pod start representing our product?',
        answer: 'Our pods complete intensive product onboarding, technical positioning, and script calibration within 10 to 14 business days, allowing us to start taking discovery calls immediately.'
      },
      {
        question: 'Will the AE reps feel like internal members of our company?',
        answer: 'Yes. Our team operates using your domain email, CRM seats, Slack workspace, and branded collateral so prospects experience a seamless, authentic internal team experience.'
      },
      {
        question: 'What CRM platforms do you support for full-cycle sales execution?',
        answer: 'We seamlessly integrate with HubSpot, Salesforce, Pipedrive, Close, and Zoho, enforcing strict pipeline stage hygiene and transparent activity logging.'
      }
    ],
    seo: {
      title: 'Full-Cycle Sales Execution & AE Services | Leapsofts',
      description: 'Accelerate revenue with on-demand Account Executive pods. We handle discovery calls, demos, pipeline follow-ups, and enterprise contract closing.',
      keywords: ['sales execution services', 'outsourced AE team', 'account executive pod', 'inbound lead handling', 'b2b sales closing']
    }
  },

  'outbound-demand-gen': {
    slug: 'outbound-demand-gen',
    title: 'Outbound Sales & Demand Generation',
    subtitle: 'Proactive Cold Outreach Strategies Building Predictable Pipeline',
    badgeText: 'Pillar 2 • Demand Generation',
    heroDescription: 'Stop waiting for inbound leads. Fill your sales calendar with verified enterprise decision-makers using data-driven, multi-channel cold outreach sequences that deliver pre-qualified meetings directly to your team.',
    primaryCTA: 'Launch Outbound Campaign',
    secondaryCTA: 'View Sample Outreach Cadences',
    positioning: 'Proactive cold outreach strategies to build predictable pipeline.',
    metrics: [
      { value: '15-25', label: 'Pre-Qualified Meetings / Mo', description: 'Average monthly booked sales meetings per outreach squad' },
      { value: '98.5%', label: 'Data Verification', description: 'Clean B2B contact info ensuring maximum domain deliverability' },
      { value: '4.2x', label: 'ROI on Outbound Spend', description: 'Average pipeline revenue generated vs. campaign investment' },
      { value: 'Multi-Touch', label: 'Omnichannel Outreach', description: 'Synchronized cold email, LinkedIn, and phone touchpoints' }
    ],
    subServices: [
      {
        id: 'prospecting-leads',
        title: 'Targeted Prospecting & Lead Generation',
        subtitle: 'ICP identification, list building, and real-time data verification',
        description: 'We define your Ideal Customer Profile (ICP), map target buying committees, and leverage premium intelligence databases to curate hyper-accurate prospect lists with verified mobile numbers and work emails.',
        iconName: 'UserCheck',
        highlights: ['Strict ICP & persona mapping', 'Real-time email & phone verification', 'Intent signal scraping & trigger events'],
        deliverables: ['Custom B2B lead databases', 'Account mapping matrices', 'Contact enrichment records']
      },
      {
        id: 'cold-outreach',
        title: 'Multi-Channel Cold Outreach',
        subtitle: 'Cold calling, cold email sequencing, and LinkedIn engagement',
        description: 'Cut through inbox noise with tailored messaging sequences across email, phone, and LinkedIn. Our multi-touch cadences combine value-driven insights with persistent follow-ups.',
        iconName: 'MailSend',
        highlights: ['A/B tested email copywriting', 'Cold calling phone pods', 'LinkedIn InMail & connection strategies'],
        deliverables: ['Custom messaging copy decks', 'Domain warmup & deliverability monitoring', 'Sequence performance analytics']
      },
      {
        id: 'abm-campaigns',
        title: 'Account-Based Marketing (ABM)',
        subtitle: 'Hyper-personalized outreach targeting high-value enterprise accounts',
        description: 'Land major enterprise accounts with bespoke 1-to-1 ABM campaigns. We craft individualized value propositions, custom landing pages, and multi-threaded executive outreach for high-value targets.',
        iconName: 'Building',
        highlights: ['Tier-1 account research', 'Multi-threaded stakeholder mapping', 'Bespoke account sales collateral'],
        deliverables: ['ABM account playbooks', 'Personalized asset pages', 'Executive briefing decks']
      },
      {
        id: 'appointment-setting',
        title: 'Appointment Setting',
        subtitle: 'Pre-qualified, sales-ready meetings delivered straight to your calendar',
        description: 'Our SDR squads qualify incoming prospect responses against your strict qualification criteria (budget, authority, need, timeline) before locking in calendar appointments for your sales team.',
        iconName: 'CalendarCheck',
        highlights: ['Strict qualification gating', 'Calendar booking automation', 'Pre-meeting prospect briefs'],
        deliverables: ['Direct calendar invitations', 'Call background briefs', 'No-show re-booking workflows']
      }
    ],
    comparison: {
      title: 'In-House SDR Team vs. Leapsofts Demand Gen Engine',
      subtitle: 'Achieve 3x higher outreach volume at half the customer acquisition cost',
      traditional: [
        'High SDR salary, software tool stack ($1k+/mo per seat), & management cost',
        'Complex email deliverability setups & domain burning risks',
        'Inconsistent activity metrics & slow list sourcing',
        'High turnover requiring continuous re-training'
      ],
      leapsoftsPod: [
        'Turnkey infrastructure with domain warmup & inbox rotation included',
        'Multi-channel outreach across email, phone, and LinkedIn',
        'Guaranteed weekly pre-qualified appointment volume',
        'Continuous copywriting A/B testing & deliverability health checks'
      ]
    },
    faqs: [
      {
        question: 'How do you protect our main corporate email domain during cold email outreach?',
        answer: 'We set up secondary outreach domains with full SPF, DKIM, DMARC, and custom tracking records, warming them up for 14-21 days prior to campaign launch to isolate your primary domain.'
      },
      {
        question: 'What defines a "pre-qualified" meeting?',
        answer: 'We align with your exact criteria—verifying title, company size, geography, current tech stack, and explicit confirmation of project timeline or need before booking.'
      },
      {
        question: 'Can you work alongside our existing internal sales team?',
        answer: 'Yes! We frequently act as an extended demand generation engine, delivering booked meetings directly into your Account Executives calendars.'
      }
    ],
    seo: {
      title: 'Outbound Sales & Demand Generation | Leapsofts',
      description: 'Fill your sales pipeline with targeted B2B lead generation, multi-channel cold outreach, ABM campaigns, and pre-qualified appointment setting.',
      keywords: ['outbound demand generation', 'b2b appointment setting', 'cold outreach agency', 'account based marketing abm', 'lead generation pod']
    }
  },

  'paid-media-performance': {
    slug: 'paid-media-performance',
    title: 'Paid Media & Performance Marketing',
    subtitle: 'Data-Driven Paid Advertising Capturing Demand & Scaling Traffic',
    badgeText: 'Pillar 3 • Performance Marketing',
    heroDescription: 'Transform ad spend into scalable revenue. We architect high-converting paid social and search campaigns across LinkedIn, Meta, and Google to capture immediate demand and convert visitors into pipeline.',
    primaryCTA: 'Request Paid Media Audit',
    secondaryCTA: 'View Campaign Case Studies',
    positioning: 'Data-driven paid advertising to capture immediate demand and scale traffic.',
    metrics: [
      { value: '3.4x', label: 'Average ROAS', description: 'Return on ad spend across enterprise tech campaigns' },
      { value: '-38%', label: 'Lower CAC', description: 'Reduced customer acquisition cost through creative A/B testing' },
      { value: '100%', label: 'Conversion Tracking', description: 'Full server-side API & CAPI event tracking setup' },
      { value: 'Multi-Platform', label: 'Campaign Scaling', description: 'LinkedIn, Google Ads, Meta, and Retargeting stack' }
    ],
    subServices: [
      {
        id: 'paid-social',
        title: 'Paid Social Advertising',
        subtitle: 'Precision targeting on LinkedIn, Facebook, and Instagram',
        description: 'Reach high-value B2B decision-makers on LinkedIn and Meta. We build laser-targeted custom audiences based on job titles, seniority, company size, tech stack, and intent data.',
        iconName: 'Share2',
        highlights: ['LinkedIn Sponsored Content & InMail', 'Meta Custom & Lookalike Audiences', 'Granular demographic & company targeting'],
        deliverables: ['Campaign structure blueprint', 'Audience persona matrix', 'Monthly ad performance reports']
      },
      {
        id: 'ad-creative-copy',
        title: 'Ad Creative & Copywriting',
        subtitle: 'High-converting graphics, short-form video assets, and ad copy',
        description: 'Stop the scroll with eye-catching visual design and compelling copy. Our creative team produces static graphics, motion graphics, video hooks, and direct-response copy built for conversion.',
        iconName: 'PencilRuler',
        highlights: ['Direct-response ad copywriting', 'Motion graphics & video hooks', 'Brand-aligned visual assets'],
        deliverables: ['Ad creative variations deck', 'A/B ad copy options', 'Video ad renders (16:9, 9:16, 1:1)']
      },
      {
        id: 'campaign-optimization',
        title: 'Campaign Optimization & Scaling',
        subtitle: 'Continuous A/B testing, audience tuning, and ROAS management',
        description: 'Paid media is not set-and-forget. We monitor campaign performance daily, optimizing bids, reallocating budgets to winning creatives, and pruning low-performing targeting segments.',
        iconName: 'LineChart',
        highlights: ['Daily bid & budget optimization', 'Multivariate creative testing', 'ROAS & CPA threshold management'],
        deliverables: ['Live performance dashboard', 'Weekly optimization logs', 'Conversion attribution reports']
      },
      {
        id: 'retargeting-sequences',
        title: 'Retargeting Sequences',
        subtitle: 'Multi-platform retargeting capturing drop-off visitors',
        description: 'Re-engage 95%+ of site visitors who leave without converting. We deploy multi-stage retargeting campaigns with testimonial proof, case studies, and special offers to drive bottom-of-funnel conversions.',
        iconName: 'RotateCcw',
        highlights: ['Multi-touch retargeting sequences', 'Dynamic product retargeting', 'Sequential storytelling ad flows'],
        deliverables: ['Retargeting funnel diagram', 'Custom pixel & CAPI setups', 'Drop-off recovery analytics']
      }
    ],
    comparison: {
      title: 'Traditional Ad Agencies vs. Leapsofts Performance Pods',
      subtitle: 'Data-driven growth engineering focused on pipeline revenue, not vanity metrics',
      traditional: [
        'Focus on vanity metrics (clicks, impressions) instead of qualified pipeline',
        'Slow creative iteration cycles taking weeks for new ad variations',
        'Opaque reporting with hidden markups on ad spend',
        'Generic templates applied across vastly different industries'
      ],
      leapsoftsPod: [
        'Direct alignment with pipeline revenue, CAC, and ROAS targets',
        'Rapid creative production engine deploying fresh ad variations weekly',
        '100% transparent reporting directly inside your ad manager accounts',
        'B2B tech-specific positioning tailored to complex buyer journeys'
      ]
    },
    faqs: [
      {
        question: 'Which paid advertising channel is best for B2B tech companies?',
        answer: 'LinkedIn Ads is typically best for precise job-title targeting, while Google Search captures active buying intent, and Meta/Retargeting nurtures prospects cost-effectively. We recommend a balanced multi-channel approach.'
      },
      {
        question: 'What is the minimum recommended monthly ad budget?',
        answer: 'We recommend a minimum monthly ad spend of $3,000 to $5,000 to collect statistically significant conversion data quickly and scale winning ad variations.'
      },
      {
        question: 'Do you set up server-side conversion tracking?',
        answer: 'Yes! We configure Meta Conversions API (CAPI), LinkedIn Offline Conversion API, and Google Enhanced Conversions to ensure 100% data accuracy despite browser privacy restrictions.'
      }
    ],
    seo: {
      title: 'Paid Media & Performance Marketing | Leapsofts',
      description: 'Scale traffic and revenue with data-driven paid advertising. Expert LinkedIn ads, Google Search, Meta campaigns, and high-ROAS retargeting.',
      keywords: ['b2b paid media agency', 'linkedin ads management', 'performance marketing pod', 'b2b ad copywriting', 'roas optimization']
    }
  },

  'inbound-organic-growth': {
    slug: 'inbound-organic-growth',
    title: 'Inbound Marketing & Organic Growth',
    subtitle: 'Building Long-Term Brand Authority & Organic Inbound Pipeline',
    badgeText: 'Pillar 4 • Organic Growth',
    heroDescription: 'Turn your website into an organic lead machine. Through technical SEO, thought leadership content, and compelling visual design, we build sustainable search rankings that drive high-intent traffic month after month.',
    primaryCTA: 'Get Free SEO & Content Audit',
    secondaryCTA: 'Explore Organic Growth Playbook',
    positioning: 'Building long-term brand authority and organic pipeline.',
    metrics: [
      { value: '240%', label: 'Organic Traffic Growth', description: 'Average YoY organic search traffic increase across client sites' },
      { value: 'Top 3', label: 'Search Rankings', description: 'High-intent commercial keywords positioned on Page 1' },
      { value: '5.2x', label: 'Inbound Lead Increase', description: 'More organic demo and contact inquiries generated' },
      { value: 'Long-Term', label: 'Compounding ROI', description: 'Sustainable pipeline that grows without continuous ad spend' }
    ],
    subServices: [
      {
        id: 'seo-technical',
        title: 'Search Engine Optimization (SEO)',
        subtitle: 'On-page, technical, and off-page SEO driving high-intent traffic',
        description: 'Dominate search results for high-intent keywords. We fix technical crawl errors, optimize core web vitals, implement rich JSON-LD schema, and execute targeted link-building campaigns.',
        iconName: 'Search',
        highlights: ['Technical SEO & Core Web Vitals audit', 'Keyword research & search intent mapping', 'Schema markup & structured data'],
        deliverables: ['Comprehensive SEO health audit', 'Keyword ranking dashboards', 'Technical remediation backlog']
      },
      {
        id: 'content-strategy',
        title: 'Content Strategy & Production',
        subtitle: 'Thought leadership, blog posts, case studies, and whitepapers',
        description: 'Establish undisputed market authority with deep, technically accurate content. Our team writes engineering articles, product comparison guides, case studies, and lead magnets.',
        iconName: 'FileText',
        highlights: ['Technical B2B copywriting', 'Editorial calendar management', 'Gated content & lead magnets'],
        deliverables: ['Monthly article releases', 'Downloadable whitepapers', 'Interactive case study assets']
      },
      {
        id: 'social-media',
        title: 'Social Media Management',
        subtitle: 'Organic channel management, community engagement, and brand building',
        description: 'Build an active, engaged community on LinkedIn and Twitter/X. We craft executive thought leadership posts, company updates, and visual carousels that build trust with buyers.',
        iconName: 'Users',
        highlights: ['Executive ghostwriting on LinkedIn', 'Company page community management', 'Visual carousel design'],
        deliverables: ['Weekly social content calendars', 'Engagement analytics reports', 'Brand voice guidelines']
      },
      {
        id: 'visual-design',
        title: 'Visual & Creative Design',
        subtitle: 'Custom graphics, brand assets, sales collateral, and marketing visuals',
        description: 'Elevate your visual impression across all touchpoints. We produce custom illustrations, infographic data visualizations, pitch deck graphics, and marketing assets.',
        iconName: 'Palette',
        highlights: ['Custom SVG & vector graphics', 'Infographics & data visualization', 'Sales collateral & pitch decks'],
        deliverables: ['Figma design asset libraries', 'Social banner packs', 'PDF brochure templates']
      }
    ],
    comparison: {
      title: 'Ad-Hoc Content Writing vs. Leapsofts Inbound Growth Flywheel',
      subtitle: 'Build an organic content engine that compounds in value over time',
      traditional: [
        'Generic, superficial blog posts written without technical depth',
        'Zero alignment between content production and SEO search intent',
        'Lack of conversion pathways to capture inbound readers',
        'Inconsistent publishing schedules resulting in stagnant traffic'
      ],
      leapsoftsPod: [
        'Deep technical writing tailored for complex B2B buyer audiences',
        'Data-backed SEO keyword targeting for high-converting commercial intent',
        'Built-in lead magnets, CTAs, and JSON-LD schema markup',
        'Consistent, high-quality content engine compounding monthly'
      ]
    },
    faqs: [
      {
        question: 'How long does it take to see organic SEO results?',
        answer: 'While technical SEO quick wins can improve rankings in 30-45 days, significant organic growth and pipeline compounding typically occur within 3 to 6 months.'
      },
      {
        question: 'Who writes your technical blog content?',
        answer: 'Our content is written by specialized tech writers and subject matter experts who understand software engineering, cloud architecture, and modern growth strategies.'
      },
      {
        question: 'Do you handle technical SEO fixes directly in our codebase?',
        answer: 'Yes! Our engineering team can deploy code-level fixes for Meta tags, canonical URLs, sitemaps, open graph tags, and performance optimizations directly in React/Next.js/Sanity.'
      }
    ],
    seo: {
      title: 'Inbound Marketing & Organic Growth | Leapsofts',
      description: 'Build organic search authority and inbound pipeline with technical SEO, expert content strategy, thought leadership, and brand design.',
      keywords: ['b2b inbound marketing', 'technical seo agency', 'b2b content strategy', 'thought leadership ghostwriting', 'organic growth pod']
    }
  },

  'revenue-operations-systems': {
    slug: 'revenue-operations-systems',
    title: 'Revenue Operations & Systems Setup',
    subtitle: 'The Technical Backbone Connecting Marketing Traffic to Sales Outcomes',
    badgeText: 'Pillar 5 • Revenue Operations',
    heroDescription: 'Eliminate friction between marketing, sales, and customer success. We design, configure, and automate your entire RevOps tech stack to maximize conversion efficiency and data clarity.',
    primaryCTA: 'Schedule RevOps Architecture Session',
    secondaryCTA: 'View Supported Integrations',
    positioning: 'The technical backbone connecting marketing traffic to sales outcomes.',
    metrics: [
      { value: '100%', label: 'Data Synchronization', description: 'Bi-directional real-time data sync across CRM, marketing, & billing' },
      { value: '4.5 hrs', label: 'Weekly Time Saved / Rep', description: 'Eliminated manual data entry through webhooks & automation' },
      { value: '99.9%', label: 'Lead Capture Reliability', description: 'Zero lost leads with automated failover webhook pipelines' },
      { value: 'Real-Time', label: 'Revenue Dashboards', description: 'Unified executive reporting from impression to ARR' }
    ],
    subServices: [
      {
        id: 'crm-integration',
        title: 'CRM Setup & Integration',
        subtitle: 'HubSpot & Salesforce architecture, pipelines, and custom properties',
        description: 'Transform your CRM into a single source of truth. We architect custom deal pipelines, configure deal stage properties, set up lead scoring, and integrate CRM tools seamlessly.',
        iconName: 'Database',
        highlights: ['HubSpot & Salesforce architecture', 'Deal stage gating & validation rules', 'Lead scoring & attribution modeling'],
        deliverables: ['Custom CRM schema documentation', 'Data migration scripts', 'User permission matrices']
      },
      {
        id: 'funnel-optimization',
        title: 'Sales Funnel Design & Optimization',
        subtitle: 'High-converting landing pages, booking workflows, and forms',
        description: 'Remove friction from your conversion paths. We design and build ultra-fast landing pages, multi-step qualification forms, and instant calendar booking workflows.',
        iconName: 'Filter',
        highlights: ['High-converting landing page layouts', 'Multi-step qualification forms', 'Instant booking calendar widgets'],
        deliverables: ['Figma landing page UI designs', 'React form components', 'Conversion rate test reports']
      },
      {
        id: 'email-automation',
        title: 'Email Marketing & Lifecycle Automation',
        subtitle: 'Drip sequences, lead nurture automation, and customer re-engagement',
        description: 'Nurture leads automatically from opt-in to loyal customer. We craft automated lifecycle email workflows, onboarding sequences, and re-engagement campaigns.',
        iconName: 'Workflow',
        highlights: ['Automated lead nurture sequences', 'Customer onboarding drip flows', 'Behavior-triggered email alerts'],
        deliverables: ['Email copy & layout templates', 'Automation logic flowcharts', 'Open & click rate dashboards']
      },
      {
        id: 'process-automation',
        title: 'Workflow & Process Automation',
        subtitle: 'Zapier, Make, and API webhooks connecting your tech stack',
        description: 'Connect your isolated software tools into a unified automated machine. We build custom Zapier scenarios, Make integrations, and webhook endpoints to eliminate manual work.',
        iconName: 'Zap',
        highlights: ['Zapier & Make scenario building', 'Custom API webhook integration', 'Slack & Teams real-time deal notifications'],
        deliverables: ['Integration topology diagrams', 'Automated error handling alerts', 'System workflow maps']
      }
    ],
    comparison: {
      title: 'Siloed Software Tools vs. Unified Leapsofts RevOps Architecture',
      subtitle: 'Connect marketing, sales, and success into a single automated engine',
      traditional: [
        'Disconnected tools causing lost leads and mismatched CRM data',
        'Reps wasting hours manually logging calls and copy-pasting data',
        'No clear visibility into marketing source to revenue attribution',
        'Broken zaps and silent webhook failures losing opportunities'
      ],
      leapsoftsPod: [
        'Single source of truth with real-time bi-directional CRM data sync',
        'Automated activity logging so reps focus 100% on selling',
        'Full multi-touch attribution reporting from first click to ARR',
        'Enterprise-grade webhook pipelines with automated failover'
      ]
    },
    faqs: [
      {
        question: 'Which CRM platforms do you specialize in configuring?',
        answer: 'We have deep expertise in HubSpot (Marketing Hub, Sales Hub, Service Hub), Salesforce Enterprise, Pipedrive, and Close CRM.'
      },
      {
        question: 'Can you migrate our legacy CRM data without losing historical deal records?',
        answer: 'Yes! We conduct clean data migrations with field mapping validation, duplicate cleaning, and fallback backups to guarantee 100% data integrity.'
      },
      {
        question: 'How do you handle custom API integrations between our product and CRM?',
        answer: 'Our software engineering background enables us to write custom Node.js/Python serverless functions, REST webhooks, and GraphQL connectors whenever standard Zapier/Make connectors are insufficient.'
      }
    ],
    seo: {
      title: 'Revenue Operations & Systems Setup | Leapsofts',
      description: 'Streamline your tech stack with expert CRM setup (HubSpot, Salesforce), funnel design, lifecycle automation, and Zapier/Make integrations.',
      keywords: ['revenue operations revops', 'hubspot setup agency', 'salesforce integration', 'workflow automation zapier', 'sales funnel optimization']
    }
  }
};
