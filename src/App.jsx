import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import ValueProps from './components/ValueProps';
import FeaturedProducts from './components/FeaturedProducts';
import PressSection from './components/PressSection';
import EditorialFeature from './components/EditorialFeature';
import ReviewsSection from './components/ReviewsSection';
import CommunityGrid from './components/CommunityGrid';
import StartJourneyCTA from './components/StartJourneyCTA';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import QuoteDrawer from './components/QuoteDrawer';
import CatalogModal from './components/CatalogModal';
import { MessageCircle, Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'catalog' | 'about' | 'contact'
  const [currentSection, setCurrentSection] = useState('hero');
  const [aboutScrollTarget, setAboutScrollTarget] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState([
    {
      id: 'kim-04',
      name: '30 LT YÜZEY TEMİZLEYİCİ',
      category: 'kimyasal',
      categoryLabel: 'Temizlik Kimyasalları',
      volumeSize: '30 LT',
      packaging: 'Toptan tedarik',
      quantity: 1
    },
    {
      id: 'kag-01',
      name: 'Z KATLAMA HAVLU 12X200 YAPRAK',
      category: 'kagit',
      categoryLabel: 'Kağıt & Mutfak Kullan-At',
      volumeSize: '12X200 YAPRAK',
      packaging: 'Toptan tedarik',
      quantity: 2
    }
  ]);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToQuote = (product, qty = 1) => {
    setQuoteItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + qty }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
    showToast(`"${product.name}" sepetinize eklendi!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    setQuoteItems((prev) => 
      prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item)
    );
  };

  const handleRemoveItem = (productId) => {
    setQuoteItems((prev) => prev.filter(item => item.id !== productId));
    showToast('Ürün sepetten çıkarıldı.');
  };

  const handleClearCart = () => {
    setQuoteItems([]);
  };

  const goHome = () => {
    setCurrentPage('home');
    setAboutScrollTarget(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId) => {
    if (sectionId === 'urunler') {
      setCurrentPage('catalog');
      setAboutScrollTarget(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'kurumsal' || sectionId === 'standartlar') {
      setCurrentPage('about');
      setAboutScrollTarget(sectionId === 'standartlar' ? 'standartlar' : null);
      setCurrentSection('kurumsal');
      return;
    }
    if (sectionId === 'iletisim') {
      setCurrentPage('contact');
      setAboutScrollTarget(null);
      setCurrentSection('iletisim');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage('home');
    setAboutScrollTarget(null);
    setCurrentSection(sectionId);
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setCurrentPage('catalog');
    setAboutScrollTarget(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalQuoteCount = quoteItems.reduce((acc, curr) => acc + (curr.quantity || 1), 0);

  // ── Shared overlays (shown on both pages) ──────────────────────────────
  const sharedOverlays = (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#0c1a3a] text-white text-xs font-bold shadow-2xl border border-blue-900 animate-slideUp">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
        />
      )}

      {/* Slide-out Quote / Cart Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Catalog Download Modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />

      {/* Floating Action Buttons: WhatsApp & Quick Cart */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setIsQuoteDrawerOpen(true)}
          className="relative w-13 h-13 p-3.5 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          title="Sepet / Teklif Sepetini Aç"
        >
          <ShoppingBag className="w-6 h-6" />
          {totalQuoteCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 bg-amber-400 text-[#0c1a30] text-xs font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              {totalQuoteCount}
            </span>
          )}
        </button>
        <a
          href="https://wa.me/905394059286?text=Merhaba%20Burtemis,%20ürünleriniz%20ve%20kurumsal%20fiyatlar%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          title="WhatsApp İle Danışın"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </>
  );

  // ── Catalog Page ──────────────────────────────────────────────────────
  if (currentPage === 'catalog') {
    return (
      <>
        <CatalogPage
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToQuote={handleAddToQuote}
          onViewProductDetail={(prod) => setSelectedProduct(prod)}
          quoteItems={quoteItems}
          quoteItemsCount={totalQuoteCount}
          onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
          onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          onNavigate={handleNavigate}
          onGoHome={goHome}
        />
        {sharedOverlays}
      </>
    );
  }

  // ── About / Hakkımızda Page ───────────────────────────────────────────
  if (currentPage === 'about') {
    return (
      <>
        <AboutPage
          quoteItemsCount={totalQuoteCount}
          onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
          onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          onNavigate={handleNavigate}
          onSelectCategory={handleSelectCategory}
          onGoHome={goHome}
          scrollToSection={aboutScrollTarget}
        />
        {sharedOverlays}
      </>
    );
  }

  // ── Contact / İletişim Page ───────────────────────────────────────────
  if (currentPage === 'contact') {
    return (
      <>
        <ContactPage
          quoteItemsCount={totalQuoteCount}
          onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
          onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          onNavigate={handleNavigate}
          onSelectCategory={handleSelectCategory}
          onGoHome={goHome}
        />
        {sharedOverlays}
      </>
    );
  }

  // ── Home Page ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1829] font-sans antialiased selection:bg-[#bad5ff] selection:text-[#0025a6]">

      {/* 1. Header */}
      <Header
        quoteItemsCount={totalQuoteCount}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* 2. Hero */}
        <section id="hero">
          <Hero
            onExploreProducts={() => handleNavigate('urunler')}
            onOpenQuoteAction={() => setIsQuoteDrawerOpen(true)}
          />
        </section>

        {/* 3. Category Showcase */}
        <CategoryShowcase onSelectCategory={handleSelectCategory} />

        {/* 4. Value Props */}
        <ValueProps />

        {/* 5. Featured Products */}
        <FeaturedProducts
          onAddToQuote={handleAddToQuote}
          onViewDetail={(prod) => setSelectedProduct(prod)}
          onShopAll={() => handleNavigate('urunler')}
        />

        {/* 6. Press */}
        <PressSection />

        {/* 7. Editorial */}
        <EditorialFeature onLearnMore={() => handleNavigate('kurumsal')} />

        {/* 8. Reviews */}
        <ReviewsSection />

        {/* 9. Community Grid */}
        <CommunityGrid />

        {/* 10. CTA */}
        <StartJourneyCTA onGetStarted={() => handleNavigate('urunler')} />

        {/* 11. Blog */}
        <BlogSection />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {sharedOverlays}
    </div>
  );
}
