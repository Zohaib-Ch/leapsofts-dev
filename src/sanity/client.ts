import { createClient } from '@sanity/client';

export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const sanityDataset = import.meta.env.VITE_SANITY_DATASET || 'production';
export const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-03-01';
export const sanityToken = import.meta.env.VITE_SANITY_READ_TOKEN;

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: !import.meta.env.DEV, // Bypass CDN in dev mode so Sanity updates reflect immediately
  token: sanityToken,
  perspective: 'raw', // Return both draft and published updates matching GROQ queries
});
