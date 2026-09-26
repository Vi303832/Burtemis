import React from 'react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function CommunityGrid() {
  const images = [
    {
      src: '/images/community_1.jpg',
      alt: 'Burtemis Ailesi Temizlik Deneyimi',
      handle: '@burtemis'
    },
    {
      src: '/images/community_2.jpg',
      alt: 'Burtemis Çözünür Temizlik Tabletleri',
      handle: '#burtemistemizliği'
    },
    {
      src: '/images/community_3.jpg',
      alt: 'Lekesiz Bulaşık ve Kristal Parlaklık',
      handle: '@burtemis.home'
    },
    {
      src: '/images/community_4.jpg',
      alt: 'Doğaya Saygılı Temizlik Hareketi',
      handle: '#sıfıratık'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif sm:font-sans font-normal text-gray-900 tracking-tight">
            Tertemiz Anlar & Burtemis Dünyası
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-normal flex items-center justify-center gap-1.5">
            <InstagramIcon className="w-4 h-4 text-[#0038e3]" />
            <span>@burtemishijyen ile bizi takip edin ve deneyiminizi paylaşın</span>
          </p>
        </div>

        {/* 4 Square Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((item, idx) => (
            <div 
              key={idx}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle hover overlay with Instagram handle */}
              <div className="absolute inset-0 bg-[#0038e3]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold tracking-wider">
                <span className="flex items-center gap-1.5">
                  <InstagramIcon className="w-4 h-4" />
                  {item.handle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
