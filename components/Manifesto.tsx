import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";

const MANIFESTO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-28.jpg";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className={`bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="manifesto-heading"
    >
      <SectionContainer>
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal className="min-w-0 lg:col-span-7 lg:pr-4 xl:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
              Two thousand years in the making
            </p>

            <h2
              id="manifesto-heading"
              className={`font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] ${spaceEyebrowToHeadline}`}
            >
              The Loire made us a bridge
            </h2>

            <p
              className={`max-w-2xl text-lg leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
            >
              Between flourishing estates and intimate cellars, between reds,
              rosés, and whites, between sparkling wines and noble sweets, the
              Loire unites contrasts into one immensely rich palette. For two
              millennia, the river has shaped our know-how through an
              extraordinary geological mosaic.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-loire-blue-deep/90 sm:mt-8 sm:text-xl">
              From water lands to volcanic soils, the Loire reminds us that
              nature and craft move together. The vineyards of Loire are a
              bridge between UNESCO landscapes, singular terroirs, and grape
              varieties that meet as paradoxes and as evidence.
            </p>

            <figure className="relative mt-12 border-l-4 border-loire-blue-mid pl-6 sm:mt-14 sm:pl-8 md:mt-16">
              <blockquote className="font-display text-2xl font-medium leading-snug text-loire-blue-deep sm:text-3xl md:text-4xl md:leading-snug">
                Openness is our way of life. Sharing with the curious and the
                initiated is our river journey.
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-loire-blue-mid">
                Vins de Loire
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-5" delay={1}>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden sm:max-w-lg lg:mx-0 lg:max-w-none">
              <MoodyImage
                src={MANIFESTO_IMAGE}
                alt="Vertical view of Loire vineyard slopes and the river corridor"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
