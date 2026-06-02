"use client";

import MoodyImage from "@/components/MoodyImage";
import RegionInfographic from "@/components/RegionInfographic";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import Strates from "@/components/Strates";
import { regionStatsFootnote } from "@/lib/region-stats";
import { siteImages } from "@/lib/site-images";
import { sectionPadding } from "@/lib/section";
import {
  typeBodyMutedDark,
  typeDisplayDark,
  typeEyebrowDark,
} from "@/lib/typography";

const regionIntro =
  "Six stops along one river — from Atlantic freshness to volcanic depth. Follow the winding path from the Loire Océanique to the Loire Volcanique.";

export default function RegionStats() {
  return (
    <section
      id="region"
      className={`relative overflow-hidden bg-loire-blue-deep text-white ${sectionPadding}`}
      aria-labelledby="region-stats-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <MoodyImage
          src={siteImages.region.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35 motion-safe:scale-105"
          overlayClassName="opacity-0"
        />
        <div className="absolute inset-0 bg-loire-blue-deep/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgb(157_202_185/0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgb(235_134_95/0.15),transparent_40%)]" />
      </div>

      <Strates className="absolute inset-0 z-[1] opacity-[0.1]" aria-hidden />

      <SectionContainer className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className={typeEyebrowDark}>Follow the Loire</p>
          <h2
            id="region-stats-heading"
            className={`${typeDisplayDark} mt-5 sm:mt-6`}
          >
            The valley, by the numbers
          </h2>
          <p className={`mx-auto mt-6 max-w-2xl ${typeBodyMutedDark}`}>
            {regionIntro}
          </p>
        </Reveal>

        <RegionInfographic />

        <Reveal delay={1}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-6 text-center sm:mt-12 sm:px-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-loire-accent-gold">
              Did you know?
            </p>
            <p className={`mt-3 ${typeBodyMutedDark}`}>{regionStatsFootnote}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
