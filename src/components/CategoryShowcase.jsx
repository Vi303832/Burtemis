import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function CategoryShowcase({ onSelectCategory }) {
  const scrollRef = useRef(null);

  const categories = [
    {
      id: 'camasir',
      name: 'Çamaşır & Yıkama',
      categoryKey: 'kimyasal',
      badge: 'ÇAMAŞIR',
      desc: 'Doğal mineralli konsantre deterjanlar ve refill paketleri',
      image: '/images/laundry_pouch.jpg'
    },
    {
      id: 'sabun',
      name: 'Köpük El Sabunu',
      categoryKey: 'sabun',
      badge: 'EL HİJYENİ',
      desc: 'Buzlu cam şişe & hassas ciltlere özel çözünür tabletler',
      image: '/images/soap_dispenser.jpg'
    },
    {
      id: 'bulasik',
      name: 'Bulaşık & Mutfak',
      categoryKey: 'bulasik',
      badge: 'BULAŞIK',
      desc: 'Bitkisel bulaşık makinesi tabletleri ve yağ sökücüler',
      image: '/images/dish_canister.jpg'
    },
    {
      id: 'yuzey',
      name: 'Çok Amaçlı Yüzey & Banyo',
      categoryKey: 'kimyasal',
      badge: 'YÜZEY TEMİZLİK',
      desc: 'Banyo, cam ve genel yüzeyler için iz bırakmayan sprey setleri',
      image: '/images/starter_kit.jpg'
    },
    {
      id: 'kagit',
      name: 'Endüstriyel Kağıt Grubu',
      categoryKey: 'kagit',
      badge: 'KAĞIT & HAVLU',
      desc: '%100 saf selüloz Z-katlama ve fotoselli dispenser havlular',
      image: '/images/starter_kit.jpg'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-serif sm:font-sans tracking-tight">
            Kategoriye Göre İnceleyin
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 font-normal">
            Eviniz ve işletmeniz için özel olarak geliştirilmiş temizlik çözümleri
          </p>
        </div>

        {/* Carousel / Cards Row */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#0038e3] hover:border-[#0038e3] transition-all"
            aria-label="Önceki Kategoriler"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.categoryKey)}
                className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[220px] xl:w-[230px] snap-start bg-white rounded-2xl border border-gray-100/90 hover:border-gray-300 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group/card flex flex-col"
              >
                {/* Product Image Box */}
                <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden flex items-center justify-center p-3">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover object-center rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0038e3]">
                      {cat.badge}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-1 group-hover/card:text-[#0038e3] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#0038e3] hover:border-[#0038e3] transition-all"
            aria-label="Sonraki Kategoriler"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#f0f4ff] hover:bg-[#e0ecff] text-[#0038e3] text-xs font-bold tracking-widest uppercase transition-all duration-200"
          >
            TÜM KATEGORİLERİ GÖR
          </button>
        </div>

      </div>
    </section>
  );
}
