import { siteImages } from "@/lib/site-images";

/** Site-wide config for metadata, analytics, and absolute URLs */

export const siteName = "Vins de Loire";

export const siteTitle = "The Wines of a Lifetime | Wine Spectator";

export const siteDescription =
  "From the Loire Océanique to the Loire Volcanique: discover Loire wines with Wine Spectator ratings, regional resources, and trade tools.";

export const sponsorDisclosure =
  "Sponsored content presented by Vins de Loire";

/** Set in Vercel: NEXT_PUBLIC_SITE_URL (e.g. https://loire.winespectator.com) */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  return "https://vins-de-loire.vercel.app";
}

export const ogImagePath =
  siteImages.hero.src;

export const faviconPath =
  "/logos/Logo-Vins-de-Loire-Bleu/Logo-Vins-de-Loire-BLEU.png";

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
