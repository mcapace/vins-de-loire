/** Site-wide config for metadata, analytics, and absolute URLs */

export const siteName = "Vins de Loire";

export const siteTitle =
  "Loire Wines × Wine Spectator | Trade Portal";

export const siteDescription =
  "Discover Loire wines through this trade hub. Recent Wine Spectator ratings, regional resources, and tools for trade members.";

export const sponsorDisclosure =
  "Sponsored content presented by Vins de Loire";

/** Set in Vercel: NEXT_PUBLIC_SITE_URL (e.g. https://loire.winespectator.com) */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  return "https://vins-de-loire.vercel.app";
}

export const ogImagePath =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-47.jpg";

export const faviconPath =
  "/logos/Logo-Vins-de-Loire-Bleu/Logo-Vins-de-Loire-BLEU.png";

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
