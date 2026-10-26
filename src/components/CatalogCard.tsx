"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CoverArt from "./ui/CoverArt";
import type { CatalogItem } from "@/lib/catalog";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

const dotClass: Record<CatalogItem["statusKind"], string> = {
  released: "bg-fog-50",
  soon: "bg-[#ef4444]",
  dev: "bg-fog-400",
};

export default function CatalogCard({ item }: { item: CatalogItem }) {
  const { t } = useLang();
  const href = `${item.kind === "game" ? "/games" : "/tools"}/${item.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700/80 bg-ink-850/70 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40"
    >
      {/* gradient glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "0 0 0 1px rgba(139,92,246,0.35), 0 24px 60px -24px rgba(139,92,246,0.45)" }}
      />

      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <CoverArt item={item} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-fog-200 backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${dotClass[item.statusKind]}`} />
          {t(item.status)}
        </span>
        {item.icon && (
          <span className="absolute -bottom-5 right-4 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.icon} alt="" className="h-full w-full object-cover" />
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-gold-300">
          {t(item.category)}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-fog-50">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fog-400">
          {t(item.tagline)}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-ink-700/70 pt-3.5">
          <span className="text-xs font-medium text-fog-500">{t(item.platform)}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-fog-300 transition-colors group-hover:text-gold-300">
            {t(ui.card_view)}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
