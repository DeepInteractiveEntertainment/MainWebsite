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
    nav_team:      'Team',
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
    team_title:    'The <span>Crew</span>',
    team_desc:     'A small, focused team with big ambitions — each member a specialist, together unstoppable.',
    bilal_role:    'Founder & Developer',
    bilal_bio:     'The visionary behind Deep Interactive. Bilal leads development and drives the studio\'s creative direction from Istanbul.',
    bulut_role:    'Game & Level Designer',
    bulut_bio:     'Crafting the worlds players explore. Bulut shapes the gameplay experience through thoughtful design and creative mechanics.',
    isaac_role:    '3D Artist',
    isaac_bio:     'Bringing visual worlds to life. Isaac Rojas Sepulveda sculpts stunning 3D environments that define our games\' aesthetic.',
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
    nav_team:      'Ekip',
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
    team_title:    'Ekibimiz <span></span>',
    team_desc:     'Büyük hırslarla küçük, odaklı bir ekip — her üye uzman, birlikte durdurulamaz.',
    bilal_role:    'Kurucu & Geliştirici',
    bilal_bio:     'Deep Interactive\'in vizyoneri. Bilal, İstanbul\'dan geliştirme sürecini yönetiyor ve stüdyonun yaratıcı yönünü belirliyor.',
    bulut_role:    'Oyun & Level Tasarımcısı',
    bulut_bio:     'Oyuncuların keşfettiği dünyaları yaratıyor. Bulut, düşünceli tasarım ve yaratıcı mekaniklerle oyun deneyimini şekillendiriyor.',
    isaac_role:    '3D Sanatçı',
    isaac_bio:     'Görsel dünyaları hayata geçiriyor. Isaac Rojas Sepulveda, oyunlarımızın estetiğini tanımlayan çarpıcı 3D ortamlar yaratıyor.',
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
    nav_team:      'Team',
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
    team_title:    'Das <span>Team</span>',
    team_desc:     'Ein kleines, fokussiertes Team mit großen Ambitionen — jeder ein Spezialist, zusammen unaufhaltsam.',
    bilal_role:    'Gründer & Entwickler',
    bilal_bio:     'Der Visionär hinter Deep Interactive. Bilal leitet die Entwicklung aus Istanbul.',
    bulut_role:    'Spiel- & Level-Designer',
    bulut_bio:     'Erschafft die Welten, die Spieler erkunden. Bulut gestaltet das Spielerlebnis durch durchdachtes Design.',
    isaac_role:    '3D-Künstler',
    isaac_bio:     'Erweckt visuelle Welten zum Leben. Isaac sculpts beeindruckende 3D-Umgebungen.',
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
    nav_team:      'Équipe',
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
    team_title:    '<span>L\'Équipe</span>',
    team_desc:     'Une petite équipe focalisée avec de grandes ambitions — chaque membre est un spécialiste, ensemble inarrêtables.',
    bilal_role:    'Fondateur & Développeur',
    bilal_bio:     'Le visionnaire derrière Deep Interactive. Bilal dirige le développement depuis Istanbul.',
    bulut_role:    'Designer Jeu & Niveaux',
    bulut_bio:     'Crée les mondes que les joueurs explorent. Bulut façonne l\'expérience de jeu par un design réfléchi.',
    isaac_role:    'Artiste 3D',
    isaac_bio:     'Donne vie aux mondes visuels. Isaac sculpte des environnements 3D époustouflants.',
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
    nav_team:      'Equipo',
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
    team_title:    'El <span>Equipo</span>',
    team_desc:     'Un equipo pequeño y enfocado con grandes ambiciones — cada miembro un especialista, juntos imparables.',
    bilal_role:    'Fundador & Desarrollador',
    bilal_bio:     'El visionario detrás de Deep Interactive. Bilal lidera el desarrollo desde Estambul.',
    bulut_role:    'Diseñador de Juego & Niveles',
    bulut_bio:     'Crea los mundos que los jugadores exploran. Bulut da forma a la experiencia de juego con diseño reflexivo.',
    isaac_role:    'Artista 3D',
    isaac_bio:     'Da vida a mundos visuales. Isaac esculpe entornos 3D impresionantes que definen la estética de nuestros juegos.',
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
    nav_team:      'チーム',
    nav_connect:   'つながる',
    nav_contact:   'お問い合わせ',
    hero_tag:      '// イスタンブール・トルコ — インディーゲームスタジオ',
    hero_line:     '世界を作る。あなたが遊ぶ。',
    hero_steam_btn:'Steamでプレイ',
    hero_games_btn:'ゲーム一覧 ▸',
    stat_console:  'とコンソール',
    stat_global:   'グローバルリリース',
    stat_based:    'イスタンブール拠点',
    about_title:   '私たちは<span>Deep Interactive</span> Entertainmentです',
    about_p1:      '<strong style="color:var(--text)">PS・XBOX・PC</strong>のゲーム開発を専門とする独立チームです。豊かなストーリーと流れるようなゲームプレイを目指しています。',
    about_p2:      'デザインと開発の両方で経験豊富なチームとして、高品質なプロジェクトを実現することが目標です。',
    feat_1: 'PCゲーム開発',
    feat_2: 'コンソールタイトル',
    feat_3: 'Steam配信',
    feat_4: 'PlayStation & Xbox',
    feat_5: '3D環境',
    feat_6: 'インディー革新',
    studio_released: 'リリース済みゲーム',
    studio_team:     'コアチーム',
    studio_ambition: '野心',
    platforms_label: 'プラットフォーム',
    plat_title:    'リリース<span>プラットフォーム</span>',
    plat_desc:     'PCからコンソールまで — あらゆるプレイヤーのために、どこでも開発。',
    plat_pc_desc:  'Windows & Linuxでの高品質ゲーム体験。Modサポートとコミュニティ機能を完備。',
    plat_ps_desc:  'PS4 & PS5向けに最適化。DualSenseの触覚フィードバックと4Kビジュアルに対応。',
    plat_xbox_desc:'Xbox One & Series X|Sサポート。Game Pass統合とクロスプレイ対応。',
    games_title:   'リリース<span>ゲーム</span>',
    games_desc:    '情熱と精密さで作られたタイトル — Steamで配信中、全プラットフォームに向かっています。',
    badge_available:'今すぐプレイ可能',
    badge_soon:    'まもなく登場',
    chaos_genre:   'アクション · PC · 2025',
    chaos_desc:    'ワイルドでアクション満載の体験に飛び込もう。Chaos Budzはユニークなメカニクスと忘れられない世界で速いテンポのゲームプレイを提供。Steamで配信中！',
    btn_view_steam:'Steamで見る',
    next_genre:    'TBA · PC & コンソール',
    next_title:    '次のプロジェクト',
    next_desc:     'イスタンブールのスタジオで何か大きなものが醸造されています。初日からマルチプラットフォーム。Discordをフォローして。',
    btn_discord:   'アップデートのためDiscordに参加',
    team_title:    '<span>チーム</span>紹介',
    team_desc:     '大きな野心を持つ小さなチーム — それぞれが専門家、一緒に止められない。',
    bilal_role:    '創設者 & 開発者',
    bilal_bio:     'Deep Interactiveのビジョナリー。ビラルはイスタンブールから開発を率いています。',
    bulut_role:    'ゲーム & レベルデザイナー',
    bulut_bio:     'プレイヤーが探索する世界を作り上げる。ブルットは思慮深いデザインでゲーム体験を形作ります。',
    isaac_role:    '3Dアーティスト',
    isaac_bio:     'ビジュアルな世界を生き生きとさせる。アイザックはゲームの美学を定義する3D環境を作ります。',
    social_title:  'オンラインで<span>見つけよう</span>',
    social_desc:   'コミュニティに参加しよう。旅をフォローし、Discordに入り、ローンチを見逃さないで。',
    contact_title: '<span>お問い合わせ</span>',
    contact_desc:  'コラボレーション、プレス問い合わせ、またはただのご挨拶でも — ぜひご連絡ください。',
    contact_info_title:   '連絡先情報',
    contact_email_lbl:    'メール',
    contact_loc_lbl:      '所在地',
    contact_location:     'ベシクタシュ、イスタンブール — トルコ',
    contact_steam_lbl:    'Steamストア',
    contact_steam_link:   'SteamでChaos Budz ↗',
    contact_discord_lbl:  'Discord',
    contact_discord_link: 'サーバーに参加 ↗',
    form_name:    'お名前',
    form_email:   'メール',
    form_message: 'メッセージ',
    form_send:    'メッセージを送る ▸',
    form_name_ph: 'お名前',
    form_msg_ph:  'ご用件をお聞かせください...',
    form_sending: '送信中...',
    form_sent:    '送信完了 ✓',
    form_ok:      '✓ メッセージが送信されました！すぐにご連絡します。',
    form_err_fields: '⚠ すべてのフィールドを入力してください。',
    form_err_fail:   '✗ 失敗しました。直接メールでご連絡ください。',
    footer_copy:  '© 2025 Deep Interactive Entertainment. イスタンブール、トルコ。',
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
  applyLang(currentLang);
})();