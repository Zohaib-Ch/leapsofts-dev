import React, { useState, useMemo, useEffect } from "react";
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
}

const ContactForm: React.FC<ContactFormProps> = ({ isSticky = false }) => {
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

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const now = new Date();
    const projectDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
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
            const body: mailBody = {
                name: formData.firstName + " " + formData.lastName,
                email: formData.email,
                phone: `${selectedCountry?.code} ${formData.phone}`,
                company: formData.company,
                message: formData.message,
            };
            console.log(body)
            await sendMail(body);
            console.log("Form submitted:", formData);
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
        }
    };

    useEffect(() => {
        console.log('errors:', errors);
    }, [errors]);

    return (
        <div className={`${styles.contactSection} ${isSticky ? styles.stickyVariant : ''}`}>
            {!isSticky && (
                <div className={styles.headerSection}>
                    <div className={styles.headerContent}>
                        <h2 className={styles.headline}>
                            Succeed <span className={styles.accent}>faster</span> with Leapsofts
                        </h2>
                        <p className={styles.subtitle}>
                            If you submit a request today, your MVP will be ready as early as{' '}
                            <span className={styles.dateHighlight}>
                                {projectDate.getDate()}{' '}
                                {projectDate.toLocaleDateString('en-GB', { month: 'long' })},{' '}
                                {projectDate.getFullYear()}
                            </span>
                        </p>
                    </div>
                    <div className={styles.arrowContainer}>
                        <img
                            src="/icons/arrow-with-plume-pink.svg"
                            alt="Arrow decoration"
                            className={styles.arrow}
                        />
                    </div>
                </div>
            )}
            <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGrid}>
                    {/* First Name */}
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>
                            First name
                        </label>
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
                        <label htmlFor="lastName" className={styles.label}>
                            Last name
                        </label>
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

                    {/* Email */}
                    <div className={`${styles.formGroup} ${isSticky ? styles.fullWidth : ''}`}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
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

                    {/* Phone Number */}
                    <div className={`${styles.formGroup} ${isSticky ? styles.fullWidth : ''}`}>
                        <label htmlFor="phone" className={styles.label}>
                            Phone number
                        </label>
                        <div className={`${styles.phoneGroup} ${errors.phone && touched.phone ? styles.phoneGroupError : ""}`}>
                            <div className={styles.countrySelectWrapper}>
                                <select
                                    name="countryCode"
                                    className={styles.countrySelect}
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                >
                                    {(countryPhonePatterns as CountryPattern[]).map((country) => (
                                        <option key={country.iso2} value={country.iso2}>
                                            {country.country}
                                        </option>
                                    ))}
                                </select>
                                <span className={styles.countryCodeDisplay}>
                                    {selectedCountry?.iso2 + " " + selectedCountry?.code}
                                </span>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={`${styles.input} ${styles.phoneInput}`}
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

                    {/* Company */}
                    <div className={`${styles.formGroup} ${isSticky ? styles.fullWidth : ''}`}>
                        <label htmlFor="company" className={styles.label}>
                            Company
                        </label>
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
                        <label htmlFor="message" className={styles.label}>
                            Message
                        </label>
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
                        I consent to Leapsofts processing my personal data as described in the{" "}
                        <a href="/privacy-policy">Privacy Policy</a>.
                    </label>
                </div>
                {errors.consent && touched.consent && (
                    <span className={styles.errorMessage}>{errors.consent}</span>
                )}

                <div className="flex" style={{ marginTop: isSticky ? "1.5rem" : "4rem" }}>
                    <Button
                        color1='var(--color-orange)'
                        color2='#cc7536'
                        text='Submit'
                        hasIcon={true}
                    />
                </div>
            </form>
            <SuccessDialog
                isOpen={isSuccessDialogOpen}
                onClose={() => setIsSuccessDialogOpen(false)}
            />
        </div>
    );
};

export default ContactForm;