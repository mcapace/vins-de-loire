import Image from "next/image";
import { WS_LOGO_ASPECT, WS_LOGO_PRIMARY_SRC } from "@/lib/ws-logo";

type WsMarkProps = {
  height: number;
  opacity?: number;
  /** Primary logo is black-on-transparent; invert to white on dark backgrounds. */
  invert?: boolean;
  className?: string;
  priority?: boolean;
};

export default function WsMark({
  height,
  opacity = 0.88,
  invert = true,
  className,
  priority,
}: WsMarkProps) {
  return (
    <Image
      src={WS_LOGO_PRIMARY_SRC}
      alt="Wine Spectator"
      width={Math.round(height * WS_LOGO_ASPECT)}
      height={height}
      priority={priority}
      className={className}
      style={{
        height,
        width: "auto",
        opacity,
        filter: invert ? "invert(1)" : "none",
      }}
    />
  );
}
