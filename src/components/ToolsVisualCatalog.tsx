"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Images, Play } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { useLang } from "@/lib/i18n";
import ToolMediaGallery from "./ToolMediaGallery";

export default function ToolsVisualCatalog({ items }: { items: CatalogItem[] }) {
  const { t, tl } = useLang();
  return <>
    <section className="relative overflow-hidden border-b border-ink-700 pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[.25em] text-fog-400">
          <span>Deep Interactive / {t({ en: "Developer tools", tr: "Geliştirici araçları" })}</span>
          <span>01 — 03 / Unity Asset Store</span>
        </div>
        <div className="mb-12 mt-8 grid items-end gap-6 lg:grid-cols-[1.3fr_1fr]">
          <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-[-.05em] text-fog-50 sm:text-6xl lg:text-7xl">{t({ en: "Your game.", tr: "Senin oyunun." })}<br /><span className="text-fog-400">{t({ en: "Our toolkit.", tr: "Bizim araçlarımız." })}</span></h1>
          <div className="max-w-md lg:pb-2"><p className="text-base leading-relaxed text-fog-300 sm:text-lg">{t({ en: "Multiplayer worlds. Reactive agents. Controls that feel right. Explore our developer tools through real editor screenshots and product demos.", tr: "Çok oyunculu dünyalar. Tepkisel ajanlar. Oyuncuya uygun kontroller. Geliştirici araçlarımızı gerçek editör görüntüleri ve ürün demolarıyla keşfet." })}</p><a href="#tool-showcases" className="mt-6 inline-flex items-center gap-3 border-b border-fog-400 pb-2 text-xs font-semibold uppercase tracking-[.15em] text-fog-100">{t({ en: "Explore the tools", tr: "Araçları keşfet" })}<ArrowDown size={16} /></a></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item, i) => <a href={`#${item.slug}`} key={item.slug} className="group overflow-hidden rounded-xl border border-ink-700 bg-ink-900 transition-colors hover:border-fog-400">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#080b10]"><Image src={item.cover} alt={`${item.name} ${t({ en: "cover", tr: "kapak görseli" })}`} width={900} height={600} sizes="(min-width: 640px) 32vw, 100vw" priority={i === 0} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" /></div>
            <div className="flex items-center justify-between gap-3 px-4 py-4"><span className="flex items-center gap-3 text-sm font-medium text-fog-100"><span className="text-[10px] text-fog-500">0{i + 1}</span>{item.name}</span><ArrowDown size={15} className="text-fog-400 transition-transform group-hover:translate-y-1" /></div>
          </a>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-fog-400"><span className="inline-flex items-center gap-2"><Images size={14} />{t({ en: "13 images from our tools", tr: "Araçlarımızdan 13 görsel" })}</span><span className="inline-flex items-center gap-2"><Play size={14} />{t({ en: "3 product videos", tr: "3 ürün videosu" })}</span><span>{t({ en: "Unity Asset Store submissions under review", tr: "Unity Asset Store başvuruları incelemede" })}</span></div>
      </div>
    </section>
    <div id="tool-showcases" className="container-x">
      {items.map((item, i) => <section id={item.slug} key={item.slug} className="scroll-mt-24 border-b border-ink-700 py-16 sm:py-24">
        <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.2em] text-fog-500"><span>0{i + 1}</span><span className="h-px flex-1 bg-ink-700" /><span>{t(item.category)}</span></div>
        <div className="grid items-start gap-9 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3">{item.icon && <Image src={item.icon} alt="" width={48} height={48} className="h-12 w-12 rounded-xl border border-ink-700" />}<span className="text-[10px] font-medium uppercase tracking-[.16em] text-fog-400">Unity Asset Store / {t({ en: "Developer toolkit", tr: "Geliştirici aracı" })}</span></div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-.04em] text-fog-50 sm:text-5xl">{item.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-fog-200">{t(item.tagline)}</p>
            <p className="mt-5 text-sm leading-7 text-fog-400">{t(item.summary)}</p>
            <ul className="mt-7 space-y-3">{tl(item.highlights).map((h) => <li key={h} className="flex items-center gap-3 text-xs leading-relaxed text-fog-300"><span className="h-1 w-1 shrink-0 rounded-full" style={{ background: item.accent }} />{h}</li>)}</ul>
            <Link href={`/tools/${item.slug}`} className="mt-8 inline-flex items-center justify-between gap-8 rounded-full border border-fog-400 px-5 py-3 text-xs font-semibold text-fog-100 transition-colors hover:bg-fog-50 hover:text-ink-950">{t({ en: "Explore the full toolkit", tr: "Tüm özellikleri incele" })}<ArrowUpRight size={17} /></Link>
          </div>
          <div className="min-w-0"><ToolMediaGallery item={item} compact /></div>
        </div>
      </section>)}
    </div>
    <section className="container-x py-16 sm:py-24"><div className="flex flex-col justify-between gap-6 rounded-2xl border border-ink-700 bg-ink-900 p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="text-[10px] uppercase tracking-[.2em] text-fog-500">{t({ en: "Built by developers, for developers", tr: "Geliştiricilerden, geliştiricilere" })}</p><h2 className="mt-3 font-display text-2xl text-fog-100 sm:text-3xl">{t({ en: "Find the right tool for your next project.", tr: "Sıradaki projen için doğru aracı bul." })}</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-4 text-sm text-fog-200">{t({ en: "Talk to the team", tr: "Ekiple iletişime geç" })}<ArrowUpRight size={18} /></Link></div></section>
  </>;
}
