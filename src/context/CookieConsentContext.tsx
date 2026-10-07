import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  type CookiePreferences,
  type CookieConsentState,
  DEFAULT_PREFERENCES,
  ESSENTIAL_ONLY_PREFERENCES,
  getStoredConsent,
  saveConsent,
} from '../utils/cookieConsent';

interface CookieConsentContextType {
  hasAnswered: boolean;
  preferences: CookiePreferences;
  isBannerOpen: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  acceptEssentialOnly: () => void;
  saveCustomPreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentState, setConsentState] = useState<CookieConsentState>({
    hasAnswered: true, // Default to true initially to prevent SSR hydration flicker
    preferences: DEFAULT_PREFERENCES,
    timestamp: null,
  });
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Read stored consent once mounted in browser
    const stored = getStoredConsent();
    setConsentState(stored);
    if (!stored.hasAnswered) {
      // Small delay for smooth entry animation after page load
      const timer = setTimeout(() => {
        setIsBannerOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(DEFAULT_PREFERENCES);
    setConsentState({
      hasAnswered: true,
      preferences: DEFAULT_PREFERENCES,
      timestamp: new Date().toISOString(),
    });
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  }, []);

  const acceptEssentialOnly = useCallback(() => {
    saveConsent(ESSENTIAL_ONLY_PREFERENCES);
    setConsentState({
      hasAnswered: true,
      preferences: ESSENTIAL_ONLY_PREFERENCES,
      timestamp: new Date().toISOString(),
    });
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  }, []);

  const saveCustomPreferences = useCallback((customPrefs: CookiePreferences) => {
    const verified: CookiePreferences = {
      necessary: true,
      analytics: Boolean(customPrefs.analytics),
      functional: Boolean(customPrefs.functional),
    };
    saveConsent(verified);
    setConsentState({
      hasAnswered: true,
      preferences: verified,
      timestamp: new Date().toISOString(),
    });
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const closeBanner = useCallback(() => {
    setIsBannerOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        hasAnswered: consentState.hasAnswered,
        preferences: consentState.preferences,
        isBannerOpen,
        isSettingsOpen,
        acceptAll,
        acceptEssentialOnly,
        saveCustomPreferences,
        openSettings,
        closeSettings,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    return {
      hasAnswered: true,
      preferences: DEFAULT_PREFERENCES,
      isBannerOpen: false,
      isSettingsOpen: false,
      acceptAll: () => {},
      acceptEssentialOnly: () => {},
      saveCustomPreferences: () => {},
      openSettings: () => {},
      closeSettings: () => {},
      closeBanner: () => {},
    };
  }
  return context;
};
