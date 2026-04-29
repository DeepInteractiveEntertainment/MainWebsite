/* ============================================================
   DEEP INTERACTIVE ENTERTAINMENT — main.js
   ============================================================ */

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const i18n = {
  en: {
    flag: '🇬🇧', code: 'EN',
    nav_studio:    'Studio',
    nav_platforms: 'Platforms',
    nav_games:     'Games',
    nav_invest:    'Invest',
    nav_connect:   'Connect',
    nav_contact:   'Contact',
    hero_tag:      '// EST. ISTANBUL, TURKEY — INDEPENDENT GAME STUDIO',
    hero_line:     'We Build Worlds. You Play Them.',
    hero_steam_btn:'Play on Steam',
    hero_games_btn:'Our Games ▸',
    stat_console:  '& Console',
    stat_global:   'Global Release',
    stat_based:    'Istanbul Based',
    about_title:   'We Are <span>Deep Interactive</span> Entertainment',
    about_p1:      'An independent team skilled in <strong style="color:var(--text)">PS, XBOX, and PC</strong> game development. We aim to develop projects with rich storytelling and fluid gameplay, including online and multiplayer experiences.',
    about_p2:      'Our goal is to realize high quality projects as an experienced team in both design and development.',
    feat_1: 'PC Game Development',
    feat_2: 'Console Titles',
    feat_3: 'Steam Publishing',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D Environments',
    feat_6: 'Indie Innovation',
    studio_released: 'Game Released',
    studio_team:     'Core Team',
    studio_ambition: 'Ambition',
    platforms_label: 'Platforms',
    plat_title:    'Where We <span>Deploy</span>',
    plat_desc:     'From PC to living room consoles — we build for every player, everywhere.',
    plat_pc_desc:  'High-fidelity gaming on Windows & Linux. Our primary platform with full mod support and community features.',
    plat_ps_desc:  'Bringing our titles to PS4 & PS5 — optimized for DualSense haptics and stunning 4K visuals.',
    plat_xbox_desc:'Xbox One & Series X|S support with Game Pass integration and cross-play capabilities.',
    games_title:   'Our <span>Releases</span>',
    games_desc:    'Titles crafted with passion and precision — available on Steam and coming to all platforms.',
    badge_available:'AVAILABLE NOW',
    badge_soon:    'COMING SOON',
    chaos_genre:   'Action · PC · 2025',
    chaos_desc:    'Dive into a wild, action-packed experience. Chaos Budz delivers fast-paced gameplay with unique mechanics and an unforgettable world. Now live on Steam!',
    btn_view_steam:'View on Steam',
    next_genre:    'TBA · PC & Console',
    next_title:    'Next Project',
    next_desc:     'Something big is brewing in our Istanbul studio. Multi-platform from day one. Follow our Discord to be first in line.',
    btn_discord:   'Join Discord for Updates',
    invest_title:  'Invest in <span>Our Vision</span>',
    invest_desc:   'Be part of the next generation of independent gaming. Join us as we build worlds that captivate millions.',
    invest_growth_title: 'High Growth Potential',
    invest_growth_desc:  'The indie game market is booming. With our debut title already on Steam and a passionate global community, we\'re positioned for significant growth across PC and console platforms.',
    invest_pipeline_title: 'Strong Game Pipeline',
    invest_pipeline_desc:  'Chaos Budz is just the beginning. We have multiple titles in development targeting PC, PlayStation, and Xbox — each designed for maximum player engagement and long-term revenue.',
    invest_global_title: 'Global Reach',
    invest_global_desc:  'Based in Istanbul with a globally distributed team, we operate at lower costs while targeting worldwide audiences. Our multilingual presence gives us a competitive edge in emerging markets.',
    invest_tech_title: 'Innovative Technology',
    invest_tech_desc:  'We leverage cutting-edge game engines and development pipelines to deliver AAA-quality experiences at indie budgets — maximizing return on every dollar invested.',
    invest_cta_title: 'Interested in Partnering With Us?',
    invest_cta_desc:  'Whether you\'re an angel investor, publisher, or strategic partner — we\'d love to explore opportunities together. Reach out and let\'s build the future of gaming.',
    invest_cta_btn:  'Get In Touch ▸',
    social_title:  'Find Us <span>Online</span>',
    social_desc:   'Join our community. Follow the journey, hop in the Discord, never miss a launch.',
    contact_title: 'Get In <span>Touch</span>',
    contact_desc:  'For collaborations, press inquiries, or just to say hi — we\'d love to hear from you.',
    contact_info_title:   'Contact Info',
    contact_email_lbl:    'Email',
    contact_loc_lbl:      'Location',
    contact_location:     'Beşiktaş, Istanbul — Turkey',
    contact_steam_lbl:    'Steam Store',
    contact_steam_link:   'Chaos Budz on Steam ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'Join our server ↗',
    form_name:    'Name',
    form_email:   'Email',
    form_message: 'Message',
    form_send:    'SEND MESSAGE ▸',
    form_name_ph: 'Your name',
    form_msg_ph:  'Tell us what\'s on your mind...',
    form_sending: 'SENDING...',
    form_sent:    'SENT ✓',
    form_ok:      '✓ Message sent! We\'ll get back to you soon.',
    form_err_fields: '⚠ Please fill in all fields.',
    form_err_fail:   '✗ Failed. Please email us directly.',
    footer_copy:  '© 2025 Deep Interactive Entertainment. Istanbul, Turkey.',
  },

  tr: {
    flag: '🇹🇷', code: 'TR',
    nav_studio:    'Stüdyo',
    nav_platforms: 'Platformlar',
    nav_games:     'Oyunlar',
    nav_invest:    'Yatırım',
    nav_connect:   'Bağlan',
    nav_contact:   'İletişim',
    hero_tag:      '// İSTANBUL, TÜRKİYE — BAĞIMSIZ OYUN STÜDYOSU',
    hero_line:     'Dünyaları Biz Kurarız. Siz Yaşarsınız.',
    hero_steam_btn:'Steam\'de Oyna',
    hero_games_btn:'Oyunlarımız ▸',
    stat_console:  '& Konsol',
    stat_global:   'Global Yayın',
    stat_based:    'İstanbul Merkezli',
    about_title:   'Biz <span>Deep Interactive</span> Entertainment\'ız',
    about_p1:      'PS, XBOX ve PC oyun geliştirme konusunda uzman bağımsız bir ekibiz. <strong style="color:var(--text)">Zengin hikaye anlatımı</strong> ve akıcı oynanışa sahip projeler geliştirmeyi hedefliyoruz.',
    about_p2:      'Amacımız, tasarım ve geliştirme alanında deneyimli bir ekip olarak yüksek kaliteli projeler ortaya koymaktır.',
    feat_1: 'PC Oyun Geliştirme',
    feat_2: 'Konsol Oyunları',
    feat_3: 'Steam Yayıncılığı',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D Ortamlar',
    feat_6: 'Indie Yenilikçilik',
    studio_released: 'Yayımlanan Oyun',
    studio_team:     'Çekirdek Ekip',
    studio_ambition: 'Hırs',
    platforms_label: 'Platformlar',
    plat_title:    'Nerede <span>Yayınlıyoruz</span>',
    plat_desc:     'PC\'den konsollara — her oyuncu için, her yerde geliştiriyoruz.',
    plat_pc_desc:  'Windows & Linux\'ta yüksek kaliteli oyun deneyimi. Mod desteği ve topluluk özellikleriyle birincil platformumuz.',
    plat_ps_desc:  'PS4 & PS5\'e özel optimize edilmiş DualSense haptic desteği ve 4K görsel kalitesiyle oyunlarımızı getiriyoruz.',
    plat_xbox_desc:'Game Pass entegrasyonu ve cross-play özellikleriyle Xbox One & Series X|S desteği.',
    games_title:   'Oyunlarımız <span></span>',
    games_desc:    'Tutku ve özenle hazırlanmış oyunlar — Steam\'de mevcut, tüm platformlara geliyor.',
    badge_available:'ŞİMDİ MEVCUT',
    badge_soon:    'YAKINDA',
    chaos_genre:   'Aksiyon · PC · 2025',
    chaos_desc:    'Vahşi ve aksiyonla dolu bir deneyime dal. Chaos Budz, benzersiz mekanikleri ve unutulmaz dünyasıyla hızlı tempolu oynanış sunuyor. Steam\'de şimdi canlı!',
    btn_view_steam:'Steam\'de Gör',
    next_genre:    'TBA · PC & Konsol',
    next_title:    'Sonraki Proje',
    next_desc:     'İstanbul stüdyomuzda büyük bir şeyler pişiyor. Gün 1\'den itibaren çok platformlu. Sıraya ilk girmek için Discord\'umuzu takip edin.',
    btn_discord:   'Güncellemeler için Discord\'a Katıl',
    invest_title:  '<span>Vizyonumuza</span> Yatırım Yapın',
    invest_desc:   'Bağımsız oyun dünyasının yeni nesline katılın. Milyonları büyüleyen dünyalar inşa ederken bizimle olun.',
    invest_growth_title: 'Yüksek Büyüme Potansiyeli',
    invest_growth_desc:  'Bağımsız oyun pazarı hızla büyüyor. Steam\'de yayınlanan ilk oyunumuz ve tutkulu global topluluğumuzla, PC ve konsol platformlarında güçlü bir büyüme için doğru konumdayız.',
    invest_pipeline_title: 'Güçlü Oyun Hattı',
    invest_pipeline_desc:  'Chaos Budz sadece başlangıç. PC, PlayStation ve Xbox hedefleyen birden fazla oyun geliştirme aşamasında — her biri maksimum oyuncu katılımı ve uzun vadeli gelir için tasarlandı.',
    invest_global_title: 'Küresel Erişim',
    invest_global_desc:  'İstanbul merkezli ve global ekibimizle düşük maliyetle faaliyet gösterirken dünya genelinde oyunculara ulaşıyoruz. Çok dilli yapımız bize gelişen pazarlarda rekabet avantajı sağlıyor.',
    invest_tech_title: 'Yenilikçi Teknoloji',
    invest_tech_desc:  'Son teknoloji oyun motorları ve geliştirme süreçleriyle AAA kalitesinde deneyimler sunuyoruz — yatırılan her kuruşun getirisini maksimize ediyoruz.',
    invest_cta_title: 'Bizimle Ortaklık Kurmak İster misiniz?',
    invest_cta_desc:  'Melek yatırımcı, yayıncı veya stratejik ortak olun — fırsatları birlikte keşfetmek isteriz. Bize ulaşın ve oyunun geleceğini birlikte inşa edelim.',
    invest_cta_btn:  'İletişime Geç ▸',
    social_title:  '<span>Online</span> Bizi Bulun',
    social_desc:   'Topluluğumuza katılın. Yolculuğu takip edin, Discord\'a gelin, bir lansmanı kaçırmayın.',
    contact_title: '<span>İletişime</span> Geçin',
    contact_desc:  'İş birlikleri, basın soruları veya sadece merhaba demek için — sizden haber almaktan mutluluk duyarız.',
    contact_info_title:   'İletişim Bilgileri',
    contact_email_lbl:    'E-posta',
    contact_loc_lbl:      'Konum',
    contact_location:     'Beşiktaş, İstanbul — Türkiye',
    contact_steam_lbl:    'Steam Mağaza',
    contact_steam_link:   'Steam\'de Chaos Budz ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'Sunucumuza katıl ↗',
    form_name:    'Ad',
    form_email:   'E-posta',
    form_message: 'Mesaj',
    form_send:    'MESAJ GÖNDER ▸',
    form_name_ph: 'Adınız',
    form_msg_ph:  'Aklınızdakileri yazın...',
    form_sending: 'GÖNDERİLİYOR...',
    form_sent:    'GÖNDERİLDİ ✓',
    form_ok:      '✓ Mesajınız gönderildi! Kısa sürede geri döneceğiz.',
    form_err_fields: '⚠ Lütfen tüm alanları doldurun.',
    form_err_fail:   '✗ Gönderilemedi. Lütfen bize doğrudan e-posta gönderin.',
    footer_copy:  '© 2025 Deep Interactive Entertainment. İstanbul, Türkiye.',
  },

  de: {
    flag: '🇩🇪', code: 'DE',
    nav_studio:    'Studio',
    nav_platforms: 'Plattformen',
    nav_games:     'Spiele',
    nav_invest:    'Invest',
    nav_connect:   'Verbinden',
    nav_contact:   'Kontakt',
    hero_tag:      '// GEGR. ISTANBUL, TÜRKEI — INDEPENDENTES SPIELSTUDIO',
    hero_line:     'Wir bauen Welten. Du spielst sie.',
    hero_steam_btn:'Auf Steam spielen',
    hero_games_btn:'Unsere Spiele ▸',
    stat_console:  '& Konsole',
    stat_global:   'Globale Veröffentlichung',
    stat_based:    'Standort Istanbul',
    about_title:   'Wir sind <span>Deep Interactive</span> Entertainment',
    about_p1:      'Ein unabhängiges Team mit Expertise in <strong style="color:var(--text)">PS, XBOX und PC</strong>-Spieleentwicklung. Wir entwickeln Projekte mit reicher Erzählung und flüssigem Gameplay.',
    about_p2:      'Unser Ziel ist es, als erfahrenes Team hochwertige Projekte in Design und Entwicklung zu realisieren.',
    feat_1: 'PC-Spieleentwicklung',
    feat_2: 'Konsolentitel',
    feat_3: 'Steam-Publishing',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D-Umgebungen',
    feat_6: 'Indie-Innovation',
    studio_released: 'Veröffentlichtes Spiel',
    studio_team:     'Kernteam',
    studio_ambition: 'Ehrgeiz',
    platforms_label: 'Plattformen',
    plat_title:    'Wo wir <span>veröffentlichen</span>',
    plat_desc:     'Vom PC bis zur Konsole — wir entwickeln für jeden Spieler, überall.',
    plat_pc_desc:  'Hochauflösendes Gaming auf Windows & Linux. Unsere Hauptplattform mit vollem Mod-Support.',
    plat_ps_desc:  'Unsere Titel für PS4 & PS5 — optimiert für DualSense-Haptik und 4K-Grafik.',
    plat_xbox_desc:'Xbox One & Series X|S mit Game Pass-Integration und Cross-Play.',
    games_title:   'Unsere <span>Spiele</span>',
    games_desc:    'Titel voller Leidenschaft — auf Steam verfügbar, bald auf allen Plattformen.',
    badge_available:'JETZT VERFÜGBAR',
    badge_soon:    'DEMNÄCHST',
    chaos_genre:   'Action · PC · 2025',
    chaos_desc:    'Tauche in ein wildes, actiongeladenes Erlebnis ein. Chaos Budz bietet rasantes Gameplay mit einzigartigen Mechaniken. Jetzt auf Steam!',
    btn_view_steam:'Auf Steam ansehen',
    next_genre:    'TBA · PC & Konsole',
    next_title:    'Nächstes Projekt',
    next_desc:     'In unserem Istanbuler Studio braut sich etwas Großes zusammen. Multi-Plattform von Anfang an. Folge unserem Discord.',
    btn_discord:   'Discord für Updates beitreten',
    invest_title:  'Investiere in <span>unsere Vision</span>',
    invest_desc:   'Sei Teil der nächsten Generation unabhängiger Spiele. Begleite uns beim Aufbau von Welten, die Millionen fesseln.',
    invest_growth_title: 'Hohes Wachstumspotenzial',
    invest_growth_desc:  'Der Indie-Spielemarkt boomt. Mit unserem Debüttitel auf Steam und einer leidenschaftlichen Community sind wir für erhebliches Wachstum auf PC und Konsolen gut aufgestellt.',
    invest_pipeline_title: 'Starke Spielepipeline',
    invest_pipeline_desc:  'Chaos Budz ist erst der Anfang. Mehrere Titel für PC, PlayStation und Xbox befinden sich in der Entwicklung — jeder für maximales Engagement und langfristige Einnahmen konzipiert.',
    invest_global_title: 'Globale Reichweite',
    invest_global_desc:  'Mit Sitz in Istanbul und einem global verteilten Team operieren wir kosteneffizient und sprechen gleichzeitig weltweite Zielgruppen an.',
    invest_tech_title: 'Innovative Technologie',
    invest_tech_desc:  'Wir nutzen modernste Game-Engines und Entwicklungs-Pipelines, um AAA-Erlebnisse mit Indie-Budget zu liefern — maximale Rendite auf jede Investition.',
    invest_cta_title: 'Interesse an einer Partnerschaft?',
    invest_cta_desc:  'Ob Angel-Investor, Publisher oder strategischer Partner — wir freuen uns auf eine Zusammenarbeit. Melde dich und lass uns gemeinsam die Zukunft des Gaming gestalten.',
    invest_cta_btn:  'Kontakt aufnehmen ▸',
    social_title:  'Finde uns <span>online</span>',
    social_desc:   'Tritt unserer Community bei. Verfolge die Reise, komm in den Discord, verpasse keinen Launch.',
    contact_title: '<span>Kontakt</span> aufnehmen',
    contact_desc:  'Für Kooperationen, Presseanfragen oder einfach Hallo — wir freuen uns von dir zu hören.',
    contact_info_title:   'Kontaktinformationen',
    contact_email_lbl:    'E-Mail',
    contact_loc_lbl:      'Standort',
    contact_location:     'Beşiktaş, Istanbul — Türkei',
    contact_steam_lbl:    'Steam-Shop',
    contact_steam_link:   'Chaos Budz auf Steam ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'Unserem Server beitreten ↗',
    form_name:    'Name',
    form_email:   'E-Mail',
    form_message: 'Nachricht',
    form_send:    'NACHRICHT SENDEN ▸',
    form_name_ph: 'Dein Name',
    form_msg_ph:  'Was liegt dir auf dem Herzen...',
    form_sending: 'WIRD GESENDET...',
    form_sent:    'GESENDET ✓',
    form_ok:      '✓ Nachricht gesendet! Wir melden uns bald.',
    form_err_fields: '⚠ Bitte alle Felder ausfüllen.',
    form_err_fail:   '✗ Fehler. Bitte schreib uns direkt per E-Mail.',
    footer_copy:  '© 2025 Deep Interactive Entertainment. Istanbul, Türkei.',
  },

  fr: {
    flag: '🇫🇷', code: 'FR',
    nav_studio:    'Studio',
    nav_platforms: 'Plateformes',
    nav_games:     'Jeux',
    nav_invest:    'Investir',
    nav_connect:   'Rejoindre',
    nav_contact:   'Contact',
    hero_tag:      '// EST. ISTANBUL, TURQUIE — STUDIO INDÉPENDANT',
    hero_line:     'Nous construisons des mondes. Vous les jouez.',
    hero_steam_btn:'Jouer sur Steam',
    hero_games_btn:'Nos Jeux ▸',
    stat_console:  '& Console',
    stat_global:   'Sortie Mondiale',
    stat_based:    'Basé à Istanbul',
    about_title:   'Nous sommes <span>Deep Interactive</span> Entertainment',
    about_p1:      'Une équipe indépendante spécialisée dans le développement de jeux <strong style="color:var(--text)">PS, XBOX et PC</strong>. Nous visons des projets avec une narration riche et un gameplay fluide.',
    about_p2:      'Notre objectif est de réaliser des projets de haute qualité en tant qu\'équipe expérimentée en design et développement.',
    feat_1: 'Développement PC',
    feat_2: 'Titres Console',
    feat_3: 'Publication Steam',
    feat_4: 'PlayStation & Xbox',
    feat_5: 'Environnements 3D',
    feat_6: 'Innovation Indé',
    studio_released: 'Jeu Publié',
    studio_team:     'Équipe Principale',
    studio_ambition: 'Ambition',
    platforms_label: 'Plateformes',
    plat_title:    'Où nous <span>déployons</span>',
    plat_desc:     'Du PC aux consoles — nous développons pour chaque joueur, partout.',
    plat_pc_desc:  'Jeux haute fidélité sur Windows & Linux. Notre plateforme principale avec support mod complet.',
    plat_ps_desc:  'Nos titres sur PS4 & PS5 — optimisés pour les haptiques DualSense et le 4K.',
    plat_xbox_desc:'Support Xbox One & Series X|S avec intégration Game Pass et cross-play.',
    games_title:   'Nos <span>Jeux</span>',
    games_desc:    'Des titres créés avec passion — disponibles sur Steam et sur toutes les plateformes.',
    badge_available:'DISPONIBLE MAINTENANT',
    badge_soon:    'BIENTÔT',
    chaos_genre:   'Action · PC · 2025',
    chaos_desc:    'Plongez dans une expérience sauvage et pleine d\'action. Chaos Budz offre un gameplay effréné avec des mécaniques uniques. Maintenant sur Steam!',
    btn_view_steam:'Voir sur Steam',
    next_genre:    'TBA · PC & Console',
    next_title:    'Prochain Projet',
    next_desc:     'Quelque chose de grand se prépare dans notre studio d\'Istanbul. Multi-plateforme dès le premier jour. Suivez notre Discord.',
    btn_discord:   'Rejoindre Discord pour les mises à jour',
    invest_title:  'Investissez dans <span>Notre Vision</span>',
    invest_desc:   'Faites partie de la prochaine génération du jeu indépendant. Rejoignez-nous pour construire des mondes qui captivent des millions.',
    invest_growth_title: 'Fort Potentiel de Croissance',
    invest_growth_desc:  'Le marché du jeu indépendant est en plein essor. Avec notre premier titre sur Steam et une communauté mondiale passionnée, nous sommes bien positionnés pour une croissance significative.',
    invest_pipeline_title: 'Pipeline de Jeux Solide',
    invest_pipeline_desc:  'Chaos Budz n\'est que le début. Plusieurs titres ciblant PC, PlayStation et Xbox sont en développement — chacun conçu pour un engagement maximal et des revenus à long terme.',
    invest_global_title: 'Portée Mondiale',
    invest_global_desc:  'Basés à Istanbul avec une équipe distribuée mondialement, nous opérons à moindre coût tout en ciblant des audiences mondiales.',
    invest_tech_title: 'Technologie Innovante',
    invest_tech_desc:  'Nous exploitons des moteurs de jeu de pointe pour offrir des expériences de qualité AAA avec des budgets indie — maximisant le retour sur chaque investissement.',
    invest_cta_title: 'Intéressé par un Partenariat ?',
    invest_cta_desc:  'Que vous soyez investisseur providentiel, éditeur ou partenaire stratégique — nous serions ravis d\'explorer des opportunités ensemble.',
    invest_cta_btn:  'Nous Contacter ▸',
    social_title:  'Nous trouver <span>en ligne</span>',
    social_desc:   'Rejoignez notre communauté. Suivez l\'aventure, rejoignez Discord, ne manquez aucun lancement.',
    contact_title: 'Nous <span>contacter</span>',
    contact_desc:  'Pour des collaborations, des demandes presse ou juste bonjour — nous serions ravis de vous entendre.',
    contact_info_title:   'Informations de contact',
    contact_email_lbl:    'E-mail',
    contact_loc_lbl:      'Localisation',
    contact_location:     'Beşiktaş, Istanbul — Turquie',
    contact_steam_lbl:    'Boutique Steam',
    contact_steam_link:   'Chaos Budz sur Steam ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'Rejoindre notre serveur ↗',
    form_name:    'Nom',
    form_email:   'E-mail',
    form_message: 'Message',
    form_send:    'ENVOYER ▸',
    form_name_ph: 'Votre nom',
    form_msg_ph:  'Dites-nous ce que vous pensez...',
    form_sending: 'ENVOI EN COURS...',
    form_sent:    'ENVOYÉ ✓',
    form_ok:      '✓ Message envoyé ! Nous vous répondrons bientôt.',
    form_err_fields: '⚠ Veuillez remplir tous les champs.',
    form_err_fail:   '✗ Échec. Veuillez nous écrire directement.',
    footer_copy:  '© 2025 Deep Interactive Entertainment. Istanbul, Turquie.',
  },

  es: {
    flag: '🇪🇸', code: 'ES',
    nav_studio:    'Estudio',
    nav_platforms: 'Plataformas',
    nav_games:     'Juegos',
    nav_invest:    'Invertir',
    nav_connect:   'Conectar',
    nav_contact:   'Contacto',
    hero_tag:      '// EST. ESTAMBUL, TURQUÍA — ESTUDIO INDEPENDIENTE',
    hero_line:     'Construimos mundos. Tú los juegas.',
    hero_steam_btn:'Jugar en Steam',
    hero_games_btn:'Nuestros Juegos ▸',
    stat_console:  '& Consola',
    stat_global:   'Lanzamiento Global',
    stat_based:    'Basados en Estambul',
    about_title:   'Somos <span>Deep Interactive</span> Entertainment',
    about_p1:      'Un equipo independiente especializado en desarrollo de juegos para <strong style="color:var(--text)">PS, XBOX y PC</strong>. Creamos proyectos con narrativa rica y jugabilidad fluida.',
    about_p2:      'Nuestro objetivo es realizar proyectos de alta calidad como equipo experimentado en diseño y desarrollo.',
    feat_1: 'Desarrollo para PC',
    feat_2: 'Títulos de Consola',
    feat_3: 'Publicación en Steam',
    feat_4: 'PlayStation & Xbox',
    feat_5: 'Entornos 3D',
    feat_6: 'Innovación Indie',
    studio_released: 'Juego Publicado',
    studio_team:     'Equipo Principal',
    studio_ambition: 'Ambición',
    platforms_label: 'Plataformas',
    plat_title:    'Dónde <span>publicamos</span>',
    plat_desc:     'Del PC a las consolas — desarrollamos para cada jugador, en todas partes.',
    plat_pc_desc:  'Gaming de alta fidelidad en Windows & Linux. Nuestra plataforma principal con soporte de mods.',
    plat_ps_desc:  'Nuestros títulos en PS4 & PS5 — optimizados para hápticos DualSense y visuales 4K.',
    plat_xbox_desc:'Soporte Xbox One & Series X|S con integración Game Pass y cross-play.',
    games_title:   'Nuestros <span>Juegos</span>',
    games_desc:    'Títulos creados con pasión — disponibles en Steam y llegando a todas las plataformas.',
    badge_available:'DISPONIBLE AHORA',
    badge_soon:    'PRÓXIMAMENTE',
    chaos_genre:   'Acción · PC · 2025',
    chaos_desc:    'Sumérgete en una experiencia salvaje y llena de acción. Chaos Budz ofrece un gameplay frenético con mecánicas únicas. ¡Ya en Steam!',
    btn_view_steam:'Ver en Steam',
    next_genre:    'TBA · PC & Consola',
    next_title:    'Próximo Proyecto',
    next_desc:     'Algo grande se está gestando en nuestro estudio de Estambul. Multi-plataforma desde el día uno. Sigue nuestro Discord.',
    btn_discord:   'Unirse a Discord para actualizaciones',
    invest_title:  'Invierte en <span>Nuestra Visión</span>',
    invest_desc:   'Sé parte de la próxima generación de juegos independientes. Únete a nosotros mientras construimos mundos que cautivan a millones.',
    invest_growth_title: 'Alto Potencial de Crecimiento',
    invest_growth_desc:  'El mercado de juegos indie está en auge. Con nuestro título debut en Steam y una apasionada comunidad global, estamos posicionados para un crecimiento significativo en PC y consolas.',
    invest_pipeline_title: 'Sólida Cartera de Juegos',
    invest_pipeline_desc:  'Chaos Budz es solo el comienzo. Hay varios títulos en desarrollo para PC, PlayStation y Xbox — cada uno diseñado para máximo engagement y ingresos a largo plazo.',
    invest_global_title: 'Alcance Global',
    invest_global_desc:  'Con sede en Estambul y un equipo distribuido globalmente, operamos con menores costos mientras llegamos a audiencias de todo el mundo.',
    invest_tech_title: 'Tecnología Innovadora',
    invest_tech_desc:  'Utilizamos motores de juego de vanguardia para ofrecer experiencias de calidad AAA con presupuestos indie — maximizando el retorno de cada inversión.',
    invest_cta_title: '¿Interesado en Asociarte Con Nosotros?',
    invest_cta_desc:  'Ya seas inversor ángel, editor o socio estratégico — nos encantaría explorar oportunidades juntos. Contáctanos y construyamos el futuro del gaming.',
    invest_cta_btn:  'Ponerse en Contacto ▸',
    social_title:  'Encuéntranos <span>online</span>',
    social_desc:   'Únete a nuestra comunidad. Sigue el viaje, entra en Discord, no te pierdas ningún lanzamiento.',
    contact_title: '<span>Contáctanos</span>',
    contact_desc:  'Para colaboraciones, consultas de prensa o simplemente saludar — nos encantaría saber de ti.',
    contact_info_title:   'Información de contacto',
    contact_email_lbl:    'Correo',
    contact_loc_lbl:      'Ubicación',
    contact_location:     'Beşiktaş, Estambul — Turquía',
    contact_steam_lbl:    'Tienda Steam',
    contact_steam_link:   'Chaos Budz en Steam ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'Unirse a nuestro servidor ↗',
    form_name:    'Nombre',
    form_email:   'Correo',
    form_message: 'Mensaje',
    form_send:    'ENVIAR MENSAJE ▸',
    form_name_ph: 'Tu nombre',
    form_msg_ph:  'Cuéntanos qué tienes en mente...',
    form_sending: 'ENVIANDO...',
    form_sent:    'ENVIADO ✓',
    form_ok:      '✓ ¡Mensaje enviado! Te responderemos pronto.',
    form_err_fields: '⚠ Por favor completa todos los campos.',
    form_err_fail:   '✗ Error. Por favor escríbenos directamente.',
    footer_copy:  '© 2025 Deep Interactive Entertainment. Estambul, Turquía.',
  },

  ja: {
    flag: '🇯🇵', code: 'JA',
    nav_studio:    'スタジオ',
    nav_platforms: 'プラットフォーム',
    nav_games:     'ゲーム',
    nav_invest:    '投資',
    nav_connect:   'つながる',
    nav_contact:   'お問い合わせ',
    hero_tag:      '// イスタンブール発・トルコ — インディーゲームスタジオ',
    hero_line:     '世界を創る。あなたが遊ぶ。',
    hero_steam_btn:'Steamでプレイ',
    hero_games_btn:'ゲーム一覧 ▸',
    stat_console:  '& コンソール',
    stat_global:   'グローバルリリース',
    stat_based:    'イスタンブール拠点',
    about_title:   '私たちは <span>Deep Interactive</span> Entertainment です',
    about_p1:      '<strong style="color:var(--text)">PS・Xbox・PC</strong> のゲーム開発を専門とする独立スタジオです。豊かなストーリーと洗練されたゲームプレイ、オンライン・マルチプレイ体験を届けます。',
    about_p2:      'デザインから開発まで、経験豊富なチームが高品質なプロジェクトを実現することを目指しています。',
    feat_1: 'PCゲーム開発',
    feat_2: 'コンソールタイトル',
    feat_3: 'Steam 配信',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D 環境',
    feat_6: 'インディー革新',
    studio_released: 'リリース済みゲーム',
    studio_team:     'コアチーム',
    studio_ambition: '野望',
    platforms_label: 'プラットフォーム',
    plat_title:    '<span>展開先</span>プラットフォーム',
    plat_desc:     'PC からコンソールまで — どこにいるプレイヤーのためにも開発しています。',
    plat_pc_desc:  'Windows & Linux でのハイクオリティなゲーム体験。Mod サポートとコミュニティ機能を完備。',
    plat_ps_desc:  'PS4 & PS5 向けに最適化。DualSense の触覚フィードバックと 4K ビジュアルに対応。',
    plat_xbox_desc:'Xbox One & Series X|S をサポート。Game Pass 連携とクロスプレイに対応。',
    games_title:   'リリース<span>タイトル</span>',
    games_desc:    '情熱と精度で作り上げたタイトル — Steam で好評配信中、全プラットフォームへ展開予定。',
    badge_available:'配信中',
    badge_soon:    '近日公開',
    chaos_genre:   'アクション · PC · 2025',
    chaos_desc:    'ワイルドでアクション溢れる体験に飛び込もう。Chaos Budz はユニークなメカニクスと忘れられない世界で、スピーディなゲームプレイを提供。Steam で好評配信中！',
    btn_view_steam:'Steam で見る',
    next_genre:    'TBA · PC & コンソール',
    next_title:    '次のプロジェクト',
    next_desc:     'イスタンブールのスタジオで、何か大きなプロジェクトが動き始めています。初日からマルチプラットフォーム対応。Discord をフォローして最新情報をチェック。',
    btn_discord:   'Discord で最新情報を受け取る',
    invest_title:  '<span>私たちのビジョン</span>に投資する',
    invest_desc:   '次世代の独立ゲームの一部になりましょう。何百万人もを魅了する世界を構築する私たちに参加してください。',
    invest_growth_title: '高い成長ポテンシャル',
    invest_growth_desc:  'インディーゲーム市場は急成長中。Steam でのデビュータイトルと熱心なグローバルコミュニティにより、PC・コンソール全体での大幅な成長が期待できます。',
    invest_pipeline_title: '充実したゲームパイプライン',
    invest_pipeline_desc:  'Chaos Budz はほんの始まりです。PC・PlayStation・Xbox 向けの複数タイトルを開発中 — それぞれ最大のプレイヤーエンゲージメントと長期収益を目指して設計されています。',
    invest_global_title: 'グローバルなリーチ',
    invest_global_desc:  'イスタンブールを拠点にグローバル分散チームで運営し、低コストで世界中のオーディエンスにアプローチしています。',
    invest_tech_title: '革新的な技術',
    invest_tech_desc:  '最先端のゲームエンジンと開発パイプラインを活用し、インディー予算で AAA クオリティのゲーム体験を提供 — 投資対効果を最大化します。',
    invest_cta_title: 'パートナーシップにご興味はありますか？',
    invest_cta_desc:  'エンジェル投資家、パブリッシャー、戦略的パートナーなど — ぜひ一緒にチャンスを探りましょう。お気軽にご連絡ください。',
    invest_cta_btn:  'お問い合わせ ▸',
    social_title:  'オンラインで<span>見つける</span>',
    social_desc:   'コミュニティに参加しよう。旅をフォローし、Discord に参加して、新作リリースを見逃さないで。',
    contact_title: '<span>お問い合わせ</span>',
    contact_desc:  'コラボレーション、取材依頼、またはただのご挨拶でも — お気軽にご連絡ください。',
    contact_info_title:   '連絡先',
    contact_email_lbl:    'メール',
    contact_loc_lbl:      '所在地',
    contact_location:     'ベシクタシュ、イスタンブール — トルコ',
    contact_steam_lbl:    'Steam ストア',
    contact_steam_link:   'Steam で Chaos Budz ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'サーバーに参加 ↗',
    form_name:    'お名前',
    form_email:   'メールアドレス',
    form_message: 'メッセージ',
    form_send:    'メッセージを送信 ▸',
    form_name_ph: 'お名前をご入力ください',
    form_msg_ph:  'ご用件をお聞かせください...',
    form_sending: '送信中...',
    form_sent:    '送信完了 ✓',
    form_ok:      '✓ メッセージを送信しました！近日中にご連絡いたします。',
    form_err_fields: '⚠ すべての項目を入力してください。',
    form_err_fail:   '✗ 送信に失敗しました。直接メールでお問い合わせください。',
    footer_copy:  '© 2025 Deep Interactive Entertainment. イスタンブール、トルコ。',
  },

  zh: {
    flag: '🇨🇳', code: 'ZH',
    nav_studio:    '工作室',
    nav_platforms: '平台',
    nav_games:     '游戏',
    nav_invest:    '投资',
    nav_connect:   '加入我们',
    nav_contact:   '联系我们',
    hero_tag:      '// 土耳其伊斯坦布尔 — 独立游戏工作室',
    hero_line:     '我们构建世界，你来探索。',
    hero_steam_btn:'在 Steam 上游玩',
    hero_games_btn:'我们的游戏 ▸',
    stat_console:  '& 主机',
    stat_global:   '全球发行',
    stat_based:    '伊斯坦布尔',
    about_title:   '我们是 <span>Deep Interactive</span> Entertainment',
    about_p1:      '一支专注于 <strong style="color:var(--text)">PS、Xbox 和 PC</strong> 游戏开发的独立团队。我们致力于打造剧情丰富、玩法流畅的项目，包括在线与多人游戏体验。',
    about_p2:      '我们的目标是以经验丰富的设计与开发团队，打造高质量的游戏项目。',
    feat_1: 'PC 游戏开发',
    feat_2: '主机游戏',
    feat_3: 'Steam 发行',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D 场景',
    feat_6: '独立创新',
    studio_released: '已发行游戏',
    studio_team:     '核心团队',
    studio_ambition: '雄心壮志',
    platforms_label: '平台',
    plat_title:    '我们的<span>发行平台</span>',
    plat_desc:     '从 PC 到客厅主机 — 为每一位玩家、在每一个地方开发游戏。',
    plat_pc_desc:  'Windows & Linux 上的高品质游戏体验，支持完整 Mod 和社区功能。',
    plat_ps_desc:  'PS4 & PS5 优化版本，支持 DualSense 触觉反馈和 4K 画质。',
    plat_xbox_desc:'支持 Xbox One & Series X|S，集成 Game Pass 与跨平台游玩。',
    games_title:   '我们的<span>游戏</span>',
    games_desc:    '以热情与精心打造的游戏作品 — 现已登陆 Steam，即将覆盖所有平台。',
    badge_available:'立即可玩',
    badge_soon:    '即将推出',
    chaos_genre:   '动作 · PC · 2025',
    chaos_desc:    '投身狂野、充满动作的冒险！Chaos Budz 带来独特机制与难忘世界的快节奏游玩体验。现已在 Steam 上线！',
    btn_view_steam:'在 Steam 上查看',
    next_genre:    'TBA · PC & 主机',
    next_title:    '下一个项目',
    next_desc:     '我们的伊斯坦布尔工作室正在酝酿大计划。首日起即支持多平台。关注我们的 Discord 抢先获取消息。',
    btn_discord:   '加入 Discord 获取最新动态',
    invest_title:  '投资<span>我们的愿景</span>',
    invest_desc:   '成为独立游戏下一代的一部分。与我们一起构建吸引数百万人的游戏世界。',
    invest_growth_title: '高增长潜力',
    invest_growth_desc:  '独立游戏市场蓬勃发展。凭借我们在 Steam 上的首发游戏和热情的全球社区，我们在 PC 和主机平台上具备显著增长的实力。',
    invest_pipeline_title: '强大的游戏线',
    invest_pipeline_desc:  'Chaos Budz 只是开始。多款面向 PC、PlayStation 和 Xbox 的游戏正在开发中 — 每款均专为最大玩家参与度和长期收益而设计。',
    invest_global_title: '全球覆盖',
    invest_global_desc:  '总部位于伊斯坦布尔，团队分布全球，我们以更低成本运营，同时面向全球受众。多语言布局让我们在新兴市场中更具竞争力。',
    invest_tech_title: '创新技术',
    invest_tech_desc:  '我们利用尖端游戏引擎和开发流程，以独立预算打造 AAA 级游戏体验 — 最大化每一笔投资的回报。',
    invest_cta_title: '有兴趣与我们合作吗？',
    invest_cta_desc:  '无论您是天使投资人、发行商还是战略合作伙伴 — 我们期待共同探索合作机会。联系我们，共同构建游戏的未来。',
    invest_cta_btn:  '立即联系 ▸',
    social_title:  '在线<span>找到我们</span>',
    social_desc:   '加入我们的社区。关注我们的旅程，加入 Discord，不错过每一次发布。',
    contact_title: '<span>联系</span>我们',
    contact_desc:  '无论是合作邀请、媒体采访还是简单的问候 — 我们期待您的来信。',
    contact_info_title:   '联系方式',
    contact_email_lbl:    '邮箱',
    contact_loc_lbl:      '所在地',
    contact_location:     '贝西克塔什，伊斯坦布尔 — 土耳其',
    contact_steam_lbl:    'Steam 商店',
    contact_steam_link:   'Steam 上的 Chaos Budz ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: '加入我们的服务器 ↗',
    form_name:    '姓名',
    form_email:   '邮箱',
    form_message: '留言',
    form_send:    '发送消息 ▸',
    form_name_ph: '请输入您的姓名',
    form_msg_ph:  '请告诉我们您的想法...',
    form_sending: '发送中...',
    form_sent:    '已发送 ✓',
    form_ok:      '✓ 消息已发送！我们会尽快与您联系。',
    form_err_fields: '⚠ 请填写所有字段。',
    form_err_fail:   '✗ 发送失败，请直接发送邮件联系我们。',
    footer_copy:  '© 2025 Deep Interactive Entertainment. 伊斯坦布尔，土耳其。',
  }
};

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
let currentLang = localStorage.getItem('die-lang') || 'en';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  // innerHTML elements (support HTML tags inside translations)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Update button
  document.getElementById('currentFlag').textContent = t.flag;
  document.getElementById('currentLangCode').textContent = t.code;

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Save
  localStorage.setItem('die-lang', lang);
}

