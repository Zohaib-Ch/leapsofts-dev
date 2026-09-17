import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

    useEffect(() => {
        if (id) {
            getSanityCaseStudyById(id).then((data) => {
                if (data) setSanityProject(data);
            });
        }
    }, [id]);

    const projectData = useMemo(() => {
        return projectsData.find(project => project.id === id);
    }, [id]);

    if (!projectData && !sanityProject) {
        return (
            <div className={styles.notFound}>
                <MetaSEO defaultTitle="Project Not Found | Leapsofts" noIndex={true} />
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist.</p>
            </div>
        );
    }

    const title = sanityProject?.title || projectData?.impact?.title || 'Case Study Details';
    const summary = sanityProject?.summary || projectData?.summary?.description || '';

    return (
        <div className={styles.pagePadding}>
            <MetaSEO
                seo={sanityProject?.seo}
                defaultTitle={`${title} | Case Study | Leapsofts`}
                defaultDescription={summary}
            />
            {projectData && (
                <>
                    <ImpactShowcase
                        title={projectData.impact.title}
                        images={projectData.impact.images}
                        deliverables={projectData.projectList}
                    />

                    <div className={styles.detailsContainer}>
                        <div className={styles.leftColumn}>
                            <ExecutiveSummary
                                description={projectData.summary.description}
                                details={projectData.summary.details}
                            />

                            <TechStack
                                title={projectData.techStack.title}
                                items={projectData.techStack.items}
                            />
                        </div>

                        <div className={styles.rightColumn}>
                            <ContactForm isSticky={true} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProjectDetails;