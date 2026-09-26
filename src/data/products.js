export const CATEGORIES = [
  { id: 'all', name: 'Tüm Ürünler', count: 24, icon: 'LayoutGrid' },
  { id: 'kimyasal', name: 'Temizlik Kimyasalları', count: 7, icon: 'FlaskConical', desc: 'Endüstriyel 20-30 LT, 5 LT ve sprey grubu konsantre hijyen çözümleri' },
  { id: 'kagit', name: 'Kağıt & Mutfak Grubu', count: 5, icon: 'ScrollText', desc: 'Z Katlama, dispenser havlu, jumbo tuvalet kağıtları ve peçeteler' },
  { id: 'ambalaj', name: 'Bardak & Ambalaj', count: 4, icon: 'Coffee', desc: '4 OZ, 7 OZ karton bardaklar, köpük ürünler ve servis ambalajları' },
  { id: 'cop-torbasi', name: 'Çöp Torbaları & Atık', count: 4, icon: 'Trash2', desc: 'Mini, Battal, Jumbo ve Hantal boy yüksek mukavemetli çöp poşetleri' },
  { id: 'gerec', name: 'Temizlik Gereçleri', count: 4, icon: 'Sparkles', desc: 'Moplar, presli kat arabaları, mikrofiber bezler ve aparatlar' }
];

export const PRODUCTS = [
  // 1. Temizlik Kimyasalları
  {
    id: 'kim-01',
    name: '30 LT Endüstriyel Ağır Kir ve Zemin Temizleyici',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Endüstriyel Boy (20 - 30 LT)',
    volumeSize: '30 LT',
    packaging: '1 Adet / 30 LT Endüstriyel Kilitli Bidon',
    badge: 'Çok Satan',
    badgeColor: 'bg-blue-600',
    shortDesc: 'Fabrika zeminleri, depolar ve yoğun insan trafiği olan alanlar için yüksek konsantrasyonlu zemin temizleyici.',
    specs: {
      'Ambalaj Hacmi': '30 Litre',
      'pH Değeri': '8.5 - 9.5 (Nötr-Alkali dengeli)',
      'Konsantrasyon': '1/50 - 1/100 Seyreltme Oranı',
      'Kullanım Şekli': 'Kombine zemin yıkama otomatları ve paspas ile uygulanabilir.',
      'Sertifikalar': 'ISO 9001, ISO 14001, Dermatolojik Uygunluk',
    },
    usageAreas: ['Fabrikalar & Atölyeler', 'Depolar & Lojistik Merkezleri', 'Alışveriş Merkezleri', 'Hastaneler & Okullar'],
    features: ['İz bırakmadan parlatır', 'Düşük köpüklü - otomat makinelerine uygundur', 'Ekonomik seyreltme avantajı', 'Ferah ve kalıcı koku']
  },
  {
    id: 'kim-02',
    name: '20 LT Konsantre Ağır Yağ ve Kir Sökücü',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Endüstriyel Boy (20 - 30 LT)',
    volumeSize: '20 LT',
    packaging: '1 Adet / 20 LT Güvenlikli Bidon',
    badge: 'Endüstriyel Güç',
    badgeColor: 'bg-amber-600',
    shortDesc: 'Mutfak ocakları, davlumbazlar, motor blokları ve endüstriyel ızgaralardaki yanmış yağları anında parçalar.',
    specs: {
      'Ambalaj Hacmi': '20 Litre',
      'pH Değeri': '12.0 - 13.0 (Kuvvetli Alkali)',
      'Konsantrasyon': '1/10 - 1/30 Seyreltilebilir',
      'Etki Süresi': '3-5 Dakika Bekleme Yeterlidir',
      'Güvenlik': 'Kullanım esnasında eldiven önerilir.'
    },
    usageAreas: ['Sanayi Tipi Mutfaklar', 'Catering Firmaları', 'Otomotiv & Makine Bakım', 'Gıda Üretim Tesisleri'],
    features: ['Yanmış ve karbonlaşmış yağları zahmetsiz çözer', 'Alüminyum dışı tüm metallerde güvenli', 'Zaman ve iş gücü tasarrufu sağlar']
  },
  {
    id: 'kim-03',
    name: '5 LT Ultra Çamaşır Suyu (Yoğun Kıvamlı Hijyen)',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Ekonomik & Orta Boy (5 LT)',
    volumeSize: '5 LT',
    packaging: '4 Adet x 5 LT / Koli (20 LT)',
    badge: 'Maksimum Hijyen',
    badgeColor: 'bg-emerald-600',
    shortDesc: 'Tuvalet, lavabo ve ıslak zeminlerde kireç ve sararmaları önleyen, yüzeylere tutunan yoğun kıvamlı klor bazlı formül.',
    specs: {
      'Ambalaj Hacmi': '5 Litre Bidon (Koli İçi 4 Adet)',
      'Aktif Madde': '%5 Sodyum Hipoklorit + Kıvam Artırıcı',
      'Kıvam': 'Yoğun Jel Formülasyon',
      'Etki': 'Geniş spektrumlu mikrop/bakteri önleme',
      'Raf Ömrü': '2 Yıl'
    },
    usageAreas: ['Kurumsal Ofisler', 'Okullar ve Yurtlar', 'Spor Salonları & Soyunma Odaları', 'Restoran & Kafeler'],
    features: ['Yüzeylere tutunarak uzun süreli koruma sağlar', 'Kötü kokuları kaynağında yok eder', 'Tasarruflu döküm başlığına uygun ambalaj']
  },
  {
    id: 'kim-04',
    name: '5 LT İncili Gliserinli Sıvı El Sabunu',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Ekonomik & Orta Boy (5 LT)',
    volumeSize: '5 LT',
    packaging: '4 Adet x 5 LT / Koli',
    badge: 'Cilt Dostu',
    badgeColor: 'bg-sky-600',
    shortDesc: 'Sık el yıkanan işletmelerde cildin nem dengesini koruyan, hoş parfümlü ve yüksek köpük verimli sıvı sabun.',
    specs: {
      'Ambalaj Hacmi': '5 Litre Bidon',
      'pH Değeri': '5.5 (Cilt İle Tam Uyumlu)',
      'İçerik': 'Gliserin + E Vitamini Takviyeli',
      'Dispenser Uyumu': 'Tüm basmalı ve fotoselli sabunluklara uygun'
    },
    usageAreas: ['Kurumsal Plazalar', 'Hastaneler & Klinikler', 'Eğitim Kurumları', 'Restoran Tuvaletleri'],
    features: ['Elleri kurutmaz, nemlendirici bakım sunar', 'Dermatolojik olarak onaylanmıştır', 'Kalıcı ve ferah lavanta & okyanus esansı']
  },
  {
    id: 'kim-05',
    name: '750 ML Cam ve Parlak Yüzey Temizleyici Sprey',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Kullanıma Hazır & Sprey Grubu (500 - 750 - 1000 ML)',
    volumeSize: '750 ML',
    packaging: '12 Adet x 750 ML / Koli (Sprey Başlıklı)',
    badge: 'İz Bırakmaz',
    badgeColor: 'bg-cyan-600',
    shortDesc: 'Cam, ayna, krom ve paslanmaz çelik yüzeylerde buğu yapmayan ve toz tutmayan anti-statik formül.',
    specs: {
      'Ambalaj Hacmi': '750 ML Ergonomik Tetikli Şişe',
      'Koli Standardı': '12 Adet / Koli',
      'Özellik': 'Alkol bazlı hızlı kuruyan formül',
      'Kullanım': 'Sulandırma gerektirmez, doğrudan püskürtülür'
    },
    usageAreas: ['Ofis Cam Bölmeleri & Masaları', 'Otel Odaları', 'Vitrinler & Showroomlar', 'Asansör Kabinleri'],
    features: ['Durulama ve kurulama gerektirmeden parlaklık verir', 'Tozlanmayı geciktiren anti-statik koruma', 'Ergonomik çift fonksiyonlu püskürtme başlığı']
  },
  {
    id: 'kim-06',
    name: '1000 ML Ağır Kireç ve Pas Sökücü Jel',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Kullanıma Hazır & Sprey Grubu (500 - 750 - 1000 ML)',
    volumeSize: '1000 ML',
    packaging: '12 Adet x 1000 ML / Koli',
    badge: 'Hızlı Reaksiyon',
    badgeColor: 'bg-red-600',
    shortDesc: 'Pisuvar, klozet ve armatürlerde biriken yoğun kireç taşlarını ve pas lekelerini hızla çözen konsantre jel.',
    specs: {
      'Ambalaj Hacmi': '1000 ML Açılı Gagalı Şişe',
      'pH Değeri': '1.0 - 2.0 (Asidik Formül)',
      'Koli Adedi': '12 Adet / Koli',
      'Uygulama': 'Klozet kenarlarına kolay ulaşan açılı uç'
    },
    usageAreas: ['Otel Banyo & Tuvaletleri', 'Fabrika Soyunma Alanları', 'Hamam & Termal Tesisler'],
    features: ['Dik yüzeylere tutunarak kireci kökten söker', 'Emaye ve derzlere zarar vermez', 'Düzenli kullanımda tesisat tıkanıklığını engeller']
  },
  {
    id: 'kim-07',
    name: '5 LT Konsantre Genel Yüzey Parlatıcı ve Zemin Bakım',
    category: 'kimyasal',
    categoryLabel: 'Temizlik Kimyasalları',
    subCategory: 'Ekonomik & Orta Boy (5 LT)',
    volumeSize: '5 LT',
    packaging: '4 Adet x 5 LT / Koli',
    badge: 'Tasarruf Paketi',
    badgeColor: 'bg-indigo-600',
    shortDesc: 'Mermer, granit, seramik ve epoksi zeminlerde cila koruyucu ve parlaklık artırıcı günlük bakım kimyasalı.',
    specs: {
      'Ambalaj': '5 LT Bidon',
      'pH Değeri': '7.0 (Nötr)',
      'Kullanım Oranı': '1 kova suya (10 LT) 50-100 ml'
    },
    usageAreas: ['Kurumsal Giriş Lobileri', 'Hastaneler', 'Bankalar & Mağazalar'],
    features: ['Mevcut zemin cilasını matlaştırmaz', 'Kaymayı önleyen özel formül', 'Kalıcı bahar çiçekleri kokusu']
  },

  // 2. Kağıt & Mutfak Kullan-At Grubu
  {
    id: 'kag-01',
    name: 'Z Katlama Dispenser Kağıt Havlu (2 Katlı, %100 Saf Selüloz)',
    category: 'kagit',
    categoryLabel: 'Kağıt & Mutfak Kullan-At',
    subCategory: 'Z Katlama & Dispenser Havlular',
    volumeSize: '3000 Yaprak / Koli',
    packaging: '15 Paket x 200 Yaprak = 3000 Yaprak / Koli',
    badge: 'B2B Lideri',
    badgeColor: 'bg-blue-600',
    shortDesc: 'Her çekişte tek yaprak veren, tüketimi %40 oranında azaltarak tasarruf sağlayan yüksek emiciliğe sahip Z havlu.',
    specs: {
      'Hammadde': '%100 Saf Birincil Selüloz',
      'Kat Sayısı': '2 Katlı (Lamine Edilmiş)',
      'Ebat': '21.5 cm x 24 cm',
      'Gramaj': '40 gr/m² (Çift Kat Toplam)',
      'Koli İçi Adet': '3000 Yaprak (15 x 200)'
    },
    usageAreas: ['Ofis & Plaza Tuvaletleri', 'Hastaneler & Muayenehaneler', 'Restoran & Kafeler', 'Okullar'],
    features: ['Islanınca parçalanmaz, yüksek mukavemet', 'Tek yaprakla tam kurulama sağlar', 'Tüm standart Z dispenser cihazlarıyla uyumludur', 'Çevre dostu orman sertifikalı hammadde']
  },
  {
    id: 'kag-02',
    name: 'Endüstriyel Çift Katlı Jumbo Tuvalet Kağıdı (12 Rulo)',
    category: 'kagit',
    categoryLabel: 'Kağıt & Mutfak Kullan-At',
    subCategory: 'Jumbo Tuvalet Kağıtları',
    volumeSize: '150 Metre / Rulo',
    packaging: '12 Rulo x 150 Metre / Koli (1800 Metre)',
    badge: 'Yüksek Tasarruf',
    badgeColor: 'bg-emerald-600',
    shortDesc: 'Yoğun sirkülasyonlu işletmelerde rulo değişim sıklığını minimuma indiren, suda hızlı eriyen tesisat dostu jumbo rulo.',
    specs: {
      'Metraj': '150 Metre / Rulo',
      'Kat Sayısı': '2 Katlı',
      'Koli İçi': '12 Rulo',
      'Genişlik': '9.5 cm',
      'Göbek Çapı': '60 mm (Standart Jumbo Dispenser)'
    },
    usageAreas: ['Fabrikalar', 'AVM Tuvaletleri', 'Havalimanları & Otogarlar', 'Stadyum & Sosyal Tesisler'],
    features: ['Suda kolay çözünür, giderleri tıkamaz', 'Ekstra yumuşak kabartmalı doku', 'Bakım personeli için zaman tasarrufu']
  },
  {
    id: 'kag-03',
    name: 'Sensörlü Fotoselli Otomatik Rulo Havlu (21 cm x 150 mt)',
    category: 'kagit',
    categoryLabel: 'Kağıt & Mutfak Kullan-At',
    subCategory: 'Rulo Havlular',
    volumeSize: '150 Metre x 6 Rulo',
    packaging: '6 Rulo / Koli (Toplam 900 Metre)',
    badge: 'Temassız Hijyen',
    badgeColor: 'bg-cyan-600',
    shortDesc: 'Temassız fotoselli makineler için özel üretilmiş, maksimum emiciliğe sahip, israfı önleyen lamine rulo havlu.',
    specs: {
      'Rulo Uzunluğu': '150 Metre',
      'Rulo Eni': '21 cm',
      'Koli İçi': '6 Rulo',
      'Kat': '2 Katlı Mikro Kabartmalı',
      'Gramaj': '42 gr/m²'
    },
    usageAreas: ['Plazalar & Holding Merkezleri', 'Özel Hastaneler', 'Lüks Restoranlar'],
    features: ['Maksimum su çekme kapasitesi', 'Yüksek çekme direnci, kopma yapmaz', 'Tüm standart fotoselli aparatlara tam uyum']
  },
  {
    id: 'kag-04',
    name: 'Dispenser Masaüstü Peçete (Tek Çekimlik 18x24 cm)',
    category: 'kagit',
    categoryLabel: 'Kağıt & Mutfak Kullan-At',
    subCategory: 'Dispenser Peçeteler',
    volumeSize: '2500 Adet / Koli',
    packaging: '10 Paket x 250 Adet = 2500 Yaprak / Koli',
    badge: 'Ekonomik',
    badgeColor: 'bg-slate-600',
    shortDesc: 'Restoran ve kafeteryalarda masada hijyeni sağlayan, misafirin tek peçete almasını sağlayarak tüketimi yarı yarıya düşüren dispenser peçete.',
    specs: {
      'Ebat': '18 cm x 24 cm (Açık Hali)',
      'Kat': 'Tek Kat Ekstra Emici Doku',
      'Paketleme': '2500 Adet Koli',
      'Hammadde': '%100 Selüloz'
    },
    usageAreas: ['Fast Food & Kafeler', 'Şirket Yemekhaneleri', 'Büfeler & Pastaneler'],
    features: ['Masalarda gereksiz peçete israfını önler', 'Yumuşak ve dayanıklı yüzey', 'Kompakt dispenser uyumlu']
  },
  {
    id: 'kag-05',
    name: 'İçten Çekmeli Rulo Havlu (6 Rulo / Koli)',
    category: 'kagit',
    categoryLabel: 'Kağıt & Mutfak Kullan-At',
    subCategory: 'Rulo Havlular',
    volumeSize: '100 Metre x 6 Rulo',
    packaging: '6 Rulo / Koli',
    badge: 'Mutfak Dostu',
    badgeColor: 'bg-amber-600',
    shortDesc: 'Sanayi mutfaklarında, tezgah üzeri ve el temizliğinde ortadan çekilerek pratik kullanım sunan hijyenik havlu.',
    specs: {
      'Uzunluk': '100 Metre',
      'Genişlik': '19 cm',
      'Özellik': 'Perforeli kolay kopma çizgisi',
      'Kat Sayısı': '2 Katlı'
    },
    usageAreas: ['Restoran Mutfakları', 'Fırın & Unlu Mamuller', 'Laboratuvarlar'],
    features: ['Gıda ile temasa uygunluk belgeli', 'Tüy ve toz bırakmaz', 'Yağ ve sıvıları hızla hapseder']
  },

  // 3. Bardak & Ambalaj Ürünleri
  {
    id: 'amb-01',
    name: '4 OZ Karton Espresso / Numune Bardağı (3000 Adet)',
    category: 'ambalaj',
    categoryLabel: 'Bardak & Ambalaj Ürünleri',
    subCategory: 'Karton Bardaklar',
    volumeSize: '4 OZ (110 ML)',
    packaging: '60 Paket x 50 Adet = 3000 Adet / Koli',
    badge: 'Sızdırmaz Taban',
    badgeColor: 'bg-orange-600',
    shortDesc: 'Espresso, kahve tadımları ve su sebilleri için gıda kodeksine uygun, ısıya dayanıklı karton bardak.',
    specs: {
      'Hacim': '4 OZ (~110 ml)',
      'Koli Adedi': '3000 Adet',
      'Taban': 'Çift Kat Güçlendirilmiş Taban Kıvrımı',
      'Malzeme': 'Gıda Tipi 1. Sınıf Karton + PE Kaplama',
      'Sıcaklık Dayanımı': '+90°C Isıya Dirençli'
    },
    usageAreas: ['Kahve Dükkanları', 'Ofis Kahve Alanları', 'Numune & Tadım Stantları', 'Hastaneler'],
    features: ['Koku ve tat bırakmaz', 'Sıcak içeceklerde yumuşama yapmaz', 'Geri dönüştürülebilir çevre dostu gövde']
  },
  {
    id: 'amb-02',
    name: '7 OZ Karton Bardak Ofis Tipi (3000 Adet / Koli)',
    category: 'ambalaj',
    categoryLabel: 'Bardak & Ambalaj Ürünleri',
    subCategory: 'Karton Bardaklar',
    volumeSize: '7 OZ (180-200 ML)',
    packaging: '60 Paket x 50 Adet = 3000 Adet / Koli',
    badge: 'En Çok Satan',
    badgeColor: 'bg-blue-600',
    shortDesc: 'Ofis ve fabrikalardaki çay/kahve otomatları ve su sebilleri için en ideal standart ölçü karton bardak.',
    specs: {
      'Hacim': '7 OZ (~190 ml)',
      'Koli Adedi': '3000 Adet',
      'Ağız Çapı': '70 mm',
      'Taban': 'Ultrasonik sızdırmaz kaynak',
      'Sertifika': 'Tarım ve Orman Bakanlığı Gıda İle Temas Onaylı'
    },
    usageAreas: ['Kurumsal Şirketler & Ofisler', 'Fabrika Çay Ocakları', 'Etkinlik & Kongreler'],
    features: ['Elde deforme olmayan sert gövde yapısı', 'Sıvı sızdırmaz garantili taban', 'Otomat makinelerine kusursuz uyum']
  },
  {
    id: 'amb-03',
    name: '8 OZ Çift Duvarlı (Double Wall) Isı Yalıtımlı Karton Bardak',
    category: 'ambalaj',
    categoryLabel: 'Bardak & Ambalaj Ürünleri',
    subCategory: 'Karton Bardaklar',
    volumeSize: '8 OZ (240 ML)',
    packaging: '1000 Adet / Koli (Kapak Seçenekli)',
    badge: 'Premium Kalite',
    badgeColor: 'bg-amber-700',
    shortDesc: 'Elin yanmasını önleyen hava kanallı çift katmanlı yapı. Sleeve (bardak kılıfı) maliyetini ortadan kaldırır.',
    specs: {
      'Hacim': '8 OZ (~240 ml)',
      'Yapı': 'Çift Duvar (Air Pocket Termal İzolasyon)',
      'Koli Adedi': '1000 Adet',
      'Uyumlu Kapak': '80 mm Standart Kapak Uyumlu'
    },
    usageAreas: ['Take-Away Kafeler', 'Premium Ofisler', 'VIP Toplantı Salonları'],
    features: ['El yakmaz, ekstra koruyucu kılıf gerektirmez', 'Sıcaklığı uzun süre muhafaza eder', 'Şık mat kraft ve siyah renk seçenekleri']
  },
  {
    id: 'amb-04',
    name: 'Köpük Çorba Kasesi ve Sıcak Servis Ambalaj Grubu',
    category: 'ambalaj',
    categoryLabel: 'Bardak & Ambalaj Ürünleri',
    subCategory: 'Köpük & Servis Ambalajları',
    volumeSize: '500 CC Kaseler',
    packaging: '500 Adet / Koli (Kapaklı)',
    badge: 'Termal Koruma',
    badgeColor: 'bg-stone-600',
    shortDesc: 'Paket servis ve yemekhaneler için yiyeceklerin sıcaklığını uzun süre koruyan hijyenik köpük kase.',
    specs: {
      'Hacim': '500 CC',
      'İçerik': 'Kase + Sıkı Geçme Kapak',
      'Koli Adedi': '500 Takım'
    },
    usageAreas: ['Catering & Yemek Firmaları', 'Çorbacılar & Restoranlar', 'Şantiye Yemekhaneleri'],
    features: ['Yüksek ısı yalıtımı ile dökülmez ve sızdırmaz', 'Hafif ve ekonomik taşıma avantajı']
  },

  // 4. Çöp Torbaları & Atık Yönetimi
  {
    id: 'cop-01',
    name: 'Battal Boy Ağır Hizmet Çöp Torbası (72x95 cm)',
    category: 'cop-torbasi',
    categoryLabel: 'Çöp Torbaları & Atık',
    subCategory: 'Battal & Jumbo Boy Torbalar',
    volumeSize: '72 x 95 cm (Siyah)',
    packaging: '20 Rulo x 10 Adet = 200 Adet / Koli',
    badge: 'Yırtılmaz Formül',
    badgeColor: 'bg-slate-800',
    shortDesc: 'İç mekan ve dış mekan büyük çöp kovaları için yüksek yoğunluklu polietilenden üretilmiş sızdırmaz çöp torbası.',
    specs: {
      'Ebat': '72 cm x 95 cm',
      'Hacim': 'Yaklaşık 70-80 Litre',
      'Koli İçi': '200 Adet (20 Rulo)',
      'Hammadde': 'Geri Dönüştürülmüş Dayanıklı Polietilen (LDPE)',
      'Taban': 'Yıldız Dikiş Sızdırmaz Taban'
    },
    usageAreas: ['Bina & Site Yönetimleri', 'Fabrika İçi Çöp İstasyonları', 'Restoran Arka Planları'],
    features: ['Sıvı sızıntısını engelleyen yıldız kaynak taban', 'Sivri cisimlere karşı esnek ve mukavemetli', 'Ağır çöp yüklerini güvenle taşır']
  },
  {
    id: 'cop-02',
    name: 'Jumbo Boy Sanayi Tipi Çöp Torbası (80x110 cm)',
    category: 'cop-torbasi',
    categoryLabel: 'Çöp Torbaları & Atık',
    subCategory: 'Battal & Jumbo Boy Torbalar',
    volumeSize: '80 x 110 cm',
    packaging: '10 Rulo x 10 Adet = 100 Adet / Koli',
    badge: 'Sanayi Tipi',
    badgeColor: 'bg-zinc-800',
    shortDesc: 'Büyük hacimli atıklar ve endüstriyel konteyner kovaları için ekstra kalınlaştırılmış çöp poşeti.',
    specs: {
      'Ebat': '80 cm x 110 cm',
      'Koli İçi': '100 Adet',
      'Mikron Kalınlığı': 'Ekstra Kalın Sanayi Standardı',
      'Renk': 'Opak Siyah'
    },
    usageAreas: ['İmalathaneler', 'Otel Kat Arabaları', 'Hastaneler & Alışveriş Merkezleri'],
    features: ['Ağır ve hacimli çöplerde yırtılma yapmaz', 'Koku sızdırmaz kalın film tabakası', 'Pratik rulo perfore koparma kolaylığı']
  },
  {
    id: 'cop-03',
    name: 'Hantal Boy Konteyner Çöp Torbası (100x120 cm)',
    category: 'cop-torbasi',
    categoryLabel: 'Çöp Torbaları & Atık',
    subCategory: 'Hantal Boy Torbalar',
    volumeSize: '100 x 120 cm',
    packaging: '10 Rulo x 10 Adet = 100 Adet / Koli',
    badge: 'Maksimum Hacim',
    badgeColor: 'bg-neutral-800',
    shortDesc: '120 ve 240 litrelik tekerlekli çöp konteynerleri için özel geniş ebatlı, sızdırmaz torba.',
    specs: {
      'Ebat': '100 cm x 120 cm',
      'Hacim Kapasitesi': '150 - 200 Litre',
      'Paketleme': '100 Adet / Koli'
    },
    usageAreas: ['Site Konteynerleri', 'Sanayi Tesisleri', 'Park ve Bahçeler'],
    features: ['Konteyner kenarlarından taşan koruyucu genişlik', 'Konteynerin kirlenmesini önleyerek yıkama maliyetini düşürür']
  },
  {
    id: 'cop-04',
    name: 'Mini ve Orta Boy Ofis Çöp Torbası Paketi (40x50 & 55x60 cm)',
    category: 'cop-torbasi',
    categoryLabel: 'Çöp Torbaları & Atık',
    subCategory: 'Mini & Orta Boy Torbalar',
    volumeSize: '40x50 cm / 55x60 cm',
    packaging: '50 Rulo x 30 Adet = 1500 Adet / Koli',
    badge: 'Ofis Paketi',
    badgeColor: 'bg-teal-700',
    shortDesc: 'Ofis çalışma masası altı ve lavabo içi küçük çöp kovaları için ekonomik, kokulu veya şeffaf torbalar.',
    specs: {
      'Ebat': 'Mini (40x50 cm) & Orta (55x60 cm)',
      'Koli Adedi': '1500 Adet',
      'Renk': 'Mavi, Siyah, Şeffaf ve Limon Kokulu Seçenekler'
    },
    usageAreas: ['Ofis Çalışma İstasyonları', 'Otel Banyoları', 'Okul Sınıfları'],
    features: ['Kolay açılan hijyenik rulo', 'İnce ama esnek polimer yapısı', 'Ekonomik toplu tüketim avantajı']
  },

  // 5. Temizlik Gereçleri & Ekipmanları
  {
    id: 'ger-01',
    name: '40 cm & 50 cm Palet Mop ve Katlanır Aparat Grubu',
    category: 'gerec',
    categoryLabel: 'Temizlik Gereçleri',
    subCategory: 'Moplar & Palet Aparatları',
    volumeSize: '40 cm / 50 cm',
    packaging: 'Koli İçi 10 Adet Aparat / 50 Adet Mop Yedeği',
    badge: 'Ergonomik',
    badgeColor: 'bg-blue-700',
    shortDesc: 'Geniş zeminleri hızlı kurulamak ve dezenfekte etmek için ayakla basmalı mandallı sağlam palet mop seti.',
    specs: {
      'Genişlik': '40 cm ve 50 cm Seçenekleri',
      'Gövde': 'Kırılmaz Polipropilen Plastik Taban',
      'Mop Tipi': 'Kulaklı / Şeritli Mikrofiber ve Orlon Seçeneği',
      'Sap Uyumu': '22-25 mm tüm endüstriyel saplara tam uyum'
    },
    usageAreas: ['Hastaneler', 'AVM Zeminleri', 'Plazalar & Şirket Merkezleri'],
    features: ['Eğilmeden ayak mandalıyla mop değiştirme imkanı', '360 derece dönebilen mafsal mekanizması', 'Makinede 60°C de defalarca yıkanabilir']
  },
  {
    id: 'ger-02',
    name: 'Endüstriyel Çift Kovalı Presli Temizlik Arabası (50 LT)',
    category: 'gerec',
    categoryLabel: 'Temizlik Gereçleri',
    subCategory: 'Temizlik Arabası Aparatları',
    volumeSize: '2 x 25 LT (50 LT)',
    packaging: '1 Takım / Özel Koli (Demonte Kolay Kurulum)',
    badge: 'Profesyonel',
    badgeColor: 'bg-indigo-700',
    shortDesc: 'Temiz ve kirli suyu ayıran 25+25 litrelik kovalara sahip, dayanıklı dikey presli paslanmaz tekerlekli araba.',
    specs: {
      'Kova Kapasitesi': 'Mavi Kova 25 LT (Temiz) + Kırmızı Kova 25 LT (Kirli)',
      'Pres Tipi': 'Yaylı Güçlendirilmiş Dikey Pres',
      'Tekerlekler': '360° Dönen Ses Yapmayan Kauçuk Rulmanlı',
      'Gövde': 'Darbe Emici Dayanıklı Şasi'
    },
    usageAreas: ['Büyük Tesisler', 'Oteller', 'Okullar', 'Fabrika Koridorları'],
    features: ['Kirli suyun temiz suya karışmasını engeller', 'Az güçle maksimum su sıkma sağlayan pres kolu', 'Yönlendirmesi son derece kolay ve sessiz']
  },
  {
    id: 'ger-03',
    name: 'Mikrofiber Renk Kodlu Profesyonel Temizlik Bezi (40x40 cm)',
    category: 'gerec',
    categoryLabel: 'Temizlik Gereçleri',
    subCategory: 'Bezler & Fırçalar',
    volumeSize: '40 x 40 cm',
    packaging: '20 Paket x 5 Adet = 100 Adet / Koli',
    badge: 'HACCP Uyumlu',
    badgeColor: 'bg-emerald-700',
    shortDesc: 'Çapraz bulaşmayı önleyen 4 renk sistemi (Mavi, Kırmızı, Sarı, Yeşil) ile yüksek emici mikrofiber temizlik bezi.',
    specs: {
      'Ebat': '40 cm x 40 cm',
      'Gramaj': '280 gr/m² Ekstra Yoğun Lif Dokuma',
      'Renkler': 'Mavi (Genel), Kırmızı (Tuvalet), Sarı (Banyo), Yeşil (Mutfak)',
      'Paketleme': '100 Adet / Koli'
    },
    usageAreas: ['Gıda Tesisleri & Mutfaklar', 'Sağlık Kuruluşları', 'Kurumsal Ofisler'],
    features: ['Kendi ağırlığının 7 katı sıvı çeker', 'Kimyasal kullanmadan bile yağ ve tozu hapseder', 'Tüy, hav ve leke bırakmaz']
  },
  {
    id: 'ger-04',
    name: 'Alüminyum Vidalı & Konik Mop Sapları (130 - 150 cm)',
    category: 'gerec',
    categoryLabel: 'Temizlik Gereçleri',
    subCategory: 'Saplar & Fırçalar',
    volumeSize: '130 cm / 150 cm',
    packaging: '25 Adet / Bağ',
    badge: 'Ekstra Dayanıklı',
    badgeColor: 'bg-slate-600',
    shortDesc: 'Bükülmeye ve kırılmaya dayanıklı, el kaydırmayan plastik askı başlıklı etli alüminyum temizlik sapı.',
    specs: {
      'Uzunluk': '130 cm veya 150 cm',
      'Et Kalınlığı': '1.2 mm Güçlendirilmiş Alüminyum Boru',
      'Uç Yapısı': 'Standart İtalyan Vidalı Diş & Konik Uç'
    },
    usageAreas: ['Tüm Islak & Kuru Temizlik Uygulamaları'],
    features: ['Paslanmaz ve kararmaz', 'Hafifliği sayesinde personeli yormaz', 'Askı kancası ile düzenli muhafaza']
  }
];
