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
      alt: 'Burtemis Ofis Temizliği',
      handle: '@burtemis',
      label: 'Ofis & Kurumsal'
    },
    {
      src: '/images/community_2.jpg',
      alt: 'Burtemis Banyo Temizliği',
      handle: '#burtemistemizliği',
      label: 'Banyo Tazeliği'
    },
    {
      src: '/images/community_3.jpg',
      alt: 'Burtemis Mutfak Temizliği',
      handle: '@burtemis.home',
      label: 'Mutfak Parlaklığı'
    },
    {
      src: '/images/community_4.jpg',
      alt: 'Burtemis Temizlik Ürünleri',
      handle: '#burtemis',
      label: 'Kalite & Hijyen'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-900 tracking-tight mb-4">
            Tertemiz Anlar &amp; Burtemis Dünyası
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal mb-4">
            Gerçek mekânlardan ilham alın, topluluğumuzun deneyimlerini keşfedin.
          </p>
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/bur.tem.is/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0038e3]/30 text-[#0038e3] text-sm font-semibold hover:bg-[#0038e3] hover:text-white transition-all duration-300 group shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@bur.tem.is</span>
            <svg
              className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" />
            </svg>
          </a>
        </div>

        {/* Large Image Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {images.map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/bur.tem.is/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Bottom gradient label */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent flex items-end px-3 pb-3">
                <span className="text-white text-xs font-semibold tracking-wide">{item.label}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0038e3]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="flex items-center gap-2 text-white text-sm font-bold tracking-wider bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <InstagramIcon className="w-4 h-4" />
                  {item.handle}
                </span>
              </div>
            </a>
          ))}
        </div>



      </div>
    </section>
  );
}
