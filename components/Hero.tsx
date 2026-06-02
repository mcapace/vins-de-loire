import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";

const HERO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-47.jpg";

const LOGO_SRC =
  "/logos/Logo-Vins-de-Loire-BLANC/Logo-Vins-de-Loire-BLANC.png";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] w-full min-w-0 items-center justify-center overflow-hidden"
      aria-label="Welcome to Loire Wines"
    >
      <Image
        src={HERO_IMAGE}
        alt="Panoramic view of Loire Valley vineyards and countryside at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-linear-to-b from-loire-blue-deep/55 via-loire-blue-deep/45 to-loire-blue-deep/70"
        aria-hidden
      />

      <SectionContainer className="relative z-10 flex flex-col items-center py-24 text-center sm:py-28 lg:py-32">
        <Image
          src={LOGO_SRC}
          alt="Vins de Loire logo in white, for use on photography backgrounds"
          width={320}
          height={120}
          priority
          className="h-auto w-48 sm:w-56 md:w-64 lg:w-72"
        />

        <h1 className="mt-8 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-10 sm:text-4xl md:text-5xl lg:mt-12 lg:text-6xl lg:leading-[1.1]">
          Discover Loire Wines
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-loire-blue-faint sm:mt-5 sm:text-lg md:mt-6 md:text-xl md:leading-relaxed">
          Through this hub created exclusively for the trade. Find recent Wine
          Spectator ratings from Loire Valley editor Kristen Bieler, plus
          essential tools and insights for trade members.
        </p>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-loire-blue-pale sm:mt-10 sm:text-sm">
          Presented by Wine Spectator
        </p>
      </SectionContainer>

      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-loire-blue-pale transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-10"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] sm:text-xs">
          Explore
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-loire-blue-pale/60 p-1.5 transition-colors duration-200 hover:border-white">
          <span className="h-2 w-1 animate-hero-scroll rounded-full bg-loire-blue-pale" />
        </span>
      </a>
    </section>
  );
}
