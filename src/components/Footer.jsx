import React from 'react';
import { CATEGORIES } from '../data/products';

const SocialIcon = ({ type }) => {
  if (type === 'instagram') {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    );
  }
  if (type === 'linkedin') {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
      </svg>
    );
  }
  return null;
};

export default function Footer({ onNavigate, onSelectCategory }) {
  const productLinks = CATEGORIES.filter((cat) => cat.id !== 'all');

  return (
    <footer className="bg-[#002bb8] text-white pt-16 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/20">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-xl font-black tracking-[0.2em] uppercase text-white"
            >
              BURTEMİS
            </button>
            <p className="text-xs sm:text-sm text-white/80 font-light max-w-sm leading-relaxed">
              Profesyonel hijyen ve temizlik çözümleri. Yerli üretim, TSE &amp; bakanlık onaylı ürünlerle kurumsal ve bireysel ihtiyaçlara hizmet veriyoruz.
            </p>
            <div className="pt-2 flex items-center gap-4 text-white/80">
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
            </div>
          </div>

          {/* Ürünler */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              Ürünler
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                  Tüm Ürünler
                </button>
              </li>
              {productLinks.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sayfalar */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              Sayfalar
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('urunler')} className="hover:text-white transition-colors">
                  Ürün Kataloğu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kurumsal')} className="hover:text-white transition-colors">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standartlar')} className="hover:text-white transition-colors">
                  Standartlar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('yorumlar')} className="hover:text-white transition-colors">
                  Yorumlar
                </button>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              İletişim
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Bize Ulaşın
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Kurumsal Fiyat Teklifi
                </button>
              </li>
              <li>
                <a href="tel:+908503000000" className="hover:text-white transition-colors">
                  0850 300 00 00
                </a>
              </li>
              <li>
                <a href="mailto:teklif@burtemis.com.tr" className="hover:text-white transition-colors">
                  teklif@burtemis.com.tr
                </a>
              </li>
              <li className="text-white/60 leading-relaxed pt-1">
                Organize Sanayi Bölgesi,<br />İstanbul &amp; Bursa Depoları
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-wider text-white/80">
            <span className="px-2.5 py-1 rounded-full border border-white/30">Yerli Üretim</span>
            <span className="px-2.5 py-1 rounded-full border border-white/30">TSE &amp; Bakanlık Onaylı</span>
            <span className="px-2.5 py-1 rounded-full border border-white/30">Sıfır Atık</span>
          </div>
          <div>
            <span>© 2026 Burtemis Hijyen A.Ş. Tüm hakları saklıdır.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
