"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { useLang } from "@/lib/i18n";

export default function ToolDetailHero({ item }: { item: CatalogItem }) {
  const { t } = useLang();
  return <section className="relative overflow-hidden border-b border-ink-700 pb-14 pt-28 sm:pb-20 sm:pt-36"><div className="container-x">
    <Link href="/tools" className="inline-flex items-center gap-2 text-xs text-fog-400 hover:text-fog-100"><ArrowLeft size={14} />{t({ en: "All developer tools", tr: "Tüm geliştirici araçları" })}</Link>
    <div className="mt-8 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
      <div><p className="text-xs uppercase tracking-[.2em] text-fog-400">{t(item.category)}</p><h1 className="mt-4 font-display text-5xl font-semibold leading-[1.06] tracking-[-.04em] text-fog-50 sm:text-6xl">{item.name}</h1><p className="mt-5 text-lg leading-relaxed text-fog-300">{t(item.tagline)}</p><p className="mt-5 text-xs text-fog-400">{t(item.platform)}</p><span className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-700 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-fog-300"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" />{t({ en: "Asset Store review in progress", tr: "Asset Store incelemesi sürüyor" })}</span>
        <div className="mt-7 flex flex-wrap gap-5"><a href="#product-media" className="inline-flex items-center gap-3 rounded-full bg-fog-50 px-5 py-3 text-xs font-semibold text-ink-950">{t({ en: "Screenshots & videos", tr: "Görseller ve videolar" })}<ArrowDown size={15} /></a><Link href="/contact" className="inline-flex items-center gap-2 text-xs text-fog-200">{t({ en: "Ask about this tool", tr: "Bu araç hakkında bilgi al" })}<ArrowUpRight size={15} /></Link></div>
        {item.links && <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-b border-ink-700 pb-1 text-[11px] text-fog-400 hover:text-fog-100">{t(link.label)}<ArrowUpRight size={12} /></a>)}</div>}
      </div>
      <div className="overflow-hidden rounded-2xl border border-ink-700 bg-[#080b10] shadow-2xl"><Image src={item.cover} alt={`${item.name} — ${t({ en: "product cover", tr: "ürün kapağı" })}`} width={1500} height={1000} priority sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[3/2] h-auto w-full object-contain" /></div>
    </div>
  </div></section>;
}
