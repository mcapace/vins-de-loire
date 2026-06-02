"use client";

import CoBrandLockup from "@/components/CoBrandLockup";
import SponsorBar from "@/components/SponsorBar";
import Link from "next/link";
import { typeButton, typeNavLink } from "@/lib/typography";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Know", href: "#manifesto" },
  { label: "Wines", href: "#grapes" },
  { label: "Region", href: "#region" },
  { label: "Ratings", href: "#ratings" },
] as const;

const navLinkClass = `rounded-sm ${typeNavLink} text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;
const mobileNavLinkClass = `block px-4 py-3 ${navLinkClass}`;
const desktopNavLinkClass = `px-3 py-2 ${navLinkClass}`;

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <SponsorBar />

      <div
        className={`transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-loire-blue-deep/95 shadow-lg backdrop-blur-md"
            : "border-b border-white/5 bg-loire-blue-deep/40 backdrop-blur-sm"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-12 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-loire-blue-deep"
        >
          Skip to content
        </a>

        <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-8 sm:py-4 lg:px-12">
          <Link
            href="#"
            className="min-w-0 shrink origin-left scale-[0.88] sm:scale-100"
            aria-label="Vins de Loire home"
          >
            <CoBrandLockup variant="on-dark" size="nav" priority />
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex lg:gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={desktopNavLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            <a
              href="#trade-portal"
              className={`inline-flex min-h-10 max-w-[9.5rem] items-center justify-center rounded-sm bg-white px-3 py-2 text-center ${typeButton} text-loire-blue transition-colors hover:bg-loire-blue-faint sm:max-w-none sm:px-5`}
              onClick={closeMenu}
            >
              <span className="hidden min-[400px]:inline">Plan your visit</span>
              <span className="min-[400px]:hidden">Trade</span>
            </a>
          </div>
        </div>

        <nav
          id="mobile-nav-panel"
          className={`border-t border-white/10 bg-loire-blue-deep/98 md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
          aria-label="Mobile primary"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-white/10 pt-2">
              <a
                href="#planner"
                className={mobileNavLinkClass}
                onClick={closeMenu}
              >
                Loire toolkit
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
