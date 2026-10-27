import type { L } from "./i18n";

/** UI copy dictionary. Every string carries both languages. */
export const ui = {
  // ---- Nav ----
  nav_home: { en: "Home", tr: "Ana Sayfa" },
  nav_games: { en: "Games", tr: "Oyunlar" },
  nav_tools: { en: "Dev Tools", tr: "Geliştirici Araçları" },
  nav_studio: { en: "Studio", tr: "Stüdyo" },
  nav_publishing: { en: "Publishing", tr: "Yayıncılık" },
  nav_contact: { en: "Contact", tr: "İletişim" },
  nav_cta: { en: "Join Discord", tr: "Discord'a Katıl" },

  // ---- Hero ----
  hero_badge: {
    en: "Independent Game Studio · Istanbul, Türkiye",
    tr: "Bağımsız Oyun Stüdyosu · İstanbul, Türkiye",
  },
  hero_title_1: { en: "Worlds worth", tr: "İçinde kaybolmaya" },
  hero_title_2: { en: "getting lost in", tr: "değer dünyalar" },
  hero_title_3: { en: "You play them.", tr: "Siz oynuyorsunuz." },
  hero_desc: {
    en: "We craft cinematic action games for PC & console — and forge the production-grade tools that power other studios, on the Unity Asset Store.",
    tr: "PC ve konsol için sinematik aksiyon oyunları yaratıyoruz — ve diğer stüdyolara güç veren üretim seviyesindeki araçları Unity Asset Store'da geliştiriyoruz.",
  },
  hero_cta_games: { en: "Explore Games", tr: "Oyunları Keşfet" },
  hero_cta_tools: { en: "Dev Tools", tr: "Geliştirici Araçları" },
  hero_scroll: { en: "Scroll", tr: "Kaydır" },
  hero_stat_games: { en: "Titles", tr: "Oyun" },
  hero_stat_tools: { en: "Asset Store Tools", tr: "Asset Store Aracı" },
  hero_stat_platforms: { en: "Platforms", tr: "Platform" },

  // ---- Home pillars ----
  pillars_eyebrow: { en: "What we do", tr: "Ne yapıyoruz" },
  pillars_title: { en: "Games & developer tools", tr: "Oyunlar ve geliştirici araçları" },
  pillars_desc: {
    en: "We ship games players love — and the developer tools studios build them with.",
    tr: "Oyuncuların sevdiği oyunlar ve stüdyoların onları geliştirdiği araçlar yayınlıyoruz.",
  },
  pillar_games_title: { en: "Games", tr: "Oyunlar" },
  pillar_games_desc: {
    en: "Action titles for PC & console — from Chaos Budz on Steam today to Hurda-G and Project X next.",
    tr: "PC ve konsol için aksiyon oyunları — bugün Steam'deki Chaos Budz'dan sıradaki Hurda-G ve Project X'e.",
  },
  pillar_tools_title: { en: "Developer tools", tr: "Geliştirici araçları" },
  pillar_tools_desc: {
    en: "Tools for multiplayer, AI and mobile controls, built for the Unity Asset Store.",
    tr: "Unity Asset Store için çok oyunculu sistemler, yapay zekâ ve mobil kontrol araçları geliştiriyoruz.",
  },
  pillar_link: { en: "Learn more", tr: "Detaylar" },

  // ---- Home spotlight ----
  spotlight_eyebrow: { en: "Next up", tr: "Sıradaki" },
  spotlight_desc: {
    en: "Co-op horror-comedy extraction: sail a scrap ferry to cursed VHS islands and haul the scrap back before the tape runs out.",
    tr: "Co-op korku-komedi extraction: hurda feribotla lanetli VHS adalarına açıl, kaset bitmeden hurdayı gemiye taşı.",
  },
  spotlight_cta: { en: "See Hurda-G", tr: "Hurda-G'yi Gör" },

  // ---- Home platforms strip ----
  platforms_strip_eyebrow: { en: "Ships on", tr: "Yayınlandığı yerler" },

  // ---- Home tabbed section ----
  featured_explore_eyebrow: { en: "Explore", tr: "Keşfet" },
  featured_explore_title: { en: "Games & dev tools", tr: "Oyunlar & araçlar" },
  featured_explore_desc: {
    en: "Two things we make: action games for players, and production-grade tools for developers. Switch between them.",
    tr: "İki şey üretiyoruz: oyuncular için aksiyon oyunları ve geliştiriciler için üretim seviyesinde araçlar. Aralarında geçiş yap.",
  },

  // ---- Generic section ----
  featured_games_eyebrow: { en: "Games", tr: "Oyunlar" },
  featured_games_title: { en: "Our releases", tr: "Oyunlarımız" },
  featured_games_desc: {
    en: "Titles crafted with passion and precision — on Steam today and coming to every platform.",
    tr: "Tutkuyla ve titizlikle geliştirilen oyunlar — bugün Steam'de, yakında tüm platformlarda.",
  },
  featured_tools_eyebrow: { en: "Dev Tools", tr: "Geliştirici Araçları" },
  featured_tools_title: { en: "Built for developers", tr: "Geliştiriciler için" },
  featured_tools_desc: {
    en: "Tools for multiplayer, AI and mobile games on the Unity Asset Store — by Deep Interactive Entertainment.",
    tr: "Unity Asset Store için çok oyunculu, yapay zekâ ve mobil oyun geliştirme araçları — Deep Interactive Entertainment imzasıyla.",
  },
  view_all_games: { en: "All games", tr: "Tüm oyunlar" },
  view_all_tools: { en: "All dev tools", tr: "Tüm araçlar" },

  // ---- Cards / detail ----
  card_view: { en: "View", tr: "İncele" },
  status_available: { en: "Available now", tr: "Yayında" },
  status_soon: { en: "Coming soon", tr: "Çok yakında" },
  status_dev: { en: "In development", tr: "Geliştiriliyor" },
  back_to_games: { en: "All games", tr: "Tüm oyunlar" },
  back_to_tools: { en: "All dev tools", tr: "Tüm araçlar" },
  overview: { en: "Overview", tr: "Genel bakış" },
  key_features: { en: "Key features", tr: "Öne çıkan özellikler" },
  whats_inside: { en: "What's inside", tr: "İçinde neler var" },
  info: { en: "Info", tr: "Bilgiler" },
  category_lbl: { en: "Category", tr: "Kategori" },
  platform_lbl: { en: "Platform", tr: "Platform" },
  status_lbl: { en: "Status", tr: "Durum" },
  tech_lbl: { en: "Tech", tr: "Teknoloji" },
  highlights_lbl: { en: "Highlights", tr: "Öne çıkanlar" },
  other_games: { en: "Other games", tr: "Diğer oyunlar" },
  other_tools: { en: "Other tools", tr: "Diğer araçlar" },
  get_on_steam: { en: "View on Steam", tr: "Steam'de Görüntüle" },
  get_on_asset_store: { en: "Unity Asset Store", tr: "Unity Asset Store" },
  notify_me: { en: "Get notified", tr: "Haber ver" },

  // ---- Studio ----
  studio_eyebrow: { en: "Studio", tr: "Stüdyo" },
  studio_title: { en: "We are Deep Interactive", tr: "Biz Deep Interactive'iz" },
  studio_p1: {
    en: "An independent team experienced in PlayStation, Xbox and PC game development. We build projects with rich storytelling and fluid gameplay — including online and multiplayer experiences.",
    tr: "PlayStation, Xbox ve PC oyun geliştirmede deneyimli bağımsız bir ekibiz. Zengin hikâye anlatımı ve akıcı oynanışa sahip, çevrimiçi ve çok oyunculu deneyimler dahil projeler geliştiriyoruz.",
  },
  studio_p2: {
    en: "Our goal is to realize high-quality projects as an experienced team in both design and development — and to give other developers the same tools we use ourselves.",
    tr: "Amacımız, hem tasarım hem geliştirmede deneyimli bir ekip olarak yüksek kaliteli projeler ortaya koymak ve kendi kullandığımız araçları diğer geliştiricilere de sunmaktır.",
  },
  team_title: { en: "The team", tr: "Ekip" },
  platforms_title: { en: "Where we ship", tr: "Yayınladığımız platformlar" },
  platforms_desc: {
    en: "From PC to living-room consoles — we build for every player, everywhere.",
    tr: "PC'den salon konsollarına — her yerdeki her oyuncu için geliştiriyoruz.",
  },

  // ---- Publishing ----
  publish_eyebrow: { en: "Publishing", tr: "Yayıncılık" },
  publish_title: { en: "Let's ship your game together", tr: "Oyununu birlikte çıkaralım" },
  publish_desc: {
    en: "Deep Interactive publishes independent games. If you have a playable build and a team that wants to finish it, we want to see it.",
    tr: "Deep Interactive bağımsız oyunları yayınlıyor. Oynanabilir bir sürümün ve oyununu bitirmek isteyen bir ekibin varsa görmek istiyoruz.",
  },
  // ---- Publishing CTA (ana sayfa) ----
  publish_cta_eyebrow: { en: "Publishing", tr: "Yayıncılık" },
  publish_cta_title: { en: "Got a game? Let's ship it together.", tr: "Oyunun mu var? Birlikte çıkaralım." },
  publish_cta_desc: {
    en: "We publish independent games: financing, marketing, testing and Steam release. Send us your build.",
    tr: "Bağımsız oyunları yayınlıyoruz: finansman, pazarlama, test ve Steam çıkışı. Sürümünü bize gönder.",
  },
  publish_cta_btn: { en: "Pitch your game", tr: "Oyununu gönder" },

  // ---- Contact ----
  contact_eyebrow: { en: "Contact", tr: "İletişim" },
  contact_title: { en: "Get in touch", tr: "İletişime geçin" },
  contact_desc: {
    en: "For collaborations, press or publishing inquiries — or just to say hi — we'd love to hear from you.",
    tr: "İş birlikleri, basın veya yayıncılık talepleri için — ya da sadece merhaba demek için — sizden haber almak isteriz.",
  },
  contact_info: { en: "Contact info", tr: "İletişim bilgileri" },
  contact_email: { en: "Email", tr: "E-posta" },
  contact_location: { en: "Location", tr: "Konum" },
  contact_location_val: { en: "Beşiktaş, Istanbul — Türkiye", tr: "Beşiktaş, İstanbul — Türkiye" },
  contact_follow: { en: "Follow us", tr: "Bizi takip edin" },
  contact_join_discord: { en: "Join our Discord", tr: "Discord'umuza katılın" },

  // ---- Footer ----
  footer_tagline: {
    en: "Independent game studio & Unity Asset Store vendor. Istanbul, Türkiye.",
    tr: "Bağımsız oyun stüdyosu & Unity Asset Store yayıncısı. İstanbul, Türkiye.",
  },
  footer_rights: { en: "All rights reserved.", tr: "Tüm hakları saklıdır." },
  footer_nav: { en: "Navigate", tr: "Gezin" },
  footer_connect: { en: "Connect", tr: "Bağlan" },
} satisfies Record<string, L>;

export type UiKey = keyof typeof ui;
