import SectionContainer from "@/components/SectionContainer";
import { sectionPadding } from "@/lib/section";
import { wines, type Wine, type WineColor } from "@/src/data/wines";

const colorLabels: Record<WineColor, string> = {
  white: "White",
  red: "Red",
  rose: "Rosé",
  sparkling: "Sparkling",
};

function ScoreBadge({ score }: { score: number }) {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center rounded-sm bg-loire-blue-deep px-4 py-3 text-white shadow-sm sm:px-5 sm:py-4"
      aria-label={`Wine Spectator score ${score} points`}
    >
      <span className="font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
        {score}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-loire-blue-pale sm:text-xs">
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

export default function WineGrid() {
  if (wines.length === 0) {
    return null;
  }

  return (
    <section
      className={`bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="wine-grid-heading"
    >
      <SectionContainer>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-mid sm:text-sm">
            Rated by Wine Spectator
          </p>
          <h2
            id="wine-grid-heading"
            className="mt-5 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Recent Wine Spectator ratings
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-loire-blue sm:text-xl sm:leading-relaxed">
            Recent Wine Spectator ratings from Loire Valley editor Kristen
            Bieler.
          </p>
        </header>

        <ul className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {wines.map((wine) => (
            <li key={wine.id} className="flex min-w-0">
              <WineCard wine={wine} />
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
