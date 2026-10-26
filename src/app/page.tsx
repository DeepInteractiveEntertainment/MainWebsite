import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HomePillars from "@/components/HomePillars";
import TabbedShowcase from "@/components/TabbedShowcase";
import HomeSpotlight from "@/components/HomeSpotlight";
import HomePlatforms from "@/components/HomePlatforms";
import CTA from "@/components/CTA";
import { featuredGames } from "@/lib/games";
import { featuredTools } from "@/lib/tools";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <HomePillars />
      <TabbedShowcase games={featuredGames} tools={featuredTools} />
      <HomeSpotlight />
      <HomePlatforms />
      <CTA />
    </>
  );
}
