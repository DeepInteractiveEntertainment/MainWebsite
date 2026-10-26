"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CatalogCard from "./CatalogCard";
import type { CatalogItem } from "@/lib/catalog";
import { useLang, type L } from "@/lib/i18n";

type Props = {
  items: CatalogItem[];
  eyebrow?: L;
  title?: L;
  description?: L;
  cta?: { label: L; href: string };
  tightTop?: boolean;
};

export default function CatalogShowcase({
  items,
  eyebrow,
  title,
  description,
  cta,
  tightTop = false,
}: Props) {
  const { t } = useLang();
  return (
    <section className={tightTop ? "pb-20 pt-6 sm:pb-28" : "py-20 sm:py-28"}>
      <div className="container-x">
        {title && (
          <SectionHeading
            eyebrow={eyebrow ? t(eyebrow) : undefined}
            title={t(title)}
            description={description ? t(description) : undefined}
          />
        )}

        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${title ? "mt-16" : ""}`}
        >
          {items.map((item, i) => (
            <Reveal as="article" key={item.slug} delay={(i % 3) * 110}>
              <CatalogCard item={item} />
            </Reveal>
          ))}
        </div>

        {cta && (
          <Reveal className="mt-14 flex justify-center">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-3 border-b border-gold-400/40 pb-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-fog-100 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {t(cta.label)}
              <ArrowRight className="h-4 w-4 text-gold-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
