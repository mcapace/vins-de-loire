export type PlannerTabId = "trade" | "territories" | "ratings";

export type PlannerTab = {
  id: PlannerTabId;
  label: string;
};

export const plannerTabs: PlannerTab[] = [
  { id: "trade", label: "Trade tools" },
  { id: "territories", label: "Territories" },
  { id: "ratings", label: "Ratings" },
];

export const tradePlannerBullets = [
  "Recent Wine Spectator ratings from Loire Valley editor Kristen Bieler",
  "Official appellation map and current market data",
  "Key selling points on appellations and producers",
  "Opportunities to connect at tastings and trade events",
] as const;

export const territoryPlannerItems = [
  { name: "Nantais", note: "Atlantic freshness, Melon Blanc" },
  { name: "Anjou-Saumur", note: "Chenin and Cabernet Franc heartlands" },
  { name: "Touraine", note: "Sancerre, Vouvray, Chinon classics" },
  { name: "Centre-Loire", note: "Inland depth, Loire Volcanique" },
] as const;
