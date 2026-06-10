import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import { wines, type Wine, type WineColor } from "@/src/data/wines";
import Link from "next/link";
import {
  typeDisplayLight,
  typeEyebrowLight,
  typeScore,
  typeScoreLabel,
} from "@/lib/typography";

import { externalLinkProps, tradeNetworkUrl } from "@/lib/site";
import { siteImages } from "@/lib/site-images";

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
      <span className={typeScore}>{score}</span>
      <span className={`mt-1 ${typeScoreLabel}`}>Points</span>
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
          <h3 className="mt-2 font-display text-xl font-medium leading-snug tracking-[-0.02em] text-loire-blue-deep sm:text-2xl">
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
    <div className="relative mt-12 min-h-[28rem] overflow-hidden sm:min-h-[32rem]">
      <PhotoFill
        src={siteImages.ratingsEmpty.src}
        alt={siteImages.ratingsEmpty.alt}
        sizes="100vw"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/70 to-white/20 lg:via-white/50 lg:to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[inherit] flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:max-w-xl lg:px-14">
        <p className={typeEyebrowLight}>Publishing soon</p>
        <p className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-loire-blue-deep sm:text-3xl">
          Scored wines arrive with editorial approval
        </p>
        <p className="mt-4 font-sans text-base font-light leading-relaxed text-loire-blue-deep/90 sm:text-lg">
          Wine Spectator ratings from Kristen Bieler will populate this section
          as soon as the approved list is released. Register for trade access to
          get alerts and full tasting notes.
        </p>
        <Link
          href={tradeNetworkUrl}
          {...externalLinkProps}
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-loire-blue-deep px-8 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-loire-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-loire-blue-deep"
        >
          Join the Trade Network
        </Link>
      </div>
    </div>
  );
}

export default function WineGrid() {
  const hasWines = wines.length > 0;

  return (
    <section
      id="ratings"
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="wine-grid-heading"
    >
      <SectionContainer>
        <Reveal>
          <header className="max-w-3xl">
            <p className={typeEyebrowLight}>Wine Spectator</p>
            <h2
              id="wine-grid-heading"
              className={`${typeDisplayLight} ${spaceEyebrowToHeadline}`}
            >
              Ratings &amp; scores
            </h2>
            <p
              className={`text-lg leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
            >
              Recent Wine Spectator ratings from Loire editor Kristen Bieler.
              Explore scores, tasting notes, and producers as the approved list
              is published.
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
