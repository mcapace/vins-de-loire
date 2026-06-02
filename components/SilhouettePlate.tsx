import MoodyImage from "@/components/MoodyImage";

export type SilhouetteVariant =
  | "fade-left"
  | "fade-right"
  | "fade-bottom"
  | "arch"
  | "portal";

export type SilhouetteTone = "dark" | "cream" | "light";

const maskClass: Record<SilhouetteVariant, string> = {
  "fade-left":
    "silhouette-mask-fade-left",
  "fade-right":
    "silhouette-mask-fade-right",
  "fade-bottom":
    "silhouette-mask-fade-bottom",
  arch: "silhouette-mask-arch",
  portal: "silhouette-mask-portal",
};

const toneOverlay: Record<SilhouetteTone, string> = {
  dark: "silhouette-tone-dark",
  cream: "silhouette-tone-cream",
  light: "silhouette-tone-light",
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
 * Editorial photography with gradient masks — image dissolves into the
 * section background instead of sitting in a box beside copy.
 */
export default function SilhouettePlate({
  src,
  alt,
  variant = "fade-left",
  tone = "dark",
  className = "",
  wrapperClassName = "",
  sizes,
  priority,
  children,
}: SilhouettePlateProps) {
  return (
    <div
      className={`silhouette-plate relative ${wrapperClassName}`.trim()}
    >
      <div
        className={`silhouette-plate__frame absolute inset-0 ${maskClass[variant]} ${className}`.trim()}
      >
        <MoodyImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="silhouette-photo"
          overlayClassName="silhouette-overlay"
        />
        <div
          className={`silhouette-plate__tone pointer-events-none absolute inset-0 ${toneOverlay[tone]}`}
          aria-hidden
        />
        <div className="silhouette-plate__sheen pointer-events-none absolute inset-0" aria-hidden />
      </div>
      {children ? (
        <div className="relative z-10 h-full w-full">{children}</div>
      ) : null}
    </div>
  );
}
