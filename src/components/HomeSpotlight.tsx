"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import CoverArt from "./ui/CoverArt";
import { getGame } from "@/lib/games";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function HomeSpotlight() {
  const { t } = useLang();
  const game = getGame("hurda-g");
  if (!game) return null;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-ink-700/80 bg-ink-850/60 lg:grid-cols-2">
            {/* Art */}
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
              <div className="ken-burns absolute inset-0">
                <CoverArt item={game} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-850/80 lg:bg-gradient-to-l" />
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide"
                style={{ borderColor: "rgba(244,63,94,0.4)", color: "#fb5b6d" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e] shadow-[0_0_8px_#f43f5e]" />
                {t(ui.status_soon)}
              </span>
              <p className="mt-5 overline">{t(ui.spotlight_eyebrow)}</p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-fog-50 sm:text-5xl">
                {game.name}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-fog-400">
                {t(ui.spotlight_desc)}
              </p>
              <div className="mt-7">
                <Link
                  href="/games/hurda-g"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {t(ui.spotlight_cta)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
