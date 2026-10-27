"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ModelViewer from "./hurda/ModelViewer";
import ModelGallery, { type GalleryItem } from "./hurda/ModelGallery";
import YouTube from "./hurda/YouTube";
import FaceEditor from "./hurda/FaceEditor";
import { Plate, Reveal, Stat } from "./hurda/ui";
import { useLang, type L } from "@/lib/i18n";
import { SITE_URL, DISCORD_URL } from "@/lib/hurda/site";
import {
  tagline, pitch, acronym, facts, loop, tapeRules, story, rings, weathers, crew, enemies, bosses,
  wildlife, wildRoles, ship, seaEvents, videos, headVariants, terminalTabs,
} from "@/lib/hurda/content";
import arsenal from "@/lib/hurda/data/arsenal.json";

/* Deep içindeki HURDA-G sayfası: hurda-g.com'un sekmelerinin özeti.
   Her sekme hurda-g.com'daki tam sayfasına bağlanır. */

type TabKey = "game" | "world" | "crew" | "terminal" | "enemies" | "wildlife" | "arsenal" | "ship" | "videos";

const tabs: { key: TabKey; label: L }[] = [
  { key: "game", label: { tr: "Oyun", en: "Game" } },
  { key: "world", label: { tr: "Dünya", en: "World" } },
  { key: "crew", label: { tr: "Tayfa", en: "Crew" } },
  { key: "terminal", label: { tr: "TAB Terminali", en: "TAB Terminal" } },
  { key: "enemies", label: { tr: "Düşmanlar", en: "Enemies" } },
  { key: "wildlife", label: { tr: "Vahşi Yaşam", en: "Wildlife" } },
  { key: "arsenal", label: { tr: "Cephanelik", en: "Arsenal" } },
  { key: "ship", label: { tr: "Gemi", en: "Ship" } },
  { key: "videos", label: { tr: "Videolar", en: "Videos" } },
];

type ArsenalItem = { id: string; name: L; desc: L; price: number; cat: string; model: string | null };

const catLabel: Record<string, L> = {
  weapons: { tr: "Silah", en: "Weapon" },
  melee: { tr: "Yakın dövüş", en: "Melee" },
  tools: { tr: "Alet", en: "Tool" },
  gear: { tr: "Ekipman", en: "Gear" },
  health: { tr: "Sağlık", en: "Health" },
  explosives: { tr: "Patlayıcı", en: "Explosive" },
  consumables: { tr: "Sarf", en: "Consumable" },
  companion: { tr: "Yol dostu", en: "Companion" },
};

