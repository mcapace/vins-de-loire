"use client";

import {
  regionAccentStyles,
  regionJourney,
  regionStats,
  type RegionStat,
  type RegionStatIcon,
} from "@/lib/region-stats";
import {
  typeStatRegionCardLabel,
  typeStatRegionHero,
  typeStatRegionSuffix,
  typeStatRegionValue,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

function RegionStatIconSvg({
  icon,
  className,
}: {
  icon: RegionStatIcon;
  className?: string;
}) {
  const cn = className ?? "h-6 w-6";

  switch (icon) {
    case "appellation":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6h6v6H4V6Zm10 0h6v6h-6V6ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "territory":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3c-3.5 0-6 2.8-6 6.5 0 4.8 6 11.5 6 11.5s6-6.7 6-11.5C18 5.8 15.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="9.5" r="2" fill="currentColor" />
        </svg>
      );
    case "grapes":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="8" cy="10" r="3" fill="currentColor" opacity="0.9" />
          <circle cx="14" cy="8" r="3" fill="currentColor" opacity="0.75" />
          <circle cx="17" cy="13" r="3" fill="currentColor" opacity="0.85" />
          <circle cx="11" cy="15" r="3" fill="currentColor" opacity="0.7" />
          <path
            d="M12 16v5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "vineyard":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 18h18M5 18V9M9 18V7M13 18V8M17 18V10M21 18V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "world-first":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3 12h18M12 4a14 14 0 0 1 0 16M12 4a14 14 0 0 0 0 16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "france-first":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.8 6.4 19.5l2.1-6.7L3 8.8h6.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function StatCard({ stat }: { stat: RegionStat }) {
  const accent = regionAccentStyles[stat.accent];
  const isRank = stat.primary === "#1";
  const ariaLabel = [stat.primary, stat.suffix, stat.label]
    .filter(Boolean)
    .join(": ");

  return (
    <article
      className="group relative w-[13.75rem] max-w-full sm:w-[14.5rem]"
      aria-label={ariaLabel}
    >
      <div
        className={`pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 motion-safe:group-hover:opacity-50 ${accent.fill}`}
        aria-hidden
      />
      <div className="relative flex h-full min-h-[10.5rem] flex-col rounded-2xl border border-white/15 bg-loire-blue-deep/80 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 sm:min-h-[11rem] sm:p-[1.125rem]">
        <div className="flex min-w-0 items-start gap-2.5">
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${accent.ring} ${accent.fill} ${accent.icon}`}
          >
            <RegionStatIconSvg icon={stat.icon} className="h-[1.125rem] w-[1.125rem]" />
          </span>
          <span className="min-w-0 rounded-full bg-white/10 px-2 py-0.5 font-sans text-[8px] font-medium uppercase leading-tight tracking-[0.14em] text-white/80 sm:text-[9px]">
            {stat.tag}
          </span>
        </div>

        <div className="mt-auto min-w-0 pt-4">
          <p className={isRank ? typeStatRegionHero : typeStatRegionValue}>
            {stat.primary}
          </p>
          {stat.suffix ? (
            <p className={`mt-1 ${typeStatRegionSuffix}`}>{stat.suffix}</p>
          ) : null}
          <p className={`mt-2 line-clamp-4 text-pretty ${typeStatRegionCardLabel}`}>
            {stat.label}
          </p>
        </div>
      </div>
    </article>
  );
}

/** Meandering river — desktop horizontal */
function RiverPathHorizontal({ animate }: { animate: boolean }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 220"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="river-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9dcab9" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ddb543" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#eb865f" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 0 120 C 120 60, 200 180, 320 110 S 520 40, 640 120 S 820 200, 1000 95"
        fill="none"
        stroke="url(#river-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M 0 120 C 120 60, 200 180, 320 110 S 520 40, 640 120 S 820 200, 1000 95"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="10 14"
        className={animate ? "region-river-flow" : undefined}
        opacity="0.55"
      />
    </svg>
  );
}

/** Meandering river — mobile vertical */
function RiverPathVertical({ animate }: { animate: boolean }) {
  return (
    <svg
      className="absolute left-5 top-0 h-full w-8 sm:left-6"
      viewBox="0 0 40 800"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="river-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9dcab9" />
          <stop offset="50%" stopColor="#ddb543" />
          <stop offset="100%" stopColor="#eb865f" />
        </linearGradient>
      </defs>
      <path
        d="M 20 0 C 35 120, 5 240, 20 360 S 35 520, 20 640 S 5 720, 20 800"
        fill="none"
        stroke="url(#river-gradient-v)"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 20 0 C 35 120, 5 240, 20 360 S 35 520, 20 640 S 5 720, 20 800"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 12"
        className={animate ? "region-river-flow" : undefined}
        opacity="0.5"
      />
    </svg>
  );
}

export default function RegionInfographic() {
  const reduceMotion = useReducedMotion();
  const animateRiver = !reduceMotion;

  return (
    <div className="mt-12 sm:mt-14 lg:mt-16">
      {/* Journey axis labels — desktop */}
      <div className="mb-4 hidden items-center justify-between font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 lg:flex">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-loire-accent-sage" aria-hidden />
          {regionJourney.start}
        </span>
        <span className="text-white/40">↓ the Loire ↓</span>
        <span className="inline-flex items-center gap-2">
          {regionJourney.end}
          <span className="h-2 w-2 rounded-full bg-loire-accent-peach" aria-hidden />
        </span>
      </div>

      {/* Desktop: river map */}
      <motion.div
        className="relative hidden min-h-[34rem] lg:block xl:min-h-[36rem]"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-6% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerChildren } },
        }}
      >
        <RiverPathHorizontal animate={animateRiver} />

        <ul className="relative mx-auto h-[34rem] max-w-6xl xl:h-[36rem]">
          {regionStats.map((stat) => {
            const top = stat.lane === "above" ? "6%" : "52%";
            return (
              <motion.li
                key={stat.id}
                className="absolute z-10 -translate-x-1/2"
                style={{ left: `${stat.position}%`, top }}
                variants={{
                  hidden: { opacity: 1, y: 14, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: revealTransition,
                  },
                }}
              >
                <div
                  className={`mb-2 flex justify-center ${stat.lane === "below" ? "order-2 mt-2" : ""}`}
                  aria-hidden
                >
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-white ring-4 ring-loire-accent-gold/30" />
                </div>
                <StatCard stat={stat} />
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {/* Mobile / tablet: vertical river timeline */}
      <motion.ol
        className="relative space-y-10 pl-14 sm:pl-16 lg:hidden"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-6% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerChildren } },
        }}
      >
        <RiverPathVertical animate={animateRiver} />

        <li className="relative font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-loire-accent-sage">
          {regionJourney.start}
        </li>

        {regionStats.map((stat) => (
          <motion.li
            key={stat.id}
            className="relative"
            variants={{
              hidden: { opacity: 1, x: -12 },
              visible: { opacity: 1, x: 0, transition: revealTransition },
            }}
          >
            <span
              className="absolute -left-[2.35rem] top-6 flex h-3 w-3 rounded-full bg-white ring-4 ring-loire-accent-gold/25 sm:-left-[2.6rem]"
              aria-hidden
            />
            <StatCard stat={stat} />
          </motion.li>
        ))}

        <motion.li
          className="relative font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-loire-accent-peach"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: revealTransition },
          }}
        >
          {regionJourney.end}
        </motion.li>
      </motion.ol>
    </div>
  );
}
