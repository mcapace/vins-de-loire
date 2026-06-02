"use client";

import MoodyImage from "@/components/MoodyImage";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import Strates from "@/components/Strates";
import { regionStats, regionStatsFootnote } from "@/lib/region-stats";
import { siteImages } from "@/lib/site-images";
import {
  typeBodyMutedDark,
  typeDisplayDark,
  typeEyebrowDark,
  typeStatDark,
  typeStatLabelDark,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerChildren } from "@/lib/motion";

const regionIntro =
  "From the Loire Océanique to the Loire Volcanique, one river carries centuries of savoir-faire across an unmatched mosaic of terroirs.";

export default function RegionStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="region"
      className="relative overflow-hidden bg-loire-blue-deep text-white"
      aria-labelledby="region-stats-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <MoodyImage
          src={siteImages.region.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50 motion-safe:scale-105"
          overlayClassName="opacity-0"
        />
        <div className="absolute inset-0 bg-loire-blue-deep/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgb(39_49_108/0.45),transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-loire-blue-deep via-loire-blue/40 to-loire-blue-deep" />
      </div>

      <Strates className="absolute inset-0 z-[1] opacity-[0.14]" aria-hidden />

      <SectionContainer className="relative z-10 py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className={typeEyebrowDark}>The region</p>
          <h2 id="region-stats-heading" className={`${typeDisplayDark} mt-6`}>
            Loire Valley at a glance
          </h2>
          <p className={`mx-auto mt-6 max-w-2xl ${typeBodyMutedDark}`}>
            {regionIntro}
          </p>
        </Reveal>

        <motion.ul
          className="mx-auto mt-14 max-w-6xl border-y border-white/12 sm:mt-16 lg:mt-20"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerChildren } },
          }}
        >
          {regionStats.map((stat, index) => (
            <motion.li
              key={stat.value + stat.label}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 1, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: revealTransition,
                      },
                    }
              }
              className={`grid min-w-0 grid-cols-1 gap-3 border-white/12 px-6 py-10 text-center sm:px-8 sm:py-11 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-10 lg:text-left ${
                index > 0 ? "border-t" : ""
              }`}
            >
              <p
                className={`${typeStatDark} text-[2.25rem] sm:text-5xl lg:text-[3.25rem] lg:leading-none`}
              >
                {stat.value}
              </p>
              <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-10">
                <p className={`${typeStatLabelDark} lg:text-base`}>{stat.label}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={1}>
          <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
            <div
              className="mx-auto mb-5 h-px w-12 bg-loire-accent-gold/60"
              aria-hidden
            />
            <p className={typeBodyMutedDark}>{regionStatsFootnote}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
