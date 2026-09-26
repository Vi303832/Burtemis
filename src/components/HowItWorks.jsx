import React from 'react';
import { ArrowRight, Droplets, Sparkles, RefreshCw } from 'lucide-react';

export default function HowItWorks({ onFaqClick }) {
  const steps = [
    {
      num: '01',
      title: 'Su Doldurun',
      desc: 'Şişenize veya dozaj ünitenize oda sıcaklığında temiz su ekleyin.'
    },
    {
      num: '02',
      title: 'Tableti / Dozu Ekleyin',
      desc: 'Bir adet konsantre Burtemis tableti veya refilli suya bırakın, dakikalar içinde çözünsün.'
    },
    {
      num: '03',
      title: 'Kusursuz Temizlik',
      desc: 'Püskürtün, silin ve parlatın. Plastik atık üretmeden yüksek performanslı temizliğin tadını çıkarın.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo of tablet dropping into water spray bottle */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square bg-[#f0f4fa]">
              <img 
                src="/images/how_it_works.jpg" 
                alt="Burtemis Tablet Çözünme Sistemi - Nasıl Çalışır" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Steps & Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif sm:font-sans font-normal text-gray-900 tracking-tight">
              Nasıl Çalışır?
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Ağır ve su dolu tek kullanımlık plastik şişeleri taşımak yerine, sadece ihtiyacınız olan aktif temizlik bileşenlerini sunuyoruz.
            </p>

            {/* 3 Simple Steps */}
            <div className="space-y-4 pt-2">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#0038e3]/10 text-[#0038e3] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="pt-4">
              <button
                onClick={onFaqClick}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0038e3] hover:text-[#002bb8] group"
              >
                <span>SIKÇA SORULAN SORULARI İNCELE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
