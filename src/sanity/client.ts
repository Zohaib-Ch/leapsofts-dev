import { createClient } from '@sanity/client';

export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || '5bp8m1pc';
export const sanityDataset = import.meta.env.VITE_SANITY_DATASET || 'production';
export const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-03-01';
export const sanityToken = import.meta.env.VITE_SANITY_READ_TOKEN;

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false, // Instant updates without CDN caching delay
  token: sanityToken,
  perspective: 'previewDrafts', // Enables viewing draft changes live on the site before clicking publish
});
