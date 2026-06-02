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
    image: "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-28.jpg",
    href: "#manifesto",
    imageAlt: "Loire vineyard slopes along the river corridor",
  },
  {
    id: "grapes",
    category: "Know the wines",
    title: "Six expressions of one river",
    excerpt:
      "Chenin, Cabernet Franc, Sauvignon, Melon Blanc, rosé, and fines bulles: the identities trade professionals meet most on the list.",
    image: "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-35.jpg",
    href: "#grapes",
    imageAlt: "Sancerre-style Sauvignon Blanc vineyards in the Loire",
  },
  {
    id: "territories",
    category: "From ocean to volcano",
    title: "Four territories, one journey",
    excerpt:
      "From Atlantic freshness in the Nantais to inland depth in Centre-Loire, explore the Loire Océanique to the Loire Volcanique.",
    image: "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-46.jpg",
    href: "#territories",
    imageAlt: "Inland Loire vineyards toward the volcanic heart of France",
  },
];
