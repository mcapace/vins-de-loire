import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import CoBrandLockup from "@/components/CoBrandLockup";
import Link from "next/link";

const HUB_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-21.jpg";

const hubHighlights = [
  "Recent Wine Spectator ratings from Loire Valley editor Kristen Bieler",
  "Official appellation map and current market data",
  "Key selling points on appellations and producers",
  "Trade tastings and event opportunities",
] as const;

export default function TradePortalHub() {
  return (
    <section
      id="trade-hub"
      className={`relative overflow-hidden bg-loire-blue text-white ${sectionPadding}`}
      aria-labelledby="trade-hub-heading"
    >
      <SectionContainer>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal className="min-w-0 lg:col-span-6">
            <CoBrandLockup variant="on-dark" size="md" className="justify-start" />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-sm">
              Trade portal
            </p>

            <h2
              id="trade-hub-heading"
              className={`font-display text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${spaceEyebrowToHeadline}`}
            >
              Your trade hub for the Loire
            </h2>

            <p
              className={`max-w-xl text-lg leading-relaxed text-white/95 sm:text-xl ${spaceHeadlineToBody}`}
            >
              Discover Loire wines through a destination built exclusively for
              the trade. Complimentary registration unlocks the tools you need
              to sell, teach, and list with confidence.
            </p>

            <ul className="mt-8 space-y-3 text-base leading-relaxed text-white/90 sm:text-lg">
              {hubHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-loire-accent-gold"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#trade-portal"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-loire-blue transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Join the Loire Trade Network
            </Link>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-loire-blue-pale/20 shadow-2xl lg:aspect-[5/4]">
              <MoodyImage
                src={HUB_IMAGE}
                alt="Loire Valley trade professionals tasting wines in the vineyard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                overlayClassName="moody-overlay"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
