import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useLoaderData, redirect, useNavigate } from 'react-router';
import { projectsData } from '../../data/projectsData';
import ImpactShowcase from '../../components/ImpactShowcase/ImpactShowcase';
import ExecutiveSummary from '../../components/ExecutiveSummary/ExecutiveSummary';
import TechStack from '../../components/TechStack/TechStack';
import ContactForm from '../../components/ContactForm/ContactForm';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityCaseStudyById } from '../../sanity/queries';
import type { SanityCaseStudy } from '../../sanity/types';
import { buildPageMeta } from '../../utils/seoHelper';
import styles from './ProjectDetails.module.css';

const INDUSTRY_REDIRECTS: Record<string, string> = {
    'project-industry-0': '/industries/automotive',
    'project-industry-2': '/industries/healthcare',
    'project-industry-4': '/industries/construction',
    'project-industry-5': '/industries/energy',
    'project-industry-6': '/industries/compliance',
    'project-industry-7': '/industries/startups',
    'project-industry-8': '/industries/edtech',
    'project-industry-9': '/industries/compliance',
    'project-industry-10': '/industries/finance',
    'project-industry-11': '/industries/transportation',
    'project-industry-12': '/industries/wholesale-retail',
    'project-industry-13': '/services/data-science-ai',
    'automotive': '/industries/automotive',
    'healthcare': '/industries/healthcare',
    'construction': '/industries/construction',
    'energy': '/industries/energy',
    'compliance': '/industries/compliance',
    'startups': '/industries/startups',
    'edtech': '/industries/edtech',
    'education': '/industries/edtech',
    'forensics': '/industries/compliance',
    'finance': '/industries/finance',
    'fintech': '/industries/finance',
    'transportation': '/industries/transportation',
    'wholesale-retail': '/industries/wholesale-retail',
    'wholesale-and-retail': '/industries/wholesale-retail',
    'ai-automation': '/services/data-science-ai',
    'ai-and-automation': '/services/data-science-ai',
};

const resolveIndustryRedirect = (id: string): string | null => {
    const cleanId = id.toLowerCase().trim();
    if (INDUSTRY_REDIRECTS[cleanId]) return INDUSTRY_REDIRECTS[cleanId];

    const industryInProjects = projectsData.find(
        p => p.type === 'industry' && (
            p.id.toLowerCase() === cleanId ||
            p.brand?.name?.toLowerCase().replace(/\s+/g, '-') === cleanId ||
            p.brand?.name?.toLowerCase().trim() === cleanId
        )
    );

    if (industryInProjects) {
        if (INDUSTRY_REDIRECTS[industryInProjects.id.toLowerCase()]) {
            return INDUSTRY_REDIRECTS[industryInProjects.id.toLowerCase()];
        }
        const name = industryInProjects.brand?.name?.toLowerCase() || '';
        if (name.includes('auto')) return '/industries/automotive';
        if (name.includes('health')) return '/industries/healthcare';
        if (name.includes('compliance') || name.includes('forensic')) return '/industries/compliance';
        if (name.includes('finance') || name.includes('fintech')) return '/industries/finance';
        if (name.includes('edtech') || name.includes('education')) return '/industries/edtech';
        if (name.includes('construction')) return '/industries/construction';
        if (name.includes('energy')) return '/industries/energy';
        if (name.includes('startup')) return '/industries/startups';
        if (name.includes('transport')) return '/industries/transportation';
        if (name.includes('wholesale') || name.includes('retail')) return '/industries/wholesale-retail';
        if (name.includes('ai') || name.includes('automation')) return '/services/data-science-ai';
        return '/projects';
    }

    return null;
};

