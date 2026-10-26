import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDetail from "@/components/CatalogDetail";
import { tools, getTool } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: `${tool.name} — ${tool.tagline.en}`,
    description: tool.summary.en,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} | Deep Interactive Entertainment`,
      description: tool.summary.en,
      images: tool.cover ? [{ url: tool.cover }] : undefined,
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  const others = tools.filter((t) => t.slug !== tool.slug);
  return <CatalogDetail item={tool} others={others} />;
}
