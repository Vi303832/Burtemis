import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function FeaturedProducts({ onAddToQuote, onViewDetail, onShopAll }) {
  const scrollRef = useRef(null);

  const featuredList = [
    {
      id: 'kim-04',
      name: '30 LT YÜZEY TEMİZLEYİCİ',
      category: 'kimyasal',
      categoryLabel: 'Temizlik Kimyasalları',
      badge: 'ENDÜSTRİYEL',
      badgeColor: 'bg-[#0038e3] text-white',
      volumeSize: '30 LT',
      packaging: 'Toptan tedarik',
      image: '/images/products/canister_30lt_white.jpg',
      shortDesc: 'İşletmeler ve yoğun kullanım alanları için endüstriyel yüzey temizleyici.'
    },
    {
      id: 'kag-01',
      name: 'Z KATLAMA HAVLU 12X200 YAPRAK',
      category: 'kagit',
      categoryLabel: 'Kağıt & Mutfak Kullan-At',
      badge: 'ÇOK SATAN',
      badgeColor: 'bg-emerald-600 text-white',
      volumeSize: '12X200 YAPRAK',
      packaging: 'Toptan tedarik',
      image: '/images/products/paper_z_towel.jpg',
      shortDesc: 'Ofis ve işletmeler için Z katlama dispenser kağıt havlu.'
    },
    {
      id: 'amb-01',
      name: '4 OZ KARTON BARDAK 3000 Lİ',
      category: 'ambalaj',
      categoryLabel: 'Bardak & Ambalaj Ürünleri',
      badge: 'AMBALAJ',
      badgeColor: 'bg-amber-600 text-white',
      volumeSize: '4 OZ',
      packaging: '3000 Adet / Koli',
      image: '/images/products/paper_coffee_cups.jpg',
      shortDesc: 'Espresso ve numune servisi için karton bardak.'
    },
    {
      id: 'ger-21',
      name: 'TEMİZLİK ARABASI ÇİFT KOVALI PLAST.',
      category: 'gerec',
      categoryLabel: 'Temizlik Gereçleri',
      badge: 'GEREÇ',
      badgeColor: 'bg-indigo-600 text-white',
      volumeSize: 'Çift Kovalı',
      packaging: 'Toptan tedarik',
      image: '/images/products/cleaning_cart_trolley.jpg',
      shortDesc: 'Profesyonel kullanım için çift kovalı plastik temizlik arabası.'
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
            Geniş ürün yelpazemizden seçilmiş temizlik ve hijyen çözümleri
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
