import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ShieldCheck, Cookie, Settings2, X, Check } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './CookieBanner.module.css';

export const CookieBanner: React.FC = () => {
  const {
    isBannerOpen,
    isSettingsOpen,
    preferences,
    acceptAll,
    acceptEssentialOnly,
    saveCustomPreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  // Local state for the settings modal toggles
  const [analyticsEnabled, setAnalyticsEnabled] = useState(preferences.analytics);
  const [functionalEnabled, setFunctionalEnabled] = useState(preferences.functional);

  // Sync state whenever modal opens or preferences change
  useEffect(() => {
    setAnalyticsEnabled(preferences.analytics);
    setFunctionalEnabled(preferences.functional);
  }, [preferences, isSettingsOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSettingsOpen) {
        closeSettings();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, closeSettings]);

  const handleSaveCustom = () => {
    saveCustomPreferences({
      necessary: true,
      analytics: analyticsEnabled,
      functional: functionalEnabled,
    });
  };

  return (
    <>
      {/* 1. Minimalist Floating Banner */}
      {isBannerOpen && !isSettingsOpen && (
        <aside
          className={styles.bannerContainer}
          aria-label="Cookie consent banner"
          role="region"
        >
          <div className={styles.bannerContent}>
            <p className={styles.bannerText}>
              We use cookies to understand how our site is used and improve your experience. Analytics cookies are only set if you accept.
            </p>
            <Link to="/privacy-policy" className={styles.privacyLink}>
              Privacy policy
            </Link>
          </div>

          <div className={styles.bannerActions}>
            <button
              type="button"
              className={styles.btnDecline}
              onClick={acceptEssentialOnly}
            >
              Decline
            </button>

            <button
              type="button"
              className={styles.btnAccept}
              onClick={acceptAll}
            >
              Accept
            </button>
          </div>
        </aside>
      )}

      {/* 2. Granular Settings Modal */}
      {isSettingsOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={closeSettings}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={22} color="var(--color-primary-light)" />
                <h2 id="cookie-settings-title" className={styles.modalTitle}>
                  Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={closeSettings}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>
                Customize which cookies you wish to allow. Essential cookies are required for core security, routing, and proper functioning of the site and cannot be disabled.
              </p>

              {/* Necessary Category */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryTop}>
                  <div className={styles.categoryTitleGroup}>
                    <h4 className={styles.categoryTitle}>Strictly Necessary Cookies</h4>
                    <span className={styles.badgeRequired}>Always Active</span>
                  </div>
                  <label className={styles.switchToggle}>
                    <input type="checkbox" checked disabled />
                    <span className={styles.slider} />
                  </label>
                </div>
                <p className={styles.categoryDesc}>
                  Essential for website security, user authentication, session persistence, and server routing.
                </p>
              </div>

              {/* Analytics Category */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryTop}>
                  <div className={styles.categoryTitleGroup}>
                    <h4 className={styles.categoryTitle}>Analytics & Performance</h4>
                  </div>
                  <label className={styles.switchToggle}>
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      aria-label="Toggle analytics cookies"
                    />
                    <span className={styles.slider} />
                  </label>
                </div>
                <p className={styles.categoryDesc}>
                  Collects anonymous interaction metrics and performance telemetry (e.g. Vercel Analytics) to help us diagnose issues and optimize page loads.
                </p>
              </div>

              {/* Functional Category */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryTop}>
                  <div className={styles.categoryTitleGroup}>
                    <h4 className={styles.categoryTitle}>Functional & Preferences</h4>
                  </div>
                  <label className={styles.switchToggle}>
                    <input
                      type="checkbox"
                      checked={functionalEnabled}
                      onChange={(e) => setFunctionalEnabled(e.target.checked)}
                      aria-label="Toggle functional cookies"
                    />
                    <span className={styles.slider} />
                  </label>
                </div>
                <p className={styles.categoryDesc}>
                  Remembers your interface customizations, such as theme selections (dark/light mode) and interactive tool configurations.
                </p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.btnEssential}
                onClick={closeSettings}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.btnSavePrefs}
                onClick={handleSaveCustom}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
