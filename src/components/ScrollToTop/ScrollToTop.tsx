import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating to a specific in-page anchor (e.g. #faq), scroll to it
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Temporarily disable global CSS smooth-scroll to prevent sluggish transitions
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    html.scrollTop = 0;

    // Double-check on next animation frame after DOM paint/hydration
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      html.scrollTop = 0;
      html.style.scrollBehavior = prevBehavior;
    });

    return () => {
      cancelAnimationFrame(rafId);
      html.style.scrollBehavior = prevBehavior;
    };
  }, [location.pathname, location.key]);

  return null;
};

export default ScrollToTop;
