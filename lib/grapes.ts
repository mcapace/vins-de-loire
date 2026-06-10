import { siteImages } from "@/lib/site-images";

export type GrapeCard = {
  name: string;
  description: string;
  heartland: string;
  image: string;
  imageAlt: string;
};

export const grapeCards: GrapeCard[] = [
  {
    name: "Chenin Blanc",
    description:
      "From bone-dry to luscious sweet, Chenin is the Loire's most versatile white. Honeyed depth, vibrant acidity, and remarkable ageability.",
    heartland: "Anjou, Saumur, Touraine (Vouvray, Savennières)",
    image: siteImages.grapes.chenin.src,
    imageAlt: siteImages.grapes.chenin.alt,
  },
  {
    name: "Cabernet Franc",
    description:
      "Loire is the world's leading region for Cabernet Franc. Silky tannins, violet and graphite notes, from crunchy reds to structured age-worthy bottles.",
    heartland: "Chinon, Bourgueil, Saumur-Champigny",
    image: siteImages.grapes.cabernetFranc.src,
    imageAlt: siteImages.grapes.cabernetFranc.alt,
  },
  {
    name: "Sauvignon Blanc",
    description:
      "Crisp, mineral, and aromatic. The Loire's Sauvignon set the global benchmark for taut, food-friendly whites.",
    heartland: "Touraine and campaign appellations",
    image: siteImages.grapes.sauvignon.src,
    imageAlt: siteImages.grapes.sauvignon.alt,
  },
  {
    name: "Melon Blanc",
    description:
      "Saline freshness and Atlantic character define this grape. The signature of the Nantais and the classic partner to shellfish.",
    heartland: "Muscadet Sèvre-et-Maine",
    image: siteImages.grapes.melon.src,
    imageAlt: siteImages.grapes.melon.alt,
  },
  {
    name: "Rosé",
    description:
      "France's leading source of AOP rosé. From pale, elegant dry styles to gastronomic rosés with substance.",
    heartland: "Anjou, Touraine, Cabernet d'Anjou",
    image: siteImages.grapes.rose.src,
    imageAlt: siteImages.grapes.rose.alt,
  },
  {
    name: "Fines Bulles",
    description:
      "Traditional-method sparkling with fine bubbles and bright fruit. The Loire's answer to celebration beyond Champagne.",
    heartland: "Crémant de Loire, Saumur Brut",
    image: siteImages.grapes.sparkling.src,
    imageAlt: siteImages.grapes.sparkling.alt,
  },
];
