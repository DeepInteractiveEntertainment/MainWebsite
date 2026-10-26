"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Reveal from "./ui/Reveal";
import { socials, CONTACT_EMAIL, DISCORD_URL } from "@/lib/content";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function ContactSection() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const labels = {
    name: lang === "tr" ? "Ad" : "Name",
    email: lang === "tr" ? "E-posta" : "Email",
    message: lang === "tr" ? "Mesaj" : "Message",
    namePh: lang === "tr" ? "Adınız" : "Your name",
    msgPh: lang === "tr" ? "Aklınızdakileri yazın..." : "Tell us what's on your mind...",
    send: lang === "tr" ? "Mesaj Gönder" : "Send message",
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${lang === "tr" ? "İletişim" : "Contact"} — ${name || "Deep Interactive"}`,
    );
    const body = encodeURIComponent(
      `${labels.name}: ${name}\n${labels.email}: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Info */}
          <Reveal>
            <h2
              className="text-2xl font-bold tracking-tight text-fog-50"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(ui.contact_info)}
            </h2>

            <div className="mt-6 space-y-4">
              <InfoRow icon={<Mail className="h-5 w-5" />} label={t(ui.contact_email)}>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-fog-200 transition-colors hover:text-neon-cyan">
                  {CONTACT_EMAIL}
                </a>
              </InfoRow>
              <InfoRow icon={<MapPin className="h-5 w-5" />} label={t(ui.contact_location)}>
                <span className="text-fog-200">{t(ui.contact_location_val)}</span>
              </InfoRow>
              <InfoRow icon={<MessageCircle className="h-5 w-5" />} label="Discord">
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-fog-200 transition-colors hover:text-neon-cyan">
                  {t(ui.contact_join_discord)} ↗
                </a>
              </InfoRow>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-fog-500">
              {t(ui.contact_follow)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-ink-600 bg-ink-850 transition-all hover:-translate-y-0.5 hover:border-neon-cyan/50"
                >
                  {s.image && (
                    <Image src={s.image} alt={s.name} width={22} height={22} className="h-[22px] w-[22px] rounded object-cover" />
                  )}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="scanlines relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850/60 p-7 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-gradient opacity-15 blur-3xl"
              />
              <div className="relative space-y-5">
                <Field label={labels.name}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={labels.namePh}
                    className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-neon-cyan/60"
                  />
                </Field>
                <Field label={labels.email}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-neon-cyan/60"
                  />
                </Field>
                <Field label={labels.message}>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder={labels.msgPh}
                    className="w-full resize-none rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-neon-cyan/60"
                  />
                </Field>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  {labels.send}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-700 bg-ink-850/60 p-4">
      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ink-900 text-neon-cyan">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-fog-500">{label}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-fog-400">
        {label}
      </span>
      {children}
    </label>
  );
}
