import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { projectsData } from '../../data/projectsData';
import ImpactShowcase from '../../components/ImpactShowcase/ImpactShowcase';
import ExecutiveSummary from '../../components/ExecutiveSummary/ExecutiveSummary';
import TechStack from '../../components/TechStack/TechStack';
import ContactForm from '../../components/ContactForm/ContactForm';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityCaseStudyById } from '../../sanity/queries';
import type { SanityCaseStudy } from '../../sanity/types';
import styles from './ProjectDetails.module.css';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [sanityProject, setSanityProject] = useState<SanityCaseStudy | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const projectData = useMemo(() => {
        return projectsData.find(project => project.id === id);
    }, [id]);

    useEffect(() => {
        let isMounted = true;
        if (id) {
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
    }, [id]);

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

    const deliverables = rawDeliverables.map((item: any) => {
        if (typeof item === 'string') return item;
        if (typeof item === 'object' && item !== null) {
            return item.name || item.title || item._ref || '';
        }
        return String(item || '');
    }).filter(Boolean);

    const impactData = {
        title: sanityProject?.impact?.title || projectData?.impact?.title || title,
        images: sanityProject?.impact?.images && sanityProject.impact.images.length > 0
            ? sanityProject.impact.images
            : projectData?.impact?.images || [],
        deliverables: deliverables,
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

    return (
        <div className={styles.pagePadding}>
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