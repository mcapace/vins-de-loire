import MoodyImage from "@/components/MoodyImage";

export type SilhouetteVariant =
  | "fade-left"
  | "fade-right"
  | "fade-bottom"
  | "arch"
  | "full";

export type SilhouetteTone = "dark" | "cream" | "light";

/** Soft edge dissolve overlays — no CSS mask-image (avoids invisible photos). */
const edgeOverlay: Record<SilhouetteVariant, Record<SilhouetteTone, string>> = {
  "fade-left": {
    dark: "bg-gradient-to-r from-loire-blue-deep from-0% via-loire-blue-deep/35 via-35% to-transparent to-85%",
    cream:
      "bg-gradient-to-r from-loire-accent-cream from-0% via-loire-accent-cream/40 via-30% to-transparent to-80%",
    light:
      "bg-gradient-to-r from-white from-0% via-white/50 via-35% to-transparent to-82%",
  },
  "fade-right": {
    dark: "bg-gradient-to-l from-loire-blue-deep from-0% via-loire-blue-deep/35 via-35% to-transparent to-85%",
    cream:
      "bg-gradient-to-l from-loire-accent-cream from-0% via-loire-accent-cream/40 via-30% to-transparent to-80%",
    light:
      "bg-gradient-to-l from-white from-0% via-white/55 via-35% to-transparent to-82%",
  },
  "fade-bottom": {
    dark: "bg-gradient-to-t from-loire-blue-deep/75 from-0% via-loire-blue-deep/20 via-45% to-transparent to-100%",
    cream:
      "bg-gradient-to-t from-loire-accent-cream/90 from-0% via-loire-accent-cream/15 via-50% to-transparent",
    light:
      "bg-gradient-to-t from-white/90 from-0% via-white/20 via-45% to-transparent",
  },
  arch: {
    dark: "bg-[radial-gradient(ellipse_130%_100%_at_50%_100%,transparent_0%,transparent_42%,rgb(29_43_80/0.55)_68%,rgb(29_43_80/0.92)_100%)]",
    cream:
      "bg-[radial-gradient(ellipse_130%_100%_at_50%_100%,transparent_0%,transparent_42%,rgb(237_220_206/0.5)_68%,rgb(237_220_206/0.95)_100%)]",
    light:
      "bg-[radial-gradient(ellipse_130%_100%_at_50%_100%,transparent_0%,transparent_42%,rgb(255_255_255/0.45)_68%,rgb(255_255_255/0.95)_100%)]",
  },
  full: {
    dark: "bg-gradient-to-t from-loire-blue-deep/60 via-transparent to-loire-blue-deep/25",
    cream: "bg-gradient-to-t from-loire-accent-cream/50 via-transparent to-loire-accent-cream/20",
    light: "bg-gradient-to-t from-white/40 via-transparent to-white/15",
  },
};

type SilhouettePlateProps = {
  src: string;
  alt: string;
  variant?: SilhouetteVariant;
  tone?: SilhouetteTone;
  className?: string;
  wrapperClassName?: string;
  sizes: string;
  priority?: boolean;
  children?: React.ReactNode;
};

/**
 * Editorial photography with soft edge dissolve. Image stays fully rendered;
 * gradients blend into the section surface (no CSS mask-image).
 */
export default function SilhouettePlate({
  src,
  alt,
  variant = "full",
  tone = "dark",
  className = "",
  wrapperClassName = "",
  sizes,
  priority,
  children,
}: SilhouettePlateProps) {
  return (
    <div className={`relative ${wrapperClassName}`.trim()}>
      <div className={`absolute inset-0 overflow-hidden ${className}`.trim()}>
        <MoodyImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="moody-photo object-cover object-center"
          overlayClassName="moody-overlay"
        />
        <div
          className={`pointer-events-none absolute inset-0 ${edgeOverlay[variant][tone]}`}
          aria-hidden
        />
      </div>
      {children ? (
        <div className="relative z-10 h-full w-full">{children}</div>
      ) : null}
    </div>
  );
}
