import { useEffect, useMemo, useState } from "react";

/**
 * Very light "scroll into view" reveal.
 * Uses IntersectionObserver and adds "is-visible" class.
 */
export function useRevealOnScroll({ rootMargin = "0px 0px -10% 0px" } = {}) {
  const [hasIO, setHasIO] = useState(true);

  const observerOptions = useMemo(
    () => ({ root: null, rootMargin, threshold: 0.15 }),
    [rootMargin]
  );

  useEffect(() => {
    // If IntersectionObserver is unavailable, just show everything.
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasIO(false);
      return;
    }
    setHasIO(true);
  }, []);

  useEffect(() => {
    if (!hasIO) return;

    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    }, observerOptions);

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [hasIO, observerOptions]);

  return { hasIO };
}