export async function loader({ params }: { params: { id?: string } }) {
    if (!params.id) return { sanityProject: null, fallbackProject: null };

    // 1. If an industry route/ID was requested at /projects/:id, redirect to the proper industry page
    const industryRedirectPath = resolveIndustryRedirect(params.id);
    if (industryRedirectPath) {
        return redirect(industryRedirectPath);
    }

    const sanityProject = await getSanityCaseStudyById(params.id).catch(() => null);

    // If Sanity returned a case study document that is an industry portfolio, redirect
    if (sanityProject && sanityProject.type === 'industry') {
        const targetPath = resolveIndustryRedirect(sanityProject.slug || sanityProject.id || '') || '/projects';
        return redirect(targetPath);
    }

    // 2. Fallback project MUST be of type 'project' (never an industry)
    const fallbackProject = projectsData.find(project =>
        project.type === 'project' && (
            project.id === params.id ||
            project.brand?.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === params.id.toLowerCase()
        )
    ) || null;

    return {
        sanityProject: sanityProject?.type === 'project' ? sanityProject : null,
        fallbackProject
    };
}

export function meta({ data, params }: { data?: any; params?: any }) {
    const project = (data?.sanityProject?.type === 'project' ? data.sanityProject : null) ||
                    (data?.fallbackProject?.type === 'project' ? data.fallbackProject : null);
    const title = project?.impact?.title || project?.title || 'Case Study Details';
    const description = typeof project?.summary === 'string'
        ? project.summary
        : project?.summary?.description || 'Explore this custom enterprise software engineering case study by Leapsofts.';

    return buildPageMeta({
        sanityData: project,
        defaultTitle: `${title} | Case Study | Leapsofts`,
        defaultDescription: description,
        defaultKeywords: "software engineering case study, custom software development, cloud architecture, leapsofts portfolio",
        canonicalUrl: `https://www.leapsofts.com/projects/${params?.id || ''}`,
    });
}

