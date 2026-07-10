import { useEffect } from "react";

export function useScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();

    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    requestAnimationFrame(scrollToTop);

    const timers = [
      window.setTimeout(scrollToTop, 0),
      window.setTimeout(scrollToTop, 100),
      window.setTimeout(scrollToTop, 1700),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
