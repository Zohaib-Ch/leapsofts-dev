import React, { useEffect, useState } from "react";
import styles from "./ContactModal.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { useContactModal } from "../../context/ContactModalContext";

const ContactModal: React.FC = () => {
    const { isContactModalOpen, closeContactModal } = useContactModal();
    const [isClosing, setIsClosing] = useState(false);

    // Handle close with animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            closeContactModal();
        }, 300); // Match animation duration
    };

    // Handle escape key press to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        if (isContactModalOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isContactModalOpen]);

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isContactModalOpen) return null;

    return (
        <div
            className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`}
            onClick={handleBackdropClick}
        >
            <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
                {/* Close Button */}
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Decorative Cube - Left Side */}
                <div className={styles.decorativeCubeLeft}>
                    <img
                        src="/shapes/tile-dark-purple-gradient.svg"
                        alt=""
                        className={styles.cubeImage}
                    />
                </div>

                {/* Decorative Cube - Right Side (Bottom) */}
                <div className={styles.decorativeCubeRight}>
                    <img
                        src="/shapes/tile-dark-purple-gradient.svg"
                        alt=""
                        className={styles.cubeImage}
                    />
                </div>

                {/* Modal Content */}
                <div className={styles.modalContent}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
