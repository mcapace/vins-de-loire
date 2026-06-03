/**
 * Curated InterLoire / Gaelle BC photography (public/images).
 * Every path below must exist on disk — no stock placeholders.
 * Assignments are spread across the library so adjacent sections rarely repeat.
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
      src: gaelle(24),
      alt: "The Loire river winding through vineyard country at dusk",
    },
    grapes: {
      src: gaelle(31),
      alt: "Close view of Loire Valley vines in late-summer light",
    },
    territories: {
      src: gaelle(39),
      alt: "Rolling Loire vineyards toward distant hills and open sky",
    },
  },
  manifesto: {
    src: gaelle(13),
    alt: "Vineyard landscape along the Loire under soft evening light",
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
    /** Smaller toolkit grid — distinct from full Territories section photos */
    territoryPreviews: {
      nantais: {
        src: gaelle(1),
        alt: "Coastal Nantais vineyards near the Atlantic",
      },
      anjouSaumur: {
        src: gaelle(2),
        alt: "Anjou-Saumur hills and vines in golden light",
      },
      touraine: {
        src: gaelle(23),
        alt: "Touraine vineyard slopes and Loire countryside",
      },
      centreLoire: {
        src: gaelle(34),
        alt: "Centre-Loire upland vines toward the volcanic interior",
      },
    },
  },
  region: {
    src: gaelle(17),
    alt: "Loire Valley panorama with river light and vineyard ridges",
  },
  sustainability: {
    src: gaelle(12),
    alt: "Vineyard rows with grass cover and sustainable farming in the Loire",
  },
  ratingsEmpty: {
    src: gaelle(11),
    alt: "Assorted Loire wines ready for professional tasting",
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
      src: gaelle(36),
      alt: "Sauvignon Blanc vines on sunlit slopes in Sancerre country",
    },
    melon: {
      src: gaelle(6),
      alt: "Muscadet vineyards near the Atlantic in the Nantais",
    },
    rose: {
      src: gaelle(33),
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
      src: gaelle(9),
      alt: "Touraine vines and tuffeau hills near the Loire châteaux",
    },
    centreLoire: {
      src: gaelle(37),
      alt: "Centre-Loire vineyards on rolling hills toward Sancerre and Pouilly",
    },
  },
} as const satisfies Record<string, unknown>;
