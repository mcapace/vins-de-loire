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

/** Shared cap-height for Vins de Loire × Wine Spectator lockups (both marks use the same px height). */
export const COBRAND_LOGO_HEIGHT = {
  sm: 24,
  md: 28,
  lg: 32,
} as const;

export type CoBrandLogoSize = keyof typeof COBRAND_LOGO_HEIGHT;
