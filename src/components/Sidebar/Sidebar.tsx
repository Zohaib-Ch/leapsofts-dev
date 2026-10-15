import React, { useState, useEffect, useCallback, memo } from 'react';
import { ChevronsUp } from 'lucide-react';
import styles from './sidebar.module.css';
import { useLocation } from 'react-router';

const navItems = [
    { id: 'contact', label: 'CONTACT' },
    { id: 'feedbacks', label: 'FEEDBACKS' },
    { id: 'process', label: 'PROCESS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'intro', label: 'INTRO' },
];

const Sidebar = memo(() => {
    const { pathname, hash } = useLocation();

    // Only show sidebar navigation on the Home page
    if (pathname !== '/') {
        return null;
    }

    const items = navItems;
    const [activeSection, setActiveSection] = useState(items[items.length - 1].id);

    const scrollToSection = useCallback((id: string) => {
        if (id === 'intro') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('intro');
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    }, []);

    useEffect(() => {
        if (hash === '#contact') {
            scrollToSection('contact');
        }
    }, [hash, scrollToSection]);

    useEffect(() => {
        let isTicking = false;
        let rafId: number | null = null;

        const handleScroll = () => {
            if (!isTicking) {
                isTicking = true;
                rafId = requestAnimationFrame(() => {
                    if (window.scrollY < 120) {
                        setActiveSection('intro');
                    }
                    isTicking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // High-performance IntersectionObserver with 0 layout thrashing
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -40% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            if (window.scrollY < 120) {
                setActiveSection('intro');
                return;
            }

            const visibleEntries = entries.filter((entry) => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                const best = visibleEntries.reduce((closest, curr) => {
                    return Math.abs(curr.boundingClientRect.top) < Math.abs(closest.boundingClientRect.top)
                        ? curr
                        : closest;
                });
                setActiveSection(best.target.id);
            }
        }, observerOptions);

        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            observer.disconnect();
        };
    }, [items]);

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
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;