import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Check, 
  MessageCircle, 
  Info, 
  Package, 
  ShieldCheck, 
  SlidersHorizontal,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function ProductCatalog({ 
  activeCategory, 
  onSelectCategory, 
  onAddToQuote, 
  onViewProductDetail,
  quoteItems = []
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubFilter, setSelectedSubFilter] = useState('all');
  const [sortOption, setSortOption] = useState('popular');
  const [addedItemAnimation, setAddedItemAnimation] = useState(null);

  // Extract unique subcategories/volumes for quick filter pills
  const availableSubFilters = useMemo(() => {
    const filters = new Set();
    const targetProducts = activeCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === activeCategory);
    
    targetProducts.forEach(p => {
      if (p.volumeSize) filters.add(p.volumeSize);
    });
    return Array.from(filters);
  }, [activeCategory]);

  // Filtered & searched products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      
      // Sub filter match (e.g. Volume/Size)
      const matchesSubFilter = selectedSubFilter === 'all' || product.volumeSize === selectedSubFilter;
      
      // Search query match (Title, subCategory, features, packaging)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || (
        product.name.toLowerCase().includes(query) ||
        product.subCategory.toLowerCase().includes(query) ||
        product.packaging.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query) ||
        product.features.some(f => f.toLowerCase().includes(query))
      );

      return matchesCategory && matchesSubFilter && matchesSearch;
    });
  }, [activeCategory, selectedSubFilter, searchQuery]);

  const handleAddClick = (product, e) => {
    e.stopPropagation();
    onAddToQuote(product);
    setAddedItemAnimation(product.id);
    setTimeout(() => {
      setAddedItemAnimation(null);
    }, 1200);
  };

  const getWhatsAppLink = (productName) => {
    const text = encodeURIComponent(`Merhaba, Burtemis ${productName} hakkında toptan kurumsal fiyat teklifi almak istiyorum.`);
    return `https://wa.me/905321112233?text=${text}`;
  };

  const isItemInQuote = (productId) => {
    return quoteItems.some(item => item.id === productId);
  };

  return (
    <section id="urunler" className="py-16 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Burtemis Ürün Kataloğu & Teknik Şartnameler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
            Endüstriyel Ürünlerimiz
          </h2>
          <p className="mt-2 text-textMuted text-sm sm:text-base max-w-2xl">
            Tüm ürünlerimizde B2B toptan fiyat teklifi esastır. Kartlardan doğrudan teklif sepetinize ekleyebilir veya WhatsApp üzerinden tek tıkla özel fiyat talep edebilirsiniz.
          </p>
        </div>

        {/* Layout: Sidebar Filter (Desktop) + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-6">
            
            {/* Search Box */}
            <div className="bg-white p-4 rounded-2xl border border-borderSubtle/80 shadow-xs">
              <label className="block text-xs font-bold uppercase tracking-wider text-textMuted mb-2">
                Hızlı Ürün Arama
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ürün adı, koli, hacim..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500 text-textDark placeholder:text-textMuted/60"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-textMuted hover:text-textDark bg-surface-container px-1.5 py-0.5 rounded"
                  >
                    Temizle
                  </button>
                )}
              </div>
            </div>

            {/* Category Navigation List */}
            <div className="bg-white p-4 rounded-2xl border border-borderSubtle/80 shadow-xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-borderSubtle/50">
                <span className="text-xs font-bold uppercase tracking-wider text-textMuted">
                  Kategoriler
                </span>
                <span className="text-[11px] font-semibold text-brand-600">
                  {CATEGORIES.length - 1} Kategori
                </span>
              </div>

              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setSelectedSubFilter('all');
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'text-textDark hover:bg-surface-low'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-surface-container text-textMuted'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub Filter: Hacim & Ambalaj Boyutu */}
            {availableSubFilters.length > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-borderSubtle/80 shadow-xs">
                <span className="block text-xs font-bold uppercase tracking-wider text-textMuted mb-3 pb-2 border-b border-borderSubtle/50">
                  Ambalaj & Hacim Filtresi
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedSubFilter('all')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      selectedSubFilter === 'all'
                        ? 'bg-brand-900 text-white'
                        : 'bg-surface-low text-textDark hover:bg-surface-container'
                    }`}
                  >
                    Tümü
                  </button>
                  {availableSubFilters.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSubFilter(sub)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        selectedSubFilter === sub
                          ? 'bg-brand-600 text-white'
                          : 'bg-surface-low text-textDark hover:bg-surface-container'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick B2B Info Box */}
            <div className="bg-gradient-to-br from-brand-900 to-brand-800 text-white p-5 rounded-2xl shadow-sm text-left space-y-3">
              <div className="flex items-center gap-2 text-brand-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>B2B Toptan Sipariş</span>
              </div>
              <p className="text-xs text-brand-100/90 leading-relaxed">
                İhaleler, kamu kurumları ve fabrikalar için koli bazlı toplu alımlarda özel iskonto ve vadeli ödeme seçenekleri sunulmaktadır.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+902120000000"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-200"
                >
                  <span>Müşteri Temsilcisi: 0850 300 00 00</span>
                </a>
              </div>
            </div>

          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar: Found count + Active filters summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-borderSubtle/80 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-brand-900">
                  {filteredProducts.length} Ürün Listeleniyor
                </span>
                {activeCategory !== 'all' && (
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                    {CATEGORIES.find(c => c.id === activeCategory)?.name}
                  </span>
                )}
                {selectedSubFilter !== 'all' && (
                  <span className="text-xs font-medium text-accentOrange bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {selectedSubFilter}
                  </span>
                )}
              </div>

              {/* Status info */}
              <div className="text-xs text-textMuted flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Tüm ürünler anında sevkiyata hazırdır</span>
              </div>
            </div>

            {/* Products Card Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-borderSubtle p-8 space-y-3">
                <Package className="w-12 h-12 text-textMuted/40 mx-auto" />
                <h3 className="text-base font-bold text-brand-900">Aradığınız kriterlere uygun ürün bulunamadı</h3>
                <p className="text-xs text-textMuted">Lütfen arama terimini değiştirin veya kategori filtresini sıfırlayın.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory('all');
                    setSelectedSubFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors"
                >
                  Filtreleri Sıfırla
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const inQuote = isItemInQuote(product.id);
                  const isJustAdded = addedItemAnimation === product.id;

                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col justify-between rounded-2xl bg-white border border-borderSubtle/80 hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 overflow-hidden text-left"
                    >
                      {/* Product Header / Visual Preview Header */}
                      <div className="relative p-5 pb-3">
                        
                        {/* Top Badges */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full shadow-xs ${product.badgeColor || 'bg-brand-600'}`}>
                            {product.badge}
                          </span>
                          <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                            {product.volumeSize}
                          </span>
                        </div>

                        {/* Visual Icon Presentation Box */}
                        <div 
                          onClick={() => onViewProductDetail(product)}
                          className="h-32 rounded-xl bg-gradient-to-b from-surface-low to-surface-container flex flex-col items-center justify-center p-4 cursor-pointer relative overflow-hidden group-hover:from-brand-50 group-hover:to-brand-100/50 transition-colors"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                            {product.category === 'kimyasal' && <span className="text-2xl">🧴</span>}
                            {product.category === 'kagit' && <span className="text-2xl">🧻</span>}
                            {product.category === 'ambalaj' && <span className="text-2xl">☕</span>}
                            {product.category === 'cop-torbasi' && <span className="text-2xl">🗑️</span>}
                            {product.category === 'gerec' && <span className="text-2xl">🧹</span>}
                          </div>
                          <span className="text-[11px] font-semibold text-textMuted mt-2 group-hover:text-brand-700 transition-colors">
                            {product.subCategory}
                          </span>
                          
                          {/* Quick Spec Overlay button */}
                          <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1 backdrop-blur-xs">
                            <Info className="w-4 h-4" />
                            <span>Teknik Şartnameyi Aç</span>
                          </div>
                        </div>

                        {/* Title & Packaging */}
                        <div className="mt-4">
                          <h3 
                            onClick={() => onViewProductDetail(product)}
                            className="text-sm font-bold text-brand-900 hover:text-brand-600 transition-colors cursor-pointer line-clamp-2 min-h-[2.5rem]"
                            title={product.name}
                          >
                            {product.name}
                          </h3>

                          {/* Packaging info highlight (as requested by user) */}
                          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-textDark bg-surface-low px-2.5 py-1.5 rounded-lg border border-borderSubtle/60">
                            <Package className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                            <span className="font-semibold truncate">{product.packaging}</span>
                          </div>

                          <p className="mt-2 text-xs text-textMuted line-clamp-2 leading-relaxed">
                            {product.shortDesc}
                          </p>
                        </div>

                      </div>

                      {/* Technical Features Mini List */}
                      <div className="px-5 py-2 border-t border-borderSubtle/40 bg-surface-low/30">
                        <div className="space-y-1">
                          {product.features.slice(0, 2).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-textMuted">
                              <span className="w-1 h-1 rounded-full bg-brand-500"></span>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons: Dual CTA (Teklife Ekle + WhatsApp Teklifi) */}
                      <div className="p-4 pt-3 border-t border-borderSubtle/60 bg-white space-y-2">
                        
                        {/* Primary Button: Teklif Listeme Ekle */}
                        <button
                          onClick={(e) => handleAddClick(product, e)}
                          className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-sm ${
                            isJustAdded
                              ? 'bg-emerald-600 text-white scale-[1.02]'
                              : inQuote
                              ? 'bg-brand-50 text-brand-700 border border-brand-300 hover:bg-brand-100'
                              : 'bg-brand-600 text-white hover:bg-brand-700 active:scale-95'
                          }`}
                          id={`add-quote-${product.id}`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-4 h-4 text-white" />
                              <span>Sepete Eklendi!</span>
                            </>
                          ) : inQuote ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span>Listede Var (Tekrar Ekle +)</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              <span>Teklif Listeme Ekle</span>
                            </>
                          )}
                        </button>

                        {/* Secondary Button: Hızlı WhatsApp Teklifi */}
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={getWhatsAppLink(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl border border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100/80 text-emerald-800 text-[11px] font-bold transition-colors"
                            title="WhatsApp'tan Hızlı Fiyat Sor"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">WhatsApp Teklif</span>
                          </a>

                          <button
                            onClick={() => onViewProductDetail(product)}
                            className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl border border-borderSubtle bg-surface-low hover:bg-surface-container text-textDark text-[11px] font-semibold transition-colors"
                          >
                            <Info className="w-3.5 h-3.5 text-textMuted" />
                            <span>Özellikler</span>
                          </button>
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </main>

        </div>

      </div>
    </section>
  );
}
