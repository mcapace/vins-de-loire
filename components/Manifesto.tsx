import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { externalLinkProps, tradeNetworkUrl } from "@/lib/site";
import { siteImages } from "@/lib/site-images";
import { typeButton, typeDisplayLight, typeEyebrowLight } from "@/lib/typography";
import Link from "next/link";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="manifesto-heading"
    >
      <SectionContainer>
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <Reveal className="min-w-0 lg:col-span-6 xl:col-span-5">
            <p className={typeEyebrowLight}>Two thousand years in the making</p>

            <h2
              id="manifesto-heading"
              className={`${typeDisplayLight} md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] ${spaceEyebrowToHeadline}`}
            >
              The Loire made us a bridge
            </h2>

            <p
              className={`max-w-xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
            >
              Between flourishing estates and intimate cellars, between reds,
              rosés, and whites, between sparkling wines and noble sweets, the
              Loire unites contrasts into one immensely rich palette. For two
              millennia, the river has shaped our know-how through an
              extraordinary geological mosaic.
            </p>

            <p className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:mt-8 sm:text-xl">
              From water lands to volcanic soils, the Loire reminds us that
              nature and craft move together. The vineyards of Loire are a
              bridge between UNESCO landscapes, singular terroirs, and grape
              varieties that meet as paradoxes and as evidence.
            </p>

            <figure className="relative mt-12 border-l-4 border-loire-blue-mid pl-6 sm:mt-14 sm:pl-8 md:mt-16">
              <blockquote className="font-display text-2xl font-light italic leading-snug tracking-[-0.01em] text-loire-blue-deep sm:text-3xl md:text-4xl md:leading-snug">
                Openness is our way of life. Sharing with the curious and the
                initiated is our river journey.
              </blockquote>
              <figcaption className="mt-5 font-sans text-[11px] font-normal uppercase tracking-[0.26em] text-loire-blue-mid">
                Loire Wines
              </figcaption>
            </figure>

            <Link
              href={tradeNetworkUrl}
              {...externalLinkProps}
              className={`mt-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-loire-blue-deep px-8 py-3 ${typeButton} text-white transition-colors hover:bg-loire-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-loire-blue-deep`}
            >
              Join the Trade Network
            </Link>
          </Reveal>

          <Reveal
            className="relative min-w-0 lg:col-span-6 xl:col-span-7"
            delay={1}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-loire-blue-faint shadow-lg sm:aspect-[5/6] lg:aspect-[4/5]">
              <PhotoFill
                src={siteImages.manifesto.src}
                alt={siteImages.manifesto.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
