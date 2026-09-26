import React from 'react';

export default function ValueProps() {
  const items = [
    {
      title: 'KANITLANMIŞ FORMÜLLER',
      subtitle: 'Bağımsız laboratuvar onaylı, güçlü hijyen performansı.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Outer plate ring */}
          <circle cx="45" cy="41" r="23" />
          {/* Inner recessed plate circle */}
          <circle cx="45" cy="41" r="15" />
          {/* Specular shine reflection slashes */}
          <path d="M40 43L46 37" />
          <path d="M47 46L50 43" />

          {/* Overlapping bubbles on lower left */}
          <circle cx="24" cy="53" r="9" />
          <path d="M21 51a3.5 3.5 0 0 1 3-2" strokeWidth="2" />
          <circle cx="15" cy="45" r="5.5" />

          {/* Sparkle star top-right */}
          <path 
            d="M66 10 L67.5 15.5 L73 17 L67.5 18.5 L66 24 L64.5 18.5 L59 17 L64.5 15.5 Z" 
            strokeWidth="2.2" 
          />
        </svg>
      )
    },
    {
      title: '%100 PLASTİK ATIKSIZ',
      subtitle: 'Tek kullanımlık plastik şişelere son verin, doğayı koruyun.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Main tablet circle */}
          <circle cx="40" cy="40" r="26" />

          {/* Diagonal dividing trajectory line */}
          <line x1="21.5" y1="58.5" x2="58.5" y2="21.5" />

          {/* Center node connected along the line */}
          <circle cx="34" cy="46" r="3.5" fill="none" strokeWidth="2.3" />

          {/* Upper-left quadrant geometric particles */}
          <polygon points="28,21 35,29 23,29" strokeWidth="2.2" />
          <polygon points="33,31 38,28 42,33 37,36" strokeWidth="2.2" />
          <circle cx="21" cy="34" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="27" cy="40" r="1.6" fill="currentColor" stroke="none" />

          {/* Lower-right quadrant particles */}
          <polygon points="46,50 54,50 50,57" strokeWidth="2.2" />
          <circle cx="45" cy="39" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="54" cy="40" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="56" cy="32" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="42" cy="58" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      title: 'SÜRDÜRÜLEBİLİR GELECEK',
      subtitle: 'Toksiksiz biyoçözünür içerik, gezegen ve sevdikleriniz için güvenli.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Hand silhouette outline */}
          <path d="M28 62 C27 50 26 42 26 36 C26 31.5 31 31.5 31 36 L31 28 C31 23.5 36 23.5 36 28 L36 21 C36 16.5 41 16.5 41 21 L41 27 C41 22.5 46 22.5 46 27 L46 38 C46 38 49 34 52 34 C57 34 58 40 55 45 C52 50 52 54 52 62" />

          {/* Heart inside palm */}
          <path 
            d="M39 52 C39 52 33 47.5 33 43 C33 40.5 35 38.5 37.5 38.5 C38.5 38.5 39 39 39 39 C39 39 39.5 38.5 40.5 38.5 C43 38.5 45 40.5 45 43 C45 47.5 39 52 39 52 Z" 
            strokeWidth="2.2" 
          />

          {/* Bottom-left sparkle */}
          <path 
            d="M16 48 L17.2 52.8 L22 54 L17.2 55.2 L16 60 L14.8 55.2 L10 54 L14.8 52.8 Z" 
            strokeWidth="2.2" 
          />

          {/* Top-right sparkle */}
          <path 
            d="M65 14 L66.2 18.8 L71 20 L66.2 21.2 L65 26 L63.8 21.2 L59 20 L63.8 18.8 Z" 
            strokeWidth="2.2" 
          />
        </svg>
      )
    },
    {
      title: 'MALİYET AVANTAJI',
      subtitle: 'Dozaj başına ₺1.50’den başlayan dolum maliyetleriyle tasarruf.',
      icon: (
        <svg 
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#0047cc] transition-transform duration-300 group-hover:scale-105" 
          viewBox="0 0 80 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Top-left sparkle */}
          <path 
            d="M15 18 L16.2 22.8 L21 24 L16.2 25.2 L15 30 L13.8 25.2 L9 24 L13.8 22.8 Z" 
            strokeWidth="2.2" 
          />

          {/* Back refill pouch */}
          <rect x="29" y="16" width="30" height="34" rx="3.5" strokeWidth="2.3" />
          <rect x="37" y="21" width="14" height="4.5" rx="2" strokeWidth="2.2" />

          {/* Front refill pouch */}
          <rect x="21" y="29" width="39" height="38" rx="4" strokeWidth="2.3" />
          <rect x="33.5" y="34.5" width="14" height="4.5" rx="2" strokeWidth="2.2" />

          {/* Currency coin badge */}
          <circle cx="40.5" cy="52" r="11" strokeWidth="2.3" />
          
          {/* Dollar / Savings symbol */}
          <path 
            d="M40.5 45.5v13 M37.5 49c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5c0 2-6 2-6 4 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5" 
            strokeWidth="2.2" 
          />

          {/* Bottom-right sparkle */}
          <path 
            d="M67 48 L68.2 52.8 L73 54 L68.2 55.2 L67 60 L65.8 55.2 L61 54 L65.8 52.8 Z" 
            strokeWidth="2.2" 
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#eaf4fd] border-b border-[#d8e8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-center text-[#0f2b48] tracking-tight mb-10 sm:mb-16 lg:mb-20">
          4,000,000+ Nokta ve Ev Burtemis'e Geçiş Yaptı
        </h2>

        {/* 4 Pillars Grid - 2x2 on Mobile, 4 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-14 lg:gap-y-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center px-1 sm:px-2 group"
            >
              {/* Freestanding Icon Container */}
              <div className="w-22 h-22 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-3 sm:mb-5 lg:mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-base lg:text-[19px] font-extrabold tracking-tight sm:tracking-wide text-[#0047cc] uppercase mb-1.5 sm:mb-3">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-sm lg:text-[16px] text-[#243752] font-normal leading-snug sm:leading-relaxed max-w-[170px] sm:max-w-[260px] lg:max-w-[280px] mx-auto">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

