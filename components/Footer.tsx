import CoBrandLockup from "@/components/CoBrandLockup";
import SectionContainer from "@/components/SectionContainer";
import { sectionPaddingCompact } from "@/lib/section";
import { externalLinkProps, sponsorDisclosure, tradeNetworkUrl } from "@/lib/site";

const footerLinks = [
  { label: "Loire Wines", href: "#" },
  { label: "Wine Spectator", href: "#" },
  { label: "Join the Trade Network", href: tradeNetworkUrl, external: true },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-white/10 bg-loire-blue-deep text-white/90 ${sectionPaddingCompact}`}
    >
      <SectionContainer>
        <p className="text-center font-display text-xl font-light leading-relaxed tracking-[-0.01em] text-white sm:text-left sm:text-2xl">
          Explore, learn, and connect. Your Loire journey starts here.
        </p>

        <CoBrandLockup
          variant="on-dark"
          size="md"
          className="mt-10 justify-center sm:mt-12 sm:justify-start"
        />

        <p
          className="mt-10 max-w-3xl text-center text-sm leading-relaxed text-white/85 sm:mt-12 sm:text-left sm:text-base"
          data-legal-review="pending"
        >
          {sponsorDisclosure}
          <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-white/60">
            Legal review pending
          </span>
        </p>

        <p className="mt-6 text-center text-xs leading-relaxed text-white/70 sm:text-left sm:text-sm">
          Photography: Gaelle BC Photographe for InterLoire / Loire Wines
        </p>

        <nav
          className="mt-10 border-t border-loire-blue-pale/15 pt-10"
          aria-label="Footer"
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:justify-start">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {/* TODO: Replace placeholder href with final URLs */}
                <a
                  href={link.href}
                  {...("external" in link && link.external ? externalLinkProps : {})}
                  className="text-sm font-medium text-white/85 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-center text-xs leading-relaxed text-white/65 sm:mt-12 sm:text-left sm:text-sm">
          © {year} Wine Spectator. All rights reserved.
        </p>
      </SectionContainer>
    </footer>
  );
}
