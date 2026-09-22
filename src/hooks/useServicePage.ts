import { useState, useEffect } from 'react';
import { getSanityServiceBySlug } from '../sanity/queries';
import type { SanityService } from '../sanity/types';

export function useServicePage(slug: string) {
  const [data, setData] = useState<SanityService | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    let intervalId: any = null;

    const fetchService = () => {
      getSanityServiceBySlug(slug)
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

    fetchService();

    // Auto-poll every 3 seconds in dev mode so Sanity Studio edits reflect immediately
    if (import.meta.env.DEV) {
      intervalId = setInterval(fetchService, 3000);
    }

    return () => {
      isMounted = false;
      if (intervalId) clearInterval(intervalId);
    };
  }, [slug]);

  return { data, loading, error };
}
