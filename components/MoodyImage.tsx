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
  ...props
}: MoodyImageProps) {
  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`.trim()}>
      <Image
        alt={alt}
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
