import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
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
  const [searchOpen, setSearchOpen] = useState(false);

  const subLinksLeft = [
    { label: 'Hakkımızda', target: 'kurumsal' },
    { label: 'Yorumlar', target: 'yorumlar' },
    { label: 'Etkimiz', target: 'standartlar' }
  ];

  const subLinksRight = [
    { label: 'Sipariş Takibi', target: 'iletisim' },
    { label: 'Kurumsal Teklif', target: 'iletisim' }
  ];

  const categoriesNav = [
    { id: 'all', label: 'Tüm Ürünler' },
    { id: 'kimyasal', label: 'Konsantre Temizlik' },
    { id: 'kagit', label: 'Kağıt & Havlu' },
    { id: 'bulasik', label: 'Bulaşık & Mutfak' },
    { id: 'sabun', label: 'Köpük El Sabunu' },
    { id: 'cop-torbasi', label: 'Çöp Torbaları' },
    { id: 'gerec', label: 'Dozaj & Aparat' },
    { id: 'setler', label: 'Başlangıç Setleri' },
    { id: 'indirim', label: 'Kampanyalar', badge: 'Yeni' }
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
      
      {/* 1. Announcement Bar (Iconic Electric Cobalt Blue) */}
      <div className="bg-[#0038e3] text-white text-[12px] sm:text-[13px] font-semibold tracking-wide py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>500 TL Üzeri Siparişlerde Ücretsiz Kargo</span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="hidden sm:inline">%100 Koşulsuz Memnuniyet & İade Garantisi</span>
        </div>
      </div>

      {/* 2. Top Header Utility Bar (Links, Logo, Actions) */}
      <div className="border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left Utility Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700">
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
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-800 hover:text-[#0038e3]"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo - Bold Modern Electric Blue Typography */}
            <div 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center gap-2 cursor-pointer select-none py-1"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-[#0038e3] uppercase transition-transform hover:scale-[1.02]">
                  BURTEMİS
                </span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase -mt-0.5">
                  ECO-CLEAN SOLUTIONS
                </span>
              </div>
            </div>

            {/* Right Utility Actions */}
            <div className="flex items-center gap-4 sm:gap-6 text-[13px] font-medium text-gray-700">
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

              {/* Search Toggle */}
              <button 
                onClick={() => handleNavClick('urunler')}
                className="p-2 text-gray-700 hover:text-[#0038e3] transition-colors"
                title="Ürün Ara"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account / B2B Login button */}
              <button 
                onClick={() => handleNavClick('kurumsal')}
                className="p-2 text-gray-700 hover:text-[#0038e3] transition-colors hidden sm:block"
                title="Kurumsal Giriş"
              >
                <User className="w-5 h-5" />
              </button>

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

      {/* 3. Main Navigation Bar (Clean Categories Row - Desktop) */}
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
                {cat.badge && (
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 bg-blue-50 text-[#0038e3] rounded-full border border-blue-200">
                    {cat.badge}
                  </span>
                )}
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

          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Hızlı Bağlantılar</p>
            <button
              onClick={() => handleNavClick('kurumsal')}
              className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-[#0038e3]"
            >
              Kurumsal & B2B Çözümler
            </button>
            <button
              onClick={() => handleNavClick('yorumlar')}
              className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-[#0038e3]"
            >
              Müşteri Değerlendirmeleri
            </button>
            <button
              onClick={() => handleNavClick('standartlar')}
              className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-[#0038e3]"
            >
              Kalite & Sürdürülebilirlik Standartları
            </button>
            <button
              onClick={() => handleNavClick('iletisim')}
              className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-[#0038e3]"
            >
              İletişim & Teklif Formu
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
