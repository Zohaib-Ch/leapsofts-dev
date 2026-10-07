import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router';
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

export async function loader({ params }: { params: { id?: string } }) {
    if (!params.id) return { sanityProject: null, fallbackProject: null };
    const sanityProject = await getSanityCaseStudyById(params.id).catch(() => null);
    const fallbackProject = projectsData.find(project => project.id === params.id) || null;
    return { sanityProject, fallbackProject };
}

export function meta({ data, params }: { data?: any; params?: any }) {
    const project = data?.sanityProject || data?.fallbackProject;
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
    const [sanityProject, setSanityProject] = useState<SanityCaseStudy | null>(loaderData?.sanityProject || null);
    const [isLoading, setIsLoading] = useState<boolean>(!loaderData);

    const projectData = useMemo(() => {
        return loaderData?.fallbackProject || projectsData.find(project => project.id === id);
    }, [id, loaderData]);

    useEffect(() => {
        let isMounted = true;
        if (id && !loaderData?.sanityProject) {
            setIsLoading(true);
            getSanityCaseStudyById(id)
                .then((data) => {
                    if (isMounted) {
                        if (data) setSanityProject(data);
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
    }, [id, loaderData]);

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

    const impactData = {
        title: sanityProject?.impact?.title || projectData?.impact?.title || title,
        images: sanityProject?.impact?.images && sanityProject.impact.images.length > 0
            ? sanityProject.impact.images
            : projectData?.impact?.images || [],
        deliverables: sanityProject?.projectList && sanityProject.projectList.length > 0
            ? sanityProject.projectList
            : projectData?.projectList || [],
    };

    const executiveSummaryData = {
        description: summaryText,
        details: (typeof sanityProject?.summary === 'object' && sanityProject?.summary?.details)
            ? sanityProject.summary.details
            : sanityProject?.details || projectData?.summary?.details || [],
    };

    const techStackData = {
        title: sanityProject?.techStack?.title || projectData?.techStack?.title || 'Tools and technologies',
        items: sanityProject?.techStack?.items && sanityProject.techStack.items.length > 0
            ? sanityProject.techStack.items
            : projectData?.techStack?.items || [],
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

                    <TechStack
                        title={techStackData.title}
                        items={techStackData.items}
                    />
                </div>

                <div className={styles.rightColumn}>
                    <ContactForm isSticky={true} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;