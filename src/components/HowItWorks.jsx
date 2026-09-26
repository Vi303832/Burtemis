import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'İhtiyacınızı Belirleyin',
      desc: 'Kimyasal, kağıt, ambalaj, çöp torbası veya temizlik gereci kategorilerinden seçim yapın.'
    },
    {
      num: '02',
      title: 'Teklif Sepetine Ekleyin',
      desc: 'Ürünleri listenize ekleyin; miktarları işletmenizin ihtiyacına göre ayarlayın.'
    },
    {
      num: '03',
      title: 'Kurumsal Teklif Alın',
      desc: 'Form veya WhatsApp ile satış ekibimize iletin; size uygun teklifi hızlıca hazırlayalım.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#eaf4fd]">
            <img
              src="/images/how_it_works.jpg"
              alt="Burtemis temizlik ve hijyen ürünleri"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-3">
                NASIL ÇALIŞIR?
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight">
                Kalite ve hijyen kapınızda
              </h2>
              <p className="mt-3 text-sm text-gray-600 font-light leading-relaxed">
                Evinizden işyerinize ihtiyacınız olan temizlik malzemeleri ve hijyenik kağıt ürünleri tek bir adreste.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0038e3]/10 text-[#0038e3] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">
                      {step.num} — {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
