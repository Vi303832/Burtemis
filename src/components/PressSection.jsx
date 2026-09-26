import React from 'react';

export default function PressSection() {
  const logos = [
    { name: 'FAST COMPANY', fontClass: 'font-black tracking-widest' },
    { name: 'The New York Times', fontClass: 'font-serif italic font-bold tracking-tight' },
    { name: 'VOGUE', fontClass: 'font-serif font-black tracking-[0.25em]' },
    { name: 'Forbes', fontClass: 'font-serif font-bold tracking-wide' },
    { name: 'BLOOMBERG', fontClass: 'font-black tracking-wider' }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#f8faff] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-2">
          BASINDA BİZ
        </span>

        {/* Big Quote / Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif sm:font-sans font-normal text-gray-900 tracking-tight max-w-2xl mx-auto mb-10">
          “Dünyanın Temizlik Alışkanlıklarını Değiştiriyoruz”
        </h2>

        {/* Press Logos Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className={`text-gray-700 text-lg sm:text-xl lg:text-2xl select-none transition-colors hover:text-[#0038e3] ${logo.fontClass}`}
            >
              {logo.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
