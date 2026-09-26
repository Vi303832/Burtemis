import React, { useState } from 'react';

export default function PressSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const items = [
    {
      id: 'yerli',
      name: 'YERLİ ÜRETİM',
      quote: '“Kendi tesislerimizde yüksek standartlarla üretiyor, doğrudan yaşam alanlarınıza ulaştırıyoruz.”'
    },
    {
      id: 'onayli',
      name: 'TSE & BAKANLIK ONAYLI',
      quote: '“Bağımsız laboratuvarlarca test edilmiş, bakanlık ruhsatlı ve tam onaylı güvenilir formüller.”'
    },
    {
      id: 'sifir-atik',
      name: 'SIFIR ATIK & EKO-DOSTU',
      quote: '“Doğada %100 biyoçözünür içerikler ve geri dönüştürülebilir ambalajlarla gezegenimizi koruyoruz.”'
    },
    {
      id: 'profesyonel',
      name: 'PROFESYONEL HİJYEN',
      quote: '“Evlerden endüstriyel tesislere kadar en zorlu alanlarda bile kanıtlanmış maksimum hijyen performansı.”'
    }
  ];

  const handleSelect = (idx) => {
    if (idx === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(idx);
      setFade(true);
    }, 150);
  };

  return (
    <section className="py-14 sm:py-16 bg-[#f8faff] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-3">
          BURTEMİS GÜVENCESİ
        </span>

        {/* Dynamic Quote / Headline - Basıldığında değişen üst açıklama */}
        <div className="min-h-[84px] sm:min-h-[96px] flex items-center justify-center mb-8 sm:mb-10">
          <h2 
            className={`text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tight max-w-3xl mx-auto transition-all duration-200 ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
            }`}
          >
            {items[activeIndex].quote}
          </h2>
        </div>

        {/* 4 Titles Bar - Aynı fontta ve tıklanabilir */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`group relative py-2 text-sm sm:text-base lg:text-lg font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                  isActive 
                    ? 'text-[#0038e3] opacity-100 scale-105' 
                    : 'text-gray-400 hover:text-gray-700 opacity-60 hover:opacity-90'
                }`}
              >
                <span>{item.name}</span>
                {/* Aktif Başlık Alt Çizgi İndikatörü */}
                <div 
                  className={`h-0.5 mt-1.5 mx-auto rounded-full transition-all duration-300 ${
                    isActive ? 'w-full bg-[#0038e3]' : 'w-0 bg-transparent group-hover:w-1/2 group-hover:bg-gray-300'
                  }`} 
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

