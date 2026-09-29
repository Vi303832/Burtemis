import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Menu, 
  X
} from 'lucide-react';

export default function Header({ 
  quoteItemsCount, 
  onOpenQuoteDrawer, 
  onOpenCatalogModal,
  currentSection,
  onNavigate,
  onSelectCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subLinksLeft = [
    { label: 'Ürün Kataloğu', target: 'urunler' },
    { label: 'Hakkımızda', target: 'kurumsal' },
    { label: 'Yorumlar', target: 'yorumlar' }
  ];

  const subLinksRight = [
    { label: 'Kurumsal Fiyat Teklifi', target: 'iletisim' }
  ];

  const categoriesNav = [
    { id: 'all', label: 'Tüm Ürünler' },
    { id: 'kimyasal', label: 'Temizlik Kimyasalları' },
    { id: 'kagit', label: 'Kağıt & Mutfak' },
    { id: 'ambalaj', label: 'Bardak & Ambalaj' },
    { id: 'cop-torbasi', label: 'Çöp Torbaları' },
    { id: 'gerec', label: 'Temizlik Gereçleri' }
  ];

  const handleNavClick = (target) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      onNavigate('urunler');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs font-sans">
      
      {/* 1. Announcement Bar */}
      <div className="bg-[#0038e3] text-white text-[11px] sm:text-[12px] font-medium tracking-wide py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="font-semibold">Tertemiz Bir Dünya İçin Kalite ve Hijyen Kapınızda</span>
          <span className="opacity-40 hidden sm:inline">•</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold">7 Gün 10:00 – 21:00</span>
          <span className="opacity-40 hidden sm:inline">•</span>
          <a
            href="https://wa.me/905394059286?text=Merhaba,%20kurumsal%20fiyat%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold underline hover:text-emerald-300 transition-colors"
          >
            WhatsApp Teklif: 0539 405 92 86
          </a>
        </div>
      </div>

      {/* 2. Top Header Utility Bar */}
      <div className="border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 sm:h-20">
            
            {/* Left Utility Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700 z-10">
              {subLinksLeft.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.target)}
                  className="hover:text-[#0038e3] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center z-10">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-800 hover:text-[#0038e3]"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo - Centered */}
            <div 
              onClick={() => handleNavClick('hero')} 
              className="absolute left-1/2 -translate-x-1/2 flex items-center cursor-pointer select-none py-1"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-[#0038e3] uppercase transition-transform hover:scale-[1.02]">
                BURTEMİS
              </span>
            </div>

            {/* Right Utility Actions */}
            <div className="flex items-center gap-4 sm:gap-6 text-[13px] font-medium text-gray-700 z-10 ml-auto">
              <div className="hidden md:flex items-center gap-6">
                {subLinksRight.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.target)}
                    className="hover:text-[#0038e3] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Cart / Quote Basket Trigger */}
              <button
                onClick={onOpenQuoteDrawer}
                className="relative p-2 text-gray-900 hover:text-[#0038e3] transition-colors flex items-center gap-1.5"
                title="Sepet / Teklif Sepeti"
              >
                <ShoppingCart className="w-5 h-5" />
                {quoteItemsCount > 0 && (
                  <span className="min-w-[20px] h-[20px] px-1 bg-[#0038e3] text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-xs">
                    {quoteItemsCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar (Categories - Desktop) */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-7 py-3 text-[13px] font-semibold text-gray-800 tracking-wide">
            {categoriesNav.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="relative hover:text-[#0038e3] transition-colors py-1 flex items-center gap-1 group"
              >
                <span>{cat.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0038e3] transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
          <div className="space-y-2 border-b border-gray-100 pb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Menü</p>
            {subLinksLeft.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-[#0038e3]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('iletisim')}
              className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-[#0038e3]"
            >
              Kurumsal Fiyat Teklifi
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Kategoriler</p>
            {categoriesNav.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-[#0038e3]"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}
