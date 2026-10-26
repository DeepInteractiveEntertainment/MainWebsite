import type { CatalogItem, CatalogMedia } from "./catalog";

const image = (src: string, en: string, tr: string, detailEn: string, detailTr: string): CatalogMedia => ({
  type: "image", src, title: { en, tr }, description: { en: detailEn, tr: detailTr },
});
const root = "/tools/media";

export const toolMedia: Record<string, Pick<CatalogItem, "media" | "cover" | "icon">> = {
  "crosslobby-pro": {
    cover: "/tools/crosslobby-cover.png",
    icon: "/tools/crosslobby-icon.png",
    media: [
      image(`${root}/crosslobby-signin.webp`, "One starting point. Multiple platforms.", "Tek başlangıç. Birden çok platform.", "The sign-in screen from the included CrossLobby demo.", "CrossLobby demosundaki giriş ekranı."),
      image(`${root}/crosslobby-browser.webp`, "Find a lobby. Or create your own.", "Lobi bul. Ya da kendi lobini oluştur.", "Browse sessions, create a lobby and join using an invite code.", "Oturumları listele, lobi oluştur ve davet koduyla katıl."),
      image(`${root}/crosslobby-room.webp`, "Get the team ready.", "Takımı oyuna hazırla.", "The demo lobby room with members and ready states.", "Üyeler ve hazır durumlarıyla demo lobi odası."),
      image(`${root}/crosslobby-network.webp`, "From lobby to gameplay.", "Lobiden oyuna.", "A networked player in the playable demo. Frames taken from the demo video.", "Oynanabilir demodaki ağ oyuncusu. Kareler demo videosundan alınmıştır."),
      image("/tools/crosslobby-cover.png", "CrossLobby Pro", "CrossLobby Pro", "Product cover artwork.", "Ürün kapak görseli."),
      { type: "video", src: "/videos/crosslobby.mp4", poster: `${root}/crosslobby-signin.webp`, title: { en: "Watch the full demo", tr: "Tam demoyu izle" }, description: { en: "Sign-in, lobbies and networked gameplay in a 3:34 demo.", tr: "3:34 dakikalık demoda giriş, lobiler ve ağ üzerinden oyun." } },
    ],
  },
  "deepai-pro": {
    cover: `${root}/deepai-cover.webp`, icon: `${root}/deepai-icon.webp`,
    media: [
      image(`${root}/deepai-editor.webp`, "Make the logic visible.", "Davranış mantığını görünür kıl.", "The visual behaviour-tree editor, node inspector and blackboard in an actual project.", "Gerçek projedeki davranış ağacı editörü, düğüm ayarları ve blackboard."),
      image(`${root}/deepai-demo.webp`, "See your agents in context.", "Ajanlarını sahnede gör.", "A real capture of the included demo content.", "Paketin demo içeriğinden gerçek ekran görüntüsü."),
      image(`${root}/deepai-setup.webp`, "Start with the setup wizard.", "Kurulum sihirbazıyla başla.", "The editor's AI setup workflow.", "Editördeki yapay zekâ kurulum akışı."),
      image(`${root}/deepai-cover.webp`, "DeepAI Pro", "DeepAI Pro", "Design intelligent game agents.", "Akıllı oyun ajanları tasarla."),
      { type: "video", src: `${root}/deepai-overview.mp4`, poster: `${root}/deepai-cover.webp`, title: { en: "A closer look at DeepAI", tr: "DeepAI'ye yakından bak" }, description: { en: "A 29-second overview made from real editor and demo screenshots.", tr: "Gerçek editör ve demo görüntülerinden hazırlanan 29 saniyelik tanıtım." } },
    ],
  },
  "mobile-controls-pro": {
    cover: `${root}/mobile-controls-cover.webp`, icon: `${root}/mobile-controls-icon.webp`,
    media: [
      image(`${root}/mobile-controls-demo.webp`, "Your game. Their controls.", "Senin oyunun. Onların kontrolleri.", "Joysticks and action buttons in the included FPS demo.", "FPS demosundaki joystick ve aksiyon butonları."),
      image(`${root}/mobile-controls-layout.webp`, "A layout that feels right.", "Oyuncuya uygun bir düzen.", "Move controls, adjust size and opacity, then save the layout in-game.", "Kontrolleri taşı, boyut ve saydamlığı ayarla, düzeni oyun içinde kaydet."),
      image(`${root}/mobile-controls-inspector.webp`, "Configure it in the Inspector.", "Inspector'dan yapılandır.", "English editor controls, events and the live sample HUD.", "İngilizce editör arayüzü, olaylar ve çalışan örnek HUD."),
      image(`${root}/mobile-controls-cover.webp`, "Mobile Controls Pro", "Mobile Controls Pro", "Touch controls. Your layout.", "Dokunmatik kontroller. Sana özel düzen."),
      { type: "video", src: `${root}/mobile-controls-overview.mp4`, poster: `${root}/mobile-controls-demo.webp`, title: { en: "Explore Mobile Controls", tr: "Mobile Controls'u keşfet" }, description: { en: "A 36-second overview of the demo, layout editor and Inspector.", tr: "Demo, düzen editörü ve Inspector'ı gösteren 36 saniyelik tanıtım." } },
    ],
  },
};
