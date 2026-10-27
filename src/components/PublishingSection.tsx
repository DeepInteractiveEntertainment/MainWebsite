"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, Banknote, Megaphone, Share2, Bug, Store, Smartphone } from "lucide-react";
import Reveal from "./ui/Reveal";
import CoverArt from "./ui/CoverArt";
import { games } from "@/lib/games";
import { tools } from "@/lib/tools";
import { CONTACT_EMAIL } from "@/lib/content";
import { useLang, type L } from "@/lib/i18n";

/* Yayıncılık — PlayWay'in "For Developers" sayfası gibi sade: tek cümle teklif, oyunlarımız, kısa başvuru. */

const offers: { icon: typeof Banknote; title: L; text: L }[] = [
  { icon: Banknote, title: { en: "Financing", tr: "Finansman" }, text: { en: "Project-based support with agreed milestones.", tr: "Kilometre taşlarıyla proje bazlı destek." } },
  { icon: Megaphone, title: { en: "Marketing", tr: "Pazarlama" }, text: { en: "Trailers, press, creators and festivals.", tr: "Fragman, basın, içerik üreticileri ve festivaller." } },
  { icon: Share2, title: { en: "Social & community", tr: "Sosyal medya & topluluk" }, text: { en: "Channels, Discord and playtests.", tr: "Kanallar, Discord ve oyun testleri." } },
  { icon: Bug, title: { en: "Testing", tr: "Test" }, text: { en: "QA on real devices before every release.", tr: "Her sürümden önce gerçek cihazlarda test." } },
  { icon: Store, title: { en: "Steam release", tr: "Steam çıkışı" }, text: { en: "Store page, wishlists, demo and launch day.", tr: "Mağaza sayfası, wishlist, demo ve çıkış günü." } },
  { icon: Smartphone, title: { en: "Mobile ports", tr: "Mobil port" }, text: { en: "Successful games on iOS and Android.", tr: "Başarılı oyunları iOS ve Android'e taşıma." } },
];

const stats: { v: string; k: L }[] = [
  { v: "1", k: { en: "game live on Steam", tr: "oyun Steam'de yayında" } },
  { v: "2", k: { en: "games in development", tr: "oyun geliştirmede" } },
  { v: "3", k: { en: "Unity tools of our own", tr: "kendi Unity aracımız" } },
  { v: "4", k: { en: "platforms: PC, Mac, iOS, Android", tr: "platform: PC, Mac, iOS, Android" } },
];

const steps: { title: L; text: L }[] = [
  { title: { en: "Send", tr: "Gönder" }, text: { en: "A build or a gameplay video.", tr: "Bir sürüm ya da oynanış videosu." } },
  { title: { en: "We play", tr: "Oynarız" }, text: { en: "Every pitch gets played.", tr: "Her başvuru oynanır." } },
  { title: { en: "We talk", tr: "Konuşuruz" }, text: { en: "If it fits, we call and make a plan.", tr: "Uyarsa görüşür, plan yaparız." } },
];

const send: L[] = [
  { en: "A playable build or gameplay video", tr: "Oynanabilir sürüm ya da oynanış videosu" },
  { en: "Genre and 2–3 similar games", tr: "Tür ve 2–3 benzer oyun" },
  { en: "Team, production stage and target release", tr: "Ekip, üretim aşaması ve hedef çıkış" },
  { en: "Steam page, if you have one", tr: "Varsa Steam sayfası" },
];

const input =
  "w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-neon-cyan/60";

