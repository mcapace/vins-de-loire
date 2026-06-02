import Image from "next/image";
import WsMark from "@/components/WsMark";
import {
  COBRAND_LOGO_HEIGHT,
  LOIRE_LOGO_SCALE,
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
  const wsHeight = COBRAND_LOGO_HEIGHT[size];
  const loireHeight = Math.round(wsHeight * LOIRE_LOGO_SCALE);
  const rowHeight = Math.max(loireHeight, wsHeight);

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-3.5 ${className}`.trim()}
      aria-label="Vins de Loire and Wine Spectator"
    >
      <div
        className="flex shrink-0 items-center"
        style={{ height: rowHeight }}
      >
        <Image
          src={loireSrc}
          alt="Vins de Loire"
          width={Math.round(loireHeight * 2.2)}
          height={loireHeight}
          priority={priority}
          className="w-auto object-contain object-left"
          style={{ height: loireHeight, width: "auto" }}
        />
      </div>
      <span
        className={`flex shrink-0 items-center font-light leading-none ${onDark ? "text-white/40" : "text-loire-blue-mid/50"}`}
        style={{ height: rowHeight }}
        aria-hidden
      >
        <span style={{ fontSize: Math.round(wsHeight * 0.42) }}>×</span>
      </span>
      <div
        className="flex shrink-0 items-center"
        style={{ height: rowHeight }}
      >
        <WsMark
          height={wsHeight}
          invert={onDark}
          priority={priority}
          opacity={onDark ? 0.92 : 1}
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}
