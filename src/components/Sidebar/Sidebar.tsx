import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';
import styles from './sidebar.module.css';
import { useLocation } from 'react-router-dom';

const navItems = [
    { id: 'contact', label: 'CONTACT' },
    { id: 'feedbacks', label: 'FEEDBACKS' },
    { id: 'process', label: 'PROCESS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'intro', label: 'INTRO' },
];

const Sidebar = () => {
    const { pathname, hash } = useLocation();

    // Only show sidebar navigation on the Home page
    if (pathname !== '/') {
        return null;
    }

    const items = navItems;

    // Set initial active section to the last item (visually top)
    const [activeSection, setActiveSection] = useState(items[items.length - 1].id);

    useEffect(() => {
        if (hash === '#contact') {
            scrollToSection('contact');
        }
    }, [hash]);

    useEffect(() => {
        // Update active section when items change (e.g. route change)
        setActiveSection(items[items.length - 1].id);

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = items.map(item => document.getElementById(item.id));
                    const scrollPosition = window.scrollY + window.innerHeight / 2;

                    let currentSection = items[items.length - 1].id;
                    // Special case for top
                    if (window.scrollY < 100) {
                        currentSection = items[items.length - 1].id;
                    } else {
                        for (const section of sections) {
                            if (section) {
                                const { offsetTop, offsetHeight } = section;
                                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                    currentSection = section.id;
                                    setActiveSection(currentSection);
                                    break;
                                }
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once to set initial state correctly
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.menu}>
                {items.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                        <React.Fragment key={item.id}>
                            <div
                                className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {isActive && (
                                    <div className={styles.activeIconWrapper}>
                                        <ChevronsUp size={20} color="var(--color-orange)" style={{ transform: 'rotate(-90deg)' }} />
                                    </div>
                                )}
                                <span className={styles.label}>{item.label}</span>
                            </div>

                            {index < items.length - 1 && <div className={styles.dot}></div>}
                        </React.Fragment>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;