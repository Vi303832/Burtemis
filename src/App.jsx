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
import ProductCatalog from './components/ProductCatalog';

import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import QuoteDrawer from './components/QuoteDrawer';
import CatalogModal from './components/CatalogModal';
import { MessageCircle, Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState([
    {
      id: 'feat-01',
      name: 'Temizlik Başlangıç Kiti (3 Şişe + 3 Tablet)',
      category: 'kimyasal',
      categoryLabel: 'Yüzey Temizlik',
      volumeSize: '3 x 500 ML',
      packaging: '3 Cam Şişe + 3 Konsantre Çözünür Tablet',
      quantity: 1
    },
    {
      id: 'feat-03',
      name: 'Eko Bulaşık Makinesi Tableti & Teneke Kutu',
      category: 'bulasik',
      categoryLabel: 'Bulaşık Grubu',
      volumeSize: '60 Tablet',
      packaging: '1 Adet Mat Teneke Kutu / 60 Tablet',
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

  const handleNavigate = (sectionId) => {
    setCurrentSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    const catalogElem = document.getElementById('urunler');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalQuoteCount = quoteItems.reduce((acc, curr) => acc + (curr.quantity || 1), 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1829] font-sans antialiased selection:bg-[#bad5ff] selection:text-[#0025a6]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#0c1a3a] text-white text-xs font-bold shadow-2xl border border-blue-900 animate-slideUp">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Announcement Bar & Navigations */}
      <Header
        quoteItemsCount={totalQuoteCount}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Flow Matching Blueland 1:1 */}
      <main className="flex-1">
        
        {/* 2. Hero Section: Cinematic Ocean Coast */}
        <section id="hero">
          <Hero
            onExploreProducts={() => handleNavigate('urunler')}
            onOpenQuoteAction={() => setIsQuoteDrawerOpen(true)}
          />
        </section>

        {/* 3. Shop by Category Showcase */}
        <CategoryShowcase 
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. 4,000,000+ Homes Have Made the Switch (Key Metrics & Pillars) */}
        <ValueProps />

        {/* 5. Featured Products (Carousel of Best Sellers) */}
        <FeaturedProducts 
          onAddToQuote={handleAddToQuote}
          onViewDetail={(prod) => setSelectedProduct(prod)}
          onShopAll={() => handleNavigate('urunler')}
        />

        {/* 6. Press & Media Bar (Fast Company, NYT, Vogue, Forbes, Bloomberg) */}
        <PressSection />

        {/* 7. Editorial Lifestyle Banner ("A Clean The Whole Planet Can Feel") */}
        <EditorialFeature 
          onLearnMore={() => handleNavigate('kurumsal')}
        />

        {/* 8. Cobalt Blue Testimonials ("100,000+ 5-Star Reviews and Counting") */}
        <ReviewsSection />



        {/* 11. Good Clean Fun (4-Square Instagram Grid) */}
        <CommunityGrid />

        {/* 12. Call to Action Banner ("Start Your Journey") */}
        <StartJourneyCTA 
          onGetStarted={() => handleNavigate('urunler')}
        />

        {/* 13. Comprehensive Product Catalog & Filter System */}
        <ProductCatalog
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToQuote={handleAddToQuote}
          onViewProductDetail={(prod) => setSelectedProduct(prod)}
          quoteItems={quoteItems}
        />



        {/* 15. Blog & Educational Cleaning Guides */}
        <BlogSection />

        {/* 16. Contact & Quick Quote Form */}
        <ContactSection />

      </main>

      {/* 17. Deep Cobalt Blue Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

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
        {/* Floating Cart Trigger with badge */}
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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/905321112233?text=Merhaba%20Burtemis,%20ürünleriniz%20ve%20kurumsal%20fiyatlar%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          title="WhatsApp İle Danışın"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

    </div>
  );
}
