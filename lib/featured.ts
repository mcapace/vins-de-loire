import { siteImages } from "@/lib/site-images";

export type FeaturedCard = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  imageAlt: string;
};

export const featuredCards: FeaturedCard[] = [
  {
    id: "bridge",
    category: "The Loire",
    title: "Two millennia in the making",
    excerpt:
      "How the river shaped a bridge between UNESCO landscapes, singular terroirs, and wines of remarkable contrast.",
    image: siteImages.featured.bridge.src,
    href: "#manifesto",
    imageAlt: siteImages.featured.bridge.alt,
  },
  {
    id: "grapes",
    category: "Know the wines",
    title: "Six expressions of one river",
    excerpt:
      "Chenin, Cabernet Franc, Sauvignon, Melon Blanc, rosé, and fines bulles: the identities trade professionals meet most on the list.",
    image: siteImages.featured.grapes.src,
    href: "#grapes",
    imageAlt: siteImages.featured.grapes.alt,
  },
  {
    id: "territories",
    category: "From ocean to volcano",
    title: "Four territories, one journey",
    excerpt:
      "From Atlantic freshness in the Nantais to inland depth in Centre-Loire, explore the Loire Océanique to the Loire Volcanique.",
    image: siteImages.featured.territories.src,
    href: "#territories",
    imageAlt: siteImages.featured.territories.alt,
  },
];
