import { useEffect, useRef } from "react";

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
      },
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
// import { useEffect, useRef } from "react";

type AnimationVariant =
  | "fadeUp" // default: fade + slide up
  | "fadeLeft" // slide in from the right
  | "fadeRight" // slide in from the left
  | "scaleUp" // scale from 96% + fade
  | "revealLine" // for decorative horizontal lines
  | "staggerChild" // used on parent; children animate in sequence
  | "countUp"; // number counter animation

interface ScrollAnimationOptions {
  variant?: AnimationVariant;
  delay?: number; // ms delay before animation starts
  duration?: number; // ms
  threshold?: number; // 0–1, how much of element must be visible
  once?: boolean; // only animate once (default: true)
}

// ─── Keyframe definitions injected once into <head> ─────────────────────────
const KEYFRAMES = `
@keyframes sa-fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes sa-fadeLeft {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes sa-fadeRight {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes sa-scaleUp {
  from { opacity: 0; transform: scale(0.96) translateY(16px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
}
@keyframes sa-revealLine {
  from { transform: scaleX(0); transform-origin: left; }
  to   { transform: scaleX(1); transform-origin: left; }
}
@keyframes sa-staggerChild {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes sa-countUp {
  from { opacity: 0; transform: translateY(10px) scale(0.9); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
}

/* Base hidden state — applied by JS before animation */
.sa-hidden {
  opacity: 0;
}
.sa-line-hidden {
  transform: scaleX(0);
  transform-origin: left;
}

/* Stagger children */
.sa-stagger > * {
  opacity: 0;
  transform: translateY(20px);
}
.sa-stagger.sa-done > * {
  animation: sa-staggerChild 0.55s cubic-bezier(0.16,1,0.3,1) both;
}
.sa-stagger.sa-done > *:nth-child(1)  { animation-delay: 0ms; }
.sa-stagger.sa-done > *:nth-child(2)  { animation-delay: 80ms; }
.sa-stagger.sa-done > *:nth-child(3)  { animation-delay: 160ms; }
.sa-stagger.sa-done > *:nth-child(4)  { animation-delay: 240ms; }
.sa-stagger.sa-done > *:nth-child(5)  { animation-delay: 320ms; }
.sa-stagger.sa-done > *:nth-child(6)  { animation-delay: 400ms; }
.sa-stagger.sa-done > *:nth-child(7)  { animation-delay: 480ms; }
.sa-stagger.sa-done > *:nth-child(8)  { animation-delay: 560ms; }
.sa-stagger.sa-done > *:nth-child(n+9){ animation-delay: 640ms; }
`;

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.setAttribute("data-sa", "1");
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
  stylesInjected = true;
}

// ─── Animation config per variant ───────────────────────────────────────────
function getAnimationCSS(
  variant: AnimationVariant,
  duration: number,
  delay: number,
): string {
  const ease = "cubic-bezier(0.16,1,0.3,1)";
  const d = `${duration}ms`;
  const dl = `${delay}ms`;

  const map: Record<AnimationVariant, string> = {
    fadeUp: `sa-fadeUp      ${d} ${ease} ${dl} both`,
    fadeLeft: `sa-fadeLeft    ${d} ${ease} ${dl} both`,
    fadeRight: `sa-fadeRight   ${d} ${ease} ${dl} both`,
    scaleUp: `sa-scaleUp     ${d} ${ease} ${dl} both`,
    revealLine: `sa-revealLine  ${d} ${ease} ${dl} both`,
    staggerChild: `sa-staggerChild${d} ${ease} ${dl} both`,
    countUp: `sa-countUp     ${d} ${ease} ${dl} both`,
  };

  return map[variant];
}

// ─── Main hook ───────────────────────────────────────────────────────────────
/**
 * useScrollAnimations — drop-in replacement / upgrade for useScrollReveal
 * in the Professional view.
 *
 * Usage:
 *   const anim = useScrollAnimations();
 *
 *   // basic (fadeUp by default):
 *   <div ref={anim()}>…</div>
 *
 *   // with options:
 *   <div ref={anim({ variant: "fadeLeft", delay: 120 })}>…</div>
 *
 *   // stagger children (attach to parent):
 *   <div ref={anim({ variant: "staggerChild" })}>
 *     <div>child 1</div>
 *     <div>child 2</div>
 *   </div>
 */
export function useScrollAnimations() {
  const observer = useRef<IntersectionObserver | null>(null);
  const registered = useRef<Map<Element, () => void>>(new Map());

  useEffect(() => {
    injectStyles();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = registered.current.get(entry.target);
            if (cb) {
              cb();
              observer.current?.unobserve(entry.target);
              registered.current.delete(entry.target);
            }
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    // Observe anything registered before effect ran
    registered.current.forEach((_, el) => observer.current?.observe(el));

    // Fallback: force-show after 1.5 s (Vercel CDN / deep-link guard)
    const fallback = setTimeout(() => {
      registered.current.forEach((cb) => cb());
      registered.current.clear();
    }, 1500);

    return () => {
      observer.current?.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  /**
   * Returns a ref-callback. Call it with optional options.
   */
  function anim(options: ScrollAnimationOptions = {}) {
    const {
      variant = "fadeUp",
      delay = 0,
      duration = 600,
      threshold: _threshold,
      once: _once,
    } = options;

    return (el: HTMLElement | null) => {
      if (!el) return;
      if (el.dataset.saAttached) return; // already wired up
      el.dataset.saAttached = "1";

      if (variant === "staggerChild") {
        // Parent gets .sa-stagger; children animate via CSS
        el.classList.add("sa-stagger");
        const trigger = () => {
          el.classList.add("sa-done");
        };
        registered.current.set(el, trigger);
        observer.current?.observe(el);
        return;
      }

      if (variant === "revealLine") {
        el.classList.add("sa-line-hidden");
        const trigger = () => {
          el.style.animation = getAnimationCSS(variant, duration, delay);
        };
        registered.current.set(el, trigger);
        observer.current?.observe(el);
        return;
      }

      // All other variants
      el.classList.add("sa-hidden");
      const trigger = () => {
        el.classList.remove("sa-hidden");
        el.style.animation = getAnimationCSS(variant, duration, delay);
      };
      registered.current.set(el, trigger);
      observer.current?.observe(el);
    };
  }

  return anim;
}
