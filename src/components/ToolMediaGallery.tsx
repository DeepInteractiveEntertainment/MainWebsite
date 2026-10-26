"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, Play, X } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { useLang } from "@/lib/i18n";

export default function ToolMediaGallery({ item, compact = false }: { item: CatalogItem; compact?: boolean }) {
  const { t } = useLang();
  const media = item.media ?? [];
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = media[selected];
  const move = (delta: number) => setSelected((i) => (i + delta + media.length) % media.length);

  useEffect(() => {
    if (!expanded || !dialog.current) return;
    const node = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    node.showModal();
    return () => { node.close(); document.body.style.overflow = overflow; };
  }, [expanded]);

  if (!current) return null;
  const picture = (large = false) => current.type === "video" ? (
    <video key={current.src} src={current.src} poster={current.poster} controls playsInline preload="none"
      aria-label={t(current.title)} className={large ? "h-full max-h-[72svh] w-full object-contain" : "h-full w-full object-contain"} />
  ) : (
    <Image src={current.src} alt={`${item.name} — ${t(current.title)}`} width={1800} height={1125}
      sizes={large ? "100vw" : compact ? "(min-width: 1024px) 65vw, 100vw" : "(min-width: 1280px) 1200px, 100vw"}
      className={large ? "h-full max-h-[72svh] w-full object-contain" : "h-full w-full object-contain"} />
  );

  return (
    <div aria-label={`${item.name} ${t({ en: "media gallery", tr: "görsel galerisi" })}`}>
      <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
        <div className="flex items-center justify-between gap-3 border-b border-ink-700 px-4 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-fog-400 sm:px-5">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: item.accent }} />{current.type === "video" ? t({ en: "Product video", tr: "Tanıtım videosu" }) : t({ en: "Inside the toolkit", tr: "Araca yakından bak" })}</span>
          <span>{String(selected + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
        </div>
        <div className={`relative flex items-center justify-center bg-[#080b10] ${compact ? "aspect-[16/10]" : "aspect-[16/10] sm:aspect-video"}`}>
          {current.type === "image" ? <button type="button" onClick={() => setExpanded(true)} className="group relative h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" aria-label={`${t({ en: "Enlarge", tr: "Büyüt" })}: ${t(current.title)}`}>
            {picture()}
            <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/70 p-2.5 text-white transition-transform group-hover:scale-110"><Expand size={17} /></span>
          </button> : picture()}
        </div>
        <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
          <div><h3 className="font-display text-base font-medium text-fog-100 sm:text-lg">{t(current.title)}</h3><p className="mt-1 max-w-2xl text-xs leading-relaxed text-fog-400 sm:text-sm">{t(current.description)}</p></div>
          <div className="flex shrink-0 gap-1">
            <button type="button" onClick={() => move(-1)} aria-label={t({ en: "Previous media", tr: "Önceki görsel" })} className="rounded-full border border-ink-700 p-2.5 text-fog-200 transition-colors hover:bg-ink-700"><ArrowLeft size={16} /></button>
            <button type="button" onClick={() => move(1)} aria-label={t({ en: "Next media", tr: "Sonraki görsel" })} className="rounded-full border border-ink-700 p-2.5 text-fog-200 transition-colors hover:bg-ink-700"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2 sm:gap-3" style={{ gridTemplateColumns: `repeat(${media.length}, minmax(0, 1fr))` }}>
        {media.map((entry, i) => <button type="button" key={entry.src} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-label={`${t(entry.title)}${entry.type === "video" ? ` — ${t({ en: "Play video", tr: "Videoyu oynat" })}` : ""}`} className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-[#080b10] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${selected === i ? "border-gold-400 opacity-100" : "border-ink-700 opacity-60 hover:border-fog-400 hover:opacity-100"}`}>
          <Image src={entry.type === "video" ? entry.poster || item.cover : entry.src} alt="" width={240} height={160} sizes="(min-width: 1024px) 180px, 18vw" className="h-full w-full object-contain" />
          {entry.type === "video" && <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-white"><Play size={20} fill="currentColor" /></span>}
        </button>)}
      </div>
      {expanded && <dialog ref={dialog} onCancel={() => setExpanded(false)} onClose={() => setExpanded(false)} onClick={(e) => { if (e.target === e.currentTarget) setExpanded(false); }} onKeyDown={(e) => { if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); } if (e.key === "ArrowRight") { e.preventDefault(); move(1); } }} aria-label={`${item.name} — ${t({ en: "full-size gallery", tr: "tam boy galeri" })}`} className="fixed inset-0 m-auto w-[96vw] max-w-7xl max-h-[94svh] overflow-y-auto rounded-2xl border border-white/15 bg-[#080b10] p-4 text-white backdrop:bg-black/90 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-white/50">{item.name} · {selected + 1}/{media.length}</p><h3 className="mt-1 text-lg">{t(current.title)}</h3></div><button autoFocus type="button" onClick={() => setExpanded(false)} aria-label={t({ en: "Close gallery", tr: "Galeriyi kapat" })} className="rounded-full border border-white/20 p-3 hover:bg-white/10"><X size={20} /></button></div>
        <div className="flex h-[65svh] items-center justify-center">{picture(true)}</div>
        <div className="mt-4 flex items-center justify-between gap-4"><p className="text-sm text-white/65">{t(current.description)}</p><div className="flex gap-2"><button type="button" onClick={() => move(-1)} aria-label={t({ en: "Previous media", tr: "Önceki görsel" })} className="rounded-full border border-white/20 p-3"><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label={t({ en: "Next media", tr: "Sonraki görsel" })} className="rounded-full border border-white/20 p-3"><ArrowRight size={18} /></button></div></div>
      </dialog>}
    </div>
  );
}
