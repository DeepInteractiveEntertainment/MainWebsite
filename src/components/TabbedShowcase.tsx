"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Gamepad2, Wrench } from "lucide-react";
import Reveal from "./ui/Reveal";
import CatalogCard from "./CatalogCard";
import type { CatalogItem } from "@/lib/catalog";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

type TabKey = "games" | "tools";

export default function TabbedShowcase({
  games,
  tools,
}: {
  games: CatalogItem[];
  tools: CatalogItem[];
}) {
  const { t } = useLang();
  const [tab, setTab] = useState<TabKey>("games");
  const items = tab === "games" ? games : tools;

  const tabs: { key: TabKey; label: string; icon: typeof Gamepad2 }[] = [
    { key: "games", label: t(ui.nav_games), icon: Gamepad2 },
    { key: "tools", label: t(ui.nav_tools), icon: Wrench },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-x relative z-10">
        <Reveal className="flex flex-col items-center text-center">
          <span className="overline">{t(ui.featured_explore_eyebrow)}</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fog-50 sm:text-5xl">
            {t(ui.featured_explore_title)}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog-400">
            {t(ui.featured_explore_desc)}
          </p>
        </Reveal>

        {/* Tab switch */}
        <Reveal className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Games or tools"
            className="inline-flex items-center gap-1 rounded-full border border-ink-700/80 bg-ink-850/70 p-1 backdrop-blur"
          >
            {tabs.map(({ key, label, icon: Icon }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-brand-gradient text-ink-950 shadow-glow"
                      : "text-fog-400 hover:bg-ink-700/60 hover:text-fog-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel (re-keyed so it re-animates on switch) */}
        <div key={tab} className="tab-fade mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CatalogCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={tab === "games" ? "/games" : "/tools"}
            className="group inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-850 px-6 py-3 text-sm font-semibold text-fog-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
          >
            {t(tab === "games" ? ui.view_all_games : ui.view_all_tools)}
            <ArrowRight className="h-4 w-4 text-gold-400 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
