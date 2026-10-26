"use client";

import Link from "next/link";
import { Gamepad2, Wrench, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { ui } from "@/lib/dict";
import { useLang, type L } from "@/lib/i18n";

const pillars: {
  icon: typeof Gamepad2;
  title: L;
  desc: L;
  href: string;
}[] = [
  { icon: Gamepad2, title: ui.pillar_games_title, desc: ui.pillar_games_desc, href: "/games" },
  { icon: Wrench, title: ui.pillar_tools_title, desc: ui.pillar_tools_desc, href: "/tools" },
];

export default function HomePillars() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="overline">{t(ui.pillars_eyebrow)}</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fog-50 sm:text-5xl">
            {t(ui.pillars_title)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fog-400">{t(ui.pillars_desc)}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.href} delay={i * 110}>
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-700/80 bg-ink-850/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 sm:p-10"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-gradient opacity-15 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
                  />
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-ink-950 shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-fog-50">
                    {t(p.title)}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-fog-400">
                    {t(p.desc)}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                    {t(ui.pillar_link)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
