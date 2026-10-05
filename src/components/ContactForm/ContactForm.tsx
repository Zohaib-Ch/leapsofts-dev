import React, { useState, useMemo,} from "react";
import type { ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import countryPhonePatterns from "./country-phone-patterns.json";
import { sendMail, type mailBody } from "../../services/mailService";
import SuccessDialog from "../SuccessDialog/SuccessDialog";

interface CountryPattern {
    country: string;
    iso2: string;
    code: string;
    exampleNational: string;
    exampleInternational: string;
    nationalNumber: string;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    company: string;
    message: string;
    consent: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    consent?: string;
}

interface ContactFormProps {
    isSticky?: boolean;
    isEmbedded?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isSticky = false, isEmbedded = false }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "US",
        phone: "",
        company: "",
        message: "",
        consent: false,
    });
    const [honeypot, setHoneypot] = useState("");
    const now = new Date();
    const projectDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Get the selected country's data
    const selectedCountry = useMemo(() => {
        return (countryPhonePatterns as CountryPattern[]).find(
            (country) => country.iso2 === formData.countryCode
        );
    }, [formData.countryCode]);

    const validateField = (name: string, value: string | boolean): string | undefined => {
        switch (name) {
            case "firstName":
                if (!value || (typeof value === "string" && value.trim() === "")) {
                    return "Please enter valid first name";
                }
                break;
            case "lastName":
                if (!value || (typeof value === "string" && value.trim() === "")) {
                    return "Please enter valid last name";
                }
                break;
            case "email":
                if (!value || (typeof value === "string" && value.trim() === "")) {
                    return "Please enter valid email address";
                }
                if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter valid email address";
                }
                break;
            case "phone":
                if (!value) {
                    return "This field is required";
                }
                break;
            case "company":
                if (!value || (typeof value === "string" && value.trim() === "")) {
                    return "Please enter valid company name";
                }
                break;
            case "message":
                if (!value || (typeof value === "string" && value.trim() === "")) {
                    return "Please enter valid message";
                }
                break;
            case "consent":
                if (!value) {
                    return "Please accept the terms and conditions";
                }
                break;
            default:
                return undefined;
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));

        // Validate on change if field was touched
        if (touched[name]) {
            const error = validateField(name, newValue);
            setErrors((prev) => ({
                ...prev,
                [name]: error,
            }));
        }
    };

    const handleBlur = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate all fields
        const newErrors: FormErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
            }
        });

        setErrors(newErrors);
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            company: true,
            message: true,
            consent: true,
        });

        if (Object.keys(newErrors).length === 0) {
            // Anti-spam bot trap: silently succeed if honeypot was populated
            if (honeypot.trim() !== "") {
                setIsSuccessDialogOpen(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "US",
                    phone: "",
                    company: "",
                    message: "",
                    consent: false,
                });
                setTouched({});
                setErrors({});
                return;
            }

            setIsSubmitting(true);
            setSubmitError(null);

            const body: mailBody = {
                name: formData.firstName + " " + formData.lastName,
                email: formData.email,
                phone: `${selectedCountry?.code || ''} ${formData.phone}`.trim(),
                company: formData.company,
                message: formData.message,
            };

            const result = await sendMail(body);
            setIsSubmitting(false);

            if (result.success) {
                setIsSuccessDialogOpen(true);
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "US",
                    phone: "",
                    company: "",
                    message: "",
                    consent: false,
                });
                setTouched({});
                setErrors({});
            } else {
                setSubmitError(result.error || 'Unable to submit your message. Please try again or email contact@leapsofts.com.');
            }
        }
    };

    return (
        <div className={`${styles.contactSection} ${isSticky ? styles.stickyVariant : ''} ${isEmbedded ? styles.embeddedVariant : ''}`}>
            {!isSticky && !isEmbedded && (
                <div className={styles.headerSection}>
                    <h2 className={styles.headline}>
                        Succeed <span className={styles.accent}>faster</span> with Leapsofts
                    </h2>
                    <p className={styles.subtitle}>
                        If you submit a request today, your MVP will be ready as early as{' '}
                        <span className={styles.dateHighlight}>
                            {projectDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </p>
                </div>
            )}
            {isSticky && (
                <div className={styles.stickyHeader}>
                    <h3 className={styles.stickyTitle}>Let's Discuss Your Project</h3>
                </div>
            )}
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} noValidate>
                    {/* Hidden Honeypot field for spam prevention */}
                    <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                        <label htmlFor="company_website_url_hp">Do not fill this out</label>
                        <input
                            type="text"
                            id="company_website_url_hp"
                            name="company_website_url_hp"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGrid}>
                        {/* First Name */}
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.label}>First name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={`${styles.input} ${errors.firstName && touched.firstName ? styles.error : ""}`}
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && touched.firstName && (
                                <span className={styles.errorMessage}>{errors.firstName}</span>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.label}>Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className={`${styles.input} ${errors.lastName && touched.lastName ? styles.error : ""}`}
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && touched.lastName && (
                                <span className={styles.errorMessage}>{errors.lastName}</span>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone number</label>
                            <div className={styles.phoneGroup}>
                                <div className={styles.countrySelectContainer}>
                                    <span className={styles.selectedCountryCode}>
                                        {selectedCountry?.code}
                                    </span>
                                    <select
                                        name="countryCode"
                                        className={styles.countrySelect}
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                    >
                                        {(countryPhonePatterns as CountryPattern[]).map((country) => (
                                            <option key={country.iso2} value={country.iso2}>
                                                {country.country} ({country.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={`${styles.input} ${styles.phoneInput} ${errors.phone && touched.phone ? styles.error : ""}`}
                                    placeholder={selectedCountry?.exampleNational || "Phone number"}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.phone && touched.phone && (
                                <span className={styles.errorMessage}>{errors.phone}</span>
                            )}
                        </div>

                        {/* Email */}
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`${styles.input} ${errors.email && touched.email ? styles.error : ""}`}
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <span className={styles.errorMessage}>{errors.email}</span>
                            )}
                        </div>

                        {/* Company */}
                        <div className={styles.formGroup}>
                            <label htmlFor="company" className={styles.label}>Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={`${styles.input} ${errors.company && touched.company ? styles.error : ""}`}
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.company && touched.company && (
                                <span className={styles.errorMessage}>{errors.company}</span>
                            )}
                        </div>

                        {/* Message */}
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`${styles.textarea} ${errors.message && touched.message ? styles.error : ""}`}
                                placeholder="Type your message..."
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.message && touched.message && (
                                <span className={styles.errorMessage}>{errors.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className={styles.checkboxGroup}>
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            className={styles.checkbox}
                            checked={formData.consent}
                            onChange={handleChange}
                        />
                        <label htmlFor="consent" className={styles.checkboxLabel}>
                            Leapsofts does not sell, share, or misuse your personal data. By submitting this form, I consent to Leapsofts processing my personal data as described in the <a href="/privacy-policy">Privacy Policy</a> and <a href="/cookies-policy">Cookies Policy</a>.
                        </label>
                    </div>
                    {errors.consent && touched.consent && (
                        <div className={styles.errorMessage} style={{ marginLeft: '32px' }}>{errors.consent}</div>
                    )}

                    <p className={styles.recaptchaNotice}>
                        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                    </p>

                    {submitError && (
                        <div style={{
                            marginTop: '1rem',
                            padding: '0.75rem 1rem',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.4)',
                            borderRadius: '8px',
                            color: '#fca5a5',
                            fontSize: '0.875rem'
                        }}>
                            {submitError}
                        </div>
                    )}

                    <div className={styles.submitSection}>
                        <Button
                            color1="var(--color-primary)"
                            color2="var(--color-primary-light)"
                            text={isSubmitting ? "Sending..." : "Submit"}
                            disabled={isSubmitting}
                            hasIcon={!isSubmitting}
                        />
                    </div>
                </form>
            </div>
            <SuccessDialog
                isOpen={isSuccessDialogOpen}
                onClose={() => setIsSuccessDialogOpen(false)}
            />
        </div>
    );
};

export default ContactForm;