import React from 'react';

export default function StartJourneyCTA({ onGetStarted }) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#eaf2ff] via-[#d8e8ff] to-[#c9dfff] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 tracking-tight">
          Temizlik Yolculuğunuza Bugün Başlayın
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
          Plastik atıksız, güçlü ve sürdürülebilir temizlik dünyasına ilk adımı atın.
        </p>

        {/* Blue Pill Button */}
        <div className="pt-2">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
          >
            BAŞLANGIÇ SETİNİ SEÇİN
          </button>
        </div>

      </div>
    </section>
  );
}
