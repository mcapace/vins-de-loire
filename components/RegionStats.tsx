"use client";

import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import Strates from "@/components/Strates";
import SectionContainer from "@/components/SectionContainer";
import { regionStats, regionStatsFootnote } from "@/lib/region-stats";
import { sectionPadding, spaceEyebrowToHeadline, spaceHeadlineToBody } from "@/lib/section";
import {
  typeBodyMutedDark,
  typeDisplayDark,
  typeEyebrowDark,
  typeStatDark,
  typeStatLabelDark,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

import { siteImages } from "@/lib/site-images";

const regionIntro =
  "From the Loire Océanique to the Loire Volcanique, one river carries centuries of savoir-faire across an unmatched mosaic of terroirs.";

export default function RegionStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="region"
      className={`relative overflow-hidden bg-loire-blue text-white ${sectionPadding}`}
      aria-labelledby="region-stats-heading"
    >
      <Strates className="absolute inset-0 opacity-20" aria-hidden />

      <SectionContainer className="relative z-10">
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <Reveal className="relative min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_24px_64px_rgb(0_0_0/0.35)] ring-1 ring-white/15 sm:aspect-[5/4] lg:aspect-[4/5]">
              <MoodyImage
                src={siteImages.region.src}
                alt={siteImages.region.alt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 42vw"
                overlayClassName="moody-overlay-strong"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-loire-blue/90 to-transparent lg:hidden"
                aria-hidden
              />
            </div>
            <p className="mt-4 hidden font-sans text-xs font-normal normal-case tracking-[0.02em] text-white/55 lg:block">
              Photo · Gaelle BC for Vins de Loire
            </p>
          </Reveal>

          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className={typeEyebrowDark}>The region</p>
              <h2
                id="region-stats-heading"
                className={`${typeDisplayDark} ${spaceEyebrowToHeadline}`}
              >
                Loire Valley at a glance
              </h2>
              <p className={`max-w-xl ${typeBodyMutedDark} ${spaceHeadlineToBody}`}>
                {regionIntro}
              </p>
            </Reveal>

            <motion.ul
              className="mt-10 grid min-w-0 grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5"
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
                          hidden: { opacity: 1, y: 16 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: revealTransition,
                          },
                        }
                  }
                  className="flex min-w-0 flex-col rounded-sm bg-white/[0.06] px-5 py-7 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.09] sm:px-6 sm:py-8"
                >
                  <p className={`${typeStatDark} text-4xl sm:text-5xl lg:text-6xl`}>
                    {stat.value}
                  </p>
                  <p className={`mt-4 max-w-[16rem] ${typeStatLabelDark}`}>
                    {stat.label}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <Reveal delay={2}>
              <p
                className={`mt-10 max-w-2xl border-t border-white/12 pt-8 sm:mt-12 ${typeBodyMutedDark}`}
              >
                {regionStatsFootnote}
              </p>
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
