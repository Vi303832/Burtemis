import React from 'react';

export default function ValueProps() {
  const items = [
    {
      title: 'YÜKSEK STANDARTLAR',
      subtitle: 'Ürünlerimizi en yüksek standartlarda sunmayı hedefliyoruz.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="45" cy="41" r="23" />
          <circle cx="45" cy="41" r="15" />
          <path d="M40 43L46 37" />
          <path d="M47 46L50 43" />
          <circle cx="24" cy="53" r="9" />
          <path d="M21 51a3.5 3.5 0 0 1 3-2" strokeWidth="2" />
          <circle cx="15" cy="45" r="5.5" />
          <path 
            d="M66 10 L67.5 15.5 L73 17 L67.5 18.5 L66 24 L64.5 18.5 L59 17 L64.5 15.5 Z" 
            strokeWidth="2.2" 
          />
        </svg>
      )
    },
    {
      title: 'GENİŞ ÜRÜN YELPAZESİ',
      subtitle: 'Temizlik kimyasallarından kağıt ve gereçlere kadar tek adreste.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="14" y="18" width="22" height="22" rx="3" />
          <rect x="44" y="18" width="22" height="22" rx="3" />
          <rect x="14" y="48" width="22" height="22" rx="3" />
          <rect x="44" y="48" width="22" height="22" rx="3" />
        </svg>
      )
    },
    {
      title: 'SÜRDÜRÜLEBİLİR ÜRETİM',
      subtitle: 'Çevreye duyarlı anlayış ve müşteri taleplerine uygun kalite seçenekleri.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M28 62 C27 50 26 42 26 36 C26 31.5 31 31.5 31 36 L31 28 C31 23.5 36 23.5 36 28 L36 21 C36 16.5 41 16.5 41 21 L41 27 C41 22.5 46 22.5 46 27 L46 38 C46 38 49 34 52 34 C57 34 58 40 55 45 C52 50 52 54 52 62" />
          <path 
            d="M39 52 C39 52 33 47.5 33 43 C33 40.5 35 38.5 37.5 38.5 C38.5 38.5 39 39 39 39 C39 39 39.5 38.5 40.5 38.5 C43 38.5 45 40.5 45 43 C45 47.5 39 52 39 52 Z" 
            strokeWidth="2.2" 
          />
          <path 
            d="M16 48 L17.2 52.8 L22 54 L17.2 55.2 L16 60 L14.8 55.2 L10 54 L14.8 52.8 Z" 
            strokeWidth="2.2" 
          />
          <path 
            d="M65 14 L66.2 18.8 L71 20 L66.2 21.2 L65 26 L63.8 21.2 L59 20 L63.8 18.8 Z" 
            strokeWidth="2.2" 
          />
        </svg>
      )
    },
    {
      title: 'YURT İÇİ & YURT DIŞI',
      subtitle: 'İşbirliklerimizle sizlere hizmet vermekten gurur duyuyoruz.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="40" cy="40" r="26" />
          <ellipse cx="40" cy="40" rx="12" ry="26" />
          <path d="M14 40h52" />
          <path d="M18 28h44" />
          <path d="M18 52h44" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#eaf4fd] border-b border-[#d8e8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-center text-[#0f2b48] tracking-tight mb-10 sm:mb-16 lg:mb-20">
          Kalite ve Hijyen Kapınızda
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-14 lg:gap-y-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center px-1 sm:px-2 group"
            >
              <div className="w-22 h-22 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-3 sm:mb-5 lg:mb-6">
                {item.icon}
              </div>

              <h3 className="text-xs sm:text-base lg:text-[19px] font-extrabold tracking-tight sm:tracking-wide text-[#0047cc] uppercase mb-1.5 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-[11px] sm:text-sm lg:text-[16px] text-[#243752] font-normal leading-snug sm:leading-relaxed max-w-[170px] sm:max-w-[260px] lg:max-w-[280px] mx-auto">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
