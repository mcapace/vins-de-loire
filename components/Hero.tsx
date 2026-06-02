"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import MoodyImage from "@/components/MoodyImage";
import Strates from "@/components/Strates";
import {
  typeBodyDark,
  typeEyebrowDark,
} from "@/lib/typography";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const HERO_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-47.jpg";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] w-full min-w-0 items-end justify-center overflow-hidden pt-20"
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
          initial={reduceMotion ? false : { opacity: 1, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="hero-panel mx-auto max-w-3xl rounded-sm px-6 py-10 text-center sm:px-10 sm:py-12 lg:mx-0 lg:text-left"
        >
          <CoBrandLockup
            variant="on-dark"
            size="lg"
            priority
            className="justify-center lg:justify-start"
          />

          <p className={`mt-5 ${typeEyebrowDark}`}>Presented by Wine Spectator</p>

          <h1 className="text-shadow-hero mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            The Wines of a Lifetime
          </h1>

          <p className={`mt-6 max-w-2xl ${typeBodyDark} mx-auto lg:mx-0`}>
            From the Loire Océanique to the Loire Volcanique, a single river
            carries centuries of savoir-faire. Discover the most diverse wine
            landscape in France, now through the lens of Wine Spectator.
          </p>

          <div className="mt-10">
            <Link
              href="#trade-portal"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-loire-blue transition-[background-color,box-shadow] duration-200 hover:bg-loire-blue-faint hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Enter the Trade Portal
            </Link>
          </div>
        </motion.div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-32"
        aria-label="Begin the journey, scroll to manifesto"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs">
          Begin the journey
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
