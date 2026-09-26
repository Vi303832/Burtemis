import React from 'react';
import Header from './Header';
import ProductCatalog from './ProductCatalog';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';

export default function CatalogPage({
  activeCategory,
  onSelectCategory,
  onAddToQuote,
  onViewProductDetail,
  quoteItems,
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenCatalogModal,
  onNavigate,
  onGoHome,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1829] font-sans antialiased selection:bg-[#bad5ff] selection:text-[#0025a6]">

      {/* Header */}
      <Header
        quoteItemsCount={quoteItemsCount}
        onOpenQuoteDrawer={onOpenQuoteDrawer}
        onOpenCatalogModal={onOpenCatalogModal}
        currentSection="urunler"
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />

      <main className="flex-1">
        {/* Breadcrumb / Back Navigation */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
            <button
              onClick={onGoHome}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#0038e3] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Ana Sayfa
            </button>
            <span className="text-gray-300 text-xs">/</span>
            <span className="text-xs font-semibold text-gray-900">Ürün Kataloğu</span>
          </div>
        </div>

        {/* Product Catalog Section */}
        <ProductCatalog
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
          onAddToQuote={onAddToQuote}
          onViewProductDetail={onViewProductDetail}
          quoteItems={quoteItems}
        />
      </main>

      <Footer
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
}
