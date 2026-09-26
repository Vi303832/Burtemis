import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function FeaturedProducts({ onAddToQuote, onViewDetail, onShopAll }) {
  const scrollRef = useRef(null);

  const featuredList = [
    {
      id: 'feat-01',
      name: 'Temizlik Başlangıç Kiti (3 Şişe + 3 Tablet)',
      category: 'kimyasal',
      categoryLabel: 'Yüzey Temizlik',
      badge: 'ÇOK SATAN',
      badgeColor: 'bg-[#0038e3] text-white',
      rating: 4.9,
      reviewCount: 3840,
      price: '₺450,00',
      numericPrice: 450,
      volumeSize: '3 x 500 ML',
      image: '/images/starter_kit.jpg',
      shortDesc: 'Çok amaçlı, cam ve banyo temizliği için yeniden doldurulabilir cam şişeler ve konsantre çözünür tabletler.'
    },
    {
      id: 'feat-02',
      name: 'Doğal Çamaşır Deterjanı Refill Paketi',
      category: 'kimyasal',
      categoryLabel: 'Çamaşır Grubu',
      badge: 'YENİ FORMÜL',
      badgeColor: 'bg-emerald-600 text-white',
      rating: 4.8,
      reviewCount: 2190,
      price: '₺320,00',
      numericPrice: 320,
      volumeSize: '60 Yıkama / 2.5 KG',
      image: '/images/laundry_pouch.jpg',
      shortDesc: 'Bitkisel bazlı, hipoalerjenik ve mikroplastiksiz ultra konsantre çamaşır tozu dolum paketi.'
    },
    {
      id: 'feat-03',
      name: 'Eko Bulaşık Makinesi Tableti & Teneke Kutu',
      category: 'bulasik',
      categoryLabel: 'Bulaşık Grubu',
      badge: 'EN İYİ SEÇİM',
      badgeColor: 'bg-amber-600 text-white',
      rating: 4.9,
      reviewCount: 4620,
      price: '₺290,00',
      numericPrice: 290,
      volumeSize: '60 Tablet',
      image: '/images/dish_canister.jpg',
      shortDesc: 'Fosfatsız, mat çelik saklama kutusu ve sudan geçirmeden lekesiz temizlik sağlayan mineral tabletler.'
    },
    {
      id: 'feat-04',
      name: 'Köpük El Sabunu Başlangıç Seti',
      category: 'sabun',
      categoryLabel: 'El Hijyeni',
      badge: 'SINIRLI ÜRETİM',
      badgeColor: 'bg-indigo-600 text-white',
      rating: 4.9,
      reviewCount: 1840,
      price: '₺260,00',
      numericPrice: 260,
      volumeSize: '1 Şişe + 3 Tablet',
      image: '/images/soap_dispenser.jpg',
      shortDesc: 'Buzlu cam gövde, paslanmaz çelik köpük pompası ve nemlendirici lavanta & bergamot sabun tabletleri.'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-3 font-normal leading-relaxed">
            Kullanıcıların ve profesyonellerin en çok tercih ettiği hijyen çözümleri
          </p>
        </div>

        {/* Carousel / Products Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex lg:grid lg:grid-cols-4 gap-6 sm:gap-8 xl:gap-10 overflow-x-auto lg:overflow-visible pb-6 no-scrollbar [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory touch-pan-x overscroll-x-contain"
          >
            {featuredList.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] lg:w-auto snap-start bg-white rounded-lg border border-gray-100 hover:border-gray-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group/card cursor-pointer"
                onClick={() => onViewDetail && onViewDetail(item)}
              >
                {/* Product Image Frame - Kare Stüdyo Fotoğrafı & Hover Eylemi */}
                <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover'da Beliren Teklife Ekle Butonu */}
                  <div className="absolute inset-x-4 bottom-4 z-10 opacity-100 sm:opacity-0 sm:group-hover/card:opacity-100 sm:translate-y-2 sm:group-hover/card:translate-y-0 transition-all duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToQuote(item);
                      }}
                      className="w-full py-3.5 px-4 rounded-lg bg-[#0038e3] hover:bg-[#002bbd] text-white text-sm font-bold shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>Teklife Ekle</span>
                    </button>
                  </div>
                </div>

                {/* Info Container - Sade, Büyütülmüş Bilgiler */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start text-left">
                  {item.volumeSize && (
                    <span className="text-xs sm:text-sm text-gray-400 font-medium mb-1.5 block">
                      {item.volumeSize}
                    </span>
                  )}

                  {/* Büyütülmüş Başlık */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover/card:text-[#0038e3] transition-colors line-clamp-2 leading-snug">
                    {item.name}
                  </h3>

                  {/* Büyütülmüş Açıklama */}
                  <p className="text-sm sm:text-base text-gray-600 mt-2.5 line-clamp-3 leading-relaxed font-normal">
                    {item.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Scroll Arrows */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
            <button 
              onClick={() => handleScroll('left')}
              aria-label="Önceki Ürünler"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              aria-label="Sonraki Ürünler"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={onShopAll}
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-white hover:bg-[#0038e3] hover:text-white border-2 border-[#0038e3] text-[#0038e3] text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-xs"
          >
            TÜM ÜRÜNLERİ İNCELE
          </button>
        </div>

      </div>
    </section>
  );
}