function setLang(lang) {
  applyLang(lang);
  closeLangDropdown();
}

function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.toggle('open');
}

function closeLangDropdown() {
  document.getElementById('langDropdown').classList.remove('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const switcher = document.getElementById('langSwitcher');
  if (switcher && !switcher.contains(e.target)) {
    closeLangDropdown();
  }
});

/* ============================================================
   THEME
   ============================================================ */
function toggleTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  btn.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('die-theme', isDark ? 'light' : 'dark');
}

(function initTheme() {
  const saved = localStorage.getItem('die-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeBtn').textContent = saved === 'dark' ? '☀️' : '🌙';
})();

/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  menu.classList.remove('open');
  burger.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const menu   = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  const nav    = document.querySelector('nav');
  if (menu && menu.classList.contains('open') && !nav.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ============================================================
   EMAILJS
   ============================================================ */
emailjs.init('XYEbpF6hgs9H2XyD4');

function sendMail() {
  const t    = i18n[currentLang];
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();
  const btn   = document.getElementById('sendbtn');
  const out   = document.getElementById('formmsg');

  if (!name || !email || !msg) {
    out.textContent = t.form_err_fields;
    out.className = 'form-msg err';
    return;
  }

  btn.disabled = true;
  btn.textContent = t.form_sending;
  out.textContent = '';

  emailjs.send('service_j9slh1f', 'template_va2gljr', {
    from_name:  name,
    from_email: email,
    reply_to:   email,
    message:    msg,
    to_email:   'deepinteractiveentertainment@gmail.com'
  }).then(() => {
    out.textContent = t.form_ok;
    out.className = 'form-msg ok';
    btn.textContent = t.form_sent;
    document.getElementById('fname').value  = '';
    document.getElementById('femail').value = '';
    document.getElementById('fmsg').value   = '';
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = t.form_send;
    }, 4000);
  }).catch(() => {
    out.textContent = t.form_err_fail;
    out.className = 'form-msg err';
    btn.disabled = false;
    btn.textContent = t.form_send;
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   INIT
   ============================================================ */
(function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
  } else {
    applyLang(currentLang);
  }
})();