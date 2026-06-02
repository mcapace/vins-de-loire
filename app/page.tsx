import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import RegionStats from "@/components/RegionStats";
import Sustainability from "@/components/Sustainability";
import WineGrid from "@/components/WineGrid";
import EducationCTA from "@/components/EducationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <Hero />
      <Intro />
      <RegionStats />
      <Sustainability />
      <WineGrid />
      <EducationCTA />
      <Footer />
    </main>
  );
}
