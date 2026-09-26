import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Globe,
  ShieldCheck
} from 'lucide-react';

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
  if (type === 'twitter') {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
  }
  if (type === 'facebook') {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#002bb8] text-white pt-16 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/20">
          
          {/* Left Column: Newsletter & Social (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif sm:font-sans font-normal text-white tracking-tight">
              İlk Siparişinizde %15 İndirim Kazanın
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light max-w-sm leading-relaxed">
              Çevre dostu temizlik ipuçları, yeni ürün lansmanları ve özel kurumsal indirimler için bültenimize katılın.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-white/10 rounded-full border border-white/30 text-xs font-semibold text-white">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Teşekkürler! %15 indirim kuponunuz e-postanıza gönderildi.</span>
                </div>
              ) : (
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresinizi girin"
                    className="w-full pl-5 pr-14 py-3 rounded-full bg-white/10 border border-white/40 focus:border-white focus:outline-hidden text-xs sm:text-sm text-white placeholder-white/60 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-9 h-9 rounded-full bg-white text-[#002bb8] flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                    aria-label="Abone Ol"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-4 text-white/80">
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Twitter">
                <SocialIcon type="twitter" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
            </div>
          </div>

          {/* Links Column 1: ÜRÜNLER (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              ÜRÜNLER
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                  Tüm Ürünler
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kimyasal')} className="hover:text-white transition-colors">
                  Yüzey & Zemin
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bulasik')} className="hover:text-white transition-colors">
                  Bulaşık & Mutfak
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('sabun')} className="hover:text-white transition-colors">
                  Köpük El Sabunu
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kagit')} className="hover:text-white transition-colors">
                  Endüstriyel Kağıt
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                  Başlangıç Setleri
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: HAKKIMIZDA (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              HAKKIMIZDA
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate('kurumsal')} className="hover:text-white transition-colors">
                  Hikayemiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standartlar')} className="hover:text-white transition-colors">
                  Sürdürülebilirlik
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standartlar')} className="hover:text-white transition-colors">
                  Sertifikalarımız
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kurumsal')} className="hover:text-white transition-colors">
                  Basında Biz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Temizlik Rehberi & Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: DESTEK (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
              MÜŞTERİ DESTEK
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Sipariş Takibi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  İade ve Garanti Politikası
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Kurumsal Satış & Toptan Teklif
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Sıkça Sorulan Sorular (SSS)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors">
                  Bize Ulaşın
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          
          {/* Country / Currency */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white/80" />
            <span className="font-medium text-white/90">Türkiye (₺ TRY)</span>
          </div>

          {/* Certification Logos / Badges */}
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-white/80">
            <span className="px-2.5 py-1 rounded-full border border-white/30">B-CORP</span>
            <span className="px-2.5 py-1 rounded-full border border-white/30">LEAPING BUNNY</span>
            <span className="px-2.5 py-1 rounded-full border border-white/30">CLIMATE NEUTRAL</span>
          </div>

          {/* Copyright */}
          <div>
            <span>© 2026 Burtemis Hijyen A.Ş. Tüm hakları saklıdır.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
