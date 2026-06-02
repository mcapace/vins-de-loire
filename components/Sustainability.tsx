import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import { sectionPadding } from "@/lib/section";

const SUSTAINABILITY_IMAGE =
  "/images/InterLoire-Vins-de-Loire-gaellebcphotographe-16.jpg";

export default function Sustainability() {
  return (
    <section
      className={`bg-white text-loire-blue-deep ${sectionPadding}`}
      aria-labelledby="sustainability-heading"
    >
      <SectionContainer>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden lg:col-span-6 lg:aspect-[5/4]">
            <Image
              src={SUSTAINABILITY_IMAGE}
              alt="Sustainable vineyard rows with green cover crops in the Loire Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="min-w-0 lg:col-span-6">
            <div className="border-l-4 border-loire-accent-forest pl-6 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-loire-accent-forest sm:text-sm">
                Sustainability
              </p>

              <h2
                id="sustainability-heading"
                className="mt-5 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
              >
                Region-wide sustainability commitment
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-loire-blue sm:text-xl sm:leading-relaxed">
                You&apos;ll also find updates on our region-wide sustainability
                commitment:{" "}
                <span className="font-semibold text-loire-blue-deep">
                  85% of vineyards are already certified organic or
                  environmentally sustainable
                </span>
                , with a goal of reaching{" "}
                <span className="font-semibold text-loire-accent-forest">
                  100% by 2030
                </span>
                .
              </p>
            </div>

            <div className="mt-10 grid min-w-0 grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:gap-8">
              <div className="rounded-sm bg-loire-accent-sage/25 px-4 py-6 transition-colors duration-200 hover:bg-loire-accent-sage/35 sm:px-6 sm:py-8">
                <p className="font-display text-4xl font-semibold leading-none text-loire-blue-deep sm:text-5xl">
                  85%
                </p>
                <p className="mt-3 text-sm leading-relaxed text-loire-blue sm:text-base">
                  Vineyards certified organic or environmentally sustainable
                  today
                </p>
              </div>

              <div className="rounded-sm border border-loire-accent-forest/30 bg-loire-accent-sage/15 px-4 py-6 transition-colors duration-200 hover:border-loire-accent-forest/50 hover:bg-loire-accent-sage/25 sm:px-6 sm:py-8">
                <p className="font-display text-4xl font-semibold leading-none text-loire-accent-forest sm:text-5xl">
                  2030
                </p>
                <p className="mt-3 text-sm leading-relaxed text-loire-blue sm:text-base">
                  Target for 100% certified organic or sustainable vineyards
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
