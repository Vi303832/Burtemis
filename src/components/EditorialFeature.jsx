import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EditorialFeature({ onLearnMore }) {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Frame with Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] shadow-sm flex items-center justify-end">
          
          {/* Background Photography */}
          <div className="absolute inset-0">
            <img 
              src="/images/lifestyle_picnic.jpg" 
              alt="A Clean The Whole Planet Can Feel" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30 lg:to-transparent"></div>
          </div>

          {/* Overlapping Floating White Card on Right */}
          <div className="relative z-10 m-4 sm:m-8 lg:mr-16 max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100/80 text-left animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-serif sm:font-sans font-normal text-gray-900 tracking-tight leading-tight">
              Tertemiz Bir Dünya İçin Kalite ve Hijyen
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed font-normal">
              Evinizden işyerinize ihtiyacınız olan en kaliteli temizlik malzemeleri ve hijyenik kağıt ürünleri tek bir adreste.
              Sağlığınız ve konforunuz için özenle seçilmiş, çevreye duyarlı ve güçlü çözümlerimizle tanışın.
            </p>

            <div className="mt-6">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                HİKAYEMİZİ OKUYUN
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
