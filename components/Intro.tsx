import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import { sectionPadding } from "@/lib/section";

const INTRO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-28.jpg";

export default function Intro() {
  return (
    <section
      id="intro"
      className={`bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="intro-heading"
    >
      <SectionContainer>
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="min-w-0 lg:col-span-7 lg:pr-4 xl:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
              Loire Wines Microsite
            </p>

            <h2
              id="intro-heading"
              className="mt-6 font-display text-3xl font-semibold leading-snug tracking-tight sm:mt-8 sm:text-4xl md:text-[2.5rem] md:leading-tight lg:text-5xl lg:leading-[1.15]"
            >
              Welcome to the Loire Wines × Wine Spectator Trade Portal
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-loire-blue sm:mt-10 sm:text-xl sm:leading-relaxed md:max-w-2xl md:text-[1.35rem] md:leading-relaxed">
              Discover Loire wines through this hub created exclusively for the
              trade.
            </p>

            <figure className="relative mt-12 border-l-4 border-loire-blue-mid pl-6 sm:mt-14 sm:pl-8 md:mt-16">
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-loire-blue-deep sm:text-3xl sm:leading-snug md:text-[2rem] md:leading-snug lg:text-[2.125rem]">
                Recent Wine Spectator ratings from Loire Valley editor Kristen
                Bieler.
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-loire-blue-mid sm:text-base">
                Wine Spectator editorial
              </figcaption>
            </figure>

            <p className="mt-12 max-w-2xl text-base leading-relaxed text-loire-blue sm:mt-14 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
              Complimentary registration for trade members unlocks essential
              tools and insights, including the official appellation map,
              current market data and key selling points, and in-depth
              resources on wine ratings, appellations, producers, and
              opportunities to meet at upcoming tastings and events.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-12">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden sm:max-w-lg lg:mx-0 lg:max-w-none">
              <Image
                src={INTRO_IMAGE}
                alt="Vertical view of Loire Valley vineyard slopes and the river corridor"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
