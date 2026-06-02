"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import MoodyImage from "@/components/MoodyImage";
import Strates from "@/components/Strates";
import {
  typeBodyDark,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const HERO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-47.jpg";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] w-full min-w-0 items-end overflow-hidden pt-[7.25rem] sm:pt-[7.5rem]"
      aria-label="The Wines of a Lifetime"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full motion-safe:animate-ken-burns"
          initial={reduceMotion ? false : { scale: 1.02 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <MoodyImage
            src={HERO_IMAGE}
            alt="Panoramic Loire Valley vineyards at golden hour, wide landscape view"
            fill
            priority
            sizes="100vw"
            overlayClassName="moody-overlay-strong"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div className="hero-scrim pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-5 pb-28 sm:px-8 sm:pb-32 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 1, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-left"
        >
          <CoBrandLockup variant="on-dark" size="lg" priority />

          <h1 className="text-shadow-hero mt-8 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            The Wines of a Lifetime
          </h1>

          <p className={`mt-6 max-w-xl ${typeBodyDark}`}>
            From the Loire Océanique to the Loire Volcanique, a single river
            carries centuries of savoir-faire. Discover the most diverse wine
            landscape in France, now through the lens of Wine Spectator.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#trade-portal"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-loire-blue transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Enter the Trade Portal
            </Link>
            <Link
              href="#planner"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/50 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the valley
            </Link>
          </div>
        </motion.div>
      </div>

      <a
        href="#featured"
        className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-32"
        aria-label="Scroll to discover the Loire"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs">
          Scroll
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/50 p-1.5">
          <span className="h-2 w-1 animate-hero-scroll rounded-full bg-white" />
        </span>
      </a>

      <div className="absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20">
        <Strates className="h-full w-full" opacity={0.85} />
      </div>
    </section>
  );
}
