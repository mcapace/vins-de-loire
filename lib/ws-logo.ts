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

/** Intrinsic aspect ratios (width ÷ height) from source PNGs. */
export const LOIRE_LOGO_ASPECT = 4228 / 2292;
export const WS_LOGO_ASPECT = 2607 / 706;

/** Wine Spectator wordmark cap height in lockups. */
export const COBRAND_WS_HEIGHT = {
  sm: 20,
  md: 26,
  lg: 34,
  xl: 42,
} as const;

/**
 * Loire PNG includes large clear space around the mark; scale up per breakpoint
 * so it reads equal to the WS wordmark (not just equal container height).
 */
export const LOIRE_OPTICAL_SCALE: Record<keyof typeof COBRAND_WS_HEIGHT, number> =
  {
    sm: 2.5,
    md: 2.3,
    lg: 2.2,
    xl: 2.05,
  };

export type CoBrandLogoSize = keyof typeof COBRAND_WS_HEIGHT;

export type CoBrandMetrics = {
  wsHeight: number;
  loireHeight: number;
  rowHeight: number;
  separatorPx: number;
  loireWidth: number;
  wsWidth: number;
};

export function getCoBrandMetrics(size: CoBrandLogoSize): CoBrandMetrics {
  const wsHeight = COBRAND_WS_HEIGHT[size];
  const loireHeight = Math.round(wsHeight * LOIRE_OPTICAL_SCALE[size]);
  const rowHeight = Math.max(loireHeight, wsHeight);

  return {
    wsHeight,
    loireHeight,
    rowHeight,
    separatorPx: Math.round(wsHeight * 0.4),
    loireWidth: Math.round(loireHeight * LOIRE_LOGO_ASPECT),
    wsWidth: Math.round(wsHeight * WS_LOGO_ASPECT),
  };
}

/** @deprecated Use COBRAND_WS_HEIGHT */
export const COBRAND_LOGO_HEIGHT = COBRAND_WS_HEIGHT;

/** @deprecated Use LOIRE_OPTICAL_SCALE */
export const LOIRE_LOGO_SCALE = LOIRE_OPTICAL_SCALE.lg;
