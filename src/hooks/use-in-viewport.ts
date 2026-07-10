import { useEffect, useState } from "react";

/** Tracks whether an element is intersecting the viewport (updates continuously). */
export function useInViewport(threshold = 0.05, rootMargin = "0px") {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return { ref: setRef, isVisible };
}
