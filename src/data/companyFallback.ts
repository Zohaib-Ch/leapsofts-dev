import type { SanityAboutPage } from '../sanity/types';
import aboutFallbackJson from './aboutFallback.json';

export const DEFAULT_ABOUT_PAGE_DATA = aboutFallbackJson.aboutPage as unknown as SanityAboutPage;
export const DEFAULT_MISSION_PAGE_DATA = aboutFallbackJson.aboutMissionPage as unknown as SanityAboutPage;
export const DEFAULT_LEADERSHIP_PAGE_DATA = aboutFallbackJson.aboutLeadershipPage as unknown as SanityAboutPage;
export const DEFAULT_GLOBAL_PAGE_DATA = aboutFallbackJson.aboutGlobalPage as unknown as SanityAboutPage;
