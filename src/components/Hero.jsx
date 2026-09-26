import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreProducts, onOpenQuoteAction }) {
  return (
    <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] overflow-hidden flex items-center justify-center">
      
      {/* Background Image: Cinematic Coast Wave */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_wave.jpg" 
          alt="Burtemis The Coast We Keep Collection" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Vignette Overlay for Crisp Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-5 animate-fadeIn">
        
        {/* Main Title matching the screenshot style */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          The Coast We Keep Koleksiyonu
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
          Gezegenimizi koruyan, evinizi ve işletmenizi sıfır atıkla tertemiz yapan yenilikçi temizlik çözümleri.
        </p>

        {/* Primary Pill Button */}
        <div className="pt-3">
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            id="hero-shop-now"
          >
            ŞİMDİ KEŞFET
          </button>
        </div>

      </div>

    </section>
  );
}
