export type ProofStat = {
  id: string;
  /** Bodoni figure — numerals and short marks only */
  primary: string;
  /** Jost uppercase qualifier (not Bodoni) */
  suffix?: string;
  label: string;
};

export const proofStats: readonly ProofStat[] = [
  {
    id: "appellations",
    primary: "34",
    suffix: "AOP + 1 IGP",
    label: "Appellations",
  },
  {
    id: "varieties",
    primary: "33",
    label: "Grape varieties",
  },
  {
    id: "hectares",
    primary: "42,000",
    label: "Hectares under vine",
  },
  {
    id: "global-first",
    primary: "#1",
    label: "Global Chenin & Cab Franc",
  },
] as const;