export default function PublishingSection() {
  const { t, lang } = useLang();
  const [f, setF] = useState({ name: "", email: "", game: "", link: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const tr = lang === "tr";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `${tr ? "Ad" : "Name"}: ${f.name}`,
      `${tr ? "E-posta" : "Email"}: ${f.email}`,
      `${tr ? "Oyun" : "Game"}: ${f.game}`,
      `${tr ? "Sürüm / video" : "Build / video"}: ${f.link}`,
      "",
      f.message,
    ].join("\n");
    const subject = `${tr ? "Yayıncılık başvurusu" : "Publishing pitch"} — ${f.game || f.name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Teklif — tek cümle */}
      <section className="py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <p className="max-w-4xl font-display text-2xl leading-snug text-fog-100 sm:text-3xl">
              {t({
                en: "We help with financing, marketing, social media, testing, Steam release and cross-promotion with our own games — and bring successful titles to mobile.",
                tr: "Finansman, pazarlama, sosyal medya, test, Steam çıkışı ve kendi oyunlarımızla çapraz tanıtımda yardımcı oluyoruz; başarılı oyunları mobile de taşıyoruz.",
              })}
            </p>
            <a
              href="#pitch"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {t({ en: "Pitch your game", tr: "Oyununu gönder" })}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title.en} delay={(i % 3) * 60}>
                  <div className="flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-850/60 p-5">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-gradient text-ink-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-fog-50">{t(o.title)}</p>
                      <p className="mt-0.5 text-sm text-fog-400">{t(o.text)}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <dl className="grid grid-cols-2 gap-6 border-y border-ink-700 py-8 lg:grid-cols-4">
              {stats.map((x) => (
                <div key={x.k.en}>
                  <dt className="font-display text-5xl font-semibold text-fog-50">{x.v}</dt>
                  <dd className="mt-1 text-sm text-fog-400">{t(x.k)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Oyunlarımız */}
      <section className="py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <p className="overline">{t({ en: "Our games", tr: "Oyunlarımız" })}</p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 3) * 70}>
                <Link href={`/games/${g.slug}`} className="group block overflow-hidden rounded-2xl border border-ink-700 bg-ink-850/60 transition-all hover:-translate-y-1 hover:border-white/15">
                  <div className="aspect-[16/9] overflow-hidden">
                    <CoverArt item={g} className="transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <p className="font-display text-lg font-semibold text-fog-50">{g.name}</p>
                      <p className="text-xs text-fog-500">{t(g.status)}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teknolojimiz */}
      <section className="py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <p className="overline">{t({ en: "Our tech", tr: "Teknolojimiz" })}</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-fog-400">
              {t({
                en: "Games we publish can use our own Unity tools for lobbies and multiplayer, enemy AI and mobile controls.",
                tr: "Yayınladığımız oyunlar lobi ve çok oyunculu, düşman yapay zekâsı ve mobil kontroller için kendi Unity araçlarımızı kullanabilir.",
              })}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {tools.map((x, i) => (
              <Reveal key={x.slug} delay={(i % 3) * 70}>
                <Link href={`/tools/${x.slug}`} className="group block overflow-hidden rounded-2xl border border-ink-700 bg-ink-850/60 transition-all hover:-translate-y-1 hover:border-white/15">
                  <div className="aspect-[16/9] overflow-hidden">
                    <CoverArt item={x} className="transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <p className="p-4 font-display text-lg font-semibold text-fog-50">{x.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <p className="overline">{t({ en: "How it works", tr: "Nasıl işliyor" })}</p>
          </Reveal>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((x, i) => (
              <Reveal key={x.title.en} delay={i * 70}>
                <li className="flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-850/60 p-5">
                  <span className="font-display text-3xl font-semibold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-fog-50">{t(x.title)}</p>
                    <p className="text-sm text-fog-400">{t(x.text)}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Kısa başvuru */}
      <section id="pitch" className="scroll-mt-24 py-14 pb-20 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="overline">{t({ en: "Pitch your game", tr: "Oyununu gönder" })}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
              {t({ en: "Send us a build or a video", tr: "Bize bir sürüm ya da video gönder" })}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fog-400">
              {t({
                en: "A short description of the game and team, where you are in production and what you need. We play every pitch.",
                tr: "Oyunun ve ekibin kısa tanıtımı, üretimde nerede olduğun ve neye ihtiyacın olduğu. Her başvuruyu oynuyoruz.",
              })}
            </p>
            <ul className="mt-5 space-y-2">
              {send.map((x) => (
                <li key={x.en} className="flex gap-3 text-sm text-fog-200">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-400" />
                  {t(x)}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-fog-500">
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-fog-200 underline underline-offset-4 hover:text-neon-cyan">{CONTACT_EMAIL}</a>
            </p>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={onSubmit} className="scanlines relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850/60 p-6 sm:p-8">
              <div className="relative grid gap-4 sm:grid-cols-2">
                <Field label={t({ en: "Your name", tr: "Adın" })}><input required value={f.name} onChange={set("name")} className={input} /></Field>
                <Field label={t({ en: "Email", tr: "E-posta" })}><input required type="email" value={f.email} onChange={set("email")} placeholder="you@studio.com" className={input} /></Field>
                <Field label={t({ en: "Game", tr: "Oyun" })}><input required value={f.game} onChange={set("game")} className={input} /></Field>
                <Field label={t({ en: "Build or video link", tr: "Sürüm ya da video linki" })}><input required value={f.link} onChange={set("link")} placeholder="https://" className={input} /></Field>
                <div className="sm:col-span-2">
                  <Field label={t({ en: "About the game", tr: "Oyun hakkında" })}>
                    <textarea value={f.message} onChange={set("message")} rows={4} className={`${input} resize-none`} />
                  </Field>
                </div>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 sm:col-span-2">
                  <Send className="h-4 w-4" />
                  {t({ en: "Send", tr: "Gönder" })}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-fog-400">{label}</span>
      {children}
    </label>
  );
}
