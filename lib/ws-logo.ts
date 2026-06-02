/**
 * Wine Spectator logo assets (aligned with ws-napa-guide / VNV hub pattern).
 *
 * | File | Use |
 * |------|-----|
 * | wine-spectator-primary.png | UI only: black wordmark, transparent PNG. Invert on dark backgrounds. |
 * | wine-spectator-white.png | Do not use in UI: baked-in black rectangle (social/export asset). |
 */

export const WS_LOGO_PRIMARY_SRC =
  "/logos/wine-spectator/wine-spectator-primary.png";

/** Wine Spectator wordmark height in lockups. */
export const COBRAND_LOGO_HEIGHT = {
  sm: 24,
  md: 28,
  lg: 32,
} as const;

/**
 * Loire PNG has generous padding; scale up so it reads equal to the WS wordmark.
 * (Visit Napa Valley hub uses a slightly taller partner mark than WS.)
 */
export const LOIRE_LOGO_SCALE = 1.55;

export type CoBrandLogoSize = keyof typeof COBRAND_LOGO_HEIGHT;
