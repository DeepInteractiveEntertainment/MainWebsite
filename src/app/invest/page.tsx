import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import InvestSection from "@/components/InvestSection";
import { ui } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Invest in Deep Interactive Entertainment — an independent studio with two revenue engines: PC & console games and Unity Asset Store developer tools.",
  alternates: { canonical: "/invest" },
};

export default function InvestPage() {
  return (
    <>
      <PageHeader eyebrow={ui.invest_eyebrow} title={ui.invest_title} description={ui.invest_desc} />
      <InvestSection />
    </>
  );
}