function FullLink({ tab, label }: { tab: TabKey; label: L }) {
  const { t } = useLang();
  return (
    <a
      href={`${SITE_URL}/${tab}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400"
    >
      {t(label)} — hurda-g.com/{tab} <ArrowUpRight className="h-5 w-5" />
    </a>
  );
}

function Head({ over, title, text }: { over: string; title: string; text?: string }) {
  return (
    <div>
      <p className="overline">{over}</p>
      <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] text-bone-50 sm:text-6xl">{title}</h2>
      {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone-400 sm:text-lg">{text}</p>}
    </div>
  );
}

export default function HurdaGPage() {
  const { t, lang } = useLang();
  const [tab, setTab] = useState<TabKey>("game");

  // #enemies gibi bağlantılar doğrudan o sekmeyi açar.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1) as TabKey;
      if (tabs.some((x) => x.key === h)) setTab(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const pick = (k: TabKey) => {
    setTab(k);
    history.replaceState(null, "", `#${k}`);
    document.getElementById("hg-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const enemyItems: GalleryItem[] = useMemo(
    () =>
      enemies.map((e) => ({
        ...e,
        badge: { tr: `KADEME ${e.tier}`, en: `TIER ${e.tier}` },
        details: [
          { k: { tr: "① Uyarı", en: "① Telegraph" }, v: e.telegraph },
          { k: { tr: "② Tehdit", en: "② Threat" }, v: e.threat },
          { k: { tr: "③ Karşı hamle", en: "③ Counter" }, v: e.counter },
        ],
      })),
    [],
  );
  const wildItems: GalleryItem[] = useMemo(() => wildlife.map((w) => ({ ...w, badge: wildRoles[w.kind] })), []);
  const arsenalItems = arsenal as ArsenalItem[];
  const arsenalModels: GalleryItem[] = useMemo(
    () =>
      // Her kategoriden ikişer ürün: silah, yakın dövüş, alet, ekipman, sağlık, patlayıcı…
      Object.keys(catLabel)
        .flatMap((c) => arsenalItems.filter((a) => a.cat === c && a.model).slice(0, 2))
        .map((a) => ({
          id: a.model!,
          name: a.name,
          role: { tr: `${catLabel[a.cat]?.tr ?? a.cat} · ${a.price.toLocaleString("tr")}`, en: `${catLabel[a.cat]?.en ?? a.cat} · ${a.price.toLocaleString("en")}` },
          text: a.desc,
        })),
    [arsenalItems],
  );

  return (
    <div className="hg min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(245,165,36,0.16),transparent_55%)]" />
        <div className="container-x relative grid items-center gap-10 pb-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Link href="/games" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-400 hover:text-amber-300">
              <ArrowLeft className="h-4 w-4" /> {t({ tr: "Oyunlar", en: "Games" })}
            </Link>
            <p className="mt-6 font-mono text-sm tracking-[0.2em] text-amber-400">
              <span className="blink text-danger">●</span> REC · ▶ PLAY 18:42 · {t({ tr: "SIRADAKİ OYUNUMUZ", en: "OUR NEXT GAME" })}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hurda/brand/logo.webp" alt="HURDA-G" className="mt-5 w-full max-w-[32rem]" />
            <p className="mt-3 font-mono text-xs tracking-[0.18em] text-bone-600">{t(acronym)}</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] text-bone-50 sm:text-6xl">{t(tagline)}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone-400">{t(pitch)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-plate is-amber">
                hurda-g.com <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" lang="en" className="btn-plate">
                Discord <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_38%,#3a3027,#0d0b09_70%)] scanlines sm:aspect-square">
                <ModelViewer id="robot-hurda-g" alt="HURDA-G Model G" />
                <div className="pointer-events-none absolute inset-x-3 top-3 flex justify-between font-mono text-[0.7rem] tracking-[0.18em] text-bone-200">
                  <span>MODEL G</span>
                  <span className="text-ok">STATUS: CONNECTED</span>
                </div>
              </div>
            </Plate>
          </Reveal>
        </div>
        <div className="container-x relative grid grid-cols-2 gap-6 pb-14 sm:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <Stat key={f.k.en} k={t(f.k)} v={t(f.v)} />
          ))}
        </div>
      </section>

      {/* ── SEKMELER ── */}
      <nav id="hg-tabs" aria-label="HURDA-G" className="sticky top-[4.75rem] z-30 scroll-mt-[4.75rem] border-y border-iron-700 bg-iron-900/95 backdrop-blur">
        <ul role="tablist" className="container-x flex gap-1 overflow-x-auto py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((x, i) => (
            <li key={x.key} className="shrink-0">
              <button
                role="tab"
                aria-selected={tab === x.key}
                onClick={() => pick(x.key)}
                className={`flex h-10 items-center gap-2 rounded-sm px-3 font-display text-[0.95rem] font-bold uppercase tracking-wider transition-colors ${
                  tab === x.key ? "bg-amber-400 text-iron-950" : "text-bone-400 hover:bg-iron-800 hover:text-bone-50"
                }`}
              >
                <span className={`font-mono text-[0.65rem] ${tab === x.key ? "text-iron-950/70" : "text-bone-600"}`}>{String(i + 1).padStart(2, "0")}</span>
                {t(x.label)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x py-14 sm:py-20" role="tabpanel">
        {tab === "game" && (
          <>
            <Head over={t({ tr: "Sefer döngüsü", en: "Voyage loop" })} title={t({ tr: "Faks gelir. Kaset döner. Ada puf olur.", en: "The fax arrives. The tape rolls. The island goes poof." })} />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {loop.map((s) => (
                <li key={s.n} className="rounded-md border border-iron-700 bg-iron-850 p-5">
                  <div className="flex justify-between font-mono text-xs tracking-[0.18em]">
                    <span className="text-bone-600">{s.n}</span>
                    <span className="text-amber-400">{s.osd}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-bone-50">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-400">{t(s.text)}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tapeRules.map((r) => (
                <Plate key={r.title.en} tight className="bg-iron-900">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight text-amber-300">{t(r.title)}</h3>
                  <p className="mt-2 text-sm text-bone-200">{t(r.text)}</p>
                </Plate>
              ))}
            </div>
            <FullLink tab="game" label={{ tr: "Döngünün tamamı", en: "The full loop" }} />
          </>
        )}

        {tab === "world" && (
          <>
            <Head over={t({ tr: "Hikâye", en: "Story" })} title={t({ tr: "Kasette ne var?", en: "What's on the tape?" })} />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {story.map((s) => (
                <Plate key={s.title.en} className="bg-iron-900">
                  <h3 className="font-display text-3xl font-bold uppercase text-amber-300">{t(s.title)}</h3>
                  <p className="mt-3 leading-relaxed text-bone-200">{t(s.text)}</p>
                </Plate>
              ))}
            </div>
            <div className="mt-12 overflow-x-auto rounded-md border border-iron-700">
              <table className="w-full min-w-[30rem] text-left text-sm">
                <thead className="bg-iron-800 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber-400">
                  <tr>
                    <th className="px-4 py-3">{t({ tr: "Halka", en: "Ring" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Uzaklık", en: "Distance" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Ada", en: "Island" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Mahzen", en: "Cellar" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Deniz", en: "Sea" })}</th>
                  </tr>
                </thead>
                <tbody>
                  {rings.map((r) => (
                    <tr key={r.ring} className="border-t border-iron-700 bg-iron-850">
                      <td className="px-4 py-3 font-display text-2xl font-bold text-bone-50">{r.ring}</td>
                      <td className="px-4 py-3 font-mono text-bone-200">{r.dist}</td>
                      <td className="px-4 py-3 text-bone-200">{t(r.island)}</td>
                      <td className="px-4 py-3 text-bone-200">{t(r.cellar)}</td>
                      <td className="px-4 py-3 text-bone-400">{t(r.sea)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {weathers.map((w) => (
                <li
                  key={w.en}
                  className={`rounded-sm border px-3 py-1.5 font-display text-base font-semibold uppercase tracking-wide ${
                    w.hazard ? "border-danger/60 bg-danger/10 text-[#ff8a74]" : "border-iron-600 bg-iron-850 text-bone-200"
                  }`}
                >
                  {lang === "tr" ? w.tr : w.en}
                </li>
              ))}
            </ul>
            <FullLink tab="world" label={{ tr: "Dünyanın tamamı", en: "The whole world" }} />
          </>
        )}

        {tab === "crew" && (
          <>
            <Head
              over={t({ tr: "Tayfa", en: "Crew" })}
              title={t({ tr: "Hurdadan yapılmışlar", en: "Made of scrap" })}
              text={t({ tr: "Karta tıkla, modeli 3B olarak çevir.", en: "Click a card and spin the model in 3D." })}
            />
            <div className="mt-10">
              <ModelGallery items={crew} cols={4} />
            </div>
            <div className="mt-14">
              <Head over={t({ tr: "Kafa tipleri", en: "Head types" })} title={t({ tr: "Üç kafa, tek robot", en: "Three heads, one robot" })} />
              <div className="mt-8">
                <ModelGallery items={headVariants} cols={3} />
              </div>
            </div>
            <FullLink tab="crew" label={{ tr: "Tayfanın tamamı", en: "The whole crew" }} />
          </>
        )}

        {tab === "terminal" && (
          <>
            <Head
              over={t({ tr: "TAB › Saha terminali", en: "TAB › Field terminal" })}
              title={t({ tr: "Robotun elindeki tüplü TV", en: "The tube TV in your robot's hands" })}
              text={t({
                tr: "TAB'a basınca robot taşınabilir bir tüplü TV kaldırır. Oyun durmaz. Beş sekme: Harita, Karakter, Özellikler, Bot, Galeri.",
                en: "Press TAB and the robot lifts a portable tube TV. The game keeps running. Five tabs: Map, Character, Stats, Bot, Gallery.",
              })}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {terminalTabs.map((x) => (
                <Plate key={x.key} tight className="bg-iron-900">
                  <h3 className="font-display text-2xl font-bold uppercase text-amber-300">{t(x.name)}</h3>
                  <p className="mt-2 text-sm text-bone-200">{t(x.text)}</p>
                  <ul className="mt-3 space-y-1.5">
                    {x.points.map((p) => (
                      <li key={p.en} className="font-mono text-xs leading-relaxed text-[#9ff0b4]">▸ {t(p)}</li>
                    ))}
                  </ul>
                </Plate>
              ))}
            </div>
            <div className="mt-14">
              <Head over={t({ tr: "Karakter › Yüz düzenle", en: "Character › Edit face" })} title={t({ tr: "Panel yüzü — dene", en: "Panel face — try it" })} />
              <div className="mt-8">
                <FaceEditor />
              </div>
            </div>
            <FullLink tab="terminal" label={{ tr: "TAB terminalinin tamamı", en: "The full TAB terminal" }} />
          </>
        )}

        {tab === "enemies" && (
          <>
            <Head over={t({ tr: "Kayıttakiler", en: "The Recorded" })} title={t({ tr: "Uyarı → tehdit → karşı hamle", en: "Telegraph → threat → counter" })} />
            <div className="mt-10">
              <ModelGallery items={enemyItems} cols={4} />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {bosses.map((b) => (
                <Plate key={b.id} className="bg-iron-900">
                  <p className="overline">BOSS</p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold uppercase text-bone-50">{t(b.name)}</h3>
                  <p className="mt-2 text-bone-200">{t(b.text)}</p>
                  <p className="mt-3 font-mono text-xs tracking-[0.15em] text-amber-400">{t(b.stat)}</p>
                </Plate>
              ))}
            </div>
            <FullLink tab="enemies" label={{ tr: "Düşmanların tamamı", en: "Every enemy" }} />
          </>
        )}

        {tab === "wildlife" && (
          <>
            <Head over={t({ tr: "Vahşi yaşam", en: "Wildlife" })} title={t({ tr: "Denizin hurda canlıları — ve bir keçi", en: "The sea's scrap creatures — and a goat" })} />
            <div className="mt-10">
              <ModelGallery items={wildItems} cols={4} />
            </div>
            <FullLink tab="wildlife" label={{ tr: "Vahşi yaşamın tamamı", en: "All the wildlife" }} />
          </>
        )}

        {tab === "arsenal" && (
          <>
            <Head
              over={t({ tr: "Cephanelik", en: "Arsenal" })}
              title={t({ tr: "Scrap Master'ın dükkânı", en: "Scrap Master's shop" })}
              text={t({
                tr: `${arsenalItems.length} ürün: silahlar, yakın dövüş, aletler, ekipman, sağlık, patlayıcılar ve bir hurda köpek. Aşağıda 3B modeli olan ekipmanlardan bir seçki var.`,
                en: `${arsenalItems.length} items: weapons, melee, tools, gear, health, explosives and a scrap dog. Below is a selection of the gear with 3D models.`,
              })}
            />
            <div className="mt-10">
              <ModelGallery items={arsenalModels} cols={4} />
            </div>
            <FullLink tab="arsenal" label={{ tr: "Tam katalog", en: "Full catalogue" }} />
          </>
        )}

        {tab === "ship" && (
          <>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <Plate className="bg-iron-900">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[linear-gradient(to_bottom,#1d2a2e,#0b1416)] scanlines">
                  <ModelViewer id="hurda-ferry" alt={t(ship[0].name)} orbit="55deg 70deg auto" />
                </div>
              </Plate>
              <Head over={t(ship[0].role)} title={t(ship[0].name)} text={t(ship[0].text)} />
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {seaEvents.map((e) => (
                <div key={e.title.en} className="rounded-md border border-iron-700 bg-iron-850 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-3xl font-bold uppercase text-bone-50">{t(e.title)}</h3>
                    <span className="font-mono text-xs tracking-[0.15em] text-amber-400">{t(e.stat)}</span>
                  </div>
                  <p className="mt-2 text-bone-400">{t(e.text)}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <ModelGallery items={ship.slice(1)} cols={4} />
            </div>
            <FullLink tab="ship" label={{ tr: "Geminin tamamı", en: "The whole ship" }} />
          </>
        )}

        {tab === "videos" && (
          <>
            <Head over={t({ tr: "Geliştirme", en: "Development" })} title={t({ tr: "Kayıttan görüntüler", en: "Footage from the tape" })} />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {videos.map((v) => (
                <div key={v.id}>
                  <YouTube id={v.id} title={t(v.title)} />
                  <h3 className="mt-3 font-display text-xl font-bold uppercase text-bone-50">{t(v.title)}</h3>
                  <p className="text-sm text-bone-400">{t(v.text)}</p>
                </div>
              ))}
            </div>
            <FullLink tab="videos" label={{ tr: "Tüm videolar", en: "All videos" }} />
          </>
        )}
      </div>

      {/* ── hurda-g.com ── */}
      <section className="container-x pb-20">
        <Plate className="bg-iron-900 text-center">
          <div className="px-2 py-8 sm:py-12">
            <p className="overline">{t({ tr: "Oyunun resmi sitesi", en: "The game's official site" })}</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none text-bone-50 sm:text-6xl">
              {t({ tr: "Her model, her düşman, her balta: hurda-g.com", en: "Every model, every enemy, every axe: hurda-g.com" })}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-plate is-amber">
                hurda-g.com <ArrowUpRight className="h-5 w-5" />
              </a>
              <Link href="/games" className="btn-plate">
                {t({ tr: "Diğer oyunlar", en: "Other games" })} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-6 flex flex-wrap justify-center gap-5 text-sm">
              <a href={`${SITE_URL}/terms`} target="_blank" rel="noopener noreferrer" className="text-bone-400 hover:text-amber-300">
                {t({ tr: "Hizmet Koşulları", en: "Terms of Service" })}
              </a>
              <a href={`${SITE_URL}/privacy`} target="_blank" rel="noopener noreferrer" className="text-bone-400 hover:text-amber-300">
                {t({ tr: "Gizlilik Politikası", en: "Privacy Policy" })}
              </a>
            </p>
          </div>
        </Plate>
      </section>
    </div>
  );
}
