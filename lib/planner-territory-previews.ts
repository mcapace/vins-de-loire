import { siteImages } from "@/lib/site-images";

/** Toolkit trade-tab thumbnails — separate IDs from the main Territories section */
export const territoryPlannerPreviews = [
  {
    name: "Nantais",
    image: siteImages.planner.territoryPreviews.nantais.src,
    imageAlt: siteImages.planner.territoryPreviews.nantais.alt,
  },
  {
    name: "Anjou-Saumur",
    image: siteImages.planner.territoryPreviews.anjouSaumur.src,
    imageAlt: siteImages.planner.territoryPreviews.anjouSaumur.alt,
  },
  {
    name: "Touraine",
    image: siteImages.planner.territoryPreviews.touraine.src,
    imageAlt: siteImages.planner.territoryPreviews.touraine.alt,
  },
  {
    name: "Centre-Loire",
    image: siteImages.planner.territoryPreviews.centreLoire.src,
    imageAlt: siteImages.planner.territoryPreviews.centreLoire.alt,
  },
] as const;
