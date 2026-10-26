import type { Metadata } from "next";
import ToolsVisualCatalog from "@/components/ToolsVisualCatalog";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Dev Tools",
  description:
    "Unity Asset Store developer tools by Deep Interactive Entertainment — CrossLobby Pro, DeepAI Pro and Mobile Controls Pro.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return <ToolsVisualCatalog items={tools} />;
}
