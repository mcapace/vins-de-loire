import { siteImages } from "@/lib/site-images";

export type Territory = {
  name: string;
  descriptor: string;
  image: string;
  imageAlt: string;
};

export const territories: Territory[] = [
  {
    name: "Nantais",
    descriptor: "Atlantic freshness, Melon Blanc, shellfish country",
    image: siteImages.territories.nantais.src,
    imageAlt: siteImages.territories.nantais.alt,
  },
  {
    name: "Anjou-Saumur",
    descriptor: "Chenin, Cabernet Franc, noble sweet and dry",
    image: siteImages.territories.anjouSaumur.src,
    imageAlt: siteImages.territories.anjouSaumur.alt,
  },
  {
    name: "Touraine",
    descriptor: "Sancerre, Vouvray, Chinon, the classic heart",
    image: siteImages.territories.touraine.src,
    imageAlt: siteImages.territories.touraine.alt,
  },
  {
    name: "Centre-Loire",
    descriptor: "Inland depth toward the Loire Volcanique",
    image: siteImages.territories.centreLoire.src,
    imageAlt: siteImages.territories.centreLoire.alt,
  },
];
