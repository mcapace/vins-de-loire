import Image from "next/image";
import WsMark from "@/components/WsMark";
import {
  COBRAND_LOGO_HEIGHT,
  type CoBrandLogoSize,
} from "@/lib/ws-logo";

const VINS_DE_LOIRE_WHITE =
  "/logos/Logo-Vins-de-Loire-BLANC/Logo-Vins-de-Loire-BLANC.png";
const VINS_DE_LOIRE_BLUE =
  "/logos/Logo-Vins-de-Loire-Bleu/Logo-Vins-de-Loire-BLEU.png";

type CoBrandLockupProps = {
  /** Dark photo hero and navy sections: white Loire mark + inverted WS */
  variant?: "on-dark" | "on-light";
  /** Same pixel height for both logos (VNV hub pattern) */
  size?: CoBrandLogoSize;
  priority?: boolean;
  className?: string;
};

/**
 * Dual-brand row: Vins de Loire × Wine Spectator (matched cap height).
 */
export default function CoBrandLockup({
  variant = "on-dark",
  size = "md",
  priority,
  className = "",
}: CoBrandLockupProps) {
  const onDark = variant === "on-dark";
  const loireSrc = onDark ? VINS_DE_LOIRE_WHITE : VINS_DE_LOIRE_BLUE;
  const heightPx = COBRAND_LOGO_HEIGHT[size];

  const rowStyle = { height: heightPx } as const;

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-3.5 ${className}`.trim()}
      aria-label="Vins de Loire and Wine Spectator"
    >
      <div className="flex shrink-0 items-center" style={rowStyle}>
        <Image
          src={loireSrc}
          alt="Vins de Loire"
          width={Math.round(heightPx * 2.8)}
          height={heightPx}
          priority={priority}
          className="h-full w-auto max-h-full object-contain object-left"
        />
      </div>
      <span
        className={`flex shrink-0 items-center font-light leading-none ${onDark ? "text-white/40" : "text-loire-blue-mid/50"}`}
        style={rowStyle}
        aria-hidden
      >
        <span style={{ fontSize: Math.round(heightPx * 0.42) }}>×</span>
      </span>
      <div className="flex shrink-0 items-center" style={rowStyle}>
        <WsMark
          height={heightPx}
          invert={onDark}
          priority={priority}
          opacity={onDark ? 0.92 : 1}
          className="h-full max-h-full w-auto object-contain object-left"
        />
      </div>
    </div>
  );
}
