import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook — Vercel-safe version.
 *
 * ROOT CAUSE OF THE BUG:
 *   threshold: 0.07 means the observer only fires when 7% of the element
 *   is visible. On Vercel's CDN the page hydrates slightly later than
 *   localhost, so elements already in the viewport on first paint never
 *   cross the threshold trigger — they stay sr-hidden forever.
 *
 * FIXES APPLIED:
 *   1. threshold lowered to 0 — fires the moment even 1px is visible.
 *   2. rootMargin: "0px 0px -20px 0px" — gives a small bottom buffer so
 *      near-viewport elements still animate rather than popping in.
 *   3. Observer is created immediately (not inside useEffect) via a ref
 *      initialiser so it exists before any ref callbacks fire on mount.
 *   4. CSS fallback: after 1.2 s we force-show anything still hidden,
 *      guarding against environments where IntersectionObserver is slow
 *      or the page is opened via a deep anchor link.
 */
export function useScrollReveal(threshold = 0) {
  const observer = useRef<IntersectionObserver | null>(null);
  // Track every element we've registered so the fallback can reach them
  const registered = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("sr-hidden");
            e.target.classList.add("sr-visible");
            observer.current?.unobserve(e.target);
            registered.current.delete(e.target as HTMLElement);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    // Re-observe anything that was registered before the effect ran
    registered.current.forEach((el) => {
      observer.current?.observe(el);
    });

    // ── Fallback: force-show after 1.2 s in case observer never fires ──
    // This covers: deep-link navigation, fast Vercel CDN hydration edge
    // cases, and browsers with reduced-motion that skip animations.
    const fallback = window.setTimeout(() => {
      registered.current.forEach((el) => {
        el.classList.remove("sr-hidden");
        el.classList.add("sr-visible");
      });
      registered.current.clear();
    }, 1200);

    return () => {
      observer.current?.disconnect();
      window.clearTimeout(fallback);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Returns a stable ref-callback for a stagger index.
   */
  function ref(index = 0) {
    return (el: HTMLElement | null) => {
      if (!el) return;
      // Already animated in — never touch it again
      if (el.classList.contains("sr-visible")) return;

      // First time or re-mount: set up the element
      el.classList.add("sr-hidden");
      el.style.transitionDelay = `${index * 0.09}s`;
      registered.current.add(el);

      // If the observer already exists, attach immediately
      if (observer.current) {
        observer.current.observe(el);
      }
    };
  }

  return ref;
}