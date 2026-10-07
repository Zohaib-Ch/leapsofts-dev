export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

export interface CookieConsentState {
  hasAnswered: boolean;
  preferences: CookiePreferences;
  timestamp: string | null;
}

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  functional: true,
};

export const ESSENTIAL_ONLY_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
};

const COOKIE_NAME = 'leapsofts_consent';
const STORAGE_KEY = 'leapsofts_cookie_consent';
const ONE_YEAR_SECONDS = 31536000; // 365 days

/**
 * Parses client-side document.cookie string for our consent cookie
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

/**
 * Sets a persistent secure cookie
 */
function setCookie(name: string, value: string, maxAgeSeconds: number): void {
  if (typeof document === 'undefined') return;
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const cookieStr = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax${isSecure ? '; Secure' : ''}`;
  document.cookie = cookieStr;
}

/**
 * Retrieves the user's stored cookie consent from Cookie or LocalStorage
 */
export function getStoredConsent(): CookieConsentState {
  if (typeof window === 'undefined') {
    return {
      hasAnswered: false,
      preferences: DEFAULT_PREFERENCES,
      timestamp: null,
    };
  }

  try {
    // 1. Check Cookie first
    const cookieVal = getCookie(COOKIE_NAME);
    if (cookieVal) {
      const parsed = JSON.parse(cookieVal);
      if (parsed && typeof parsed.necessary === 'boolean') {
        return {
          hasAnswered: true,
          preferences: {
            necessary: true,
            analytics: Boolean(parsed.analytics),
            functional: Boolean(parsed.functional),
          },
          timestamp: parsed.timestamp || null,
        };
      }
    }

    // 2. Check localStorage fallback
    const storageVal = localStorage.getItem(STORAGE_KEY);
    if (storageVal) {
      const parsed = JSON.parse(storageVal);
      if (parsed && typeof parsed.necessary === 'boolean') {
        return {
          hasAnswered: true,
          preferences: {
            necessary: true,
            analytics: Boolean(parsed.analytics),
            functional: Boolean(parsed.functional),
          },
          timestamp: parsed.timestamp || null,
        };
      }
    }
  } catch (error) {
    console.warn('Failed to parse stored cookie consent:', error);
  }

  return {
    hasAnswered: false,
    preferences: DEFAULT_PREFERENCES,
    timestamp: null,
  };
}

/**
 * Persists user cookie consent to both Cookie and LocalStorage
 */
export function saveConsent(preferences: CookiePreferences): void {
  const timestamp = new Date().toISOString();
  const stateToStore = {
    necessary: true,
    analytics: Boolean(preferences.analytics),
    functional: Boolean(preferences.functional),
    timestamp,
  };

  const jsonStr = JSON.stringify(stateToStore);

  try {
    // Save to 1-year persistent cookie
    setCookie(COOKIE_NAME, jsonStr, ONE_YEAR_SECONDS);
  } catch (error) {
    console.warn('Failed to set consent cookie:', error);
  }

  try {
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, jsonStr);
  } catch (error) {
    console.warn('Failed to save consent in localStorage:', error);
  }
}
