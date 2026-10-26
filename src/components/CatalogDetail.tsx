"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Tag,
  Monitor,
  Activity,
  MessageCircle,
  Store,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import ToolDetailHero from "./ToolDetailHero";
import ToolMediaGallery from "./ToolMediaGallery";
import CoverArt from "./ui/CoverArt";
import BgVideo from "./ui/BgVideo";
import AnimatedBg from "./ui/AnimatedBg";
import type { CatalogItem } from "@/lib/catalog";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function CatalogDetail({
  item,
  others,
}: {
  item: CatalogItem;
  others: CatalogItem[];
}) {
  const { t, tl } = useLang();
  const isGame = item.kind === "game";
  const retro = item.theme === "retro-red";
  const backHref = isGame ? "/games" : "/tools";
  const backLabel = isGame ? ui.back_to_games : ui.back_to_tools;

  return (
    <article>
      {!isGame ? <ToolDetailHero item={item} /> : <>
      {/* ---- Cinematic hero ---- */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0 bg-ink-950">
          {item.video ? (
            <BgVideo
              src={item.video}
              poster={item.cover || undefined}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : item.cover ? (
            <div className="ken-burns absolute inset-0">
              <CoverArt item={item} priority />
            </div>
          ) : (
            <AnimatedBg className="opacity-90" />
          )}
          {/* soft edge transitions only */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950 via-ink-950/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full pb-16 pt-36">
          <Link
            href={backHref}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-fog-400 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t(backLabel)}
          </Link>

          <div className="mt-7 max-w-3xl">
            <p className="overline text-gold-400">{t(item.category)}</p>
            <h1
              className={`mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fog-50 sm:text-7xl ${
                retro ? "animate-flicker" : ""
              }`}
              style={retro ? { color: "#fb5b6d", textShadow: "0 0 30px rgba(244,63,94,0.55)" } : undefined}
            >
              {item.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-fog-300">{t(item.tagline)}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-sm text-fog-300">
                <Monitor className="h-4 w-4 text-gold-400" />
                {t(item.platform)}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-fog-300">
                <Activity className="h-4 w-4 text-gold-400" />
                {t(item.status)}
              </span>
            </div>

            {item.links && item.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {item.links.map((lnk) => (
                  <a
                    key={lnk.href}
                    href={lnk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-gold-400/50 pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-fog-50 transition-colors hover:border-gold-400 hover:text-gold-300"
                  >
                    {lnk.kind === "discord" ? (
                      <MessageCircle className="h-4 w-4 text-gold-400" />
                    ) : lnk.kind === "asset" ? (
                      <Store className="h-4 w-4 text-gold-400" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-gold-400" />
                    )}
                    {t(lnk.label)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      </>}
      {!isGame && item.media && <section id="product-media" className="container-x scroll-mt-24 pt-14 sm:pt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="overline text-fog-400">{t({ en: "See it for yourself", tr: "Yakından keşfet" })}</p><h2 className="mt-3 font-display text-3xl text-fog-100 sm:text-4xl">{t({ en: "Inside the toolkit", tr: "Aracın içinden" })}</h2></div><p className="max-w-md text-sm leading-relaxed text-fog-400">{t({ en: "Explore screenshots, cover artwork and a product video. Open any image for a closer look.", tr: "Ekran görüntülerini, kapağı ve ürün videosunu incele. Yakından bakmak için görselleri büyüt." })}</p></div>
        <ToolMediaGallery item={item} />
      </section>}
      {/* ---- Body ---- */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
            {/* Main */}
            <div>
              <Reveal>
                <span className="overline text-gold-400">{t(ui.overview)}</span>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-fog-300">
                  {tl(item.description).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              {item.features && item.features.length > 0 && (
                <Reveal className="mt-16">
                  <span className="overline text-gold-400">{t(ui.key_features)}</span>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {item.features.map((f) => (
                      <div
                        key={f.title.en}
                        className="border-t border-fog-500/15 pt-5"
                      >
                        <h3 className="font-display text-xl text-fog-50">{t(f.title)}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-fog-400">{t(f.text)}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {item.featureGroups && item.featureGroups.length > 0 && (
                <Reveal className="mt-16">
                  <span className="overline text-gold-400">{t(ui.whats_inside)}</span>
                  <div className="mt-6 space-y-8">
                    {item.featureGroups.map((g) => (
                      <div key={g.title.en}>
                        <h3 className="font-display text-base font-semibold uppercase tracking-wide text-gold-300">
                          {t(g.title)}
                        </h3>
                        <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                          {g.items.map((it) => (
                            <li key={it} className="flex items-start gap-3">
                              <Check className="mt-1 h-3.5 w-3.5 flex-none text-gold-500" strokeWidth={2.5} />
                              <span className="text-sm leading-relaxed text-fog-300">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Aside */}
            <aside>
              <Reveal className="lg:sticky lg:top-28">
                <div className="rounded-lg border border-fog-500/12 bg-ink-900/60 p-7">
                  <h3 className="overline text-fog-500">{t(ui.info)}</h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    <Row icon={<Tag className="h-4 w-4" />} label={t(ui.category_lbl)} value={t(item.category)} />
                    <Row icon={<Monitor className="h-4 w-4" />} label={t(ui.platform_lbl)} value={t(item.platform)} />
                    <Row icon={<Activity className="h-4 w-4" />} label={t(ui.status_lbl)} value={t(item.status)} gold />
                  </dl>

                  {item.stats && (
                    <div className="mt-6 grid grid-cols-3 gap-3 border-t border-fog-500/15 pt-6">
                      {item.stats.map((s) => (
                        <div key={s.label.en}>
                          <div className="font-display text-2xl text-gold-300">{s.value}</div>
                          <div className="mt-1 text-[0.66rem] leading-tight text-fog-500">
                            {t(s.label)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 border-t border-fog-500/15 pt-6">
                    <p className="overline text-fog-500">{t(ui.tech_lbl)}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-fog-500/20 px-3 py-1 text-xs font-medium text-fog-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-fog-500/15 pt-6">
                    <p className="overline text-fog-500">{t(ui.highlights_lbl)}</p>
                    <ul className="mt-3 space-y-2.5">
                      {tl(item.highlights).map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <Check className="mt-1 h-3.5 w-3.5 flex-none text-gold-500" strokeWidth={2.5} />
                          <span className="text-sm text-fog-300">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* Others */}
          {others.length > 0 && (
            <div className="mt-20 border-t border-fog-500/15 pt-14">
              <span className="overline text-gold-400">
                {t(isGame ? ui.other_games : ui.other_tools)}
              </span>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`${isGame ? "/games" : "/tools"}/${o.slug}`}
                    className="group flex items-center gap-4 border-t border-fog-500/15 py-4 transition-colors hover:border-gold-400/40"
                  >
                    <span className="font-display text-lg font-bold text-fog-500 transition-colors group-hover:text-gold-300">
                      {o.name.slice(0, 2)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-lg text-fog-100">{o.name}</p>
                      <p className="truncate text-xs uppercase tracking-[0.14em] text-fog-500">
                        {t(o.category)}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-none text-fog-500 transition-transform group-hover:translate-x-1 group-hover:text-gold-300" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

function Row({
  icon,
  label,
  value,
  gold,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="flex items-center gap-2 text-fog-500">
        {icon} {label}
      </dt>
      <dd className={`text-right font-medium ${gold ? "text-gold-300" : "text-fog-200"}`}>
        {value}
      </dd>
    </div>
  );
}
