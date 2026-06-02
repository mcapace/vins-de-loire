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
 * Loire PNG has padding; slight bump over WS cap height. Keep close to 1.x so
 * flex center alignment keeps both wordmarks on one optical line.
 */
export const LOIRE_OPTICAL_SCALE: Record<keyof typeof COBRAND_WS_HEIGHT, number> =
  {
    sm: 1.3,
    md: 1.28,
    lg: 1.26,
    xl: 1.24,
  };

/** Fine-tune vertical centering (px) after items-center layout. */
export const LOIRE_OFFSET_Y: Record<keyof typeof COBRAND_WS_HEIGHT, number> = {
  sm: -1,
  md: -1,
  lg: -2,
  xl: -2,
};

export const WS_OFFSET_Y: Record<keyof typeof COBRAND_WS_HEIGHT, number> = {
  sm: 0,
  md: 0,
  lg: 1,
  xl: 1,
};

export type CoBrandLogoSize = keyof typeof COBRAND_WS_HEIGHT;

export type CoBrandMetrics = {
  wsHeight: number;
  loireHeight: number;
  separatorPx: number;
  loireWidth: number;
  wsWidth: number;
  loireOffsetY: number;
  wsOffsetY: number;
};

export function getCoBrandMetrics(size: CoBrandLogoSize): CoBrandMetrics {
  const wsHeight = COBRAND_WS_HEIGHT[size];
  const loireHeight = Math.round(wsHeight * LOIRE_OPTICAL_SCALE[size]);

  return {
    wsHeight,
    loireHeight,
    separatorPx: Math.round(wsHeight * 0.38),
    loireWidth: Math.round(loireHeight * LOIRE_LOGO_ASPECT),
    wsWidth: Math.round(wsHeight * WS_LOGO_ASPECT),
    loireOffsetY: LOIRE_OFFSET_Y[size],
    wsOffsetY: WS_OFFSET_Y[size],
  };
}

/** @deprecated Use COBRAND_WS_HEIGHT */
export const COBRAND_LOGO_HEIGHT = COBRAND_WS_HEIGHT;

/** @deprecated Use LOIRE_OPTICAL_SCALE */
export const LOIRE_LOGO_SCALE = LOIRE_OPTICAL_SCALE.lg;
