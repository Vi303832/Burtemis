import React from 'react';

export default function StartJourneyCTA({ onGetStarted }) {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#eaf2ff] via-[#d8e8ff] to-[#c9dfff] text-center overflow-hidden">

      {/* ☁️ Silik Bulut Katmanı */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Bulut 1 - sol üst */}
        <svg
          className="absolute top-4 left-[-60px] w-[320px] opacity-[0.35]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="90" rx="160" ry="45" />
          <ellipse cx="90" cy="70" rx="80" ry="45" />
          <ellipse cx="200" cy="65" rx="90" ry="50" />
          <ellipse cx="140" cy="55" rx="70" ry="42" />
        </svg>

        {/* Bulut 2 - sağ üst */}
        <svg
          className="absolute top-0 right-[-40px] w-[280px] opacity-[0.30]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="90" rx="150" ry="40" />
          <ellipse cx="100" cy="68" rx="75" ry="42" />
          <ellipse cx="210" cy="62" rx="85" ry="48" />
          <ellipse cx="155" cy="50" rx="65" ry="40" />
        </svg>

        {/* Bulut 3 - orta sol */}
        <svg
          className="absolute top-12 left-[10%] w-[200px] opacity-[0.25]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="85" rx="130" ry="38" />
          <ellipse cx="110" cy="65" rx="70" ry="40" />
          <ellipse cx="195" cy="60" rx="78" ry="44" />
        </svg>

        {/* Bulut 4 - sağ alt */}
        <svg
          className="absolute bottom-6 right-[5%] w-[240px] opacity-[0.28]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="88" rx="145" ry="42" />
          <ellipse cx="95" cy="67" rx="72" ry="43" />
          <ellipse cx="205" cy="63" rx="82" ry="46" />
          <ellipse cx="150" cy="52" rx="68" ry="41" />
        </svg>

        {/* Bulut 5 - sol alt */}
        <svg
          className="absolute bottom-0 left-[8%] w-[200px] opacity-[0.22]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="155" cy="90" rx="140" ry="40" />
          <ellipse cx="90" cy="70" rx="68" ry="40" />
          <ellipse cx="200" cy="65" rx="80" ry="44" />
        </svg>

        {/* Bulut 6 - orta üst */}
        <svg
          className="absolute top-2 left-[35%] w-[260px] opacity-[0.24]"
          viewBox="0 0 320 120" fill="white" xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="88" rx="150" ry="42" />
          <ellipse cx="100" cy="66" rx="74" ry="43" />
          <ellipse cx="210" cy="60" rx="86" ry="48" />
          <ellipse cx="155" cy="50" rx="66" ry="40" />
        </svg>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 tracking-tight">
          Hijyen Yolculuğunuza Bugün Başlayın
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
          Kalite ve hijyen kapınızda — güçlü ve sürdürülebilir temizlik çözümleriyle tanışın.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex items-center justify-center">
          {/* Ürünleri Gör Butonu */}
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#0038e3] text-[#0038e3] bg-white/60 backdrop-blur-sm hover:bg-[#0038e3] hover:text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            ÜRÜNLERİ GÖR
          </button>
        </div>

      </div>
    </section>
  );
}
