import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StandardsSection({ onLearnMore }) {
  const standards = [
    {
      title: 'YÜKSEK KALİTE',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'HİJYEN ODAKLI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-2.48-5.748A20.08 20.08 0 0118 7.5v5.25c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5V7.5c1.47 0 2.87-.27 4.17-.768a3 3 0 012.35 0z" />
        </svg>
      )
    },
    {
      title: 'SÜRDÜRÜLEBİLİR ÜRETİM',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
        </svg>
      )
    },
    {
      title: 'ÇEVREYE DUYARLI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: 'GENİŞ ÜRÜN YELPAZESİ',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      )
    },
    {
      title: 'YURT İÇİ & DIŞI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.356 6.165a9.05 9.05 0 01-2.043 3.253" />
        </svg>
      )
    },
    {
      title: 'MÜŞTERİ ODAKLI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    }
  ];

  return (
    <section id="standartlar" className="py-20 sm:py-24 bg-[#f8faff] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 tracking-tight mb-14">
          Temizlikte Daha Yüksek Bir Standart
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-center">
          {standards.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-3 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-3 group-hover:border-[#0038e3] group-hover:shadow-md transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold tracking-wider text-gray-800 uppercase leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0038e3] hover:text-[#002bb8] group"
          >
            <span>STANDARTLARIMIZ HAKKINDA DETAYLI BİLGİ ALIN</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
