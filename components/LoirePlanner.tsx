"use client";

import PhotoFill from "@/components/PhotoFill";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import {
  plannerTabs,
  territoryPlannerItems,
  tradePlannerBullets,
  type PlannerTabId,
} from "@/lib/planner";
import {
  sectionPadding,
  spaceEyebrowToHeadline,
  spaceHeadlineToBody,
} from "@/lib/section";
import {
  typeButton,
  typeDisplayLight,
  typeEyebrowLight,
} from "@/lib/typography";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { territoryPlannerPreviews } from "@/lib/planner-territory-previews";

function TradePanel() {
  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
      <div className="lg:col-span-6">
        <ul className="space-y-4 font-sans text-base font-light leading-relaxed text-loire-blue-deep/90 sm:text-lg">
          {tradePlannerBullets.map((item) => (
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
          className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-loire-blue-deep px-8 py-3 ${typeButton} text-white transition-colors hover:bg-loire-blue`}
        >
          Join the Loire Trade Network
        </Link>
      </div>

      <div className="min-w-0 lg:col-span-6">
        <p className="font-sans text-[11px] font-normal uppercase tracking-[0.22em] text-loire-blue-mid">
          Along the river
        </p>
        <p className="mt-2 font-display text-xl font-medium tracking-[-0.02em] text-loire-blue-deep sm:text-2xl">
          Four territories, one toolkit
        </p>
        <p className="mt-2 font-sans text-sm font-light leading-relaxed text-loire-blue-deep/85 sm:text-base">
          Preview the valley from the Atlantic to the volcanic interior. The
          official appellation map unlocks inside the Trade Portal.
        </p>

        <ul className="mt-5 grid min-w-0 grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
          {territoryPlannerPreviews.map((territory) => (
            <li key={territory.name}>
              <Link
                href="#territories"
                className="group relative block aspect-[5/4] overflow-hidden rounded-sm border border-loire-blue-faint/80 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-loire-blue-deep"
              >
                <PhotoFill
                  src={territory.image}
                  alt={territory.imageAlt}
                  sizes="(max-width: 1024px) 45vw, 280px"
                  imageClassName="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-loire-blue-deep/90 via-loire-blue-deep/25 to-transparent"
                  aria-hidden
                />
                <p className="absolute inset-x-0 bottom-0 z-10 px-3 py-2.5 font-display text-base font-medium tracking-[-0.02em] text-white sm:px-3.5 sm:py-3 sm:text-lg">
                  {territory.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TerritoriesPanel() {
  return (
    <div>
      <p className="max-w-2xl font-sans text-base font-light leading-relaxed text-loire-blue-deep/90 sm:text-lg">
        Four great territories stretch from Nantes to the volcanic heart of
        France. The official appellation map lives inside the Trade Portal.
      </p>
      <ul className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        {territoryPlannerItems.map((item) => (
          <li
            key={item.name}
            className="border-l-4 border-loire-blue-mid bg-white/60 px-5 py-4"
          >
            <p className="font-display text-xl font-medium tracking-[-0.02em] text-loire-blue-deep">
              {item.name}
            </p>
            <p className="mt-1 text-sm text-loire-blue-deep/80">{item.note}</p>
          </li>
        ))}
      </ul>
      <Link
        href="#territories"
        className={`mt-8 inline-flex ${typeButton} text-loire-blue hover:text-loire-blue-deep`}
      >
        Explore territories →
      </Link>
    </div>
  );
}

function RatingsPanel() {
  return (
    <div className="overflow-hidden rounded-sm border border-loire-blue-faint bg-white/60 editorial-glass-cream">
      <div className="grid min-w-0 gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10">
        <div className="lg:col-span-7">
          <p className={typeEyebrowLight}>Publishing soon</p>
          <p className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-loire-blue-deep sm:text-3xl">
            The Loire, scored by Wine Spectator
          </p>
          <p className="mt-4 font-sans text-base font-light leading-relaxed text-loire-blue-deep/90 sm:text-lg">
            Ratings from Kristen Bieler will populate as soon as the approved
            list is released. Register for trade access for alerts and full
            notes.
          </p>
          <Link
            href="#ratings"
            className={`mt-6 inline-flex ${typeButton} text-loire-blue hover:text-loire-blue-deep`}
          >
            View ratings section →
          </Link>
        </div>

        <div className="flex min-w-0 items-center justify-center lg:col-span-5">
          <div
            className="flex aspect-square w-full max-w-[11rem] flex-col items-center justify-center rounded-full border-2 border-dashed border-loire-blue-pale/60 bg-loire-accent-cream/90 px-6 text-center shadow-sm sm:max-w-[12.5rem]"
            aria-hidden
          >
            <p className="font-stat text-4xl font-normal leading-none tracking-[-0.04em] text-loire-blue-deep sm:text-5xl">
              WS
            </p>
            <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-loire-blue-mid">
              Scores incoming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const panels: Record<PlannerTabId, () => ReactNode> = {
  trade: TradePanel,
  territories: TerritoriesPanel,
  ratings: RatingsPanel,
};

export default function LoirePlanner() {
  const [active, setActive] = useState<PlannerTabId>("trade");

  return (
    <section
      id="planner"
      className={`bg-loire-accent-cream text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="planner-heading"
    >
      <SectionContainer>
        <Reveal>
          <p className={typeEyebrowLight}>Plan your approach</p>
          <h2
            id="planner-heading"
            className={`${typeDisplayLight} ${spaceEyebrowToHeadline}`}
          >
            Your Loire toolkit
          </h2>
          <p
            className={`max-w-3xl font-sans text-lg font-light leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            Trade resources, territory guides, and Wine Spectator ratings in
            one place. Choose what you need first.
          </p>
        </Reveal>

        <div className="mt-10 border-b border-loire-blue-faint sm:mt-12">
          <div
            className="-mx-1 flex gap-1 overflow-x-auto scroll-smooth pb-px [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:mx-0 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Loire planning topics"
          >
            {plannerTabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`planner-panel-${tab.id}`}
                  id={`planner-tab-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`shrink-0 border-b-2 px-4 py-3 font-sans text-[11px] font-normal uppercase tracking-[0.2em] transition-colors sm:px-6 sm:text-xs ${
                    isActive
                      ? "border-loire-blue-deep text-loire-blue-deep"
                      : "border-transparent text-loire-blue-mid hover:text-loire-blue-deep"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`planner-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`planner-tab-${active}`}
          className="mt-10 sm:mt-12"
        >
          {panels[active]()}
        </div>
      </SectionContainer>
    </section>
  );
}
