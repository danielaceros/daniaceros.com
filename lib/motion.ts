/**
 * Shared motion config — smooth, cinematic, minimal.
 * Use across all Framer Motion components for consistent feel.
 */

export const ease = {
  expo: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
  quart: [0.25, 1, 0.5, 1] as const,
}

export const t = {
  fast: { duration: 0.28, ease: ease.expo },
  base: { duration: 0.5, ease: ease.expo },
  slow: { duration: 0.78, ease: ease.expo },
  slower: { duration: 1.05, ease: ease.expo },
}

export const stagger = {
  tight: 0.05,
  normal: 0.1,
  relaxed: 0.14,
  slow: 0.18,
}

export const viewport = {
  once: true,
  margin: "-60px",
  amount: 0.2,
}
