import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './button.module.css';

interface ButtonProps {
    color1?: string;
    color2?: string;
    text: string;
    onClick?: () => void;
    hasIcon?: boolean;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'liquid' | 'linear' | 'orbit' | 'aurora';
}

const Button = ({
    color1 = 'var(--color-orange, #FF7917)',
    color2 = 'var(--color-purple, #C63C92)',
    text,
    onClick,
    hasIcon,
    icon,
    className = '',
    disabled = false,
    type = 'submit',
    variant = 'default',
}: ButtonProps) => {
    // Liquid Fluid Gradient Button (Mixture of Leapsofts logo colors: Violet, Magenta & Amber Orange)
    if (variant === 'liquid' || variant === 'linear' || variant === 'orbit' || variant === 'aurora') {
        const showIcon = hasIcon !== false;
        return (
            <button
                type={type}
                disabled={disabled}
                className={`${styles['liquid-btn']} ${className} ${disabled ? styles['btn-disabled'] : ''}`.trim()}
                onClick={onClick}
            >
                {/* 1. Ambient Fluid Underglow (Warm Violet & Amber Bloom) */}
                <span className={styles['liquid-glow']} aria-hidden="true">
                    <span className={styles['fluid-glow-blob-1']} />
                    <span className={styles['fluid-glow-blob-2']} />
                </span>

                {/* 2. Liquid Fluid Mesh Canvas (Swirling Logo Colors) */}
                <span className={styles['liquid-canvas']} aria-hidden="true">
                    <span className={styles['fluid-blob-base']} />
                    <span className={styles['fluid-blob-violet']} />
                    <span className={styles['fluid-blob-magenta']} />
                    <span className={styles['fluid-blob-orange']} />
                </span>

                {/* 3. Physical Curved Glass Capsule Highlight */}
                <span className={styles['liquid-glass-shield']} aria-hidden="true" />

                {/* 4. Foreground Content & Kinetic Arrow */}
                <span className={styles['liquid-content']}>
                    <span className={styles['liquid-text']}>{text}</span>
                    {showIcon && (
                        <span className={styles['liquid-icon-wrap']}>
                            {icon || <ArrowRight size={14} className={styles['liquid-arrow-icon']} />}
                        </span>
                    )}
                </span>
            </button>
        );
    }

    // Default button style
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${styles['leap-btn']} ${className} ${disabled ? styles['btn-disabled'] : ''}`.trim()}
            onClick={onClick}
            style={{
                '--btn-color-1': color1,
                '--btn-color-2': color2,
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer'
            } as React.CSSProperties}
        >
            <span className={styles['btn-bg']}></span>
            <span className={styles['btn-text']}>{text}</span>
            {hasIcon && (
                <span className={styles['btn-icon']}>
                    {icon || (
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['btn-arrow']}>
                            <path d="M6.51285 2.99494L12.2561 2.99477L16.0851 9.62716L10.341 9.62686L6.51285 2.99494Z" className={styles['arrow-top']} />
                            <path d="M6.51213 16.2587L12.2562 16.259L16.085 9.6272L10.341 9.6269L6.51213 16.2587Z" className={styles['arrow-bottom']} />
                        </svg>
                    )}
                </span>
            )}
        </button>
    );
};

export default Button;