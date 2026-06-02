import MoodyImage from "@/components/MoodyImage";

type PhotoFillProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Defaults to `absolute inset-0 z-0` — parent must be `relative` with height. */
  className?: string;
  imageClassName?: string;
};

/**
 * Fills a positioned parent with cover photography (same pattern as the hero).
 */
export default function PhotoFill({
  src,
  alt,
  sizes,
  priority,
  className = "absolute inset-0 z-0",
  imageClassName = "",
}: PhotoFillProps) {
  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <MoodyImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover object-center ${imageClassName}`.trim()}
      />
    </div>
  );
}
