import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";
import Manifesto from "@/components/Manifesto";
import GrapesStyles from "@/components/GrapesStyles";
import RegionStats from "@/components/RegionStats";
import WineGrid from "@/components/WineGrid";
import Sustainability from "@/components/Sustainability";
import EducationCTA from "@/components/EducationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="min-w-0 overflow-x-hidden">
        <Hero />
        <Manifesto />
        <GrapesStyles />
        <RegionStats />
        <Sustainability />
        <WineGrid />
        <EducationCTA />
        <Footer />
      </main>
    </>
  );
}
