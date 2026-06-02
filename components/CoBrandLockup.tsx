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
 * Dual-brand row: Vins de Loire × Wine Spectator (vertically centered).
 */
export default function CoBrandLockup({
  variant = "on-dark",
  size = "md",
  priority,
  className = "",
}: CoBrandLockupProps) {
  const onDark = variant === "on-dark";
  const loireSrc = onDark ? VINS_DE_LOIRE_WHITE : VINS_DE_LOIRE_BLUE;
  const {
    wsHeight,
    loireHeight,
    separatorPx,
    loireWidth,
    loireOffsetY,
    wsOffsetY,
  } = getCoBrandMetrics(size);

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 overflow-visible sm:justify-start sm:gap-3.5 ${className}`.trim()}
      aria-label="Vins de Loire and Wine Spectator"
    >
      <div className="flex shrink-0 items-center overflow-visible">
        <Image
          src={loireSrc}
          alt="Vins de Loire"
          width={loireWidth}
          height={loireHeight}
          priority={priority}
          className="block w-auto max-w-none object-contain object-center"
          style={{
            height: loireHeight,
            width: "auto",
            transform: loireOffsetY
              ? `translateY(${loireOffsetY}px)`
              : undefined,
          }}
        />
      </div>

      <span
        className={`flex shrink-0 items-center font-light leading-none ${onDark ? "text-white/45" : "text-loire-blue-mid/50"}`}
        style={{ fontSize: separatorPx, height: wsHeight }}
        aria-hidden
      >
        ×
      </span>

      <div className="flex shrink-0 items-center overflow-visible">
        <WsMark
          height={wsHeight}
          invert={onDark}
          priority={priority}
          opacity={onDark ? 0.92 : 1}
          className="block max-w-none object-contain object-center"
          style={{
            transform: wsOffsetY ? `translateY(${wsOffsetY}px)` : undefined,
          }}
        />
      </div>
    </div>
  );
}
