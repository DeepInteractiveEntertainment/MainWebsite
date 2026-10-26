import type { CatalogItem } from "./catalog";

export const games: CatalogItem[] = [
  {
    slug: "chaos-budz",
    kind: "game",
    name: "Chaos Budz",
    featured: true,
    tagline: {
      en: "Fast-paced, action-packed chaos",
      tr: "Hızlı tempolu, aksiyon dolu kaos",
    },
    category: { en: "Action", tr: "Aksiyon" },
    platform: { en: "PC · Steam", tr: "PC · Steam" },
    cover: "/games/chaos-budz.jpg",
    video: "/videos/chaos-budz.mp4",
    accent: "#22d3ee",
    accentSoft: "rgba(34, 211, 238, 0.12)",
    status: { en: "Available now", tr: "Yayında" },
    statusKind: "released",
    summary: {
      en: "Dive into a wild, action-packed experience with fast-paced gameplay, unique mechanics and an unforgettable world. Live now on Steam.",
      tr: "Hızlı tempolu oynanışı, benzersiz mekanikleri ve unutulmaz dünyasıyla vahşi ve aksiyon dolu bir deneyime dalın. Steam'de yayında.",
    },
    description: {
      en: [
        "Chaos Budz is our debut title — a fast-paced action game built around chaotic combat and moment-to-moment mayhem. Every run throws new surprises at you.",
        "Crafted in our Istanbul studio, it's the first taste of what Deep Interactive Entertainment is about: fluid gameplay, bold worlds and a whole lot of chaos.",
      ],
      tr: [
        "Chaos Budz ilk oyunumuz — kaotik çatışma ve an be an çılgınlık üzerine kurulu hızlı tempolu bir aksiyon oyunu. Her oyun yeni sürprizlerle geliyor.",
        "İstanbul stüdyomuzda geliştirilen bu oyun, Deep Interactive Entertainment'ın ne olduğunun ilk tadı: akıcı oynanış, cesur dünyalar ve bolca kaos.",
      ],
    },
    features: [
      {
        title: { en: "Fast-paced combat", tr: "Hızlı tempolu çatışma" },
        text: {
          en: "Twitch-reflex action with escalating chaos every second.",
          tr: "Her saniye artan kaosla refleks tabanlı aksiyon.",
        },
      },
      {
        title: { en: "Unique mechanics", tr: "Benzersiz mekanikler" },
        text: {
          en: "A bag of unusual systems that keep every session fresh.",
          tr: "Her oturumu taze tutan sıra dışı sistemler.",
        },
      },
    ],
    tech: ["PC", "Steam", "Controller support"],
    highlights: {
      en: ["Live on Steam", "Action · PC · 2025", "Made in Istanbul"],
      tr: ["Steam'de yayında", "Aksiyon · PC · 2025", "İstanbul üretimi"],
    },
    links: [
      {
        label: { en: "View on Steam", tr: "Steam'de Görüntüle" },
        href: "https://store.steampowered.com/app/4308870/Chaos_Budz/",
        kind: "steam",
      },
    ],
  },
  {
    slug: "hurda-g",
    kind: "game",
    name: "Hurda-G",
    featured: true,
    tagline: {
      en: "Co-op horror-comedy extraction — our next game",
      tr: "Co-op korku-komedi extraction — sıradaki oyunumuz",
    },
    category: { en: "Co-op Extraction · Horror-Comedy", tr: "Co-op Extraction · Korku-Komedi" },
    platform: { en: "PC · Mac · Mobile", tr: "PC · Mac · Mobil" },
    cover: "/hurda/brand/cover.webp",
    accent: "#f5a524",
    accentSoft: "rgba(245, 165, 36, 0.14)",
    status: { en: "Coming soon", tr: "Çok yakında" },
    statusKind: "soon",
    summary: {
      en: "1–4 player co-op: sail a scrap ferry, land on cursed islands born from a 1987 VHS tape and haul the scrap back before the tape runs out.",
      tr: "1–4 kişilik co-op: hurda feribotla açıl, 1987 VHS kasetinden doğan lanetli adalara çık ve kaset bitmeden hurdayı gemiye taşı.",
    },
    description: {
      en: [
        "You are Model G — a rude little robot Scrap Master built out of his shop's junk. Sail the scrap sea, raid islands that only exist while the tape rolls, dive into cellars and get back aboard before everything goes poof.",
        "Physics-driven first-person co-op with ragdolls, proximity voice, 30 weather states, metal sea wildlife and a 105-item shop.",
      ],
      tr: [
        "Sen Model G'sin — Scrap Master'ın dükkân hurdalarından yaptığı kaba, küçük bir robot. Hurda denizine açıl, sadece kaset dönerken var olan adalara çık, mahzenlere in ve her şey puf olmadan gemiye dön.",
        "Fizik tabanlı, birinci şahıs co-op: ragdoll, yakın sesli sohbet, 30 hava durumu, metal deniz canlıları ve 105 ürünlük bir dükkân.",
      ],
    },
    features: [
      {
        title: { en: "Tape-timed islands", tr: "Kaset süreli adalar" },
        text: {
          en: "Every island is a VHS recording. When the tape ends, the island vanishes — with anyone still on it.",
          tr: "Her ada bir VHS kaydı. Kaset bitince ada yok olur — üstünde kim kaldıysa onunla birlikte.",
        },
      },
      {
        title: { en: "Physics co-op chaos", tr: "Fizik co-op kaosu" },
        text: {
          en: "Two-hand carry, ragdolls, grappling ropes, a crew cannon and a goat that headbutts.",
          tr: "İki elle taşıma, ragdoll, kancalı ip, karakter fırlatma topu ve tos atan bir keçi.",
        },
      },
    ],
    tech: ["Unity", "FishNet", "PC · Mac · Mobile"],
    highlights: {
      en: ["1–4 player co-op", "Extraction · horror-comedy", "18 languages"],
      tr: ["1–4 kişilik co-op", "Extraction · korku-komedi", "18 dil"],
    },
    links: [
      {
        label: { en: "Official site — hurda-g.com", tr: "Resmi site — hurda-g.com" },
        href: "https://hurda-g.com",
        kind: "web",
      },
      {
        label: { en: "Join Discord for updates", tr: "Güncellemeler için Discord" },
        href: "https://discord.gg/ngc6KQcvk",
        kind: "discord",
      },
    ],
  },
  {
    slug: "project-x",
    kind: "game",
    name: "Project X",
    featured: true,
    tagline: {
      en: "A new PC & console game in the works",
      tr: "Geliştirilmekte olan yeni bir PC & konsol oyunu",
    },
    category: { en: "TBA", tr: "Belirlenecek" },
    platform: { en: "PC & Console", tr: "PC & Konsol" },
    cover: "",
    accent: "#a855f7",
    accentSoft: "rgba(168, 85, 247, 0.14)",
    status: { en: "In development", tr: "Geliştiriliyor" },
    statusKind: "dev",
    summary: {
      en: "Project X is a PC game currently in development, planned to release on both console and PC. The release date is still unknown — it's next in the pipeline.",
      tr: "Project X şu anda geliştirilmekte olan, hem konsol hem PC için planlanan bir PC oyunudur. Çıkış tarihi henüz bilinmiyor — sıradaki projemiz.",
    },
    description: {
      en: [
        "Project X is the game we're actively building right now. It's a PC-first title designed to ship on both console and PC.",
        "The release date is not yet set — it's simply next in our pipeline. Follow along as it takes shape.",
      ],
      tr: [
        "Project X şu anda üzerinde aktif olarak çalıştığımız oyun. Hem konsol hem PC'de çıkacak şekilde tasarlanan, önce PC odaklı bir oyun.",
        "Çıkış tarihi henüz belli değil — sadece sıradaki projemiz. Şekillenişini takip edin.",
      ],
    },
    features: [
      {
        title: { en: "PC & console", tr: "PC & konsol" },
        text: {
          en: "Designed from the ground up to ship on PC and console.",
          tr: "Baştan sona PC ve konsolda çıkacak şekilde tasarlandı.",
        },
      },
      {
        title: { en: "Next in the pipeline", tr: "Sıradaki proje" },
        text: {
          en: "Actively in development — release date to be announced.",
          tr: "Aktif geliştirmede — çıkış tarihi açıklanacak.",
        },
      },
    ],
    tech: ["PC", "Console", "In development"],
    highlights: {
      en: ["In development", "PC & Console", "Release date: TBA"],
      tr: ["Geliştiriliyor", "PC & Konsol", "Çıkış tarihi: TBA"],
    },
    links: [
      {
        label: { en: "Follow on Discord", tr: "Discord'da takip et" },
        href: "https://discord.gg/ngc6KQcvk",
        kind: "discord",
      },
    ],
  },
];

export const featuredGames = games.filter((g) => g.featured);

export function getGame(slug: string): CatalogItem | undefined {
  return games.find((g) => g.slug === slug);
}
