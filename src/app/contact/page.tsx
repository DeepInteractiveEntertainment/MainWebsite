import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/ContactSection";
import { ui } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Deep Interactive Entertainment for collaborations, press, publishing or partnership inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={ui.contact_eyebrow} title={ui.contact_title} description={ui.contact_desc} />
      <ContactSection />
    </>
  );
}
