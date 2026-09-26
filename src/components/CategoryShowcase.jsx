import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      image: '/images/industrial_canister.jpg'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0c1a3a] tracking-tight">
            Kategoriye Göre İnceleyin
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Eviniz ve işletmeniz için özel olarak geliştirilmiş temizlik çözümleri
          </p>
        </div>

        {/* Carousel / Cards Row (Manual smooth touch-swipe, no auto-turn, no scrollbar, no buttons) */}
        <div className="relative">
          <div 
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex gap-6 sm:gap-7 lg:gap-8 overflow-x-auto pb-4 no-scrollbar [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory touch-pan-x overscroll-x-contain"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.categoryKey)}
                className="category-card flex-shrink-0 w-[270px] sm:w-[310px] lg:w-[270px] xl:w-[290px] snap-start cursor-pointer group flex flex-col text-left select-none"
              >
                {/* Product Image Box - Büyütülmüş kare stüdyo fotoğrafı */}
                <div className="relative w-full aspect-square bg-[#f4f5f7] overflow-hidden rounded-[3px] flex items-center justify-center">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Content Below Image */}
                <div className="mt-4 sm:mt-5 flex flex-col">
                  {/* Category Title in Bold Blue with Arrow - Büyütülmüş Başlık */}
                  <h3 className="inline-flex items-center text-sm sm:text-base lg:text-[17px] font-extrabold tracking-wider text-[#0047ff] group-hover:text-[#0038e3] transition-colors uppercase">
                    <span>{cat.name}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 stroke-[2.5] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </h3>

                  {/* Description text - Büyütülmüş Açıklama Yazısı */}
                  <p className="text-sm sm:text-[15px] text-[#475569] mt-2 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button - Soft Ice Blue Pill Button */}
        <div className="text-center mt-12 sm:mt-14">
          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center justify-center px-10 py-3.5 sm:py-4 rounded-full bg-[#e2edfb] hover:bg-[#d4e6fa] text-[#0047ff] text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.98]"
          >
            TÜM KATEGORİLERİ GÖR
          </button>
        </div>

      </div>
    </section>
  );
}
