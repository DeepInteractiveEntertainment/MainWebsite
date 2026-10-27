import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PublishingSection from "@/components/PublishingSection";
import { ui } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Publishing",
  description:
    "Deep Interactive Entertainment publishes independent games. Pitch your game: multiplayer and multi-platform tech, localization, store launch and community support.",
  alternates: { canonical: "/publishing" },
};

export default function PublishingPage() {
  return (
    <>
      <PageHeader eyebrow={ui.publish_eyebrow} title={ui.publish_title} description={ui.publish_desc} />
      <PublishingSection />
    </>
  );
}
