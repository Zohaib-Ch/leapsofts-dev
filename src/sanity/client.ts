import { createClient } from '@sanity/client';

const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : process.env;

export const sanityProjectId = env.VITE_SANITY_PROJECT_ID || 'egqy3ztp';
export const sanityDataset = env.VITE_SANITY_DATASET || 'production';
export const sanityApiVersion = env.VITE_SANITY_API_VERSION || '2024-03-01';
export const sanityToken = env.VITE_SANITY_READ_TOKEN;

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: env.DEV ? false : true, // Bypass CDN in dev mode so Sanity updates reflect immediately
  token: sanityToken,
  perspective: 'raw', // Return both draft and published updates matching GROQ queries
});
