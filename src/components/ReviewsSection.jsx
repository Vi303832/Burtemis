import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      stars: 5,
      quote: "Bugüne kadar kullandığım en etkili temizlik ürünleri. Hem kokusu harika hem de sıfır plastik atık! Evimiz tertemiz kokuyor.",
      author: "Selin B.",
      role: "Doğrulanmış Müşteri"
    },
    {
      stars: 5,
      quote: "Otellerimizin tüm kat temizliğinde Burtemis konsantre tablet ve refill sistemine geçtik. Hem maliyetimiz %35 düştü hem de misafirlerimiz bayıldı.",
      author: "Murat T.",
      role: "Satın Alma Direktörü, Boutique Hotels Group"
    },
    {
      stars: 5,
      quote: "Bulaşık tableti bardaklarda tek bir su lekesi bile bırakmıyor. Cam şişelerin tasarımı ise tezgah üzerinde o kadar şık duruyor ki!",
      author: "Ece V.",
      role: "İç Mimar & Tasarımcı"
    },
    {
      stars: 5,
      quote: "Kimyasal kokulardan dolayı alerjim vardı. Burtemis formülleri hem cildime zarar vermiyor hem de derinlemesine temizliyor.",
      author: "Caner Y.",
      role: "Doğrulanmış Müşteri"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[activeIndex];

  return (
    <section id="yorumlar" className="py-20 sm:py-24 bg-[#0038e3] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif sm:font-sans tracking-tight mb-12">
          100.000+ 5 Yıldızlı Yorum ve Güven
        </h2>

        {/* Carousel Showcase */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Main Focused Review Card */}
          <div className="w-full bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/40 p-8 sm:p-12 shadow-2xl transition-all duration-500">
            
            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              “{current.quote}”
            </p>

            {/* Author */}
            <div className="mt-8">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                {current.author}
              </p>
              <p className="text-xs text-white/70 mt-0.5 font-light">
                {current.role}
              </p>
            </div>

          </div>

        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Önceki Yorum"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                aria-label={`Yorum ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Sonraki Yorum"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
