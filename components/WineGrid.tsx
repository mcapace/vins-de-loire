import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { wines, type Wine, type WineColor } from "@/src/data/wines";
import Link from "next/link";

const RATINGS_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-50.jpg";

const colorLabels: Record<WineColor, string> = {
  white: "White",
  red: "Red",
  rose: "Rosé",
  sparkling: "Sparkling",
};

function ScoreBadge({ score }: { score: number }) {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center rounded-sm border-2 border-loire-blue-deep bg-white px-4 py-3 text-loire-blue-deep shadow-sm sm:px-5 sm:py-4"
      aria-label={`Wine Spectator score ${score} points`}
    >
      <span className="font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
        {score}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-loire-blue-mid sm:text-xs">
        Points
      </span>
    </div>
  );
}

function WineCard({ wine }: { wine: Wine }) {
  return (
    <article className="flex h-full min-w-0 flex-col border border-loire-blue-faint bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-loire-blue-light hover:shadow-lg sm:p-7">
      <div className="flex min-w-0 items-start gap-5">
        <ScoreBadge score={wine.wsScore} />
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-loire-blue-mid">
            {wine.appellation}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-loire-blue-deep sm:text-2xl">
            {wine.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-loire-blue sm:text-base">
            {wine.producer}
          </p>
        </div>
      </div>

      <dl className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-loire-blue">
        <div className="flex gap-1.5">
          <dt className="font-medium text-loire-blue-mid">Vintage</dt>
          <dd>{wine.vintage}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-medium text-loire-blue-mid">Type</dt>
          <dd>{colorLabels[wine.color]}</dd>
        </div>
      </dl>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-loire-blue sm:text-base sm:leading-relaxed">
        {wine.tastingNote}
      </p>
    </article>
  );
}

function RatingsComingSoon() {
  return (
    <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-loire-blue-faint lg:col-span-5 lg:aspect-auto lg:min-h-[320px]">
        <MoodyImage
          src={RATINGS_IMAGE}
          alt="Sparkling Loire wines in the glass, fines bulles"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>

      <div className="flex flex-col justify-center rounded-sm border border-dashed border-loire-blue-light bg-loire-accent-cream/40 p-8 sm:p-10 lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-loire-blue-mid">
          Publishing soon
        </p>
        <p className="mt-4 font-display text-2xl font-semibold text-loire-blue-deep sm:text-3xl">
          Scored wines arrive with editorial approval
        </p>
        <p className="mt-4 text-base leading-relaxed text-loire-blue sm:text-lg">
          Wine Spectator ratings from Kristen Bieler will populate this section
          as soon as the approved list is released. Register for trade access to
          get alerts and full tasting notes.
        </p>
        <Link
          href="#trade-portal"
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-loire-blue-deep px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-loire-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-loire-blue-deep"
        >
          Enter the Trade Portal
        </Link>
      </div>
    </div>
  );
}

export default function WineGrid() {
  const hasWines = wines.length > 0;

  return (
    <section
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="wine-grid-heading"
    >
      <SectionContainer>
        <Reveal>
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
              Recently rated
            </p>
            <h2
              id="wine-grid-heading"
              className={`font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl ${spaceEyebrowToHeadline}`}
            >
              The Loire, scored by Wine Spectator
            </h2>
            <p
              className={`text-lg leading-relaxed text-loire-blue sm:text-xl ${spaceHeadlineToBody}`}
            >
              Recent Wine Spectator ratings from Loire Valley editor Kristen
              Bieler. Explore scores, tasting notes, and producers as the
              approved list is published.
            </p>
          </header>
        </Reveal>

        {hasWines ? (
          <ul className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
            {wines.map((wine, index) => (
              <Reveal key={wine.id} as="li" className="flex min-w-0" delay={index % 3}>
                <WineCard wine={wine} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={1}>
            <RatingsComingSoon />
          </Reveal>
        )}
      </SectionContainer>
    </section>
  );
}
