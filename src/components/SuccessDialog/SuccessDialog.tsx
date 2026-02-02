import React, { useEffect } from 'react';
import styles from './SuccessDialog.module.css';

interface SuccessDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <div className={styles.glowEffect}></div>
                <div className={styles.iconWrapper}>
                    <svg
                        className={styles.checkmark}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Message Sent!</h2>
                    <p className={styles.message}>
                        Our team will reach out to you shortly.
                    </p>
                </div>
                <button className={styles.closeBtn} onClick={onClose}>
                    Got it
                </button>
            </div>
        </div>
    );
};

export default SuccessDialog;
