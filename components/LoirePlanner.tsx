"use client";

import MoodyImage from "@/components/MoodyImage";
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

const PLANNER_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-21.jpg";

function TradePanel() {
  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div className="lg:col-span-6">
        <ul className="space-y-4 text-base leading-relaxed text-loire-blue-deep/90 sm:text-lg">
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-loire-blue-faint lg:col-span-6 lg:aspect-[5/4]">
        <MoodyImage
          src={PLANNER_IMAGE}
          alt="Loire trade tasting in the vineyard"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function TerritoriesPanel() {
  return (
    <div>
      <p className="max-w-2xl text-base leading-relaxed text-loire-blue-deep/90 sm:text-lg">
        Four great territories stretch from Nantes to the volcanic heart of
        France. The official appellation map lives inside the Trade Portal.
      </p>
      <ul className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        {territoryPlannerItems.map((item) => (
          <li
            key={item.name}
            className="border-l-4 border-loire-blue-mid bg-loire-accent-cream/50 px-5 py-4"
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
        className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue hover:text-loire-blue-deep"
      >
        Explore territories →
      </Link>
    </div>
  );
}

function RatingsPanel() {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-loire-blue-faint lg:col-span-5 lg:min-h-[280px] lg:aspect-auto">
        <MoodyImage
          src="/images/InterLoire-Vins-de-Loire-gaellebcphotographe-50.jpg"
          alt="Sparkling Loire wines in glass"
          fill
          sizes="40vw"
        />
      </div>
      <div className="flex flex-col justify-center lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-loire-blue-mid">
          Publishing soon
        </p>
        <p className="mt-4 font-display text-2xl font-semibold text-loire-blue-deep sm:text-3xl">
          The Loire, scored by Wine Spectator
        </p>
        <p className="mt-4 text-base leading-relaxed text-loire-blue-deep/90 sm:text-lg">
          Ratings from Kristen Bieler will populate as soon as the approved list
          is released. Register for trade access for alerts and full notes.
        </p>
        <Link
          href="#ratings"
          className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-loire-blue hover:text-loire-blue-deep"
        >
          View ratings section →
        </Link>
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
            className={`max-w-3xl text-lg leading-relaxed text-loire-blue-deep/90 sm:text-xl ${spaceHeadlineToBody}`}
          >
            Trade resources, territory guides, and Wine Spectator ratings in
            one place. Choose what you need first.
          </p>
        </Reveal>

        <div className="mt-10 border-b border-loire-blue-faint sm:mt-12">
          <div
            className="flex gap-1 overflow-x-auto pb-px"
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