const ProjectDetails: React.FC = () => {
    const loaderData = useLoaderData<typeof loader>();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [sanityProject, setSanityProject] = useState<SanityCaseStudy | null>(
        loaderData?.sanityProject?.type === 'project' ? loaderData.sanityProject : null
    );
    const [isLoading, setIsLoading] = useState<boolean>(!loaderData);

    // Client-side safeguard against directly loaded industry routes
    useEffect(() => {
        if (id) {
            const redirectPath = resolveIndustryRedirect(id);
            if (redirectPath) {
                navigate(redirectPath, { replace: true });
            }
        }
    }, [id, navigate]);

    const projectData = useMemo(() => {
        const lp = loaderData?.fallbackProject;
        if (lp && lp.type === 'project') return lp;
        return projectsData.find(project =>
            project.type === 'project' && (
                project.id === id ||
                project.brand?.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === (id || '').toLowerCase()
            )
        ) || null;
    }, [id, loaderData]);

    // Synchronize state immediately when navigating between project case studies
    useEffect(() => {
        setSanityProject(loaderData?.sanityProject?.type === 'project' ? loaderData.sanityProject : null);
        setIsLoading(!loaderData?.sanityProject);
    }, [id, loaderData]);

    useEffect(() => {
        let isMounted = true;
        if (id && !loaderData?.sanityProject) {
            setIsLoading(true);
            getSanityCaseStudyById(id)
                .then((data) => {
                    if (isMounted) {
                        if (data) {
                            if (data.type === 'industry') {
                                const redirectPath = resolveIndustryRedirect(data.slug || data.id || id);
                                if (redirectPath) {
                                    navigate(redirectPath, { replace: true });
                                    return;
                                }
                            } else {
                                setSanityProject(data);
                            }
                        }
                        setIsLoading(false);
                    }
                })
                .catch(() => {
                    if (isMounted) setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
        return () => {
            isMounted = false;
        };
    }, [id, loaderData, navigate]);

    if (isLoading && !projectData) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner} />
            </div>
        );
    }

    if (!isLoading && !projectData && !sanityProject) {
        return (
            <div className={styles.notFound}>
                <MetaSEO defaultTitle="Project Not Found | Leapsofts" noIndex={true} />
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist.</p>
            </div>
        );
    }

    const title = sanityProject?.impact?.title || sanityProject?.title || projectData?.impact?.title || 'Case Study Details';
    const summaryText = typeof sanityProject?.summary === 'string'
        ? sanityProject.summary
        : sanityProject?.summary?.description || projectData?.summary?.description || '';

    const rawDeliverables = sanityProject?.projectList && sanityProject.projectList.length > 0
        ? sanityProject.projectList
        : projectData?.projectList || [];

    const normalizedDeliverables = rawDeliverables.map((item: any) => {
        if (typeof item === 'string') return item;
        if (item && typeof item === 'object') {
            return item.name || item.title || item.label || '';
        }
        return String(item || '');
    }).filter(Boolean);

    const impactData = {
        title: typeof title === 'object' ? (title as any)?.title || (title as any)?.name || 'Case Study Details' : title,
        images: sanityProject?.impact?.images && sanityProject.impact.images.length > 0
            ? sanityProject.impact.images
            : projectData?.impact?.images || [],
        deliverables: normalizedDeliverables,
    };

    const rawDetails = (typeof sanityProject?.summary === 'object' && sanityProject?.summary?.details)
        ? sanityProject.summary.details
        : sanityProject?.details || projectData?.summary?.details || [];

    const normalizedDetails = Array.isArray(rawDetails) ? rawDetails.map((detail: any) => ({
        label: typeof detail?.label === 'object' ? (detail.label?.name || detail.label?.title || '') : String(detail?.label || ''),
        value: typeof detail?.value === 'object' ? (detail.value?.name || detail.value?.title || '') : String(detail?.value || ''),
    })) : [];

    const executiveSummaryData = {
        description: typeof summaryText === 'object' ? ((summaryText as any)?.description || (summaryText as any)?.text || '') : String(summaryText || ''),
        details: normalizedDetails,
    };

    const rawTechStackItems = sanityProject?.techStack?.items && sanityProject.techStack.items.length > 0
        ? sanityProject.techStack.items
        : projectData?.techStack?.items || [];

    const normalizedTechStackItems = Array.isArray(rawTechStackItems) ? rawTechStackItems.map((item: any) => ({
        label: typeof item?.label === 'object' ? (item.label?.name || item.label?.title || '') : String(item?.label || ''),
        techs: Array.isArray(item?.techs) ? item.techs.map((tech: any) => {
            if (typeof tech === 'string') return { name: tech };
            return {
                name: typeof tech?.name === 'object' ? (tech.name?.name || tech.name?.title || '') : String(tech?.name || ''),
                icon: tech?.icon,
                iconPreset: tech?.iconPreset,
                iconImageUrl: tech?.iconImageUrl,
            };
        }) : [],
    })) : [];

    const techStackData = {
        title: typeof sanityProject?.techStack?.title === 'object'
            ? (sanityProject.techStack.title as any)?.name || 'Tools and technologies'
            : (sanityProject?.techStack?.title || projectData?.techStack?.title || 'Tools and technologies'),
        items: normalizedTechStackItems,
    };

    const projectSchema = {
        "@context": "https://schema.org",
        "@graph": [
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
                        "name": "Case Studies",
                        "item": "https://www.leapsofts.com/projects"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": title,
                        "item": `https://www.leapsofts.com/projects/${id || ''}`
                    }
                ]
            },
            {
                "@type": "CreativeWork",
                "name": title,
                "headline": title,
                "description": summaryText,
                "url": `https://www.leapsofts.com/projects/${id || ''}`,
                "author": {
                    "@type": "Organization",
                    "name": "Leapsofts",
                    "url": "https://www.leapsofts.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Leapsofts",
                    "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png"
                }
            }
        ]
    };

    return (
        <div className={styles.pagePadding}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
            <MetaSEO
                seo={sanityProject?.seo}
                defaultTitle={`${title} | Case Study | Leapsofts`}
                defaultDescription={summaryText}
            />
            <ImpactShowcase
                title={impactData.title}
                images={impactData.images}
                deliverables={impactData.deliverables}
            />

            <div className={styles.detailsContainer}>
                <div className={styles.leftColumn}>
                    <ExecutiveSummary
                        description={executiveSummaryData.description}
                        details={executiveSummaryData.details}
                    />

                    {techStackData.items && techStackData.items.length > 0 && techStackData.items.some(i => i.techs && i.techs.length > 0) && (
                        <TechStack
                            title={techStackData.title}
                            items={techStackData.items}
                        />
                    )}
                </div>

                <div className={styles.rightColumn}>
                    <ContactForm isSticky={true} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;