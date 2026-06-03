export type RegionStatIcon =
  | "appellation"
  | "territory"
  | "grapes"
  | "vineyard"
  | "world-first"
  | "france-first";

export type RegionStatAccent =
  | "gold"
  | "sage"
  | "peach"
  | "rose"
  | "cream"
  | "amber";

export type RegionStat = {
  id: string;
  /** Bodoni figure */
  primary: string;
  /** Jost qualifier — keeps long copy out of the stat serif */
  suffix?: string;
  label: string;
  /** Short badge on the infographic card */
  tag: string;
  icon: RegionStatIcon;
  accent: RegionStatAccent;
  /** Placement along the river (0 = Atlantic, 100 = volcanic interior) */
  position: number;
  lane: "above" | "below";
};

export const regionJourney = {
  start: "Loire Océanique",
  end: "Loire Volcanique",
} as const;

export const regionStats: readonly RegionStat[] = [
  {
    id: "appellations",
    primary: "34",
    suffix: "AOP + 1 IGP",
    label: "Appellations from the Nantais to the Auvergne",
    tag: "Appellations",
    icon: "appellation",
    accent: "gold",
    position: 4,
    lane: "above",
  },
  {
    id: "departments",
    primary: "14",
    suffix: "Departments",
    label: "Across the heart of France",
    tag: "Departments",
    icon: "territory",
    accent: "sage",
    position: 18,
    lane: "below",
  },
  {
    id: "grapes",
    primary: "33",
    label: "Grape varieties — a living mosaic of terroirs",
    tag: "Varieties",
    icon: "grapes",
    accent: "peach",
    position: 34,
    lane: "above",
  },
  {
    id: "hectares",
    primary: "42,000",
    label: "Hectares under vine along the river",
    tag: "Hectares",
    icon: "vineyard",
    accent: "cream",
    position: 50,
    lane: "below",
  },
  {
    id: "world-first",
    primary: "#1",
    label: "World leader for Cab Franc, Chenin Blanc & Melon Blanc",
    tag: "World #1",
    icon: "world-first",
    accent: "amber",
    position: 68,
    lane: "above",
  },
  {
    id: "france-first",
    primary: "#1",
    label: "France's #1 for sparkling (ex-Champagne) & AOP rosé",
    tag: "France #1",
    icon: "france-first",
    accent: "rose",
    position: 86,
    lane: "below",
  },
] as const;

export const regionStatsFootnote = {
  lead: "The Loire is also #2 in the world for Sauvignon Blanc.",
  detail: "More than 3,000 growers shape this collective identity.",
} as const;

export const regionAccentStyles: Record<
  RegionStatAccent,
  { ring: string; fill: string; icon: string }
> = {
  gold: {
    ring: "ring-loire-accent-gold/50",
    fill: "bg-loire-accent-gold",
    icon: "text-loire-blue-deep",
  },
  sage: {
    ring: "ring-loire-accent-sage/45",
    fill: "bg-loire-accent-sage",
    icon: "text-loire-accent-forest",
  },
  peach: {
    ring: "ring-loire-accent-peach/45",
    fill: "bg-loire-accent-peach",
    icon: "text-loire-blue-deep",
  },
  rose: {
    ring: "ring-loire-accent-rose/45",
    fill: "bg-loire-accent-rose",
    icon: "text-loire-blue-deep",
  },
  cream: {
    ring: "ring-loire-accent-cream/40",
    fill: "bg-loire-accent-cream",
    icon: "text-loire-blue-deep",
  },
  amber: {
    ring: "ring-loire-accent-amber/50",
    fill: "bg-loire-accent-amber",
    icon: "text-loire-blue-deep",
  },
};
