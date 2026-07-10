export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const transition = {
  fast: { duration: 0.2, ease: EASE_OUT },
  base: { duration: 0.35, ease: EASE_OUT },
  slow: { duration: 0.5, ease: EASE_OUT },
};
