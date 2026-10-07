import React from 'react';
import styles from './Legal.module.css';

export function meta() {
  return [
    { title: "Privacy Policy | Leapsofts" },
    { name: "description", content: "Privacy Policy for Leapsofts." },
    { name: "robots", content: "noindex, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.leapsofts.com/privacy-policy" },
  ];
}

const PrivacyPolicy: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.date}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <div className={styles.text}>
                    <p>At Leapsofts, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.</p>
                    
                    <h2>1. Information We Collect</h2>
                    <p>When you contact us through our website, we may collect your name, email address, phone number, and company name.</p>
                    
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to communicate with you about your project, provide customer support, and improve our services.</p>
                    
                    <h2>3. Information Sharing</h2>
                    <p>We do not sell or share your personal information with third parties except as necessary to provide our services or comply with the law.</p>
                    
                    <h2>4. Security</h2>
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
                    
                    <h2>5. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at privacy@leapsofts.com.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
