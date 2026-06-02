import type { ReactNode } from "react";

type StratesProps = {
  className?: string;
  /** 0 to 1 */
  opacity?: number;
  /** horizontal bands (default) or vertical strata */
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
};

const bands = [
  "bg-loire-blue-deep",
  "bg-loire-blue",
  "bg-loire-blue-alt",
  "bg-loire-blue-mid",
  "bg-loire-blue-secondary",
  "bg-loire-blue-light",
  "bg-loire-blue-pale",
  "bg-loire-blue-faint",
];

export default function Strates({
  className = "",
  opacity = 1,
  orientation = "horizontal",
  children,
}: StratesProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      style={{ opacity }}
      aria-hidden={children ? undefined : true}
    >
      <div
        className={
          isVertical
            ? "absolute inset-0 flex flex-row"
            : "absolute inset-0 flex flex-col"
        }
      >
        {bands.map((band, index) => (
          <div
            key={band}
            className={`${band} flex-1 ${index > 0 ? (isVertical ? "border-l border-white/10" : "border-t border-white/10") : ""}`}
          />
        ))}
      </div>
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
