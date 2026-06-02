/**
 * Wine entries must come from Wine Spectator editorial (Kristen Bieler ratings).
 * Do not invent wines, scores, or tasting notes. Add only approved list data.
 */

export type WineColor = "white" | "red" | "rose" | "sparkling";

export type Wine = {
  id: string;
  name: string;
  producer: string;
  appellation: string;
  color: WineColor;
  wsScore: number;
  tastingNote: string;
  vintage: string;
  imageUrl?: string;
};

export const wines: Wine[] = [];
