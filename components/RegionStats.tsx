"use client";

import Reveal from "@/components/Reveal";
import Strates from "@/components/Strates";
import SectionContainer from "@/components/SectionContainer";
import { regionStats, regionStatsFootnote } from "@/lib/region-stats";
import { sectionPaddingCompact } from "@/lib/section";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

export default function RegionStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden bg-loire-blue text-white ${sectionPaddingCompact}`}
      aria-labelledby="region-stats-heading"
    >
      <Strates className="absolute inset-0 opacity-25" />
      <SectionContainer className="relative z-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-blue-pale sm:text-sm">
            The region
          </p>
          <h2
            id="region-stats-heading"
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Loire Valley at a glance
          </h2>
        </Reveal>

        <motion.ul
          className="mt-12 grid min-w-0 grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {regionStats.map((stat) => (
            <motion.li
              key={stat.value + stat.label}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: revealTransition,
                      },
                    }
              }
              className="flex min-w-0 flex-col border-t border-loire-blue-pale/25 pt-6 sm:pt-8"
            >
              <p className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-loire-blue-pale sm:text-base">
                {stat.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={2}>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-loire-blue-light sm:mt-14 sm:text-base">
            {regionStatsFootnote}
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
