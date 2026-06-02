import Image, { type ImageProps } from "next/image";

type MoodyImageProps = ImageProps & {
  wrapperClassName?: string;
  overlayClassName?: string;
};

/**
 * Brand "moody" photography: richer contrast, warm grade, deep shadows.
 */
export default function MoodyImage({
  wrapperClassName = "",
  overlayClassName = "",
  className = "",
  alt,
  fill,
  ...props
}: MoodyImageProps) {
  const sizeClass = fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full";

  return (
    <div
      className={`overflow-hidden ${sizeClass} ${wrapperClassName}`.trim()}
    >
      <Image
        alt={alt}
        fill={fill}
        className={`moody-photo object-cover object-center ${className}`.trim()}
        {...props}
      />
      <div
        className={`moody-overlay pointer-events-none absolute inset-0 ${overlayClassName}`.trim()}
        aria-hidden
      />
    </div>
  );
}
