# Deep Interactive Entertainment — Geliştirme Notları

**Proje:** Tek sayfalık site → modüler klasör yapısına geçiş + yeni özellikler
**Tarih:** Mart 2025

## 1. Klasör Yapısı

Tek dosya olan `index.html` aşağıdaki yapıya bölündü:


frontend/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── 


## 2. index.html

- Tüm CSS `assets/css/style.css` dosyasına taşındı
- Tüm JS `assets/js/main.js` dosyasına taşındı
- Tüm görsel yolları `assets/images/` olarak güncellendi
- Cloudflare encode'lu email adresleri temizlendi, düz `mailto:` formatına alındı
- `steam.jpg` ve `youtube.jpg` → `steam.png` / `youtube.png` olarak güncellendi

### SEO Meta Etiketleri eklendi:
- `description`, `keywords`, `author`, `robots`, `canonical`
- **Open Graph** etiketleri — Discord, Facebook, LinkedIn link önizlemesi için
- **Twitter Card** — büyük görsel önizlemesi için
- `favicon` ve `apple-touch-icon` — tarayıcı sekmesi ve iPhone için

### Dil Sistemi (`data-i18n`):
- Sayfadaki tüm metinlere `data-i18n` key'leri eklendi
- Form placeholder'larına `data-i18n-ph` eklendi
- Navbar'a dil seçici dropdown eklendi (bayrak + kod gösterimi)

### Mobil Hamburger Menü:
- 768px altında nav linkleri gizleniyor
- Sağ üste hamburger butonu çıkıyor
- Dışarı tıklayınca veya link'e tıklayınca kapanıyor



## 3. style.css

- Tüm stiller bölümlere ayrıldı ve yorumlandı
- **Dil Seçici** stilleri eklendi — dropdown animasyonu, active state, separator çizgiler
- **Hamburger** stilleri eklendi — 3 çizgiden X'e dönüşen animasyon
- **Mobil Menü** stilleri eklendi — slideDown animasyonu, hover indent efekti
- Form `placeholder` renkleri tema değişkenlerine bağlandı
- `mask-image`'a `-webkit-mask-image` prefix'i eklendi

### Dark Mode logo/ikon filtreleri düzeltildi:
- Nav social ikonlar: `invert(1)` → dark'ta beyaz görünür
- Platform logoları (PC, PS, Xbox): `invert(1)` → dark'ta beyaz
- Steam butonu hover: `brightness(0)` → beyaz arka planda siyah logo
- Sosyal medya ikonları hover: `brightness(0)` → beyaz arka planda siyah

### Steam & YouTube nav ikonu boyutu:
- Diğer ikonlar `20px` kalırken Steam ve YouTube `29px` yapıldı (%45 büyük)

### Responsive — 5 breakpoint:

| Breakpoint | Ekran |
|-----------|-------|
| `1400px+` | Large desktop — geniş padding ve max-width |
| `1025–1399px` | Standart desktop |
| `769–1024px` | Tablet landscape — grid'ler sıkışır |
| `577–768px` | Tablet / mobil — hamburger, tek sütun |
| `max 576px` | Küçük mobil — logo sub gizlenir, butonlar tam genişlik |
| `max 380px` | Çok küçük ekran — nav social gizlenir, minimal layout |



## 4. main.js

### Dil Sistemi (6 dil, 60+ anahtar):
- 🇬🇧 English · 🇹🇷 Türkçe · 🇩🇪 Deutsch · 🇫🇷 Français · 🇪🇸 Español · 🇯🇵 日本語
- `applyLang()` — tüm `data-i18n` ve `data-i18n-ph` elementlerini günceller
- `setLang()` — dil değiştirir, dropdown'ı kapatır
- Seçilen dil `localStorage`'a kaydedilir, sayfa yenilenince hatırlanır
- Form hata/başarı mesajları da seçili dilde çıkar
- `html[lang]` attribute güncellenir

### Theme Toggle:
- `localStorage`'a kaydedilir
- Sayfa açılışında kayıtlı tema uygulanır

### Hamburger Menü:
- Dışarı tıklayınca kapanır
- Herhangi bir linke tıklayınca kapanır

### EmailJS:
- Form validasyonu seçili dilde hata mesajı gösterir
- Gönder butonu metni de seçili dilde güncellenir

### Reveal Animasyonu:
- `IntersectionObserver` ile scroll'da elementler yukarı çıkarak görünür
- Bir kere göründükten sonra observer kaldırılır (performans)



Yapman gerekenler


### Yedek not:
EmailJS sistemi kurulu ve kodda her şey doğru görünüyor. Tek yapman gereken [emailjs.com](https://emailjs.com)'a girip hesabının hâlâ aktif olduğunu kontrol etmek — service, template ve public key orijinal sitenden geldiği için zaten ayarlıydı. Aktifse form direkt çalışıyor olmalı.