import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ServiceFeatures.module.css';

export interface ServiceFeatureItem {
    icon: string;
    title: string;
    description: string;
}

interface ServiceFeaturesProps {
    subtitle?: string;
    title?: string;
    description?: string;
    items?: ServiceFeatureItem[];
}

const defaultItems: ServiceFeatureItem[] = [
    {
        icon: '/industryicons/sphere.svg',
        title: 'Custom Modules',
        description: 'Industry-specific features for healthcare, real estate, e-commerce, and more'
    },
    {
        icon: '/industryicons/bipiramida.svg',
        title: 'Role-Based Access',
        description: 'Secure management of user permissions and data access levels'
    },
    {
        icon: '/industryicons/diamond.svg',
        title: 'Lead & Pipeline Management',
        description: 'Track deals, automate follow-ups, and optimize conversion funnels'
    }
];

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
    subtitle = "SERVICE-SPECIFIC FEATURES",
    title = "Key Features",
    description = "Every feature supports your specific sales, support, and operations goals with usability and efficiency in mind.",
    items = defaultItems
}) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>{subtitle}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.swiperWrapper}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className={styles.swiper}
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>
                                    <div className={styles.cardContent}>
                                        <div className={styles.iconWrapper}>
                                            <img src={item.icon} alt={item.title} className={styles.icon} />
                                        </div>
                                        <div className={styles.textWrapper}>
                                            <h3 className={styles.itemTitle}>{item.title}</h3>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className={styles.arrowsWrapper}>
                                        <img
                                            src={[
                                                '/industryicons/arrow-with-plume-pink.svg',
                                                '/industryicons/arrow-with-plume-green-dark.svg',
                                                '/industryicons/arrow-with-plume-bright-purple.svg'
                                            ][index % 3]}
                                            alt=""
                                            className={styles.arrowSmall}
                                        />
                                        <img
                                            src={[
                                                '/industryicons/arrow-with-plume-pink.svg',
                                                '/industryicons/arrow-with-plume-green-dark.svg',
                                                '/industryicons/arrow-with-plume-bright-purple.svg'
                                            ][index % 3]}
                                            alt=""
                                            className={styles.arrowLarge}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
