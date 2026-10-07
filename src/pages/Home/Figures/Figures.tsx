import React from 'react';
import styles from './figures.module.css';
import AnimatedCounter from '../../../components/AnimatedCounter/AnimatedCounter';

const highlightsData = [
    { number: 21, suffix: '', text: 'years of engineering dependable, high-impact digital products' },
    { number: 250, suffix: '+', text: 'software specialists ready to scale your product vision with precision' },
    { number: 5, suffix: '', text: 'strategic offices globally, led by our UAE headquarters to support international scale' },
    { number: 150, suffix: '+', text: 'products launched across Fortune 200 enterprises and hyper-growth startups' },
    { number: 94, suffix: '%', text: 'client retention powered by sustained technical execution and clear communication' },
    { number: 3, suffix: '', text: 'months average timeline to deploy a fully-functional, market-ready MVP' },
];

export interface StatItem {
    number: number;
    suffix?: string;
    text: string;
}

export interface FiguresProps {
    stats?: StatItem[];
}

const Figures: React.FC<FiguresProps> = ({ stats: sanityStats }) => {
    const activeStats = sanityStats && sanityStats.length > 0 ? sanityStats : highlightsData;
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="figures" ref={sectionRef} className={`${styles.figuresSection} ${isVisible ? styles.revealed : ''}`}>
            {/* Topographic Elevation Contour Vector Background */}
            <div className={styles.topographicContainer} aria-hidden="true">
                <div className={styles.ambientGlow} />
                <svg
                    className={styles.topographicSvg}
                    viewBox="0 0 1440 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="topoGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#ff8c33" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="topoGradSlate" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#64748b" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>

                    {/* Contour Level 1 */}
                    <path
                        d="M-50,120 C220,40 450,220 720,130 C990,40 1200,240 1500,100"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1.2"
                    />
                    {/* Contour Level 2 */}
                    <path
                        d="M-50,180 C240,90 480,290 740,190 C1000,90 1220,300 1500,160"
                        stroke="url(#topoGradSlate)"
                        strokeWidth="1"
                    />
                    {/* Contour Level 3 (Dash Accent) */}
                    <path
                        d="M-50,240 C260,140 500,350 760,250 C1020,150 1240,360 1500,220"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1.2"
                        strokeDasharray="6 4"
                    />
                    {/* Contour Level 4 */}
                    <path
                        d="M-50,300 C280,190 520,410 780,310 C1040,210 1260,420 1500,280"
                        stroke="url(#topoGradSlate)"
                        strokeWidth="1"
                    />
                    {/* Contour Level 5 */}
                    <path
                        d="M-50,360 C300,240 540,470 800,370 C1060,270 1280,480 1500,340"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1.2"
                    />
                    {/* Contour Level 6 */}
                    <path
                        d="M-50,420 C320,290 560,530 820,430 C1080,330 1300,540 1500,400"
                        stroke="url(#topoGradSlate)"
                        strokeWidth="1"
                        strokeDasharray="8 6"
                    />
                    {/* Contour Level 7 */}
                    <path
                        d="M-50,480 C340,340 580,590 840,490 C1100,390 1320,600 1500,460"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1.2"
                    />

                    {/* Topographical Nested Closed Loops (Mountain Ridges) */}
                    <path
                        d="M320,280 C360,250 430,260 460,300 C490,340 450,400 390,390 C330,380 290,320 320,280 Z"
                        stroke="url(#topoGradSlate)"
                        strokeWidth="1"
                    />
                    <path
                        d="M350,295 C375,275 415,280 430,305 C445,330 425,370 385,365 C345,360 325,320 350,295 Z"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                    />
                    <path
                        d="M1020,220 C1070,180 1160,200 1190,260 C1220,320 1170,390 1100,380 C1030,370 980,270 1020,220 Z"
                        stroke="url(#topoGradOrange)"
                        strokeWidth="1"
                    />
                    <path
                        d="M1050,240 C1085,210 1145,225 1165,270 C1185,315 1145,365 1095,355 C1045,345 1015,275 1050,240 Z"
                        stroke="url(#topoGradSlate)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                    />
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.highlights}>
                    {activeStats.map((item, index) => {
                        const indexLabel = String(index + 1).padStart(2, '0');
                        return (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.glassCard}>
                                    {/* Subtle Ambient Corner Glow */}
                                    <div className={styles.cardCornerGlow} aria-hidden="true" />

                                    {/* Ghost Index Number Watermark */}
                                    <span className={styles.cardWatermark} aria-hidden="true">
                                        {indexLabel}
                                    </span>

                                    {/* Card Foreground Content */}
                                    <div className={styles.cardContent}>
                                        <span className={styles.statNumber}>
                                            <AnimatedCounter value={item.number} />{item.suffix}
                                        </span>
                                        <p className={styles.statText}>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Figures;
