import React from 'react';
import styles from './Legal.module.css';

export function meta() {
  return [
    { title: "Cookies Policy | Leapsofts" },
    { name: "description", content: "Cookies Policy for Leapsofts." },
    { name: "robots", content: "noindex, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.leapsofts.com/cookies-policy" },
  ];
}

const CookiesPolicy: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Cookies Policy</h1>
                <p className={styles.date}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <div className={styles.text}>
                    <p>Leapsofts uses cookies to improve your experience on our website.</p>
                    
                    <h2>1. What are Cookies?</h2>
                    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website.</p>
                    
                    <h2>2. How We Use Cookies</h2>
                    <p>We use essential cookies to ensure our website functions correctly. We may also use analytics cookies to understand how visitors interact with our site.</p>
                    
                    <h2>3. Managing Cookies</h2>
                    <p>You can control and manage cookies in your browser settings. Please note that removing or blocking cookies can impact your user experience.</p>
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;
