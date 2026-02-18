import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook that uses CSS classes — NOT inline styles.
 * This means theme re-renders can never reset a card back to hidden.
 *
 * Usage:
 *   const reveal = useScrollReveal();
 *   <div ref={reveal(0)}>   ← 0 is stagger index
 */
export function useScrollReveal(threshold = 0.07) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("sr-hidden");
            e.target.classList.add("sr-visible");
            observer.current?.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    return () => observer.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Returns a stable ref-callback for a stagger index.
   * Guards:
   *  - null cleanup calls are ignored
   *  - already-visible elements are never touched
   *  - already-hidden+observed elements are not re-registered
   */
  function ref(index = 0) {
    return (el: HTMLElement | null) => {
      if (!el) return;
      // Already animated in — never touch it again
      if (el.classList.contains("sr-visible")) return;
      // Already set up — just make sure observer has it
      if (el.classList.contains("sr-hidden")) {
        if (observer.current) observer.current.observe(el);
        return;
      }
      // First time seeing this element
      el.classList.add("sr-hidden");
      el.style.transitionDelay = `${index * 0.09}s`;
      if (observer.current) observer.current.observe(el);
    };
  }

  return ref;
}
