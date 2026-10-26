import type { CatalogItem } from "./catalog";
import { toolMedia } from "./tool-media";

const ASSET_STORE = "https://assetstore.unity.com/publishers"; // placeholder publisher link

const toolCatalog: CatalogItem[] = [
  {
    slug: "crosslobby-pro",
    kind: "tool",
    name: "CrossLobby Pro",
    featured: true,
    tagline: {
      en: "Cross-platform multiplayer lobbies for Unity",
      tr: "Unity için çapraz platform çok oyunculu lobiler",
    },
    category: { en: "Multiplayer · Networking", tr: "Çok Oyunculu · Ağ" },
    platform: { en: "Unity · EOS · FishNet", tr: "Unity · EOS · FishNet" },
    cover: "/tools/crosslobby-cover.png",
    video: "/videos/crosslobby.mp4",
    icon: "/tools/crosslobby-icon.png",
    accent: "#3b82f6",
    accentSoft: "rgba(59, 130, 246, 0.14)",
    status: { en: "Coming soon", tr: "Çok yakında" },
    statusKind: "soon",
    summary: {
      en: "A complete cross-platform multiplayer lobby solution for Unity, built on Epic Online Services (EOS), FishNet and FishyEOS. Create, browse, join and manage lobbies across platforms with a single unified ProductUserId.",
      tr: "Epic Online Services (EOS), FishNet ve FishyEOS üzerine kurulu, Unity için eksiksiz bir çapraz platform çok oyunculu lobi çözümü. Tek bir birleşik ProductUserId ile platformlar arası lobi oluştur, listele, katıl ve yönet.",
    },
    description: {
      en: [
        "CrossLobby Pro is a complete cross-platform multiplayer lobby solution for Unity, built on Epic Online Services (EOS), FishNet and FishyEOS. Players sign in using Epic Games, Steam, Apple, Google Play or Device ID while sharing the same backend identity through EOS Connect.",
        "It includes a fully functional lobby system with ready states, host migration, lobby passwords, invite codes, friend integration, automatic player spawning and seamless FishNet networking over EOS P2P Relay. No dedicated server and no port forwarding are required.",
        "The package ships with a complete playable demo featuring login flow, lobby browser, lobby room, ready system, in-game networking, player spawning, pause menu and cross-platform authentication examples. Ideal for co-op, survival, party games, shooters and RPGs.",
      ],
      tr: [
        "CrossLobby Pro, Epic Online Services (EOS), FishNet ve FishyEOS üzerine kurulu, Unity için eksiksiz bir çapraz platform çok oyunculu lobi çözümüdür. Oyuncular Epic Games, Steam, Apple, Google Play veya Device ID ile giriş yaparken EOS Connect üzerinden aynı arka uç kimliğini paylaşır.",
        "Ready durumları, host migration, lobi şifreleri, davet kodları, arkadaş entegrasyonu, otomatik oyuncu spawn'lama ve EOS P2P Relay üzerinden kesintisiz FishNet ağı içeren tam işlevli bir lobi sistemi sunar. Adanmış sunucu ve port yönlendirme gerekmez.",
        "Paket; giriş akışı, lobi tarayıcısı, lobi odası, ready sistemi, oyun içi ağ, oyuncu spawn, duraklatma menüsü ve çapraz platform kimlik doğrulama örnekleri içeren tam oynanabilir bir demo ile gelir. Co-op, survival, parti oyunları, nişancı ve RPG'ler için idealdir.",
      ],
    },
    features: [
      {
        title: { en: "Cross-platform identity", tr: "Çapraz platform kimlik" },
        text: {
          en: "Epic, Steam, Apple, Google Play or Device ID — one unified ProductUserId via EOS Connect.",
          tr: "Epic, Steam, Apple, Google Play veya Device ID — EOS Connect ile tek birleşik ProductUserId.",
        },
      },
      {
        title: { en: "No server, no port forwarding", tr: "Sunucu yok, port yönlendirme yok" },
        text: {
          en: "FishNet networking over EOS P2P Relay — no dedicated server required.",
          tr: "EOS P2P Relay üzerinden FishNet ağı — adanmış sunucu gerekmez.",
        },
      },
    ],
    featureGroups: [
      {
        title: { en: "Features", tr: "Özellikler" },
        items: [
          "Cross-platform authentication (Epic, Steam, Apple, Google Play, Device ID)",
          "Public and private lobbies",
          "Lobby passwords",
          "Ready system",
          "Host migration",
          "Invite codes",
          "Friends integration",
          "FishNet networking over EOS Relay",
          "Automatic lobby-to-game transition",
          "Automatic player spawning",
          "Full source code included",
          "Editor auto-setup tools",
          "Demo scene included",
          "PDF and Markdown documentation",
          "Unity UI integration examples",
        ],
      },
    ],
    tech: ["Unity", "Epic Online Services", "FishNet", "FishyEOS", "EOS P2P Relay"],
    highlights: {
      en: [
        "5 sign-in methods, one identity",
        "Host migration + invite codes",
        "Full source + playable demo",
      ],
      tr: [
        "5 giriş yöntemi, tek kimlik",
        "Host migration + davet kodları",
        "Tam kaynak + oynanabilir demo",
      ],
    },
    links: [
      {
        label: { en: "Coming to Unity Asset Store", tr: "Yakında Unity Asset Store'da" },
        href: ASSET_STORE,
        kind: "asset",
      },
      {
        label: { en: "Get notified on Discord", tr: "Discord'dan haberdar ol" },
        href: "https://discord.gg/ngc6KQcvk",
        kind: "discord",
      },
    ],
  },
  {
    slug: "deepai-pro",
    kind: "tool",
    name: "DeepAI Pro",
    featured: true,
    tagline: {
      en: "AAA AI framework for Unity",
      tr: "Unity için AAA yapay zekâ çatısı",
    },
    category: { en: "AI · Framework", tr: "Yapay Zekâ · Çatı" },
    platform: { en: "Unity 6 · Zero dependencies", tr: "Unity 6 · Sıfır bağımlılık" },
    cover: "/tools/deepai-cover.png",
    icon: "/tools/deepai-icon.png",
    accent: "#a855f7",
    accentSoft: "rgba(168, 85, 247, 0.14)",
    status: { en: "Coming soon", tr: "Çok yakında" },
    statusKind: "soon",
    summary: {
      en: "A complete AAA AI framework combining Behaviour Trees, Utility AI, EQS, AI Perception, Hierarchical State Machines, GOAP, Squad AI, Cover Systems, Smart Objects, Influence Maps, Dialogue AI and advanced debugging into one production-ready solution.",
      tr: "Behaviour Tree'ler, Utility AI, EQS, AI Perception, Hiyerarşik Durum Makineleri, GOAP, Squad AI, Cover sistemleri, Smart Object'ler, Influence Map'ler, Dialogue AI ve gelişmiş hata ayıklamayı üretime hazır tek bir çözümde birleştiren eksiksiz bir AAA yapay zekâ çatısı.",
    },
    description: {
      en: [
        "DeepAI is a complete AAA AI framework for Unity that combines Behaviour Trees, Utility AI, Environment Query System (EQS), AI Perception, Hierarchical State Machines, GOAP Planning, Squad AI, Cover Systems, Smart Objects, Influence Maps, Dialogue AI and advanced debugging tools into a single production-ready solution.",
        "Built for indie developers and professional studios alike, DeepAI enables intelligent, reactive and scalable NPCs without third-party dependencies. It includes a powerful visual Behaviour Tree editor, perception with vision, hearing and memory, tactical combat, dynamic cover, squad coordination, world interaction systems and comprehensive runtime debugging.",
        "Suitable for FPS, TPS, RPG, RTS, Survival, Stealth, Open World, Simulation and Multiplayer games — from stealth guards and tactical soldiers to companions, RTS units, animals, zombies and bosses.",
      ],
      tr: [
        "DeepAI, Behaviour Tree'ler, Utility AI, Environment Query System (EQS), AI Perception, Hiyerarşik Durum Makineleri, GOAP Planlama, Squad AI, Cover sistemleri, Smart Object'ler, Influence Map'ler, Dialogue AI ve gelişmiş hata ayıklama araçlarını üretime hazır tek bir çözümde birleştiren, Unity için eksiksiz bir AAA yapay zekâ çatısıdır.",
        "Hem bağımsız geliştiriciler hem profesyonel stüdyolar için tasarlanan DeepAI, üçüncü parti bağımlılık olmadan akıllı, tepkisel ve ölçeklenebilir NPC'ler oluşturmayı sağlar. Güçlü bir görsel Behaviour Tree editörü, görme/işitme/hafıza içeren algı, taktiksel çatışma, dinamik cover, takım koordinasyonu, dünya etkileşim sistemleri ve kapsamlı çalışma zamanı hata ayıklaması içerir.",
        "FPS, TPS, RPG, RTS, Survival, Stealth, Open World, Simülasyon ve Çok Oyunculu oyunlar için uygundur — gizli muhafızlardan taktiksel askerlere, yoldaşlara, RTS birimlerine, hayvanlara, zombilere ve bosslara kadar.",
      ],
    },
    features: [
      {
        title: { en: "Visual Behaviour Tree editor", tr: "Görsel Behaviour Tree editörü" },
        text: {
          en: "Author, run and live-debug behaviour trees with a full visual graph editor.",
          tr: "Tam görsel grafik editörüyle behaviour tree yaz, çalıştır ve canlı hata ayıkla.",
        },
      },
      {
        title: { en: "Zero third-party dependencies", tr: "Sıfır üçüncü parti bağımlılık" },
        text: {
          en: "Unity 6 ready, extensible API, custom nodes, EQS, FSM states and GOAP actions.",
          tr: "Unity 6 hazır, genişletilebilir API, özel node'lar, EQS, FSM durumları ve GOAP aksiyonları.",
        },
      },
    ],
    featureGroups: [
      {
        title: { en: "Core framework", tr: "Çekirdek çatı" },
        items: [
          "Behaviour Trees with visual graph editor",
          "Reactive sequences & interrupt selectors",
          "Utility AI decision system",
          "Hierarchical State Machines (FSM)",
          "GOAP planner",
          "Local & global blackboards",
          "Event bus system",
          "Centralized AI scheduler",
          "Subtree support & services system",
        ],
      },
      {
        title: { en: "Perception & memory", tr: "Algı & hafıza" },
        items: [
          "Vision detection with occlusion",
          "Hearing system & sound emitters",
          "Sound occlusion",
          "Memory system with decay",
          "Last seen / last heard tracking",
        ],
      },
      {
        title: { en: "Environment Query System (EQS)", tr: "Environment Query System (EQS)" },
        items: [
          "7 query generators (Ring, Grid, Donut, Cone, Random Reachable, Cover Point, Squad-Based)",
          "8 EQS tests (Distance, Line of Sight, Path Length, Height Difference, Influence, Ally Distance, Enemy Density, Angle)",
          "Response curve support",
        ],
      },
      {
        title: { en: "Combat & squad AI", tr: "Çatışma & takım AI" },
        items: [
          "Dynamic cover system with reservation & peek",
          "Flanking, suppression, retreat, push forward",
          "Hold position, defend area, guard object, protect ally",
          "Shared squad blackboard, leaders & followers",
          "Target & alert sharing, attack token system",
          "Formations: line, column, wedge, circle",
        ],
      },
      {
        title: { en: "Advanced systems & visual tools", tr: "Gelişmiş sistemler & görsel araçlar" },
        items: [
          "Smart Objects with reservation",
          "Influence maps & danger evaluation",
          "Dialogue AI & runtime event monitoring",
          "Live runtime debugging + record & replay",
          "Blackboard inspector & perception visualization",
          "AI setup wizard, archetype wizard, waypoint tool",
        ],
      },
      {
        title: { en: "Networking & included content", tr: "Ağ & dahil içerik" },
        items: [
          "Mirror & FishNet integration",
          "Server-authoritative synchronization",
          "15 playable demo scenes + FPS controller example",
          "Example behaviour trees, EQS queries & dialogue",
          "Runtime NavMesh baking",
          "Complete documentation & developer guide",
        ],
      },
    ],
    tech: ["Unity 6", "C#", "Behaviour Trees", "GOAP", "EQS", "Mirror", "FishNet"],
    stats: [
      { value: "156", label: { en: "C# scripts", tr: "C# script" } },
      { value: "55+", label: { en: "Action & condition nodes", tr: "Aksiyon & koşul node'u" } },
      { value: "15", label: { en: "Demo scenes", tr: "Demo sahnesi" } },
    ],
    highlights: {
      en: [
        "156 C# scripts, 15 demo scenes",
        "Behaviour Trees, GOAP, EQS, Squad AI",
        "Unity 6 ready, zero dependencies",
      ],
      tr: [
        "156 C# script, 15 demo sahnesi",
        "Behaviour Tree, GOAP, EQS, Squad AI",
        "Unity 6 hazır, sıfır bağımlılık",
      ],
    },
    links: [
      {
        label: { en: "Coming to Unity Asset Store", tr: "Yakında Unity Asset Store'da" },
        href: ASSET_STORE,
        kind: "asset",
      },
      {
        label: { en: "Get notified on Discord", tr: "Discord'dan haberdar ol" },
        href: "https://discord.gg/ngc6KQcvk",
        kind: "discord",
      },
    ],
  },
  {
    slug: "mobile-controls-pro",
    kind: "tool",
    name: "Mobile Controls Pro",
    featured: true,
    tagline: {
      en: "Complete mobile touch controls for Unity",
      tr: "Unity için eksiksiz mobil dokunmatik kontroller",
    },
    category: { en: "Mobile · Input", tr: "Mobil · Girdi" },
    platform: { en: "Unity 6 · Android & iOS", tr: "Unity 6 · Android & iOS" },
    cover: "/tools/mobilecontrols-cover.png",
    icon: "/tools/mobilecontrols-icon.png",
    accent: "#14b8a6",
    accentSoft: "rgba(20, 184, 166, 0.16)",
    status: { en: "Coming soon", tr: "Çok yakında" },
    statusKind: "soon",
    summary: {
      en: "A complete mobile control system for Unity — procedural joysticks, buttons and look areas plus an in-game HUD editor to move, resize, save, reset and customize layouts at runtime. Data-driven and non-invasive.",
      tr: "Unity için eksiksiz bir mobil kontrol sistemi — prosedürel joystick'ler, butonlar ve look alanları, ayrıca çalışma zamanında düzenleri taşıyan, boyutlandıran, kaydeden, sıfırlayan ve özelleştiren oyun içi bir HUD editörü. Veri-güdümlü ve müdahalesiz.",
    },
    description: {
      en: [
        "Mobile Controls Pro is a complete mobile control system for Unity, designed to help developers create professional touch controls for Android and iOS games without writing custom input UI from scratch.",
        "It includes procedural runtime controls — joysticks, buttons and look areas — plus an in-game HUD editor that lets players or developers move, resize, customize, save, reset, show, hide and edit layouts at runtime. Layouts save using normalized positions, so they are resolution independent.",
        "Data-driven and highly customizable: build from the Inspector, wire actions through UnityEvents, and use it without touching your character or camera code. Ideal for FPS, TPS, survival, action, platformer, MOBA, twin-stick and RPG projects.",
      ],
      tr: [
        "Mobile Controls Pro, geliştiricilerin Android ve iOS oyunları için profesyonel dokunmatik kontrolleri sıfırdan özel girdi arayüzü yazmadan oluşturmasına yardımcı olmak için tasarlanmış, Unity için eksiksiz bir mobil kontrol sistemidir.",
        "Prosedürel çalışma zamanı kontrolleri — joystick'ler, butonlar ve look alanları — ve oyuncuların ya da geliştiricilerin çalışma zamanında düzenleri taşımasına, boyutlandırmasına, özelleştirmesine, kaydetmesine, sıfırlamasına, göstermesine, gizlemesine ve düzenlemesine olanak tanıyan oyun içi bir HUD editörü içerir. Düzenler normalize konumlarla kaydedildiği için çözünürlükten bağımsızdır.",
        "Veri-güdümlü ve son derece özelleştirilebilir: Inspector'dan oluşturun, aksiyonları UnityEvents ile bağlayın ve karakter veya kamera kodunuza dokunmadan kullanın. FPS, TPS, survival, aksiyon, platformer, MOBA, twin-stick ve RPG projeleri için idealdir.",
      ],
    },
    features: [
      {
        title: { en: "Runtime HUD editor", tr: "Çalışma zamanı HUD editörü" },
        text: {
          en: "Players drag, resize and save their own layout in-game — just like modern mobile shooters.",
          tr: "Oyuncular kendi düzenlerini oyun içinde sürükler, boyutlandırır ve kaydeder — modern mobil nişancılar gibi.",
        },
      },
      {
        title: { en: "Non-invasive & data-driven", tr: "Müdahalesiz & veri-güdümlü" },
        text: {
          en: "Works with your existing character and camera via UnityEvents — no code changes needed.",
          tr: "Mevcut karakter ve kameranızla UnityEvents üzerinden çalışır — kod değişikliği gerekmez.",
        },
      },
    ],
    featureGroups: [
      {
        title: { en: "Control types", tr: "Kontrol tipleri" },
        items: [
          "Joystick — analog movement, deadzone, auto return-to-center, Vector2 output",
          "Button — Tap, Hold and Toggle modes",
          "Look Area — camera drag delta, sensitivity, invert-Y, invisible overlay",
          "Multi-touch support",
        ],
      },
      {
        title: { en: "Runtime HUD editing", tr: "Çalışma zamanı HUD düzenleme" },
        items: [
          "Drag & resize controls with touch",
          "Change opacity at runtime",
          "Save / reset layout, end edit mode",
          "Built-in Edit & Pause buttons",
          "Runtime player customization",
        ],
      },
      {
        title: { en: "Layout & customization", tr: "Düzen & özelleştirme" },
        items: [
          "Versioned JSON save via PlayerPrefs",
          "Normalized (0–1) positions, resolution independent",
          "Multiple layout profiles",
          "Custom sprites, colors, sizes, opacity",
          "Press & fade animations, optional DOTween",
        ],
      },
      {
        title: { en: "API, events & presets", tr: "API, olaylar & hazır ayarlar" },
        items: [
          "Public API: ToggleEditMode, BeginEdit, SaveLayout, ResetLayout, Show/Hide…",
          "UnityEvents: OnEditModeChanged, OnValue(Vector2), OnClick, OnPauseRequested…",
          "FPS, TwinStick and MOBA presets",
          "One-click FPS sample scene installer",
          "Runtime / Editor / Samples assembly definitions",
        ],
      },
    ],
    tech: ["Unity 6", "Android", "iOS", "UnityEvents", "PlayerPrefs JSON", "Optional DOTween"],
    highlights: {
      en: [
        "Joystick · Button · Look Area",
        "In-game drag & drop HUD editor",
        "Resolution-independent layouts",
      ],
      tr: [
        "Joystick · Buton · Look Area",
        "Oyun içi sürükle-bırak HUD editörü",
        "Çözünürlükten bağımsız düzenler",
      ],
    },
    links: [
      {
        label: { en: "Coming to Unity Asset Store", tr: "Yakında Unity Asset Store'da" },
        href: ASSET_STORE,
        kind: "asset",
      },
      {
        label: { en: "Get notified on Discord", tr: "Discord'dan haberdar ol" },
        href: "https://discord.gg/ngc6KQcvk",
        kind: "discord",
      },
    ],
  },
];

export const tools: CatalogItem[] = toolCatalog.map((item) => ({ ...item, ...toolMedia[item.slug] }));

export const featuredTools = tools.filter((t) => t.featured);

export function getTool(slug: string): CatalogItem | undefined {
  return tools.find((t) => t.slug === slug);
}
