/**
 * Curated InterLoire / Gaelle BC photography (public/images).
 * Every path below must exist on disk — no stock placeholders.
 */

const gaelle = (id: number) =>
  `/images/InterLoire-Vins-de-Loire-gaellebcphotographe-${id}.jpg`;

export type SiteImage = {
  src: string;
  alt: string;
};

/** Filename numbers present in public/images (Gaelle BC set). */
export const GAELLE_BC_IMAGE_IDS = [
  1, 2, 6, 7, 9, 11, 12, 13, 16, 17, 18, 19, 21, 23, 24, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 46, 47, 48, 49, 50,
] as const;

export const siteImages = {
  hero: {
    src: gaelle(47),
    alt: "Panoramic Loire Valley vineyards at golden hour, wide landscape view",
  },
  featured: {
    bridge: {
      src: gaelle(27),
      alt: "Loire river corridor and vineyard slopes at dusk",
    },
    grapes: {
      src: gaelle(35),
      alt: "Sancerre-style Sauvignon Blanc vineyards on limestone hills",
    },
    territories: {
      src: gaelle(46),
      alt: "Inland Loire vineyards toward the volcanic heart of France",
    },
  },
  manifesto: {
    src: gaelle(28),
    alt: "Vineyard rows along the Loire with soft evening light",
  },
  planner: {
    trade: {
      src: gaelle(21),
      alt: "Wine professionals tasting Loire wines in the vineyard",
    },
    ratings: {
      src: gaelle(48),
      alt: "Loire Valley white and sparkling wines in glass on a barrel",
    },
  },
  region: {
    src: gaelle(39),
    alt: "Panoramic view of Loire Valley vineyards and countryside along the river",
  },
  sustainability: {
    src: gaelle(26),
    alt: "Loire vineyard rows with cover crops and sustainable farming practices",
  },
  ratingsEmpty: {
    src: gaelle(49),
    alt: "Crémant and Loire sparkling wines served for tasting",
  },
  grapes: {
    chenin: {
      src: gaelle(30),
      alt: "Chenin Blanc vineyards in the Anjou and Touraine hills",
    },
    cabernetFranc: {
      src: gaelle(16),
      alt: "Cabernet Franc vineyard rows in Chinon and Bourgueil country",
    },
    sauvignon: {
      src: gaelle(32),
      alt: "Sauvignon Blanc vines on the slopes of Sancerre",
    },
    melon: {
      src: gaelle(6),
      alt: "Muscadet vineyards near the Atlantic in the Nantais",
    },
    rose: {
      src: gaelle(29),
      alt: "Pale Loire rosé vineyards in Anjou at harvest time",
    },
    sparkling: {
      src: gaelle(50),
      alt: "Traditional-method Loire sparkling wine being poured",
    },
  },
  territories: {
    nantais: {
      src: gaelle(7),
      alt: "Atlantic-facing vineyards and open skies in the Nantais",
    },
    anjouSaumur: {
      src: gaelle(18),
      alt: "Anjou-Saumur vineyards with Chenin Blanc and Cabernet Franc",
    },
    touraine: {
      src: gaelle(40),
      alt: "Touraine vineyards and tuffeau hills near the Loire châteaux",
    },
    centreLoire: {
      src: gaelle(42),
      alt: "Centre-Loire vineyards on rolling hills toward Sancerre and Pouilly",
    },
  },
} as const satisfies Record<string, unknown>;
