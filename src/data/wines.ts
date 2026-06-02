/**
 * Wine entries must come from Wine Spectator editorial (Kristen Bieler ratings).
 * Do not invent wines, scores, or tasting notes. Add only approved list data.
 *
 * When the list arrives, paste objects below. WineGrid renders automatically when
 * wines.length > 0.
 */

export type WineColor = "white" | "red" | "rose" | "sparkling";

export type Wine = {
  /** Stable slug, e.g. sancerre-domaine-example-2023 */
  id: string;
  name: string;
  producer: string;
  appellation: string;
  color: WineColor;
  /** Official Wine Spectator 100-point score */
  wsScore: number;
  tastingNote: string;
  vintage: string;
  /** Optional: /images/bottle-name.jpg */
  imageUrl?: string;
};

export const wines: Wine[] = [];

/**
 * Example shape (delete when adding real data):
 *
 * {
 *   id: "sancerre-example-2023",
 *   name: "Cuvée Name",
 *   producer: "Producer Name",
 *   appellation: "Sancerre",
 *   color: "white",
 *   wsScore: 93,
 *   vintage: "2023",
 *   tastingNote: "Approved WS tasting note text.",
 * }
 */
