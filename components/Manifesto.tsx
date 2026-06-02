import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { siteImages } from "@/lib/site-images";
import { typeDisplayLight, typeEyebrowLight } from "@/lib/typography";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className={`relative overflow-hidden bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="manifesto-heading"
    >
      <PhotoFill
        src={siteImages.manifesto.src}
        alt={siteImages.manifesto.alt}
        sizes="(max-width: 1024px) 0px, 45vw"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(48vw,640px)] lg:block"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[min(48vw,640px)] bg-gradient-to-l from-loire-accent-cream via-loire-accent-cream/80 to-transparent lg:block"
        aria-hidden
      />

      <SectionContainer className="relative z-10">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-7 xl:col-span-6">
            <p className={typeEyebrowLight}>Two thousand years in the making</p>

            <h2
              id="manifesto-heading"
              className={`${typeDisplayLight} md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] ${spaceEyebrowToHeadline}`}
            >
              The Loire made us a bridge
            </h2>

            <p
              className={`max-w-2xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
            >
              Between flourishing estates and intimate cellars, between reds,
              rosés, and whites, between sparkling wines and noble sweets, the
              Loire unites contrasts into one immensely rich palette. For two
              millennia, the river has shaped our know-how through an
              extraordinary geological mosaic.
            </p>

            <p className="mt-6 max-w-2xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:mt-8 sm:text-xl">
              From water lands to volcanic soils, the Loire reminds us that
              nature and craft move together. The vineyards of Loire are a
              bridge between UNESCO landscapes, singular terroirs, and grape
              varieties that meet as paradoxes and as evidence.
            </p>

            <figure className="editorial-glass-cream relative mt-12 rounded-sm px-6 py-8 sm:mt-14 sm:px-8 md:mt-16">
              <div
                className="absolute inset-y-4 left-0 w-px bg-loire-accent-gold/70"
                aria-hidden
              />
              <blockquote className="font-display text-2xl font-light italic leading-snug tracking-[-0.01em] text-loire-blue-deep sm:text-3xl md:text-4xl md:leading-snug">
                Openness is our way of life. Sharing with the curious and the
                initiated is our river journey.
              </blockquote>
              <figcaption className="mt-5 font-sans text-[11px] font-normal uppercase tracking-[0.26em] text-loire-blue-mid">
                Vins de Loire
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            className="relative min-h-[22rem] w-full min-w-0 lg:col-span-5 lg:min-h-[34rem] xl:col-span-6"
            delay={1}
          >
            <PhotoFill
              src={siteImages.manifesto.src}
              alt={siteImages.manifesto.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="lg:hidden"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-loire-accent-cream/90 via-transparent to-loire-accent-cream/30 lg:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 border border-loire-accent-gold/35 lg:block"
              aria-hidden
            />
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
