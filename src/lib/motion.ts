import { gsap, ScrollTrigger } from './gsap';

export interface ScrollSceneOptions {
  trigger: HTMLElement | string;
  pin?: boolean;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  onUpdate?: (progress: number) => void;
  onEnter?: () => void;
  onLeave?: () => void;
}

export const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Creates a clip-path mask reveal synchronized with scroll progress.
 * Uses native sticky positioning for rock-solid stability.
 */
export const createClipPathReveal = (
  triggerEl: HTMLElement,
  afterImageEl: HTMLElement,
  dividerEl: HTMLElement | null,
  onProgress?: (pct: number) => void
) => {
  if (typeof window === 'undefined') return null;

  gsap.registerPlugin(ScrollTrigger);

  const updateRevealProgress = (progressPct: number) => {
    const clamped = Math.max(0, Math.min(100, progressPct));
    const polygonStr = `polygon(0% 0%, ${clamped}% 0%, ${clamped}% 100%, 0% 100%)`;

    afterImageEl.style.clipPath = polygonStr;
    (afterImageEl.style as any).webkitClipPath = polygonStr;

    if (dividerEl) {
      dividerEl.style.left = `${clamped}%`;
    }
    onProgress?.(clamped);
  };

  // Initial state: 0% revealed
  updateRevealProgress(0);

  if (isReducedMotion()) {
    updateRevealProgress(100);
    return null;
  }

  const ST = ScrollTrigger.create({
    trigger: triggerEl,
    start: 'top top+=72',
    end: 'bottom bottom',
    scrub: 0.3,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      updateRevealProgress(self.progress * 100);
    },
  });

  return { ScrollTrigger: ST, updateRevealProgress };
};
