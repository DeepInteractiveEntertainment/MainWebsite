import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import StudioSection from "@/components/StudioSection";
import { ui } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Deep Interactive Entertainment — an independent game studio and Unity Asset Store vendor based in Istanbul, Türkiye. Meet the team and the platforms we ship to.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <PageHeader eyebrow={ui.studio_eyebrow} title={ui.studio_title} description={ui.studio_p1} />
      <StudioSection />
    </>
  );
}
