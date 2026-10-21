import React, { createContext, useContext, useEffect, useState } from 'react';
import { getStoredConsent } from '../utils/cookieConsent';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'leapsofts-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    const canUseStorage = !consent.hasAnswered || consent.preferences.functional;

    if (consent.hasAnswered && !consent.preferences.functional) {
      try {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } catch {
        // Ignore
      }
      setThemeState('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      const currentAttr = document.documentElement.getAttribute('data-theme') as Theme;
      const stored = canUseStorage ? (localStorage.getItem(THEME_STORAGE_KEY) as Theme) : null;
      const initialTheme: Theme = stored || currentAttr || 'light';

      setThemeState(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
    setMounted(true);

    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      if (!customEvent.detail) {
        // Functional preferences rejected
        try {
          localStorage.removeItem(THEME_STORAGE_KEY);
        } catch {
          // Ignore
        }
        setThemeState('light');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };

    window.addEventListener('functional-consent-changed', handleConsentChange);
    return () => window.removeEventListener('functional-consent-changed', handleConsentChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    const consent = getStoredConsent();
    const canUseStorage = !consent.hasAnswered || consent.preferences.functional;
    if (canUseStorage) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      } catch {
        // Ignore localStorage errors in private browsing
      }
    } else {
      try {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return safe fallback if rendered outside provider
    return {
      theme: 'light',
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
};
