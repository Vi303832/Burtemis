import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function StandardsSection({ onLearnMore }) {
  const standards = [
    {
      title: '%100 BİYOÇÖZÜNÜR',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
        </svg>
      )
    },
    {
      title: 'B CORP SERTİFİKALI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'CRUELTY-FREE',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: 'SIFIR PLASTİK ATIK',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      )
    },
    {
      title: 'HİPOALERJENİK',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      title: 'KARBON NÖTR',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    },
    {
      title: 'EPA & BAKANLIK RUHSATLI',
      icon: (
        <svg className="w-9 h-9 text-[#0038e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-2.48-5.748A20.08 20.08 0 0118 7.5v5.25c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5V7.5c1.47 0 2.87-.27 4.17-.768a3 3 0 012.35 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="standartlar" className="py-20 sm:py-24 bg-[#f8faff] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 tracking-tight mb-14">
          Temizlikte Daha Yüksek Bir Standart
        </h2>

        {/* 7 Certification Icons */}
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

        {/* Link below */}
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
