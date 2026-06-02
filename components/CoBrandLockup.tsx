import Image from "next/image";
import WsMark from "@/components/WsMark";
import {
  getCoBrandMetrics,
  type CoBrandLogoSize,
} from "@/lib/ws-logo";

const VINS_DE_LOIRE_WHITE =
  "/logos/Logo-Vins-de-Loire-BLANC/Logo-Vins-de-Loire-BLANC.png";
const VINS_DE_LOIRE_BLUE =
  "/logos/Logo-Vins-de-Loire-Bleu/Logo-Vins-de-Loire-BLEU.png";

type CoBrandLockupProps = {
  variant?: "on-dark" | "on-light";
  size?: CoBrandLogoSize;
  priority?: boolean;
  className?: string;
};

/**
 * Dual-brand row: Vins de Loire × Wine Spectator (optically balanced).
 */
export default function CoBrandLockup({
  variant = "on-dark",
  size = "md",
  priority,
  className = "",
}: CoBrandLockupProps) {
  const onDark = variant === "on-dark";
  const loireSrc = onDark ? VINS_DE_LOIRE_WHITE : VINS_DE_LOIRE_BLUE;
  const { wsHeight, loireHeight, rowHeight, separatorPx, loireWidth } =
    getCoBrandMetrics(size);

  return (
    <div
      className={`flex flex-wrap items-end justify-center gap-3.5 overflow-visible sm:justify-start sm:gap-4 ${className}`.trim()}
      aria-label="Vins de Loire and Wine Spectator"
    >
      <div
        className="flex shrink-0 items-end overflow-visible"
        style={{ height: rowHeight }}
      >
        <Image
          src={loireSrc}
          alt="Vins de Loire"
          width={loireWidth}
          height={loireHeight}
          priority={priority}
          className="w-auto max-w-none object-contain object-left"
          style={{ height: loireHeight, width: "auto" }}
        />
      </div>
      <span
        className={`flex shrink-0 items-center self-center font-light leading-none ${onDark ? "text-white/45" : "text-loire-blue-mid/50"}`}
        aria-hidden
      >
        <span style={{ fontSize: separatorPx }}>×</span>
      </span>
      <div
        className="flex shrink-0 items-end overflow-visible"
        style={{ height: rowHeight, paddingBottom: 1 }}
      >
        <WsMark
          height={wsHeight}
          invert={onDark}
          priority={priority}
          opacity={onDark ? 0.92 : 1}
          className="max-w-none object-contain object-left"
        />
      </div>
    </div>
  );
}
