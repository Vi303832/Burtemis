import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Plus, ShoppingBag, Check } from 'lucide-react';

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
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-serif sm:font-sans tracking-tight">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 font-normal">
            Kullanıcıların ve profesyonellerin en çok tercih ettiği hijyen çözümleri
          </p>
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#0038e3] hover:border-[#0038e3] transition-all"
            aria-label="Önceki Ürünler"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-smooth"
          >
            {featuredList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100/90 hover:border-gray-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group/card"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden flex items-center justify-center p-4">
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${item.badgeColor} shadow-xs z-10`}>
                    {item.badge}
                  </span>

                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Container */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Stars & Reviews */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-gray-500">
                        ({item.reviewCount.toLocaleString('tr-TR')})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-gray-900 group-hover/card:text-[#0038e3] transition-colors line-clamp-2">
                      {item.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed font-light">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Price & Add Action */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-normal">Fiyat / Birim</span>
                      <span className="text-base font-bold text-gray-900">{item.price}</span>
                    </div>

                    <button
                      onClick={() => onAddToQuote(item)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-semibold tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Ekle</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#0038e3] hover:border-[#0038e3] transition-all"
            aria-label="Sonraki Ürünler"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-12">
          <button
            onClick={onShopAll}
            className="inline-flex items-center justify-center px-9 py-3 rounded-full bg-white hover:bg-gray-50 border-2 border-[#0038e3] text-[#0038e3] text-xs font-bold tracking-widest uppercase transition-all duration-200"
          >
            TÜM ÜRÜNLERİ İNCELE
          </button>
        </div>

      </div>
    </section>
  );
}
