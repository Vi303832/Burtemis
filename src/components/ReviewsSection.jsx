import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [slideDir, setSlideDir] = useState('next'); // 'next' | 'prev'
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const timerRef = useRef(null);

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

  const goTo = (newIndex, dir) => {
    if (isAnimating) return;
    setSlideDir(dir);
    setIsAnimating(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayIndex(newIndex);
      setActiveIndex(newIndex);
      setAnimKey(k => k + 1);
      setIsAnimating(false);
    }, 320);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % reviews.length;
    goTo(next, 'next');
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + reviews.length) % reviews.length;
    goTo(prev, 'prev');
  };

  const handleDot = (idx) => {
    if (idx === activeIndex || isAnimating) return;
    goTo(idx, idx > activeIndex ? 'next' : 'prev');
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const current = reviews[displayIndex];

  return (
    <section id="yorumlar" className="py-20 sm:py-24 bg-[#0038e3] text-white overflow-hidden relative">
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(80px); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-80px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .slide-in-right { animation: slideInFromRight 0.32s cubic-bezier(0.4,0,0.2,1) both; }
        .slide-in-left  { animation: slideInFromLeft  0.32s cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-12">
          Müşterilerimiz Ne Diyor?
        </h2>

        {/* Slider */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center gap-4">

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Önceki Yorum"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div
              key={animKey}
              className={`bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/40 p-8 sm:p-14 shadow-2xl ${
                slideDir === 'next' ? 'slide-in-right' : 'slide-in-left'
              }`}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                "{current.quote}"
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Sonraki Yorum"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDot(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Yorum ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
