import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDetail from "@/components/CatalogDetail";
import HurdaGPage from "@/components/HurdaGPage";
import { games, getGame } from "@/lib/games";

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Game not found" };
  return {
    title: `${game.name} — ${game.tagline.en}`,
    description: game.summary.en,
    alternates: { canonical: `/games/${game.slug}` },
    openGraph: {
      title: `${game.name} | Deep Interactive Entertainment`,
      description: game.summary.en,
      images: game.cover ? [{ url: game.cover }] : undefined,
    },
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  // Hurda-G gets its own fully custom retro (hurda-g.com style) panel.
  if (game.slug === "hurda-g") return <HurdaGPage />;

  const others = games.filter((g) => g.slug !== game.slug);
  return <CatalogDetail item={game} others={others} />;
}
