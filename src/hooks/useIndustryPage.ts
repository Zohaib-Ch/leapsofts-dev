import { useState, useEffect } from 'react';
import { getSanityIndustryBySlug } from '../sanity/queries';
import type { SanityIndustry } from '../sanity/types';

export function useIndustryPage(slug: string) {
  const [data, setData] = useState<SanityIndustry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    let intervalId: any = null;

    const fetchIndustry = () => {
      getSanityIndustryBySlug(slug)
        .then((res) => {
          if (isMounted) {
            if (res) {
              setData((prev) => {
                if (JSON.stringify(prev) !== JSON.stringify(res)) {
                  return res;
                }
                return prev;
              });
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err);
            setLoading(false);
          }
        });
    };

    fetchIndustry();

    // Auto-poll every 3 seconds in dev mode so Sanity Studio edits reflect immediately
    if (import.meta.env.DEV) {
      intervalId = setInterval(fetchIndustry, 3000);
    }

    return () => {
      isMounted = false;
      if (intervalId) clearInterval(intervalId);
    };
  }, [slug]);

  return { data, loading, error };
}
