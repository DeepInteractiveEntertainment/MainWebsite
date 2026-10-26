import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CatalogShowcase from "@/components/CatalogShowcase";
import { games } from "@/lib/games";
import { ui } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Games by Deep Interactive Entertainment — Chaos Budz (out now on Steam), Hurda-G (coming soon) and Project X, for PC & console.",
  alternates: { canonical: "/games" },
};

export default function GamesPage() {
  return (
    <>
      <PageHeader
        eyebrow={ui.featured_games_eyebrow}
        title={ui.featured_games_title}
        description={ui.featured_games_desc}
      />
      <CatalogShowcase items={games} tightTop />
    </>
  );
}
