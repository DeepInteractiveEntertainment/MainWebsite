import type { L } from "./i18n";
import type { UiKey } from "./dict";

export type NavLink = { key: UiKey; href: string };

export const navLinks: NavLink[] = [
  { key: "nav_home", href: "/" },
  { key: "nav_games", href: "/games" },
  { key: "nav_tools", href: "/tools" },
  { key: "nav_publishing", href: "/publishing" },
  { key: "nav_studio", href: "/studio" },
  { key: "nav_contact", href: "/contact" },
];

export type Platform = {
  name: string;
  image: string;
  desc: L;
  accent: string;
};

export const platforms: Platform[] = [
  {
    name: "PC / Steam",
    image: "/platform/pc.jpg",
    accent: "#e8e8e8",
    desc: {
      en: "High-fidelity gaming on Windows & Linux. Our primary platform with full community features.",
      tr: "Windows ve Linux'ta yüksek çözünürlüklü oyun deneyimi. Topluluk özellikleriyle birincil platformumuz.",
    },
  },
  {
    name: "PlayStation",
    image: "/platform/ps.jpg",
    accent: "#bdbdbd",
    desc: {
      en: "Bringing our titles to PS5 — optimized for DualSense haptics and stunning 4K visuals.",
      tr: "Oyunlarımızı PS5'e taşıyoruz — DualSense haptikleri ve etkileyici 4K görseller için optimize.",
    },
  },
  {
    name: "Xbox",
    image: "/platform/xbox.jpg",
    accent: "#9a9a9a",
    desc: {
      en: "Xbox Series X|S support with cross-play capabilities and modern console features.",
      tr: "Çapraz oyun desteği ve modern konsol özellikleriyle Xbox Series X|S desteği.",
    },
  },
];

export type Member = {
  name: string;
  role: L;
  image: string;
};

export const team: Member[] = [
  {
    name: "Bilal",
    image: "/team/bilal.jpg",
    role: { en: "Founder · Gameplay & Systems", tr: "Kurucu · Oynanış & Sistemler" },
  },
  {
    name: "Nadir",
    image: "/team/nadir.jpg",
    role: { en: "Programming · Engine", tr: "Programlama · Motor" },
  },
  {
    name: "Kübra",
    image: "/team/kubra.jpg",
    role: { en: "Art · Design", tr: "Sanat · Tasarım" },
  },
  {
    name: "Isaac",
    image: "/team/isaac.jpg",
    role: { en: "Production · Community", tr: "Prodüksiyon · Topluluk" },
  },
];

export type Social = {
  name: string;
  href: string;
  /** image icon in /public/social, or null for an inline SVG handled in component */
  image: string | null;
};

export const socials: Social[] = [
  { name: "Steam", href: "https://store.steampowered.com/app/4308870/Chaos_Budz/", image: "/social/steam.png" },
  { name: "Discord", href: "https://discord.gg/ngc6KQcvk", image: "/social/discord.jpg" },
  { name: "YouTube", href: "https://www.youtube.com/@DeepInteractiveEntertainment", image: "/social/youtube.png" },
  { name: "Instagram", href: "https://www.instagram.com/deepinteractiveentertainment/", image: "/social/instagram.jpg" },
  { name: "X", href: "https://x.com/Deep_Int_Ent", image: "/social/twitter.jpg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/deepinteractiveentertainment/", image: "/social/linkedin.jpg" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61579524501721", image: "/social/facebook.jpg" },
  { name: "Reddit", href: "https://www.reddit.com/user/Choice_Arugula_4974/", image: "/social/reddit.jpg" },
];

export const studioStats: { value: string; label: L }[] = [
  { value: "3", label: { en: "Games", tr: "Oyun" } },
  { value: "3", label: { en: "Asset Store tools", tr: "Asset Store aracı" } },
  { value: "∞", label: { en: "Ambition", tr: "Hırs" } },
];

export const CONTACT_EMAIL = "deepinteractiveentertainment@gmail.com";
export const DISCORD_URL = "https://discord.gg/ngc6KQcvk";
