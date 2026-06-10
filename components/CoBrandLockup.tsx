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
 * Dual-brand row: Loire Wines × Wine Spectator (matched cap height per size).
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
    wsWidth,
    loireOffsetY,
    wsOffsetY,
  } = getCoBrandMetrics(size);

  const rowHeight = Math.max(wsHeight, loireHeight);

  return (
    <div
      className={`flex items-center justify-center gap-3 overflow-visible sm:justify-start sm:gap-3.5 ${className}`.trim()}
      style={{ minHeight: rowHeight }}
      aria-label="Loire Wines and Wine Spectator"
    >
      <div
        className="flex shrink-0 items-center justify-center overflow-visible"
        style={{ height: rowHeight, width: loireWidth }}
      >
        <Image
          src={loireSrc}
          alt="Loire Wines"
          width={loireWidth}
          height={loireHeight}
          priority={priority}
          className="block max-h-full w-auto max-w-none object-contain object-center"
          style={{
            height: loireHeight,
            maxHeight: rowHeight,
            width: "auto",
            transform: loireOffsetY
              ? `translateY(${loireOffsetY}px)`
              : undefined,
          }}
        />
      </div>

      <span
        className={`flex shrink-0 items-center self-center font-light leading-none ${onDark ? "text-white/45" : "text-loire-blue-mid/50"}`}
        style={{ fontSize: separatorPx }}
        aria-hidden
      >
        ×
      </span>

      <div
        className="flex shrink-0 items-center justify-center overflow-visible"
        style={{ height: rowHeight, width: wsWidth }}
      >
        <WsMark
          height={wsHeight}
          invert={onDark}
          priority={priority}
          opacity={onDark ? 0.92 : 1}
          className="block max-h-full max-w-none object-contain object-center"
          style={{
            maxHeight: rowHeight,
            transform: wsOffsetY ? `translateY(${wsOffsetY}px)` : undefined,
          }}
        />
      </div>
    </div>
  );
}
