import styles from './button.module.css'

interface ButtonProps {
    color1?: string;
    color2?: string;
    text: string;
    onClick?: () => void;
    hasIcon?: boolean;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ color1 = 'var(--color-orange, #FF7917)', color2 = 'var(--color-purple, #C63C92)', text, onClick, hasIcon, className = '', disabled = false, type = 'submit' }: ButtonProps) => {
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
            {hasIcon && <span className={styles['btn-icon']}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['btn-arrow']}>
                    <path d="M6.51285 2.99494L12.2561 2.99477L16.0851 9.62716L10.341 9.62686L6.51285 2.99494Z" className={styles['arrow-top']} />
                    <path d="M6.51213 16.2587L12.2562 16.259L16.085 9.6272L10.341 9.6269L6.51213 16.2587Z" className={styles['arrow-bottom']} />
                </svg>
            </span>}
        </button>
    )
}

export default Button