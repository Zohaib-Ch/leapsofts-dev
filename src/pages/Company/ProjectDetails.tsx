import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import ImpactShowcase from '../../components/ImpactShowcase/ImpactShowcase';
import ExecutiveSummary from '../../components/ExecutiveSummary/ExecutiveSummary';
import TechStack from '../../components/TechStack/TechStack';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Clock, Zap } from 'lucide-react';
import styles from './ProjectDetails.module.css';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const projectData = useMemo(() => {
        return projectsData.find(project => project.id === id);
    }, [id]);

    if (!projectData) {
        return (
            <div className={styles.notFound}>
                <h1>Project Not Found</h1>
                <p>The project you are looking for does not exist.</p>
            </div>
        );
    }

    // Map icon types to components
    const statsWithIcons = projectData.impact.stats.map(stat => ({
        ...stat,
        icon: stat.iconType === 'clock' ? <Clock size={24} /> : <Zap size={24} />
    }));

    return (
        <div className={styles.pagePadding}>
            <ImpactShowcase
                title={projectData.impact.title}
                stats={statsWithIcons}
                images={projectData.impact.images}
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
        </div>
    );
}

export default ProjectDetails;